"use client";

import { useState, type ReactNode } from "react";
import { Loader2 } from "lucide-react";
import { productConfig } from "@/config/product";
import { trackInitiateCheckout } from "@/lib/tracking";

type CTAButtonProps = {
  children: ReactNode;
  className?: string;
  variant?: "primary" | "secondary";
};

const baseStyles =
  "inline-flex items-center justify-center gap-2 rounded-full px-8 py-4 text-base sm:text-lg font-heading font-semibold transition-all duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-coral disabled:cursor-wait";

const variantStyles = {
  primary:
    "bg-coral text-white shadow-soft hover:bg-[#d64a30] hover:-translate-y-0.5 active:translate-y-0",
  secondary:
    "bg-white text-coral border-2 border-coral hover:bg-coral hover:text-white",
};

export function CTAButton({ children, className = "", variant = "primary" }: CTAButtonProps) {
  const [isLoading, setIsLoading] = useState(false);

  function handleClick() {
    setIsLoading(true);
    trackInitiateCheckout();
  }

  return (
    <a
      href={productConfig.checkoutUrl}
      onClick={handleClick}
      aria-label={typeof children === "string" ? children : "Ir para o checkout seguro"}
      className={`${baseStyles} ${variantStyles[variant]} ${className}`}
    >
      {isLoading ? (
        <>
          <Loader2 className="h-5 w-5 animate-spin" aria-hidden="true" />
          Redirecionando…
        </>
      ) : (
        children
      )}
    </a>
  );
}
