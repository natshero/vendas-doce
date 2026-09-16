# Método Verão Lucrativo — Landing Page

Landing page de vendas do produto digital **Método Verão Lucrativo**, construída com Next.js (App Router), TypeScript e Tailwind CSS. Projeto 100% estático no front-end, sem backend e sem banco de dados — pronto para publicar gratuitamente na Vercel.

## Stack

- Next.js 14 (App Router)
- TypeScript
- Tailwind CSS
- lucide-react (ícones)

## Estrutura do projeto

```
src/
  app/                     # Rotas (App Router)
    page.tsx               # Página principal (monta todas as seções)
    layout.tsx             # Metadata, fontes, JSON-LD, scripts de analytics
    sitemap.ts             # Gera /sitemap.xml
    robots.ts              # Gera /robots.txt
    termos-de-uso/
    politica-de-privacidade/
    politica-de-reembolso/
    contato/
  components/               # Componentes de seção e componentes de UI
    analytics/               # Meta Pixel e Google Analytics (opt-in)
  config/
    product.ts               # TODO O CONTEÚDO EDITÁVEL DA PÁGINA
  lib/
    icons.tsx                 # Mapeamento de ícones lucide-react
    tracking.ts                # Helpers de disparo de eventos de pixel
public/
  images/                     # Imagens e placeholders (SVG)
  favicon.svg
```

## Como executar localmente

Pré-requisitos: Node.js 18.18+ (recomendado 20 LTS) e npm.

```bash
npm install
npm run dev
```

Acesse http://localhost:3000.

## Como testar o build de produção

```bash
npm run build
npm run start
```

O comando `npm run build` deve concluir sem erros antes de publicar.

## Variáveis de ambiente

Copie `.env.example` para `.env.local` e preencha o que for necessário:

```bash
cp .env.example .env.local
```

| Variável | Obrigatória | Descrição |
|---|---|---|
| `NEXT_PUBLIC_SITE_URL` | Recomendada | URL pública do site, usada em metadata, canonical e sitemap. |
| `NEXT_PUBLIC_META_PIXEL_ID` | Opcional | ID do Meta Pixel. Se vazio, o pixel não é carregado e a página funciona normalmente. |
| `NEXT_PUBLIC_GA_ID` | Opcional | ID de medição do Google Analytics 4 (formato `G-XXXXXXXXXX`). Se vazio, o GA não é carregado. |

## Onde editar o conteúdo

Todo o conteúdo textual, preço, checkout, módulos, benefícios, FAQ, imagens e informações legais estão centralizados em **`src/config/product.ts`**. Não é necessário editar os componentes para alterar textos.

### Substituir imagens

As imagens ficam em `public/images/` e os caminhos são centralizados em `productConfig.imagens` (e em `productConfig.galeria.categorias`) dentro de `src/config/product.ts`. Atualmente todas são placeholders em SVG, gerados para manter a identidade visual (cores da marca) até que as fotos reais estejam disponíveis.

Para substituir por fotos reais:

1. Coloque o arquivo novo (JPG/PNG/WebP) dentro de `public/images/`.
2. Atualize o caminho correspondente em `src/config/product.ts` (campo `imagens` ou array `galeria.categorias`).
3. Não é necessário alterar nenhum componente.

Imagens a substituir prioritariamente:

- `capaProduto` — capa oficial do produto (usada no Hero).
- `mockupModulos` — mockup dos 5 PDFs (usado na seção de oferta).
- `ingredientesFrutas`, `pessoaPreparando`, `embalagensProntas` — fotos do processo (seção entre "solução" e "benefícios").
- `galeria.categorias[].imagem` — 8 imagens da galeria de categorias de sobremesas.
- `ogImage` — **recomenda-se substituir por um JPG/PNG real de 1200x630px**, pois alguns rastreadores de redes sociais (WhatsApp, Facebook, LinkedIn) não renderizam SVG em pré-visualizações de link.
- `favicon` — ícone da aba do navegador (`public/favicon.svg`, pode ser substituído por um `.ico` ou `.png` ajustando `metadata.icons` em `src/app/layout.tsx`).

### Preencher informações legais

Em `src/config/product.ts`, dentro do objeto `legal`, substitua o placeholder do e-mail de suporte pelo dado real antes de publicar:

