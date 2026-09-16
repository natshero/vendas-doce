import { ShieldCheck, Package, Smartphone } from "lucide-react";
import { productConfig } from "@/config/product";
import { CTAButton } from "./CTAButton";

export function FinalCTA() {
  return (
    <section className="bg-coral py-16 sm:py-20">
      <div className="mx-auto flex max-w-3xl flex-col items-center px-4 text-center sm:px-6 lg:px-8">
        <h2 className="font-heading text-2xl font-bold text-white sm:text-3xl md:text-4xl">
          {productConfig.ctaFinal.titulo}
        </h2>

        <div className="mt-6 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-sm text-white/90">
          <span className="inline-flex items-center gap-1.5">
            <Package className="h-4 w-4" aria-hidden="true" />
            5 módulos em PDF
          </span>
          <span className="inline-flex items-center gap-1.5">
            <Smartphone className="h-4 w-4" aria-hidden="true" />
            Acesso digital
          </span>
          <span className="inline-flex items-center gap-1.5">
            <ShieldCheck className="h-4 w-4" aria-hidden="true" />
            Garantia de 7 dias
          </span>
        </div>

        <span className="mt-6 font-heading text-3xl font-bold text-white sm:text-4xl">
          {productConfig.precoFormatado}
        </span>

        <div className="mt-6">
          <CTAButton variant="secondary">{productConfig.ctaFinal.textoBotao}</CTAButton>
        </div>
      </div>
    </section>
  );
}
