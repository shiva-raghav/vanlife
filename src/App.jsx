import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "../components/Layout";
import Home from "../pages/home/Home";
import About from "../pages/about/About";
import NotFound from "../pages/NotFound";
import VansCategory from "../pages/vans/VansCategory";
import VanDetail from "../pages/vans/VanDetail";
import Host from "../pages/host/index";
import HostLayout from "../components/HostLayout";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="vans" element={<VansCategory />} />
            <Route path="vans/:id" element={<VanDetail />} />

            <Route path="/host" element={<HostLayout />}>
              <Route index element={<Host.Dashboard />} />
              <Route path="income" element={<Host.Income />} />
              <Route path="vans" element={<Host.Vans />} />
              <Route path="vans/:id" element={<Host.Van />} />
              <Route path="reviews" element={<Host.Reviews />} />
            </Route>
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
