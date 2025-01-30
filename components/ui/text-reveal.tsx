"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { cn } from "@/lib/utils";

export interface TextRevealProps {
  text: string;
  className?: string;
}

export const TextReveal = ({ text, className }: TextRevealProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 80%", "end 20%"],
  });

  const words = text.split(" ");
  const opacity = useTransform(scrollYProgress, [0, 0.5], [0, 1]);

  return (
    <motion.div 
      ref={ref}
      style={{ opacity }}
      className={cn("relative py-10", className)}
    >
      <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 leading-relaxed font-sans">
        {words.map((word, i) => (
          <motion.span
            key={i}
            className="inline-block mx-1"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ 
              duration: 0.5,
              delay: i * 0.05,
              ease: [0.4, 0, 0.2, 1]
            }}
            viewport={{ 
              once: true,
              margin: "-100px"
            }}
          >
            {word}{" "}
          </motion.span>
        ))}
      </p>
    </motion.div>
  );
};
