import { Link } from "react-router-dom";
import Nav from "../nav/index";
import "./header.css";

export default function Header({ children }) {
  return (
    <>
      <header>
        <div className="logo">
          <Link to="/" title="Home">
            <h1>#VANLIFE</h1>
          </Link>
        </div>
        <Nav>
          <Nav.Item path="/host">Host</Nav.Item>
          <Nav.Item path="/about">About</Nav.Item>
          <Nav.Item path="/vans">Vans</Nav.Item>
        </Nav>
      </header>
    </>
  );
}
