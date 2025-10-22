"use client";

import Image, { type StaticImageData } from "next/image";
import { useEffect, useState } from "react";

type Props = {
  src: StaticImageData;
  alt: string;
  className?: string;
};

// Desktop-only render without hydration mismatch:
// - First render (SSR and first client render) returns null.
// - After hydration, we check media query and conditionally show image.
export default function HeroImageDesktop({ src, alt, className }: Props) {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 1024px)");
    const update = () => setShow(mq.matches);
    update();
    mq.addEventListener?.("change", update);
    return () => mq.removeEventListener?.("change", update);
  }, []);

  if (!show) return null;

  return (
    <div className={className}>
      <div className="rounded-2xl bg-white/80 backdrop-blur ring-1 ring-gray-200 p-4 shadow-sm">
        <Image
          src={src}
          width={src.width}
          height={src.height}
          alt={alt}
          className="w-full h-auto rounded-xl ring-1 ring-black/5"
          priority={false}
        />
      </div>
    </div>
  );
}
