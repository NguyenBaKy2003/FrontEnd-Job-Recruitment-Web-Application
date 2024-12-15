import { useState, useEffect } from "react";
import axios from "axios";

const JobList = () => {
  // State to hold the list of jobs and loading state
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch jobs from the API when the component mounts
  useEffect(() => {
    const fetchJobs = async () => {
      const employerId = localStorage.getItem("employerId"); // You can dynamically get this from localStorage or props

      try {
        // Fetch jobs from the API using Axios
        const response = await axios.get(
          `http://localhost:3001/api/jobs/jobs?employer_id=${employerId}`
        );
        setJobs(response.data); // Set jobs data
      } catch (err) {
        setError("Failed to fetch jobs. Please try again later.");
        console.error("Error fetching jobs:", err);
      } finally {
        setLoading(false); // Set loading to false once the API call is complete
      }
    };

    fetchJobs();
  }, []);

  // Function to handle job deletion
  const handleDelete = (jobId) => {
    setJobs(jobs.filter((job) => job.id !== jobId));
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-bold text-gray-800 mb-4">
        Danh sách việc làm
      </h2>
      <ul className="space-y-4">
        {jobs.map((job) => (
          <li
            key={job.id}
            className="flex items-center justify-between bg-gray-100 p-4 rounded-lg hover:bg-gray-200 transition-colors">
            <div>
              <h3 className="text-lg font-semibold text-indigo-600">
                {job.title}
              </h3>
              <p className="text-sm text-gray-500">
                {job.employer} - {job.location}
              </p>
              <p className="text-sm text-gray-500">Mức lương: {job.salary}</p>
            </div>
            <div className="flex space-x-2">
              <button
                onClick={() => handleDelete(job.id)}
                className="text-red-500 hover:text-red-700 text-sm">
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default JobList;
