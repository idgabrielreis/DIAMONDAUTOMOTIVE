/* ==========================================================================
   DIAMOND AUTOMOTIVE — ARQUIVO DE CONTEÚDO
   --------------------------------------------------------------------------
   É AQUI QUE VOCÊ MEXE. Tudo do site (textos, serviços, preços, fotos,
   contato) sai deste arquivo. Não precisa entender de programação.

   REGRAS SIMPLES:
   1. Só edite o que está entre as aspas "assim".
   2. Nunca apague as vírgulas, chaves { } ou colchetes [ ].
   3. Para acentos e emojis pode escrever normal.
   4. Salvou? Atualize a página no navegador (F5) e veja o resultado.
   ========================================================================== */

const DADOS = {

  /* ---------------------------------------------------------------- MARCA */
  marca: {
    // Logo que aparece no topo do site.
    // Já subiu seu arquivo original? Salve como "assets/img/logo.png"
    // e troque a linha abaixo para: logo: "assets/img/logo.png",
    logo: "assets/img/logo.svg",
    nome: "DIAMOND",
    sobrenome: "AUTOMOTIVE",
    slogan: "Estética Automotiva",
    cidade: "Campinas — SP",
  },

  /* -------------------------------------------------------------- CONTATO */
  contato: {
    // Telefone como as pessoas leem na tela:
    telefoneVisivel: "(19) 92001-6824",
    // Mesmo número, só dígitos, com 55 na frente (para o link do WhatsApp):
    whatsapp: "5519920016824",
    // Mensagem que já vem escrita quando o cliente abre o WhatsApp:
    mensagemWhatsapp: "Olá! Vim pelo site e quero fazer um orçamento 💎",
    // Coloque o link do seu perfil (troque pelo endereço certo do Instagram):
    instagram: "https://www.instagram.com/",
    instagramArroba: "@diamondautomotive",
    email: "", // deixe "" se não quiser mostrar e-mail
    // Endereço / região de atendimento:
    endereco: "Campinas e região — SP",
    // Horários (uma linha por item):
    horarios: [
      "Segunda a Sexta — 08h às 18h",
      "Sábado — 08h às 14h",
      "Domingo — fechado",
    ],
  },

  /* ----------------------------------------------------------------- HERO */
  // Primeira tela do site (a que mais chama atenção)
  hero: {
    selo: "Estética Automotiva em Campinas-SP",
    titulo: "Seu carro com brilho de",
    tituloDestaque: "diamante",
    texto:
      "Lavagem premium, polimento, cristalização e higienização interna. " +
      "Cuidado profissional, acabamento impecável e aquele prazer de entrar " +
      "num carro que parece novo de novo.",
    botaoPrincipal: "Agendar pelo WhatsApp",
    botaoSecundario: "Ver serviços",
  },

  // Faixa que passa rolando abaixo do topo:
  faixaRolante: [
    "LAVAGEM PREMIUM",
    "CRISTALIZAÇÃO",
    "POLIMENTO",
    "HIGIENIZAÇÃO INTERNA",
    "APLICAÇÃO DE CERA",
    "POLIMENTO DE FARÓIS",
    "LAVAGEM SIMPLES",
    "DETALHAMENTO",
  ],

  /* ------------------------------------------------------------- SERVIÇOS */
  // Para adicionar um serviço, copie um bloco { ... } inteiro e cole abaixo.
  // "preco" pode ser "A partir de R$ 120" ou "Sob consulta" — como preferir.
  servicos: [
    {
      icone: "💧",
      nome: "Lavagem Premium",
      descricao:
        "Lavagem detalhada com produtos profissionais, descontaminação da pintura, rodas, pneus e secagem sem risco.",
      preco: "Sob consulta",
      destaque: false,
    },
    {
      icone: "💎",
      nome: "Cristalização",
      descricao:
        "Proteção que sela a pintura, realça o brilho, facilita a limpeza e faz a água escorrer sozinha.",
      preco: "Sob consulta",
      destaque: true, // true = card em destaque (o mais vendido)
    },
    {
      icone: "✨",
      nome: "Polimento",
      descricao:
        "Remoção de riscos leves, marcas de lavagem e oxidação. A pintura volta a refletir como espelho.",
      preco: "Sob consulta",
      destaque: false,
    },
    {
      icone: "🔦",
      nome: "Polimento de Faróis",
      descricao:
        "Farol amarelado e opaco volta a ficar transparente. Melhora o visual do carro e, principalmente, a luz à noite.",
      preco: "Sob consulta",
      destaque: false,
    },
    {
      icone: "🧼",
      nome: "Higienização Interna",
      descricao:
        "Bancos, carpetes, teto e painel higienizados a fundo. Tira odor, mancha e o que você nem via.",
      preco: "Sob consulta",
      destaque: false,
    },
    {
      icone: "🛡️",
      nome: "Aplicação de Cera",
      descricao:
        "Camada de proteção contra sol, chuva e poeira, com brilho profundo e toque macio.",
      preco: "Sob consulta",
      destaque: false,
    },
    {
      icone: "🔍",
      nome: "Detalhamento",
      descricao:
        "O pacote completo: cada detalhe do seu carro tratado por dentro e por fora, sem pressa.",
      preco: "Sob consulta",
      destaque: false,
    },
  ],

  /* --------------------------------------------------------- DIFERENCIAIS */
  diferenciais: [
    {
      icone: "🏆",
      titulo: "Acabamento profissional",
      texto: "Produtos e técnicas de detailing, não é lavagem de posto.",
    },
    {
      icone: "🚗",
      titulo: "Todo tipo de veículo",
      texto: "Carro, SUV, esportivo ou moto — cada um com o tratamento certo.",
    },
    {
      icone: "📅",
      titulo: "Agendamento fácil",
      texto: "Manda mensagem no WhatsApp e a gente fecha o melhor horário.",
    },
    {
      icone: "💬",
      titulo: "Orçamento transparente",
      texto: "Você sabe o que vai ser feito e quanto custa antes de começar.",
    },
  ],

  /* --------------------------------------------------------------- FOTOS */
  // COMO TROCAR AS FOTOS:
  // 1. Coloque suas imagens dentro da pasta "assets/img".
  // 2. Escreva o nome do arquivo aqui, ex: "assets/img/mustang.jpg".
  // 3. "legenda" é o texto que aparece quando passa o mouse.
  // Dá para ajustar o corte de uma foto específica acrescentando
  // posicao, ex: { imagem: "...", legenda: "...", posicao: "center 30%" }
  galeria: [
    { imagem: "assets/img/depois.jpg", legenda: "Polimento de faróis" },
    { imagem: "assets/img/cristalizacao.jpg", legenda: "Cristalização" },
    { imagem: "assets/img/higienizacao.jpg", legenda: "Higienização interna" },
    { imagem: "assets/img/exemplo-4.svg", legenda: "Detalhamento completo" },
    { imagem: "assets/img/exemplo-5.svg", legenda: "Aplicação de cera" },
    { imagem: "assets/img/exemplo-6.svg", legenda: "Motos também!" },
  ],

  /* --------------------------------------------------- ANTES x DEPOIS */
  // Troque pelos seus dois arquivos. Se não quiser essa seção,
  // deixe "ativo: false".
  antesDepois: {
    ativo: true,
    // Salve suas duas fotos na pasta assets/img com estes nomes
    // (ou troque os nomes aqui). Enquanto os arquivos não existirem,
    // o site mostra a imagem de exemplo sozinho.
    antes: "assets/img/antes.jpg",
    depois: "assets/img/depois.jpg",
    // Texto que aparece acima da comparação:
    legenda: "Polimento de faróis",
    // Formato das fotos: "3/4" para foto de celular em pé,
    // "4/3" ou "16/9" para foto deitada.
    proporcao: "3/4",
    // O site corta as sobras da foto (inclusive tarja preta de print
    // de celular) e mostra o meio dela. Se o farol ficar cortado,
    // use "center 35%" para subir o corte ou "center 65%" para descer.
    enquadramento: "center",
  },

  /* ---------------------------------------------------------- DEPOIMENTOS */
  // Comece vazio. Quando um cliente elogiar, copie o modelo abaixo:
  // { nome: "João S.", carro: "Golf GTI", texto: "Ficou impecável!" },
  depoimentos: [],

  /* --------------------------------------------------------------- SOBRE */
  sobre: {
    titulo: "Cuidar de carro é coisa séria",
    texto:
      "A Diamond Automotive nasceu do gosto genuíno por carro limpo e bem " +
      "tratado. Trabalhamos com estética automotiva em Campinas e região, " +
      "com atenção em cada detalhe: da roda ao porta-luvas. O resultado é " +
      "aquele carro que você olha de longe no estacionamento só pra ver " +
      "brilhando.",
  },

  /* ------------------------------------------------------------ PERGUNTAS */
  faq: [
    {
      pergunta: "Quanto tempo demora?",
      resposta:
        "Depende do serviço. Uma lavagem premium leva algumas horas; polimento e cristalização podem ocupar o dia. A gente combina tudo antes.",
    },
    {
      pergunta: "Vocês buscam o carro?",
      resposta:
        "Fale com a gente pelo WhatsApp que verificamos a disponibilidade para a sua região.",
    },
    {
      pergunta: "Precisa agendar?",
      resposta:
        "Sim, trabalhamos com hora marcada para dedicar o tempo certo a cada veículo.",
    },
    {
      pergunta: "Quais formas de pagamento?",
      resposta: "Pix, dinheiro e cartão. Confirme as condições no atendimento.",
    },
  ],
};
