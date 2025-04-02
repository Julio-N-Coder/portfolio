import ThemeController from "./themeController";
import { NavLink } from "react-router";

export default function NavBar() {
  return (
    <nav className="bg-base-300 text-2xl bg-opacity-90 sticky top-0 flex justify-between items-center p-2">
      <div className="flex">
        <div className="dropdown dropdown-bottom">
          <div tabIndex={0} role="button">
            <button className="btn btn-square btn-ghost xsm:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block h-8 w-8 stroke-current"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </button>
          </div>
          <ul
            tabIndex={0}
            className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm"
          >
            <li>
              <NavLink
                to="/"
                className={({ isActive, isPending }) =>
                  isPending ? "" : isActive ? "btn-active" : ""
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact-me"
                className={({ isActive, isPending }) =>
                  isPending ? "" : isActive ? "btn-active" : ""
                }
              >
                Contact Me
              </NavLink>
            </li>
          </ul>
        </div>
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
