import PageLayout from "@/components/PageLayout";
import DeferredRender from "@/components/DeferredRender";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import j2 from "@/assets/Chinese-game-imgs/c6.webp";
import imgMain from "@/assets/cred3.webp";
import imgWide from "@/assets/jester-BG.webp";
import expImg from "@/assets/img4.webp";
import bg1 from "@/assets/egg1.webp";
import bg2 from "@/assets/Farmgirl.webp";
import bg3 from "@/assets/Group11.webp";
import bg4 from "@/assets/jester.webp";
import bg5 from "@/assets/HeavenlyDragonslogo.webp";
import bg6 from "@/assets/AndekaFanda.webp";
import symbol2 from "@/assets/Symbol2.webp";
import symbol3 from "@/assets/Symbol3.webp";
import symbol4 from "@/assets/Symbol4.webp";
import symbol5 from "@/assets/Symbol5.webp";
import icon1 from "@/assets/Dragon-Eye.webp";
import icon2 from "@/assets/Dragon-Eye.webp";
import icon3 from "@/assets/Dragon-Eye.webp";
import icon4 from "@/assets/Dragon-Eye.webp";
import icon5 from "@/assets/Dragon-Eye.webp";
import icon6 from "@/assets/Dragon-Eye.webp";
import techstack from "@/assets/techstack.svg";

type ServiceDetailTemplateProps = {
  heroTitle: string;
  heroParagraphOne: string;
  heroParagraphTwo: string;
  servicesSectionTitle: string;
  serviceCards: Array<{
    title: string;
    text: string;
  }>;
};

const serviceCardVisuals = [
  { image: bg1, icon: icon1 },
  { image: bg2, icon: icon2 },
  { image: bg3, icon: icon3 },
  { image: bg4, icon: icon4 },
  { image: bg5, icon: icon5 },
  { image: bg6, icon: icon6 },
];

const desktopPortfolioSymbols = [
  { src: symbol2, alt: "Portfolio symbol 2" },
  { src: symbol3, alt: "Portfolio symbol 3" },
  { src: symbol4, alt: "Portfolio symbol 4" },
  { src: symbol5, alt: "Portfolio symbol 5" },
];

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 36 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

const slideLeft = {
  hidden: { opacity: 0, x: -42 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5 },
  },
};

const slideRight = {
  hidden: { opacity: 0, x: 42 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5 },
  },
};

