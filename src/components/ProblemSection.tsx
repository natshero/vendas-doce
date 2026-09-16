import { productConfig } from "@/config/product";
import { getIcon } from "@/lib/icons";

export function ProblemSection() {
  const { titulo, problemas } = productConfig.identificacao;

  return (
    <section className="bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <h2 className="mx-auto max-w-2xl text-center font-heading text-2xl font-bold text-brown sm:text-3xl md:text-4xl">
          {titulo}
        </h2>

        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {problemas.map((problema) => {
            const Icon = getIcon(problema.icone);
            return (
              <div
                key={problema.titulo}
                className="flex items-start gap-4 rounded-xl2 border border-brown/10 bg-cream/60 p-5 shadow-card transition-transform duration-200 hover:-translate-y-1"
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-coral/10 text-coral">
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </span>
                <p className="pt-1.5 font-body text-brown/90">{problema.titulo}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
