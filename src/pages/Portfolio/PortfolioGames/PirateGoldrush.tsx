import dragon1Mobile from "@/assets/dragon1Mobile.webp";
import Img1 from "@/assets/Pirates-game-imgs/p1.webp";
import Img2 from "@/assets/Pirates-game-imgs/p2.webp";
import Img3 from "@/assets/Pirates-game-imgs/p3.webp";
import Img4 from "@/assets/Pirates-game-imgs/p4.webp";
import Img5 from "@/assets/Pirates-game-imgs/p5.webp";
import Img6 from "@/assets/Pirates-game-imgs/p6.webp";
import Img7 from "@/assets/Pirates-game-imgs/p7.webp";
import Img8 from "@/assets/Pirates-game-imgs/p8.webp";
import PortfolioGamePage from "./PortfolioGamePage";

const overview =
  "Pirate Goldrush is a bright seafaring slot game set on a ship deck with tropical islands, rope rigging, treasure chests, parrots, bombs, maps, and playful pirate characters. The reel symbols use colorful cartoon styling and bold shapes, making free-spin, multiplier, and treasure cues easy to identify. The interface keeps the spin button, bet controls, win field, and balance area clear for a lively arcade-style slot experience.";

export default function PirateGoldrush() {
  return (
    <PortfolioGamePage
      title="Pirate Goldrush"
      overview={overview}
      heroDesktop={Img8}
      heroMobile={dragon1Mobile}
      gallery={
        <>
          <div className="div1 lg:mx-20">
            {[Img1, Img2, Img3, Img4, Img5, Img6].map((src) => (
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
          {[Img7, Img8].map((src) => (
            <img
              key={src}
              src={src}
              alt=""
              loading="lazy"
              decoding="async"
              className="h-full bg-cover w-full brightness-110"
            />
          ))}
        </>
      }
    />
  );
}
