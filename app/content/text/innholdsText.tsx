export interface innholdsTextType {
  heading: string;
  paragraph: string[];
}

interface InnholdsTextMap {
  HvemErJegPersonlig: innholdsTextType;
  hvemErJegProfesjonelt: innholdsTextType;
  bidragIStillingen: innholdsTextType;
  motivasjonForStiftelsen: innholdsTextType;
}

const innholdsText: InnholdsTextMap = {
  HvemErJegPersonlig: {
    heading: "Om meg personlig",
    paragraph: ["Bilder av aktiviteter eg liker, oppussing, jobbe ute?"],
  },
  hvemErJegProfesjonelt: {
    heading: "Hvem er jeg profesjonelt",
    paragraph: [
      "Fortelling fra Uganda",
      "Fyste meiningsfulle jobb",
      "Mennesker med spesielle behov",
      "Skape eit eget bilde",
      "Rett hjelp til rett tid",

      "Samarbeide og kommunikasjon på tvers av sektorer",
    ],
  },
  bidragIStillingen: {
    heading: "Hva kan jeg bidra med i stillingen?",
    paragraph: [
      "Erfaring fra nav, Embo og barnehage",
      "God til å bygge relasjon og tilitt tidleg",
      "Ikkje redd for å stille spørsmål eller krav til samarbeidapartnere",
      "Stor arbeidskapasitet og liker godt å jobbe i team",
      "Er positiv og liker å ha det gøy på jobb",
      "Liker ein variert og hektisk kvardag og får motivasjon av å kunne hjelpe andre mennesker",
    ],
  },
  motivasjonForStiftelsen: {
    heading: "Min motivasjon for stillingen",
    paragraph: [
      "Ein unik arbeidsplass",
      "At dykk forventer RESPEKT, BETYDNINGSFULL, MODIG, VENNLIG og LEKEN. ",
      "Meiningsfylt arbeid",
      "Varierte oppgaver",
      "Kun høyre positive ting om arbeidsplassen",
    ],
  },
};

export default innholdsText;
