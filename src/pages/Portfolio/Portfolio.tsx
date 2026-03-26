import { lazy, Suspense, useEffect, useRef, useState, type ReactNode } from "react";
import { useNavigate } from "react-router-dom";
import PageLayout from "../../components/PageLayout";
import dragon1 from "@/assets/five.jpg";
import dragon1Mobile from "@/assets/dragon1Mobile.png";
import card1 from "@/assets/projectimg1.png";
import card2 from "@/assets/projectimg2.png";
import card3 from "@/assets/projectimg3.png";
import card4 from "@/assets/projectimg4.png";
import card5 from "@/assets/projectimg5.png";
import card6 from "@/assets/projectimg6.png";
import { Button } from "@/components/ui/button";
import groupimg1 from "@/assets/Group-1.png"
import groupimg2 from "@/assets/Group-2.png"
import groupimg3 from "@/assets/Group-3.png"

import mainImg1 from "@/assets/h-main.png"
import mainImg2 from "@/assets/o-main.png"

const portfolioVideoUrl =
  "https://res.cloudinary.com/dtee5yyvw/video/upload/q_auto,f_auto/v1773842596/portfoliovideo_keztw6.mp4";

const Indexs = lazy(() => import("@/components/images_anime"));

function DeferredSection({
  children,
  minHeight,
}: {
  children: ReactNode;
  minHeight: string;
}) {
  const hostRef = useRef<HTMLDivElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const node = hostRef.current;

    if (!node || isVisible) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin: "300px 0px" },
    );

    observer.observe(node);

    return () => {
      observer.disconnect();
    };
  }, [isVisible]);

  return (
    <div ref={hostRef} style={{ minHeight }}>
      {isVisible ? (
        <Suspense fallback={<div style={{ minHeight }} className="bg-black" />}>
          {children}
        </Suspense>
      ) : null}
    </div>
  );
}

