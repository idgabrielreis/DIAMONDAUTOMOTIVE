/* ==========================================================================
   DIAMOND AUTOMOTIVE — funcionamento do site
   Você NÃO precisa mexer aqui. Todo o conteúdo está em "dados.js".
   ========================================================================== */
(function () {
  "use strict";

  var D = window.DADOS || DADOS;
  var $  = function (s, r) { return (r || document).querySelector(s); };
  var $$ = function (s, r) { return Array.prototype.slice.call((r || document).querySelectorAll(s)); };
  var esc = function (t) {
    return String(t == null ? "" : t)
      .replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  };
  var set = function (sel, txt) { $$(sel).forEach(function (el) { el.textContent = txt; }); };

  // troca a imagem pela de exemplo se o arquivo não existir
  function reserva(img, caminho, exemplo) {
    img.onerror = function () { img.onerror = null; img.src = exemplo; };
    img.src = caminho;
  }

  /* --------------------------------------------------- link do WhatsApp */
  var linkZap = "https://wa.me/" + D.contato.whatsapp +
                "?text=" + encodeURIComponent(D.contato.mensagemWhatsapp || "");

  $$("[data-zap]").forEach(function (el) {
    el.href = linkZap;
    el.target = "_blank";
    el.rel = "noopener";
  });
  $$("[data-insta]").forEach(function (el) { el.href = D.contato.instagram; });

  /* ------------------------------------------------------ textos simples */
  $$("[data-logo]").forEach(function (img) {
    if (D.marca.logo) {
      img.src = D.marca.logo;
      img.alt = D.marca.nome + " " + D.marca.sobrenome;
    } else { img.remove(); }
  });
  set("[data-marca-nome]", D.marca.nome);
  set("[data-marca-sobrenome]", D.marca.sobrenome);
  set("[data-cidade]", D.marca.cidade);
  set("[data-telefone]", D.contato.telefoneVisivel);
  set("[data-endereco]", D.contato.endereco);
  set("[data-insta-arroba]", D.contato.instagramArroba);
  set("[data-hero-selo]", D.hero.selo);
  set("[data-hero-titulo]", D.hero.titulo);
  set("[data-hero-destaque]", D.hero.tituloDestaque);
  set("[data-hero-texto]", D.hero.texto);
  set("[data-hero-btn1]", D.hero.botaoPrincipal);
  set("[data-hero-btn2]", D.hero.botaoSecundario);
  set("[data-sobre-titulo]", D.sobre.titulo);
  set("[data-sobre-texto]", D.sobre.texto);
  $("#ano").textContent = new Date().getFullYear();
  $("#horarios").innerHTML = (D.contato.horarios || []).map(esc).join("<br>");
  document.title = D.marca.nome + " " + D.marca.sobrenome + " — " +
                   D.marca.slogan + " em " + D.marca.cidade;

  /* -------------------------------------------------------- faixa rolante */
  var itens = (D.faixaRolante || []).map(function (t) { return "<span>" + esc(t) + "</span>"; }).join("");
  $("#ticker").innerHTML = itens + itens; // duplicado para o loop ficar contínuo

  /* ------------------------------------------------------------- serviços */
  $("#servicos-lista").innerHTML = (D.servicos || []).map(function (s) {
    return '' +
      '<article class="card reveal' + (s.destaque ? " card--destaque" : "") + '">' +
        (s.destaque ? '<span class="card__tag">Mais pedido</span>' : "") +
        '<div class="card__icon">' + esc(s.icone) + "</div>" +
        '<h3 class="card__nome">' + esc(s.nome) + "</h3>" +
        '<p class="card__desc">' + esc(s.descricao) + "</p>" +
        '<div class="card__rodape">' +
          '<span class="card__preco">' + esc(s.preco) + "</span>" +
          '<a class="card__link" target="_blank" rel="noopener" href="' +
            "https://wa.me/" + D.contato.whatsapp + "?text=" +
            encodeURIComponent("Olá! Quero um orçamento de " + s.nome + " 💎") +
          '">Pedir orçamento →</a>' +
        "</div>" +
      "</article>";
  }).join("");

  /* --------------------------------------------------------- diferenciais */
  $("#diferenciais").innerHTML = (D.diferenciais || []).map(function (d) {
    return '<div class="perk reveal">' +
             '<div class="perk__ico">' + esc(d.icone) + "</div>" +
             '<h3 class="perk__tit">' + esc(d.titulo) + "</h3>" +
             '<p class="perk__txt">' + esc(d.texto) + "</p>" +
           "</div>";
  }).join("");

  /* -------------------------------------------------------------- galeria */
  var quadros = D.galeria || [];

  // cada quadro pode ter fotos extras; "fotos" é a lista que a ampliação
  // percorre, e cada quadro guarda em qual foto a ampliação começa
  var fotos = [];
  quadros.forEach(function (q) {
    q.inicio = fotos.length;
    fotos.push({ imagem: q.imagem, legenda: q.legenda });
    (q.tambem || []).forEach(function (extra) {
      if (typeof extra === "string") extra = { imagem: extra };
      fotos.push({ imagem: extra.imagem, legenda: extra.legenda || q.legenda });
    });
    q.total = fotos.length - q.inicio;
  });

  $("#galeria").innerHTML = quadros.map(function (q) {
    return '<figure class="shot reveal" data-i="' + q.inicio + '">' +
             '<img src="' + esc(q.imagem) + '" alt="' + esc(q.legenda) + '" loading="lazy"' +
               (q.posicao ? ' style="object-position:' + esc(q.posicao) + '"' : "") + ">" +
             "<figcaption>" + esc(q.legenda) +
             "</figcaption>" +
             (q.total > 1
               ? '<span class="shot__conta">' + q.total + " fotos</span>"
               : "") +
           "</figure>";
  }).join("");

  /* ---------------------------------------------------------- depoimentos */
  if ((D.depoimentos || []).length) {
    $("#depoimentos").hidden = false;
    $("#depoimentos-lista").innerHTML = D.depoimentos.map(function (d) {
      return '<blockquote class="quote reveal">' +
               '<p class="quote__txt">' + esc(d.texto) + "</p>" +
               '<p class="quote__quem"><b>' + esc(d.nome) + "</b>" +
               (d.carro ? " · " + esc(d.carro) : "") + "</p>" +
             "</blockquote>";
    }).join("");
  }

  /* ------------------------------------------------------------------ FAQ */
  $("#faq").innerHTML = (D.faq || []).map(function (f) {
    return '<div class="faq__item">' +
             '<button class="faq__q" type="button" aria-expanded="false">' + esc(f.pergunta) + "</button>" +
             '<div class="faq__a"><p>' + esc(f.resposta) + "</p></div>" +
           "</div>";
  }).join("");

  $$(".faq__q").forEach(function (b) {
    b.addEventListener("click", function () {
      var item = b.parentElement, resp = item.querySelector(".faq__a");
      var aberto = item.classList.toggle("is-open");
      b.setAttribute("aria-expanded", aberto ? "true" : "false");
      resp.style.maxHeight = aberto ? resp.scrollHeight + "px" : 0;
    });
  });

  /* --------------------------------------------------------- antes/depois */
  var ad = D.antesDepois || {};
  var pares = (ad.comparacoes || []).filter(function (c) { return c && c.antes && c.depois; });
  var medidas = [];

  if (ad.ativo && pares.length) {
    var caixa = $("#compares");
    $("#antesdepois").hidden = false;
    caixa.classList.toggle("compares--um", pares.length === 1);
    pares.forEach(function (par) { caixa.appendChild(montaComparacao(par)); });
    medir();
    window.addEventListener("resize", medir);
  }

  function montaComparacao(par) {
    var fig = document.createElement("figure");
    fig.className = "par reveal";
    fig.innerHTML =
      '<div class="compare">' +
        '<img class="compare__img" alt="Depois do serviço">' +
        '<div class="compare__top"><img class="compare__img" alt="Antes do serviço"></div>' +
        '<div class="compare__handle"><span>‹ ›</span></div>' +
        '<span class="compare__tag compare__tag--l">ANTES</span>' +
        '<span class="compare__tag compare__tag--r">DEPOIS</span>' +
        '<input class="compare__range" type="range" min="0" max="100" value="50" ' +
          'aria-label="Comparar antes e depois">' +
      "</div>" +
      (par.legenda ? "<figcaption>" + esc(par.legenda) + "</figcaption>" : "");

    var box   = fig.querySelector(".compare"),
        fotos = fig.querySelectorAll(".compare__img"),   // 0 = depois (fundo), 1 = antes (topo)
        topo  = fig.querySelector(".compare__top"),
        alca  = fig.querySelector(".compare__handle"),
        barra = fig.querySelector(".compare__range");

    reserva(fotos[0], par.depois, "assets/img/depois.svg");
    reserva(fotos[1], par.antes,  "assets/img/antes.svg");

    if (par.enquadramento) {
      fotos[0].style.objectPosition = par.enquadramento;
      fotos[1].style.objectPosition = par.enquadramento;
    }
    if (par.proporcao) box.style.aspectRatio = par.proporcao.replace("/", " / ");

    barra.addEventListener("input", function () {
      topo.style.width = barra.value + "%";
      alca.style.left  = barra.value + "%";
    });

    medidas.push(function () { box.style.setProperty("--cmp-w", box.offsetWidth + "px"); });
    return fig;
  }

  function medir() { medidas.forEach(function (f) { f(); }); }

  /* ------------------------------------------------------------- lightbox */
  var lb = $("#lightbox"), lbImg = $("#lb-img"), lbCap = $("#lb-cap"), atual = 0;

  function abrir(i) {
    atual = (i + fotos.length) % fotos.length;
    lbImg.src = fotos[atual].imagem;
    lbImg.alt = fotos[atual].legenda || "";
    lbCap.textContent = (fotos[atual].legenda || "") +
      (fotos.length > 1 ? "  ·  " + (atual + 1) + " / " + fotos.length : "");
    lb.hidden = false;
    document.body.style.overflow = "hidden";
  }
  function fechar() { lb.hidden = true; document.body.style.overflow = ""; }

  $$(".shot img").forEach(function (img) {
    img.onerror = function () { img.onerror = null; img.src = "assets/img/exemplo-1.svg"; };
  });

  $$(".shot").forEach(function (fig) {
    fig.addEventListener("click", function () { abrir(+fig.dataset.i); });
  });
  $("#lb-close").addEventListener("click", fechar);
  $("#lb-prev").addEventListener("click", function () { abrir(atual - 1); });
  $("#lb-next").addEventListener("click", function () { abrir(atual + 1); });
  lb.addEventListener("click", function (e) { if (e.target === lb) fechar(); });
  document.addEventListener("keydown", function (e) {
    if (lb.hidden) return;
    if (e.key === "Escape") fechar();
    if (e.key === "ArrowLeft") abrir(atual - 1);
    if (e.key === "ArrowRight") abrir(atual + 1);
  });

  /* ----------------------------------------------------------- menu mobile */
  var burger = $("#burger"), menu = $("#menu");
  burger.addEventListener("click", function () {
    var aberto = menu.classList.toggle("is-open");
    burger.setAttribute("aria-expanded", aberto ? "true" : "false");
  });
  $$("#menu a").forEach(function (a) {
    a.addEventListener("click", function () {
      menu.classList.remove("is-open");
      burger.setAttribute("aria-expanded", "false");
    });
  });

  /* ------------------------------------------------------- topo com fundo */
  var nav = $("#nav");
  var scroll = function () { nav.classList.toggle("is-stuck", window.scrollY > 40); };
  scroll();
  window.addEventListener("scroll", scroll, { passive: true });

  /* ------------------------------------------ animação ao rolar a página */
  if ("IntersectionObserver" in window) {
    var obs = new IntersectionObserver(function (entradas) {
      entradas.forEach(function (e) {
        if (e.isIntersecting) { e.target.classList.add("is-in"); obs.unobserve(e.target); }
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -40px 0px" });

    $$(".reveal").forEach(function (el, i) {
      el.style.transitionDelay = (i % 4) * 70 + "ms";
      obs.observe(el);
    });
  } else {
    $$(".reveal").forEach(function (el) { el.classList.add("is-in"); });
  }
})();