export default function ServiceDetailTemplate({
  heroTitle,
  heroParagraphOne,
  heroParagraphTwo,
  servicesSectionTitle,
  serviceCards,
}: ServiceDetailTemplateProps) {
  return (
    <PageLayout>
      <section className="relative min-h-[100vh] mt-20 bg-black overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center h-[85vh] lg:h-[100vh] scale-105 brightness-[0.90]"
          style={{ backgroundImage: `url(${j2})` }}
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(0,0,0,0)_20%,rgba(0,0,0,0.75)_100%)]" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-black/9 via-black/7 to-transparent" />
        <div className="absolute top-0 left-0 w-full h-40 bg-gradient-to-b from-black to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-black to-transparent" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:py-24 py-36">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              variants={container}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              className="text-left lg:text-left my-10 mx-2"
            >
              <motion.h2 variants={slideLeft} className="text-6xl sm:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-purple-500 via-indigo-400 to-cyan-300 bg-clip-text text-transparent mb-6 drop-shadow-[0_0_20px_rgba(0,0,0,0.7)]">
                {heroTitle}
              </motion.h2>

              <motion.p variants={slideLeft} className="text-gray-300 text-xl sm:text-xl leading-relaxed max-w-xl lg:ml-auto mb-6 drop-shadow-md">
                {heroParagraphOne}
              </motion.p>

              <motion.p variants={slideLeft} className="text-gray-300 text-lg sm:text-xl leading-relaxed max-w-xl lg:ml-auto mb-10 drop-shadow-md">
                {heroParagraphTwo}
              </motion.p>

              <motion.div variants={slideLeft}>
                <Button variant="slanted" className="w-36">
                  <a href="/contact" className="tracking-wide font-heading text-xl">Get in Touch</a>
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      <DeferredRender minHeight="780px" rootMargin="350px 0px">
        <motion.section
          initial={{ opacity: 0, y: 48 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.12 }}
          transition={{ duration: 0.55 }}
          className="w-full bg-[#0c0c0c] text-white py-24 px-4 md:px-10"
        >
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <motion.h2 variants={slideLeft} className="text-4xl md:text-7xl font-bold tracking-wider my-10">
              5+ YEARS OF Experience
            </motion.h2>

            <motion.p variants={slideLeft} className="text-gray-400 leading-relaxed text-xl md:text-2xl max-w-2xl">
              At Moonglade, we bring over 5+ years of hands-on experience in game art and visual design, with a strong commitment to quality, accuracy, and on-time delivery. Our team specializes in creating trendy and industry-relevant 2D game art styles, including character design, environments, concept art, detailed 2D/3D assets, VFX, and smooth animations providing complete visual support for your game from idea to launch.
            </motion.p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 42, scale: 0.96 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.55 }}
            className="flex justify-center"
          >
            <div className="relative w-[300px] md:w-[380px] lg:w-[420px]">
              <div className="absolute inset-0 -z-10">
                <img loading="lazy" decoding="async"
                  src={expImg}
                  alt="Experience Image"
                  className="w-full h-full object-cover rounded-xl"
                />
              </div>

              <img loading="lazy" decoding="async"
                src={expImg}
                alt="Experience"
                className="w-full h-full "
              />
            </div>
          </motion.div>
        </div>
        </motion.section>
      </DeferredRender>

      <DeferredRender minHeight="1500px" rootMargin="350px 0px">
        <motion.section
          initial={{ opacity: 0, y: 48 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.55 }}
          className="w-full bg-[#0c0c0c] text-white py-20 px-4 md:px-10"
        >
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-7xl font-bold text-center mb-4 tracking-wide bg-gradient-to-r from-[#ffb86b] via-[#ff8c42] to-[#c84c2f] bg-clip-text text-transparent"
          >
            GAME ART Portfolio
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: 0.08 }}
            className="text-gray-400 text-center text-xl md:text-2xl max-w-6xl mx-auto leading-relaxed mb-16"
          >
            Moonglade artists create assets across all popular game art styles, from doodle art to monochromatic designs. Our successful projects reflect a strong balance of creativity and experience. Here are some notable examples of our 2D game art.
          </motion.p>

          <div className="grid grid-cols-1 lg:grid-cols-[1.05fr_0.95fr] gap-10 mb-10 items-start">
            <motion.div
              variants={slideLeft}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              className="relative flex justify-center rounded-xl bg-[#111] p-6"
            >
              <img loading="lazy" decoding="async"
                src={imgMain}
                alt="Main Art"
                className="max-h-[460px] w-full object-contain"
              />
            </motion.div>

            <motion.div
              variants={container}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              className="bg-[#111] p-8 grid grid-cols-2 gap-4 h-fit self-center"
            >
              {["Character Design", "Environment Design", "Game Elements Design", "Game Logotypes", "Game UI", "Slot Art"].map((item) => (
                <motion.button key={item} variants={slideRight} className="bg-[#1a1a1a] border border-gray-600 py-5 hover:bg-white hover:text-black transition text-xl">
                  {item}
                </motion.button>
              ))}
            </motion.div>
          </div>

          <motion.div
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.18 }}
            className="mb-10 hidden lg:grid lg:grid-cols-4 lg:gap-4"
          >
            {desktopPortfolioSymbols.map((item) => (
              <motion.div
                key={item.alt}
                variants={fadeUp}
                className="rounded-xl bg-[#111] p-4 flex items-center justify-center"
              >
                <img
                  loading="lazy"
                  decoding="async"
                  src={item.src}
                  alt={item.alt}
                  className="max-h-[280px] w-full object-contain"
                />
              </motion.div>
            ))}
          </motion.div>

          <div className="grid grid-cols-1 gap-4">
            <div className="rounded-xl bg-[#111] p-4 lg:hidden">
              <img
                loading="lazy"
                decoding="async"
                src={symbol4}
                alt="Portfolio symbol artwork"
                className="w-full object-contain"
              />
            </div>
          </div>

          <div className="mb-10">
            <img
              loading="lazy"
              decoding="async"
              src={imgWide}
              alt="Jester background artwork"
              className="w-full rounded-xl object-cover"
            />
          </div>
        </div>
        </motion.section>
      </DeferredRender>

      <DeferredRender minHeight="640px" rootMargin="350px 0px">
        <motion.section
          initial={{ opacity: 0, y: 48 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.12 }}
          transition={{ duration: 0.55 }}
          className="relative w-full bg-[#0d0620] text-white py-24 px-4 md:px-10 overflow-hidden"
        >
        <div className="absolute inset-0 opacity-20 pointer-events-none">
          <div className="w-full h-full bg-[linear-gradient(#ffffff0d_1px,transparent_1px),linear-gradient(90deg,#ffffff0d_1px,transparent_1px)] bg-[size:40px_40px]"></div>
        </div>

        <div className="relative max-w-7xl mx-auto flex flex-col lg:flex-row items-center lg:items-start gap-16">
          <motion.div
            initial={{ opacity: 0, x: -42 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5 }}
            className="flex"
          >
            <img loading="lazy" decoding="async"
              src={techstack}
              alt="Tech Stack"
              className="
      lg:w-max lg:h-full
      sm:w-72 sm:h-80
      object-contain
    "
            />
          </motion.div>

          <motion.div
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="max-w-xl mt-10"
          >
            <motion.h2 variants={slideRight} className="text-4xl md:text-5xl lg:text-6xl tracking-wide mb-6">
              TECHNOLOGICAL EXPERTISE
            </motion.h2>

            <motion.p variants={slideRight} className="text-gray-400 leading-relaxed lg:text-lg md:text-base">
              We leverage industry-standard tools and advanced technologies to deliver high-quality 2D/3D game art and animation. Our team utilizes software such as Adobe Photoshop, Illustrator, Procreate, Spine 2D, After Effects, and Daz3D to create production-ready assets for modern game development.
              <br />
              <br />
              Our technology-driven approach ensures flexibility, scalability, and precision allowing us to bring every creative idea to life without limitations.
            </motion.p>
          </motion.div>
        </div>
        </motion.section>
      </DeferredRender>

      <DeferredRender minHeight="1300px" rootMargin="350px 0px">
        <motion.section
          initial={{ opacity: 0, y: 48 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.55 }}
          className="w-full bg-[#0c0c0c] text-white py-20 px-4 md:px-10"
        >
        <div className="max-w-7xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-7xl font-bold tracking-wider mb-4 text-orange-300"
          >
            {servicesSectionTitle}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: 0.08 }}
            className="text-gray-400 max-w-7xl mx-auto text-sm md:text-2xl leading-relaxed mb-24 mt-10"
          >
            We specialize in high-quality 2D game art and illustration across multiple game genres. Moonglade Atelier covers the complete art production pipeline from concept design to individual game assets ensuring visually consistent and production-ready results for your project.
          </motion.p>

          <motion.div
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.12 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10"
          >
            {serviceCards.map((item, i) => {
              const visual = serviceCardVisuals[i % serviceCardVisuals.length];

              return (
              <motion.div
                key={i}
                variants={i % 3 === 0 ? slideLeft : i % 3 === 1 ? fadeUp : slideRight}
                className="
                group
                relative bg-[#141414]
                border border-[#2a2a2a]
                hover:border-orange-500
                rounded-xl p-0 overflow-hidden
                transition-all duration-500 ease-out
                hover:-translate-y-3
                hover:shadow-[0_24px_60px_rgba(255,122,26,0.22)]
              "
              >
                <div className="relative h-[280px] w-full overflow-hidden bg-[#0f0f0f]">
                  <img loading="lazy" decoding="async"
                    src={visual.image}
                    alt={item.title}
                    className="h-full w-full object-contain p-4 opacity-80 transition-all duration-500 ease-out group-hover:scale-110 group-hover:opacity-100"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-orange-500/20 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                  <div
                    className="
                    absolute -top-[1px] right-0
                    w-16 h-16
                    bg-[#141414]
                    rotate-45
                    translate-x-8 -translate-y-8
                    transition-colors duration-500
                    group-hover:bg-orange-500
                  "
                  ></div>

                  <div className="absolute top-4 right-4 bg-black/70 border border-orange-500 rounded-md p-3 transition-all duration-500 group-hover:scale-110 group-hover:bg-orange-500/20 group-hover:shadow-[0_0_24px_rgba(255,122,26,0.45)]">
                    <img loading="lazy" decoding="async" src={visual.icon} className="w-5 h-5 transition-transform duration-500 group-hover:rotate-12" />
                  </div>
                </div>

                <div className="p-6 text-left transition-colors duration-500 group-hover:bg-[#18110d]">
                  <h3 className="text-xl font-semibold mb-3 transition-colors duration-500 group-hover:text-orange-300">{item.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{item.text}</p>
                </div>
              </motion.div>
              );
            })}
          </motion.div>
        </div>
        </motion.section>
      </DeferredRender>
    </PageLayout>
  );
}

