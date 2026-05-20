import { useEffect, useRef, useState, type ReactNode } from "react";

type DeferredRenderProps = {
  children: ReactNode;
  minHeight: string;
  rootMargin?: string;
};

export default function DeferredRender({
  children,
  minHeight,
  rootMargin = "250px 0px",
}: DeferredRenderProps) {
  const hostRef = useRef<HTMLDivElement | null>(null);
  const [shouldRender, setShouldRender] = useState(false);

  useEffect(() => {
    const node = hostRef.current;

    if (!node || shouldRender) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          setShouldRender(true);
          observer.disconnect();
        }
      },
      { rootMargin },
    );

    observer.observe(node);

    return () => observer.disconnect();
  }, [rootMargin, shouldRender]);

  return (
    <div ref={hostRef} style={{ minHeight }}>
      {shouldRender ? children : null}
    </div>
  );
}
