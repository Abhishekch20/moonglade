import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";
import { handleContactRequest } from "./api/contact-handler";

const maxRequestBytes = 16 * 1024;

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");

  Object.assign(process.env, env);

  return {
    server: {
      host: "::",
      port: 8080,
    },
    plugins: [
      react(),
      mode === "development" && componentTagger(),
      {
        name: "contact-api-dev-middleware",
        configureServer(server) {
          server.middlewares.use("/api/contact", (req, res, next) => {
            if (req.method !== "POST") {
              next();
              return;
            }

            let rawBody = "";
            let receivedBytes = 0;
            let requestTooLarge = false;

            req.on("data", (chunk) => {
              receivedBytes += chunk.length;

              if (receivedBytes > maxRequestBytes) {
                requestTooLarge = true;
                res.statusCode = 413;
                res.setHeader("Content-Type", "application/json");
                res.end(JSON.stringify({ error: "Request body is too large." }));
                req.destroy();
                return;
              }

              rawBody += chunk;
            });

            req.on("end", async () => {
              if (requestTooLarge) {
                return;
              }

              let payload = undefined;

              try {
                payload = rawBody ? JSON.parse(rawBody) : undefined;
              } catch {
                res.statusCode = 400;
                res.setHeader("Content-Type", "application/json");
                res.end(JSON.stringify({ error: "Invalid JSON body." }));
                return;
              }

              const result = await handleContactRequest(req.method, payload);

              if (result.status === 405) {
                res.setHeader("Allow", "POST");
              }

              res.statusCode = result.status;
              res.setHeader("Content-Type", "application/json");
              res.end(JSON.stringify(result.body));
            });
          });
        },
      },
    ].filter(Boolean),
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
    },
  };
});
