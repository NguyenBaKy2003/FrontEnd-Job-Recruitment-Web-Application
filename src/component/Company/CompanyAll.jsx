// import React from "react";

import { Link } from "react-router-dom";
import Company from "../Home/Company";
function CompanyAll() {
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
  return (
    <div className="py-10 container mx-auto px-3">
      <h2 className="text-3xl font-bold text-center mb-6">
        Các Công Ty Tuyển Dụng Nổi Bật
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {companies.map((company) => (
          <Link key={company.id} to={`/company/${company.id}`}>
            <Company {...company} />
          </Link>
        ))}
      </div>
    </div>
  );
}

export default CompanyAll;
