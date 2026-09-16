import Image from "next/image";
import { CheckCircle2 } from "lucide-react";
import { productConfig } from "@/config/product";
import { CTAButton } from "./CTAButton";
import { ViewContentObserver } from "./ViewContentObserver";

export function OfferBox() {
  const { titulo, itens, textoBotao, textoAbaixoBotao } = productConfig.oferta;

  return (
    <section className="bg-gradient-to-b from-cream to-yellow/25 py-16 sm:py-20" id="oferta">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <ViewContentObserver>
          <div className="rounded-xl2 border-2 border-coral/20 bg-white p-6 shadow-soft sm:p-10">
            <Image
              src={productConfig.imagens.mockupModulos}
              alt="Mockup digital dos cinco módulos em PDF"
              width={480}
              height={320}
              className="mx-auto h-auto w-full max-w-sm rounded-lg"
            />

            <p className="mt-6 text-center font-heading text-sm font-semibold uppercase tracking-wide text-coral">
              Oferta completa
            </p>
            <h2 className="mt-2 text-center font-heading text-2xl font-bold text-brown sm:text-3xl">
              {titulo}
            </h2>

            <ul className="mx-auto mt-8 max-w-md space-y-3">
              {itens.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-tropical" aria-hidden="true" />
                  <span className="font-body text-brown/85">{item}</span>
                </li>
              ))}
            </ul>

            <div className="mt-8 flex flex-col items-center gap-1 border-t border-brown/10 pt-8">
              {productConfig.promocaoLancamento.ativa && (
                <span className="rounded-full bg-tropical/15 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-tropical">
                  {productConfig.promocaoLancamento.rotulo}
                </span>
              )}
              <div className="mt-1 flex items-baseline gap-2">
                {productConfig.promocaoLancamento.ativa && (
                  <span className="font-heading text-xl text-brown/40 line-through">
                    {productConfig.promocaoLancamento.precoNormalFormatado}
                  </span>
                )}
                <span className="font-heading text-4xl font-bold text-coral">
                  {productConfig.precoFormatado}
                </span>
              </div>
              <span className="text-sm text-brown/60">
                Pagamento único — formas de pagamento disponíveis no checkout
              </span>
              {productConfig.promocaoLancamento.ativa && (
                <span className="mt-1 max-w-xs text-center text-xs text-brown/50">
                  {productConfig.promocaoLancamento.avisoLancamento}
                </span>
              )}
            </div>

            <div className="mt-6 flex flex-col items-center gap-3">
              <CTAButton className="w-full sm:w-auto">{textoBotao}</CTAButton>
              <p className="text-center text-xs text-brown/60">{textoAbaixoBotao}</p>
            </div>
          </div>
        </ViewContentObserver>
      </div>
    </section>
  );
}
