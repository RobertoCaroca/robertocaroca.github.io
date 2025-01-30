"use client";

import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { CanvasRevealEffect } from "@/components/ui/canvas-reveal-effect";
import { TextAnimate } from "@/components/ui/text-animate";
import { Button } from "@/components/ui/button";
import { MessageSquare, RotateCcw, FileText, RefreshCw } from "lucide-react";

const tips = [
  {
    title: "Conversar",
    description: "Antes de ir directo a tu pregunta, conversa con la IA para definir la mejor forma de plantearla.",
    color: "bg-emerald-900",
    animationSpeed: 5.1,
  },
  {
    title: "Reiniciar",
    description: "Después de definir cómo formular tu pregunta, inicia una nueva conversación para restablecer el contexto.",
    color: "bg-black",
    animationSpeed: 3,
    colors: [[236, 72, 153], [232, 121, 249]],
  },
  {
    title: "Resumir",
    description: "Cuando notes que la IA empieza a divagar, pídele que resuma lo realizado y los siguientes pasos.",
    color: "bg-sky-600",
    animationSpeed: 3,
    colors: [[125, 211, 252]],
  },
  {
    title: "Voler a reiniciar",
    description: "Cuando notes que ha entrado en un bucle de error, usa el resumen y los pasos a seguir para iniciar una nueva conversación.",
    color: "bg-purple-900",
    animationSpeed: 4,
    colors: [[167, 139, 250]],
  },
];

export default function AITips() {
  return (
    <section id="tips-section" className="py-24 sm:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <TextAnimate 
          as="h2"
          className="mb-6 sm:mb-8 text-3xl sm:text-4xl lg:text-5xl font-bold dark:text-white text-center font-display tracking-tight"
          animation="blurInDown"
          by="character"
          delay={0.2}
          duration={0.5}
        >
          Consejos Prácticos
        </TextAnimate>
        <p className="mx-auto mb-12 max-w-xl text-lg text-gray-600 dark:text-gray-300 text-center leading-relaxed">
         Aprendizajes tras 2 Años Trabajando con IA
        </p>
        <div className="grid grid-cols-1 gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-4">
          {tips.map((tip) => (
            <Card key={tip.title} {...tip} />
          ))}
        </div>
        <div className="text-center mt-16">
          <Button href="#about-section">
            Conocer más
          </Button>
        </div>
      </div>
    </section>
  );
}

interface CardProps {
  title: string;
  description: string;
  color: string;
  animationSpeed: number;
  colors?: number[][];
}

const Card = ({ title, description, color, animationSpeed, colors }: CardProps) => {
  const [hovered, setHovered] = React.useState(false);
  
  const getIcon = (title: string) => {
    switch (title) {
      case "Conversar":
        return <MessageSquare className="h-12 w-12" />;
      case "Reiniciar":
        return <RotateCcw className="h-12 w-12" />;
      case "Resumir":
        return <FileText className="h-12 w-12" />;
      case "Voler a reiniciar":
        return <RefreshCw className="h-12 w-12" />;
      default:
        return <MessageSquare className="h-12 w-12" />;
    }
  };
  
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="border border-black/[0.2] dark:border-white/[0.2] group/canvas-card flex flex-col items-center justify-center p-4 relative h-[20rem] rounded-lg"
    >
      <Icon className="absolute h-6 w-6 -top-3 -left-3 dark:text-white text-black" />
      <Icon className="absolute h-6 w-6 -bottom-3 -left-3 dark:text-white text-black" />
      <Icon className="absolute h-6 w-6 -top-3 -right-3 dark:text-white text-black" />
      <Icon className="absolute h-6 w-6 -bottom-3 -right-3 dark:text-white text-black" />

      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="h-full w-full absolute inset-0"
          >
            <CanvasRevealEffect
              animationSpeed={animationSpeed}
              containerClassName={color}
              colors={colors}
              dotSize={2}
            />
          </motion.div>
        )}
      </AnimatePresence>

      <div className="relative z-20 flex flex-col items-center justify-center gap-4">
        <div className="flex items-center justify-center group-hover/canvas-card:-translate-y-4 group-hover/canvas-card:opacity-0 transition duration-200 text-black dark:text-white">
          {getIcon(title)}
        </div>
        <div className="flex flex-col items-center gap-2">
          <h3 className="dark:text-white text-xl opacity-0 group-hover/canvas-card:opacity-100 text-black font-bold group-hover/canvas-card:text-white group-hover/canvas-card:-translate-y-2 transition duration-200">
            {title}
          </h3>
          <p className="text-sm opacity-0 group-hover/canvas-card:opacity-100 text-black dark:text-white group-hover/canvas-card:text-white transition duration-200 delay-100 text-center px-4">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

const Icon = ({ className, ...rest }: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className={className}
      {...rest}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
    </svg>
  );
}; 