"use client";

import React, { useEffect, useRef, useState } from "react";
import { Progress } from "@/components/ui/progress";

export default function ProgressBar() {
  const [progress, setProgress] = useState(13);
  const progressRef = useRef<HTMLDivElement>(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            setHasAnimated(true);
            animateProgress(13, 63, 1500); // Animate from 13 → 66 in 1 second
          }
        });
      },
      { threshold: 0.3 }
    );

    if (progressRef.current) {
      observer.observe(progressRef.current);
    }

    return () => {
      if (progressRef.current) observer.unobserve(progressRef.current);
    };
  }, [hasAnimated]);

  // Smooth animation function
  const animateProgress = (start: number, end: number, duration: number) => {
    const startTime = performance.now();

    const step = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progressValue = Math.min(start + ((end - start) * elapsed) / duration, end);
      setProgress(progressValue);
      if (elapsed < duration) {
        requestAnimationFrame(step);
      }
    };

    requestAnimationFrame(step);
  };

  return (
    <>
      <div
        ref={progressRef}
        className="flex justify-center self-start w-full relative!"
        style={{
          all: "revert",
          display: "flex",
          justifyContent: "center",
          alignSelf: "flex-start",
          paddingTop: "1.5rem",
          width: "100%",
          fontSize: "14px",
          lineHeight: "1.5",
          letterSpacing: "normal",
        }}
      >
        <Progress
          value={progress}
          className="w-[90%] transition-all duration-300"
        />
        <div className="absolute bottom-[25%] left-[63%] -translate-x-3/5 -translate-y-1 rounded-full p-2 text-blue-800 border-4 border-gray-300 text-sm">
          You
        </div>
        <div className="absolute bottom-[0%] left-[63%] -translate-x-full translate-y-full w-0 h-0 border-l-8 border-r-8 border-t-8 border-l-transparent border-r-transparent border-t-gray-300"></div>
        <div className="absolute bottom-0 left-[63%] -translate-x-3/4 translate-y-7 text-blue-800 text-sm">
          63%
        </div>
      </div>
    </>
  );
}
