import { motion } from "framer-motion";
import { useRef, useState, type FormEvent } from "react";
import bgImage from "@/assets/contact_us_bg.svg";
import chestImg from "@/assets/Treasurechest.webp";
import { Button } from "@/components/ui/button";
import { submitContactForm } from "@/lib/contactForm";

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

type FlyData = {
  startX: number;
  startY: number;
  endX: number;
  endY: number;
};

type SubmissionState = {
  type: "success" | "error";
  message: string;
} | null;

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function ContactUS() {
  const [email, setEmail] = useState("");
  const [isAnimating, setIsAnimating] = useState(false);
  const [flyData, setFlyData] = useState<FlyData | null>(null);
  const [flyingEmail, setFlyingEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionState, setSubmissionState] = useState<SubmissionState>(null);

  const inputRef = useRef<HTMLInputElement | null>(null);
  const chestRef = useRef<HTMLImageElement | null>(null);

  const startChestAnimation = (submittedEmail: string) => {
    if (!inputRef.current || !chestRef.current) return;

    const inputRect = inputRef.current.getBoundingClientRect();
    const chestRect = chestRef.current.getBoundingClientRect();

    setFlyData({
      startX: inputRect.left,
      startY: inputRect.top,
      endX: chestRect.left + chestRect.width / 2,
      endY: chestRect.top + chestRect.height / 2,
    });

    setFlyingEmail(submittedEmail);
    setIsAnimating(true);

    setTimeout(() => {
      setIsAnimating(false);
      setFlyingEmail("");
    }, 900);
  };

  const handleContinue = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const trimmedEmail = email.trim();

    if (!trimmedEmail) {
      setSubmissionState({
        type: "error",
        message: "Please enter your email address.",
      });
      return;
    }

    if (!emailPattern.test(trimmedEmail)) {
      setSubmissionState({
        type: "error",
        message: "Please enter a valid email address.",
      });
      return;
    }

    setIsSubmitting(true);
    setSubmissionState(null);

    try {
      await submitContactForm({ email: trimmedEmail });

      startChestAnimation(trimmedEmail);
      setEmail("");
      setSubmissionState({
        type: "success",
        message: "Thanks. Your email has been sent to the team.",
      });
    } catch (error) {
      setSubmissionState({
        type: "error",
        message: error instanceof Error ? error.message : "Unable to send your message right now.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      {/* ================= CONTACT HERO ================= */}
      <section className="relative min-h-screen pt-20 pb-32 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0"
          style={{ backgroundImage: `url(${bgImage})` }}
        />
        <div className="absolute inset-0 bg-black/0 z-0" />

        <div className="container mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center min-h-[calc(100vh-60px)]">
            <motion.div
              variants={container}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              className="space-y-8"
            >
              <motion.h1
                variants={slideLeft}
                className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-bold text-slate-300"
              >
                You're exactly where <br />
                <span className="bg-gradient-to-r from-purple-500 via-indigo-400 to-cyan-300 bg-clip-text text-transparent">
                  great ideas begin.
                </span>
              </motion.h1>

              <motion.p
                variants={slideLeft}
                className="text-base sm:text-lg lg:text-xl max-w-xl leading-relaxed text-gray-400"
              >
                Moonglade Atelier began with a simple belief - strong stories and
                powerful visuals make games unforgettable.
              </motion.p>

              <motion.p
                variants={slideLeft}
                className="text-gray-400 text-base sm:text-lg lg:text-xl max-w-xl leading-relaxed"
              >
                Today, we deliver game art, animation, and cinematic visuals for
                clients worldwide.
              </motion.p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ================= STAY IN THE GAME ================= */}
      <section className="relative bg-black py-24 px-6 overflow-hidden">
        <div className="max-w-[1400px] mx-auto">
          <div className="relative bg-[#0f0f10]/90 rounded-tr-[70px] rounded-bl-[70px] px-8 py-10 md:px-14 md:py-12 flex flex-col lg:flex-row items-center gap-14">
            {/* LEFT CONTENT */}
            <div className="flex-1 max-w-xl">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                STAY IN THE{" "}
                <span className="text-purple-500">GAME</span>
              </h2>

              <p className="text-gray-400 text-base md:text-lg leading-relaxed mb-10">
                Unlock updates on new projects and studio highlights.
              </p>

              <form onSubmit={handleContinue}>
                {submissionState && (
                  <div
                    className={`mb-6 rounded-2xl border px-5 py-4 text-sm md:text-base ${
                      submissionState.type === "success"
                        ? "border-emerald-400/40 bg-emerald-500/10 text-emerald-200"
                        : "border-rose-400/40 bg-rose-500/10 text-rose-200"
                    }`}
                  >
                    <div className="font-display text-xs uppercase tracking-[0.2em] opacity-80">
                      {submissionState.type === "success" ? "Message Sent" : "Submission Error"}
                    </div>
                    <p className="mt-2 leading-relaxed">{submissionState.message}</p>
                  </div>
                )}

                <div className="flex flex-col sm:flex-row gap-4">
                  <input
                    ref={inputRef}
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter email address"
                    disabled={isSubmitting}
                    className="flex-1 bg-[#2a2a2a] text-white placeholder-gray-400 px-5 py-3 rounded-md outline-none focus:ring-2 focus:ring-purple-500 disabled:cursor-not-allowed disabled:opacity-70"
                  />

                  <Button
                    type="submit"
                    variant="slanted"
                    size="default"
                    disabled={isSubmitting}
                    className="bg-purple-600 hover:bg-purple-700 transition px-6 py-3 font-heading text-lg tracking-widest"
                  >
                    {isSubmitting ? "Sending..." : "Continue"}
                  </Button>
                </div>
              </form>
            </div>

            {/* RIGHT IMAGE */}
            <div className="flex-1 flex justify-center lg:justify-end">
              <img
                ref={chestRef}
                src={chestImg}
                alt="Treasure Chest"
                loading="lazy"
                decoding="async"
                className={`
                  w-[220px] sm:w-[260px] md:w-[300px]
                  object-contain
                  animate-float-slow
                  will-change-transform
                  transition-all duration-500
                  ${isAnimating ? "scale-110 drop-shadow-[0_0_40px_rgba(255,140,0,0.8)]" : ""}
                `}
              />
            </div>
          </div>
        </div>

        {/* FLYING EMAIL */}
        {isAnimating && flyData && (
          <motion.div
            initial={{
              x: flyData.startX,
              y: flyData.startY,
              scale: 1,
              opacity: 1,
              position: "fixed",
              zIndex: 1000,
            }}
            animate={{
              x: flyData.endX,
              y: flyData.endY,
              scale: 0.3,
              opacity: 0,
            }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="bg-purple-600 text-white px-4 py-2 rounded-md shadow-lg"
          >
            {flyingEmail}
          </motion.div>
        )}
      </section>
    </>
  );
}
