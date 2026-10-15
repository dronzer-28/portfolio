"use client";

import { motion } from "framer-motion";
import { useEffect, useState, useCallback } from "react";

const PHRASES = [
  "shipping systems that scale",
  "building with AI agents",
  "chasing the bleeding edge",
  "turning ideas into infrastructure",
  "building what couldn't exist last year",
];

const TYPE_SPEED = 45;
const DELETE_SPEED = 25;
const PAUSE_AFTER_TYPE = 2000;
const PAUSE_AFTER_DELETE = 400;

function useRotatingText(phrases: string[]) {
  const [display, setDisplay] = useState("");
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const tick = useCallback(() => {
    const current = phrases[phraseIndex];

    if (!isDeleting) {
      if (display.length < current.length) {
        return { next: current.slice(0, display.length + 1), delay: TYPE_SPEED };
      }
      return { next: display, delay: PAUSE_AFTER_TYPE, startDelete: true };
    }

    if (display.length > 0) {
      return { next: display.slice(0, -1), delay: DELETE_SPEED };
    }
    return { next: "", delay: PAUSE_AFTER_DELETE, nextPhrase: true };
  }, [display, phraseIndex, isDeleting, phrases]);

  useEffect(() => {
    const { next, delay, startDelete, nextPhrase } = tick();

    const timeout = setTimeout(() => {
      setDisplay(next);
      if (startDelete) setIsDeleting(true);
      if (nextPhrase) {
        setIsDeleting(false);
        setPhraseIndex((i) => (i + 1) % phrases.length);
      }
    }, delay);

    return () => clearTimeout(timeout);
  }, [tick, phrases.length]);

  return display;
}

export function Hero() {
  const rotatingText = useRotatingText(PHRASES);

  return (
    <section className="relative flex min-h-[100svh] flex-col items-center justify-center overflow-hidden px-6 lg:px-8">
      {/* Animated background */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="hero-orb hero-orb-1" />
        <div className="hero-orb hero-orb-2" />
        <div className="hero-orb hero-orb-3" />
        <div className="hero-grain" />
      </div>

      {/* Content */}
      <div className="w-full max-w-6xl text-center">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.7,
            delay: 0.3,
            ease: [0.21, 0.47, 0.32, 0.98],
          }}
          className="font-display text-6xl font-bold leading-[1.0] tracking-tight text-fg sm:text-8xl lg:text-[9rem]"
        >
          Piyush
          <br />
          Majee
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="mt-5 font-display text-xl font-semibold tracking-tight text-accent sm:text-2xl lg:text-3xl"
        >
          Software Engineer &amp; Applied AI
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mx-auto mt-8 inline-flex items-baseline gap-2.5 rounded-full border border-border/60 bg-bg/50 px-5 py-2.5 font-mono text-sm backdrop-blur-sm sm:text-base"
        >
          <span className="text-accent">&gt;</span>
          <span className="text-fg">
            {rotatingText}
            <span className="ml-px inline-block h-[1em] w-[2px] translate-y-[2px] bg-accent animate-[blink_1s_steps(2)_infinite]" />
          </span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1.0 }}
          className="mx-auto mt-10 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 font-mono text-xs text-fg-muted"
        >
          <span className="inline-flex items-center gap-1.5">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="size-3 shrink-0 text-accent/60">
              <path fillRule="evenodd" d="m9.69 18.933.003.001C9.89 19.02 10 19 10 19s.11.02.308-.066l.002-.001.006-.003.018-.008a5.741 5.741 0 0 0 .281-.14c.186-.096.446-.24.757-.433.62-.384 1.445-.966 2.274-1.765C15.302 14.988 17 12.493 17 9A7 7 0 1 0 3 9c0 3.492 1.698 5.988 3.355 7.584a13.731 13.731 0 0 0 2.273 1.765 11.842 11.842 0 0 0 .976.544l.062.029.018.008.006.003ZM10 11.25a2.25 2.25 0 1 0 0-4.5 2.25 2.25 0 0 0 0 4.5Z" clipRule="evenodd" />
            </svg>
            Delhi, India
          </span>
          <span className="h-3 w-px bg-border" />
          <a href="mailto:piyushmajee28@gmail.com" className="transition-colors hover:text-accent">
            piyushmajee28@gmail.com
          </a>
          <span className="h-3 w-px bg-border" />
          <a href="https://github.com/dronzer-28" target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-accent">
            GitHub
          </a>
          <span className="h-3 w-px bg-border" />
          <a href="https://linkedin.com/in/piyushmajee" target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-accent">
            LinkedIn
          </a>
        </motion.div>
      </div>

      {/* Scroll — pinned to bottom */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.3 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <a
          href="#about"
          className="inline-flex flex-col items-center gap-1 font-mono text-[10px] tracking-widest uppercase text-fg-muted transition-colors hover:text-accent"
        >
          <span>Scroll</span>
          <motion.span
            animate={{ y: [0, 4, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            &darr;
          </motion.span>
        </a>
      </motion.div>
    </section>
  );
}
