import { motion } from "framer-motion";

const pulseTransition = {
  duration: 1.6,
  repeat: Infinity,
  ease: "easeInOut",
} as const;

export default function RouteLoader() {
  return (
    <div className="relative flex min-h-[40vh] items-center justify-center overflow-hidden bg-black px-6 my-52">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(88,22,187,0.35),_transparent_45%),radial-gradient(circle_at_bottom,_rgba(228,111,30,0.28),_transparent_40%)]" />

      <div className="relative flex flex-col items-center gap-6 text-center">
        <div className="relative flex h-24 w-24 items-center justify-center">
          <motion.div
            animate={{ rotate: 360, scale: [0.92, 1.04, 0.92] }}
            transition={{ duration: 2.4, repeat: Infinity, ease: "linear" }}
            className="absolute h-24 w-24 rounded-full border border-[#E46F1E]/60 border-t-[#5816bb] border-r-[#e8900d] shadow-[0_0_35px_rgba(228,111,30,0.18)]"
          />
          <motion.div
            animate={{ rotate: -360, scale: [1.02, 0.95, 1.02] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "linear" }}
            className="absolute h-16 w-16 rounded-full border border-[#5816bb]/50 border-b-[#E46F1E] border-l-[#e8900d]"
          />
          <motion.div
            animate={{ opacity: [0.55, 1, 0.55], scale: [0.9, 1.08, 0.9] }}
            transition={pulseTransition}
            className="h-4 w-4 rounded-full bg-gradient-to-r from-[#5816bb] via-[#E46F1E] to-[#e8900d] shadow-[0_0_24px_rgba(232,144,13,0.55)]"
          />
        </div>

        <div className="space-y-2">
          <motion.p
            animate={{ opacity: [0.45, 1, 0.45] }}
            transition={pulseTransition}
            className="bg-gradient-to-r from-[#5816bb] via-[#E46F1E] to-[#e8900d] bg-clip-text text-2xl font-semibold tracking-[0.35em] text-transparent"
          >
            MOONGLADE
          </motion.p>
          <p className="text-sm uppercase tracking-[0.45em] text-white/55">
            Loading Experience
          </p>
        </div>
      </div>
    </div>
  );
}
