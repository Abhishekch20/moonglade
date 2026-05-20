import dragon1Mobile from "@/assets/dragon1Mobile.webp";
import Img1 from "@/assets/Mythic-game-imgs/m1.webp";
import Img2 from "@/assets/Mythic-game-imgs/m2.webp";
import Img3 from "@/assets/Mythic-game-imgs/m3.webp";
import Img4 from "@/assets/Mythic-game-imgs/m4.webp";
import Img5 from "@/assets/Mythic-game-imgs/m5.webp";
import Img6 from "@/assets/Mythic-game-imgs/m6.webp";
import Img7 from "@/assets/Mythic-game-imgs/m7.webp";
import PortfolioGamePage from "./PortfolioGamePage";

const overview =
  "Mythic Fortune is an elegant fantasy slot game framed by marble architecture, enchanted forest depth, jeweled fruit, ornate letters, and luminous magical symbols. The reels use gold-trimmed icons against deep blue and violet backgrounds, giving each pay symbol a premium, collectible quality. The interface keeps spin controls, multipliers, and reward states clear while preserving a refined mythic atmosphere.";

export default function MythicFortune() {
  return (
    <PortfolioGamePage
      title="Mythic Fortune"
      overview={overview}
      heroDesktop={Img3}
      heroMobile={dragon1Mobile}
      gallery={
        <>
          <div className="div1 lg:mx-20">
            <img
              src={Img1}
              alt=""
              loading="lazy"
              decoding="async"
              className="h-[40vh] lg:h-full md:h-[100vh] bg-cover w-full brightness-110"
            />
            <img
              src={Img2}
              alt=""
              loading="lazy"
              decoding="async"
              className="h-[40vh] lg:h-[100vh] md:h-[100vh] bg-cover w-full brightness-110"
            />
          </div>
          <img
            src={Img3}
            alt=""
            loading="lazy"
            decoding="async"
            className="h-[40vh] lg:h-full md:h-[100vh] bg-cover w-full brightness-110"
          />
          <div className="div1 lg:mx-20">
            {[Img4, Img5, Img6].map((src) => (
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
