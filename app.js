// ===== PASSORDBESKYTTELSE =====

const passordSkjerm = document.getElementById("passordSkjerm");
const dashbordInnhold = document.getElementById("dashbordInnhold");
const passordFelt = document.getElementById("passordFelt");
const laasOppKnapp = document.getElementById("laasOppKnapp");
const passordFeilmelding = document.getElementById("passordFeilmelding");

if (localStorage.getItem("kunnskapshubUlaast") === "ja") {
  passordSkjerm.style.display = "none";
  dashbordInnhold.style.display = "block";
} else {
  passordSkjerm.style.display = "flex";
  dashbordInnhold.style.display = "none";
}

laasOppKnapp.addEventListener("click", sjekkPassord);
passordFelt.addEventListener("keydown", function (e) {
  if (e.key === "Enter") sjekkPassord();
});

async function sjekkPassord() {
  const passord = passordFelt.value.trim();
  if (!passord) return;

  passordFeilmelding.textContent = "";
  laasOppKnapp.disabled = true;

  try {
    const respons = await fetch("/.netlify/functions/check-password", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ passord: passord })
    });

    const data = await respons.json();

    if (data.ok) {
      localStorage.setItem("kunnskapshubUlaast", "ja");
      passordSkjerm.style.display = "none";
      dashbordInnhold.style.display = "block";
    } else {
      passordFeilmelding.textContent = "Feil passord. Prøv igjen.";
      passordFelt.value = "";
      passordFelt.focus();
    }
  } catch (feil) {
    passordFeilmelding.textContent = "Klarte ikke å kontakte serveren. Sjekk internettforbindelsen og prøv igjen.";
  } finally {
    laasOppKnapp.disabled = false;
  }
}

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
        originalLenke: "artikkel-filer/brufaser-02-original.pdf"
      },
      {
        id: "bru-03",
        tittel: "Barrierer og tilretteleggere i junior-til-senior-overgangen i herrefotball – en scoping review (Tomás et al., 2025)",
        temaer: ["Overgangsbarrierer", "Psykososial belastning", "Organisasjonsstruktur", "Fysiske krav"],
        innhold: "En systematisk kunnskapsoppsummering (scoping review) av 35 internasjonale studier som kartlegger hva som hemmer og hva som fremmer overgangen fra ungdoms- til eliteseniorfotball for gutter/menn.",
        oversettelseLenke: "artikkel-filer/brufaser-03-oversettelse.pdf",
        sammendragLenke: "artikkel-filer/brufaser-03-sammendrag.pdf",
        originalLenke: "https://www.mdpi.com/2075-4663/13/12/440/pdf?version=1764930759"
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
        id: "bru-08",
        tittel: "Overgangen fra akademi til seniornivå i elitefotball: en akademisk og praktisk utredning",
        temaer: ["Overgangstrener", "Akademiklassifisering", "Wyllemans modell", "Sosiokulturelt kultursjokk"],
        innhold: "En grundig syntese av internasjonal forskning og praktisk erfaring om overgangsfasen i elitefotball, som blant annet ser på CIES-tall for klubbutviklede spillere, Wyllemans og Stambulovas teoretiske modeller, og hvorfor rollen som overgangstrener har blitt stadig viktigere.",
        oversettelseLenke: "artikkel-filer/brufaser-08-oversettelse.pdf",
        sammendragLenke: "artikkel-filer/brufaser-08-sammendrag.pdf",
        originalLenke: "artikkel-filer/brufaser-08-original.pdf"
      },
      {
        id: "bru-09",
        tittel: "Prestasjonsmessige og organisatoriske stressorer i junior-til-senior-overgangen i fotball (Rye et al., 2022)",
        temaer: ["Prestasjonsstressorer", "Organisatoriske stressorer", "Dobbeltkarriere", "Norsk fotball"],
        innhold: "En kvalitativ studie av ti norske juniorspillere som kartlegger hvilke konkurranse- og organisatoriske stressfaktorer de opplever i overgangen til seniorfotball, og hvilke tiltak klubber kan sette inn for å redusere dem.",
        oversettelseLenke: "artikkel-filer/brufaser-09-oversettelse.pdf",
        sammendragLenke: "artikkel-filer/brufaser-09-sammendrag.pdf",
        originalLenke: "artikkel-filer/brufaser-09-original.pdf"
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
      },
      {
        id: "bru-13",
        tittel: "Overgangen fra akademi til profesjonell fotball (Øyvind Røynesdal, masteroppgave 2015)",
        temaer: ["Spillerprogresjon", "Førstelagskontekst", "Tilpasningsfaser", "Miljøfaktorer"],
        innhold: "En masteroppgave som viser at sosiokulturell tilpasningsevne og mental robusthet er like avgjørende som fysiske og tekniske ferdigheter når unge spillere skal etablere seg i førstelagsmiljøet.",
        oversettelseLenke: "artikkel-filer/brufaser-13-oversettelse.pdf",
        sammendragLenke: "artikkel-filer/brufaser-13-sammendrag.pdf",
        originalLenke: "https://www.semanticscholar.org/paper/The-transition-from-academy-to-professional-an-of-a-R%C3%B8ynesdal/0e5d545b9851bcd7fc98f900c916d980338a9b56"
      },
      {
        id: "bru-14",
        tittel: "Overgangen fra akademifotball til førstelaget (The Football Scholar)",
        temaer: ["Seniorgarderobe", "Fysisk gap", "Taktisk forståelse", "Mediepress"],
        innhold: "En praktisk gjennomgang av hva som faktisk kreves for å etablere seg permanent på førstelaget – fysisk intensitet, taktisk forståelse, kommunikasjon og håndtering av økt medieoppmerksomhet.",
        oversettelseLenke: "artikkel-filer/brufaser-14-oversettelse.pdf",
        sammendragLenke: "artikkel-filer/brufaser-14-sammendrag.pdf",
        originalLenke: "https://thefootballscholar.com/transition-from-academy-football-to-first-team/"
      },
      {
        id: "bru-16",
        tittel: "Ungdom-til-senior-overgangen i europeisk elitefotball (Carpels et al., 2021)",
        temaer: ["Europeisk toppfotball", "Klubb-utviklede spillere (CTP)", "CIES-data", "Spilletidsstatistikk"],
        innhold: "En stor statistisk analyse av 12 000 spillere i 31 europeiske ligaer, som dokumenterer at klubbutviklede spillere får stadig mindre spilletid – til tross for en påvist sammenheng mellom egenutvikling og sportslig suksess.",
        oversettelseLenke: "artikkel-filer/brufaser-16-oversettelse.pdf",
        sammendragLenke: "artikkel-filer/brufaser-16-sammendrag.pdf",
        originalLenke: "https://eprints.gla.ac.uk/252908/2/252908.pdf"
      },
      {
        id: "bru-17",
        tittel: "'Du blir slått ned, og du reiser deg opp igjen!' – Alan Tonges doktorgradsarbeid om kritiske øyeblikk i fotball (2021)",
        temaer: ["Autoetnografi", "Kritiske øyeblikk (Critical moments)", "Idrettsidentitet", "Eksistensiell idrettspsykologi"],
        innhold: "En dyptgående doktorgradsavhandling som gjennom selvbiografi, intervjuer og en spørreundersøkelse blant 85 tidligere proffspillere avdekker hvor lite støtte spillere opplever ved motgang og karriereslutt i fotball.",
        oversettelseLenke: "artikkel-filer/brufaser-17-oversettelse.pdf",
        sammendragLenke: "artikkel-filer/brufaser-17-sammendrag.pdf",
        originalLenke: "https://researchonline.ljmu.ac.uk/id/eprint/16763/1/2021tongephd.pdf"
      },
      {
        id: "bru-18",
        tittel: "Fra ungdomslag til førstelag: unge profesjonelle fotballspilleres overgangsopplevelser (Morris, Tod & Eubank, 2017)",
        temaer: ["Motivasjon", "Mestringstro", "Stressorer", "Sosial støtte"],
        innhold: "En kvalitativ studie av fem unge engelske fotballspillere, intervjuet både før og etter overgangen til førstelaget, som kartlegger hvordan motivasjon, selvtillit, stressfaktorer og sosial støtte endrer seg gjennom selve overgangsøyeblikket.",
        oversettelseLenke: "artikkel-filer/brufaser-18-oversettelse.pdf",
        sammendragLenke: "artikkel-filer/brufaser-18-sammendrag.pdf",
        originalLenke: "artikkel-filer/brufaser-18-original.pdf"
      },
      {
        id: "bru-19",
        tittel: "Spilleres opplevelse av overgangen fra junior til senior i profesjonell fotball: en longitudinell casestudie (Swainston, Wilson & Jones, 2020)",
        temaer: ["Longitudinell metode", "Kontraktpress", "Utlån og tilpasning", "Mestring og støtte"],
        innhold: "En 40 uker lang studie som fulgte tre unge fotballspillere gjennom ukentlige videodagbøker og intervjuer, fra kontraktspresset i akademiet, via utlån, til selve førstelagsfasen — og som viser hvor avgjørende manglende spilletid er for motivasjon, selvtillit og følelse av tilhørighet.",
        oversettelseLenke: "artikkel-filer/brufaser-19-oversettelse.pdf",
        sammendragLenke: "artikkel-filer/brufaser-19-sammendrag.pdf",
        originalLenke: "artikkel-filer/brufaser-19-original.pdf"
      },
      {
        id: "bru-20",
        tittel: "Niels Lawaetz' Pro-oppgave: Fra transisjon til stabilisering – talenters gjennombrudd i dansk elitefotball",
        temaer: ["Transisjon ungdom–senior", "Spilletid/kampminutter", "Klubbstruktur og støtte", "Forventningsavstemming"],
        innhold: "Niels Lawaetz' Pro-oppgave undersøker hvorfor overgangen fra akademi til stabil seniorspiller ofte er den vanskeligste delen av talentutviklingen. Basert på teori, spilleminutt-data og intervjuer med seks transisjonstrenere fra dansk toppfotball.",
        originalLenke: "https://www.gamechanger.nu/artikler/niels-lawaetz-pro-opgave-fra-transition-til-stabilisering-talenters-gennembrud-i-dansk-elitefodbold",
        oversettelseLenke: "artikkel-filer/bru-20-oversettelse.pdf",
        sammendragLenke: "artikkel-filer/bru-20-sammendrag.pdf"
      },
      {
        id: "bru-21",
        tittel: "ECA-rapport: Transisjonen fra akademi til førstelagsfotball",
        temaer: ["Transisjon ungdom–senior", "Beste praksis og benchmarking", "Transisjonscoaching", "Støttende utviklingsmiljø"],
        innhold: "European Club Association (ECA) og Football Benchmark har kartlagt hvordan unge spillere i europeisk fotball håndterer overgangen fra akademi til seniornivå. Rapporten ser på hvilke ligaer og klubber som lykkes best med debutanter og overganger, og trekker frem trenerkvalitet og individuell transisjonscoaching som nøkkelfaktorer.",
        originalLenke: "https://footballbenchmark.com/w/eca-report-released-transition-from-academy-to-first-team-football",
        oversettelseLenke: "artikkel-filer/bru-21-oversettelse.pdf",
        sammendragLenke: "artikkel-filer/bru-21-sammendrag.pdf"
      },
      {
        id: "bru-22",
        tittel: "Spilleres opplevelse av overgangen fra akademi til førstelag i profesjonell fotball (PhD-avhandling)",
        temaer: ["Transisjon ungdom–senior", "Spilletid og mulighet", "Kontrakter og maktdynamikk", "Organisatoriske prosesser"],
        innhold: "Doktoravhandling av Scott Swainston (University of Exeter) om overgangen fra akademi til førstelag i fotball. Bygger på en kartleggingsstudie av 17 studier og to egne empiriske studier, og introduserer begrepet «den grå perioden» — fasen der en spiller er en del av førstelagsmiljøet uten å få spilletid.",
        originalLenke: "https://ore.exeter.ac.uk/repository/handle/10871/133218",
        oversettelseLenke: "artikkel-filer/bru-22-oversettelse.pdf",
        sammendragLenke: "artikkel-filer/bru-22-sammendrag.pdf"
      },
      {
        id: "bru-23",
        tittel: "CIES Football Observatory: Global analyse av spillerutlån",
        temaer: ["Utlån som utviklingsverktøy", "Spilletid og mulighet", "Klubbers strategi og økonomi", "Statistikk og benchmarking"],
        innhold: "CIES Football Observatory har analysert spillerutlån globalt basert på 1 254 klubber i 75 ligaer. 9,5 % av alle spillere er utlånt, og utlån brukes til mer enn bare talentutvikling — også til å frigjøre plass i troppen, redusere risiko og hente forsterkninger uten overgangssum. De rikeste klubbene dominerer utlånsmarkedet.",
        originalLenke: "https://football-observatory.com/Global-analysis-of-player-loans-3045",
        oversettelseLenke: "artikkel-filer/bru-23-oversettelse.pdf",
        sammendragLenke: "artikkel-filer/bru-23-sammendrag.pdf"
      },
      {
        id: "bru-24",
        tittel: "«Når du forstår miljøet, kan du navigere overgangen bedre»: Å støtte fotballspillere i overgang til utenlandske klubber",
        temaer: ["Transisjonsmiljø (transition environment)", "Sportspsykologisk støtte", "Kulturell tilpasning", "Overgang til utenlandsk klubb"],
        innhold: "Tre sportspsykologer ved University of Southern Denmark beskriver hvordan begrepet «transisjonsmiljø» kan brukes til å støtte fotballspillere som bytter klubb i utlandet — gjennom fasene før overgangen, akutt kulturell tilpasning og sosiokulturell tilpasning.",
        originalLenke: "artikkel-filer/bru-24-original.pdf",
        oversettelseLenke: "artikkel-filer/bru-24-oversettelse.pdf",
        sammendragLenke: "artikkel-filer/bru-24-sammendrag.pdf"
      },
      {
        id: "bru-25",
        tittel: "Vellykket talentutvikling i fotball: Kjennetegn ved miljøet (AGF-studien)",
        temaer: ["Talentutviklingsmiljø (ATDE)", "Organisasjonskultur og familiefølelse", "Barrierer i overgangen til proff", "Helhetlig tilnærming til spillerutvikling"],
        innhold: "Casestudie av U17-miljøet i en dansk fotballklubb (AGF) identifiserer fire kulturelle kjennetegn ved et vellykket talentutviklingsmiljø: sterk familiefølelse, vekt på arbeidskapasitet fremfor rått talent, fokus på spillerutdanning, og en helhetlig tilnærming. Studien peker samtidig på manglende kommunikasjon og struktur mellom ungdoms- og seniorapparatet som en sentral barriere i overgangen til proff.",
        originalLenke: "https://doi.org/10.1037/a0031958",
        oversettelseLenke: "artikkel-filer/bru-25-oversettelse.pdf",
        sammendragLenke: "artikkel-filer/bru-25-sammendrag.pdf"
      },
      {
        id: "bru-26",
        tittel: "Ny nøkkel til talentutvikling",
        temaer: ["Overgang junior–senior", "Mental helse og trivsel", "Talent-transfer mellom idretter", "Dobbel karriere (utdanning og idrett)"],
        innhold: "Bokutdrag av Henriksen, Larsen og Storm om hvordan talentutvikling må ta mental helse og trivsel like alvorlig som prestasjoner. Tar for seg talent-transfer mellom idretter, fordelene ved dobbel karriere (idrett og utdanning), og hvorfor overgangen fra junior til senior er så kritisk og frafallsutsatt.",
        originalLenke: "https://pov.international/ny-nogle-til-talentudvikling/",
        oversettelseLenke: "artikkel-filer/bru-26-oversettelse.pdf",
        sammendragLenke: "artikkel-filer/bru-26-sammendrag.pdf"
      },
      {
        id: "bru-27",
        tittel: "Overgangsopplevelser og foreldrestøtte i et norsk profesjonelt fotballakademi",
        temaer: ["Transisjon ungdom–senior", "Foreldrestøtte", "Overgang inn og ut av akademi", "Realistiske ambisjoner"],
        innhold: "Norsk studie av fem tidligere juniorspillere i et profesjonelt fotballakademi og deres foreldre. Foreldrestøtte fremstår som en tveegget kniv: nødvendig og verdsatt av spillerne, men med risiko for å skape utilsiktet press. Overgangen ut av akademiet oppleves ofte som lettere enn ventet, fordi ambisjonene gradvis justeres ned.",
        originalLenke: "artikkel-filer/bru-27-original.pdf",
        oversettelseLenke: "artikkel-filer/bru-27-oversettelse.pdf",
        sammendragLenke: "artikkel-filer/bru-27-sammendrag.pdf"
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
        id: "lae-01",
        tittel: "Unge talenter er ikke små eliteatleter",
        temaer: ["Tidlig spesialisering", "Talentidentifikasjon og relativ alderseffekt", "Trivsel og langsiktig utvikling", "Konkurransestruktur for unge utøvere"],
        innhold: "Kristoffer Henriksen (Team Danmark/SDU) og Peter Jensen (Team Danmark) advarer mot tidlig spesialisering og prestasjonspress i ungdomsidretten, med utgangspunkt i UEFAs planer om en poenggivende U16-landslagsturnering. Viser til forskning på 6 000+ utøvere: fremtidige seniortoppidrettsutøvere har typisk drevet flere idretter i oppveksten og utviklet seg langsommere som unge enn de mest suksessrike ungdomsutøverne.",
        originalLenke: "https://www.teamdanmark.dk/presse/nyheder/2022/marts/unge-talenter-er-ikke-smaa-eliteatleter",
        oversettelseLenke: "artikkel-filer/lae-01-oversettelse.pdf",
        sammendragLenke: "artikkel-filer/lae-01-sammendrag.pdf"
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

