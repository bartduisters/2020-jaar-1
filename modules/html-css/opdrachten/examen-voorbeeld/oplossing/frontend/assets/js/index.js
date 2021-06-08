/* backend - dit mag je negeren */
const BACKEND_URL = "http://localhost:3000/taken";

async function getTaken() {
  const result = await fetch(BACKEND_URL);
  const taken = await result.json();
  return taken;
}

async function updateTaak(id, isKlaar) {
  await fetch(`${BACKEND_URL}/${id}/`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ isKlaar: !isKlaar }),
  });
}

async function postTaak(inhoud, isKlaar) {
  await fetch(BACKEND_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ naam: inhoud, isKlaar: isKlaar }),
  });
}

async function deleteTaak(id) {
  await fetch(`${BACKEND_URL}/${id}/`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  });
}
/* /backend */

function maakTaakElement(taak) {
  const taakElContainer = document.createElement("li");
  taakElContainer.classList.add("flex-container");

  const taakEl = maakTaakLi(taak);
  const verwijderKnopEl = maakTaakVerwijderKnop(taak.id);

  taakElContainer.appendChild(taakEl);
  taakElContainer.appendChild(verwijderKnopEl);

  return taakElContainer;
}

function maakTaakLi(taak) {
  const taakEl = document.createElement("div");
  // Voeg hier de class toe op het LI element
  taakEl.classList.add("list-group-item");
  taakEl.setAttribute("data-taakId", taak.id);
  taakEl.style.flex = "1 1 auto";

  if (taak.isKlaar) {
    // voeg code toe die de class 'klaar' toevoegd aan de classList
    taakEl.classList.add("klaar");
  } else {
    // voeg code toe die de class 'klaar' verwijderd uit de classList
    taakEl.classList.remove("klaar");
  }

  taakEl.innerHTML = taak.naam;
  taakEl.addEventListener("click", toggleTaak);

  return taakEl;
}

function maakTaakVerwijderKnop(id) {
  const verwijderKnopEl = document.createElement("button");
  verwijderKnopEl.setAttribute("data-taakId", id);
  verwijderKnopEl.innerText = "X";
  verwijderKnopEl.classList.add("btn");
  // Gebruik Bootstrap om een class toe te voegen die zorgt dat de knop Rood ziet: https://getbootstrap.com/docs/5.0/components/buttons/
  verwijderKnopEl.classList.add("btn-danger");
  verwijderKnopEl.type = "button";
  verwijderKnopEl.addEventListener("click", verwijderTaak);
  return verwijderKnopEl;
}

async function toggleTaak() {
  const taakId = this.attributes["data-taakId"].value;
  const isKLaar = this.classList.contains("klaar");
  await updateTaak(taakId, isKLaar);
  await takenLaden();
}

async function verwijderTaak() {
  const taakId = this.attributes["data-taakId"].value;
  await deleteTaak(taakId);
  await takenLaden();
}

async function takenLaden() {
  const taken = await getTaken();
  const takenEl = document.querySelector("#taken");
  takenEl.innerHTML = "";

  // itereer over de array 'taken' en zorg dat er voor elk element de functie maakTaakElement aangeroepen wordt
  taken.forEach((taak) => {
    takenEl.appendChild(maakTaakElement(taak));
  });
}

async function taakToevoegen() {
  const taak = document.querySelector("#naam").value;
  await postTaak(taak, false);
  await takenLaden();
}

takenLaden();
