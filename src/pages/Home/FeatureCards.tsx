import {
  Award,
  Clock,
  Users,
  Sparkles,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  X,
} from "lucide-react";
import { useRef, useState } from "react";
import { motion } from "framer-motion";

import img1 from "@/assets/slideshow/one.png";
import img2 from "@/assets/slideshow/two.png";
import img3 from "@/assets/slideshow/three.png";
import img4 from "@/assets/slideshow/four.png";
import img5 from "@/assets/slideshow/five.jpg";
import img6 from "@/assets/slideshow/six.png";

const containerVariant = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariant = {
  hidden: {
    opacity: 0,
    y: 50,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const features = [
  {
    icon: Award,
    number: "18",
    label: "Certifications & 7 Licences",
    img: img1,
    description:
      "We hold multiple global certifications ensuring compliance and excellence.",
  },
  {
    icon: Clock,
    number: "30+",
    label: "Years of Experience",
    img: img2,
    description: "Three decades of proven industry leadership.",
  },
  {
    icon: Users,
    number: "1800+",
    label: "Casino Partners",
    img: img3,
    description: "Trusted by 1800+ global partners worldwide.",
  },
  {
    icon: Sparkles,
    number: "200+",
    label: "Enthusiastic Experts",
    img: img4,
    description: "A passionate and experienced professional team.",
  },
  {
    icon: Sparkles,
    number: "200+",
    label: "Enthusiastic Experts",
    img: img5,
    description: "A passionate and experienced professional team.",
  },
  {
    icon: Sparkles,
    number: "200+",
    label: "Enthusiastic Experts",
    img: img6,
    description: "A passionate and experienced professional team.",
  },
];

export function FeatureCards() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [selected, setSelected] = useState<any>(null);
  const [hoverGlow, setHoverGlow] = useState<{
    index: number;
    x: number;
    y: number;
  } | null>(null);

  const scroll = (dir: "left" | "right") => {
    if (!scrollRef.current) return;

    scrollRef.current.scrollBy({
      left: dir === "left" ? -320 : 320,
      behavior: "smooth",
    });
  };

  return (
    <section className="relative py-36 overflow-hidden bg-black">
      <div className="container mx-auto px-6">

        {/* HEADING */}
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-6xl font-extrabold bg-gradient-to-r from-[#5816bb] via-[#B04C58] via-[#E46F1E] to-[#e8900d] text-transparent bg-clip-text">
            Our Credentials
          </h2>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <p className="text-white/60 max-w-4xl mx-auto lg:text-lg sm:text-1xl leading-relaxed">
            Backed by decades of experience and global collaborations,
            Moonglade Atelier is a trusted game art outsourcing studio
            specializing in 2D animation, slot game art, and scalable production
            solutions.
          </p>
        </motion.div>

        <div className="relative">

          {/* DESKTOP ARROWS ONLY */}
          <button
            onClick={() => scroll("left")}
            className="hidden md:flex absolute -left-16 top-1/2 -translate-y-1/2 z-20 w-14 h-14 items-center justify-center rounded-full bg-orange-500/10
            shadow-[0_0_20px_rgba(255,115,0,0.6)]
            hover:shadow-[0_0_35px_rgba(255,115,0,0.9)]
            transition-all duration-300"
          >
            <ChevronLeft className="w-10 h-10 text-orange-600" />
          </button>

          <button
            onClick={() => scroll("right")}
            className="hidden md:flex absolute -right-16 top-1/2 -translate-y-1/2 
            z-20 w-14 h-14 items-center justify-center rounded-full
            bg-orange-500/10
            shadow-[0_0_20px_rgba(255,115,0,0.6)]
            hover:shadow-[0_0_35px_rgba(255,115,0,0.9)]
            transition-all duration-300"
          >
            <ChevronRight className="w-10 h-10 text-orange-500" />
          </button>

          {/* MOBILE → STACKED */}
          <div className="flex flex-col gap-8 md:hidden">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                variants={cardVariant}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                onClick={() => setSelected(feature)}
                className="relative w-full h-96 py-8 cursor-pointer border border-white/10
                shadow-xl bg-black/40 backdrop-blur-md"
              >
                <div className="w-full h-48 overflow-hidden">
                  <img
                    src={feature.img}
                    alt={feature.label}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-contain"
                  />
                </div>

                <div className="p-6 bg-black/50 backdrop-blur-md">
                  <feature.icon className="w-6 h-6 text-[#FFA81E] mb-3" />
                  <span className="text-3xl font-bold text-white">
                    {feature.number}
                  </span>
                  <div className="flex items-center justify-between mt-2">
                    <span className="text-white/80 text-sm">
                      {feature.label}
                    </span>
                    <ArrowRight className="w-4 h-4 text-white/60" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* DESKTOP → CAROUSEL */}
          {/* DESKTOP → CAROUSEL */}
          <motion.div
            ref={scrollRef}
            variants={containerVariant}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="hidden md:flex gap-6 overflow-x-auto no-scrollbar scroll-smooth pl-11"
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                variants={cardVariant}
                whileHover={{ scale: 1.06, y: -8 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                onClick={() => setSelected(feature)}
                onMouseMove={(e) => {
                  const rect = e.currentTarget.getBoundingClientRect();
                  setHoverGlow({
                    index,
                    x: e.clientX - rect.left,
                    y: e.clientY - rect.top,
                  });
                }}
                onMouseLeave={() =>
                  setHoverGlow((current) =>
                    current?.index === index ? null : current
                  )
                }
                className="relative min-w-[300px] h-96 py-8 cursor-pointer group
      border border-white/10 overflow-hidden shadow-xl
      bg-black/40 backdrop-blur-md"
              >
                {/* Cursor Glow Effect */}
                <div
                  className="pointer-events-none absolute inset-0 opacity-0 
        group-hover:opacity-100 transition-opacity duration-300"
                  style={{
                    background:
                      hoverGlow?.index === index
                        ? `radial-gradient(400px circle at ${hoverGlow.x}px ${hoverGlow.y}px, rgba(168, 85, 247, 0.4), transparent 40%)`
                        : undefined,
                  }}
                ></div>

                <div className="w-full h-48 overflow-hidden">
                  <img
                    src={feature.img}
                    alt={feature.label}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-contain"
                  />
                </div>

                <div className="p-6 bg-black/50 backdrop-blur-md">
                  <feature.icon className="w-6 h-6 text-[#FFA81E] mb-3" />
                  <span className="text-3xl font-bold text-white">
                    {feature.number}
                  </span>
                  <div className="flex items-center justify-between mt-2">
                    <span className="text-white/80 text-sm">
                      {feature.label}
                    </span>
                    <ArrowRight className="w-4 h-4 text-white/60" />
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

        </div>
      </div>

      {/* MODAL (UNCHANGED) */}
      {selected && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 px-10">
          <div className="bg-[#111] rounded-xl max-w-md w-full p-6 relative border border-white/10">
            <button
              onClick={() => setSelected(null)}
              className="absolute top-4 right-4 text-white/70 hover:text-white"
            >
              <X />
            </button>

            <img
              src={selected.img}
              alt={selected.label}
              loading="lazy"
              decoding="async"
              className="w-52 h-48 object-contain items-center rounded-lg mb-4"
            />

            <selected.icon className="w-8 h-8 text-[#FFA81E] mb-3" />

            <h3 className="text-2xl font-heading text-white mb-2">
              {selected.number}
            </h3>

            <p className="text-white/70 text-sm">
              {selected.description}
            </p>
          </div>
        </div>
      )}
    </section>
  );
}
