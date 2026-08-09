"use client";

import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useSpring,
} from "framer-motion";
import {
  useRef,
  type MouseEvent,
  type ReactNode,
  type RefObject,
} from "react";
import { cn } from "@/lib/cn";

type GlowButtonProps = {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  className?: string;
  variant?: "primary" | "ghost";
  type?: "button" | "submit";
  disabled?: boolean;
};

export function GlowButton({
  children,
  href,
  onClick,
  className,
  variant = "primary",
  type = "button",
  disabled = false,
}: GlowButtonProps) {
  const ref = useRef<HTMLAnchorElement | HTMLButtonElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 280, damping: 22 });
  const springY = useSpring(y, { stiffness: 280, damping: 22 });
  const glow = useMotionTemplate`radial-gradient(140px circle at ${springX}px ${springY}px, rgba(255,122,24,0.45), transparent 55%)`;

  function handleMove(event: MouseEvent) {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    x.set(event.clientX - rect.left);
    y.set(event.clientY - rect.top);
  }

  function handleLeave() {
    x.set(0);
    y.set(0);
  }

  const classes = cn(
    "group relative inline-flex items-center justify-center overflow-hidden rounded-full px-7 py-3.5 text-sm font-medium tracking-wide transition-transform duration-300 will-change-transform",
    variant === "primary" &&
      "bg-[var(--accent)] text-[var(--ink)] shadow-[0_0_0_1px_rgba(255,122,24,0.35),0_18px_50px_rgba(255,122,24,0.28)] hover:scale-[1.03] active:scale-[0.98]",
    variant === "ghost" &&
      "border border-white/20 bg-white/5 text-white backdrop-blur-md hover:border-[var(--accent)]/60 hover:bg-white/10",
    disabled && "pointer-events-none opacity-55",
    className,
  );

  const content = (
    <>
      <motion.span
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{ background: glow }}
      />
      <span className="relative z-10 flex items-center gap-2">
        {children}
        <span
          aria-hidden
          className="grid h-7 w-7 place-items-center rounded-full bg-black/15 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
        >
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path
              d="M3 7h8M7 3l4 4-4 4"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
      </span>
    </>
  );

  if (href) {
    return (
      <motion.a
        ref={ref as RefObject<HTMLAnchorElement>}
        href={href}
        onClick={onClick}
        onMouseMove={handleMove}
        onMouseLeave={handleLeave}
        whileHover={{ y: -2 }}
        className={classes}
      >
        {content}
      </motion.a>
    );
  }

  return (
    <motion.button
      ref={ref as RefObject<HTMLButtonElement>}
      type={type}
      disabled={disabled}
      aria-disabled={disabled}
      onClick={onClick}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      whileHover={disabled ? undefined : { y: -2 }}
      className={classes}
    >
      {content}
    </motion.button>
  );
}
