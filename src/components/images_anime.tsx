
import { useEffect, useRef } from "react";
import InfiniteGallery from "@/components/ui/3d-gallery-photography";
import gallery1 from "../assets/Chinese-game-imgs/c1.png";
import gallery2 from "../assets/Chinese-game-imgs/c2.png";
import gallery3 from "../assets/Chinese-game-imgs/c3.png";
import gallery4 from "../assets/Chinese-game-imgs/c4.png";
import gallery5 from "../assets/Chinese-game-imgs/c5.png";


const sampleImages = [
  { src: gallery1, alt: "Fashion editorial" },
  { src: gallery2, alt: "White Porsche GT3 RS" },
  { src: gallery3, alt: "Green Porsche GT3 RS" },
  { src: gallery4, alt: "Porsche 911 GT3" },
  { src: gallery5, alt: "Dark fantasy art" },
];

// ===== CONFIG =====
const SCROLLS_ALLOWED = 15;
const SCROLL_UNIT = 120;
const SCROLL_LIMIT = SCROLLS_ALLOWED * SCROLL_UNIT;

export default function Index() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const accumulated = useRef(0);

  useEffect(() => {
    const onWheel = (e: WheelEvent) => {
      const section = sectionRef.current;
      if (!section) return;

      const rect = section.getBoundingClientRect();

      // section is active when its center is in viewport
      const sectionCenter = rect.top + rect.height / 2;
      const viewportCenter = window.innerHeight / 2;

      const inSection = Math.abs(sectionCenter - viewportCenter) < rect.height / 2;

      if (!inSection) {
        accumulated.current = 0;
        return;
      }

      if (Math.abs(accumulated.current) < SCROLL_LIMIT) {
        e.preventDefault();              // 🔒 BLOCK PAGE SCROLL
        accumulated.current += e.deltaY;
      }
    };

    // 🔴 CRITICAL: capture = true
    document.addEventListener("wheel", onWheel, {
      passive: false,
      capture: true,
    });

    return () => {
      document.removeEventListener("wheel", onWheel, {
        capture: true,
      } as any);
    };
  }, []);

  return (
    <main className="min-h-screen w-full bg-gallery-bg">
      {/* content before */}

      <section
        ref={sectionRef}
          data-gallery-section
        className="relative h-screen w-full overflow-hidden"
      >
        <InfiniteGallery
          images={sampleImages}
          speed={1.2}
          zSpacing={3}
          visibleCount={10}
          falloff={{ near: 0.8, far: 14 }}
          className="h-screen w-full"
        />
      </section>

      {/* content after */}
    </main>
  );
}
