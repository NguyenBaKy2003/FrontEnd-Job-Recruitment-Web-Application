import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const Company = ({ id, company_name, company_address, jobs }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden border border-gray-200 hover:shadow-2xl transition-transform transform hover:scale-105 duration-300 h-full">
      {/* Company Card Content */}
      <Link to={`/company/${id}`} className="block h-full">
        {/* Company Logo */}
        <div className="w-full h-48 bg-gray-100 flex justify-center items-center">
          <img
            src="https://api.logo.com/api/v2/images?logo=lg_lYJ7atQQFci30xZlBo&format=webp&width=2000&height=1500&fit=contain&quality=100&margins=500&u=2024-11-22T11%3A02%3A05.864Z"
            alt={`Logo of ${company_name}`}
            className="object-contain w-3/4 h-3/4"
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = "https://via.placeholder.com/150";
            }}
          />
        </div>

        {/* Company Details */}
        <div className="p-5 flex flex-col justify-between h-full">
          <div>
            <h3 className="text-xl font-bold text-gray-800 truncate mb-2">
              {company_name}
            </h3>
            <p className="text-gray-600 text-sm truncate mb-4">
              📍 {company_address}
            </p>
            {/* <p className="text-orange-500 text-sm font-medium">
              {jobs.length} công việc đang tuyển
            </p> */}
            <button
              className="mt-4 w-full py-2 bg-orange-500 text-white text-center font-medium rounded-md hover:bg-orange-600 transition-all duration-300"
              type="button">
              Xem chi tiết
            </button>
          </div>

          {/* View Details Button */}
        </div>
      </Link>
    </div>
  );
};

Company.propTypes = {
  id: PropTypes.string.isRequired,
  company_name: PropTypes.string.isRequired,
  company_address: PropTypes.string.isRequired,
  jobs: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Company;
