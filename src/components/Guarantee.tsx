import { ShieldCheck } from "lucide-react";
import { productConfig } from "@/config/product";

export function Guarantee() {
  const { titulo, texto } = productConfig.garantia;

  return (
    <section className="bg-tropical py-14 sm:py-16">
      <div className="mx-auto flex max-w-3xl flex-col items-center px-4 text-center sm:px-6 lg:px-8">
        <span className="flex h-16 w-16 items-center justify-center rounded-full bg-white/15 text-cream">
          <ShieldCheck className="h-8 w-8" aria-hidden="true" />
        </span>
        <h2 className="mt-4 font-heading text-2xl font-bold text-cream sm:text-3xl">{titulo}</h2>
        <p className="mt-4 font-body text-cream/85">{texto}</p>
      </div>
    </section>
  );
}
