import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

const words = ["VISUALS...", "ARTWORK...", "DESIGNS...", "ANIMATIONS..."];

export function RotatingText() {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [nextWordIndex, setNextWordIndex] = useState(1);
  const [isSpinning, setIsSpinning] = useState(false);
  const [stoppedColumns, setStoppedColumns] = useState<number[]>([]);

  const gridSize = 9;

  useEffect(() => {
    const interval = setInterval(() => {
      setIsSpinning(true);
      setStoppedColumns([]);
      
      // Stop columns one by one with staggered delays
      for (let i = 0; i < gridSize; i++) {
        setTimeout(() => {
          setStoppedColumns(prev => [...prev, i]);
        }, 300 + i * 120); // Staggered stops
      }
      
      // Update words after all reels stop
      setTimeout(() => {
        setCurrentWordIndex((prev) => (prev + 1) % words.length);
        setNextWordIndex((prev) => (prev + 1) % words.length);
        setIsSpinning(false);
      }, 300 + gridSize * 120 + 100);
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  const currentWord = words[currentWordIndex];
  const nextWord = words[nextWordIndex];

  return (
    <div className="grid grid-cols-9 sm:grid-cols-11 gap-1.5 sm:gap-2 w-fit">
      {Array.from({ length: gridSize }).map((_, index) => {
        const currentLetter = currentWord[index] || "";
        const nextLetter = nextWord[index] || "";
        const hasCurrentLetter = currentLetter !== "" && currentLetter !== " ";
        const hasNextLetter = nextLetter !== "" && nextLetter !== " ";
        const hasAnyLetter = hasCurrentLetter || hasNextLetter;
        const hasStopped = stoppedColumns.includes(index);
        const isReelSpinning = isSpinning && !hasStopped;
        
        return (
          <div
            key={index}
            className={cn(
              "w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 rounded border overflow-hidden relative",
              "text-sm sm:text-base lg:text-lg font-semibold font-body",
              hasAnyLetter 
                ? "border-primary bg-primary/10 shadow-[0_0_20px_hsl(270_60%_50%/0.3)]" 
                : "border-muted-foreground/20 bg-transparent"
            )}
          >
            {/* Spinning blur overlay */}
            <div
              className={cn(
                "absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent pointer-events-none transition-opacity duration-150",
                isReelSpinning ? "opacity-100" : "opacity-0"
              )}
            />
            
            <div
              className="absolute inset-0 flex flex-col"
              style={{
                transform: isReelSpinning 
                  ? "translateY(-400%)" 
                  : hasStopped && isSpinning 
                    ? "translateY(-200%)" 
                    : "translateY(0%)",
                transition: isReelSpinning 
                  ? "transform 0.15s linear" 
                  : "transform 0.4s cubic-bezier(0.23, 1, 0.32, 1)",
                filter: isReelSpinning ? "blur(2px)" : "blur(0px)",
              }}
            >
              {/* Previous letter (for spin illusion) */}
              <div className="w-full h-full flex items-center justify-center text-foreground shrink-0 opacity-100">
                {hasCurrentLetter ? currentLetter : ""}
              </div>
              {/* Current letter */}
              <div className="w-full h-full flex items-center justify-center text-foreground shrink-0 ">
                {hasCurrentLetter ? currentLetter : ""}
              </div>
              {/* Next letter */}
              <div className="w-full h-full flex items-center justify-center text-foreground shrink-0 opacity-50">
                {hasNextLetter ? nextLetter : ""}
              </div>
              {/* Extra letter for smooth loop */}
              <div className="w-full h-full flex items-center justify-center text-foreground shrink-0 opacity-50">
                {hasNextLetter ? nextLetter : ""}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
