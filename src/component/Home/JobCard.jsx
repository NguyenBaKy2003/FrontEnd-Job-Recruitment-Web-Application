// import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
const JobCard = ({
  id,
  companyImg,
  title,
  company,
  location,
  tags,
  postedTime,
}) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-4 border hover:shadow-lg transition-transform transform hover:scale-105 duration-300 border-gray-200">
      <Link to={`/findjob/${id}`} className="block">
        {/* Title & Time */}
        <div className="flex justify-between items-center mb-2">
          <h3 className="text-lg font-semibold text-gray-800">
            {title || "Job Title"}
          </h3>
          <span className="text-xs text-gray-500">
            {postedTime || "Time not specified"}
          </span>
        </div>

        {/* Company Info */}
        <div className="flex items-center mb-3">
          <img
            src={companyImg || "https://via.placeholder.com/150"}
            alt={company || "Company Logo"}
            className="w-16 h-16 object-cover rounded-full mr-3"
          />
          <p className="text-xl ml-4 font-medium  text-black">
            {company || "Company Name"}
          </p>
        </div>

        {/* Location */}
        <p className=" text-gray-800 text-xl mt-1">
          {location || "Location not specified"}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mt-3">
          {tags && tags.length > 0 ? (
            tags.map((tag) => (
              <span
                key={tag.id}
                className="px-2 py-1 text-md font-medium text-gray-700 bg-gray-100 rounded">
                {tag}
              </span>
            ))
          ) : (
            <span className="text-xs text-gray-400">No tags</span>
          )}
        </div>
      </Link>
    </div>
  );
};

JobCard.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired, // Bắt buộc phải có tiêu đề
  company: PropTypes.string.isRequired, // Tên công ty là chuỗi và bắt buộc
  companyImg: PropTypes.string.isRequired, // Tên công ty là chuỗi và bắt buộc
  location: PropTypes.string.isRequired, // Vị trí là chuỗi và bắt buộc
  tags: PropTypes.arrayOf(PropTypes.string).isRequired, // Mảng các chuỗi (tags)
  postedTime: PropTypes.string, // Thời gian đăng (không bắt buộc)
};
export default JobCard;
