import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Header() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState("");
  const [currentSection, setCurrentSection] = useState("Trang chủ");

  // Check login status on component mount
  useEffect(() => {
    const token = localStorage.getItem("token");
    const storedUsername = localStorage.getItem("username");

    if (token) {
      setIsLoggedIn(true);
      setUsername(storedUsername || "");
    }
  }, []);

  const handleLogout = () => {
    // Remove token and username from localStorage
    localStorage.removeItem("token");
    localStorage.removeItem("username");

    // Update state
    setIsLoggedIn(false);
    setUsername("");

    // Redirect to login page
    window.location.href = "/employes/loginem";
  };

  return (
    <div className="flex justify-between items-center bg-white p-4 rounded-lg shadow-md">
      {/* Logo and Title */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4">
        <h1 className="text-gray-800 font-bold text-xl text-center sm:text-left">
          {currentSection}
        </h1>
        <p className="text-sm text-gray-500 sm:block hidden">
          Nhà tuyển dụng / {currentSection}
        </p>
      </div>

      {/* Right Section */}
      <div className="flex items-center space-x-4">
        {/* Not Logged In */}
        {!isLoggedIn && (
          <>
            <input
              type="text"
              placeholder="Tìm kiếm..."
              className="px-4 py-2 border hidden lg:block rounded-lg focus:ring focus:ring-indigo-300 focus:outline-none w-full sm:w-auto"
            />
            <Link to="/employes/payment">
              <button
                className="bg-red-500 max-md:text-sm max-md:py-2 hover:bg-red-600 text-white px-4 py-2 rounded-lg"
                onClick={() => setCurrentSection("Nâng cấp gói")}>
                Nâng cấp gói
              </button>
            </Link>
            <Link to="/employes/signupEm">
              <button
                className="bg-blue-500 max-md:text-sm max-md:py-2 hover:bg-blue-600 text-white px-4 py-2 rounded-lg"
                onClick={() => setCurrentSection("Đăng ký")}>
                Đăng ký
              </button>
            </Link>
            <Link to="/employes/loginem">
              <button
                className="bg-green-500 max-md:text-sm max-md:py-2 hover:bg-green-600 text-white px-4 py-2 rounded-lg"
                onClick={() => setCurrentSection("Đăng nhập")}>
                Đăng nhập
              </button>
            </Link>
          </>
        )}

        {/* Logged In */}
        {isLoggedIn && (
          <div className="flex items-center space-x-4">
            <span className="text-gray-700">Xin chào, {username}</span>
            <Link to="/employes/payment">
              <button
                className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg"
                onClick={() => setCurrentSection("Nâng cấp gói")}>
                Nâng cấp gói
              </button>
            </Link>
            <button
              onClick={handleLogout}
              className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg">
              Đăng Xuất
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Header;
