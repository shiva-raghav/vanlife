import { Routes, Route } from "react-router-dom";
import Home from "../home/Home";
import About from "../about/About";
import Vans from "../vans/Vans";

export default function Main({ children }) {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/vans" element={<Vans />} />
    </Routes>
  );
}
