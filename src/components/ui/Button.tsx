import React from "react";
import { cn } from "../../utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  asChild?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', ...props }, ref) => {
    const baseStyles = "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand disabled:pointer-events-none disabled:opacity-50";
    
    const variants = {
      primary: "bg-brand text-zinc-950 hover:bg-brand-hover shadow-sm",
      secondary: "bg-zinc-800 text-white hover:bg-zinc-700 shadow-sm",
      outline: "border border-zinc-700 bg-transparent hover:bg-zinc-800 text-white",
      ghost: "hover:bg-zinc-800 text-zinc-300 hover:text-white",
    };

    const sizes = {
      sm: "h-9 px-4 py-2",
      md: "h-10 px-6 py-2",
      lg: "h-12 px-8 py-3 text-base",
    };

    return (
      <button
        ref={ref}
        className={cn(baseStyles, variants[variant], sizes[size], className)}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";
