import { productConfig } from "@/config/product";
import { getIcon } from "@/lib/icons";

export function BenefitsGrid() {
  return (
    <section className="bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <h2 className="mx-auto max-w-2xl text-center font-heading text-2xl font-bold text-brown sm:text-3xl md:text-4xl">
          O que você vai aprender a fazer
        </h2>

        <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-5">
          {productConfig.beneficios.map((beneficio) => {
            const Icon = getIcon(beneficio.icone);
            return (
              <div
                key={beneficio.titulo}
                className="flex flex-col items-center gap-3 rounded-xl2 bg-cream p-5 text-center transition-transform duration-200 hover:-translate-y-1"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-yellow/40 text-brown">
                  <Icon className="h-6 w-6" aria-hidden="true" />
                </span>
                <p className="font-body text-sm font-medium text-brown/90">{beneficio.titulo}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
