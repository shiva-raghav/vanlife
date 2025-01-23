import { Outlet } from "react-router-dom";

import Header from "./header/Header";
import Footer from "./footer/Footer";

export default function Layout() {
  return (
    <>
      <Header />
      <main>
        <div className="container">
          <Outlet />
        </div>
      </main>
      <Footer />
    </>
  );
}
