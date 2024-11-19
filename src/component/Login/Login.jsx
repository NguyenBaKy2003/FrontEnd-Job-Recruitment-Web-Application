// import React from "react";
import { Link } from "react-router-dom";
function Login() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-blue-50">
      <div className="bg-white shadow-md rounded-lg p-8 w-full max-w-md">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
          Đăng Nhập
        </h2>
        <form>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
              placeholder="Nhập email"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-gray-700">
              Mật khẩu
            </label>
            <input
              type="password"
              id="password"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
              placeholder="Nhập mật khẩu"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-orange-500 text-white py-2 rounded-md hover:bg-orange-600">
            Đăng Nhập
          </button>
        </form>
        <p className="text-center text-gray-600 mt-4">
          Chưa có tài khoản?{" "}
          <Link to="/login" className="text-orange-500 hover:underline">
            Đăng ký ngay
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Login;
