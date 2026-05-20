import type { ReactNode } from "react";
import { motion } from "framer-motion";
import DeferredRender from "@/components/DeferredRender";
import PageLayout from "@/components/PageLayout";

type PortfolioGamePageProps = {
  title: string;
  overview: string;
  heroDesktop: string;
  heroMobile: string;
  heroClassName?: string;
  gallery: ReactNode;
};

const techStack = ["Adobe Photoshop", "Procreate", "Midjourney", "GPT", "Spine"];

const cardVariants = {
  hidden: { opacity: 0, x: -36 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
};

const stackVariants = {
  hidden: { opacity: 0, x: 36 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
};

export default function PortfolioGamePage({
  title,
  overview,
  heroDesktop,
  heroMobile,
  heroClassName = "w-full h-[85vh] md:h-full object-cover brightness-110",
  gallery,
}: PortfolioGamePageProps) {
  return (
    <PageLayout>
      <section className="relative lg:pt-20 pt-24 bg-black flex justify-center overflow-hidden">
        <picture>
          <source media="(min-width: 768px)" srcSet={heroDesktop} />
          <img
            src={heroMobile}
            alt=""
            loading="eager"
            fetchPriority="high"
            decoding="async"
            className={heroClassName}
          />
        </picture>

        <div className="absolute inset-0 pointer-events-none bg-black/0">
          <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(0,0,0,0)_30%,rgba(0,0,0,0.3)_90%)]" />
          <div className="absolute top-10 left-0 w-full h-96 bg-gradient-to-b from-black/100 to-transparent" />
          <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black/100 to-transparent" />
        </div>
      </section>

      <motion.section
        initial={{ opacity: 0, y: 48 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.12 }}
        transition={{ duration: 0.55 }}
        className="relative w-full bg-black text-white overflow-hidden px-6 py-28"
      >
        <div className="relative max-w-7xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, x: -36 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5 }}
            className="font-display tracking-wide text-5xl lg:text-6xl sm:text-4xl md:text-5xl mb-16"
          >
            {title}
          </motion.h1>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.16 }}
            variants={{ visible: { transition: { staggerChildren: 0.12 } } }}
            className="grid grid-cols-1 lg:grid-cols-3 gap-14 items-start"
          >
            <motion.div variants={cardVariants} className="lg:col-span-2">
              <div className="panel-cut p-8 sm:p-10 bg-stone-950 border border-purple-900 lg:min-h-[380px]">
                <h2 className="text-3xl tracking-widest mb-6">OVERVIEW</h2>
                <p className="text-gray-300 leading-relaxed lg:text-2xl sm:text-base">
                  {overview}
                </p>
              </div>
            </motion.div>

            <motion.div variants={stackVariants} className="space-y-8">
              <h3 className="text-slate-400 tracking-widest text-lg">
                GAME TECH STACK
              </h3>

              <div className="grid grid-cols-2 gap-4">
                {techStack.map((item) => (
                  <div
                    key={item}
                    className="border border-purple-600 text-center py-3 text-sm tracking-wide hover:bg-purple-600/10 transition"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      <DeferredRender minHeight="900px" rootMargin="350px 0px">
        <motion.div
          initial={{ opacity: 0, y: 42 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.06 }}
          transition={{ duration: 0.55 }}
          className="images bg-black"
        >
          {gallery}
        </motion.div>
      </DeferredRender>
    </PageLayout>
  );
}
