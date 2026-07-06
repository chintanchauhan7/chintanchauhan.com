"use client";

import { useEffect, useState } from "react";

export default function TypedText({
  text,
  speedMs = 45,
  startDelayMs = 300,
  className = "",
}: {
  text: string;
  speedMs?: number;
  startDelayMs?: number;
  className?: string;
}) {
  const [typed, setTyped] = useState("");
  const [done, setDone] = useState(false);

  useEffect(() => {
    const prefersReduced =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (prefersReduced) {
      const id = setTimeout(() => {
        setTyped(text);
        setDone(true);
      }, 0);
      return () => clearTimeout(id);
    }

    let i = 0;
    let interval: ReturnType<typeof setInterval>;
    const start = setTimeout(() => {
      interval = setInterval(() => {
        i += 1;
        setTyped(text.slice(0, i));
        if (i >= text.length) {
          clearInterval(interval);
          setDone(true);
        }
      }, speedMs);
    }, startDelayMs);

    return () => {
      clearTimeout(start);
      clearInterval(interval);
    };
  }, [text, speedMs, startDelayMs]);

  return (
    <span className={className}>
      {typed}
      <span
        aria-hidden
        className="inline-block w-[0.55ch] animate-[blink_1s_step-end_infinite] text-accent"
      >
        {done ? "_" : "▋"}
      </span>
    </span>
  );
}
