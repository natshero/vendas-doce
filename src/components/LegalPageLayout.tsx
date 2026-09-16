import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import type { ReactNode } from "react";

export function LegalPageLayout({
  titulo,
  atualizadoEm,
  children,
}: {
  titulo: string;
  atualizadoEm?: string;
  children: ReactNode;
}) {
  return (
    <main className="min-h-screen bg-cream">
      <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <Link
          href="/"
          className="inline-flex items-center gap-1.5 text-sm font-medium text-tropical hover:text-brown"
        >
          <ArrowLeft className="h-4 w-4" aria-hidden="true" />
          Voltar para a página inicial
        </Link>

        <h1 className="mt-6 font-heading text-2xl font-bold text-brown sm:text-3xl">{titulo}</h1>
        {atualizadoEm && <p className="mt-2 text-sm text-brown/50">Última atualização: {atualizadoEm}</p>}

        <div className="prose-legal mt-8 space-y-5 font-body text-brown/80">{children}</div>
      </div>
    </main>
  );
}
