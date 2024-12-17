import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const JobDetail = () => {
  const { jobId } = useParams(); // Get jobId from URL params
  const [job, setJob] = useState(null); // State to hold job details
  const [loading, setLoading] = useState(true); // Loading state
  const [error, setError] = useState(""); // Error state
  const [userId, setUserId] = useState(null); // State to hold user ID
  const [modalOpen, setModalOpen] = useState(false); // Modal visibility state
  const [hasApplied, setHasApplied] = useState(false); // Check if the user has already applied
  const [feedbackMessage, setFeedbackMessage] = useState(""); // Feedback message for success or failure

  useEffect(() => {
    // Fetch job details
    const fetchJobDetails = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3001/api/jobs/job/${jobId}`
        );
        setJob(response.data); // Set job details from API response
      } catch (err) {
        setError("Failed to fetch job details. Please try again later.");
        console.error("Error fetching job details:", err);
      } finally {
        setLoading(false); // Set loading to false once the API call is complete
      }
    };

    fetchJobDetails();
  }, [jobId]);

  useEffect(() => {
    // Get user ID from local storage
    const storedUserId = localStorage.getItem("applicant_id");
    if (storedUserId) {
      setUserId(storedUserId);
    }
  }, []);

  // Handle Apply Job
  const handleApplyJob = async () => {
    if (!userId) {
      setFeedbackMessage("Vui lòng đăng nhập để ứng tuyển!"); // Show message if not logged in
      return;
    }

    if (hasApplied) {
      setFeedbackMessage("Bạn đã ứng tuyển cho công việc này rồi!");
      return;
    }

    setModalOpen(true);
  };

  // Confirm Apply
  const handleConfirmApply = async () => {
    try {
      const response = await axios.post(
        "http://localhost:3001/api/appli_job/apply_job",
        {
          applicant_id: userId, // Use applicant_id as per your database schema
          job_id: jobId, // Use job_id from the URL
        }
      );

      if (response.status === 201) {
        setHasApplied(true); // Mark that the user has applied
        setFeedbackMessage("Ứng tuyển thành công!"); // Show success message
      }
    } catch (err) {
      console.error("Error applying for job:", err);
      setFeedbackMessage("Bạn đã ứng tuyển cho công việc này rồi!"); // Show error message
    } finally {
      setModalOpen(false); // Close the modal after submission
    }
  };

  // Cancel Apply
  const handleCancelApply = () => {
    setModalOpen(false); // Close the modal without submitting
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  if (!job) {
    return <div>Job not found</div>; // Handle case where job is not found
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      {/* Feedback Message */}
      {feedbackMessage && (
        <div
          className={`p-4 mb-6 rounded-lg ${
            feedbackMessage.includes("thành công")
              ? "bg-green-100 text-green-700"
              : "bg-red-100 text-red-700"
          }`}>
          {feedbackMessage}
        </div>
      )}

      {/* Header */}
      <div className="bg-white shadow-lg rounded-lg p-6 mb-6">
        <div className="flex justify-between items-start">
          <div className="w-1/5 mr-3">
            <img
              src={
                "https://scontent.fhan14-4.fna.fbcdn.net/v/t39.30808-6/344542573_1016776169700186_59734981782926054_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeHE3pzgZ09WIumVk2SaUlzW8AfSrMmpN6nwB9Ksyak3qRO3GRAQCJN5k0u9DAbLgHWd1mkLGJGTGZQ8xITqFMmC&_nc_ohc=sEnl92uUwOgQ7kNvgHzRxUa&_nc_oc=AdglY_5fP9q2awl_XVrns5BMRp77lUBTEmEC7Om3xH4waPMa4Vcmr-Zb77mT1h_L4TufEPCuTSJ4cPge_858uA66&_nc_zt=23&_nc_ht=scontent.fhan14-4.fna&_nc_gid=AqOhXzobEjprdeSg0OZabCt&oh=00_AYCaeP_rqEBJdGyzRoEylEDHnm_4q_DEfXhvdKa0pzMVwg&oe=67666A08"
              }
              alt={job.employer}
            />
          </div>
          <div className="w-3/5">
            <h1 className="text-2xl font-bold text-gray-800 mb-2">
              {job.title}
            </h1>
            <p className="text-gray-600">{job.employer}</p>
            {job.salary && (
              <p className="text-gray-800 mt-2">
                Mức Lương: {new Intl.NumberFormat().format(job.salary)} VND
              </p>
            )}
            <p className="text-gray-500 text-sm mb-2">{job.location}</p>
            <p className="text-gray-400 text-sm">{job.application_deadline}</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {job.skillNames.map((skill, index) => (
                <span
                  key={index}
                  className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm">
                  {skill}
                </span>
              ))}
            </div>
          </div>
          <button
            onClick={handleApplyJob}
            className="bg-red-500 text-white px-6 py-2 rounded-lg text-sm font-semibold">
            Ứng Tuyển Ngay
          </button>
        </div>
      </div>

      {/* Job Description */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 w-full">
        <div className="lg:col-span-9 flex flex-col gap-5 rounded-lg shadow-lg">
          <div className="bg-white shadow-lg rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-4">Mô Tả Công Việc </h2>
            <p className="text-gray-700">{job.description}</p>
          </div>
          <div className="bg-white shadow-lg rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-4">Quyền Lợi</h2>
            <p className="text-gray-700">{job.benefit}</p>
          </div>
          <div className="bg-white shadow-lg rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-4">Yêu Cầu Công Việc</h2>
            <p className="text-gray-700">{job.requirements}</p>
          </div>
        </div>

        {/* Company Info */}
        <div className="lg:col-span-3 flex flex-col gap-5">
          <div className="bg-white shadow-lg rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-4">{job.employer}</h2>
            <ul className="space-y-2 text-gray-700">
              <li>
                <strong>Lĩnh Vực:</strong> {job.category}
              </li>
              <li>
                <strong>Thể Loại Công Việc:</strong> {job.type}
              </li>
              <li>
                <strong>Địa Điểm Làm Việc:</strong> {job.location}
              </li>
              <li>
                <strong>Vị Trí:</strong> {job.position}
              </li>
              <li>
                <strong>Ngày Tạo:</strong>{" "}
                {new Date(job.create_at).toLocaleDateString()}
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Modal for Confirmation */}
      {modalOpen && (
        <div className="fixed inset-0 bg-gray-500 bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-8 rounded-lg shadow-lg max-w-sm w-full">
            <h2 className="text-xl font-semibold mb-4">Xác Nhận Ứng Tuyển</h2>
            <p>Bạn có chắc chắn muốn ứng tuyển cho công việc này?</p>
            <div className="mt-4 flex justify-end gap-4">
              <button
                onClick={handleCancelApply}
                className="bg-gray-300 px-4 py-2 rounded-lg">
                Hủy
              </button>
              <button
                onClick={handleConfirmApply}
                className="bg-red-500 text-white px-4 py-2 rounded-lg">
                Xác Nhận
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default JobDetail;
