import { Quote } from "lucide-react";
import { productConfig } from "@/config/product";

/**
 * Seção de avaliações reais.
 *
 * Esta seção só é exibida quando `productConfig.testimonials` contém
 * itens. Não adicione depoimentos fictícios: inclua aqui apenas
 * avaliações verdadeiras de compradores, editando o array
 * `testimonials` em `src/config/product.ts`.
 */
export function Testimonials() {
  const { testimonials } = productConfig;

  if (testimonials.length === 0) {
    return null;
  }

  return (
    <section className="bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <h2 className="mx-auto max-w-2xl text-center font-heading text-2xl font-bold text-brown sm:text-3xl md:text-4xl">
          Quem já está aplicando o método
        </h2>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((depoimento) => (
            <blockquote
              key={depoimento.nome}
              className="rounded-xl2 bg-cream p-6 shadow-card"
            >
              <Quote className="h-6 w-6 text-coral/50" aria-hidden="true" />
              <p className="mt-3 font-body text-brown/85">{depoimento.texto}</p>
              <footer className="mt-4 font-heading text-sm font-semibold text-brown">
                {depoimento.nome}
                {depoimento.cidade && (
                  <span className="font-body font-normal text-brown/60"> — {depoimento.cidade}</span>
                )}
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
