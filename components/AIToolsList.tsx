"use client";

import Image from "next/image";
import Link from "next/link";
import { TextAnimate } from "@/components/ui/text-animate";
import { Button } from "@/components/ui/button";

interface AITool {
  name: string;
  description: string;
  image: string;
  url: string;
  category: string;
}

const aiTools: AITool[] = [
  {
    name: "Galileo AI",
    description: "Diseño de interfaces y experiencias de usuario con IA",
    image: "/screenshots/galileo.png",
    url: "https://www.usegalileo.ai/",
    category: "Diseño UI/UX"
  },
  {
    name: "Imagine Art",
    description: "Crea y explora imágenes, videos y audio con IA",
    image: "/screenshots/imagine.png",
    url: "https://www.imagine.art/dashboard",
    category: "Multimedia"
  },
  {
    name: "InVideo",
    description: "Editor de video potenciado por IA",
    image: "/screenshots/invideo.png",
    url: "https://invideo.io/",
    category: "Video"
  },
  {
    name: "Luma Labs",
    description: "Creación de videos y visualizaciones 3D con IA",
    image: "/screenshots/luma.png",
    url: "https://lumalabs.ai/dream-machine",
    category: "3D/Video"
  },
  {
    name: "BHuman",
    description: "Crea videos personalizados con avatares IA",
    image: "/screenshots/bhuman.png",
    url: "https://www.bhuman.ai/",
    category: "Video"
  },
  {
    name: "Vidnoz",
    description: "Generador de videos con avatares IA",
    image: "/screenshots/vidnoz.png",
    url: "https://es.vidnoz.com/",
    category: "Video"
  },
  {
    name: "Write Homes",
    description: "Copywriting especializado para bienes raíces",
    image: "/screenshots/writehomes.png",
    url: "https://write.homes/",
    category: "Copywriting"
  },
  {
    name: "Epique AI",
    description: "Suite de herramientas IA para bienes raíces",
    image: "/screenshots/epique.png",
    url: "https://epique.cloud/epique-ai/",
    category: "Bienes Raíces"
  }
];

export default function AIToolsList() {
  return (
    <section id="tools-list-section" className="py-24 sm:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <TextAnimate 
          as="h2"
          className="mb-6 sm:mb-8 text-3xl sm:text-4xl lg:text-5xl font-bold dark:text-white text-center font-display tracking-tight"
          animation="blurInDown"
          by="character"
          delay={0.2}
          duration={0.5}
        >
          Herramientas AI útiles
        </TextAnimate>
        <TextAnimate 
          className="mb-12 text-lg sm:text-xl lg:text-2xl text-gray-600 dark:text-gray-300 text-center"
          animation="blurInUp"
          by="word"
          delay={0.3}
        >
          Explora y descubre nuevas posibilidades
        </TextAnimate>
        <div className="grid grid-cols-1 gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-4">
          {aiTools.map((tool) => (
            <Link 
              href={tool.url}
              target="_blank"
              rel="noopener noreferrer" 
              key={tool.name}
              className="group relative overflow-hidden rounded-lg bg-white shadow-lg transition-transform hover:-translate-y-1 hover:shadow-xl dark:bg-gray-800"
            >
              <div className="aspect-video relative overflow-hidden">
                <Image
                  src={tool.image}
                  alt={tool.name}
                  fill
                  className="object-cover transition-transform group-hover:scale-105"
                />
              </div>
              <div className="p-4">
                <span className="mb-2 inline-block rounded-full bg-blue-100 px-3 py-1 text-xs font-semibold text-blue-800 dark:bg-blue-900 dark:text-blue-200">
                  {tool.category}
                </span>
                <h3 className="mb-2 text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 dark:text-white font-display">
                  {tool.name}
                </h3>
                <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300">
                  {tool.description}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
} 