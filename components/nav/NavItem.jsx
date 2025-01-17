import { Link } from "react-router-dom";
export default function NavItem({ path, children }) {
  return (
    <>
      <li>
        <Link to={path}>{children}</Link>
      </li>
    </>
  );
}
