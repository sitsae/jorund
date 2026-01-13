import RenderInnhold from "~/Innhold/renderInnhold";
import innholdsText from "~/content/text/innholdsText";
import bidrag from "~/content/media/bidrag.jpeg";

export default function Personlig() {
  return (
    <>
      <RenderInnhold
        innholdsText={innholdsText.bidragIStillingen}
        illustrationSrc={bidrag}
      />
    </>
  );
}
