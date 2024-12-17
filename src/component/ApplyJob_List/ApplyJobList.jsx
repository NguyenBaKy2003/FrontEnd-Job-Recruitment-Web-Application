import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function AppliedJobs() {
  const [appliedJobs, setAppliedJobs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAppliedJobs = async () => {
      const userId = localStorage.getItem("applicant_id");
      const token = localStorage.getItem("token");

      try {
        const response = await axios.get(
          `http://localhost:3001/api/applicant/applicants/${userId}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        // Extract only job IDs from the Jobs array
        const jobIds = response.data.Jobs.map((job) => job.id);

        // Now fetch job details for each job ID
        const jobDetailsPromises = jobIds.map((jobId) =>
          axios.get(`http://localhost:3001/api/jobs/job/${jobId}`, {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          })
        );

        // Wait for all job details to be fetched
        const jobDetailsResponse = await Promise.all(jobDetailsPromises);

        // Set the job details to state
        setAppliedJobs(jobDetailsResponse.map((res) => res.data));
      } catch (error) {
        console.error("Error fetching applied jobs:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchAppliedJobs();
  }, []);

  return (
    <div className="container mx-auto p-6">
      <h2 className="text-3xl font-semibold mb-6 text-center text-gray-800">
        Danh Sách Công Việc Đã Ứng Tuyển
      </h2>
      {loading ? (
        <p className="text-center text-lg text-gray-500">Loading...</p>
      ) : appliedJobs.length === 0 ? (
        <p className="text-center text-lg text-gray-500">
          Bạn chưa ứng tuyển vào công việc nào.
        </p>
      ) : (
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {appliedJobs.map((job) => (
            <li
              key={job.id}
              className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl w-full transition-shadow duration-300">
              <h3 className="text-2xl font-semibold text-gray-800">
                {job.title}
              </h3>
              <p className="text-gray-600 font-medium mt-2">{job.employer}</p>
              <p className="text-gray-600 font-medium mt-2">{job.location}</p>
              <p className="text-gray-600 font-medium mt-2">
                {job.salary.toLocaleString()} VND
              </p>
              <div className="mt-2">
                <p className="text-gray-600 font-medium mt-2">
                  Type: <span className="font-medium">{job.type}</span>
                </p>
                <p className="text-gray-600 font-medium mt-2">
                  Position: <span className="font-medium">{job.position}</span>
                </p>
              </div>
              <p className="text-gray-600 font-medium mt-2">
                <strong>Posted on:</strong>{" "}
                {new Date(job.create_at).toLocaleDateString()}
              </p>

              {/* Skills Section */}
              <div className="mt-2">
                <strong className="text-gray-800">Skills Required:</strong>
                <div className="flex flex-wrap mt-2 space-x-3">
                  {job.skillNames.map((skill, index) => (
                    <span
                      key={index}
                      className="bg-blue-500 text-white px-4 py-2 rounded-full text-sm font-medium shadow-md transition-shadow duration-300 hover:bg-blue-600">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Job Details Button */}
              <div className="mt-4 w-full ">
                <Link
                  to={`/findjob/${job.id}`}
                  className="bg-orange-600 text-white px-6 py-3 rounded-full text-sm font-medium shadow-md hover:shadow-lg  transition-shadow duration-300">
                  View Job Details
                </Link>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default AppliedJobs;
