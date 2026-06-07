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
});
