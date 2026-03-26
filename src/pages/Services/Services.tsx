import PageLayout from "../../components/PageLayout";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import bgImage from "@/assets/Aboutus_bg.svg";

import animation2D from "@/assets/portfolioimg1.png";
import animation3D from "@/assets/portfolioimg2.png";
import kidsAnimation from "@/assets/portfolioimg3.png";
import art2D from "@/assets/portfolioimg4.png";
import art3D from "@/assets/portfolioimg5.png";
import cinematic from "@/assets/portfolioimg6.png";

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const slideLeft = {
  hidden: { opacity: 0, x: -36 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.45 },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45 },
  },
};

const expertiseCards = [
  { title: "2D ANIMATION", img: cinematic },
  { title: "3D ANIMATION", img: art3D },
  { title: "KIDS ANIMATION", img: art2D },
  { title: "2D ART", img: animation3D },
  { title: "3D ART", img: kidsAnimation },
  { title: "CINEMATIC GAME TRAILER", img: animation2D },
  { title: "WEB BASED SLOTS", img: art3D },
  { title: "IGAMING", img: animation3D },
  { title: "ART", img: cinematic },
];

const serviceSections = [
  {
    title: "Concept Art",
    eyebrow: "Built From Passion. Driven By Craft.",
    image: art2D,
    imageAlt: "Concept Art",
    imageFirst: false,
    paragraphs: [
      "Moonglade Atelier delivers high-quality concept art for games, transforming ideas into visually compelling characters, environments, and assets. With over 12 years of industry experience, we help game studios define strong visual direction and storytelling from the earliest stages of production.",
      "We combine artistic creativity with technical precision to create production-ready concept art that guides the entire game development pipeline.",
    ],
  },
  {
    title: "Game Art",
    eyebrow: "Built From Passion. Driven By Craft.",
    image: art2D,
    imageAlt: "Game Art",
    imageFirst: true,
    paragraphs: [
      "Moonglade Atelier delivers high-quality game art outsourcing services, including 2D/3D game assets, environments, props, and visual elements tailored for modern game development. We help studios create engaging, production-ready visuals that enhance gameplay and player experience.",
      "Every asset is crafted with attention to detail, strong art direction, and technical precision to ensure seamless integration into game pipelines.",
    ],
  },
  {
    title: "Animation",
    eyebrow: "Built From Passion. Driven By Craft.",
    image: animation2D,
    imageAlt: "Animation",
    imageFirst: false,
    paragraphs: [
      "Moonglade Atelier delivers high-quality game animation services, including character animation, cinematic sequences, and motion design tailored for modern games. We create smooth, performance-optimized animations that enhance gameplay and player engagement.",
      "Every movement is crafted with precision to elevate immersion, storytelling, and overall visual impact.",
    ],
  },
  {
    title: "Creative Support",
    eyebrow: "Built From Passion. Driven By Craft.",
    image: kidsAnimation,
    imageAlt: "Creative Support",
    imageFirst: true,
    paragraphs: [
      "Moonglade Atelier provides scalable creative support and game art outsourcing services, helping studios extend their production capacity with high-quality assets and technical pipeline integration.",
      "Whether it’s long-term collaboration or short-term production support, we seamlessly integrate into your workflow to ensure consistent and efficient delivery.",
    ],
  },
  {
    title: "Porting / Migration",
    eyebrow: "Built From Passion. Driven By Craft.",
    image: animation3D,
    imageAlt: "Porting",
    imageFirst: false,
    paragraphs: [
      "Moonglade Atelier provides game porting and migration services, helping studios adapt games across platforms while preserving performance, visuals, and user experience.",
      "From optimization to cross-platform compatibility, we ensure smooth transitions with minimal disruption and high technical accuracy.",
    ],
  },
];

