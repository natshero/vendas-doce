import type { Metadata } from "next";
import { productConfig } from "@/config/product";
import { LegalPageLayout } from "@/components/LegalPageLayout";

export const metadata: Metadata = {
  title: `Política de Reembolso — ${productConfig.nome}`,
  alternates: { canonical: "/politica-de-reembolso" },
};

export default function PoliticaDeReembolsoPage() {
  const { legal, nome, garantiaDias } = productConfig;

  return (
    <LegalPageLayout titulo="Política de Reembolso">
      <p>
        O {nome} conta com garantia de {garantiaDias} dias corridos a partir da data da compra.
      </p>

      <h2 className="font-heading text-lg font-semibold text-brown">1. Como funciona a garantia</h2>
      <p>
        Você terá {garantiaDias} dias para conhecer o material. Caso perceba que o conteúdo não
        corresponde ao que esperava, poderá solicitar o reembolso dentro do período da garantia,
        conforme as condições apresentadas na plataforma de pagamento Cakto.
      </p>

      <h2 className="font-heading text-lg font-semibold text-brown">2. Como solicitar o reembolso</h2>
      <p>
        A solicitação de reembolso deve ser realizada diretamente pela plataforma de pagamento
        Cakto, utilizada para processar a compra, seguindo as instruções apresentadas por ela após
        a finalização do pedido.
      </p>

      <h2 className="font-heading text-lg font-semibold text-brown">3. Dúvidas</h2>
      <p>
        Caso tenha dúvidas sobre o processo de reembolso, entre em contato pelo e-mail{" "}
        <a href={`mailto:${legal.emailSuporte}`} className="text-tropical underline">
          {legal.emailSuporte}
        </a>
        .
      </p>
    </LegalPageLayout>
  );
}
