import ny from "../content/media/ombilder/NY.jpeg";
import bal from "../content/media/ombilder/bål.jpeg";
import bryllup from "../content/media/ombilder/bryllup.jpeg";
import buldre from "../content/media/ombilder/buldre.jpeg";
import dykke from "../content/media/ombilder/dykke.jpeg";
import elefant from "../content/media/ombilder/elefant.jpeg";
import everest from "../content/media/ombilder/everest.jpeg";
import finn from "../content/media/ombilder/finn.jpeg";
import freedom from "../content/media/ombilder/freedom.jpeg";
import gorilla from "../content/media/ombilder/gorilla.jpeg";
import hest from "../content/media/ombilder/hest.jpeg";
import husetinepal2 from "../content/media/ombilder/husetinepal 2.jpeg";
import hvithai from "../content/media/ombilder/hvithai.jpeg";
import jungel from "../content/media/ombilder/jungel.jpeg";
import kamel from "../content/media/ombilder/kamel.jpeg";
import klatre from "../content/media/ombilder/klatre.jpeg";
import krabbe from "../content/media/ombilder/krabbe.jpeg";
import mat from "../content/media/ombilder/mat.jpeg";
import rype from "../content/media/ombilder/rype.jpeg";
import tajmahal from "../content/media/ombilder/tajmahal.jpeg";
import telt from "../content/media/ombilder/telt.jpeg";
import tur from "../content/media/ombilder/tur.jpeg";
import turmat from "../content/media/ombilder/turmat.jpeg";
import { useMemo } from "react";

export default function Personlig() {
  const images = useMemo(
    () => [
      ny,
      bal,
      bryllup,
      buldre,
      dykke,
      elefant,
      everest,
      finn,
      freedom,
      gorilla,
      hest,
      husetinepal2,
      hvithai,
      jungel,
      kamel,
      klatre,
      krabbe,
      mat,
      rype,
      tajmahal,
      telt,
      tur,
      turmat,
    ],
    []
  );

  const items = useMemo(
    () =>
      images
        .map((src) => ({
          src,
          r: Math.random() * 12 - 6,
          tx: Math.random() * 6 - 3,
          ty: Math.random() * 6 - 3,
        }))
        .sort(() => Math.random() - 0.5),
    [images]
  );

  return (
    <main className="container mx-auto px-4 py-10">
      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-4 gap-3">
        {items.map((it, idx) => (
          <img
            key={idx}
            src={it.src}
            alt=""
            className="w-16 h-16 md:w-80 md:h-80 object-cover rounded-md opacity-90 motion-safe:opacity-0 motion-safe:animate-[fadeIn_400ms_ease_forwards]"
            style={{
              transform: `translate(${it.tx}px, ${it.ty}px) rotate(${it.r}deg)`,
              animationDelay: `${1000 + idx * 120}ms`,
            }}
          />
        ))}
      </div>
    </main>
  );
}
