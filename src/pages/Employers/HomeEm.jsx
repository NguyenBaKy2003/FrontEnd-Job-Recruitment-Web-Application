import { useState, useEffect } from "react";
import StatsCard from "../StatsCard/StatsCard";
import axios from "axios";

const HomeEm = () => {
  const [jobCount, setJobCount] = useState(0); // State for job count
  const [loading, setLoading] = useState(true); // Loading state
  const [error, setError] = useState(""); // Error state
  const employerId = Number(localStorage.getItem("employerId")) || 1; // Get employer ID

  useEffect(() => {
    // Fetch the job count when component mounts
    const fetchJobCount = async () => {
      try {
        setLoading(true);
        const response = await axios.get(
          `http://localhost:3001/api/jobs/jobs?employer_id=${employerId}`
        );
        // Update the job count from response data
        setJobCount(response.data.length); // Assuming response.data is an array of jobs
      } catch (err) {
        console.error("Error fetching job count:", err);
        setError("Unable to fetch job count. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchJobCount();
  }, [employerId]);

  // Stats data with dynamic job count
  const stats = [
    {
      label: "Total Job Posts",
      value: loading ? "Loading..." : jobCount,
      icon: "📋",
      growth: "0%",
    },
    { label: "Views", value: "2,300", icon: "👁️", growth: "+3%" },
    { label: "New Clients", value: "3,462", icon: "🧑‍💼", growth: "-2%" },
    { label: "Sales", value: "$103,430", icon: "💰", growth: "+5%" },
  ];

  return (
    <div className="flex bg-gray-100 min-h-screen">
      {/* Main Content */}
      <div className="flex-1 p-6">
        {/* Error Message */}
        {error && <div className="text-red-500 mb-4">{error}</div>}

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
