const menuButton = document.querySelector(".menu-button");
const mobileMenu = document.querySelector("#mobileMenu");
const copyButton = document.querySelector("[data-copy]");
const feedback = document.querySelector(".copy-feedback");

if (menuButton && mobileMenu) {
  menuButton.addEventListener("click", () => {
    const isOpen = menuButton.getAttribute("aria-expanded") === "true";

    menuButton.setAttribute("aria-expanded", String(!isOpen));
    menuButton.textContent = isOpen ? "Menu" : "Schliessen";
    mobileMenu.classList.toggle("is-open", !isOpen);
  });

  mobileMenu.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      menuButton.setAttribute("aria-expanded", "false");
      menuButton.textContent = "Menu";
      mobileMenu.classList.remove("is-open");
    });
  });
}

if (copyButton && feedback) {
  copyButton.addEventListener("click", async () => {
    const value = copyButton.dataset.copy;

    try {
      await navigator.clipboard.writeText(value);
      feedback.textContent = "E-Mail wurde kopiert.";
    } catch (error) {
      feedback.textContent = "Kopieren nicht moeglich - bitte E-Mail manuell markieren.";
    }

    window.setTimeout(() => {
      feedback.textContent = "";
    }, 2500);
  });
}
