import RenderInnhold from "~/Innhold/renderInnhold";
import innholdsText from "~/content/text/innholdsText";
import himalaya from "~/content/media/himalaya.jpeg";

export default function Motivasjon() {
  return (
    <>
      <RenderInnhold
        innholdsText={innholdsText.motivasjonForStiftelsen}
        illustrationSrc={himalaya}
      />
    </>
  );
}
