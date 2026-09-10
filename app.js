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
        temaer: ["Tema 1", "Tema 2", "Tema 3", "Tema 4"],
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
        temaer: ["Tema 1", "Tema 2", "Tema 3", "Tema 4"],
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
        temaer: ["Tema 1", "Tema 2", "Tema 3", "Tema 4"],
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
        temaer: ["Tema 1", "Tema 2", "Tema 3", "Tema 4"],
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
    const temaerHtml = (artikkel.temaer || [])
      .map(function (tema) { return "<span class='tema-tag'>" + tema + "</span>"; })
      .join("");
    kort.innerHTML =
      "<h3>" + artikkel.tittel + "</h3>" +
      "<div class='artikkel-temaer'>" + temaerHtml + "</div>" +
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

// ===== RESSURSER =====
// Legg til flere ressurser/maler ved å kopiere et objekt inni listen under.
// "lenke" peker til en fil du har lastet opp i GitHub-repoet (f.eks. "ressurser/mal-referat.pdf").

const ressursData = [
  {
    id: "res-1",
    tittel: "Eksempel: Mal for møtereferat",
    beskrivelse: "Dette er en eksempelressurs. Erstatt med dine egne maler når du redigerer ressursData i app.js.",
    lenke: "#"
  }
];

const ressurserKnapp = document.getElementById("ressurserKnapp");
const ressurserVisning = document.getElementById("ressurserVisning");
const ressursListe = document.getElementById("ressursListe");
const tilbakeFraRessurserKnapp = document.getElementById("tilbakeFraRessurserKnapp");

ressurserKnapp.addEventListener("click", function () {
  visRessurser();
});

tilbakeFraRessurserKnapp.addEventListener("click", function () {
  ressurserVisning.style.display = "none";
  omraderSeksjon.style.display = "grid";
});

function visRessurser() {
  ressursListe.innerHTML = "";

  ressursData.forEach(function (ressurs) {
    const kort = document.createElement("div");
    kort.className = "artikkel-kort";
    kort.innerHTML =
      "<h3>" + ressurs.tittel + "</h3>" +
      "<p class='artikkel-tekst'>" + ressurs.beskrivelse + "</p>" +
      "<div class='artikkel-knapper'>" +
        "<a class='artikkel-knapp' style='text-decoration:none; display:inline-block;' href='" + ressurs.lenke + "' target='_blank' rel='noopener'>Last ned</a>" +
      "</div>";
    ressursListe.appendChild(kort);
  });

  omraderSeksjon.style.display = "none";
  ressurserVisning.style.display = "block";
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

  leggTilMelding(melding, "bruker");
  chatInput.value = "";
  const lasterId = leggTilMelding("Tenker ...", "bot");

  sporMistral(melding, lasterId);
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

async function sporMistral(sporsmal, lasterId) {
  const innhold = samleAltInnhold();

  const systemPrompt =
    "Du er en kunnskapsassistent for Kunnskapshub, et fagprogram for utvikling i fotballklubber. " +
    "Svar kun basert på innholdet under, kort og presist, på norsk. Hvis svaret ikke finnes i innholdet, si det tydelig. " +
    "Etter svaret ditt, skriv nøyaktig linjen ---SPORSMAL--- og deretter 4 korte oppfølgingsspørsmål brukeren kan stille videre, ett per linje, uten nummerering.\n\n" +
    "INNHOLD:" + innhold;

  try {
    const respons = await fetch("/.netlify/functions/mistral-chat", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ systemPrompt: systemPrompt, sporsmal: sporsmal })
    });

    const data = await respons.json();

    if (!respons.ok) {
      oppdaterMelding(lasterId, "Feil fra chatboten (HTTP " + respons.status + "). Prøv igjen om litt.");
      return;
    }

    const fullTekst = data.choices[0].message.content;

    const deler = fullTekst.split(/-*\s*SP[ØO]RSM[ÅA]L\s*-*/i);
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
    oppdaterMelding(lasterId, "Klarte ikke å kontakte chatboten. Sjekk internettforbindelsen og prøv igjen.");
  }
}

function oppdaterMelding(id, nyTekst) {
  const div = document.getElementById(id);
  if (div) div.textContent = nyTekst;
  chatVindu.scrollTop = chatVindu.scrollHeight;
}

