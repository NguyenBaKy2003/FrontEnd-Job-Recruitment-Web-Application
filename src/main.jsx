import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

import Home from "./component/Home/Home";
import "./index.css"; // Import Tailwind CSS tại đây
import Layout from "./Layout";

// import User from "./component/User/User";
import Company from "./component/Company/CompanyAll";
import FindJob from "./component/FindJob/Findjob";
import Login from "./component/Login/Login";
import SignUp from "./component/SignUp/SignUp";
import Support from "./component/Support/Support";
import Contact from "./component/Contact/Contact";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout></Layout>}>
      <Route path="home" element={<Home></Home>}></Route>
      <Route path="/findjob" element={<FindJob></FindJob>}></Route>
      <Route path="/contact" element={<Contact></Contact>}></Route>

      <Route path="/company" element={<Company></Company>}></Route>
      <Route path="/support" element={<Support></Support>}></Route>
      <Route path="/signup" element={<SignUp></SignUp>}></Route>
      <Route path="/login" element={<Login></Login>}></Route>
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);
