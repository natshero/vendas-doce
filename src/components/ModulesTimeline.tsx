import { Check, FileText } from "lucide-react";
import { productConfig } from "@/config/product";
import { getIcon } from "@/lib/icons";

export function ModulesTimeline() {
  return (
    <section className="bg-brown py-16 sm:py-20" id="modulos">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="font-heading text-sm font-semibold uppercase tracking-wide text-yellow">
            Conteúdo completo
          </p>
          <h2 className="mt-2 font-heading text-2xl font-bold text-cream sm:text-3xl md:text-4xl">
            Os cinco módulos do Método Verão Lucrativo
          </h2>
          <p className="mt-4 font-body text-cream/75">
            Cada módulo é um PDF completo, pensado para ser aplicado na ordem em que aparece.
          </p>
        </div>

        <ol className="relative mt-14 space-y-8 border-l border-cream/20 pl-6 sm:pl-10 md:mx-auto md:max-w-3xl">
          {productConfig.modulos.map((modulo) => {
            const Icon = getIcon(modulo.icone);
            return (
              <li key={modulo.numero} className="relative">
                <span className="absolute -left-[34px] top-0 flex h-9 w-9 items-center justify-center rounded-full bg-coral font-heading text-sm font-bold text-white sm:-left-[50px]">
                  {modulo.numero}
                </span>

                <div className="rounded-xl2 bg-white/[0.06] p-6 shadow-card backdrop-blur-sm">
                  <div className="flex items-start gap-3">
                    <span className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-yellow/20 text-yellow">
                      <Icon className="h-5 w-5" aria-hidden="true" />
                    </span>
                    <div>
                      <h3 className="font-heading text-lg font-semibold text-cream sm:text-xl">
                        Módulo {modulo.numero} — {modulo.nomeModulo}
                      </h3>
                      <p className="mt-1 inline-flex items-center gap-1.5 font-editorial text-sm italic text-yellow/90">
                        <FileText className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
                        {modulo.nomePdf}
                      </p>
                    </div>
                  </div>

                  <p className="mt-4 font-body text-sm text-cream/80 sm:text-base">
                    {modulo.descricao}
                  </p>

                  <ul className="mt-4 space-y-2">
                    {modulo.aprendizados.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-sm text-cream/70">
                        <Check className="mt-0.5 h-4 w-4 shrink-0 text-tropical" aria-hidden="true" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
