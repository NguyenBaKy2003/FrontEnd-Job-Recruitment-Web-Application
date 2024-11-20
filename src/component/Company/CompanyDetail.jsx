// import React from "react";
import { useParams } from "react-router-dom";

const CompanyDetail = () => {
  const { companyId } = useParams();
  // Lấy ID công ty từ URL

  // Giả lập dữ liệu chi tiết công ty
  const companies = [
    {
      id: "1",
      name: "Công ty FPT Software",
      location: "Hà Nội, Việt Nam",
      jobs: ["Frontend Developer", "Backend Developer"],
      description: "Công ty hàng đầu về phần mềm tại Việt Nam.",
      logo: "https://th.bing.com/th/id/OIP.mLTCQL88yAT8z5EiSsyWswHaFQ?rs=1&pid=ImgDetMain",
    },
    {
      id: "2",
      name: "Công ty VinGroup",
      location: "TP. Hồ Chí Minh, Việt Nam",
      jobs: ["Project Manager", "Data Scientist"],
      description: "Tập đoàn đa ngành lớn nhất Việt Nam.",
      logo: "https://th.bing.com/th/id/OIP.YoRFkWJUuc2WMubY7hEXZAHaD2?rs=1&pid=ImgDetMain",
    },
    {
      id: "3",
      name: "Công ty Tiki",
      location: "Đà Nẵng, Việt Nam",
      jobs: ["Marketing Specialist", "UI/UX Designer"],
      description: "Nền tảng thương mại điện tử hàng đầu Việt Nam.",
      logo: "https://www.vietnamworks.com/_next/image?url=https%3A%2F%2Fimages.vietnamworks.com%2Fpictureofcompany%2F3e%2Fcompany-info-cover-picture-url-275978-1692256970.png&w=3840&q=75",
    },
  ];

  const company = companies.find((c) => c.id === companyId); // Tìm công ty theo ID

  if (!company) {
    return <p>Công ty không tồn tại!</p>;
  }

  return (
    <div className="p-4">
      <img src={company.logo} alt={company.name} className="w-40 h-40 mb-4" />
      <h1 className="text-3xl font-bold">{company.name}</h1>
      <p className="text-gray-600">{company.location}</p>
      <p className="mt-4">{company.description}</p>
      <h2 className="text-2xl font-semibold mt-6">Open Positions</h2>
      <ul className="list-disc pl-5">
        {company.jobs.map((job) => (
          <li key={job.id} className="mt-1">
            {job}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CompanyDetail;
