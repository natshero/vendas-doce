import Image from "next/image";
import { productConfig } from "@/config/product";

export function DessertGallery() {
  const { titulo, descricao, categorias } = productConfig.galeria;

  return (
    <section className="bg-cream py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-heading text-2xl font-bold text-brown sm:text-3xl md:text-4xl">
            {titulo}
          </h2>
          <p className="mt-4 font-body text-brown/75">{descricao}</p>
        </div>

        <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 md:gap-5 lg:grid-cols-4">
          {categorias.map((categoria) => (
            <figure
              key={categoria.nome}
              className="group overflow-hidden rounded-xl2 bg-white shadow-card"
            >
              <div className="aspect-square overflow-hidden">
                <Image
                  src={categoria.imagem}
                  alt={`Representação visual: ${categoria.nome}`}
                  width={320}
                  height={320}
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <figcaption className="p-3 text-center font-body text-sm font-medium text-brown/85">
                {categoria.nome}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
