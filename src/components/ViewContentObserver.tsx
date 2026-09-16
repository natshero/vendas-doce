"use client";

import { useEffect, useRef, type ReactNode } from "react";
import { trackViewContent } from "@/lib/tracking";

/**
 * Dispara o evento ViewContent (Meta Pixel) na primeira vez que a
 * seção da oferta entra na área visível da tela.
 */
export function ViewContentObserver({ children }: { children: ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const hasFired = useRef(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasFired.current) {
            hasFired.current = true;
            trackViewContent();
            observer.disconnect();
          }
        });
      },
      { threshold: 0.4 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return <div ref={ref}>{children}</div>;
}