export default function Portfolio() {
  const navigate = useNavigate();

  const go = (path: string) => {
    navigate(path);
  };


  return (
    <PageLayout>

      {/* ================= HERO SECTION ================= */}
      <section className="relative lg:pt-36 pt-24 bg-black flex justify-center overflow-hidden">
        <picture>
          <source media="(min-width: 768px)" srcSet={dragon1} />
          <img
            src={dragon1Mobile}
            alt=""
            loading="eager"
            fetchPriority="high"
            decoding="async"
            className="w-full h-[85vh] md:h-[100vh] object-cover brightness-110"
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

      {/* ================= TOP PRODUCTS ================= */}
      <section className="wave-gradient py-24 text-white">

        <div className="h-[450px] w-full flex flex-col items-center justify-center text-center">
          <h2 className="text-center text-5xl lg:text-7xl tracking-widest mb-12 lg:mb-0">
            WE BUILD{" "}
            <span className="block md:inline bg-gradient-to-r from-purple-500 via-indigo-400 to-cyan-300 bg-clip-text text-transparent">
              Exciting Games
            </span>
          </h2>

          <p className="text-center text-2xl m-16 lg:mx-72 lg:my-6 text-slate-400">
            We create projects that are remembered; combining fascinating mechanics,
            high-quality graphics, and implementing cutting-edge technology.
          </p>
        </div>

        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-10">

          {/* ================= CARD 1 ================= */}
          <div
            onClick={() => go("/portfolio/heavenly-dragons")}
            className="relative group rounded-xl overflow-hidden cursor-pointer"
          >
            <img src={card1} alt="Heavenly Dragons" loading="lazy" decoding="async"
              className="w-full h-full object-cover transition-all duration-500 brightness-[0.7] group-hover:brightness-105 group-hover:scale-110"
            />

            <div className="absolute inset-0 flex flex-col justify-end p-6">
              <div className="transition-all duration-300 group-hover:opacity-0 group-hover:translate-y-3">
                <h3 className="text-xl font-semibold mb-2">Heavenly Dragons</h3>
                <p className="text-sm text-gray-300 mb-4">
                  Dummy text ever since the 1500s, when an unknown printer took a galley of type.
                </p>
              </div>

              <Button
                variant="slanted"
                onClick={(e) => {
                  e.stopPropagation();
                  go("/portfolio/heavenly-dragons");
                }}
                className="w-fit px-4 py-2 text-xs text-white bg-transparent border border-slate-50 hover:bg-purple-600 hover:border-purple-600 transition"
              >
                Read More
              </Button>
            </div>
          </div>

          {/* ================= CARD 2 ================= */}
          <div
            onClick={() => go("/portfolio/jurassic-jungle")}
            className="relative group rounded-xl overflow-hidden cursor-pointer"
          >
            <img src={card2} alt="Jurassic Jungle" loading="lazy" decoding="async"
              className="w-full h-full object-cover transition-all duration-500 brightness-[0.8] group-hover:brightness-125 group-hover:scale-110"
            />

            <div className="absolute inset-0 flex flex-col justify-end p-6">
              <div className="transition-all duration-300 group-hover:opacity-0 group-hover:translate-y-3">
                <h3 className="text-xl font-semibold mb-2">Jurassic Jungle</h3>
                <p className="text-sm text-gray-300 mb-4">
                  Experience the thrill of prehistoric adventure.
                </p>
              </div>

              <Button
                variant="slanted"
                onClick={(e) => {
                  e.stopPropagation();
                  go("/portfolio/jurassic-jungle");
                }}
                className="w-fit px-4 py-2 text-xs text-white bg-transparent border border-slate-50 hover:bg-purple-600 hover:border-purple-600 transition"
              >
                Read More
              </Button>
            </div>
          </div>

          {/* ================= CARD 3 ================= */}
          <div
            onClick={() => go("/portfolio/dragons-treasure")}
            className="relative group rounded-xl overflow-hidden cursor-pointer"
          >
            <img src={card3} alt="Dragon’s Treasure"
              className="w-full h-full object-cover transition-all duration-500 brightness-[0.8] group-hover:brightness-125 group-hover:scale-110"
            />

            <div className="absolute inset-0 flex flex-col justify-end p-6">
              <div className="transition-all duration-300 group-hover:opacity-0 group-hover:translate-y-3">
                <h3 className="text-xl font-semibold mb-2">Dragon’s Treasure</h3>
                <p className="text-sm text-gray-300 mb-4">
                  Uncover legendary riches guarded by fire.
                </p>
              </div>

              <Button
                variant="slanted"
                onClick={(e) => {
                  e.stopPropagation();
                  go("/portfolio/dragons-treasure");
                }}
                className="w-fit px-4 py-2 text-xs text-white bg-transparent border border-slate-50 hover:bg-purple-600 hover:border-purple-600 transition"
              >
                Read More
              </Button>
            </div>
          </div>

          {/* ================= CARD 4 ================= */}
          <div
            onClick={() => go("/portfolio/mythic-fortune")}
            className="relative group rounded-xl overflow-hidden cursor-pointer"
          >
            <img src={card4} alt="Mythic Fortune" loading="lazy" decoding="async"
              className="w-full h-full object-cover transition-all duration-500 brightness-[0.8] group-hover:brightness-125 group-hover:scale-110"
            />

            <div className="absolute inset-0 flex flex-col justify-end p-6">
              <div className="transition-all duration-300 group-hover:opacity-0 group-hover:translate-y-3">
                <h3 className="text-xl font-semibold mb-2">Mythic Fortune</h3>
                <p className="text-sm text-gray-300 mb-4">
                  Dummy text ever since the 1500s, when an unknown printer took a galley of type.
                </p>
              </div>

              <Button
                variant="slanted"
                onClick={(e) => {
                  e.stopPropagation();
                  go("/portfolio/mythic-fortune");
                }}
                className="w-fit px-4 py-2 text-xs text-white bg-transparent border border-slate-50 hover:bg-purple-600 hover:border-purple-600 transition"
              >
                Read More
              </Button>
            </div>
          </div>
          
          {/* ================= CARD 5 ================= */}
          <div
            onClick={() => go("/portfolio/chinese-game")}
            className="relative group rounded-xl overflow-hidden cursor-pointer"
          >
            <img src={card5} alt="Chinese Game" loading="lazy" decoding="async"
              className="w-full h-full object-cover transition-all duration-500 brightness-[0.8] group-hover:brightness-150 group-hover:scale-110"
            />

            <div className="absolute inset-0 flex flex-col justify-end p-6">
              <div className="transition-all duration-300 group-hover:opacity-0 group-hover:translate-y-3">
                <h3 className="text-xl font-semibold mb-2">Osiris Fortune</h3>
                <p className="text-sm text-gray-300 mb-4">
                  Uncover legendary riches guarded by fire.
                </p>
              </div>

              <Button
                variant="slanted"
                onClick={(e) => {
                  e.stopPropagation();
                  go("/portfolio/chinese-game");
                }}
                className="w-fit px-4 py-2 text-xs text-white bg-transparent border border-slate-50 hover:bg-purple-600 hover:border-purple-600 transition"
              >
                Read More
              </Button>
            </div>
          </div>



          {/* ================= CARD 6 ================= */}
          <div
            onClick={() => go("/portfolio/pirate-goldrush")}
            className="relative group rounded-xl overflow-hidden cursor-pointer"
          >
            <img src={card6} alt="Pirate Goldrush" loading="lazy" decoding="async"
              className="w-full h-full object-cover transition-all duration-500 brightness-[0.8] group-hover:brightness-150 group-hover:scale-110"
            />

            <div className="absolute inset-0 flex flex-col justify-end p-6">
              <div className="transition-all duration-300 group-hover:opacity-0 group-hover:translate-y-3">
                <h3 className="text-xl font-semibold mb-2">Pirate Goldrush</h3>
                <p className="text-sm text-gray-300 mb-4">
                  Experience the thrill of treasure hunting.
                </p>
              </div>

              <Button
                variant="slanted"
                onClick={(e) => {
                  e.stopPropagation();
                  go("/portfolio/pirate-goldrush");
                }}
                className="w-fit px-4 py-2 text-xs text-white bg-transparent border border-slate-50 hover:bg-purple-600 hover:border-purple-600 transition"
              >
                Read More
              </Button>
            </div>
          </div>

          

        </div>

        <section className="mx-auto mt-20 max-w-7xl px-6">
          <div className="overflow-hidden rounded-2xl border border-white/10 bg-black/60 shadow-2xl">
            <video
              className="h-full w-full"
              autoPlay
              loop
              muted
              playsInline
              preload="metadata"
            >
              <source src={portfolioVideoUrl} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </section>

        {/* ================= GALLERY SECTION ================= */}
        
      </section>

      <section className="wave-gradient relative py-20 px-6 ">
        
        <div className="max-w-7xl mx-auto space-y-20">

          {/* ITEM 1 */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            {/* IMAGE */}
            <div className="flex justify-center">
              <div className="w-full rounded-xl overflow-hidden shadow-lg">
                <img
                  src={groupimg1}
                  alt="Game preview"
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full "
                />
              </div>
            </div>

            {/* CONTENT */}
            <div>
              <p className="text-gray-200 leading-relaxed lg:text-xl mb-6">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy text
                ever since the 1500s, when an unknown printer took a galley of
                type and scrambled it to make a type specimen book. It has
              </p>

              <Button variant="slanted" size="default" className="px-6 font-heading">
              <a href="/contact" className="tracking-widest text-base">Read More</a>
            </Button>
            </div>
          </div>

          {/* ITEM 2 */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div className="flex justify-center">
              <div className="w-full  rounded-xl overflow-hidden shadow-lg">
                <img
                  src={groupimg2}
                  alt="Game preview"
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <div>
              <p className="text-gray-200 leading-relaxed lg:text-xl mb-6">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy text
                ever since the 1500s, when an unknown printer took a galley of
                type and scrambled it to make a type specimen book. It has
              </p>

              <Button variant="slanted" size="default" className="px-6 font-heading">
              <a href="/contact" className="tracking-widest text-base">Read More</a>
            </Button>
            </div>
          </div>

          {/* ITEM 3 */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div className="flex justify-center">
              <div className="w-full rounded-xl overflow-hidden shadow-lg">
                <img
                  src={groupimg3}
                  alt="Game preview"
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <div>
              <p className="text-gray-2 00 lg:text-xl leading-relaxed mb-6">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy text
                ever since the 1500s, when an unknown printer took a galley of
                type and scrambled it to make a type specimen book. It has
              </p>

              <Button variant="slanted" size="default" className="px-6 font-heading">
              <a href="/contact" className="tracking-widest text-base">Read More</a>
            </Button>
            </div>
          </div>

        </div>
        {/* Images */}
      <div className="images bg-black mt-20 lg:mt-28">
          <img
            src={mainImg1}
            alt=""
            loading="lazy"
            decoding="async"
            className=" h-[30vh] lg:h-full md:h-[100vh] bg-cover w-full brightness-110"
          />
          <img
            src={mainImg2}
            alt=""
            loading="lazy"
            decoding="async"
            className=" h-[40vh] lg:h-full md:h-[100vh] bg-cover w-full brightness-110"
          />
          </div>
      </section>


    </PageLayout>
  );
}
