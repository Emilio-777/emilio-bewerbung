const menuButton = document.querySelector(".menu-button");
const mobileMenu = document.querySelector("#mobileMenu");
const copyButton = document.querySelector("[data-copy]");
const feedback = document.querySelector(".copy-feedback");

if (menuButton && mobileMenu) {
  menuButton.addEventListener("click", () => {
    const isOpen = menuButton.getAttribute("aria-expanded") === "true";
    menuButton.setAttribute("aria-expanded", String(!isOpen));
    mobileMenu.hidden = isOpen;
  });

  mobileMenu.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      menuButton.setAttribute("aria-expanded", "false");
      mobileMenu.hidden = true;
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
      feedback.textContent = "Kopieren nicht möglich — bitte E-Mail manuell markieren.";
    }

    window.setTimeout(() => {
      feedback.textContent = "";
    }, 2500);
  });
}
