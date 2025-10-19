"use client";

import { useEffect, useRef, useState } from "react";

export default function CarouselControls({ targetId }: { targetId: string }) {
  const [canLeft, setCanLeft] = useState(false);
  const [canRight, setCanRight] = useState(false);
  const [mounted, setMounted] = useState(false);
  const targetRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    setMounted(true);
    const el = document.getElementById(targetId) as HTMLElement | null;
    targetRef.current = el;
    if (!el) return;

    const update = () => {
      const max = el.scrollWidth - el.clientWidth;
      setCanLeft(el.scrollLeft > 0);
      setCanRight(el.scrollLeft < max - 1);
      const progress = max > 0 ? Math.min(1, el.scrollLeft / max) : 0;
      el.style.setProperty("--progress", String(progress));
    };

    update();
    el.addEventListener("scroll", update, { passive: true });
    const ro = new ResizeObserver(update);
    ro.observe(el);
    return () => {
      el.removeEventListener("scroll", update);
      ro.disconnect();
    };
  }, [targetId]);

  const scrollBy = (dir: number) => {
    const el = targetRef.current as HTMLElement | null;
    if (!el) return;
    const amount = Math.round(el.clientWidth * 0.9) * dir;
    el.scrollBy({ left: amount, behavior: "smooth" });
  };

  // Smooth horizontal scroll using mouse wheel (vertical to horizontal)
  useEffect(() => {
    const el = targetRef.current as HTMLElement | null;
    if (!el) return;
    const onWheel = (e: WheelEvent) => {
      if (Math.abs(e.deltaY) > Math.abs(e.deltaX)) {
        e.preventDefault();
        el.scrollBy({ left: e.deltaY, behavior: "auto" });
      }
    };
    el.addEventListener("wheel", onWheel, { passive: false });
    return () => el.removeEventListener("wheel", onWheel);
  }, [mounted]);

  // Drag to scroll (mouse)
  useEffect(() => {
    const el = targetRef.current as HTMLElement | null;
    if (!el) return;
    let isDown = false;
    let startX = 0;
    let startLeft = 0;
    const onDown = (e: MouseEvent) => {
      isDown = true;
      startX = e.pageX;
      startLeft = el.scrollLeft;
    };
    const onMove = (e: MouseEvent) => {
      if (!isDown) return;
      e.preventDefault();
      el.scrollLeft = startLeft - (e.pageX - startX);
    };
    const onUp = () => {
      isDown = false;
    };
    el.addEventListener("mousedown", onDown);
    el.addEventListener("mousemove", onMove);
    el.addEventListener("mouseup", onUp);
    el.addEventListener("mouseleave", onUp);
    return () => {
      el.removeEventListener("mousedown", onDown);
      el.removeEventListener("mousemove", onMove);
      el.removeEventListener("mouseup", onUp);
      el.removeEventListener("mouseleave", onUp);
    };
  }, [mounted]);

  return (
    <>
      {/* Progress bar */}
      <div className="carousel-progress" aria-hidden />
      {/* Arrow controls */}
      <button
        type="button"
        aria-label="Scroll left"
        className={`carousel-btn is-left ${canLeft ? "opacity-100" : "opacity-50 cursor-not-allowed"}`}
        onClick={() => scrollBy(-1)}
        disabled={!canLeft}
      >
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
          <path d="M15 18l-6-6 6-6" />
        </svg>
      </button>
      <button
        type="button"
        aria-label="Scroll right"
        className={`carousel-btn is-right ${canRight ? "opacity-100" : "opacity-50 cursor-not-allowed"}`}
        onClick={() => scrollBy(1)}
        disabled={!canRight}
      >
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
          <path d="M9 18l6-6-6-6" />
        </svg>
      </button>
    </>
  );
}
