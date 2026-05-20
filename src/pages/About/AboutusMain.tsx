import { motion } from "framer-motion";

import blueryu from "@/assets/blueryu.webp";
import greenRyu from "@/assets/greenryu.webp";
import bgImage from "@/assets/Aboutus_bg.svg";

import Symbol1 from "@/assets/Symbol1.webp";
import Symbol2 from "@/assets/Symbol2.webp";
import Symbol3 from "@/assets/Symbol3.webp";
import Symbol4 from "@/assets/Symbol4.webp";
import Symbol5 from "@/assets/Symbol5.webp";

import img1 from "@/assets/blue_moonglade.webp";
import img2 from "@/assets/red_moonglade.webp";
import img3 from "@/assets/green_moonglade.webp";

/* -------------------------------
   Animation Variants
-------------------------------- */

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const slideUp = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
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

const slideRight = {
  hidden: { opacity: 0, x: 60 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6 },
  },
};

/* -------------------------------
   COMPONENT
-------------------------------- */

export function AboutUS() {
  return (
    <section className="relative min-h-screen pt-20 pb-40 overflow-hidden">

      {/* BACKGROUND */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${bgImage})` }}
      />
      <div className="absolute inset-0 bg-black/60" />

      {/* ================= ABOUT ================= */}
      <div className="container mx-auto relative z-10 flex justify-center px-0 lg:px-6">
        <div className="grid gap-10 items-center min-h-[calc(100vh-60px)] lg:grid-cols-[auto_minmax(0,1fr)_auto] lg:gap-16">

          {/* LEFT IMAGE */}
          <div className="order-1 flex min-h-[calc(100vh-64px)] items-center justify-center lg:min-h-0">
            <div className="mt-6 h-[calc(100vh-64px)] w-screen max-w-none sm:mb-10 sm:h-[500px] sm:w-[300px] sm:max-w-[300px] lg:h-[660px] lg:w-[380px] lg:max-w-[380px]">
              <motion.img
                src={greenRyu}
                alt="Hero Art"
                loading="eager"
                fetchPriority="high"
                decoding="async"
                initial={{ opacity: 0, x: 60 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="h-full w-full object-contain object-center animate-float"
              />
            </div>
          </div>

          {/* TEXT */}
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="order-2 flex flex-col items-center space-y-5 px-6 pb-14 text-center sm:space-y-8 sm:px-8 lg:px-0 lg:pb-0"
          >
            <motion.h1
              variants={slideUp}
              className="max-w-[20ch] text-3xl font-bold leading-tight sm:max-w-none sm:text-4xl lg:text-6xl 
              bg-gradient-to-r from-[#ff5b5b] via-[#ff3c3c] to-[#b31217]
              text-transparent bg-clip-text"
            >
              Built From Passion. Driven by Craft.
            </motion.h1>

            <motion.p variants={slideUp} className="max-w-[34ch] text-center text-base leading-relaxed text-gray-300 sm:max-w-xl sm:text-lg">
              Moonglade Atelier is a game art outsourcing studio built on the
              belief that compelling storytelling and high-quality visuals
              define successful games.
            </motion.p>

            <motion.p variants={slideUp} className="max-w-[34ch] text-center text-base leading-relaxed text-gray-300 sm:max-w-xl sm:text-lg">
              We provide 2D/3D game art, animation, slot game assets, and
              cinematic production services for global clients.
            </motion.p>
          </motion.div>

          {/* RIGHT IMAGE */}
          <div className="order-3 hidden justify-center lg:flex">
            <div className="h-[300px] w-[180px] sm:h-[460px] sm:w-[280px] lg:h-[620px] lg:w-[360px]">
              <motion.img
                src={blueryu}
                alt="Hero Art"
                loading="eager"
                fetchPriority="high"
                decoding="async"
                initial={{ opacity: 0, x: -60 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="h-full w-full object-contain animate-float"
              />
            </div>
          </div>
        </div>
      </div>

      {/* ================= OUR EXPERTISE ================= */}
      <motion.section
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.12 }}
        className="relative z-10 mt-32 px-6"
      >
        <div className="max-w-5xl mx-auto flex flex-col gap-24">

          {[
            {
              title: "WHO WE ARE",
              image: img3,
              position: "left",
              text1:
                "Moonglade Atelier is a game art outsourcing studio built on the belief that compelling storytelling and high-quality visuals drive successful games.",
              text2:
                "We specialize in 2D game art, slot game assets, animation, and cinematic production for global clients.",
            },
            {
              title: "WHAT WE DO",
              image: img2,
              position: "right",
              text1:
                "Moonglade Atelier provides professional game art outsourcing services, including 2D game art, slot game assets, character animation, cinematic trailers, and immersive storytelling visuals for global game studios.",
              text2:
                "We focus on delivering high-quality, scalable art solutions with strong visual appeal and technical accuracy.",
            },
            {
              title: "HOW WE DO IT",
              image: img1,
              position: "left",
              text1:
                "Moonglade Atelier follows a structured game art production pipeline, combining creative direction, advanced tools, and scalable workflows to deliver 2D game art, animation, and cinematic assets for global clients.",
              text2:
                "We ensure high-quality output through efficient processes, technical precision, and industry-standard practices.",
            },
          ].map((card, index) => {
            const isLeft = card.position === "left";

            return (
              <motion.div
                key={index}
                variants={isLeft ? slideLeft : slideRight}
                className="relative min-h-[380px]"
              >

                <svg
                  className="absolute inset-0 w-full h-full pointer-events-none"
                  viewBox="0 0 700 380"
                  preserveAspectRatio="none"
                >
                  <defs>
                    <filter id={`glow-${index}`} x="-50%" y="-50%" width="200%" height="200%">
                      <feGaussianBlur stdDeviation="5" result="blur" />
                      <feMerge>
                        <feMergeNode in="blur" />
                        <feMergeNode in="SourceGraphic" />
                      </feMerge>
                    </filter>
                  </defs>

                  <path
                    d="
                M 35 0
                L 665 0
                Q 700 0 700 35
                L 700 300
                L 680 320
                L 680 350
                Q 680 380 645 380
                L 70 380
                Q 35 380 20 360
                L 0 340
                L 0 55
                L 20 35
                Z
              "
                    fill="#0b0f17"
                    stroke="#ff7a1a"
                    strokeWidth="2"
                    filter={`url(#glow-${index})`}
                  />
                </svg>

                <div className="relative z-10 p-12">
                  <div
                    className={`flex flex-col ${isLeft ? "md:flex-row" : "md:flex-row-reverse"
                      } items-center gap-12`}
                  >
                    <motion.div
                      initial={{ opacity: 0, scale: 0.92 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true, amount: 0.35 }}
                      transition={{ duration: 0.55, delay: 0.12 }}
                      className="flex h-[220px] w-[220px] items-center justify-center md:h-[280px] md:w-[280px]"
                    >
                      <img
                        src={card.image}
                        alt={card.title}
                        loading="lazy"
                        decoding="async"
                        className="h-full w-full object-contain"
                      />
                    </motion.div>

                    <motion.div
                      variants={container}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true, amount: 0.35 }}
                      className="flex-1 space-y-4"
                    >
                      <motion.h2 variants={slideUp} className="text-5xl font-bold text-[#f64242] uppercase">
                        {card.title}
                      </motion.h2>

                      <motion.p variants={slideUp} className="text-gray-300 text-lg">
                        {card.text1}
                      </motion.p>

                      <motion.p variants={slideUp} className="text-gray-400 text-lg">
                        {card.text2}
                      </motion.p>
                    </motion.div>
                  </div>
                </div>

              </motion.div>
            );
          })}
        </div>
      </motion.section>

      {/* ================= WHY CHOOSE US ================= */}
      <motion.section
        initial={{ opacity: 0, y: 70 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.12 }}
        transition={{ duration: 0.65 }}
        className="relative z-10 w-full bg-[#0c0c0c] mt-20 text-white py-20 px-4 md:px-10"
      >
        <div className="max-w-7xl mx-auto">

          {/* Heading + Text */}
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="flex flex-col md:flex-row justify-between gap-6"
          >
            <motion.h2 variants={slideLeft} className="text-4xl lg:text-7xl md:text-5xl font-bold tracking-wider mt-6">
              WHY CHOOSE US
            </motion.h2>

            <motion.p variants={slideRight} className="text-gray-300 max-w-lg text-lg md:text-base lg:text-xl mb-4 leading-relaxed">
              As a professional game art outsourcing studio, Moonglade Atelier
              specializes in 2D game art, slot game design, animation, and
              cinematic production. Our scalable workflows, fast turnaround
              times, and industry-standard processes ensure high-quality asset
              delivery for game developers worldwide.
            </motion.p>
          </motion.div>

          {/* Line Decoration â€” Visible Only on Desktop */}
          <div className="hidden lg:block">

            <div className="flex">
              <div className="w-[450px] h-[2px] bg-gray-500 mt-6 opacity-40"></div>
              <div className="w-[500px] h-[2px] bg-gray-500 mt-6 ml-80 opacity-40"></div>
            </div>

            <div className="flex">
              <div className="w-[2px] h-[100px] bg-gray-500 opacity-40"></div>
              <div className="w-[2px] h-[100px] bg-gray-500 ml-[1266px] opacity-40"></div>
            </div>

          </div>

          {/* 4 Items + Center Image */}
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.18 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-10 items-center lg:ml-10"
          >

            {/* Left items */}
            <div className="space-y-20">
              <motion.div variants={slideLeft} className="flex items-start gap-4">
                <img src={Symbol2} alt="" loading="lazy" decoding="async" className="w-20 h-20" />
                <div>
                  <h4 className="font-semibold text-2xl tracking-widest">Quality</h4>
                  <p className="text-gray-400 text-lg">
                    We deliver high-quality 2D/3D game art and animation tailored for global game studios.
                  </p>
                </div>
              </motion.div>

              <motion.div variants={slideLeft} className="flex items-start gap-4">
                <img src={Symbol3} alt="" loading="lazy" decoding="async" className="w-20 h-20" />
                <div>
                  <h4 className="font-semibold text-2xl tracking-widest">Scalability</h4>
                  <p className="text-gray-400 text-lg">
                    Our structured production pipelines ensure consistent, scalable, and production-ready assets.
                  </p>
                </div>
              </motion.div>
            </div>

            {/* Center Image */}
            <motion.div variants={slideUp} className="flex justify-center">
              <motion.img
                src={Symbol1}
                alt="center"
                loading="lazy"
                decoding="async"
                initial={{ opacity: 0, y: 20 }}
                animate={{
                  opacity: 1,
                  y: [0, -15, 0],
                }}
                transition={{
                  opacity: { duration: 1 },
                  y: {
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  },
                }}
                className="w-72 md:w-72 lg:w-[400px] rounded-2xl shadow-xl mt-8"
              />
            </motion.div>

            {/* Right items */}
            <div className="space-y-20">
              <motion.div variants={slideRight} className="flex items-start gap-4">
                <img src={Symbol4} alt="" loading="lazy" decoding="async" className="w-20 h-20" />
                <div>
                  <h4 className="font-semibold text-2xl tracking-widest">Expertise</h4>
                  <p className="text-gray-400 text-lg">
                    We specialize in slot game art, cinematic visuals, and immersive storytelling design.
                  </p>
                </div>
              </motion.div>

              <motion.div variants={slideRight} className="flex items-start gap-4">
                <img src={Symbol5} alt="" loading="lazy" decoding="async" className="w-20 h-20" />
                <div>
                  <h4 className="font-semibold text-2xl tracking-widest">Precision</h4>
                  <p className="text-gray-400 text-lg">
                    We combine creative excellence with technical accuracy to elevate every gaming experience.
                  </p>
                </div>
              </motion.div>
            </div>

          </motion.div>
        </div>
      </motion.section>



    </section>
  );
}
