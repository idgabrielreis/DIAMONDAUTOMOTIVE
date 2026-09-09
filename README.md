# 💎 Diamond Automotive — site

Site institucional da **Diamond Automotive**, estética automotiva em Campinas-SP.
Feito em HTML, CSS e JavaScript puros: **não precisa instalar nada** para editar ou publicar.

---

## 🖱️ Como abrir no computador

Dê dois cliques no arquivo `index.html`. Ele abre direto no navegador.

---

## ✏️ Como mudar textos, serviços e preços

Tudo o que aparece no site está no arquivo **`dados.js`**.
Abra ele com o Bloco de Notas (ou VS Code), edite o que está entre as `"aspas"`, salve e atualize a página (F5).

Exemplos do que dá pra mudar por lá:

| O que | Onde no `dados.js` |
|---|---|
| Telefone / WhatsApp | `contato.telefoneVisivel` e `contato.whatsapp` |
| Link do Instagram | `contato.instagram` |
| Horário de funcionamento | `contato.horarios` |
| Texto da primeira tela | `hero` |
| Serviços e preços | `servicos` |
| Fotos do portfólio | `galeria` |
| Antes e depois | `antesDepois` |
| Depoimentos de clientes | `depoimentos` |
| Perguntas frequentes | `faq` |

⚠️ **Cuidado:** não apague vírgulas, chaves `{ }` nem colchetes `[ ]`. Se o site ficar em branco, é quase sempre isso.

---

## 📸 Como colocar suas fotos

1. Copie as fotos para a pasta `assets/img`.
2. No `dados.js`, escreva o nome do arquivo, por exemplo:

```js
galeria: [
  { imagem: "assets/img/mustang.jpg", legenda: "Polimento + cristalização" },
],
```

Dica: fotos com no máximo ~1600px de largura deixam o site mais rápido.

---

## 🔶 Como usar o logo original

O site já vem com uma versão vetorial do logo (`assets/img/logo.svg`).
Para usar o arquivo original:

1. Salve a imagem como `assets/img/logo.png` (de preferência com fundo transparente).
2. No `dados.js`, troque para:

```js
logo: "assets/img/logo.png",
```

---

## 🌐 Como publicar de graça

**Opção 1 — GitHub Pages**
1. Suba os arquivos para o repositório.
2. No GitHub: `Settings` → `Pages` → em *Branch* escolha a branch e a pasta `/ (root)` → `Save`.
3. Em alguns minutos o site fica no ar em `https://SEU-USUARIO.github.io/DIAMONDAUTOMOTIVE/`.

**Opção 2 — Netlify (mais fácil)**
Acesse [app.netlify.com/drop](https://app.netlify.com/drop) e arraste a pasta do projeto para a página. Pronto.

Depois é só apontar um domínio próprio (ex: `diamondautomotive.com.br`) para o endereço gerado.

---

## 📁 Estrutura dos arquivos

```
index.html              → a página (estrutura)
dados.js                → ⭐ TODO O CONTEÚDO (é aqui que você mexe)
assets/css/style.css    → cores e visual
assets/js/main.js       → funcionamento (menu, galeria, animações)
assets/img/             → imagens e logo
```

---

## ✨ O que o site já tem

- Botão flutuante do WhatsApp com mensagem pronta
- Cada serviço com botão "pedir orçamento" que já abre o WhatsApp falando do serviço
- Comparador "antes e depois" com barrinha arrastável
- Galeria com ampliação de foto (clique)
- Menu que vira sanduíche no celular
- Perguntas frequentes que abrem e fecham
- Animações ao rolar a página
- Funciona bem no celular, tablet e computador
