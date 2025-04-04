// import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import Footer from "./component/Footer/Footer.jsx";
import Header from "./component/Header/Header.jsx";
import Home from "./component/Home/Home.jsx";
// import HeaderEmployes from "./pages/Employers/HeaderEmployes.jsx";

function Layout() {
  const location = useLocation();

  return (
    <div className="">
      <Header></Header>
      <main>
        <Outlet></Outlet>
        {location.pathname === "/" && <Home></Home>}
      </main>
      <Footer></Footer>
    </div>
  );
}

export default Layout;
