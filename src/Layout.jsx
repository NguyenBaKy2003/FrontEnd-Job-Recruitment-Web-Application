// import React from "react";
import Header from "./component/Header/Header.jsx";
import Footer from "./component/Footer/Footer.jsx";
import { Outlet, useLocation } from "react-router-dom";
import Home from "./component/Home/Home.jsx";

function Layout() {
  const location = useLocation();

  return (
    <div>
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
