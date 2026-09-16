import Link from "next/link";
import { productConfig } from "@/config/product";

export function Footer() {
  const { links, legal, nome } = productConfig;

  return (
    <footer className="bg-brown pb-24 pt-12 text-cream/80 sm:pb-12">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-6 border-b border-cream/10 pb-8 text-center sm:flex-row sm:justify-between sm:text-left">
          <p className="font-heading text-lg font-semibold text-cream">{nome}</p>
          <nav aria-label="Links institucionais">
            <ul className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm">
              <li>
                <Link href={links.termosDeUso} className="hover:text-cream">
                  Termos de Uso
                </Link>
              </li>
              <li>
                <Link href={links.politicaDePrivacidade} className="hover:text-cream">
                  Política de Privacidade
                </Link>
              </li>
              <li>
                <Link href={links.politicaDeReembolso} className="hover:text-cream">
                  Política de Reembolso
                </Link>
              </li>
              <li>
                <Link href={links.contato} className="hover:text-cream">
                  Contato
                </Link>
              </li>
            </ul>
          </nav>
        </div>

        <div className="mt-6 space-y-2 text-center text-xs text-cream/50 sm:text-left">
          <p>{legal.avisoMeta}</p>
        </div>
      </div>
    </footer>
  );
}
