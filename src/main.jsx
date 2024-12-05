import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./component/Home/Home";
import "./index.css"; // Import Tailwind CSS here
import Layout from "./Layout";

import About from "./component/About/About";
import Company from "./component/Company/CompanyAll";
import CompanyDetail from "./component/Company/CompanyDetail";
import Contact from "./component/Contact/Contact";
import FindJob from "./component/FindJob/Findjob";
import JobDetail from "./component/FindJob/JobDetail";
import Login from "./component/Login/Login";
import SignUp from "./component/SignUp/SignUp";
import Support from "./component/Support/Support";
import LayoutEmployes from "./LayoutEmployes";
import LoginEm from "./pages/LoginEm/LoginEm";
import SignupEm from "./pages/SignUpEm/SignUpEm";
import Payment from "./pages/Payment/Payment";
import ApplyNow from "./component/FindJob/ApplyNow";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="home" element={<Home />}></Route>
          <Route path="/findjob" element={<FindJob />}></Route>
          <Route path="/findjob/:jobId" element={<JobDetail />}></Route>
          <Route path="/findjob/:jobId/apply" element={<ApplyNow />}></Route>

          <Route path="/contact" element={<Contact />}></Route>

          <Route path="/company" element={<Company />}></Route>
          <Route path="/company/:companyId" element={<CompanyDetail />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/support" element={<Support />}></Route>
          <Route path="/signup" element={<SignUp />}></Route>
          <Route path="/login" element={<Login />}></Route>
        </Route>

        {/* Nested routes under /employes */}
        <Route path="/employes" element={<LayoutEmployes />}>
          <Route path="loginEm" element={<LoginEm />} />
          <Route path="signupEm" element={<SignupEm />} />
          <Route path="checkout" element={<Payment></Payment>}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
