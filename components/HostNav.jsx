import { NavLink } from "react-router-dom";
import Nav from "./nav/index";
import NavItem from "./nav/NavItem";

export default function HostNav() {
  return (
    <>
      <Nav>
        <Nav.Item path="/host" end="true">
          Dashboard
        </Nav.Item>
        <Nav.Item path="/host/income">Income</Nav.Item>
        <Nav.Item path="/host/vans">Vans</Nav.Item>
        <Nav.Item path="/host/reviews">Reviews</Nav.Item>
      </Nav>
    </>
  );
}
