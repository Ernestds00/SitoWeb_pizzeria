const hamburger = document.getElementById("hamburger");
const sidebar = document.getElementById("sidebar");
const overlay = document.getElementById("overlay");
const linkNav = document.querySelectorAll(".link-nav");

const home = document.getElementById("home");
const menuPage = document.getElementById("menu-page");
const titoloCategoria = document.getElementById("titolo-categoria");
const piatti = document.querySelectorAll(".piatto");

const nomiCategorie = {
  tutte: "Menù Completo",
  sfizioserie: "Sfizioserie",
  classiche: "Pizze Classiche",
  gourmet: "Pizze Gourmet",
  bevande: "Bevande",
  dolci: "Dolci"
};

// Apri/chiudi il pannello laterale
function apriMenu() {
  sidebar.classList.add("aperto");
  overlay.classList.add("visibile");
}

function chiudiMenu() {
  sidebar.classList.remove("aperto");
  overlay.classList.remove("visibile");
}

hamburger.addEventListener("click", apriMenu);
overlay.addEventListener("click", chiudiMenu);

// Click sulle voci del menù
linkNav.forEach(link => {
  link.addEventListener("click", (e) => {
    e.preventDefault();

    linkNav.forEach(l => l.classList.remove("attivo"));
    link.classList.add("attivo");

    if (link.dataset.target === "home") {
      home.classList.remove("nascosto");
      menuPage.classList.add("nascosto");
    } else {
      const categoria = link.dataset.categoria;

      home.classList.add("nascosto");
      menuPage.classList.remove("nascosto");
      titoloCategoria.textContent = nomiCategorie[categoria];

      piatti.forEach(piatto => {
        if (categoria === "tutte" || piatto.dataset.categoria === categoria) {
          piatto.style.display = "flex";
        } else {
          piatto.style.display = "none";
        }
      });
    }

    chiudiMenu();
  });
});