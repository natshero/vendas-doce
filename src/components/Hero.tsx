import Image from "next/image";
import { ShieldCheck, Lock, PackageX } from "lucide-react";
import { productConfig } from "@/config/product";
import { CTAButton } from "./CTAButton";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-cream">
      <div
        className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-yellow/40 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -left-16 bottom-0 h-64 w-64 rounded-full bg-tropical/20 blur-3xl"
        aria-hidden="true"
      />

      <div className="relative mx-auto grid max-w-6xl grid-cols-1 items-center gap-10 px-4 py-12 sm:px-6 md:grid-cols-2 md:py-20 lg:px-8">
        <div className="order-1 flex flex-col items-center text-center md:order-1 md:items-start md:text-left">
          <p className="font-heading text-sm font-semibold uppercase tracking-wide text-tropical">
            {productConfig.nome}
          </p>

          <h1 className="mt-3 font-heading text-3xl font-bold leading-tight text-brown sm:text-4xl md:text-5xl">
            {productConfig.headline}
          </h1>

          <p className="mt-4 max-w-xl font-body text-base text-brown/80 sm:text-lg">
            {productConfig.subheadline}
          </p>

          <div className="order-3 mt-6 w-full max-w-xs md:hidden">
            <ProductMockup />
          </div>

          <div className="mt-8 flex flex-col items-center gap-1 md:items-start">
            <span className="font-heading text-3xl font-bold text-coral sm:text-4xl">
              {productConfig.precoFormatado}
            </span>
            <span className="text-sm text-brown/60">Pagamento único, sem valores ocultos</span>
          </div>

          <div className="mt-6 w-full sm:w-auto">
            <CTAButton className="w-full sm:w-auto">{productConfig.hero.textoBotaoPrincipal}</CTAButton>
          </div>

          <div className="mt-4 flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-sm text-brown/70 md:justify-start">
            <span className="inline-flex items-center gap-1.5">
              <Lock className="h-4 w-4 text-tropical" aria-hidden="true" />
              Compra segura
            </span>
            <span className="inline-flex items-center gap-1.5">
              <ShieldCheck className="h-4 w-4 text-tropical" aria-hidden="true" />
              Garantia de 7 dias
            </span>
          </div>

          <p className="mt-3 inline-flex items-center gap-1.5 text-xs text-brown/50">
            <PackageX className="h-3.5 w-3.5" aria-hidden="true" />
            {productConfig.hero.avisoProdutoDigital}
          </p>
        </div>

        <div className="order-2 hidden md:flex md:items-center md:justify-center">
          <ProductMockup />
        </div>
      </div>
    </section>
  );
}

function ProductMockup() {
  return (
    <div className="relative mx-auto w-full max-w-sm animate-fade-up">
      <div className="absolute inset-0 -z-10 translate-x-3 translate-y-3 rounded-xl2 bg-tropical/20" />
      <div className="overflow-hidden rounded-xl2 bg-white p-3 shadow-soft">
        <Image
          src={productConfig.imagens.capaProduto}
          alt={`Capa digital do produto ${productConfig.nome}`}
          width={480}
          height={480}
          priority
          className="h-auto w-full rounded-lg"
        />
      </div>
    </div>
  );
}
