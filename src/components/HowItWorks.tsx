import { ShoppingCart, Download, ChefHat, Rocket } from "lucide-react";
import { productConfig } from "@/config/product";

const icons = [ShoppingCart, Download, ChefHat, Rocket];

export function HowItWorks() {
  return (
    <section className="bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <h2 className="mx-auto max-w-2xl text-center font-heading text-2xl font-bold text-brown sm:text-3xl md:text-4xl">
          Como funciona
        </h2>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {productConfig.comoFunciona.map((passo, index) => {
            const Icon = icons[index];
            return (
              <div key={passo.numero} className="relative flex flex-col items-center text-center">
                {index < productConfig.comoFunciona.length - 1 && (
                  <div
                    className="absolute left-1/2 top-8 hidden h-px w-full bg-brown/15 lg:block"
                    aria-hidden="true"
                  />
                )}
                <span className="relative z-10 flex h-16 w-16 items-center justify-center rounded-full bg-orange/15 text-orange">
                  <Icon className="h-7 w-7" aria-hidden="true" />
                </span>
                <span className="mt-4 font-heading text-sm font-bold text-coral">
                  Passo {passo.numero}
                </span>
                <h3 className="mt-1 font-heading text-lg font-semibold text-brown">
                  {passo.titulo}
                </h3>
                <p className="mt-2 font-body text-sm text-brown/70">{passo.descricao}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
