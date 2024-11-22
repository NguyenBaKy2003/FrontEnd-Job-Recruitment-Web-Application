// import React from "react";

import { Link, NavLink } from "react-router-dom";

function Header() {
  return (
    <header className=" shadow sticky z-50  top-0">
      <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5">
        <div className="flex flex-nowrap justify-between max-md:justify-evenly items-center mx-auto max-w-screen-xl">
          <Link className="hidden md:flex  max-sm:size-2/5 items-center" to="/">
            <img
              src="https://api.logo.com/api/v2/images?logo=lg_lYJ7atQQFci30xZlBo&format=webp&width=2000&height=1500&fit=contain&quality=100&margins=500&u=2024-11-22T11%3A02%3A05.864Z"
              className="mr-3 h-14"
              alt="Logo"
            />
          </Link>
          <div className="flex items-center lg:order-2">
            <Link
              to="/employes"
              className="max-sm:text-sm max-sm:px-3  max-sm:py-2 max-sm:flex
               decoration-inherit text-orange-600 hover:text-orange-800 focus:ring-4 focus:ring-organe-300  font-medium rounded-lg text-md px-2 lg:px-5 py-2 lg:py-2.5 underline  mr-2 focus:outline-none">
              For Employes
            </Link>
            <Link
              to="/signup"
              className="  max-sm:text-sm max-sm:px-3   max-sm:py-2
              bg-orange-500 text-white  hover:bg-orange-600 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none ">
              Đăng Ký
            </Link>
            <Link
              to="/login"
              className="text-white max-sm:text-sm  max-sm:px-3  max-sm:py-2 max-sm:flex
              bg-orange-600  hover:bg-orange-700 focus:ring-4 focus:ring-organe-300  font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none  ">
              Đăng Nhập
            </Link>
          </div>
          <div
            className=" hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
            id="mobile-menu-2">
            <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    `block pr-4 pl-3 duration-200 border-b border-gray-100 hover:bg-gray-50
                  ${isActive ? "text-orange-700" : "text-gray-7000"}
                  lg:hover:bg-transparent
                  lg:border-0 hover:text-orange-700`
                  }>
                  Trang Chủ
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/findjob"
                  className={({ isActive }) =>
                    `block pr-4 pl-3 duration-200 border-b border-gray-100 hover:bg-gray-50
                  ${isActive ? "text-orange-700" : "text-gray-7000"}
                  lg:hover:bg-transparent
                  lg:border-0 hover:text-orange-700`
                  }>
                  Tìm Việc
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/company"
                  className={({ isActive }) =>
                    `block pr-4 pl-3 duration-200 border-b border-gray-100 hover:bg-gray-50
                  ${isActive ? "text-orange-700" : "text-gray-7000"}
                  lg:hover:bg-transparent
                  lg:border-0 hover:text-orange-700`
                  }>
                  Công Ty
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/contact"
                  className={({ isActive }) =>
                    `block pr-4 pl-3 duration-200 border-b border-gray-100 hover:bg-gray-50
                  ${isActive ? "text-orange-700" : "text-gray-7000"}
                  lg:hover:bg-transparent
                  lg:border-0 hover:text-orange-700`
                  }>
                  Liên Hệ
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/support"
                  className={({ isActive }) =>
                    `block pr-4 pl-3 duration-200 border-b border-gray-100 hover:bg-gray-50
                  ${isActive ? "text-orange-700" : "text-gray-7000"}
                  lg:hover:bg-transparent
                  lg:border-0 hover:text-orange-700`
                  }>
                  Trợ Giúp
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
