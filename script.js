const hamburger = document.getElementById("hamburger");
const sidebar = document.getElementById("sidebar");
const overlay = document.getElementById("overlay");

const toggleMenu = document.getElementById("toggle-menu");
const sottomenu = document.getElementById("sottomenu");
const voceEspandibile = document.querySelector(".voce-espandibile");

// Tutte le sezioni "pagina"
const sezioni = {
  home: document.getElementById("home"),
  "chi-siamo": document.getElementById("chi-siamo"),
  menu: document.getElementById("menu-page"),
  dettaglio: document.getElementById("dettaglio-piatto"),
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

// ===== DATI DI OGNI PIATTO (nome, descrizione, ingredienti, allergeni, prezzo, immagine) =====
const datiPiatti = {
  patatine: {
    nome: "Patatine fritte",
    prezzo: "4,00 €",
    descrizione: "Patatine stick locali, fritte al momento fino a doratura perfetta, croccanti fuori e morbide dentro.",
    ingredienti: ["Patate", "Olio di semi di girasole", "Sale"],
    allergeni: ["Nessuno"],
    immagine: "img/patatine.jpg"
  },
  montanara: {
    nome: "Montanara",
    prezzo: "7,50 €",
    descrizione: "Impasto di pizza fritto, condito con salsa di pomodoro fresco e basilico. Un classico intramontabile della tradizione napoletana.",
    ingredienti: ["Farina", "Pomodoro", "Basilico", "Olio extravergine d'oliva"],
    allergeni: ["Glutine"],
    immagine: "img/montanara.jpg"
  },
  frittatina: {
    nome: "Frittatina di pasta",
    prezzo: "7,50 €",
    descrizione: "Bucatini conditi con besciamella, piselli, prosciutto cotto e provola affumicata, impanati e fritti.",
    ingredienti: ["Bucatini", "Besciamella", "Piselli", "Prosciutto cotto", "Provola affumicata", "Uova", "Pangrattato"],
    allergeni: ["Glutine", "Latte", "Uova"],
    immagine: "img/frittatina.jpg"
  },
  margherita: {
    nome: "Margherita",
    prezzo: "6,00 €",
    descrizione: "La regina delle pizze napoletane: pomodoro San Marzano, mozzarella fiordilatte e basilico fresco, cotta nel forno a legna.",
    ingredienti: ["Farina", "Pomodoro San Marzano", "Mozzarella fiordilatte", "Basilico", "Olio extravergine d'oliva"],
    allergeni: ["Glutine", "Latte"],
    immagine: "img/margherita.jpg"
  },
  diavola: {
    nome: "Diavola",
    prezzo: "7,50 €",
    descrizione: "Pomodoro, mozzarella e salame piccante, per chi ama un tocco di peperoncino in più.",
    ingredienti: ["Farina", "Pomodoro", "Mozzarella fiordilatte", "Salame piccante"],
    allergeni: ["Glutine", "Latte"],
    immagine: "img/diavola.jpg"
  },
  quattroformaggi: {
    nome: "Quattro Formaggi",
    prezzo: "8,00 €",
    descrizione: "Un tripudio di formaggi: mozzarella, gorgonzola, parmigiano e fontina, per un gusto ricco e deciso.",
    ingredienti: ["Farina", "Mozzarella fiordilatte", "Gorgonzola", "Parmigiano Reggiano", "Fontina"],
    allergeni: ["Glutine", "Latte"],
    immagine: "img/quattroformaggi.jpg"
  },
  cocacola: {
    nome: "Coca Cola",
    prezzo: "3,00 €",
    descrizione: "Bottiglietta da 33 cl, servita fredda.",
    ingredienti: ["Acqua gassata", "Zucchero", "Anidride carbonica", "Aromi"],
    allergeni: ["Nessuno"],
    immagine: "img/cocacola.jpg"
  },
  estathe: {
    nome: "EstaTHE",
    prezzo: "3,00 €",
    descrizione: "Bottiglietta da 33 cl, gusto pesca.",
    ingredienti: ["Acqua", "Zucchero", "Estratto di tè", "Succo di pesca"],
    allergeni: ["Nessuno"],
    immagine: "img/estathe.jpg"
  },
  tiramisu: {
    nome: "Tiramisù",
    prezzo: "3,00 €",
    descrizione: "Il classico dolce italiano: savoiardi imbevuti di caffè, crema al mascarpone e cacao amaro in polvere.",
    ingredienti: ["Savoiardi", "Mascarpone", "Uova", "Caffè", "Zucchero", "Cacao amaro"],
    allergeni: ["Glutine", "Latte", "Uova"],
    immagine: "img/tiramisu.jpg"
  }
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
  window.scrollTo(0, 0);
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





const titoliSottosezione = document.querySelectorAll(".titolo-sottosezione");

// Funzione unica di filtro: nasconde/mostra piatti E titoli di sezione
function filtraCategoria(categoria) {
  titoloCategoria.textContent = nomiCategorie[categoria];

  piatti.forEach(piatto => {
    piatto.style.display = (categoria === "tutte" || piatto.dataset.categoria === categoria) ? "flex" : "none";
  });

  // I titoli di sezione (es. "SFIZIOSERIE") servono solo per orientarsi
  // nella vista Menù Completo; se filtri una singola categoria, il titolo
  // grande in alto la indica già, quindi qui li nascondiamo sempre
  titoliSottosezione.forEach(titolo => {
    titolo.style.display = (categoria === "tutte") ? "block" : "none";
  });
}

// Click sulle voci del sottomenù (categorie di piatti)
document.querySelectorAll('.sottomenu .link-nav').forEach(link => {
  link.addEventListener("click", (e) => {
    e.preventDefault();

    document.querySelectorAll("#sidebar a").forEach(l => l.classList.remove("attivo"));
    link.classList.add("attivo");
    toggleMenu.classList.add("attivo");

    mostraSezione("menu");
    filtraCategoria(link.dataset.categoria);

    chiudiMenu();
  });
});

// Click sui titoli di sezione dentro il Menù Completo (es. "SFIZIOSERIE")
titoliSottosezione.forEach(titolo => {
  titolo.addEventListener("click", () => {
    filtraCategoria(titolo.dataset.categoria);
  });
});






// ===== APERTURA PAGINA DI DETTAGLIO =====
const detNome = document.getElementById("dett-nome");
const detPrezzo = document.getElementById("dett-prezzo");
const detDescrizione = document.getElementById("dett-descrizione");
const detIngredienti = document.getElementById("dett-ingredienti");
const detAllergeni = document.getElementById("dett-allergeni");
const btnIndietro = document.getElementById("btn-indietro");
const detImmagine = document.getElementById("dett-immagine");

piatti.forEach(piatto => {
  piatto.addEventListener("click", () => {
    const id = piatto.dataset.id;
    const info = datiPiatti[id];

    if (!info) return; // sicurezza, nel caso manchi un id nei dati

    detNome.textContent = info.nome;
    detImmagine.src = info.immagine;
    detImmagine.alt = info.nome;
    detPrezzo.textContent = info.prezzo;
    detDescrizione.textContent = info.descrizione;

    detIngredienti.innerHTML = "";
    info.ingredienti.forEach(ing => {
      const li = document.createElement("li");
      li.textContent = ing;
      detIngredienti.appendChild(li);
    });

    detAllergeni.innerHTML = "";
    info.allergeni.forEach(all => {
      const li = document.createElement("li");
      li.textContent = all;
      detAllergeni.appendChild(li);
    });

    mostraSezione("dettaglio");
  });
});





// Bottone "Torna al menù"
btnIndietro.addEventListener("click", () => {
  mostraSezione("menu");
});




// ===== BOTTONE "VAI AL MENÙ" NELLA HOME =====
// Apre la sidebar direttamente con il sottomenù delle categorie già visibile
const btnVaiMenu = document.getElementById("btn-vai-menu");

btnVaiMenu.addEventListener("click", () => {
  apriMenu();
  sottomenu.classList.remove("nascosto");
  voceEspandibile.classList.add("aperta");
});

// ===== SCHEDE CLICCABILI NELLA HOME (mini-vetrina sotto la copertina) =====
document.querySelectorAll(".scheda-sezione").forEach(scheda => {
  scheda.addEventListener("click", () => {
    const target = scheda.dataset.target;

    // Se la scheda cliccata è "Scopri il Menù", apre il sottomenù invece di
    // andare al menù completo mischiato
    if (target === "menu") {
      apriMenu();
      sottomenu.classList.remove("nascosto");
      voceEspandibile.classList.add("aperta");
      return;
    }

    document.querySelectorAll("#sidebar a").forEach(l => l.classList.remove("attivo"));
    const linkCorrispondente = document.querySelector(`.link-nav[data-target="${target}"]`);
    if (linkCorrispondente) linkCorrispondente.classList.add("attivo");

    mostraSezione(target);
  });
});