function ServiceSection({
  title,
  eyebrow,
  image,
  imageAlt,
  imageFirst,
  paragraphs,
}: (typeof serviceSections)[number]) {
  const textBlock = (
    <motion.div
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      className="space-y-6 text-center lg:text-left"
    >
      <motion.h2 variants={fadeUp} className="text-4xl md:text-5xl font-bold text-white">
        {title}
      </motion.h2>

      <motion.h3
        variants={fadeUp}
        className="text-xl md:text-2xl font-bold tracking-widest text-gray-300 uppercase"
      >
        {eyebrow}
      </motion.h3>

      {paragraphs.map((paragraph) => (
        <motion.p
          key={paragraph}
          variants={fadeUp}
          className="text-gray-400 text-lg leading-relaxed"
        >
          {paragraph}
        </motion.p>
      ))}

      <motion.div variants={fadeUp}>
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
  );

  const imageBlock = (
    <motion.div
      initial={{ opacity: 0, x: imageFirst ? -36 : 36 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.45 }}
      viewport={{ once: true, amount: 0.2 }}
      className={`flex justify-center ${imageFirst ? "lg:justify-start" : "lg:justify-end"}`}
    >
      <img
        src={image}
        alt={imageAlt}
        loading="lazy"
        decoding="async"
        className="w-full max-w-[500px] object-contain"
      />
    </motion.div>
  );

  return (
    <section
      className="content-auto relative z-10 mt-40 px-6"
      style={{ containIntrinsicSize: "900px" }}
    >
      <div className="max-w-[1400px] mx-auto grid lg:grid-cols-2 gap-16 items-center">
        {imageFirst ? imageBlock : textBlock}
        {imageFirst ? textBlock : imageBlock}
      </div>
    </section>
  );
}

export default function Services() {
  return (
    <PageLayout>
      <section className="relative min-h-screen mt-20 lg:mt-0 pt-20 pb-40 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${bgImage})` }}
        />
        <div className="absolute inset-0 bg-black/60" />

        <div className="container mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[85vh]">
            <motion.div
              variants={container}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              className="space-y-8 text-center lg:text-left"
            >
              <motion.h1
                variants={slideLeft}
                className="text-4xl lg:text-6xl font-bold bg-gradient-to-r from-[#5816bb] via-[#E46F1E] to-[#e8900d] text-transparent bg-clip-text"
              >
                Built From Passion. Driven by Craft.
              </motion.h1>

              <motion.p
                variants={slideLeft}
                className="text-gray-300 text-lg max-w-xl mx-auto lg:mx-0"
              >
                Moonglade Atelier is a game art outsourcing studio delivering
                high-quality 2D/3D game art, animation, and cinematic visuals.
              </motion.p>

              <motion.p
                variants={slideLeft}
                className="text-gray-300 text-lg max-w-xl mx-auto lg:mx-0"
              >
                We help game studios worldwide create engaging, production-ready
                assets that enhance player experiences.
              </motion.p>
            </motion.div>

            <div className="relative w-full h-[350px] md:h-[450px] lg:h-[500px]">
              <video
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
                poster={cinematic}
                className="w-full h-full object-contain"
              >
                <source
                  src="https://res.cloudinary.com/dtee5yyvw/video/upload/q_auto,f_auto/v1771336143/Wildvideo_z2q6p8.mp4"
                  type="video/mp4"
                />
              </video>
            </div>
          </div>
        </div>

        <section
          className="content-auto relative z-10 mt-32 px-6"
          style={{ containIntrinsicSize: "1200px" }}
        >
          <div className="max-w-[1400px] mx-auto">
            <div className="text-center mb-20">
              <h2 className="text-4xl md:text-5xl font-bold uppercase tracking-widest">
                Our Expertise
              </h2>
              <p className="text-gray-400 mt-3 text-lg">
                Our Services for Global Clients
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {expertiseCards.map((item) => (
                <div
                  key={`${item.title}-${item.img}`}
                  className="relative group overflow-hidden cursor-pointer"
                >
                  <img
                    src={item.img}
                    alt={item.title}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-[240px] object-cover transition-transform duration-500 group-hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-black/40 group-hover:opacity-0 transition" />

                  <div className="absolute inset-0 flex items-center justify-center group-hover:opacity-0 transition">
                    <h3 className="text-white text-2xl md:text-3xl font-bold uppercase text-center px-4">
                      {item.title}
                    </h3>
                  </div>
                </div>
              ))}
            </div>

            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              className="flex justify-center mt-16"
            >
              <Link to="/portfolio">
                <Button
                  variant="slanted"
                  size="lg"
                  className="tracking-widest font-heading text-lg rounded-none w-[200px]"
                >
                  View Portfolio
                </Button>
              </Link>
            </motion.div>
          </div>
        </section>

        {serviceSections.map((section) => (
          <ServiceSection key={section.title} {...section} />
        ))}
      </section>
    </PageLayout>
  );
}
