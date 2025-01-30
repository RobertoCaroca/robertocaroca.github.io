'use client';

import { IconCloud } from "@/components/ui/icon-cloud";
import { TextAnimate } from "@/components/ui/text-animate";
import { TextReveal } from "@/components/ui/text-reveal";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";

const lightIcons = [
  "/icons/anthropic.png",
  "/icons/openai.png",
  "/icons/claude.png", 
  "/icons/gemini.png",
  "/icons/meta.png",
  "/icons/midjourney.png",
  "/icons/anthropic.png",
  "/icons/openai.png",
  "/icons/claude.png",
  "/icons/gemini.png",
  "/icons/meta.png",
  "/icons/midjourney.png",
  "/icons/anthropic.png", 
  "/icons/openai.png",
  "/icons/claude.png",
  "/icons/gemini.png",
  "/icons/meta.png",
  "/icons/midjourney.png",
  "/icons/anthropic.png",
  "/icons/openai.png",
  "/icons/claude.png",
  "/icons/gemini.png",
  "/icons/midjourney.png",
  "/icons/meta.png",
];

const darkIcons = [
  "/icons/anthropic-dark.png",
  "/icons/openai-dark.png",
  "/icons/claude-dark.png", 
  "/icons/gemini-dark.png",
  "/icons/meta-dark.png",
  "/icons/midjourney-dark.png",
  "/icons/anthropic-dark.png",
  "/icons/openai-dark.png",
  "/icons/claude-dark.png",
  "/icons/gemini-dark.png",
  "/icons/meta-dark.png",
  "/icons/midjourney-dark.png",
  "/icons/anthropic-dark.png", 
  "/icons/openai-dark.png",
  "/icons/claude-dark.png",
  "/icons/gemini-dark.png",
  "/icons/meta-dark.png",
  "/icons/midjourney-dark.png",
  "/icons/anthropic-dark.png",
  "/icons/openai-dark.png",
  "/icons/claude-dark.png",
  "/icons/gemini-dark.png",
  "/icons/midjourney-dark.png",
  "/icons/meta-dark.png",
];

export default function AISection() {
  const { theme } = useTheme();
  const icons = theme === 'dark' ? darkIcons : lightIcons;

  return (
    <section id="ai-section" className="py-24 sm:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <TextAnimate 
          as="h2"
          className="mb-6 sm:mb-8 text-3xl sm:text-4xl lg:text-5xl font-bold dark:text-white text-center font-display tracking-tight"
          animation="blurInDown"
          by="character"
          delay={0.2}
          duration={0.5}
        >
          ¿Que es AI?
        </TextAnimate>
        <TextAnimate 
          className="mb-1 text-lg sm:text-xl lg:text-2xl text-gray-600 dark:text-gray-300 text-center"
          animation="blurInUp"
          by="word"
          delay={0.3}
        >
          En el sentido práctico
        </TextAnimate>
        <div className="flex justify-center">
          <div className="relative flex w-full items-center justify-center overflow-hidden">
            <IconCloud images={icons} />
          </div>
        </div>
        <TextReveal 
          text="La inteligencia artificial (IA) es la simulación de procesos de inteligencia humana por parte de máquinas, especialmente sistemas informáticos."
          className="mx-auto max-w-xl text-lg text-gray-600 dark:text-gray-300 text-center leading-relaxed"
        />
        <Button className="mt-16" href="#tools-section">
          Explorar herramientas
        </Button>
      </div>
    </section>
  );
} 