import { useState, useEffect } from "react";
import StatsCard from "../StatsCard/StatsCard";
import axios from "axios";

const HomeEm = () => {
  const [jobCount, setJobCount] = useState(0); // State for job count
  const [applicantCount, setApplicantCount] = useState(0); // State for applicant count
  const [loading, setLoading] = useState(true); // Loading state
  const [error, setError] = useState(""); // Error state
  const employerId = Number(localStorage.getItem("employerId")) || null; // Get employer ID

  useEffect(() => {
    if (!employerId) {
      setError("Employer ID not found. Please log in again.");
      setLoading(false);
      return;
    }

    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await axios.get(
          `http://localhost:3001/api/jobs/jobs?employer_id=${employerId}`
        );

        // Extract job count and total applicant count
        const jobs = response.data; // Assuming response.data is an array of jobs
        setJobCount(jobs.length);

        const totalApplicants = jobs.reduce(
          (count, job) => count + (job.applicantIds?.length || 0),
          0
        );
        setApplicantCount(totalApplicants);
      } catch (err) {
        console.error("Error fetching data:", err);
        setError("Unable to fetch data. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [employerId]);

  // Stats data with dynamic job count and applicant count
  const stats = [
    {
      label: "Total Job Posts",
      value: loading ? "Loading..." : jobCount,
      icon: "📋",
      growth: "0%", // Placeholder for now
    },
    { label: "Views", value: "2,300", icon: "👁️", growth: "+3%" }, // Placeholder
    {
      label: "Applicants",
      value: loading ? "Loading..." : applicantCount,
      icon: "🧑‍💼",
      growth: "-2%", // Placeholder for now
    },
    { label: "Sales", value: "$103,430", icon: "💰", growth: "+5%" }, // Placeholder
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
