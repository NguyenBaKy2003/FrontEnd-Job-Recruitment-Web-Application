import { useState } from "react";

const JobList = () => {
  // State to hold the list of jobs
  const [jobs, setJobs] = useState([
    {
      id: 1,
      title: "Frontend Developer",
      company: "Tech Solutions",
      location: "Hà Nội",
      salary: "$1200 - $1500",
      postedTime: "2 ngày trước",
    },
    {
      id: 2,
      title: "Backend Developer",
      company: "Code Innovators",
      location: "TP. Hồ Chí Minh",
      salary: "$1500 - $2000",
      postedTime: "5 ngày trước",
    },
    {
      id: 3,
      title: "UI/UX Designer",
      company: "Creative Studio",
      location: "Đà Nẵng",
      salary: "$800 - $1000",
      postedTime: "1 tuần trước",
    },
    {
      id: 4,
      title: "Data Scientist",
      company: "DataWorld",
      location: "Hải Phòng",
      salary: "$2000 - $2500",
      postedTime: "3 ngày trước",
    },
  ]);

  // Function to handle job deletion
  const handleDelete = (jobId) => {
    setJobs(jobs.filter((job) => job.id !== jobId));
  };

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
                {job.company} - {job.location}
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
