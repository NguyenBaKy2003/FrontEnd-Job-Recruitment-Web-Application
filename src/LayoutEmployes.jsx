import { Outlet, useLocation } from "react-router-dom";
import Footer from "./pages/Employers/FooterEm";
import Header from "./pages/Employers/HeaderEm.jsx";
import Home from "./pages/Employers/HomeEm.jsx";
import Sidebar from "./pages/SliderBar/Sliderbar.jsx"; // Import Sidebar

function LayOut() {
  const location = useLocation();

  return (
    <div className="flex flex-col min-h-screen">
      <Header /> {/* Header */}
      <div className="flex flex-row flex-1">
        <Sidebar /> {/* Sidebar */}
        <div className="flex-1 flex flex-col">
          <main className="flex-1 p-6">
            {location.pathname === "/employes" ? <Home /> : <Outlet />}{" "}
            {/* Main Content */}
          </main>
        </div>
      </div>
      <Footer /> {/* Full-Width Footer */}
    </div>
  );
}

export default LayOut;
