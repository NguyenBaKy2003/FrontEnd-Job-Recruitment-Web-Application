import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import "./index.css"; // Import Tailwind CSS tại đây
import Layout from "./Layout";
import Home from "./component/Home/Home";
import About from "./component/About/About";
import Contact from "./component/Contact/Contact";

import User from "./component/User/User";
import Login from "./component/Login/Login";
import GetStart from "./component/GetStart/GetStart";
import Github, { githubInfoLoader } from "./component/Github/Github"; // Import the default and named export
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout></Layout>}>
      <Route path="home" element={<Home></Home>}></Route>
      <Route path="/about" element={<About></About>}></Route>
      <Route path="/contact" element={<Contact></Contact>}></Route>
      <Route
        path="/github"
        loader={githubInfoLoader}
        element={<Github></Github>}></Route>
      <Route path="user/" element={<User></User>}>
        <Route path=":userid" element={<User></User>}></Route>
      </Route>
      <Route path="/login" element={<Login></Login>}></Route>
      <Route path="/getstarted" element={<GetStart></GetStart>}></Route>
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);
