import PageLayout from "@/components/PageLayout";
import { lazy, Suspense, useEffect, useRef, useState, type ReactNode } from "react";
import { Hero } from "./Hero";
import { ContentSection } from "./Content";

const Video = lazy(() => import("./FramedYouTubeVideo"));
const AboutSection = lazy(() =>
  import("./AboutSection").then((module) => ({ default: module.AboutSection })),
);
const FeatureCards = lazy(() =>
  import("./FeatureCards").then((module) => ({ default: module.FeatureCards })),
);

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

export default function Home() {
  return (
    <PageLayout>
      <Hero />
      <ContentSection />
      <DeferredSection minHeight="100vh">
        <Video />
      </DeferredSection>
      <DeferredSection minHeight="780px">
        <AboutSection />
      </DeferredSection>
      <DeferredSection minHeight="900px">
        <FeatureCards />
      </DeferredSection>
    </PageLayout>
  );
}
