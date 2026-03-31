import PageLayout from "../../components/PageLayout";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import bgImage from "@/assets/ChinesegameBG.webp";
import japaneseWoman from "@/assets/japanese_woman.webp";
import animation2D from "@/assets/jester.webp";
import animation3D from "@/assets/Group11.webp";
import kidsAnimation from "@/assets/Monkey.webp";
import art2D from "@/assets/egg1.webp";
import art3D from "@/assets/blue_moonglade.webp";
import cinematic from "@/assets/green_moonglade.webp";
import symbolArt from "@/assets/red_moonglade.webp";
import logoArt from "@/assets/Symbol4.webp";
import wildArt from "@/assets/Symbol5.webp";
import jadeLion from "@/assets/jade_lion.webp";
import dragonEyeArt from "@/assets/Dragon-Eye.webp";
import expertiseAnimation2D from "@/assets/d6.webp";
import expertiseAnimation3D from "@/assets/bg_download.webp";
import expertiseKidsAnimation from "@/assets/jj_bg_bonus_2.webp";
import expertise2DArt from "@/assets/Chinese-game-BG-download.webp";
import expertise3DArt from "@/assets/jj_bg_download.webp";
import expertiseCinematic from "@/assets/11slide3.webp";
import expertiseWebSlots from "@/assets/Dragons-game-imgs/d3.webp";
import expertiseIGaming from "@/assets/careers-bg.webp";
import expertiseArt from "@/assets/1GameBG.webp";

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
  { title: "2D ANIMATION", img: expertiseAnimation2D },
  { title: "3D ANIMATION", img: expertiseAnimation3D },
  { title: "KIDS ANIMATION", img: expertiseKidsAnimation },
  { title: "2D ART", img: expertise2DArt },
  { title: "3D ART", img: expertise3DArt },
  { title: "CINEMATIC GAME TRAILER", img: expertiseCinematic },
  { title: "WEB BASED SLOTS", img: expertiseWebSlots },
  { title: "IGAMING", img: expertiseIGaming },
  { title: "ART", img: expertiseArt },
];

const serviceSections = [
  {
    title: "Concept Art",
    eyebrow: "Built From Passion. Driven By Craft.",
    image: jadeLion,
    imageAlt: "Concept Art",
    imageFirst: false,
    imageClassName: "max-w-[380px]",
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
    imageClassName: "",
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
    imageClassName: "",
    paragraphs: [
      "Moonglade Atelier delivers high-quality game animation services, including character animation, cinematic sequences, and motion design tailored for modern games. We create smooth, performance-optimized animations that enhance gameplay and player engagement.",
      "Every movement is crafted with precision to elevate immersion, storytelling, and overall visual impact.",
    ],
  },
  {
    title: "Creative Support",
    eyebrow: "Built From Passion. Driven By Craft.",
    image: dragonEyeArt,
    imageAlt: "Creative Support",
    imageFirst: true,
    imageClassName: "",
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
    imageClassName: "",
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
  imageClassName,
  paragraphs,
}: (typeof serviceSections)[number]) {
  const textBlock = (
    <motion.div
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      className="mx-auto max-w-2xl space-y-5 px-2 text-center lg:mx-0 lg:max-w-[640px] lg:space-y-7 lg:px-4 lg:text-left"
    >
      <motion.h2
        variants={fadeUp}
        className="text-3xl font-bold leading-tight text-white sm:text-4xl md:text-5xl lg:text-6xl"
      >
        {title}
      </motion.h2>

      <motion.h3
        variants={fadeUp}
        className="text-base font-bold uppercase tracking-[0.24em] text-gray-300 sm:text-lg md:text-xl"
      >
        {eyebrow}
      </motion.h3>

      {paragraphs.map((paragraph) => (
        <motion.p
          key={paragraph}
          variants={fadeUp}
          className="text-base leading-8 text-gray-400 sm:text-lg lg:text-[1.15rem]"
        >
          {paragraph}
        </motion.p>
      ))}

      <motion.div variants={fadeUp}>
        <Link to="/portfolio">
          <Button
            variant="slanted"
            size="lg"
            className="group mb-8 w-[180px] rounded-none font-heading text-base tracking-[0.18em] sm:text-lg lg:mb-0"
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
      className={`flex items-center justify-center px-2 ${imageFirst ? "lg:justify-start" : "lg:justify-end"}`}
    >
      <img
        src={image}
        alt={imageAlt}
        loading="lazy"
        decoding="async"
        className={`w-full object-contain ${imageClassName || "max-w-[520px]"}`}
      />
    </motion.div>
  );

  return (
    <section
      className="content-auto relative z-10 mt-24 px-6 sm:mt-28 lg:mt-32"
      style={{ containIntrinsicSize: "900px" }}
    >
      <div className="mx-auto grid max-w-[1400px] items-center gap-10 lg:grid-cols-[minmax(0,1.02fr)_minmax(0,0.98fr)] lg:gap-16">
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

            <div className="relative flex h-[350px] w-full items-center justify-center md:h-[450px] lg:h-[500px]">
              <img
                src={japaneseWoman}
                alt="Japanese woman artwork"
                loading="eager"
                fetchPriority="high"
                decoding="async"
                className="h-full w-full object-contain"
              />
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
                    className="h-[240px] w-full object-contain bg-[#111111ae] p-4 transition-transform duration-500 group-hover:scale-105"
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
