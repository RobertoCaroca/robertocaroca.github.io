"use client";

import React, { forwardRef, useRef } from "react";
import { cn } from "@/lib/utils";
import { AnimatedBeam } from "@/components/ui/animated-beam";
import { TextAnimate } from "@/components/ui/text-animate";
import Image from "next/image";
import { Button } from "@/components/ui/button";

const Circle = forwardRef<
  HTMLDivElement,
  { className?: string; children?: React.ReactNode }
>(({ className, children }, ref) => {
  return (
    <div
      ref={ref}
      className={cn(
        "z-10 flex size-12 items-center justify-center rounded-full border-2 border-border bg-white p-3 shadow-[0_0_20px_-12px_rgba(0,0,0,0.8)]",
        className,
      )}
    >
      {children}
    </div>
  );
});

Circle.displayName = "Circle";

export default function AITools() {
  const containerRef = useRef<HTMLDivElement>(null);
  const div1Ref = useRef<HTMLDivElement>(null);
  const div2Ref = useRef<HTMLDivElement>(null);
  const div3Ref = useRef<HTMLDivElement>(null);
  const div4Ref = useRef<HTMLDivElement>(null);
  const div5Ref = useRef<HTMLDivElement>(null);
  const div6Ref = useRef<HTMLDivElement>(null);
  const div7Ref = useRef<HTMLDivElement>(null);

  return (
    <section id="tools-section" className="py-24 sm:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <TextAnimate 
          as="h2"
          className="mb-6 sm:mb-8 text-3xl sm:text-4xl lg:text-5xl font-bold dark:text-white text-center font-display tracking-tight"
          animation="blurInDown"
          by="character"
          delay={0.2}
          duration={0.5}
        >
          Herramientas
        </TextAnimate>
        <p className="mx-auto max-w-xl text-lg text-gray-600 dark:text-gray-300 text-center leading-relaxed">
          Descubre las herramientas que están transformando la forma en que trabajamos.
        </p>
        <div className="mb-4 flex justify-center">
          <div
            className="relative flex w-full items-center justify-center overflow-hidden"
            ref={containerRef}
          >
            <div className="flex size-full flex-row items-stretch justify-between gap-10 max-w-lg">
              <div className="flex flex-col justify-center gap-2">
                <Circle ref={div1Ref}>
                  <Image src="/icons/anthropic.png" alt="Anthropic" width={24} height={24} />
                </Circle>
                <Circle ref={div2Ref}>
                  <Image src="/icons/claude.png" alt="Claude" width={24} height={24} />
                </Circle>
                <Circle ref={div3Ref}>
                  <Image src="/icons/gemini.png" alt="Gemini" width={24} height={24} />
                </Circle>
                <Circle ref={div4Ref}>
                  <Image src="/icons/meta.png" alt="Meta" width={24} height={24} />
                </Circle>
                <Circle ref={div5Ref}>
                <Image src="/icons/openai.png" alt="OpenAI" width={32} height={32} />
                </Circle>
              </div>
              <div className="flex flex-col justify-center">
                <Circle ref={div6Ref} className="size-16">
                  <Image src="/icons/cursor.png" alt="Cursor" width={32} height={32} />
                </Circle>
              </div>
              <div className="flex flex-col justify-center">
                <Circle ref={div7Ref}>
                  <UserIcon className="h-6 w-6" />
                </Circle>
              </div>
            </div>

            <AnimatedBeam
              containerRef={containerRef}
              fromRef={div1Ref}
              toRef={div6Ref}
              pathWidth={4}
              pathOpacity={0.3}
              className="blur-[1px]"
            />
            <AnimatedBeam
              containerRef={containerRef}
              fromRef={div2Ref}
              toRef={div6Ref}
              pathWidth={4}
              pathOpacity={0.3}
              className="blur-[1px]"
            />
            <AnimatedBeam
              containerRef={containerRef}
              fromRef={div3Ref}
              toRef={div6Ref}
              pathWidth={4}
              pathOpacity={0.3}
              className="blur-[1px]"
            />
            <AnimatedBeam
              containerRef={containerRef}
              fromRef={div4Ref}
              toRef={div6Ref}
              pathWidth={4}
              pathOpacity={0.3}
              className="blur-[1px]"
            />
            <AnimatedBeam
              containerRef={containerRef}
              fromRef={div5Ref}
              toRef={div6Ref}
              pathWidth={4}
              pathOpacity={0.3}
              className="blur-[1px]"
            />
            <AnimatedBeam
              containerRef={containerRef}
              fromRef={div6Ref}
              toRef={div7Ref}
              pathWidth={4}
              pathOpacity={0.3}
              className="blur-[1px]"
            />
          </div>
        </div>
        <p className="mx-auto max-w-xl text-lg text-gray-600 dark:text-gray-300 text-center leading-relaxed">
          Llamaremos herramientas de IA a aplicaciones que usan modelos de IA para resolver problemas específicos. Lo que hacen estas herramientas es tomar estos modelos y entreneralos en un contexto más específico para que puedan resolver problemas más complejos y entregar resultados más precisos.
        </p>
        <Button className="mt-16" href="#tools-list-section">
          Ver herramientas
        </Button>
      </div>
    </section>
  );
}

const UserIcon = ({ className }: { className?: string }) => (
  <svg
    className={cn(className, "text-black dark:text-black")}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
    <circle cx="12" cy="7" r="4" />
  </svg>
); 