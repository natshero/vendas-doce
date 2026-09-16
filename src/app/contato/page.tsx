import type { Metadata } from "next";
import { Mail } from "lucide-react";
import { productConfig } from "@/config/product";
import { LegalPageLayout } from "@/components/LegalPageLayout";

export const metadata: Metadata = {
  title: `Contato — ${productConfig.nome}`,
  alternates: { canonical: "/contato" },
};

export default function ContatoPage() {
  const { legal, nome } = productConfig;

  return (
    <LegalPageLayout titulo="Contato">
      <p>
        Para dúvidas sobre o {nome}, sobre o acesso ao material ou sobre a compra realizada,
        entre em contato através do e-mail de suporte abaixo.
      </p>

      <a
        href={`mailto:${legal.emailSuporte}`}
        className="inline-flex items-center gap-2 rounded-full bg-coral px-6 py-3 font-heading font-semibold text-white transition-colors hover:bg-[#d64a30] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-coral"
      >
        <Mail className="h-4 w-4" aria-hidden="true" />
        {legal.emailSuporte}
      </a>

      <p className="text-sm text-brown/60">
        Dúvidas relacionadas a pagamento, nota fiscal ou acesso liberado pelo checkout também
        podem ser consultadas diretamente na plataforma de pagamento Cakto.
      </p>
    </LegalPageLayout>
  );
}
