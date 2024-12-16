import { useState, useEffect } from "react";
import axios from "axios";

const JobList = () => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedJob, setSelectedJob] = useState(null); // State for selected job details
  const [selectedApplicant, setSelectedApplicant] = useState(null); // State for selected applicant details
  const [loadingJobDetails, setLoadingJobDetails] = useState(false); // Loading state for job details
  const [loadingApplicantDetails, setLoadingApplicantDetails] = useState(false); // Loading state for applicant details

  useEffect(() => {
    const fetchJobs = async () => {
      const employerId = localStorage.getItem("employerId");

      try {
        const response = await axios.get(
          `http://localhost:3001/api/jobs/jobs?employer_id=${employerId}`
        );
        setJobs(response.data);
      } catch (err) {
        setError("Failed to fetch jobs. Please try again later.");
        console.error("Error fetching jobs:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchJobs();
  }, []);

  // Function to handle job click and fetch applicants
  const handleJobClick = async (jobId) => {
    setLoadingJobDetails(true); // Set loading state for job details
    try {
      const response = await axios.get(
        `http://localhost:3001/api/jobs/job/${jobId}`
      );
      setSelectedJob(response.data); // Set selected job with applicants
    } catch (err) {
      setError("Failed to fetch job details. Please try again later.");
      console.error("Error fetching job details:", err);
    } finally {
      setLoadingJobDetails(false); // Reset loading state
    }
  };

  // Function to fetch applicant details from the employer endpoint
  const handleApplicantClick = async (applicantId) => {
    setLoadingApplicantDetails(true); // Set loading state for applicant details
    try {
      const response = await axios.get(
        `http://localhost:3001/api/applicant/applicants/${applicantId}`
      );
      setSelectedApplicant(response.data); // Set selected applicant details
    } catch (err) {
      setError("Failed to fetch applicant details. Please try again later.");
      console.error("Error fetching applicant details:", err);
    } finally {
      setLoadingApplicantDetails(false); // Reset loading state
    }
  };

  if (loading) {
    return <div>Loading jobs...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-bold text-gray-800 mb-4">
        Danh sách việc làm
      </h2>

      {/* Job List */}
      <ul className="space-y-4">
        {jobs.map((job) => (
          <li
            key={job.id}
            className="flex items-center justify-between bg-gray-100 p-4 rounded-lg hover:bg-gray-200 transition-colors">
            <div>
              <h3 className="text-lg font-semibold text-indigo-600">
                {job.title}
              </h3>
              <p className="text-sm font-semibold text-gray-500">
                {job.employer} - {job.location}
              </p>
              <p className="text-sm text-gray-500 font-semibold">
                Mức lương: {new Intl.NumberFormat().format(job.salary)} VND
              </p>
              <p className="text-md font-semibold text-gray-500">
                Hạn chót nộp hồ sơ:{" "}
                {new Date(job.application_deadline).toLocaleDateString()}
              </p>
              <p className="text-sm font-semibold text-gray-600">
                Danh mục: {job.category || "Chưa có danh mục"}
              </p>
              <div className="mt-2">
                <span className="font-semibold text-gray-600">Kỹ năng: </span>
                {job.skillNames && job.skillNames.length > 0 ? (
                  job.skillNames.map((skill, index) => (
                    <span
                      key={index}
                      className="inline-block bg-blue-100 text-blue-600 text-xs font-semibold mr-1 px-2.5 py-0.5 rounded">
                      {skill}
                    </span>
                  ))
                ) : (
                  <span className="text-gray-400">Không có kỹ năng</span>
                )}
              </div>
            </div>
            <div className="flex space-x-2">
              <button
                onClick={() => handleJobClick(job.id)}
                className="font-semibold text-blue-500 hover:text-blue-700 text-sm">
                Xem ứng viên
              </button>
            </div>
          </li>
        ))}
      </ul>

      {/* Show Applicants when a Job is clicked */}
      {loadingJobDetails ? (
        <div>Loading job details...</div>
      ) : (
        selectedJob && (
          <div className="mt-6 bg-gray-50 p-4 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold text-gray-800">Ứng viên</h3>
            <ul className="space-y-4 mt-4">
              {selectedJob.applicants && selectedJob.applicants.length > 0 ? (
                selectedJob.applicants.map((applicant) => (
                  <li
                    key={applicant.id}
                    className="flex items-center justify-between bg-gray-200 p-4 rounded-lg">
                    <div>
                      <p className="font-semibold">{applicant.userName}</p>
                      <p className="text-sm text-gray-500">
                        {applicant.firstName} {applicant.lastName}
                      </p>
                      <p className="text-sm text-gray-500">{applicant.email}</p>
                    </div>
                    <button
                      onClick={() => handleApplicantClick(applicant.id)}
                      className="font-semibold text-blue-500 hover:text-blue-700 text-sm">
                      Xem hồ sơ
                    </button>
                  </li>
                ))
              ) : (
                <p className="text-gray-400">Không có ứng viên nào.</p>
              )}
            </ul>
          </div>
        )
      )}

      {/* Show Applicant Details when an applicant is clicked */}
      {loadingApplicantDetails ? (
        <div>Loading applicant details...</div>
      ) : (
        selectedApplicant && (
          <div className="mt-6 bg-gray-50 p-4 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold text-gray-800">
              Thông tin ứng viên
            </h3>
            <div className="mt-4">
              <p>
                <strong>Tên người dùng:</strong>{" "}
                {selectedApplicant.User.userName}
              </p>
              <p>
                <strong>Họ và tên:</strong> {selectedApplicant.User.firstName}{" "}
                {selectedApplicant.lastName}
              </p>
              <p>
                <strong>Email:</strong> {selectedApplicant.User.email}
              </p>
              <p>
                <strong>Số điện thoại:</strong>{" "}
                {selectedApplicant.User.phone || "Chưa có thông tin"}
              </p>
              <p>
                <strong>Địa chỉ:</strong>{" "}
                {selectedApplicant.User.address || "Chưa có thông tin"}
              </p>

              {/* Education and Experience */}
              <div className="mt-4">
                <strong>Học vấn:</strong>
                <p>{selectedApplicant.education || "Chưa có thông tin"}</p>
              </div>
              <div className="mt-4">
                <strong>Kinh nghiệm:</strong>
                <p>{selectedApplicant.experience || "Chưa có thông tin"}</p>
              </div>

              {/* Skills */}
              <div className="mt-4">
                <strong>Kỹ năng:</strong>
                {selectedApplicant.Skills &&
                selectedApplicant.Skills.length > 0 ? (
                  <div className="flex flex-wrap space-x-2 mt-2">
                    {selectedApplicant.Skills.map((skill, index) => (
                      <span
                        key={index}
                        className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-xs font-semibold">
                        {skill.name}
                      </span>
                    ))}
                  </div>
                ) : (
                  <p>Chưa có thông tin về kỹ năng.</p>
                )}
              </div>
            </div>
          </div>
        )
      )}
    </div>
  );
};

export default JobList;
