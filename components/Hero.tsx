"use client";

import { AuroraText } from "./ui/aurora-text"
import { Button } from "./ui/button"
import { WavyBackground } from "./ui/wavy-background"
import { useTheme } from "next-themes"

export default function Hero() {
  const { theme } = useTheme()

  return (
    <section className="min-h-screen pt-32 pb-24">
      <WavyBackground 
        className="max-w-4xl mx-auto"
        containerClassName="min-h-screen pt-32 pb-24"
        waveWidth={100}
        blur={10}
        speed="slow"
        waveOpacity={0.5}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h1 className="flex flex-col items-center gap-6 mb-12">
            <span className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-extrabold text-foreground font-display tracking-tight">
              Desbloqueando
            </span>
            <div className="flex items-baseline gap-2 text-foreground">
              <span className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold font-display">el poder de la AI</span>
            </div>
          </h1>
          <p className="mb-8 text-lg sm:text-xl lg:text-2xl text-foreground/80 font-display max-w-2xl mx-auto">
            Como prepararse para esta nueva era!
          </p>
          <Button className="my-10" href="#about-section">
            Descubrir más
          </Button>
        </div>
      </WavyBackground>
    </section>
  )
} 