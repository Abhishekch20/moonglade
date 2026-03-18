import { handleContactRequest, type ContactPayload } from "./contact-handler";

type VercelRequest = {
  method?: string;
  body?: ContactPayload;
};

type VercelResponse = {
  status: (code: number) => VercelResponse;
  json: (body: Record<string, unknown>) => void;
  setHeader: (name: string, value: string) => void;
};

export default async function handler(req: VercelRequest, res: VercelResponse) {
  res.setHeader("Content-Type", "application/json");

  const result = await handleContactRequest(req.method, req.body);

  if (result.status === 405) {
    res.setHeader("Allow", "POST");
  }

  return res.status(result.status).json(result.body);
}
