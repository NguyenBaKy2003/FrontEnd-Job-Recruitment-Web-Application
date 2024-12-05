import { NavLink } from "react-router-dom";

const Sidebar = () => {
  const menuItems = [
    { label: "Home", icon: "🏠", path: "/employes/homeEm" },
    { label: "Job List", icon: "📄", path: "jobs" },
    { label: "Create Job", icon: "➕", path: "createjob" },
    { label: "Profile ", icon: "👤", path: "profile" },
  ];

  return (
    <div className="w-64  bg-white shadow-md p-4 flex flex-col space-y-4 md:flex-col md:h-full md:space-y-2 max-md:flex  max-md:flex-row    max-md:items-center  max-md:w-auto max-md:justify-between   max-md:space-x-2 ">
      {/* Logo or Brand */}
      <div className="text-xl font-bold text-red-600">TLJob</div>

      {/* Menu Items */}
      <div className="space-y-2  max-md:flex-wrap max-md:space-y-0 max-md:space-x-1 max-md:justify-between max-md:flex max-md:flex-row max-md:w-screen ">
        {menuItems.map((item, index) => (
          <NavLink
            key={index}
            to={item.path}
            end={item.path === "/"} // Use 'end' for exact matching on root path
            className={({ isActive }) =>
              `flex items-center px-4 py-3 max-md:px-0  max-md:space-y-0  max-md:py-0  rounded-lg ${
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
