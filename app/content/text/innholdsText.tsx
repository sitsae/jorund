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
      "Fortelling Uganda, lærdom å hjelpe nokon som har det vanskelig eller har opplevd noko traumastiks tar lang tid og tett oppfølging",
      "Jobben i Uganda fyste gong eg hadde ein meiningsfull jobb, gjorde at eg ville jobbe med mennesker.",
      "Mennesker som har litt ekstra behov, har eg alltidhatt lyst til å jobb med. Det gjer meg stor motivasjon og glede når egklarer å bygge ein relasjon til sånne mennesker.",
      "Viktig å skape sit eget bilde av kven du bygger ein relasjon med.",
      "Eg har veldig tru på mennesker og meiner at med rett hjelp til rett tid og ikkje minst møte rett person, kan ein oppnå det ein ønsker.",
      "Erfaring med å bygge relasjoner med mennesker i alle aldere bhg - 67 år ( mann i nav).",
      "Eg veldig tru på å samarbeide og kommuniserer på tvers av sektorer",
    ],
  },
  bidragIStillingen: {
    heading: "Hva kan jeg bidra med i stillingen?",
    paragraph: [
      "Min erfaring fra nav og bhg er veldig relevant. Veit korleis dei jobbar og kva lover dei må forholde seg til",
      "God til å bygge relasjon og tilitt tidleg",
      "Fokus på samarbeid på tvers og ikkje redd for å stille spørsmål eller krav til samarbeidapartnere",
      "Stor arbeidskapasitet og liker godt å jobbe i team",
      "Er positiv og liker å ha det gøy på jobb",
      "Liker ein variert og hektisk kvardag og får motivasjon av å kunne hjelpe andre mennesker",
    ],
  },
  motivasjonForStiftelsen: {
    heading: "Min motivasjon for stillingen",
    paragraph: [
      "Ein unik arbeidsplass der ein jobber tett med mennesker, kan vere med å gjere ein forskjell",
      "At dykk forventer RESPEKT, BETYDNINGSFULL, MODIG, VENNLIG og LEKEN. ",
      "Meiningsfylt arbeid",
      "Varierte oppgaver",
      "Kun høyre positive ting om arbeidsplassen",
    ],
  },
};

export default innholdsText;
