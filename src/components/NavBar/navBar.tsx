import ThemeController from "./themeController";
import { NavLink } from "react-router-dom";

export default function NavBar() {
  return (
    <nav className="bg-base-300 text-2xl bg-opacity-90 sticky top-0 flex justify-between items-center p-2">
      <div className="flex">
        <NavLink
          to="/"
          className={({ isActive, isPending }) =>
            isPending
              ? "nav-buttons"
              : isActive
              ? "nav-buttons btn-active"
              : "nav-buttons"
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/contact-me"
          className={({ isActive, isPending }) =>
            isPending
              ? "nav-buttons"
              : isActive
              ? "nav-buttons btn-active"
              : "nav-buttons"
          }
        >
          Contact Me
        </NavLink>
      </div>
      <ThemeController />
    </nav>
  );
}
