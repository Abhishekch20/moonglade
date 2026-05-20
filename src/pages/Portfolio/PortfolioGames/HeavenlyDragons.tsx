import dragon1Mobile from "@/assets/dragon1Mobile.webp";
import heavenlydragons from "@/assets/heavenlydragons.webp";
import Img1 from "@/assets/Chinese-game-imgs/c1.webp";
import Img2 from "@/assets/Chinese-game-imgs/c2.webp";
import Img3 from "@/assets/Chinese-game-imgs/c3.webp";
import Img4 from "@/assets/Chinese-game-imgs/c4.webp";
import Img5 from "@/assets/Chinese-game-imgs/c5.webp";
import Img6 from "@/assets/Chinese-game-imgs/c6.webp";
import Img7 from "@/assets/Chinese-game-imgs/c7.webp";
import PortfolioGamePage from "./PortfolioGamePage";

const overview =
  "Heavenly Dragons is a premium Asian-fantasy slot game built around golden dragon imagery, red lacquer backdrops, cloud motifs, koi symbols, guardian lions, and scale-patterned card letters. The reel symbols use strong silhouettes, polished gold trim, and high-contrast color coding so wins and special icons are easy to read at a glance. From the title art to the symbol sheet, the game is designed to feel ceremonial, collectible, and reward-driven.";

export default function HeavenlyDragons() {
  return (
    <PortfolioGamePage
      title="Heavenly Dragons"
      overview={overview}
      heroDesktop={heavenlydragons}
      heroMobile={dragon1Mobile}
      heroClassName="w-full h-[85vh] md:h-[100vh] object-cover brightness-110"
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
          <img
            src={Img7}
            alt=""
            loading="lazy"
            decoding="async"
            className="h-full bg-cover w-full brightness-110"
          />
        </>
      }
    />
  );
}
