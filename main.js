// Botón menú responsive
document.querySelector(".menu-btn").addEventListener("click", () => {
  document.querySelector(".nav-menu").classList.toggle("show");
});

// Animaciones con ScrollReveal
ScrollReveal().reveal('.showcase', { delay: 200 });
ScrollReveal().reveal('.news-cards', { delay: 400 });
ScrollReveal().reveal('.cards-banner-one', { delay: 600 });
ScrollReveal().reveal('.social', { delay: 800 });
