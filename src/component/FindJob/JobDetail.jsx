import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

const JobDetail = () => {
  const { jobId } = useParams(); // Get jobId from URL params
  const [job, setJob] = useState(null); // State to hold job details
  const [loading, setLoading] = useState(true); // Loading state
  const [error, setError] = useState(""); // Error state

  useEffect(() => {
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
      {/* Header */}
      <div className="bg-white shadow-lg rounded-lg p-6 mb-6">
        <div className="flex justify-between items-start">
          <div className="w-1/5">
            <img
              src={
                "https://scontent.fvii1-1.fna.fbcdn.net/v/t39.30808-1/344542573_1016776169700186_59734981782926054_n.jpg?stp=dst-jpg_s200x200_tt6&_nc_cat=102&ccb=1-7&_nc_sid=0ecb9b&_nc_eui2=AeHE3pzgZ09WIumVk2SaUlzW8AfSrMmpN6nwB9Ksyak3qRO3GRAQCJN5k0u9DAbLgHWd1mkLGJGTGZQ8xITqFMmC&_nc_ohc=sEnl92uUwOgQ7kNvgE2c5DV&_nc_zt=24&_nc_ht=scontent.fvii1-1.fna&_nc_gid=A95XAKmBPy0c0eKtzHygI3i&oh=00_AYApN3FuvTyXjMsUvXubgCRF8bv4QoZk6s8M9-kHT8ZfsQ&oe=6765A0A6"
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
                Salary: {new Intl.NumberFormat().format(job.salary)} VND
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
          <Link to={`/findjob/${jobId}/applynow`}>
            <button className="bg-red-500 text-white px-6 py-2 rounded-lg text-sm font-semibold">
              Apply now
            </button>
          </Link>
        </div>
      </div>

      {/* Job Description */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6  lg:gap-8 w-full">
        <div className="lg:col-span-9 flex flex-col gap-5 rounded-lg shadow-lg">
          <div className="bg-white shadow-lg rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-4">Job description</h2>
            <p className="text-gray-700">{job.description}</p>
          </div>
          <div className="bg-white shadow-lg rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-4">Benifit</h2>
            <p className="text-gray-700">{job.benefit}</p>
          </div>
          <div className="bg-white shadow-lg rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-4">Requirements</h2>
            <p className="text-gray-700">{job.requirements}</p>
          </div>
        </div>

        {/* Company Info */}
        <div className="lg:col-span-3 flex flex-col gap-5">
          <div className="bg-white shadow-lg rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-4">{job.employer}</h2>
            <ul className="space-y-2 text-gray-700">
              <li>
                <strong>Category:</strong> {job.category}
              </li>
              <li>
                <strong>Job Type:</strong> {job.type}
              </li>
              <li>
                <strong>Location:</strong> {job.location}
              </li>
              <li>
                <strong>Position:</strong> {job.position}
              </li>
              <li>
                <strong>Application Deadline:</strong>{" "}
                {job.application_deadline}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobDetail;
