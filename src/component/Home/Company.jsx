// import React from "react";

import { Link } from "react-router-dom";
import PropTypes from "prop-types";
const Company = ({ id, name, location, jobs, logo }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-4 border border-gray-200 hover:shadow-lg transition-transform transform hover:scale-105 duration-300">
      <Link to={`/company/${id}`} className="block">
        {/* Hình ảnh công ty */}
        <img
          src={logo}
          alt={`Logo of ${name}`}
          className="w-full h-40 object-cover mb-4 rounded"
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = "https://via.placeholder.com/150"; // Fallback image
          }}
        />
        {/* Tên công ty */}
        <h3 className="text-xl font-semibold text-gray-800">{name}</h3>
        {/* Vị trí công ty */}
        <p className="text-sm text-gray-600">{location}</p>
        {/* Số lượng công việc */}
        <p className="text-sm text-orange-500 font-medium mt-2">{jobs}</p>
        <button className="block w-full mt-4 text-center bg-orange-500 text-white py-2 rounded-md hover:bg-orange-600">
          Xem chi tiết
        </button>
      </Link>
    </div>
  );
};

Company.propTypes = {
  id: PropTypes.string.isRequired, // Bắt buộc phải có tiêu đề
  name: PropTypes.string.isRequired, // Tên công ty là chuỗi và bắt buộc
  location: PropTypes.string.isRequired, // Vị trí là chuỗi và bắt buộc
  jobs: PropTypes.arrayOf(PropTypes.string).isRequired, // Mảng các chuỗi (tags)
  logo: PropTypes.string, // Thời gian đăng (không bắt buộc)
};

export default Company;
