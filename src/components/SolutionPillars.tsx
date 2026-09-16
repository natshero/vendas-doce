import { ChefHat, ClipboardList, Calculator, Megaphone } from "lucide-react";
import { productConfig } from "@/config/product";

const icons = {
  "chef-hat": ChefHat,
  "clipboard-list": ClipboardList,
  calculator: Calculator,
  megaphone: Megaphone,
};

export function SolutionPillars() {
  const { titulo, descricao, pilares } = productConfig.solucao;

  return (
    <section className="bg-cream py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-heading text-2xl font-bold text-brown sm:text-3xl md:text-4xl">
            {titulo}
          </h2>
          <p className="mt-4 font-body text-brown/75">{descricao}</p>
        </div>

        <div className="mt-12 grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-4">
          {pilares.map((pilar, index) => {
            const Icon = icons[pilar.icone];
            return (
              <div
                key={pilar.nome}
                className="relative flex flex-col items-center rounded-xl2 bg-white p-6 text-center shadow-card"
              >
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-tropical px-3 py-0.5 text-xs font-semibold text-white">
                  {index + 1}
                </span>
                <span className="mt-3 flex h-14 w-14 items-center justify-center rounded-full bg-tropical/10 text-tropical">
                  <Icon className="h-7 w-7" aria-hidden="true" />
                </span>
                <h3 className="mt-4 font-heading text-lg font-semibold text-brown">
                  {pilar.nome}
                </h3>
                <p className="mt-2 font-body text-sm text-brown/70">{pilar.descricao}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
