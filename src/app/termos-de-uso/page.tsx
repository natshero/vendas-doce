import type { Metadata } from "next";
import { productConfig } from "@/config/product";
import { LegalPageLayout } from "@/components/LegalPageLayout";

export const metadata: Metadata = {
  title: `Termos de Uso — ${productConfig.nome}`,
  alternates: { canonical: "/termos-de-uso" },
};

export default function TermosDeUsoPage() {
  const { legal, nome, checkoutUrl } = productConfig;

  return (
    <LegalPageLayout titulo="Termos de Uso">
      <p>
        Estes Termos de Uso regulam o acesso e a utilização do produto digital {nome}. Ao efetuar
        a compra, o comprador declara ter lido e concordado com os termos abaixo.
      </p>

      <h2 className="font-heading text-lg font-semibold text-brown">1. Natureza do produto</h2>
      <p>
        O {nome} é um produto 100% digital, composto por cinco módulos em formato PDF. Nenhum item
        físico é enviado. O acesso ao conteúdo é disponibilizado de forma digital após a
        confirmação do pagamento.
      </p>

      <h2 className="font-heading text-lg font-semibold text-brown">2. Processamento de pagamento</h2>
      <p>
        As compras são processadas pela plataforma de pagamento Cakto, através do endereço{" "}
        <a href={checkoutUrl} className="text-tropical underline">
          {checkoutUrl}
        </a>
        . As formas de pagamento disponíveis, prazos de liberação de acesso e demais condições de
        compra podem ser consultados diretamente no checkout.
      </p>

      <h2 className="font-heading text-lg font-semibold text-brown">3. Caráter educativo</h2>
      <p>
        O conteúdo do {nome} possui caráter educativo e informativo. Não há garantia de resultados
        financeiros, faturamento ou lucro, uma vez que estes dependem de fatores como aplicação do
        conteúdo, região, custos de ingredientes, preços praticados, demanda local e dedicação de
        cada pessoa.
      </p>

      <h2 className="font-heading text-lg font-semibold text-brown">4. Uso do material</h2>
      <p>
        O material adquirido é de uso pessoal. É vedada a reprodução, distribuição ou
        comercialização do conteúdo sem autorização prévia do responsável pelo produto.
      </p>

      <h2 className="font-heading text-lg font-semibold text-brown">5. Contato</h2>
      <p>
        Em caso de dúvidas sobre estes Termos de Uso, entre em contato pelo e-mail{" "}
        <a href={`mailto:${legal.emailSuporte}`} className="text-tropical underline">
          {legal.emailSuporte}
        </a>
        .
      </p>
    </LegalPageLayout>
  );
}
