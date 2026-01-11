import { NavLink } from "react-router";
export function Velkommen() {
  return (
    <div>
      <p>Welcome to Jørund!</p>
      <NavLink to="/innhold">Go to Innhold</NavLink>
    </div>
  );
}
