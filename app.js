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

// ===== INNSTILLINGER (API-nøkkel) =====

const innstillingerKnapp = document.getElementById("innstillingerKnapp");
const innstillingerPanel = document.getElementById("innstillingerPanel");
const apiNokkelInput = document.getElementById("apiNokkelInput");
const lagreNokkelKnapp = document.getElementById("lagreNokkelKnapp");
const slettNokkelKnapp = document.getElementById("slettNokkelKnapp");
const innstillingerStatus = document.getElementById("innstillingerStatus");

innstillingerKnapp.addEventListener("click", function () {
  innstillingerPanel.style.display = (innstillingerPanel.style.display === "block") ? "none" : "block";
});

lagreNokkelKnapp.addEventListener("click", function () {
  const verdi = apiNokkelInput.value.trim();
  if (!verdi) return;
  localStorage.setItem("mistralApiNokkel", verdi);
  apiNokkelInput.value = "";
  innstillingerStatus.textContent = "Nøkkel lagret i denne nettleseren.";
});

slettNokkelKnapp.addEventListener("click", function () {
  if (!localStorage.getItem("mistralApiNokkel")) {
    innstillingerStatus.textContent = "Ingen nøkkel er lagret.";
    return;
  }
  const bekreft = confirm("Er du sikker på at du vil slette den lagrede API-nøkkelen?");
  if (bekreft) {
    localStorage.removeItem("mistralApiNokkel");
    innstillingerStatus.textContent = "Nøkkel slettet.";
  }
});

if (localStorage.getItem("mistralApiNokkel")) {
  innstillingerStatus.textContent = "Nøkkel er lagret.";
}

// ===== SAMLE ALT ARTIKKELINNHOLD (til bruk for chatboten) =====

function samleAltInnhold() {
  let tekst = "";
  for (const omradeId in artikkelData) {
    const omrade = artikkelData[omradeId];
    tekst += "\n\n=== " + omrade.tittel + " ===\n";
    omrade.artikler.forEach(function (artikkel) {
      tekst += "\n" + artikkel.tittel + "\n" + artikkel.innhold + "\n";
    });
  }
  return tekst;
}

// ===== FORESLÅTTE SPØRSMÅL =====

const foreslatteSporsmalDiv = document.getElementById("foreslatteSporsmal");

const standardSporsmal = [
  "Hva handler Day2Day om?",
  "Hva er brufaser?",
  "Hvilke referanser finnes i programmet?",
  "Hva sier vi om læring i programmet?"
];

function visForeslatteSporsmal(listeMedSporsmal) {
  foreslatteSporsmalDiv.innerHTML = "";
  listeMedSporsmal.slice(0, 4).forEach(function (sporsmal) {
    const knapp = document.createElement("button");
    knapp.className = "sporsmal-chip";
    knapp.textContent = sporsmal;
    knapp.addEventListener("click", function () {
      document.getElementById("chatInput").value = sporsmal;
      document.getElementById("chatInput").focus();
    });
    foreslatteSporsmalDiv.appendChild(knapp);
  });
}

visForeslatteSporsmal(standardSporsmal);

// ===== CHATBOT (Mistral API) =====

const chatVindu = document.getElementById("chatVindu");
const chatInput = document.getElementById("chatInput");
const sendKnapp = document.getElementById("sendKnapp");

sendKnapp.addEventListener("click", sendMelding);
chatInput.addEventListener("keydown", function (e) {
  if (e.key === "Enter") sendMelding();
});

function sendMelding() {
  const melding = chatInput.value.trim();
  if (!melding) return;

  const apiNokkel = localStorage.getItem("mistralApiNokkel");
  if (!apiNokkel) {
    leggTilMelding("Du må først lagre en Mistral API-nøkkel under ⚙ API-nøkkel øverst på siden.", "bot");
    return;
  }

  leggTilMelding(melding, "bruker");
  chatInput.value = "";
  const lasterId = leggTilMelding("Tenker ...", "bot");

  sporMistral(melding, apiNokkel, lasterId);
}

function leggTilMelding(tekst, avsender) {
  const div = document.createElement("div");
  div.className = "melding " + (avsender === "bruker" ? "melding-bruker" : "melding-bot");
  div.textContent = tekst;
  const id = "m-" + Date.now() + "-" + Math.floor(Math.random() * 1000);
  div.id = id;
  chatVindu.appendChild(div);
  chatVindu.scrollTop = chatVindu.scrollHeight;
  return id;
}

async function sporMistral(sporsmal, apiNokkel, lasterId) {
  const innhold = samleAltInnhold();

  const systemPrompt =
    "Du er en kunnskapsassistent for Kunnskapshub, et fagprogram for utvikling i fotballklubber. " +
    "Svar kun basert på innholdet under, kort og presist, på norsk. Hvis svaret ikke finnes i innholdet, si det tydelig. " +
    "Etter svaret ditt, skriv nøyaktig linjen ---SPORSMAL--- og deretter 4 korte oppfølgingsspørsmål brukeren kan stille videre, ett per linje, uten nummerering.\n\n" +
    "INNHOLD:" + innhold;

  try {
    const respons = await fetch("https://api.mistral.ai/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": "Bearer " + apiNokkel
      },
      body: JSON.stringify({
        model: "mistral-small-latest",
        messages: [
          { role: "system", content: systemPrompt },
          { role: "user", content: sporsmal }
        ]
      })
    });

    if (!respons.ok) {
      oppdaterMelding(lasterId, "Feil fra Mistral (HTTP " + respons.status + "). Sjekk at API-nøkkelen er riktig.");
      return;
    }

    const data = await respons.json();
    const fullTekst = data.choices[0].message.content;

    const deler = fullTekst.split("---SPORSMAL---");
    const svarTekst = deler[0].trim();
    oppdaterMelding(lasterId, svarTekst);

    if (deler[1]) {
      const nyeSporsmal = deler[1]
        .split("\n")
        .map(function (s) { return s.trim(); })
        .filter(function (s) { return s.length > 0; });
      if (nyeSporsmal.length > 0) {
        visForeslatteSporsmal(nyeSporsmal);
      }
    }
  } catch (feil) {
    oppdaterMelding(lasterId, "Klarte ikke å kontakte Mistral. Sjekk internettforbindelsen og prøv igjen.");
  }
}

function oppdaterMelding(id, nyTekst) {
  const div = document.getElementById(id);
  if (div) div.textContent = nyTekst;
  chatVindu.scrollTop = chatVindu.scrollHeight;
}

