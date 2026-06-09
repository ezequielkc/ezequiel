/* ============================================================
   EZEQUIEL KOWALSKI — Comportamento
   Sem dependências. Tudo progressivo: se o JS falhar, a página
   continua legível e o formulário continua enviando normalmente.
   ============================================================ */
(function () {
  "use strict";

  /* ---------- Marca que o JS está ativo (libera o reveal) ---------- */
  document.documentElement.classList.add("has-reveal");

  /* ---------- Ano dinâmico no rodapé ---------- */
  var ano = document.getElementById("ano");
  if (ano) ano.textContent = new Date().getFullYear();

  /* ---------- Menu mobile ---------- */
  var toggle = document.querySelector(".nav__toggle");
  var menu = document.getElementById("menu-mobile");
  if (toggle && menu) {
    toggle.addEventListener("click", function () {
      var open = toggle.getAttribute("aria-expanded") === "true";
      toggle.setAttribute("aria-expanded", String(!open));
      menu.classList.toggle("is-open", !open);
    });
    // Fecha ao clicar num link
    menu.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        toggle.setAttribute("aria-expanded", "false");
        menu.classList.remove("is-open");
      });
    });
  }

  /* ---------- Revelar elementos ao rolar ---------- */
  var reveals = document.querySelectorAll(".reveal");
  // Marca seções inteiras como reveláveis automaticamente
  document.querySelectorAll(".section .eyebrow, .section .section__title, .section .section__lead, .grid-3, .steps, .atuacao__list, .stats, .sobre__inner, .form")
    .forEach(function (el) { el.classList.add("reveal"); });

  var all = document.querySelectorAll(".reveal");

  if ("IntersectionObserver" in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -8% 0px" });
    all.forEach(function (el) { io.observe(el); });
  } else {
    all.forEach(function (el) { el.classList.add("is-visible"); });
  }

  /* ---------- Envio do formulário (Formspree via fetch) ----------
     Funciona com qualquer endpoint Formspree. Se o endpoint ainda
     não estiver configurado, o envio padrão do navegador assume.
  ------------------------------------------------------------------ */
  var form = document.querySelector(".form");
  var status = form ? form.querySelector(".form__status") : null;

  if (form && status) {
    form.addEventListener("submit", function (e) {
      var action = form.getAttribute("action") || "";
      // Se ainda for o placeholder, deixa o comportamento padrão (evita erro silencioso)
      if (action.indexOf("SEU_ID_FORMSPREE") !== -1) {
        e.preventDefault();
        showStatus("Configure o endpoint do formulário (veja o README) para ativar o envio.", "err");
        return;
      }

      e.preventDefault();

      // Anti-spam: se o honeypot veio preenchido, é bot — finge sucesso e não envia.
      var hp = form.querySelector('input[name="_gotcha"]');
      if (hp && hp.value) {
        form.reset();
        showStatus("Recebido. Retorno em breve para marcarmos a conversa.", "ok");
        return;
      }

      var btn = form.querySelector('button[type="submit"]');
      var original = btn ? btn.textContent : "";
      if (btn) { btn.disabled = true; btn.textContent = "Enviando…"; }

      fetch(action, {
        method: "POST",
        body: new FormData(form),
        headers: { Accept: "application/json" }
      })
        .then(function (res) {
          if (res.ok) {
            form.reset();
            showStatus("Recebido. Retorno em breve para marcarmos a conversa.", "ok");
          } else {
            showStatus("Não foi possível enviar agora. Tente pelo WhatsApp ou e-mail acima.", "err");
          }
        })
        .catch(function () {
          showStatus("Falha de conexão. Tente novamente ou use WhatsApp / e-mail.", "err");
        })
        .finally(function () {
          if (btn) { btn.disabled = false; btn.textContent = original; }
        });
    });
  }

  function showStatus(msg, type) {
    if (!status) return;
    status.textContent = msg;
    status.className = "form__status " + type;
    status.hidden = false;
  }
})();
