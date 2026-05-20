import dragon1Mobile from "@/assets/dragon1Mobile.webp";
import Img1 from "@/assets/Dragons-game-imgs/d1.webp";
import Img2 from "@/assets/Dragons-game-imgs/d2.webp";
import Img3 from "@/assets/Dragons-game-imgs/d3.webp";
import Img4 from "@/assets/Dragons-game-imgs/d4.webp";
import Img5 from "@/assets/Dragons-game-imgs/d5.webp";
import Img6 from "@/assets/Dragons-game-imgs/d6.webp";
import Img7 from "@/assets/Dragons-game-imgs/d7.webp";
import Img8 from "@/assets/Dragons-game-imgs/d8.webp";
import Img9 from "@/assets/Dragons-game-imgs/d9.webp";
import Img10 from "@/assets/Dragons-game-imgs/d10.webp";
import PortfolioGamePage from "./PortfolioGamePage";

const overview =
  "Dragon's Treasure is a fantasy treasure slot game built around warriors, jewel tones, magic caves, and piles of gold. The reel set combines ornate fruit, premium letters, character portraits, and treasure symbols to support clear paytable hierarchy and strong win recognition. Warm firelight, violet cave lighting, and metallic UI elements give the bonus and reward screens a dramatic, high-value feel.";

export default function DragonsTreasure() {
  return (
    <PortfolioGamePage
      title="Dragon's Treasure"
      overview={overview}
      heroDesktop={Img10}
      heroMobile={dragon1Mobile}
      gallery={
        <div className="div1 lg:mx-20">
          {[Img1, Img2, Img3, Img4].map((src) => (
            <img
              key={src}
              src={src}
              alt=""
              loading="lazy"
              decoding="async"
              className="h-[40vh] lg:h-[100vh] md:h-[100vh] bg-cover w-full brightness-110"
            />
          ))}
          <div className="div2 mx-0">
            {[Img5, Img6].map((src) => (
              <img
                key={src}
                src={src}
                alt=""
                loading="lazy"
                decoding="async"
                className="h-full bg-cover w-full brightness-110"
              />
            ))}
          </div>
          {[Img7, Img8, Img9, Img10].map((src) => (
            <img
              key={src}
              src={src}
              alt=""
              loading="lazy"
              decoding="async"
              className="h-[40vh] lg:h-[100vh] md:h-[100vh] bg-cover w-full brightness-110"
            />
          ))}
        </div>
      }
    />
  );
}
