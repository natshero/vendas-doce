import { CheckCircle2, XCircle } from "lucide-react";
import { productConfig } from "@/config/product";

export function AudienceFit() {
  const { paraQuemE, paraQuemNaoE } = productConfig.publico;

  return (
    <section className="bg-cream py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <div className="rounded-xl2 border-2 border-tropical/30 bg-white p-6 sm:p-8">
            <h2 className="font-heading text-xl font-bold text-brown sm:text-2xl">
              Este material é para você se
            </h2>
            <ul className="mt-6 space-y-4">
              {paraQuemE.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-tropical" aria-hidden="true" />
                  <span className="font-body text-brown/85">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-xl2 border-2 border-brown/10 bg-white/60 p-6 sm:p-8">
            <h2 className="font-heading text-xl font-bold text-brown sm:text-2xl">
              Este material pode não ser para você se
            </h2>
            <ul className="mt-6 space-y-4">
              {paraQuemNaoE.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <XCircle className="mt-0.5 h-5 w-5 shrink-0 text-brown/40" aria-hidden="true" />
                  <span className="font-body text-brown/70">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
