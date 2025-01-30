"use client";

import Image from "next/image";
import { TextAnimate } from "@/components/ui/text-animate";
import { TextReveal } from "@/components/ui/text-reveal";

export default function AboutMe() {
  return (
    <section id="about-section" className="py-24 sm:py-32 flex items-center">
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center">
          <TextAnimate 
            as="h2"
            className="mb-6 sm:mb-8 text-3xl sm:text-4xl lg:text-5xl font-bold dark:text-white text-center font-display tracking-tight"
            animation="blurInDown"
            by="character"
            delay={0.2}
            duration={0.5}
          >
            Roberto Caroca
          </TextAnimate>

          <div className="mb-12 sm:mb-16 relative h-80 w-80 mx-auto overflow-hidden rounded-full border-4 border-white shadow-lg">
            <Image
              src="/profile.jpg"
              alt="Roberto Caroca"
              fill
              priority
              className="object-cover"
            />
          </div>

          <div className="max-w-2xl mx-auto">
            <TextReveal 
              text="• 15 años desarrollando producto tecnológico  • Magíster en Filosofía de la Mente y Estudios Cognitivos  • 2 años desarrollando productos con AI"
              className="mx-auto max-w-xl text-lg text-gray-600 dark:text-gray-300 text-center leading-relaxed"
            />
          </div>
        </div>
      </div>
    </section>
  );
} 