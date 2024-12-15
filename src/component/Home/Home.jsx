import axios from "axios";
import { useEffect, useState } from "react";
import Company from "./Company"; // Assuming you have a Company component to display each company
import JobCard from "./JobCard"; // Assuming you have a JobCard component to display each job

function Home() {
  // State to hold the company data
  const [companies, setCompanies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // State to hold the job data
  const [jobs, setJobs] = useState([]);
  const [jobLoading, setJobLoading] = useState(true);
  const [jobError, setJobError] = useState(null);

  // Fetch companies from the API when the component mounts
  useEffect(() => {
    const fetchCompanies = async () => {
      try {
        // Fetch company data from your API
        const response = await axios.get(
          "http://localhost:3001/api/employer/employers"
        );
        setCompanies(response.data); // Set companies data in the state
      } catch (err) {
        setError("Failed to fetch companies. Please try again later.");
        console.error("Error fetching companies:", err);
      } finally {
        setLoading(false); // Set loading to false once the API call is complete
      }
    };

    const fetchJobs = async () => {
      try {
        // Fetch job data from your API
        const response = await axios.get(
          "http://localhost:3001/api/jobs/jobsall"
        );
        setJobs(response.data); // Set jobs data in the state
      } catch (err) {
        setJobError("Failed to fetch jobs. Please try again later.");
        console.error("Error fetching jobs:", err);
      } finally {
        setJobLoading(false); // Set loading to false once the API call is complete
      }
    };

    fetchCompanies();
    fetchJobs();
  }, []);

  if (loading || jobLoading) {
    return <div>Loading...</div>;
  }

  if (error || jobError) {
    return <div>{error || jobError}</div>;
  }

  // Show only the first 6 companies
  const displayedCompanies = companies.slice(0, 6);
  // Limit to the first 6 jobs
  const displayedJobs = jobs.slice(0, 6);

  return (
    <div>
      <div className="mx-auto w-full max-w-7xl">
        {/* Header Section */}
        <div className="bg-blue-50 relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 flex flex-col md:flex-row items-center">
            <div className="text-center md:text-left md:w-1/2">
              <h1 className="text-3xl sm:text-5xl font-bold text-gray-800 leading-tight">
                Tìm công việc phù hợp nhất với bạn <br />
                <span className="text-blue-600 ">Bắt đầu thôi!</span>
              </h1>
            </div>
            <div className="mt-8 md:mt-0 md:w-1/2 flex justify-center">
              <img
                src="https://www.usnews.com/cmsmedia/4c/0c/e2de7021426d89255dacca46ca08/170530-businessman-stock.jpg"
                alt="Person with phone"
                className="w-100 h-auto"
              />
            </div>
          </div>

          {/* Search Bar */}
          <div className="relative mb-12 mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <div className="bg-white shadow-lg rounded-md flex">
              <input
                type="text"
                placeholder="Job Title or keyword"
                className="w-1/2 px-4 py-3 border-r border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="text"
                placeholder="Location BD"
                className="w-1/3 px-4 py-3 border-none focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button className="w-1/6 bg-orange-500 text-white font-bold py-3 rounded-r-md hover:bg-orange-600">
                Find Job
              </button>
            </div>
          </div>
        </div>

        {/* Danh sách công ty */}
        <div className="py-10 px-3">
          <h2 className="text-3xl font-bold text-center mb-6">
            Các Công Ty Tuyển Dụng Nổi Bật
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {displayedCompanies.map((company) => (
              <Company key={company.id} {...company} />
            ))}
          </div>
        </div>

        {/* Danh sách công việc */}
        <div className="py-10 px-3">
          <h2 className="text-3xl font-bold text-center mb-6">
            Các Công Việc Mới Nổi Bật
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {displayedJobs.map((job) => (
              <JobCard key={job.id} {...job} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
