"use client";

import Image from "next/image";
import { TextAnimate } from "@/components/ui/text-animate";
import { Button } from "@/components/ui/button";

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
            <ul className="space-y-2 list-none">
              <li className="mx-auto max-w-xl text-lg text-gray-600 dark:text-gray-300 text-center leading-normal">
                Licenciado en Negocios y Economía
              </li>
              <li className="mx-auto max-w-xl text-lg text-gray-600 dark:text-gray-300 text-center leading-normal">
                Más de 15 años desarrollando producto tecnológico
              </li>
              <li className="mx-auto max-w-xl text-lg text-gray-600 dark:text-gray-300 text-center leading-normal">
                Magíster en Filosofía de la Mente y Estudios Cognitivos
              </li>
              <li className="mx-auto max-w-xl text-lg text-gray-600 dark:text-gray-300 text-center leading-normal">
                Certificado del MIT en Desorrollo de Software
              </li>
              <li className="mx-auto max-w-xl text-lg text-gray-600 dark:text-gray-300 text-center leading-normal">
                Certificado de Stanford en Desarrollo de Productos Tecnologicos
              </li>
              <li className="mx-auto max-w-xl text-lg text-gray-600 dark:text-gray-300 text-center leading-normal">
                Más de 2 años desarrollando productos con herramientas de AI
              </li>
            </ul>
          </div>
          <div className="text-center mt-16">
            <Button href="#ai-section">
              Descubrir AI
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
} 