```ts
legal: {
  emailSuporte: "[E-MAIL DE SUPORTE]",
  ...
}
```

Esse e-mail aparece no rodapé e nas páginas de Termos de Uso, Política de Privacidade, Política de Reembolso e Contato. O projeto não exibe nome do responsável nem CPF/CNPJ — se sua operação exigir essa identificação por lei, adicione os campos de volta em `legal` e nas páginas correspondentes.

## Meta Pixel — configuração e testes

1. **Obter o ID do Pixel**: acesse o [Gerenciador de Eventos](https://business.facebook.com/events_manager2) do Meta Business Suite → seu Pixel → copie o ID numérico.
2. **Configurar na Vercel**: no painel do projeto, vá em *Settings → Environment Variables* e adicione `NEXT_PUBLIC_META_PIXEL_ID` com o valor do ID. Redeploy o projeto após salvar.
3. **Testar os eventos**: instale a extensão [Meta Pixel Helper](https://chrome.google.com/webstore) no Chrome, abra o site publicado e verifique se os eventos disparam:
   - `PageView` ao carregar qualquer página.
   - `ViewContent` ao rolar até a seção de oferta (dispara uma única vez por visita).
   - `InitiateCheckout` ao clicar em qualquer botão de compra, antes do redirecionamento para a Cakto.
4. **Configurar o evento de compra na Cakto**: o evento `Purchase` **não é disparado nesta landing page** — a compra é concluída dentro do checkout da Cakto. Configure o pixel diretamente no painel da Cakto (Configurações → Pixels/Integrações) para que o `Purchase` seja disparado no momento da confirmação do pagamento.
5. **Evitar duplicidade de eventos**: como o `Purchase` é disparado exclusivamente pela Cakto (fora desta landing page) e a landing page nunca dispara `Purchase`, não há duplicidade entre os dois ambientes. Verifique no Gerenciador de Eventos se cada evento (`PageView`, `ViewContent`, `InitiateCheckout`, `Purchase`) aparece apenas uma vez por sessão de teste.

## Google Analytics

Defina `NEXT_PUBLIC_GA_ID` (formato `G-XXXXXXXXXX`) localmente em `.env.local` ou nas variáveis de ambiente da Vercel. Sem essa variável, o script do GA simplesmente não é carregado.

## Publicando na Vercel

### Opção 1 — via CLI

```bash
npm install -g vercel
vercel login
vercel
```

Siga as instruções no terminal. Para publicar em produção:

```bash
vercel --prod
```

### Opção 2 — via GitHub + painel da Vercel

```bash
git init
git add .
git commit -m "Landing page Método Verão Lucrativo"
git branch -M main
git remote add origin <url-do-seu-repositorio>
git push -u origin main
```

Depois, em [vercel.com/new](https://vercel.com/new):

1. Importe o repositório.
2. O Next.js é detectado automaticamente (nenhuma configuração adicional é necessária).
3. Adicione as variáveis de ambiente (`NEXT_PUBLIC_SITE_URL`, e opcionalmente `NEXT_PUBLIC_META_PIXEL_ID` e `NEXT_PUBLIC_GA_ID`).
4. Clique em **Deploy**.

Após o primeiro deploy, atualize `NEXT_PUBLIC_SITE_URL` com o domínio final gerado pela Vercel (ou seu domínio próprio) e faça um novo deploy para que `metadata`, `canonical` e `sitemap.xml` reflitam a URL correta.

## Checklist de revisão antes de publicar

- [ ] Preço exibido em todos os pontos é R$ 27,90.
- [ ] Todos os botões de compra apontam para `https://pay.cakto.com.br/n9gnu5v_1113883` e abrem na mesma aba.
- [ ] Exatamente cinco módulos cadastrados em `productConfig.modulos`.
- [ ] Nenhum bônus inventado foi adicionado.
- [ ] `productConfig.testimonials` permanece vazio até que existam avaliações reais (a seção some automaticamente).
- [ ] Nenhuma promessa de renda garantida foi incluída.
- [ ] Placeholders de imagens substituídos pelas fotos reais do produto.
- [ ] Placeholder `[E-MAIL DE SUPORTE]` preenchido com o e-mail real.
- [ ] `npm run build` executa sem erros.
