// ===== ARTIKKELDATA =====
// Legg til flere artikler ved å kopiere et objekt inni riktig liste.
// "oversettelse" og "sammendrag" er tekst DU skriver selv - ikke automatisk generert.

const artikkelData = {
  day2day: {
    tittel: "Day2Day",
    artikler: [
      {
        id: "d2d-1",
        tittel: "Eksempelartikkel: Daglig rutine",
        innhold: "Dette er en eksempelartikkel under Day2Day. Erstatt denne teksten med ditt eget innhold når du redigerer artikkelData i app.js.",
        oversettelse: "Skriv inn oversettelsen av artikkelen her.",
        sammendrag: "Skriv inn et kort sammendrag av artikkelen her."
      }
    ]
  },
  brufaser: {
    tittel: "Brufaser",
    artikler: [
      {
        id: "bru-1",
        tittel: "Eksempelartikkel: Om brufaser",
        innhold: "Dette er en eksempelartikkel under Brufaser. Erstatt denne teksten med ditt eget innhold.",
        oversettelse: "Skriv inn oversettelsen av artikkelen her.",
        sammendrag: "Skriv inn et kort sammendrag av artikkelen her."
      }
    ]
  },
  referanser: {
    tittel: "Referanser",
    artikler: [
      {
        id: "ref-1",
        tittel: "Eksempelartikkel: Referansemateriale",
        innhold: "Dette er en eksempelartikkel under Referanser. Erstatt denne teksten med ditt eget innhold.",
        oversettelse: "Skriv inn oversettelsen av artikkelen her.",
        sammendrag: "Skriv inn et kort sammendrag av artikkelen her."
      }
    ]
  },
  laering: {
    tittel: "Kunnskap om læring",
    artikler: [
      {
        id: "laer-1",
        tittel: "Eksempelartikkel: Hvordan vi lærer",
        innhold: "Dette er en eksempelartikkel under Kunnskap om læring. Erstatt denne teksten med ditt eget innhold.",
        oversettelse: "Skriv inn oversettelsen av artikkelen her.",
        sammendrag: "Skriv inn et kort sammendrag av artikkelen her."
      }
    ]
  }
};

// ===== DASHBOARD-NAVIGASJON =====

const omraderSeksjon = document.getElementById("omrader");
const artikkelVisning = document.getElementById("artikkelVisning");
const artikkelOmradeTittel = document.getElementById("artikkelOmradeTittel");
const artikkelListe = document.getElementById("artikkelListe");
const tilbakeKnapp = document.getElementById("tilbakeKnapp");

document.querySelectorAll(".omrade-kort").forEach(function (kort) {
  kort.addEventListener("click", function () {
    const omradeId = kort.getAttribute("data-omrade");
    visArtikler(omradeId);
  });
});

tilbakeKnapp.addEventListener("click", function () {
  artikkelVisning.style.display = "none";
  omraderSeksjon.style.display = "grid";
});

function visArtikler(omradeId) {
  const omrade = artikkelData[omradeId];
  if (!omrade) return;

  artikkelOmradeTittel.textContent = omrade.tittel;
  artikkelListe.innerHTML = "";

  omrade.artikler.forEach(function (artikkel) {
    const kort = document.createElement("div");
    kort.className = "artikkel-kort";
    kort.innerHTML =
      "<h3>" + artikkel.tittel + "</h3>" +
      "<p class='artikkel-tekst'>" + artikkel.innhold + "</p>" +
      "<div class='artikkel-knapper'>" +
        "<button class='artikkel-knapp' data-type='oversettelse' data-id='" + artikkel.id + "'>Oversett</button>" +
        "<button class='artikkel-knapp' data-type='sammendrag' data-id='" + artikkel.id + "'>Sammendrag</button>" +
      "</div>" +
      "<div class='artikkel-ekstra' id='ekstra-oversettelse-" + artikkel.id + "'>" + artikkel.oversettelse + "</div>" +
      "<div class='artikkel-ekstra' id='ekstra-sammendrag-" + artikkel.id + "'>" + artikkel.sammendrag + "</div>";
    artikkelListe.appendChild(kort);
  });

  // Legg på klikk-lyttere for de nye knappene
  artikkelListe.querySelectorAll(".artikkel-knapp").forEach(function (knapp) {
    knapp.addEventListener("click", function () {
      const type = knapp.getAttribute("data-type");
      const id = knapp.getAttribute("data-id");
      const boks = document.getElementById("ekstra-" + type + "-" + id);
      boks.style.display = (boks.style.display === "block") ? "none" : "block";
    });
  });

  omraderSeksjon.style.display = "none";
  artikkelVisning.style.display = "block";
}

// ===== CHATBOT (plassholder - fylles ut i neste steg) =====

document.getElementById("sendKnapp").addEventListener("click", function () {
  const input = document.getElementById("chatInput");
  if (!input.value.trim()) return;
  const chatVindu = document.getElementById("chatVindu");
  chatVindu.innerHTML += "<div class='melding melding-bruker'>" + input.value + "</div>";
  chatVindu.innerHTML += "<div class='melding melding-bot'>Chatboten er ikke koblet til enda - det gjør vi i neste steg.</div>";
  input.value = "";
  chatVindu.scrollTop = chatVindu.scrollHeight;
});
