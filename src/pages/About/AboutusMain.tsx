import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

import blueryu from "@/assets/blueryu.png";
import greenRyu from "@/assets/greenryu.png";
import bgImage from "@/assets/Aboutus_bg.svg";

import Symbol1 from "@/assets/Symbol1.png";
import Symbol2 from "@/assets/Symbol2.png";
import Symbol3 from "@/assets/Symbol3.png";
import Symbol4 from "@/assets/Symbol4.png";
import Symbol5 from "@/assets/Symbol5.png";

import img1 from "@/assets/Howwedo.png";
import img2 from "@/assets/Whatwedo.png";
import img3 from "@/assets/Whoweare.png";

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

/* -------------------------------
   DATA
-------------------------------- */

const testimonials = [
  {
    text: "Moonglade delivered outstanding visuals that elevated our game quality beyond expectations.",
    name: "Andrew Chris",
    country: "Client from Uganda",
    rating: 5,
  },
  {
    text: "Professional, creative, and always on time. Their cinematic work is top tier.",
    name: "Chris Evans",
    country: "Client from USA",
    rating: 4,
  },
  {
    text: "The animation quality and attention to detail was incredible. Highly recommended.",
    name: "Sarah Williams",
    country: "Client from UK",
    rating: 5,
  },
  {
    text: "They understood our vision perfectly and brought it to life with stunning art.",
    name: "Mark Jensen",
    country: "Client from Denmark",
    rating: 4,
  },
  {
    text: "Reliable studio with strong communication and world-class visuals.",
    name: "Amit Verma",
    country: "Client from India",
    rating: 5,
  },
];

/* -------------------------------
   CONSTANTS
-------------------------------- */

const CARD_WIDTH = 360;
const GAP = 40;
const TOTAL = CARD_WIDTH + GAP;

/* -------------------------------
   COMPONENT
-------------------------------- */

