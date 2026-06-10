function initIliturgiUI() {
  const loginForm = document.getElementById("login-form");
  const demoButtons = document.querySelectorAll(".demo-btn");
  const textSizeButtons = document.querySelectorAll("[data-text-size]");

  const safeStorage = {
    get(key) {
      try {
        return window.localStorage ? window.localStorage.getItem(key) : null;
      } catch (error) {
        return null;
      }
    },
    set(key, value) {
      try {
        if (window.localStorage) {
          window.localStorage.setItem(key, value);
        }
      } catch (error) {
        return;
      }
    },
  };

  const storedTextSize = safeStorage.get("iliturgi-text-size");

  if (storedTextSize === "large") {
    document.body.classList.add("large-text");
  }

  textSizeButtons.forEach((button) => {
    const size = button.dataset.textSize;
    button.setAttribute(
      "aria-pressed",
      String((size === "large") === document.body.classList.contains("large-text"))
    );

    button.addEventListener("click", () => {
      const useLargeText = size === "large";
      document.body.classList.toggle("large-text", useLargeText);
      safeStorage.set("iliturgi-text-size", useLargeText ? "large" : "normal");

      textSizeButtons.forEach((control) => {
        control.setAttribute(
          "aria-pressed",
          String((control.dataset.textSize === "large") === useLargeText)
        );
      });
    });
  });

  if (loginForm) {
    loginForm.addEventListener("submit", (event) => {
      event.preventDefault();
      window.location.href = "home.html";
    });
  }

  demoButtons.forEach((button) => {
    button.addEventListener("click", () => {
      if (button.dataset.demo === "registro") {
        alert("Simulacion de registro: en una version real aqui se abriria el formulario de alta.");
      }
    });
  });

  const cookieConsent = safeStorage.get("iliturgi-cookie-consent");
  const sessionCookieConsent = document.body.dataset.cookieConsent;

  if (!cookieConsent && !sessionCookieConsent && !document.querySelector(".cookie-banner")) {
    const banner = document.createElement("section");
    banner.className = "cookie-banner";
    banner.setAttribute("aria-label", "Aviso de cookies y privacidad");
    banner.innerHTML = `
      <div class="cookie-banner-text">
        <strong>Privacidad y cookies</strong>
        <span>Usamos preferencias locales para accesibilidad y, opcionalmente, cookies no esenciales para analisis anonimo del prototipo.</span>
      </div>
      <div class="cookie-banner-actions">
        <button type="button" class="btn btn-secondary-outline btn-small" data-cookie-action="reject">Rechazar</button>
        <a href="ajustes.html" class="btn btn-secondary-outline btn-small">Configurar</a>
        <button type="button" class="btn btn-primary btn-small" data-cookie-action="accept">Aceptar</button>
      </div>
    `;

    document.body.appendChild(banner);

    banner.querySelectorAll("[data-cookie-action]").forEach((button) => {
      button.addEventListener("click", () => {
        const decision = button.dataset.cookieAction;
        safeStorage.set("iliturgi-cookie-consent", decision);
        document.body.dataset.cookieConsent = decision;
        banner.remove();
      });
    });
  }
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initIliturgiUI);
} else {
  initIliturgiUI();
}
