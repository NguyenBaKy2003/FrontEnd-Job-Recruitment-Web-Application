// import React from "react";
import PropTypes from "prop-types";

const StatsCard = ({ label, value, icon, growth }) => {
  const growthColor = growth.startsWith("-")
    ? "text-red-500"
    : "text-green-500";

  return (
    <div className="flex items-center justify-between bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
      <div>
        <h3 className="text-sm font-medium text-gray-500">{label}</h3>
        <h2 className="text-2xl font-bold text-gray-800">{value}</h2>
        <p className={`text-sm mt-1 ${growthColor}`}>{growth}</p>
      </div>
      <div className="text-3xl text-indigo-600">{icon}</div>
    </div>
  );
};

// Sử dụng PropTypes để kiểm tra kiểu dữ liệu của props
StatsCard.propTypes = {
  label: PropTypes.string.isRequired, // `label` phải là chuỗi và bắt buộc
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired, // `value` có thể là chuỗi hoặc số
  icon: PropTypes.node.isRequired, // `icon` có thể là bất kỳ kiểu React node nào (biểu tượng, component, text...)
  growth: PropTypes.string.isRequired, // `growth` phải là chuỗi
};

export default StatsCard;
