document.addEventListener("DOMContentLoaded", () => {
  const loginForm = document.getElementById("login-form");
  const demoButtons = document.querySelectorAll(".demo-btn");
  const textSizeButtons = document.querySelectorAll("[data-text-size]");
  const storage = {
    get() {
      try {
        return window.localStorage.getItem("iliturgi-text-size");
      } catch (error) {
        return null;
      }
    },
    set(value) {
      try {
        window.localStorage.setItem("iliturgi-text-size", value);
      } catch (error) {
        return;
      }
    },
  };
  const storedTextSize = storage.get();
  const getCookieConsent = () => {
    try {
      return window.localStorage.getItem("iliturgi-cookie-consent");
    } catch (error) {
      return null;
    }
  };
  const setCookieConsent = (value) => {
    try {
      window.localStorage.setItem("iliturgi-cookie-consent", value);
    } catch (error) {
      return;
    }
  };

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
      storage.set(useLargeText ? "large" : "normal");

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
      const action = button.dataset.demo;

      if (action === "registro") {
        alert("Simulación de registro: en una versión real aquí se abriría el formulario de alta.");
      }
    });
  });

  if (!getCookieConsent()) {
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
        setCookieConsent(button.dataset.cookieAction);
        banner.remove();
      });
    });
  }
});
