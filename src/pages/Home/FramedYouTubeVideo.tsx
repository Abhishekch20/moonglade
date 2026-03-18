import { useEffect, useRef, useState } from "react";

const FramedYouTubeVideo = () => {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [muted, setMuted] = useState(true);
  const [shouldLoadVideo, setShouldLoadVideo] = useState(false);

  useEffect(() => {
    const node = sectionRef.current;

    if (!node || shouldLoadVideo) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) {
          setShouldLoadVideo(true);
          observer.disconnect();
        }
      },
      { rootMargin: "250px 0px" },
    );

    observer.observe(node);

    return () => {
      observer.disconnect();
    };
  }, [shouldLoadVideo]);

  return (
    <section
      ref={sectionRef}
      className="relative w-screen h-screen flex items-center justify-center bg-black overflow-hidden"
    >

      <div className="relative w-[85vw] max-w-[1700px] aspect-video mt-20">
        {/* VIDEO */}
        {shouldLoadVideo ? (
          <video
            autoPlay
            muted={muted}
            loop
            playsInline
            preload="metadata"
            poster="https://res.cloudinary.com/dtee5yyvw/video/upload/q_auto,f_auto/v1770994788/dragonvideoedited_x7rpu7.jpg"
            className="hidden md:block absolute inset-0 w-full h-full object-contain py-10"
          >
            <source
              src="https://res.cloudinary.com/dtee5yyvw/video/upload/q_auto,f_auto/v1770994788/dragonvideoedited_x7rpu7.mp4"
              type="video/mp4"
            />
          </video>
        ) : (
          <img
            src="https://res.cloudinary.com/dtee5yyvw/video/upload/q_auto,f_auto/v1770994788/dragonvideoedited_x7rpu7.jpg"
            alt=""
            loading="lazy"
            decoding="async"
            className="hidden md:block absolute inset-0 w-full h-full object-contain py-10"
          />
        )}
        {/* MOBILE VIDEO */}
      </div>
      {shouldLoadVideo ? (
        <video
          src="https://res.cloudinary.com/dtee5yyvw/video/upload/q_auto,f_auto/v1770994237/dragonmobileversion_wdaou3.mp4"
          autoPlay
          muted={muted}
          loop
          playsInline
          preload="metadata"
          poster="https://res.cloudinary.com/dtee5yyvw/video/upload/q_auto,f_auto/v1770994237/dragonmobileversion_wdaou3.jpg"
          className="block md:hidden absolute inset-0 w-full h-full object-cover p-10"
        />
      ) : (
        <img
          src="https://res.cloudinary.com/dtee5yyvw/video/upload/q_auto,f_auto/v1770994237/dragonmobileversion_wdaou3.jpg"
          alt=""
          loading="lazy"
          decoding="async"
          className="block md:hidden absolute inset-0 w-full h-full object-cover p-10"
        />
      )}
    </section>
  );
};

export default FramedYouTubeVideo;