export function AboutUS() {
  const [active, setActive] = useState(0);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const startAuto = () => {
    stopAuto();
    intervalRef.current = setInterval(() => {
      setActive((prev) => (prev + 1) % testimonials.length);
    }, 4000);
  };

  const stopAuto = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

  useEffect(() => {
    startAuto();
    return stopAuto;
  }, []);

  const prevSlide = () => {
    stopAuto();
    setActive((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1,
    );
    startAuto();
  };

  const nextSlide = () => {
    stopAuto();
    setActive((prev) => (prev + 1) % testimonials.length);
    startAuto();
  };

  const getOffset = (index: number) => {
    const half = Math.floor(testimonials.length / 2);
    let diff = index - active;

    if (diff > half) diff -= testimonials.length;
    if (diff < -half) diff += testimonials.length;

    return diff * TOTAL;
  };

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
      <section className="relative z-10 mt-32 px-6">
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
              <div key={index} className="relative min-h-[380px]">

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
                    <img
                      src={card.image}
                      alt={card.title}
                      loading="lazy"
                      decoding="async"
                      className="w-48 md:w-64"
                    />

                    <div className="flex-1 space-y-4">
                      <h2 className="text-5xl font-bold text-[#f64242] uppercase">
                        {card.title}
                      </h2>

                      <p className="text-gray-300 text-lg">
                        {card.text1}
                      </p>

                      <p className="text-gray-400 text-lg">
                        {card.text2}
                      </p>
                    </div>
                  </div>
                </div>

              </div>
            );
          })}
        </div>
      </section>

      {/* ================= WHY CHOOSE US ================= */}
      <section className="relative z-10 w-full bg-[#0c0c0c] mt-20 text-white py-20 px-4 md:px-10">
        <div className="max-w-7xl mx-auto">

          {/* Heading + Text */}
          <div className="flex flex-col md:flex-row justify-between gap-6">
            <h2 className="text-4xl lg:text-7xl md:text-5xl font-bold tracking-wider mt-6">
              WHY CHOOSE US
            </h2>

            <p className="text-gray-300 max-w-lg text-lg md:text-base lg:text-xl mb-4 leading-relaxed">
              As a professional game art outsourcing studio, Moonglade Atelier
              specializes in 2D game art, slot game design, animation, and
              cinematic production. Our scalable workflows, fast turnaround
              times, and industry-standard processes ensure high-quality asset
              delivery for game developers worldwide.
            </p>
          </div>

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
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-center lg:ml-10">

            {/* Left items */}
            <div className="space-y-20">
              <div className="flex items-start gap-4">
                <img src={Symbol2} alt="" loading="lazy" decoding="async" className="w-20 h-20" />
                <div>
                  <h4 className="font-semibold text-2xl tracking-widest">Quality</h4>
                  <p className="text-gray-400 text-lg">
                    We deliver high-quality 2D/3D game art and animation tailored for global game studios.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <img src={Symbol3} alt="" loading="lazy" decoding="async" className="w-20 h-20" />
                <div>
                  <h4 className="font-semibold text-2xl tracking-widest">Scalability</h4>
                  <p className="text-gray-400 text-lg">
                    Our structured production pipelines ensure consistent, scalable, and production-ready assets.
                  </p>
                </div>
              </div>
            </div>

            {/* Center Image */}
            <div className="flex justify-center">
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
            </div>

            {/* Right items */}
            <div className="space-y-20">
              <div className="flex items-start gap-4">
                <img src={Symbol4} alt="" loading="lazy" decoding="async" className="w-20 h-20" />
                <div>
                  <h4 className="font-semibold text-2xl tracking-widest">Expertise</h4>
                  <p className="text-gray-400 text-lg">
                    We specialize in slot game art, cinematic visuals, and immersive storytelling design.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <img src={Symbol5} alt="" loading="lazy" decoding="async" className="w-20 h-20" />
                <div>
                  <h4 className="font-semibold text-2xl tracking-widest">Precision</h4>
                  <p className="text-gray-400 text-lg">
                    We combine creative excellence with technical accuracy to elevate every gaming experience.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>


      {/* ================= TESTIMONIALS ================= */}
      <section className="relative z-10 mt-40 px-6">
        <div className="max-w-[1400px] mx-auto">

          <h2 className="text-center text-4xl md:text-5xl font-bold uppercase tracking-widest mb-24
  bg-gradient-to-r from-[#ffb86b] via-[#ff8c42] to-[#c84c2f]
  bg-clip-text text-transparent
  drop-shadow-[0_0_12px_rgba(255,120,60,0.35)]">
            What Our Clients Say
          </h2>

          <div className="relative h-[300px] overflow-hidden">
            <div className="relative flex justify-center items-center h-full">

              {testimonials.map((item, index) => {
                const isActive = index === active;

                return (
                  <div
                    key={index}
                    className={`absolute w-[360px] h-[260px] rounded-2xl p-10 text-center
                      transition-all duration-700 ease-out
                      ${isActive
                        ? "bg-gradient-to-br from-[#2a0648] to-[#140020] z-20"
                        : "bg-[#111] opacity-40 z-10"
                      }`}
                    style={{
                      transform: `translateX(${getOffset(index)}px) scale(${isActive ? 1.25 : 0.95})`,
                    }}
                  >
                    <div className="flex justify-center mb-6">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <span key={i} className={i < item.rating ? "text-white" : "text-gray-600"}>
                          ★
                        </span>
                      ))}
                    </div>

                    <p className="text-gray-300 text-sm mb-6">{item.text}</p>
                    <p className="font-semibold text-white">{item.name}</p>
                    <p className="text-xs text-gray-400">{item.country}</p>
                  </div>
                );
              })}

            </div>
          </div>

          {/* CONTROLS */}
          <div className="flex justify-center mt-20">
            <div className="flex items-center bg-[#0f0f10] rounded-full px-4 py-3 gap-3">

              <button
                onClick={prevSlide}
                className="w-12 h-12 flex items-center justify-center rounded-full
                text-white hover:bg-white/10 transition"
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M15 18l-6-6 6-6" />
                </svg>
              </button>

              <button
                onClick={nextSlide}
                className="w-14 h-14 flex items-center justify-center rounded-full
             bg-gradient-to-r from-[#b84b5a] to-[#e07a2f]
             text-white shadow-md transition
             hover:scale-105
             hover:shadow-[0_0_20px_rgba(232,144,13,0.6)]
             active:scale-95"
              >

                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M9 6l6 6-6 6" />
                </svg>
              </button>

            </div>
          </div>

        </div>
      </section>

    </section>
  );
}
