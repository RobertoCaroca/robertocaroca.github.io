"use client";

import { AuroraText } from "./ui/aurora-text"
import { Button } from "./ui/button"
import { FlickeringGrid } from "./ui/flickering-grid"
import { useTheme } from "next-themes"

export default function Hero() {
  const { theme } = useTheme()

  return (
    <section className="min-h-screen pt-32 pb-24 flex items-center">
      <div className="absolute inset-0 -z-10">
        <FlickeringGrid 
          squareSize={6}
          gridGap={12}
          flickerChance={0.15}
          color={theme === 'dark' 
            ? 'rgb(99, 102, 241)' // indigo-500 for dark mode
            : 'rgb(79, 70, 229)'  // indigo-600 for light mode
          }
          maxOpacity={0.4}
          className="h-full w-full opacity-40 dark:opacity-30 mix-blend-color dark:mix-blend-plus-lighter"
        />
      </div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <h1 className="flex flex-col items-center gap-6 mb-12">
          <span className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-extrabold text-foreground font-display tracking-tight">
            Desbloqueando
          </span>
          <div className="flex items-baseline gap-2 text-foreground">
            <span className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold font-display">el poder de la </span>
            <AuroraText className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold font-display">
              AI
            </AuroraText>
          </div>
        </h1>
        <p className="mb-8 text-lg sm:text-xl lg:text-2xl text-foreground/80 font-display max-w-2xl mx-auto">Como adentrarse en esta nueva era</p>
        <Button className="my-10" href="#about-section">
          Descubrir más
        </Button>
      </div>
    </section>
  )
} 