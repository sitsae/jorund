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
      "Mennesker med spesielle behov",
      "Rett hjelp til rett tid",
      "Samarbeid og kommunikasjon på tvers av sektorer",
      "Tålmodig",
      "Selvstendig og strukturert",
    ],
  },
  bidragIStillingen: {
    heading: "Hva kan jeg bidra med i stillingen?",
    paragraph: [
      "Relevant erfaring og kompetanse",
      "God til å bygge relasjon og tilitt tidleg",
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
