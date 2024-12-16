import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const JobCard = ({
  id,
  title,
  employer,
  companyImg,
  location,
  category,
  skillNames,
  type,
  create_at,
  salary,
  application_deadline,
}) => {
  // Format the `create_at` date
  const formattedCreateAt = create_at
    ? new Date(create_at).toLocaleString("vi-VN", {
        weekday: "short", // Mon, Tue, etc.
        year: "numeric",
        month: "short", // Dec, Jan, etc.
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit",
      })
    : "Time not specified";

  return (
    <div className="bg-white shadow-lg rounded-lg p-6 border hover:shadow-xl transition-transform transform hover:scale-105 duration-300 border-gray-200">
      <Link to={`/findjob/${id}`} className="block">
        {/* Title & Time */}
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-2xl font-semibold text-gray-800 hover:text-orange-600 transition-colors">
            {title || "Job Title"}
          </h3>
          <span className="text-sm text-gray-500">{formattedCreateAt}</span>
        </div>

        {/* Company Info */}
        <div className="flex items-center mb-4">
          <img
            src={
              companyImg ||
              "https://scontent.fvii1-1.fna.fbcdn.net/v/t39.30808-1/344542573_1016776169700186_59734981782926054_n.jpg?stp=dst-jpg_s200x200_tt6&_nc_cat=102&ccb=1-7&_nc_sid=0ecb9b&_nc_eui2=AeHE3pzgZ09WIumVk2SaUlzW8AfSrMmpN6nwB9Ksyak3qRO3GRAQCJN5k0u9DAbLgHWd1mkLGJGTGZQ8xITqFMmC&_nc_ohc=sEnl92uUwOgQ7kNvgE2c5DV&_nc_zt=24&_nc_ht=scontent.fvii1-1.fna&_nc_gid=A95XAKmBPy0c0eKtzHygI3i&oh=00_AYApN3FuvTyXjMsUvXubgCRF8bv4QoZk6s8M9-kHT8ZfsQ&oe=6765A0A6"
            }
            alt={employer || "Company Logo"}
            className="w-16 h-16 object-cover rounded-full mr-4"
          />
          <p className="text-lg font-medium text-gray-800">
            {employer || "Company Name"}
          </p>
        </div>

        {/* Location */}
        <p className="text-lg text-gray-700 mt-1">
          {location || "Location not specified"}
        </p>

        {/* Category */}
        <p className="text-gray-500 mt-2">
          Lĩnh Vực:{" "}
          <span className="text-gray-800 font-medium">
            {category || "Category not specified"}
          </span>
        </p>
        <p className="text-gray-500 mt-2">
          Loại Hợp Đồng:{" "}
          <span className="text-gray-800 font-medium">
            {type || "Category not specified"}
          </span>
        </p>

        {/* Salary & Deadline */}
        {salary && (
          <p className="text-gray-800 mt-2">
            Mức Lương: {new Intl.NumberFormat().format(salary)} VND
          </p>
        )}
        {application_deadline && (
          <p className="text-gray-500 text-sm">
            Hạn Ứng Tuyển: {new Date(application_deadline).toLocaleDateString()}
          </p>
        )}

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mt-4">
          {skillNames && skillNames.length > 0 ? (
            skillNames.map((skill, index) => (
              <span
                key={index}
                className="px-3 py-1 text-md font-medium text-gray-700 bg-gray-100 rounded-md shadow-sm hover:bg-orange-100 transition-all">
                {skill}
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
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  employer: PropTypes.string.isRequired,
  companyImg: PropTypes.string, // Optional for company image
  location: PropTypes.string.isRequired,
  category: PropTypes.string, // Category as a string
  skillNames: PropTypes.arrayOf(PropTypes.string).isRequired, // Skills array
  create_at: PropTypes.string, // Optional
  salary: PropTypes.number, // Optional
  application_deadline: PropTypes.string, // Optional
};

export default JobCard;
