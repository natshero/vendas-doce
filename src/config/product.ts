/**
 * Configuração central do produto "Método Verão Lucrativo".
 *
 * Todo o conteúdo editável da landing page (textos, preço, checkout,
 * módulos, FAQ, imagens e informações legais) fica centralizado aqui.
 * Os componentes apenas consomem estes dados — não altere textos
 * diretamente nos componentes.
 */

export type ProductModule = {
  numero: number;
  nomeModulo: string;
  nomePdf: string;
  descricao: string;
  icone:
    | "compass"
    | "book-open"
    | "calculator"
    | "megaphone"
    | "trending-up";
  aprendizados: string[];
};

export type Problema = {
  titulo: string;
  icone: "help-circle" | "percent" | "receipt" | "megaphone" | "users" | "clipboard-list";
};

export type Beneficio = {
  titulo: string;
  icone:
    | "layout-grid"
    | "chef-hat"
    | "calculator"
    | "tag"
    | "clipboard-list"
    | "megaphone"
    | "users"
    | "smile"
    | "repeat"
    | "trending-up";
};

export type CategoriaGaleria = {
  nome: string;
  imagem: string;
};

export type Passo = {
  numero: number;
  titulo: string;
  descricao: string;
};

export type Testemunho = {
  nome: string;
  cidade?: string;
  texto: string;
};

export type PerguntaFrequente = {
  pergunta: string;
  resposta: string;
};

