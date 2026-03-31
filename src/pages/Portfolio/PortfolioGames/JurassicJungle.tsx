
import PageLayout from "@/components/PageLayout";
import { Button } from "@/components/ui/button";
import heavenlydragons from "@/assets/heavenlydragons.webp";
import dragon1Mobile from "@/assets/dragon1Mobile.webp";

/* images */
import Img1 from "@/assets/Jurassic-game-imgs/j1.webp"
import Img2 from "@/assets/Jurassic-game-imgs/j2.webp"
import Img3 from "@/assets/Jurassic-game-imgs/j3.webp"
import Img4 from "@/assets/Jurassic-game-imgs/j4.webp"
import Img5 from "@/assets/Jurassic-game-imgs/j5.webp"
import Img6 from "@/assets/Jurassic-game-imgs/j6.webp"
import Img7 from "@/assets/Jurassic-game-imgs/j7.webp"
import Img8 from "@/assets/Jurassic-game-imgs/j8.webp"



export default function JurassicJungle() {
  return (
    <PageLayout>
      {/* ================= HERO SECTION ================= */}
      <section className="relative lg:pt-20 pt-24 bg-black flex justify-center overflow-hidden">
        <picture>
          <source media="(min-width: 768px)" srcSet={Img7} />
          <img
            src={dragon1Mobile}
            alt=""
            loading="eager"
            fetchPriority="high"
            decoding="async"
            className="w-full h-[85vh] md:h-full object-cover brightness-110"
          />
        </picture>

        {/* VIGNETTE OVERLAY */}
        <div className="absolute inset-0 pointer-events-none bg-black/0">
          <div className="absolute inset-0
            bg-[radial-gradient(circle,rgba(0,0,0,0)_30%,rgba(0,0,0,0.3)_90%)]" />

          <div className="absolute top-10 left-0 w-full h-96
            bg-gradient-to-b from-black/100 to-transparent" />

          <div className="absolute bottom-0 left-0 w-full h-32
            bg-gradient-to-t from-black/100 to-transparent" />
        </div>
      </section>

      {/* overview & tech stack */}

      <section className="relative w-full bg-black text-white overflow-hidden px-6 py-28">

        <div className="relative max-w-7xl mx-auto">
          {/* TITLE */}
          <h1 className="font-display tracking-wide text-5xl lg:text-6xl sm:text-4xl md:text-5xl mb-16">
            JURASSIC JUNGLE
          </h1>

          {/* CONTENT */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-14 items-start ">
            {/* OVERVIEW CARD */}
            <div className="lg:col-span-2 ">
              <div className="
                panel-cut
                p-8 sm:p-10 
                bg-stone-950
                border border-purple-900
                lg:min-h-[380px]
              ">

                <h2 className="text-3xl tracking-widest mb-6">OVERVIEW</h2>

                <p className="text-gray-300 leading-relaxed lg:text-2xl sm:text-base">
                  This is a sample placeholder description used to represent
                  content in a game overview section. It describes a fantasy
                  themed slot set in a magical environment with visual elements,
                  characters, and animations. The layout, effects, bonus flow,
                  and UI elements mentioned here are only for demonstration
                  purposes and help visualize how real content will appear once
                  finalized.
                </p>
              </div>
            </div>

            {/* TECH STACK */}
            <div className="space-y-8">
              <h3 className="text-slate-400 tracking-widest text-lg">
                GAME TECH STACK
              </h3>

              <div className="grid grid-cols-2 gap-4">
                {["Adobe Photoshop", "Procreate", "Midjourney", "GPT", "Spine"].map(
                  (item, index) => (
                    <div
                      key={index}
                      className="border border-purple-600 text-center py-3 text-sm tracking-wide  hover:bg-purple-600/10 transition"
                    >
                      {item}
                    </div>
                  )
                )}
              </div>
            </div>
          </div>
        </div>

        {/* CUT CORNER STYLE */}

      </section>

      {/* Images */}
      <div className="images bg-black">
        <div className="div1  lg:mx-16 ">
          <img loading="lazy" decoding="async"
            src={Img1}
            alt=""
            className=" h-[40vh] lg:h-[100vh] md:h-[100vh] bg-cover w-full brightness-110"
          />
          <img loading="lazy" decoding="async"
            src={Img2}
            alt=""
            className="h-[40vh] lg:h-auto md:h-[100vh] bg-cover w-full brightness-110"
          />
          <img loading="lazy" decoding="async"
            src={Img3}
            alt=""
            className=" h-[40vh] lg:h-auto md:h-[100vh] bg-cover w-full brightness-110"
          />
          <img loading="lazy" decoding="async"
            src={Img4}
            alt=""
            className=" h-[40vh] lg:h-auto md:h-[100vh] bg-cover w-full brightness-110"
          />
          <img loading="lazy" decoding="async"
            src={Img5}
            alt=""
            className=" h-[40vh] lg:h-auto md:h-[100vh] bg-cover w-full brightness-110"
          />
          <img loading="lazy" decoding="async"
            src={Img6}
            alt=""
            className=" h-[40vh] lg:h-[100vh] md:h-[100vh] bg-cover w-full brightness-110"
          />
          <img loading="lazy" decoding="async"
            src={Img7}
            alt=""
            className=" h-[40vh] lg:h-[100vh] md:h-[100vh] bg-cover w-full brightness-110"
          />
          <img loading="lazy" decoding="async"
            src={Img8}
            alt=""
            className=" h-[40vh] lg:h-[100vh] md:h-[100vh] bg-cover w-full brightness-110"
          />
        </div>

      </div>
    </PageLayout>
  );
}

