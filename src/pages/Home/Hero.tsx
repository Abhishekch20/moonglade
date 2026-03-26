import { RotatingText } from "./RotatingText";
import { motion } from "framer-motion";
import zues from "@/assets/ZEUS-idle1.gif";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

/* -------------------------------
   Animation Variants
-------------------------------- */
const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const slideLeft = {
  hidden: { opacity: 0, x: -60 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6 },
  },
};

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-24 lg:pt-0 overflow-hidden bg-black">

      {/* Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_50%,hsl(270_60%_15%/0.4)_0%,transparent_60%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_80%_20%,hsl(280_70%_12%/0.3)_0%,transparent_50%)]" />

      {/* Subtle Grid */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `linear-gradient(hsl(270 60% 50%) 1px, transparent 1px),
                            linear-gradient(90deg, hsl(270 60% 50%) 1px, transparent 1px)`,
          backgroundSize: "40px 40px",
        }}
      />

      <div className="container mx-auto px-6 lg:px-12 relative z-10 w-full pt-20 lg:pt-14">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center min-h-[80vh]">

          {/* ---------------- TEXT SECTION ---------------- */}
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="space-y-8"
          >
            <motion.h1
              variants={slideLeft}
              className="font-display text-6xl sm:text-6xl lg:text-6xl xl:text-7xl font-semibold text-foreground"
            >
              Creating
            </motion.h1>

            <motion.div variants={slideLeft}>
              <RotatingText />
            </motion.div>

            <motion.h2
              variants={slideLeft}
              className="font-display text-4xl sm:text-4xl lg:text-5xl font-medium text-foreground"
            >
              For Over{" "}
              <span className="gradient-text text-purple-600">
                10 Years
              </span>{" "}
              Now
            </motion.h2>

            <motion.p
              variants={slideLeft}
              className="text-muted-foreground text-lg sm:text-lg lg:text-xl max-w-xl leading-relaxed"
            >
              Moonglade Atelier is a leading game art outsourcing studio
              specializing in slot game art, 2D game assets, character design,
              and animation services for global game developers.
            </motion.p>

            <motion.div variants={slideLeft}>
              <Link to="/portfolio">
                <Button
                  variant="slanted"
                  size="lg"
                  className="group tracking-widest mb-10 lg:mb-0 font-heading text-lg rounded-none w-[170px]"
                >
                  View Portfolio
                </Button>
              </Link>
            </motion.div>
          </motion.div>

          {/* ---------------- GIF SECTION ---------------- */}
          <div className="flex justify-center items-center ml-24">
            <motion.div
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6 }}
              className="relative flex justify-center items-center w-full"
            >
              {/* Glow */}
              <div className="
                absolute
                w-[500px]
                h-[500px]
                bg-purple-600/20
                blur-3xl
                rounded-full
              " />

              {/* GIF */}
              <motion.img
                src={zues}
                alt="Zeus Idle Animation"
                loading="eager"
                fetchPriority="high"
                decoding="async"
                className="
                  relative
                  w-full
                  py-14
                  max-w-[380px]
                  sm:max-w-[420px]
                  lg:max-w-[500px]
                  h-auto
                  object-contain
                  select-none
                  pointer-events-none
                  
                "
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
              />
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
