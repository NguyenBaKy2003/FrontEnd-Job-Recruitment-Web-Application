// import React from "react";
import { Link } from "react-router-dom";

const companies = [
  {
    id: 1,
    name: "Công ty FPT Software",
    location: "Hà Nội, Việt Nam",
    jobs: "30 công việc",
    logo: "https://th.bing.com/th/id/OIP.mLTCQL88yAT8z5EiSsyWswHaFQ?rs=1&pid=ImgDetMain",
  },
  {
    id: 2,
    name: "Công ty VinGroup",
    location: "TP. Hồ Chí Minh, Việt Nam",
    jobs: "50 công việc",
    logo: "https://th.bing.com/th/id/OIP.YoRFkWJUuc2WMubY7hEXZAHaD2?rs=1&pid=ImgDetMain",
  },
  {
    id: 3,
    name: "Công ty Tiki",
    location: "Đà Nẵng, Việt Nam",
    jobs: "20 công việc",
    logo: "https://www.vietnamworks.com/_next/image?url=https%3A%2F%2Fimages.vietnamworks.com%2Fpictureofcompany%2F3e%2Fcompany-info-cover-picture-url-275978-1692256970.png&w=3840&q=75",
  },
];

function Home() {
  return (
    <div className="mx-auto w-full max-w-7xl">
      <div className="bg-blue-50 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 flex flex-col md:flex-row items-center">
          {/* Left Section */}
          <div className="text-center md:text-left md:w-1/2">
            <h1 className="text-3xl sm:text-5xl font-bold text-gray-800 leading-tight">
              Find the most exciting <br />
              <span className="text-blue-600">startup jobs</span>
            </h1>
          </div>

          {/* Right Section (Image) */}
          <div className="mt-8 md:mt-0 md:w-1/2 flex justify-center">
            <img
              src="https://www.usnews.com/cmsmedia/4c/0c/e2de7021426d89255dacca46ca08/170530-businessman-stock.jpg"
              alt="Person with phone"
              className="w-100 h-auto"
            />
          </div>
        </div>

        {/* Search Bar */}
        <div className="relative  mt-8 mx-auto max-w-4xl my-6 px-4 sm:px-6 lg:px-8">
          <div className="bg-white shadow-lg rounded-md flex">
            <input
              type="text"
              placeholder="Job Title or keyword"
              className="w-1/2 px-4  py-3 border-r border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="text"
              placeholder="Location BD"
              className="w-1/3 px-4 py-3 outline-none border-none border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {/* Search button */}
            <button className="w-1/6 bg-orange-500 text-white font-bold py-3 rounded-r-md hover:bg-orange-600">
              Find Job
            </button>
          </div>
        </div>
      </div>

      {/* Danh sách công ty */}
      <div className="py-10">
        <h2 className="text-3xl font-bold text-center mb-6">
          Các Công Ty Tuyển Dụng Nổi Bật
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {companies.map((company) => (
            <div
              key={company.id}
              className="border rounded-lg shadow-md p-4 hover:shadow-lg">
              <img
                src={company.logo}
                alt={company.name}
                className="w-full h-40 object-cover mb-4"
              />
              <h3 className="text-xl font-bold">{company.name}</h3>
              <p className="text-gray-600">{company.location}</p>
              <p className="text-orange-500 font-medium">{company.jobs}</p>
              <Link
                to={`/company/${company.id}`}
                className="block mt-4 text-center bg-orange-500 text-white py-2 rounded-md hover:bg-orange-600">
                Xem chi tiết
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;
