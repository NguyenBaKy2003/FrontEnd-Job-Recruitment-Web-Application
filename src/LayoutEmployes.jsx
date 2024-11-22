// import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import FooterEm from "./pages/FooterEm.jsx";
import HeaderEm from "./pages/HeaderEm.jsx";
import HomeEm from "./pages/HomeEm.jsx";
// import HeaderEmployes from "./pages/Employers/HeaderEmployes.jsx";

function LayoutEmployes() {
  const location = useLocation();

  return (
    <div className="">
      <HeaderEm></HeaderEm>
      <main>
        <Outlet></Outlet>
        {location.pathname === "/" && <HomeEm />}
      </main>
      <FooterEm></FooterEm>
    </div>
  );
}

export default LayoutEmployes;
