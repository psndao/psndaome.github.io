// Sticky Navigation Menu
let nav = document.querySelector("nav");
let scrollBtn = document.querySelector(".scroll-button a");

// Affiche ou masque le bouton et rend la navbar sticky au scroll
window.addEventListener("scroll", function () {
  if (document.documentElement.scrollTop > 20) {
    nav.classList.add("sticky");
    scrollBtn.style.display = "block";
  } else {
    nav.classList.remove("sticky");
    scrollBtn.style.display = "none";
  }
});



// Side Navigation Menu
let body = document.querySelector("body");
let navBar = document.querySelector(".navbar");
let menuBtn = document.querySelector(".menu-btn");
let cancelBtn = document.querySelector(".cancel-btn");

menuBtn.onclick = function () {
  navBar.classList.add("active");
  menuBtn.style.opacity = "0";
  menuBtn.style.pointerEvents = "none";
  body.style.overflow = "hidden";
  scrollBtn.style.pointerEvents = "none";
};

cancelBtn.onclick = function () {
  navBar.classList.remove("active");
  menuBtn.style.opacity = "1";
  menuBtn.style.pointerEvents = "auto";
  body.style.overflow = "auto";
  scrollBtn.style.pointerEvents = "auto";
};

// Ferme le menu quand un lien est cliqué
let navLinks = document.querySelectorAll(".menu li a");
navLinks.forEach(link => {
  link.addEventListener("click", function () {
    navBar.classList.remove("active");
    menuBtn.style.opacity = "1";
    menuBtn.style.pointerEvents = "auto";
  });
});

// Mode sombre avec mémorisation du choix
const toggle = document.getElementById("darkModeToggle");
const prefersDark = localStorage.getItem("theme") === "dark";

if (prefersDark) {
  document.body.classList.add("dark-mode");
  toggle.checked = true;
}

toggle?.addEventListener("change", () => {
  document.body.classList.toggle("dark-mode");
  localStorage.setItem("theme", document.body.classList.contains("dark-mode") ? "dark" : "light");
});

// Loader de démarrage
document.body.classList.add("loading");

window.addEventListener("load", () => {
  const loader = document.getElementById("loader-wrapper");
  setTimeout(() => {
    loader.style.display = "none";
    document.body.classList.remove("loading");
    document.body.classList.add("loaded");
  }, 1000); // délai de 1s (modifiable)
});


const fadeElements = document.querySelectorAll('.fade-in');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target); // désactive l’observation une fois affiché
    }
  });
}, {
  threshold: 0.1
});

fadeElements.forEach(el => observer.observe(el));
