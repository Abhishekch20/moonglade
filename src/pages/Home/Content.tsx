import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import bg1 from "@/assets/1GameBG.jpg";
import { Link } from "react-router-dom";

/* ---------------------------------
   Animation Variants
----------------------------------*/

// Parent → controls stagger timing
const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

// Each element slides from LEFT
const slideLeft = {
  hidden: { opacity: 0, x: -60 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6 },
  },
};

export function ContentSection() {
  return (
    <section
      className="relative py-32 sm:py-32 lg:py-20 bg-cover  bg-center bg-no-repeat "
      style={{
        backgroundImage: `url(${bg1})`,
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Radial Light Overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_hsl(270_60%_20%/0.15)_0%,_transparent_70%)]"></div>

      {/* CONTENT */}
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="container relative z-10 flex flex-col items-center text-center px-6 sm:px-8"
      >
        {/* Logo */}
        <motion.div variants={slideLeft} className="mb-8 sm:mb-12 overflow-hidden">
          <video
            src="https://res.cloudinary.com/dtee5yyvw/video/upload/q_auto,f_auto/v1770995111/Moonglade-logo-animation_e83gbe.mp4"
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            className="h-20 lg:h-40 w-auto"
          />
        </motion.div>


        {/* Heading */}
        <motion.h2
          variants={slideLeft}
          className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-6xl font-bold text-foreground max-w-5xl mb-6 sm:mb-8 
          bg-gradient-to-r from-[#5816bb] via-[#B04C58] via-[rgb(182,88,65)] via-[#E46F1E] to-[#e8900d] text-transparent bg-clip-text"
        >
          2D Animation and Game Art Production.
        </motion.h2>

        {/* Paragraph */}
        <motion.p
          variants={slideLeft}
          className="text-muted-foreground text-base sm:text-lg md:text-xl max-w-3xl mb-10 sm:mb-14 font-body leading-relaxed"
        >
          Moonglade Atelier is a full-service game art outsourcing studio
          delivering high-quality 2D animation and game art services for
          studios worldwide.
        </motion.p>

        {/* Buttons Row */}
        <motion.div
          variants={slideLeft}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          {/* Primary Button */}
          <Link to="/about">
          <Button
            variant="slanted"
            size="default"
            className="px-6 py-6 text-white text-sm bg-transparent border border-slate-50"
          >
            More About US
          </Button>
          </Link>

          {/* Secondary Button */}
          <Link to="/contact">
          <Button
            variant="slanted"
            size="default"
            className="px-6 py-6 text-white text-sm"
          >
            Let’s talk
          </Button>
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
}
