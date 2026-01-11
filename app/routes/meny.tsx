import { NavLink } from "react-router";
import menyText from "../content/text/menyText";

export default function Meny() {
  return (
    <main>
      <h1>{menyText.heading}</h1>
      <p>{menyText.paragraph}</p>
      <nav>
        <ul>
          <li>
            <NavLink to="/innhold/om">Om</NavLink>
          </li>
          <li>
            <NavLink to="/innhold/kontakt">Kontakt</NavLink>
          </li>
          <li>
            <NavLink to="/innhold/erfaring">Erfaring</NavLink>
          </li>
          <li>
            <NavLink to="/innhold/utdanning">Utdanning</NavLink>
          </li>
        </ul>
      </nav>
    </main>
  );
}
