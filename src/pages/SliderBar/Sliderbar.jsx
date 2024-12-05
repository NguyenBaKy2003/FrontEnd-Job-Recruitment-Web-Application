import { NavLink } from "react-router-dom";

const Sidebar = () => {
  const menuItems = [
    { label: "Trang chủ", icon: "🏠", path: "/employes" },
    { label: "Danh sách việc làm", icon: "📄", path: "jobs" },
    { label: "Tạo việc làm", icon: "➕", path: "createjob" },
    { label: "Thông tin cá nhân", icon: "👤", path: "profile" },
  ];

  return (
    <div className="w-64 bg-white h-screen shadow-md">
      <div className="p-4 text-xl font-bold text-red-600">TLJob</div>
      <div className="space-y-2 ">
        {menuItems.map((item, index) => (
          <NavLink
            key={index}
            to={item.path}
            end={item.path === "/"} // Thêm 'end' chỉ với route '/'
            className={({ isActive }) =>
              `flex items-center px-4 py-3 rounded-lg ${
                isActive
                  ? "bg-red-100 text-red-600 font-semibold"
                  : "text-gray-700 hover:bg-red-100 hover:text-red-600 transition"
              }`
            }>
            <span className="text-lg mr-3">{item.icon}</span>
            {item.label}
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
