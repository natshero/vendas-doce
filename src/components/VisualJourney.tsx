import Image from "next/image";
import { productConfig } from "@/config/product";

const etapas = [
  {
    imagem: productConfig.imagens.ingredientesFrutas,
    legenda: "Ingredientes frescos e frutas de época",
  },
  {
    imagem: productConfig.imagens.pessoaPreparando,
    legenda: "Preparo das receitas passo a passo",
  },
  {
    imagem: productConfig.imagens.embalagensProntas,
    legenda: "Embalagens prontas para a entrega",
  },
];

export function VisualJourney() {
  return (
    <section className="bg-white py-14 sm:py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 sm:gap-6">
          {etapas.map((etapa) => (
            <figure key={etapa.legenda} className="overflow-hidden rounded-xl2 shadow-card">
              <div className="aspect-[4/3] overflow-hidden">
                <Image
                  src={etapa.imagem}
                  alt={etapa.legenda}
                  width={480}
                  height={360}
                  className="h-full w-full object-cover"
                />
              </div>
              <figcaption className="bg-cream px-4 py-3 text-center font-body text-sm text-brown/75">
                {etapa.legenda}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
