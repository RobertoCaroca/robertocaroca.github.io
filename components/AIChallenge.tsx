"use client";

import Image from "next/image";
import { TextAnimate } from "@/components/ui/text-animate";
import { TextReveal } from "@/components/ui/text-reveal";
import { Button } from "@/components/ui/button";

export default function AIChallenge() {
  return (
    <section id="ai-challenge" className="py-24 sm:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <TextAnimate 
          as="h2"
          className="mb-6 sm:mb-8 text-3xl sm:text-4xl lg:text-5xl font-bold dark:text-white text-center font-display tracking-tight"
          animation="blurInDown"
          by="character"
          delay={0.2}
          duration={0.5}
        >
          El Desafío AI
        </TextAnimate>
        <TextAnimate 
          className="mb-12 text-lg sm:text-xl lg:text-2xl text-gray-600 dark:text-gray-300 text-center"
          animation="blurInUp"
          by="word"
          delay={0.3}
        >
          El punto de inflexión
        </TextAnimate>

        <div className="mb-12 sm:mb-16 flex justify-center">
          <div className="relative w-full max-w-2xl aspect-[16/9] overflow-hidden rounded-lg">
            <Image
              src="/PitOfDeathAI.png"
              alt="AI Progress Chart"
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>

        <TextReveal 
          text="El principal problema practico que enfrentamos al usar modelos o herramientas de IA es que despues de un tiempo las respuestas que entrengan esto modelos caen en un sin sentido."
          className="mx-auto max-w-xl text-lg text-gray-600 dark:text-gray-300 text-center leading-relaxed"
        />
        <Button className="mt-16" href="#tools-section">
          Explorar soluciones
        </Button>
      </div>
    </section>
  );
} 