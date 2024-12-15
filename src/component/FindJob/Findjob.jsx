import { useState, useEffect } from "react";
import axios from "axios";
import JobCard from "../Home/JobCard";
function Findjob() {
  const [jobs, setJobs] = useState([]); // State to hold the fetched jobs
  const [loading, setLoading] = useState(true); // State to manage loading state
  const [error, setError] = useState(null); // State to manage any errors

  // Function to clear the filters
  const clearFilters = () => {
    document
      .querySelectorAll("select")
      .forEach((select) => (select.selectedIndex = 0));
  };

  // Fetch jobs from the API
  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const response = await axios.get(
          "http://localhost:3001/api/jobs/jobsall"
        );
        setJobs(response.data); // Set the fetched jobs in state
      } catch (err) {
        setError("Failed to fetch jobs. Please try again later.");
        console.error("Error fetching jobs:", err);
      } finally {
        setLoading(false); // Set loading to false once the API call is complete
      }
    };

    fetchJobs();
  }, []); // Empty dependency array to run the effect once on mount

  if (loading) {
    return <div>Loading jobs...</div>; // Show loading message while fetching
  }

  if (error) {
    return <div>{error}</div>; // Show error message if fetching fails
  }

  return (
    <div className=" py-0 bg-white">
      <div className=" content-baseline py-16 m-auto px-3 text-gray-600 md:px-16 xl:px-64 bg-orange-300 ">
        <h1 className=" text-3xl text-black/100 mb-5 font-medium ">Tìm Kiếm</h1>
        <form action="" className="flex flex-col gap-6">
          <div className="w-full gap-3 flex">
            <input
              type="text"
              className="w-full rounded-xl max-sm:text-sm max-sm:px-3 p-4 outline-none"
              placeholder="Tìm kiếm theo các Kỹ Năng, Vị Trí, Công Ty..."
            />
            <button className="w-2/6 bg-orange-500 rounded-xl text-white font-bold py-3 max-sm:text-sm max-sm:px-1 rounded-r-md hover:bg-orange-600 ">
              Tìm kiếm
            </button>
          </div>

          <div className="flex w-full gap-3 justify-between flex-row ">
            <select className="w-1/4 outline-none " name="filter1">
              <option value="">Tất cả địa điểm</option>
              <option value="HCM">Ho Chi Minh</option>
              <option value="HN">Ha Noi</option>
              <option value="DN">Da Nang</option>
            </select>
            <select className="w-1/4 outline-none " name="filter2">
              <option value="">Tất cả cấp bậc</option>
              <option value="junior">Junior</option>
              <option value="mid">Middle</option>
              <option value="senior">Senior</option>
            </select>
            <select className="w-1/4 outline-none " name="filter3">
              <option value="">Tất cả các loại công ty</option>
              <option value="corporation">Corporation</option>
              <option value="startup">Startup</option>
              <option value="ngo">NGO</option>
            </select>
            <select className="w-1/4 outline-none " name="filter4">
              <option value="">Tất cả các loại hợp đồng</option>
              <option value="fulltime">Full-time</option>
              <option value="parttime">Part-time</option>
              <option value="freelance">Freelance</option>
            </select>

            <button
              type="button"
              className="bg-red-500 w-1/5 hover:bg-orange-400 duration-150 hover:shadow-lg shadow-lg-gray text-white rounded-sm max-md:py-3 py-2 max-md:px-2 max-md:text-sm"
              onClick={clearFilters}>
              Xóa bỏ lọc
            </button>
          </div>
        </form>
      </div>

      <div className="p-4 container my-12 mx-auto">
        <h2 className="text-3xl font-bold text-center mb-6">
          <span>{jobs.length}</span> <span>Công việc mới Nổi Bật</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {jobs.map((job) => (
            <JobCard key={job.id} {...job} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Findjob;
