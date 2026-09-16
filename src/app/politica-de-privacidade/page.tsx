import type { Metadata } from "next";
import { productConfig } from "@/config/product";
import { LegalPageLayout } from "@/components/LegalPageLayout";

export const metadata: Metadata = {
  title: `Política de Privacidade — ${productConfig.nome}`,
  alternates: { canonical: "/politica-de-privacidade" },
};

export default function PoliticaDePrivacidadePage() {
  const { legal, nome } = productConfig;

  return (
    <LegalPageLayout titulo="Política de Privacidade">
      <p>
        Esta Política de Privacidade descreve como o responsável pelo produto digital {nome} trata
        as informações coletadas neste site.
      </p>

      <h2 className="font-heading text-lg font-semibold text-brown">1. Dados coletados</h2>
      <p>
        Esta página não possui formulários próprios de cadastro nem banco de dados. Dados de
        pagamento e informações pessoais necessárias para a compra são coletados exclusivamente
        pela plataforma de pagamento Cakto no momento do checkout, conforme a política de
        privacidade da própria Cakto.
      </p>

      <h2 className="font-heading text-lg font-semibold text-brown">2. Cookies e ferramentas de análise</h2>
      <p>
        Este site pode utilizar ferramentas de análise e de mensuração de anúncios, como o Meta
        Pixel e o Google Analytics, para entender o desempenho das campanhas e melhorar a
        experiência de navegação. Essas ferramentas podem utilizar cookies para coletar dados de
        navegação de forma agregada e anônima.
      </p>

      <h2 className="font-heading text-lg font-semibold text-brown">3. Compartilhamento de dados</h2>
      <p>
        Não compartilhamos dados pessoais com terceiros para finalidades diferentes das
        necessárias ao processamento da compra e à análise do desempenho deste site.
      </p>

      <h2 className="font-heading text-lg font-semibold text-brown">4. Direitos do usuário</h2>
      <p>
        Você pode solicitar esclarecimentos sobre o tratamento de dados relacionados a este site
        entrando em contato pelo e-mail{" "}
        <a href={`mailto:${legal.emailSuporte}`} className="text-tropical underline">
          {legal.emailSuporte}
        </a>
        .
      </p>

      <h2 className="font-heading text-lg font-semibold text-brown">5. Meta Platforms, Inc.</h2>
      <p>{legal.avisoMeta}</p>
    </LegalPageLayout>
  );
}
