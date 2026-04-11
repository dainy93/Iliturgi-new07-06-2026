document.addEventListener("DOMContentLoaded", () => {
  const loginForm = document.getElementById("login-form");
  const demoButtons = document.querySelectorAll(".demo-btn");

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