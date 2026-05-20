import { motion } from "framer-motion";
import dragon1Mobile from "@/assets/dragon1Mobile.webp";
import Img1 from "@/assets/Jurassic-game-imgs/j1.webp";
import Img2 from "@/assets/Jurassic-game-imgs/j2.webp";
import Img3 from "@/assets/Jurassic-game-imgs/j3.webp";
import Img4 from "@/assets/Jurassic-game-imgs/j4.webp";
import Img5 from "@/assets/Jurassic-game-imgs/j5.webp";
import Img6 from "@/assets/Jurassic-game-imgs/j6.webp";
import Img7 from "@/assets/Jurassic-game-imgs/j7.webp";
import Img8 from "@/assets/Jurassic-game-imgs/j8.webp";
import PortfolioGamePage from "./PortfolioGamePage";

const overview =
  "Jurassic Jungle is a prehistoric slot game with glowing jungle scenery, volcanic backdrops, dinosaur portraits, eggs, bones, and exploration-themed symbols. The reel art balances playful creature icons with bold feature cues, helping bonus and high-value symbols stand out clearly during play. Purple, teal, and sunset lighting give the slot a cinematic adventure mood while keeping the game screen readable and energetic.";

const galleryContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 36 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function JurassicJungle() {
  return (
    <PortfolioGamePage
      title="JURASSIC JUNGLE"
      overview={overview}
      heroDesktop={Img7}
      heroMobile={dragon1Mobile}
      gallery={
        <motion.div
          variants={galleryContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.08 }}
          className="div1 lg:mx-16"
        >
          <motion.img
            variants={fadeUp}
            src={Img1}
            alt=""
            loading="lazy"
            decoding="async"
            className="h-[40vh] lg:h-[100vh] md:h-[100vh] bg-cover w-full brightness-110"
          />
          {[Img2, Img3, Img4, Img5].map((src) => (
            <motion.img
              key={src}
              variants={fadeUp}
              src={src}
              alt=""
              loading="lazy"
              decoding="async"
              className="h-[40vh] lg:h-auto md:h-[100vh] bg-cover w-full brightness-110"
            />
          ))}
          {[Img6, Img7, Img8].map((src) => (
            <motion.img
              key={src}
              variants={fadeUp}
              src={src}
              alt=""
              loading="lazy"
              decoding="async"
              className="h-[40vh] lg:h-[100vh] md:h-[100vh] bg-cover w-full brightness-110"
            />
          ))}
        </motion.div>
      }
    />
  );
}
