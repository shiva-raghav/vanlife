import { Routes, Route } from "react-router-dom";
import Home from "../../pages/home/Home";
import About from "../../pages/about/About";
import VansCategory from "../../pages/vans/VansCategory";
import VanDetail from "../../pages/vans/VanDetail";

export default function Main({ children }) {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/vans/category" element={<VansCategory />} />
      <Route path="/vans/:id" element={<VanDetail />} />
    </Routes>
  );
}
