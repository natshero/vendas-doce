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

        <div className="mt-6 flex flex-col items-center gap-1">
          {productConfig.promocaoLancamento.ativa && (
            <span className="rounded-full bg-white/15 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-white">
              {productConfig.promocaoLancamento.rotulo}
            </span>
          )}
          <div className="mt-1 flex items-baseline gap-2">
            {productConfig.promocaoLancamento.ativa && (
              <span className="font-heading text-lg text-white/60 line-through">
                {productConfig.promocaoLancamento.precoNormalFormatado}
              </span>
            )}
            <span className="font-heading text-3xl font-bold text-white sm:text-4xl">
              {productConfig.precoFormatado}
            </span>
          </div>
        </div>

        <div className="mt-6">
          <CTAButton variant="secondary">{productConfig.ctaFinal.textoBotao}</CTAButton>
        </div>
      </div>
    </section>
  );
}
