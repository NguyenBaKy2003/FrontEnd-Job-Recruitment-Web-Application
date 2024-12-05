// import React from "react";
import StatsCard from "../StatsCard/StatsCard";

const HomeEm = () => {
  const stats = [
    { label: "Total Job Post", value: "4", icon: "📋", growth: "0%" },
    { label: "Views", value: "2,300", icon: "👁️", growth: "+3%" },
    { label: "New Clients", value: "3,462", icon: "🧑‍💼", growth: "-2%" },
    { label: "Sales", value: "$103,430", icon: "💰", growth: "+5%" },
  ];

  return (
    <div className="flex bg-gray-100 min-h-screen">
      {/* Sidebar */}

      {/* Main Content */}
      <div className="flex-1 p-6">
        {/* Stats Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-6">
          {stats.map((stat, index) => (
            <StatsCard
              key={index}
              label={stat.label}
              value={stat.value}
              icon={stat.icon}
              growth={stat.growth}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomeEm;
