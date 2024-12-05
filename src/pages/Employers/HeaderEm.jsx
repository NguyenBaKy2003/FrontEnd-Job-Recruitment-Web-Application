import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [currentSection, setCurrentSection] = useState("Trang chủ");
  const [isLoggedIn, setIsLoggedIn] = useState(true); // Trạng thái đăng nhập

  // Hàm xử lý đăng xuất (Ví dụ: khi nhấn nút Đăng xuất)
  const handleLogout = () => {
    setIsLoggedIn(false);
    setCurrentSection("Trang chủ");
  };

  return (
    <div className="flex justify-between items-center bg-white p-4 rounded-lg shadow-md">
      {/* Logo và Tiêu đề */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4">
        <h1 className="text-gray-800 font-bold text-xl text-center sm:text-left">
          {currentSection}
        </h1>
        <p className="text-sm text-gray-500 sm:block hidden">
          Nhà tuyển dụng / {currentSection}
        </p>
      </div>

      {/* Tìm kiếm và Nút */}
      <div className="flex items-center space-x-4 mt-4 sm:mt-0">
        {/* Nếu chưa đăng nhập, hiển thị nút Đăng ký và Đăng nhập */}
        {!isLoggedIn ? (
          <>
            <input
              type="text"
              placeholder="Tìm kiếm..."
              className="px-4 py-2 border hidden lg:block rounded-lg focus:ring focus:ring-indigo-300 focus:outline-none w-full sm:w-auto"
            />
            <Link to="/employes/payment">
              <button
                className="bg-red-500 max-md:text-sm max-md:py-2  hover:bg-red-600 text-white px-4 py-2 rounded-lg"
                onClick={() => setCurrentSection("Nâng cấp gói")}>
                Nâng cấp gói
              </button>
            </Link>
            <div className="flex space-x-2">
              <Link to="/employes/signupEm">
                <button
                  className="bg-blue-500 max-md:text-sm max-md:py-2  hover:bg-blue-600 text-white px-4 py-2 rounded-lg"
                  onClick={() => setCurrentSection("Đăng ký")}>
                  Đăng ký
                </button>
              </Link>
              <Link to="/employes/loginem">
                <button
                  className="bg-green-500 max-md:text-sm max-md:py-2  hover:bg-green-600 text-white px-4 py-2 rounded-lg"
                  onClick={() => setCurrentSection("Đăng nhập")}>
                  Đăng nhập
                </button>
              </Link>
            </div>
          </>
        ) : (
          // Nếu đã đăng nhập, hiển thị logo và thông tin nhà tuyển dụng, cùng nút đăng xuất
          <div>
            <div className="flex max-w-screen-sm items-center space-x-4">
              <Link to="/employes/payment">
                <button
                  className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg"
                  onClick={() => setCurrentSection("Nâng cấp gói")}>
                  Nâng cấp gói
                </button>
              </Link>
              <button
                className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg"
                onClick={handleLogout}>
                Đăng xuất
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
