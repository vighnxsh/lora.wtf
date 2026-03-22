"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const images = ["/nothanksiuseai.png", "/sonimcrine.png", "/waifu.png"];

export function FlashingGrid() {
  const cells = 3;
  const [grid, setGrid] = useState<number[]>(() =>
    Array.from({ length: cells }, (_, i) => i % images.length)
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setGrid((prev) => {
        const next = [...prev];
        const idx = Math.floor(Math.random() * cells);
        const current = next[idx];
        let newImg = Math.floor(Math.random() * images.length);
        while (newImg === current && images.length > 1) {
          newImg = Math.floor(Math.random() * images.length);
        }
        next[idx] = newImg;
        return next;
      });
    }, 400);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="absolute inset-0 grid grid-cols-3 grid-rows-1 gap-0 overflow-hidden">
      {grid.map((imgIdx, i) => (
        <div key={i} className="relative w-full h-full overflow-hidden">
          <Image
            src={images[imgIdx]}
            alt=""
            fill
            unoptimized
            className="object-cover transition-opacity duration-300"
            sizes="33vw"
            priority
          />
        </div>
      ))}
      <div className="absolute inset-0 bg-black/30" />
    </div>
  );
}
