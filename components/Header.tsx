"use client";

import Image from 'next/image'
import { ThemeSwitch } from './ui/theme-switch'
import { useEffect, useState } from 'react'

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 w-full px-4 sm:px-6 lg:px-8 py-4 sm:py-5 z-50">
      <div className="container mx-auto flex items-center justify-between gap-4">
        <div className="flex items-center gap-4 sm:gap-6">
          <div className={`relative overflow-hidden rounded-full ring-2 ring-white/20 hover:ring-white/40 transition-all duration-500 
            transform perspective-1000 hover:rotate-y-12 hover:scale-110 hover:shadow-xl
            ${isScrolled ? 'h-10 w-10' : 'h-16 w-16'}`}>
            <Image
              src="/profile.jpg"
              alt="Roberto Caroca profile picture"
              fill
              className="object-cover transition-all duration-500 transform hover:scale-110 hover:rotate-6"
              sizes={isScrolled ? "40px" : "64px"}
              priority
            />
          </div>
          <div className={`flex flex-col leading-tight transform perspective-1000 transition-all duration-500
            ${isScrolled ? 'opacity-0 -translate-x-4' : 'opacity-100 translate-x-0'} -space-y-1`}>
            <span className="text-base sm:text-lg font-semibold font-display tracking-wide text-foreground drop-shadow-sm hover:drop-shadow-md transition-all duration-300">
              Roberto
            </span>
            <span className="text-base sm:text-lg font-semibold font-display tracking-wide bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent drop-shadow transition-all duration-300">
              Caroca
            </span>
          </div>
        </div>
        <div className="relative">
          <ThemeSwitch />
        </div>
      </div>
    </header>
  )
} 