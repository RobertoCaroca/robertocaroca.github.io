"use client"

import { cn } from "@/lib/utils";
import { motion, HTMLMotionProps } from "framer-motion";
import React, { ComponentType } from "react";

interface AuroraTextProps extends HTMLMotionProps<"div"> {
  className?: string;
  children: React.ReactNode;
  as?: string | React.ComponentType<any>;
}

export function AuroraText({
  className,
  children,
  as: Component = "span",
  ...props
}: AuroraTextProps) {
  const MotionComponent = motion(Component);

  return (
    <MotionComponent
      className={cn(
        "relative inline-block bg-clip-text text-transparent bg-gradient-to-r",
        "from-[var(--aurora-from,#ff1835)] via-[var(--aurora-via,#ffd34e)] to-[var(--aurora-to,#44b0ff)]",
        className
      )}
      {...props}
    >
      {children}
      <span className="pointer-events-none absolute inset-0 mix-blend-plus-lighter dark:mix-blend-plus-lighter animate-aurora-text">
        <span className="absolute inset-0 bg-gradient-to-r from-[var(--aurora-from,#ff1835)] via-[var(--aurora-via,#ffd34e)] to-[var(--aurora-to,#44b0ff)] blur-2xl" />
      </span>
    </MotionComponent>
  );
}
