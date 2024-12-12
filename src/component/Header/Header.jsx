import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState("");

  // Check login status on component mount
  useEffect(() => {
    const token = localStorage.getItem("token");
    const storedUsername = localStorage.getItem("username");

    if (token) {
      setIsLoggedIn(true);
      setUsername(storedUsername || "");
    }
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleLogout = () => {
    // Remove token and username from localStorage
    localStorage.removeItem("token");
    localStorage.removeItem("username");

    // Update state
    setIsLoggedIn(false);
    setUsername("");

    // Optional: Redirect to login page
    window.location.href = "/login";
  };

  return (
    <header className="shadow sticky z-50 top-0 bg-white">
      <nav className="border-gray-200 px-4 lg:px-6 py-2.5">
        <div className="flex justify-between items-center mx-auto max-w-screen-xl">
          {/* Logo */}
          <div className="flex">
            <Link to="/" className="flex items-center">
              <img
                src="https://api.logo.com/api/v2/images?logo=lg_lYJ7atQQFci30xZlBo&format=webp&width=2000&height=1500&fit=contain&quality=100&margins=500&u=2024-11-22T11%3A02%3A05.864Z"
                className="h-14"
                alt="Logo"
              />
            </Link>
            <button
              className="lg:hidden p-2 text-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-300"
              onClick={toggleMenu}>
              <svg
                className="w-6 h-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d={
                    menuOpen
                      ? "M6 18L18 6M6 6l12 12"
                      : "M4 6h16M4 12h16M4 18h16"
                  }
                />
              </svg>
            </button>
          </div>

          {/* Rest of the previous mobile and desktop navigation remains the same */}
          {/* ... (previous navigation code) ... */}

          {/* Buttons - Conditional Rendering */}

          <div
            className=" hidden  justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
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

          <div className="flex order-2 items-center lg:order-2">
            {/* If the user is not logged in, show "For Employees", "Đăng Ký", and "Đăng Nhập" */}
            {!isLoggedIn && (
              <>
                <Link
                  to="/employes"
                  className="max-sm:text-sm max-sm:px-3 max-sm:py-2 max-sm:flex
                   decoration-inherit text-orange-600 hover:text-orange-800 focus:ring-4 focus:ring-organe-300 font-medium rounded-lg text-md px-2 lg:px-5 py-2 lg:py-2.5 underline mr-2 focus:outline-none">
                  For Employes
                </Link>
                <Link
                  to="/signup"
                  className="text-white bg-orange-500 hover:bg-orange-600 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 mr-2">
                  Đăng Ký
                </Link>
                <Link
                  to="/login"
                  className="text-white bg-orange-600 hover:bg-orange-700 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 mr-2">
                  Đăng Nhập
                </Link>
              </>
            )}

            {/* If the user is logged in, show username and Logout */}
            {isLoggedIn && (
              <div className="flex items-center space-x-4">
                <span className="text-gray-700 mr-2">Xin chào, {username}</span>
                <button
                  onClick={handleLogout}
                  className="text-white bg-red-600 hover:bg-red-700 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 mr-2">
                  Đăng Xuất
                </button>
              </div>
            )}
          </div>
        </div>
        <div
          className={`fixed top-0 order-1 left-0 h-full bg-white shadow-lg z-40 w-64 transform transition-transform duration-300 ease-in-out ${
            menuOpen ? "translate-x-0" : "-translate-x-full"
          } lg:hidden`}>
          <button
            onClick={toggleMenu}
            className="absolute top-4 right-4 text-gray-700 p-2 focus:outline-none">
            <svg
              className="w-6 h-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
          <ul className="mt-10 space-y-4 px-6">
            <li>
              <NavLink
                to="/"
                className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0"
                onClick={toggleMenu}>
                Trang Chủ
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/findjob"
                className="block text-gray-700 text-lg font-medium hover:text-orange-700"
                onClick={toggleMenu}>
                Tìm Việc
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/company"
                className="block text-gray-700 text-lg font-medium hover:text-orange-700"
                onClick={toggleMenu}>
                Công Ty
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                className="block text-gray-700 text-lg font-medium hover:text-orange-700"
                onClick={toggleMenu}>
                Liên Hệ
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/support"
                className="block text-gray-700 text-lg font-medium hover:text-orange-700"
                onClick={toggleMenu}>
                Trợ Giúp
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Header;
