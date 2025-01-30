"use client";

import { TextAnimate } from "@/components/ui/text-animate";
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
        <p className="mx-auto mb-12 max-w-xl text-lg text-gray-600 dark:text-gray-300 text-center leading-relaxed">
          El valle de la muerte
        </p>

        <div className="mb-12 sm:mb-16 flex justify-center">
          <div className="relative w-full max-w-lg aspect-square overflow-hidden rounded-lg">
            <video
              autoPlay
              loop
              muted
              playsInline
              className="absolute inset-0 h-full w-full object-cover"
            >
              <source src="/PitOfDeathAI.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>

        <p className="mx-auto max-w-xl text-lg text-gray-600 dark:text-gray-300 text-center leading-relaxed">
        El principal problema práctico al usar modelos o herramientas de IA es que, después de un tiempo, sus respuestas pueden volverse incoherentes o perder sentido. Esto ocurre porque los modelos generan texto basándose en patrones estadísticos, sin una comprensión real del contexto o la intención detrás de la conversación.
        </p>
        <Button className="mt-16" href="#tools-section">
          Explorar soluciones
        </Button>
      </div>
    </section>
  );
} 