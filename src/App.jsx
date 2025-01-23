import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "../components/Layout";
import Home from "../pages/home/Home";
import About from "../pages/about/About";
import VansCategory from "../pages/vans/VansCategory";
import VanDetail from "../pages/vans/VanDetail";
import Dashboard from "../pages/host/Dashboard";
import ListedVans from "../pages/host/ListedVans";
import Reviews from "../pages/host/Reviews";
import Income from "../pages/host/Income";
import HostLayout from "../components/HostLayout";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/vans" element={<VansCategory />} />
            <Route path="/vans/:id" element={<VanDetail />} />
            <Route path="/host" element={<HostLayout />}>
              <Route index element={<Dashboard />} />
              <Route path="/host/income" element={<Income />} />
              <Route path="/host/vans" element={<ListedVans />} />
              <Route path="/host/reviews" element={<Reviews />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
