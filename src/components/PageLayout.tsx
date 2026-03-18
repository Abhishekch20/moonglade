import { lazy, Suspense, useEffect, useRef, useState, type ReactNode } from "react";
import { Navbar } from "./Navbar";

const Footer = lazy(() => import("./Footer"));
const Contact = lazy(() => import("./ContactSection"));

function DeferredLayoutSection({
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

export default function PageLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">{children}</main>
      <DeferredLayoutSection minHeight="1100px">
        <Contact />
      </DeferredLayoutSection>
      <DeferredLayoutSection minHeight="520px">
        <Footer />
      </DeferredLayoutSection>
    </div>
  );
}
