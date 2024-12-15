// import React from "react";
import CompanyAll from "../Company/CompanyAll";
import Findjob from "../FindJob/Findjob"; // import JobCard from "./JobCard";

// Danh sách công ty
// Danh sách công việc

function Home() {
  return (
    <>
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
            <div className="bg-white shadow-lg rounded-md flex  ">
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
          <div className="">
            <CompanyAll></CompanyAll>
          </div>
        </div>
        {/* Danh sách công việc */}
      </div>
      <div className="">
        <Findjob></Findjob>
      </div>
    </>
  );
}

export default Home;
