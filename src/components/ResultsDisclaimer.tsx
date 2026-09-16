import { productConfig } from "@/config/product";

export function ResultsDisclaimer() {
  return (
    <section className="bg-cream py-8">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <p className="text-center font-body text-xs leading-relaxed text-brown/55">
          {productConfig.avisoResultados}
        </p>
      </div>
    </section>
  );
}
