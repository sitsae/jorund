import { NavLink } from "react-router";

export default function Meny() {
  return (
    <main className="container mx-auto max-w-2xl px-4 py-12">
      <nav>
        <ul className="space-y-5">
          <li>
            <NavLink
              to="/innhold/personlig"
              className={({ isActive }) =>
                `flex items-center justify-center gap-3 px-6 py-4 rounded-lg text-xl md:text-2xl font-medium text-center transition-colors duration-150 ` +
                (isActive ? "text-green-700" : "hover:text-green-700")
              }
            >
              <span>Om meg Personlig</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/innhold/profesjonelt"
              className={({ isActive }) =>
                `flex items-center justify-center gap-3 px-6 py-4 rounded-lg text-xl md:text-2xl font-medium text-center transition-colors duration-150 ` +
                (isActive ? "text-green-700" : "hover:text-green-700")
              }
            >
              <span>Om meg Profesjonelt</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/innhold/bidrag"
              className={({ isActive }) =>
                `flex items-center justify-center gap-3 px-6 py-4 rounded-lg text-xl md:text-2xl font-medium text-center transition-colors duration-150 ` +
                (isActive ? "text-green-700" : "hover:text-green-700")
              }
            >
              <span>Bidrag i stillingen</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/innhold/motivasjon"
              className={({ isActive }) =>
                `flex items-center justify-center gap-3 px-6 py-4 rounded-lg text-xl md:text-2xl font-medium text-center transition-colors duration-150 ` +
                (isActive ? "text-green-700" : "hover:text-green-700")
              }
            >
              <span>Motivasjon</span>
            </NavLink>
          </li>
        </ul>
      </nav>
    </main>
  );
}
