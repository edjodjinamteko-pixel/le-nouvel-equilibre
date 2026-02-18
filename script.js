// Menu mobile
const menuBtn = document.getElementById("menuBtn");
const mobileNav = document.getElementById("mobileNav");

function toggleMenu() {
  const isHidden = mobileNav.hasAttribute("hidden");
  if (isHidden) {
    mobileNav.removeAttribute("hidden");
    menuBtn.setAttribute("aria-expanded", "true");
  } else {
    mobileNav.setAttribute("hidden", "");
    menuBtn.setAttribute("aria-expanded", "false");
  }
}
menuBtn?.addEventListener("click", toggleMenu);

// Année footer
document.getElementById("year").textContent = new Date().getFullYear();

// Démo newsletter
document.getElementById("subscribeBtn")?.addEventListener("click", () => {
  const email = document.getElementById("email").value.trim();
  const hint = document.getElementById("formHint");

  if (!email) {
    hint.textContent = "Entre un email valide.";
    return;
  }
  hint.textContent = `Merci ! (Démo) ${email} — on branchera l’outil newsletter ensuite.`;
});
