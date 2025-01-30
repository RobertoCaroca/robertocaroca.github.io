import React from "react";
import { cn } from "@/lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  href?: string;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, className, href, ...props }, ref) => {
    const handleClick = () => {
      if (href) {
        const element = document.querySelector(href);
        element?.scrollIntoView({ behavior: 'smooth' });
      }
    };

    return (
      <button
        ref={ref}
        onClick={handleClick}
        className={cn(
          "group inline-flex h-11 items-center gap-2 justify-center rounded-xl px-8 py-2 font-medium transition-all",
          "bg-black text-white hover:bg-zinc-800 hover:-translate-y-0.5",
          "dark:bg-white dark:text-black dark:hover:bg-zinc-100",
          className
        )}
        {...props}
      >
        {children}
        <svg 
          className="w-4 h-4 animate-bounce group-hover:translate-y-0.5 transition-transform"
          fill="none" 
          viewBox="0 0 24 24" 
          stroke="currentColor"
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth={2} 
            d="M19 14l-7 7m0 0l-7-7m7 7V3" 
          />
        </svg>
      </button>
    );
  }
);

Button.displayName = "Button"; 