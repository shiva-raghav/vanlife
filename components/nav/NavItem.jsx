import { NavLink } from "react-router-dom";
export default function NavItem({ end, path, children }) {
  return (
    <>
      <li>
        <NavLink
          to={path}
          className={({ isActive }) => (isActive ? "active-link" : null)}
          end={end ? true : false}
        >
          {children}
        </NavLink>
      </li>
    </>
  );
}
