import dragon1Mobile from "@/assets/dragon1Mobile.webp";
import Img1 from "@/assets/Osiris-game-imgs/o1.webp";
import Img2 from "@/assets/Osiris-game-imgs/o2.webp";
import Img3 from "@/assets/Osiris-game-imgs/o3.webp";
import Img4 from "@/assets/Osiris-game-imgs/o4.webp";
import Img5 from "@/assets/Osiris-game-imgs/o5.webp";
import Img6 from "@/assets/Osiris-game-imgs/o6.webp";
import Img7 from "@/assets/Osiris-game-imgs/o8.webp";
import mainBG from "@/assets/Osiris-game-imgs/main.webp";
import PortfolioGamePage from "./PortfolioGamePage";

const overview =
  "Osiris Fortune is an Egyptian-themed slot game centered on temple architecture, desert light, Anubis statues, scarabs, canopic jars, and royal gold accents. The reel symbols are shaped for fast recognition, with warm sandstone palettes and crisp icon detailing that support clear win and bonus states. From the title screen to the game UI, the slot is designed to feel mystical, premium, and easy to read during play.";

export default function OsirisFortune() {
  return (
    <PortfolioGamePage
      title="Osiris Fortune"
      overview={overview}
      heroDesktop={mainBG}
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
          </div>
          {[Img2, Img3, Img4].map((src) => (
            <img
              key={src}
              src={src}
              alt=""
              loading="lazy"
              decoding="async"
              className="h-[40vh] lg:h-full md:h-[100vh] bg-cover w-full brightness-110"
            />
          ))}
          <div className="div1 lg:mx-20">
            {[Img5, Img6].map((src) => (
              <img
                key={src}
                src={src}
                alt=""
                loading="lazy"
                decoding="async"
                className="h-[40vh] lg:h-full md:h-[100vh] bg-cover w-full brightness-110"
              />
            ))}
          </div>
          <img
            src={Img7}
            alt=""
            loading="lazy"
            decoding="async"
            className="h-[40vh] lg:h-full md:h-[100vh] bg-cover w-full brightness-110"
          />
        </>
      }
    />
  );
}
