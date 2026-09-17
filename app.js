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
        oversettelseLenke: "#",
        sammendragLenke: "#",
        originalLenke: "#"
      }
    ]
  },
  brufaser: {
    tittel: "Brufaser",
    artikler: [
      {
        id: "bru-1",
        tittel: "5 grunner til at de fleste akademispillere mislykkes i å nå førstelaget",
        temaer: ["Akademifrafall", "Førstelagsintegrering", "Spillerutvikling", "Prestasjonskultur"],
        innhold: "Artikkelen ser på hvorfor så få akademispillere klarer å etablere seg på førstelaget, og peker på fire sentrale hindre: det fysiske og mentale gapet til seniorfotball, hard konkurranse om plasser, og betydningen av utlån og et godt støtteapparat for å lykkes med overgangen.",
        oversettelseLenke: "artikkel-filer/brufaser-01-oversettelse.pdf",
        sammendragLenke: "artikkel-filer/brufaser-01-sammendrag.pdf",
        originalLenke: "https://4pballer.com/5-reasons-why-most-academy-players-fail-to-make-the-first-team/"
      },
      {
        id: "bru-02",
        tittel: "En metastudie av kvalitativ forskning på junior-til-senior-overgangen i idrett (Drew et al., 2019)",
        temaer: ["Forskningssyntese", "Individuelle faktorer", "Kulturell tilpasning", "Karriereoverganger"],
        innhold: "En omfattende metastudie som samler funn fra 27 kvalitative studier og 261 informanter for å kartlegge hvordan overgangen fra junior til senior i idrett faktisk fungerer, og hvilke faktorer som avgjør om den lykkes.",
        oversettelseLenke: "artikkel-filer/brufaser-02-oversettelse.pdf",
        sammendragLenke: "artikkel-filer/brufaser-02-sammendrag.pdf",
        originalLenke: "https://doi.org/10.1016/j.psychsport.2019.101556"
      },
      {
        id: "bru-03",
        tittel: "Barrierer og tilretteleggere i junior-til-senior-overgangen i herrefotball – en scoping review (Tomás et al., 2025)",
        temaer: ["Overgangsbarrierer", "Psykososial belastning", "Organisasjonsstruktur", "Fysiske krav"],
        innhold: "En systematisk kunnskapsoppsummering (scoping review) av 35 internasjonale studier som kartlegger hva som hemmer og hva som fremmer overgangen fra ungdoms- til eliteseniorfotball for gutter/menn.",
        oversettelseLenke: "artikkel-filer/brufaser-03-oversettelse.pdf",
        sammendragLenke: "artikkel-filer/brufaser-03-sammendrag.pdf",
        originalLenke: "https://www.mdpi.com/2075-4663/13/12/440"
      },
      {
        id: "bru-06",
        tittel: "Overgangen fra ungdom til senior i idrett: fra teori til praksis (Robert Morris, PhD-avhandling 2013)",
        temaer: ["Praksisnær teori", "Støtteapparat", "Spillerperspektiv", "Karriereoverganger"],
        innhold: "En doktoravhandling som gjennom fire delstudier undersøker overgangsfasen fra ungdom til senior i elitefotball, sett fra både spilleres og støtteapparatets perspektiv.",
        oversettelseLenke: "artikkel-filer/brufaser-06-oversettelse.pdf",
        sammendragLenke: "artikkel-filer/brufaser-06-sammendrag.pdf",
        originalLenke: "https://research.aber.ac.uk/en/studentTheses/investigating-the-youth-to-senior-transition-in-sport/"
      },
      {
        id: "bru-07",
        tittel: "Jo Potters trenerteam i Crystal Palace Women bekreftet foran sesongen 2026/27",
        temaer: ["Kvinneeliteserie (WSL)", "Overgangstrener", "Støtteapparat", "Kulturell integrasjon"],
        innhold: "Crystal Palace Women har institusjonalisert rollen som overgangstrener på kvinnesiden, ved å utnevne en tidligere lagkaptein til å kombinere støtte til A-laget med ansvar for å integrere unge akademispillere i seniormiljøet.",
        oversettelseLenke: "artikkel-filer/brufaser-07-oversettelse.pdf",
        sammendragLenke: "artikkel-filer/brufaser-07-sammendrag.pdf",
        originalLenke: "https://www.cpfc.co.uk/news/announcement/jo-potters-coaching-staff-confirmed/"
      },
      {
        id: "bru-08",
        tittel: "Overgangen fra akademi til seniornivå i elitefotball: en akademisk og praktisk utredning",
        temaer: ["Overgangstrener", "Akademiklassifisering", "Wyllemans modell", "Sosiokulturelt kultursjokk"],
        innhold: "En grundig syntese av internasjonal forskning og praktisk erfaring om overgangsfasen i elitefotball, som blant annet ser på CIES-tall for klubbutviklede spillere, Wyllemans og Stambulovas teoretiske modeller, og hvorfor rollen som overgangstrener har blitt stadig viktigere.",
        oversettelseLenke: "artikkel-filer/brufaser-08-oversettelse.pdf",
        sammendragLenke: "artikkel-filer/brufaser-08-sammendrag.pdf",
        originalLenke: "#"
      },
      {
        id: "bru-09",
        tittel: "Prestasjonsmessige og organisatoriske stressorer i junior-til-senior-overgangen i fotball (Rye et al., 2022)",
        temaer: ["Prestasjonsstressorer", "Organisatoriske stressorer", "Dobbeltkarriere", "Norsk fotball"],
        innhold: "En kvalitativ studie av ti norske juniorspillere som kartlegger hvilke konkurranse- og organisatoriske stressfaktorer de opplever i overgangen til seniorfotball, og hvilke tiltak klubber kan sette inn for å redusere dem.",
        oversettelseLenke: "artikkel-filer/brufaser-09-oversettelse.pdf",
        sammendragLenke: "artikkel-filer/brufaser-09-sammendrag.pdf",
        originalLenke: "https://doi.org/10.36950/2022ciss003"
      },
      {
        id: "bru-10",
        tittel: "Sjokkerende mangel på spilletid for unge skotter avdekket i SFA-rapport",
        temaer: ["Skotsk fotball (SFA)", "Spilletid for unge", "Den gylne alder (16-18)", "Spillerhandel"],
        innhold: "En SFA-bestilt rapport avdekker at unge skotske talenter i svært liten grad får spilletid på seniornivå sammenlignet med resten av Europa, og foreslår mer fleksible utlånsordninger som løsning.",
        oversettelseLenke: "artikkel-filer/brufaser-10-oversettelse.pdf",
        sammendragLenke: "artikkel-filer/brufaser-10-sammendrag.pdf",
        originalLenke: "https://www.heraldscotland.com/sport/24531309.shocking-lack-minutes-young-scots-laid-bare-report/"
      },
      {
        id: "bru-11",
        tittel: "Strategiske endringer i Aberdeen FC sin utviklingsvei for ungdom",
        temaer: ["Aberdeen FC", "Utviklingsvei", "Utlånsstrategi", "Overgangstrener"],
        innhold: "Aberdeen FC legger om sin modell for spillerutvikling, med tidligere seniorutlån, daglig A-lagstrening for utvalgte talenter og en ny dedikert overgangstrener som skal bygge bro mellom akademiet og A-laget.",
        oversettelseLenke: "artikkel-filer/brufaser-11-oversettelse.pdf",
        sammendragLenke: "artikkel-filer/brufaser-11-sammendrag.pdf",
        originalLenke: "https://www.afc.co.uk/en/news/strategic-changes-to-aberdeen-fcs-youth-pathway"
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
        oversettelseLenke: "#",
        sammendragLenke: "#",
        originalLenke: "#"
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
        oversettelseLenke: "#",
        sammendragLenke: "#",
        originalLenke: "#"
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
        "<a class='artikkel-knapp' href='" + artikkel.oversettelseLenke + "' target='_blank' rel='noopener'>Oversett</a>" +
        "<a class='artikkel-knapp' href='" + artikkel.sammendragLenke + "' target='_blank' rel='noopener'>Sammendrag</a>" +
        "<a class='artikkel-knapp' href='" + artikkel.originalLenke + "' target='_blank' rel='noopener'>Original</a>" +
      "</div>";
    artikkelListe.appendChild(kort);
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

// ===== TØM SPØRSMÅLSLISTE =====

const tomSporsmalKnapp = document.getElementById("tomSporsmalKnapp");
const chatVindu = document.getElementById("chatVindu");

tomSporsmalKnapp.addEventListener("click", function () {
  chatVindu.innerHTML = "";
  visForeslatteSporsmal(standardSporsmal);
});

// ===== CHATBOT (Mistral API) =====

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

