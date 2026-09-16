const hamburger = document.getElementById("hamburger");
const sidebar = document.getElementById("sidebar");
const overlay = document.getElementById("overlay");
const linkNav = document.querySelectorAll(".link-nav");

const toggleMenu = document.getElementById("toggle-menu");
const sottomenu = document.getElementById("sottomenu");
const voceEspandibile = document.querySelector(".voce-espandibile");

// Tutte le sezioni "pagina"
const sezioni = {
  home: document.getElementById("home"),
  "chi-siamo": document.getElementById("chi-siamo"),
  menu: document.getElementById("menu-page"),
  contattaci: document.getElementById("contattaci")
};

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

// Mostra solo la sezione richiesta, nasconde le altre
function mostraSezione(nome) {
  Object.values(sezioni).forEach(sezione => sezione.classList.add("nascosto"));
  sezioni[nome].classList.remove("nascosto");
}

// Click su "Menù" → apre/chiude il sottomenù (non naviga da solo)
toggleMenu.addEventListener("click", (e) => {
  e.preventDefault();
  sottomenu.classList.toggle("nascosto");
  voceEspandibile.classList.toggle("aperta");
});

// Click sulle voci dirette: Home, Chi Siamo, Contattaci
document.querySelectorAll('.link-nav[data-target]').forEach(link => {
  link.addEventListener("click", (e) => {
    e.preventDefault();

    document.querySelectorAll("#sidebar a").forEach(l => l.classList.remove("attivo"));
    link.classList.add("attivo");

    mostraSezione(link.dataset.target);
    chiudiMenu();
  });
});

// Click sulle voci del sottomenù (categorie di piatti)
document.querySelectorAll('.sottomenu .link-nav').forEach(link => {
  link.addEventListener("click", (e) => {
    e.preventDefault();

    document.querySelectorAll("#sidebar a").forEach(l => l.classList.remove("attivo"));
    link.classList.add("attivo");
    toggleMenu.classList.add("attivo");

    const categoria = link.dataset.categoria;

    mostraSezione("menu");
    titoloCategoria.textContent = nomiCategorie[categoria];

    piatti.forEach(piatto => {
      if (categoria === "tutte" || piatto.dataset.categoria === categoria) {
        piatto.style.display = "flex";
      } else {
        piatto.style.display = "none";
      }
    });

    chiudiMenu();
  });
});