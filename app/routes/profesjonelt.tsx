import RenderInnhold from "~/Innhold/renderInnhold";
import innholdsText from "~/content/text/innholdsText";
import uganda from "~/content/media/uganda.jpeg";

export default function Personlig() {
  return (
    <>
      <RenderInnhold
        innholdsText={innholdsText.hvemErJegProfesjonelt}
        illustrationSrc={uganda}
      />
    </>
  );
}
