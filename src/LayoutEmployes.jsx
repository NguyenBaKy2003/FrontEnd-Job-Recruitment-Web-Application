// import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import Footer from "./component/Footer/Footer.jsx";
import HeaderEm from "./pages/Employers/HeaderEm.jsx";
import HomeEm from "./pages/Employers/HomeEm.jsx";

// import HeaderEmployes from "./pages/Employers/HeaderEmployes.jsx";

function LayoutEmployes() {
  const location = useLocation();

  return (
    <div className="">
      <HeaderEm></HeaderEm>
      <main>
        <Outlet></Outlet>
        {location.pathname === "/employes" && <HomeEm />}
      </main>
      <Footer></Footer>
    </div>
  );
}

export default LayoutEmployes;
