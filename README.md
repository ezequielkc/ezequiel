# ezequielkowalski.com.br

Site pessoal de posicionamento como consultor de performance e estratégia de crescimento.
Estático (HTML + CSS + JS), página única, sem build. Edição direta pelo GitHub Web.

---

## Estrutura do repositório

```
/ (raiz)
├── index.html          → conteúdo e copy (edite o texto aqui)
├── README.md           → este arquivo
├── css/
│   └── style.css       → identidade visual, layout, animações
├── js/
│   └── main.js         → menu mobile, animações, envio do formulário
└── assets/
    ├── favicon.svg      → ícone da aba (já pronto)
    ├── ezequiel.jpg     → SUA FOTO (adicionar — ~800x1000px)
    └── og-image.png     → imagem de compartilhamento (adicionar — 1200x630px)
```

Recrie exatamente essa estrutura no repositório e arraste cada arquivo para a pasta correspondente.

---

## Deploy na Vercel

A Vercel detecta site estático automaticamente. Não precisa de configuração.

1. Suba os arquivos no repositório do GitHub (mantendo as pastas).
2. Na Vercel, o projeto já conectado faz o deploy a cada commit.
3. Em **Settings → Domains**, aponte `ezequielkowalski.com.br`.

---

## O que personalizar (5 itens)

Tudo está marcado no código com texto em MAIÚSCULAS para facilitar achar.

| # | Onde | O quê |
|---|------|-------|
| 1 | `index.html` (vários pontos) | URL da Konge — hoje está `https://konge.com.br`. Confirme/ajuste. |
| 2 | `index.html` → formulário | `https://wa.me/55SEUNUMERO` e `contato@ezequielkowalski.com.br` |
| 3 | `index.html` → rodapé | `https://www.linkedin.com/in/SEU-PERFIL` |
| 4 | `index.html` → seção Contato | `SEU_ID_FORMSPREE` no `action` do `<form>` (ver abaixo) |
| 5 | `assets/` | Adicionar `ezequiel.jpg` (foto) e `og-image.png` (compartilhamento) |

### Ativar o formulário (Formspree — grátis, sem backend)

1. Crie conta em [formspree.io](https://formspree.io) e um novo form.
2. Copie o endpoint, algo como `https://formspree.io/f/abcdwxyz`.
3. Em `index.html`, troque `action="https://formspree.io/f/SEU_ID_FORMSPREE"` pelo seu endpoint.

> Enquanto não configurar, o site mostra um aviso ao tentar enviar — não dá erro quebrado.

### Adicionar sua foto

1. Suba a foto como `assets/ezequiel.jpg`.
2. Em `css/style.css`, na regra `.sobre__photo`, descomente a linha de `background-image`.

---

## Como editar a copy

Todo o texto visível está em `index.html`, organizado por seções comentadas
(`HERO`, `O PROBLEMA`, `MÉTODO`, etc.). Edite só o texto entre as tags — não precisa tocar em CSS ou JS.

---

## Identidade visual

- **Plano pessoal (claro):** papel frio, tinta quase-preta, acento ardósia — leitura de consultoria/advisor sênior.
- **Bloco Konge (escuro + roxo):** usa a IDV Konge (roxo `#9146FF`, Pitch Black `#141110`) só naquela seção.
  O contraste é proposital: comunica visualmente a passagem de **estratégia → execução**.
- Tipografia: Archivo (display), Inter (corpo), Newsreader itálico (citações).
