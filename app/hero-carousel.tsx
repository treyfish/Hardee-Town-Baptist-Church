"use client";

import { useEffect, useState } from "react";

// Auto-rotating hero background. Cross-fades through `images` every 5s.
// Landscape photos fill the frame (cover). Portrait photos are shown whole
// (contain) over a blurred copy of themselves, so nothing gets cropped off.
export default function HeroCarousel({ images }: { images: string[] }) {
  const [index, setIndex] = useState(0);
  const [portrait, setPortrait] = useState<Record<string, boolean>>({});

  useEffect(() => {
    if (images.length <= 1) return;
    const id = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(id);
  }, [images.length]);

  return (
    <div className="absolute inset-0">
      {images.map((src, i) => {
        const isPortrait = portrait[src];
        return (
          <div
            key={src}
            className={`absolute inset-0 transition-opacity duration-[1200ms] ease-in-out ${
              i === index ? "opacity-100" : "opacity-0"
            }`}
          >
            {/* Blurred fill behind portrait images (hidden under cover for landscape) */}
            {isPortrait && (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={src}
                alt=""
                aria-hidden
                className="absolute inset-0 w-full h-full object-cover scale-110 blur-2xl"
              />
            )}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={src}
              alt=""
              onLoad={(e) => {
                const img = e.currentTarget;
                const p = img.naturalHeight > img.naturalWidth;
                setPortrait((prev) =>
                  prev[src] === p ? prev : { ...prev, [src]: p }
                );
              }}
              className={`absolute inset-0 w-full h-full ${
                isPortrait ? "object-contain" : "object-cover"
              }`}
            />
          </div>
        );
      })}
    </div>
  );
}
