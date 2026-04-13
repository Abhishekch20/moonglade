import { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

import img3 from "@/assets/Farmgirl.webp";

/* ---------------------------------
   Animation Variants
----------------------------------*/

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const slideRight = {
  hidden: { opacity: 0, x: 60 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6 },
  },
};

const slideLeftImg = {
  hidden: { opacity: 0, x: -60 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6 },
  },
};

export function AboutSection() {
  const textRef = useRef<HTMLParagraphElement | null>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const section = document.querySelector("#about") as HTMLElement | null;
    const el = textRef.current;

    if (!section || !el) return;

    const context = gsap.context(() => {
      const words = el.querySelectorAll(".word");

      gsap.fromTo(
        words,
        { opacity: 0.25, color: "#7a7a7a" },
        {
          opacity: 1,
          color: "#E2DFD2",
          ease: "none",
          stagger: 0.05,
          scrollTrigger: {
            trigger: section,
            start: "top 80%",
            end: "center 55%",
            scrub: 0.6,
          },
        },
      );
    }, section);

    return () => {
      context.revert();
    };
  }, []);

  const paragraphText = `We are a world-class Game Art and Animation services studio with over a decade of experience in the casino gaming industry. We are proficient in providing art services for both traditional and unique theme slot games across Land-based, Online, Social, and Mobile platforms.

Our global experience of developing art for markets like Europe, US, Asia, and Australia empowers us to craft customised content based on target audience. We're adept at aligning our art with the latest cutting-edge game engines and technologies.`;

  const paragraphLines = paragraphText.split("\n\n");

  return (
    <section id="about" className="relative py-24 sm:py-32 lg:py-16 bg-background overflow-hidden">
      <div className="container relative z-10 px-6 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 items-center">
          {/* LEFT: IMAGE */}
          <motion.div
            variants={slideLeftImg}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="relative flex justify-center lg:justify-start"
          >
            <img loading="lazy" decoding="async"
              src={img3}
              className=" h-[400px] mb-6 lg:mb-0 lg:h-[580px] w-4/5"
              alt="About section"
            />
          </motion.div>

          {/* RIGHT: CONTENT */}
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="text-left space-y-3"
          >
            <motion.h2
              variants={slideRight}
              className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight"
            >
              About Moonglade Atelier
            </motion.h2>

            <motion.p
              variants={slideRight}
              ref={textRef}
              className="text-muted-foreground text-lg sm:text-xl lg:text-lg leading-relaxed font-body"
            >
              {paragraphLines.map((line, lineIndex) => (
                <span key={lineIndex}>
                  {line.split(" ").map((word, wordIndex) => (
                    <span key={`${lineIndex}-${wordIndex}`} className="word inline-block mr-1 opacity-20">
                      {word}
                    </span>
                  ))}
                  {lineIndex < paragraphLines.length - 1 ? (
                    <>
                      <br />
                      <br />
                    </>
                  ) : null}
                </span>
              ))}
            </motion.p>

            <motion.div variants={slideRight}>
              <Button
                variant="slanted"
                size="lg"
                className="group rounded-none px-6 font-display text-xl tracking-wider uppercase"
              >
                View Portfolio

              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