export const productConfig = {
  // ---------------------------------------------------------------------
  // Identidade do produto
  // ---------------------------------------------------------------------
  nome: "Método Verão Lucrativo",
  descricaoCurta:
    "50 sobremesas geladas para fazer e vender no verão, com receitas, organização, precificação e estratégias práticas para começar.",
  categoria: "Culinária, empreendedorismo e renda extra",
  formato: "Produto 100% digital — cinco módulos em PDF",

  headline: "Transforme sobremesas geladas em uma oportunidade de renda neste verão",
  subheadline:
    "Conheça 50 receitas e aprenda a organizar a produção, calcular seus preços, divulgar seus produtos e conquistar os primeiros clientes — mesmo que você ainda esteja começando.",

  // ---------------------------------------------------------------------
  // Preço e checkout
  // ---------------------------------------------------------------------
  preco: 27.9,
  precoFormatado: "R$ 27,90",
  checkoutUrl: "https://pay.cakto.com.br/n9gnu5v_1113883",
  garantiaDias: 7,

  // Promoção de lançamento: preço normal real que passará a valer quando
  // a promoção terminar. IMPORTANTE — isto só é uma promoção legítima
  // (e não propaganda enganosa, vedada pelo art. 37 do CDC) se o preço
  // for de fato reajustado para `precoNormalFormatado` ao final do
  // período. Para desativar a promoção e voltar a mostrar só o preço
  // único, basta trocar `ativa` para `false`.
  promocaoLancamento: {
    ativa: true,
    rotulo: "Preço de lançamento",
    precoNormal: 47.9,
    precoNormalFormatado: "R$ 47,90",
    avisoLancamento:
      "Preço válido durante a promoção de lançamento. Depois desse período, o valor passa a ser R$ 47,90.",
  },

  barraSuperior: "Promoção de lançamento: material digital completo por apenas R$ 27,90",

  // ---------------------------------------------------------------------
  // Hero
  // ---------------------------------------------------------------------
  hero: {
    avisoAbaixoBotao: "Compra segura • Acesso digital • Garantia de 7 dias",
    avisoProdutoDigital: "Produto digital — nenhum item físico será enviado",
    textoBotaoPrincipal: "Quero começar a vender",
  },

  // ---------------------------------------------------------------------
  // Identificação com o público (seção de dores)
  // ---------------------------------------------------------------------
  identificacao: {
    titulo: "Você tem vontade de vender, mas não sabe por onde começar?",
    problemas: [
      { titulo: "Não saber quais sobremesas oferecer", icone: "help-circle" },
      { titulo: "Ter medo de calcular o preço errado", icone: "percent" },
      { titulo: "Não conhecer o custo real de cada receita", icone: "receipt" },
      { titulo: "Não saber como divulgar os produtos", icone: "megaphone" },
      { titulo: "Ter dificuldade para conseguir os primeiros clientes", icone: "users" },
      { titulo: "Não saber como organizar pedidos e produção", icone: "clipboard-list" },
    ] as Problema[],
  },

  // ---------------------------------------------------------------------
  // Solução — quatro pilares
  // ---------------------------------------------------------------------
  solucao: {
    titulo: "Um caminho completo, do zero à primeira venda",
    descricao:
      "O Método Verão Lucrativo acompanha você desde a escolha das sobremesas até a organização das primeiras vendas, reunindo tudo o que normalmente falta para quem está começando.",
    pilares: [
      {
        nome: "Receitas",
        descricao: "Um cardápio variado de sobremesas geladas para o verão.",
        icone: "chef-hat" as const,
      },
      {
        nome: "Organização",
        descricao: "Como estruturar produção, pedidos e rotina.",
        icone: "clipboard-list" as const,
      },
      {
        nome: "Precificação",
        descricao: "Como calcular custos e definir preços com segurança.",
        icone: "calculator" as const,
      },
      {
        nome: "Vendas",
        descricao: "Como divulgar, atender e conquistar clientes.",
        icone: "megaphone" as const,
      },
    ],
  },

  // ---------------------------------------------------------------------
  // O que será possível aprender
  // ---------------------------------------------------------------------
  beneficios: [
    { titulo: "Montar um cardápio variado", icone: "layout-grid" },
    { titulo: "Preparar diferentes sobremesas geladas", icone: "chef-hat" },
    { titulo: "Calcular custos de cada receita", icone: "calculator" },
    { titulo: "Definir preços com mais segurança", icone: "tag" },
    { titulo: "Organizar produção e pedidos", icone: "clipboard-list" },
    { titulo: "Divulgar os produtos", icone: "megaphone" },
    { titulo: "Buscar os primeiros clientes", icone: "users" },
    { titulo: "Melhorar o atendimento", icone: "smile" },
    { titulo: "Estimular novas compras", icone: "repeat" },
    { titulo: "Crescer com mais organização", icone: "trending-up" },
  ] as Beneficio[],

  // ---------------------------------------------------------------------
  // Módulos (conteúdo principal — não são bônus)
  // ---------------------------------------------------------------------
  modulos: [
    {
      numero: 1,
      nomeModulo: "Começando do Jeito Certo",
      nomePdf: "Guia Inicial: Começando do Jeito Certo",
      descricao:
        "Orientações iniciais para organizar a produção, entender o modelo de negócio e evitar erros comuns antes de começar.",
      icone: "compass",
      aprendizados: [
        "Como estruturar o início do seu negócio de sobremesas",
        "Erros comuns de quem está começando",
        "Primeiros passos antes de vender",
      ],
    },
    {
      numero: 2,
      nomeModulo: "Montando Seu Cardápio Lucrativo",
      nomePdf: "50 Sobremesas Geladas para Fazer e Vender",
      descricao:
        "Uma seleção de 50 receitas de sobremesas geladas para montar um cardápio variado e atraente durante o verão.",
      icone: "book-open",
      aprendizados: [
        "50 receitas de sobremesas geladas",
        "Como variar o cardápio ao longo do verão",
        "Ideias para diferentes perfis de clientes",
      ],
    },
    {
      numero: 3,
      nomeModulo: "Transformando Receita em Lucro",
      nomePdf: "Como Calcular Custos e Definir Seus Preços",
      descricao:
        "Um guia para calcular o custo das receitas, definir preços de venda e proteger a margem de lucro.",
      icone: "calculator",
      aprendizados: [
        "Como calcular o custo real de cada receita",
        "Como definir o preço de venda",
        "Como proteger sua margem de lucro",
      ],
    },
    {
      numero: 4,
      nomeModulo: "Conquistando as Primeiras Vendas",
      nomePdf: "Como Divulgar, Vender e Conseguir Seus Primeiros Clientes",
      descricao:
        "Estratégias práticas para apresentar os produtos, divulgar o cardápio e buscar as primeiras vendas.",
      icone: "megaphone",
      aprendizados: [
        "Como apresentar seus produtos de forma atrativa",
        "Onde e como divulgar o cardápio",
        "Como conquistar os primeiros clientes",
      ],
    },
    {
      numero: 5,
      nomeModulo: "Fazendo o Negócio Crescer",
      nomePdf: "Como Organizar, Fidelizar Clientes e Crescer com Consistência",
      descricao:
        "Orientações para organizar os pedidos, melhorar o atendimento, estimular novas compras e desenvolver o negócio.",
      icone: "trending-up",
      aprendizados: [
        "Como organizar pedidos e produção",
        "Como fidelizar clientes",
        "Como crescer com mais consistência",
      ],
    },
  ] as ProductModule[],

  // ---------------------------------------------------------------------
  // Galeria de categorias (representação visual, não é lista exata do PDF)
  // ---------------------------------------------------------------------
  galeria: {
    titulo: "Um universo de sobremesas geladas para explorar",
    descricao:
      "A galeria abaixo representa categorias de sobremesas que podem compor o seu cardápio. As receitas completas estão nos módulos do material.",
    categorias: [
      { nome: "Sobremesas no pote", imagem: "/images/galeria-pote.png" },
      { nome: "Mousses", imagem: "/images/galeria-mousse.png" },
      { nome: "Pavês", imagem: "/images/galeria-pave.png" },
      { nome: "Tortas geladas", imagem: "/images/galeria-torta.png" },
      { nome: "Doces com frutas", imagem: "/images/galeria-frutas.png" },
      { nome: "Opções com chocolate", imagem: "/images/galeria-chocolate.png" },
      { nome: "Sobremesas cremosas", imagem: "/images/galeria-cremosa.png" },
      { nome: "Doces para dias quentes", imagem: "/images/galeria-dias-quentes.png" },
    ] as CategoriaGaleria[],
  },

  // ---------------------------------------------------------------------
  // Como funciona
  // ---------------------------------------------------------------------
  comoFunciona: [
    {
      numero: 1,
      titulo: "Faça a compra pelo checkout seguro",
      descricao: "Finalize sua compra em poucos minutos pela plataforma de pagamento Cakto.",
    },
    {
      numero: 2,
      titulo: "Receba o acesso ao material digital",
      descricao: "O acesso aos cinco módulos em PDF é liberado digitalmente após a confirmação.",
    },
    {
      numero: 3,
      titulo: "Conheça as receitas e monte seu cardápio",
      descricao: "Explore as 50 sobremesas geladas e escolha as que combinam com o seu público.",
    },
    {
      numero: 4,
      titulo: "Aplique as orientações de preço, divulgação e vendas",
      descricao: "Use os guias práticos para precificar, divulgar e conquistar seus clientes.",
    },
  ] as Passo[],

  // ---------------------------------------------------------------------
  // Para quem é / não é
  // ---------------------------------------------------------------------
  publico: {
    paraQuemE: [
      "Quem deseja começar uma renda extra",
      "Quem gosta de preparar doces",
      "Quem nunca vendeu alimentos",
      "Quem já vende, mas tem dificuldade com preços",
      "Quem busca uma oportunidade para aproveitar o verão",
      "Quem deseja começar de forma simples e organizada",
    ],
    paraQuemNaoE: [
      "Se você procura dinheiro fácil ou garantido",
      "Se você não pretende produzir ou divulgar os produtos",
      "Se você espera resultados sem aplicar o conteúdo",
      "Se você procura um curso presencial",
    ],
  },

  // ---------------------------------------------------------------------
  // Avaliações reais
  // ---------------------------------------------------------------------
  // Mantenha esta lista vazia até que existam avaliações reais de
  // compradores. Quando houver depoimentos verdadeiros, adicione objetos
  // seguindo o formato abaixo. Se a lista estiver vazia, a seção de
  // avaliações não é exibida na página.
  //
  // Exemplo de como adicionar uma avaliação real no futuro:
  // testimonials: [
  //   {
  //     nome: "Maria S.",
  //     cidade: "Belo Horizonte, MG",
  //     texto: "Comecei a vender no meu bairro seguindo as orientações do material.",
  //   },
  // ],
  testimonials: [] as Testemunho[],

  // ---------------------------------------------------------------------
  // Oferta
  // ---------------------------------------------------------------------
  oferta: {
    titulo: "Método Verão Lucrativo",
    itens: [
      "Cinco módulos completos em PDF",
      "50 sobremesas geladas para fazer e vender",
      "Conteúdo sobre custos e formação de preços",
      "Orientações de divulgação e vendas",
      "Estratégias de organização e fidelização de clientes",
      "Acesso digital, disponível para consulta quando quiser",
      "Garantia de 7 dias",
    ],
    textoBotao: "Quero acessar o Método Verão Lucrativo",
    textoAbaixoBotao: "Você será direcionado ao checkout seguro da Cakto",
  },

  // ---------------------------------------------------------------------
  // Garantia
  // ---------------------------------------------------------------------
  garantia: {
    titulo: "Garantia de 7 dias",
    texto:
      "Você terá 7 dias para conhecer o material. Caso perceba que o conteúdo não corresponde ao que esperava, poderá solicitar o reembolso dentro do período da garantia, conforme as condições apresentadas na plataforma de pagamento.",
  },

  // ---------------------------------------------------------------------
  // Aviso sobre resultados
  // ---------------------------------------------------------------------
  avisoResultados:
    "O Método Verão Lucrativo possui caráter educativo. Os resultados variam conforme a aplicação do conteúdo, região, custos dos ingredientes, preços praticados, demanda local e dedicação de cada pessoa. Não existe garantia de faturamento ou lucro.",

  // ---------------------------------------------------------------------
  // FAQ
  // ---------------------------------------------------------------------
  faq: [
    {
      pergunta: "O Método Verão Lucrativo é físico ou digital?",
      resposta:
        "É um produto 100% digital. Você recebe acesso aos cinco módulos em PDF, sem envio de nenhum item físico.",
    },
    {
      pergunta: "O que está incluído no material?",
      resposta:
        "Cinco módulos em PDF: um guia inicial, 50 receitas de sobremesas geladas, um guia de custos e preços, um guia de divulgação e vendas, e um guia de organização e fidelização de clientes.",
    },
    {
      pergunta: "São realmente 50 receitas?",
      resposta:
        "Sim. O módulo 2 reúne 50 receitas de sobremesas geladas para compor o seu cardápio.",
    },
    {
      pergunta: "O conteúdo serve para quem nunca vendeu sobremesas?",
      resposta:
        "Sim. O material foi organizado para acompanhar quem está começando do zero, com orientações desde os primeiros passos.",
    },
    {
      pergunta: "Vou aprender a calcular custos e preços?",
      resposta:
        "Sim. O módulo 3 é dedicado a explicar como calcular o custo de cada receita e como definir o preço de venda.",
    },
    {
      pergunta: "Como receberei o acesso?",
      resposta:
        "O acesso ao material digital é disponibilizado após a confirmação da compra pela plataforma de pagamento Cakto. As instruções específicas de acesso são apresentadas no checkout.",
    },
    {
      pergunta: "Posso acessar pelo celular?",
      resposta:
        "Sim. Por ser um material em PDF, ele pode ser acessado em celulares, tablets e computadores.",
    },
    {
      pergunta: "Quais são as formas de pagamento?",
      resposta:
        "As formas de pagamento disponíveis podem ser consultadas diretamente no checkout da Cakto.",
    },
    {
      pergunta: "Como funciona a garantia de 7 dias?",
      resposta:
        "Você tem até 7 dias após a compra para solicitar reembolso, caso o conteúdo não atenda às suas expectativas, conforme as condições apresentadas na plataforma de pagamento.",
    },
    {
      pergunta: "O método garante que terei lucro?",
      resposta:
        "Não. O conteúdo tem caráter educativo e os resultados dependem da aplicação do material, da região, dos preços praticados, da demanda local e do esforço de cada pessoa. Não existe garantia de faturamento ou lucro.",
    },
  ] as PerguntaFrequente[],

  // ---------------------------------------------------------------------
  // CTA final
  // ---------------------------------------------------------------------
  ctaFinal: {
    titulo: "Seu primeiro cardápio lucrativo pode começar neste verão",
    textoBotao: "Quero começar a vender",
  },

  // ---------------------------------------------------------------------
  // Botão fixo mobile
  // ---------------------------------------------------------------------
  botaoFixoMobile: `Quero acessar — ${"R$ 27,90"}`,

  // ---------------------------------------------------------------------
  // Imagens (centralize aqui todos os caminhos — substitua os arquivos
  // dentro de /public/images mantendo os mesmos nomes, ou atualize os
  // caminhos abaixo se usar novos nomes de arquivo)
  // ---------------------------------------------------------------------
  imagens: {
    capaProduto: "/images/capa-produto.png",
    mockupModulos: "/images/mockup-modulos.png",
    ingredientesFrutas: "/images/ingredientes-frutas.png",
    pessoaPreparando: "/images/pessoa-preparando.png",
    embalagensProntas: "/images/embalagens-prontas.png",
    ogImage: "/images/og-image.png",
    favicon: "/favicon.svg",
  },

  // ---------------------------------------------------------------------
  // Informações legais (preencha com os dados reais antes de publicar)
  // ---------------------------------------------------------------------
  legal: {
    emailSuporte: "[E-MAIL DE SUPORTE]",
    avisoMeta:
      "Este site não faz parte nem é endossado pelo Facebook, Instagram ou Meta Platforms, Inc.",
  },

  // ---------------------------------------------------------------------
  // Links de contato / rodapé
  // ---------------------------------------------------------------------
  links: {
    termosDeUso: "/termos-de-uso",
    politicaDePrivacidade: "/politica-de-privacidade",
    politicaDeReembolso: "/politica-de-reembolso",
    contato: "/contato",
  },
};

export type ProductConfig = typeof productConfig;
