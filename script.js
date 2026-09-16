const bottoni = document.querySelectorAll(".filtro");
const piatti = document.querySelectorAll(".piatto");

bottoni.forEach(bottone => {
  bottone.addEventListener("click", () => {

    // Toglie "attivo" da tutti i bottoni e lo aggiunge solo a quello cliccato
    bottoni.forEach(b => b.classList.remove("attivo"));
    bottone.classList.add("attivo");

    const categoriaScelta = bottone.dataset.categoria;

    piatti.forEach(piatto => {
      if (categoriaScelta === "tutte" || piatto.dataset.categoria === categoriaScelta) {
        piatto.style.display = "flex";
      } else {
        piatto.style.display = "none";
      }
    });
  });
});