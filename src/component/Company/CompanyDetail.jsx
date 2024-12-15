import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

const CompanyDetail = () => {
  const { companyId } = useParams(); // Lấy tham số companyId từ URL
  const [company, setCompany] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCompanyData = async () => {
      try {
        const response = await fetch(
          `http://localhost:3001/api/employer/employers/${companyId}`
        );
        if (!response.ok) {
          throw new Error("Failed to fetch company data");
        }
        const data = await response.json();
        setCompany(data); // Lưu dữ liệu trả về
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false); // Kết thúc trạng thái loading
      }
    };

    fetchCompanyData();
  }, [companyId]); // Thêm companyId vào dependency array để gọi lại khi companyId thay đổi

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!company) return <div>Công ty không tồn tại!</div>;

  return (
    <>
      {/* Header */}
      <header className="bg-gray-100 p-6 shadow-md text-center">
        <img
          src="https://api.logo.com/api/v2/images?logo=lg_lYJ7atQQFci30xZlBo&format=webp&width=2000&height=1500&fit=contain&quality=100&margins=500&u=2024-11-22T11%3A02%3A05.864Z"
          alt={company.company_name}
          className="max-md:w-1/2 w-1/4 mx-auto mb-4 object-contain rounded-md"
        />
        <h1 className="text-3xl font-bold">{company.company_name}</h1>
        <p className="text-gray-600">{company.company_address}</p>
      </header>

      <main className="p-6 max-w-screen-xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 w-full">
          <div className="lg:col-span-9 bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold">Về chúng tôi</h2>
            <p className="mt-4 text-gray-700">{company.company_introduce}</p>

            <div className="mt-6">
              <h3 className="text-xl font-medium">Sứ mệnh và Tầm nhìn</h3>
              <p className="mt-4 text-gray-700">{company.mission}</p>
            </div>
            <div className="mt-6">
              <h3 className="text-xl font-medium">Giá trị cốt lõi</h3>
              <p className="mt-4 text-gray-700">{company.coreValues}</p>
            </div>
            {/* <h3 className="text-xl font-semibold mt-6">Chế độ đãi ngộ</h3>
            <ul className="mt-4 list-disc pl-6">
              {company.benefits.map((benefit, index) => (
                <li key={index} className="text-gray-700">
                  {benefit}
                </li>
              ))}
            </ul> */}
            {/* <h3 className="text-xl font-medium mt-6">Vị trí đang tuyển</h3>
            <ul className="mt-4 list-disc pl-6">
              {company.jobs.map((job) => (
                <li key={job.id} className="text-gray-700">
                  {job.title}
                </li>
              ))}
            </ul> */}
          </div>

          <div className="lg:col-span-3 flex  flex-col gap-5 ">
            <div className="max-h-min bg-gray-50 p-6 rounded-lg shadow-md">
              <h2 className="text-2xl font-semibold">Thông tin chung</h2>
              <ul className="mt-4 space-y-3">
                <li>
                  <strong>Năm thành lập:</strong> {company.founded}
                </li>
                {/* <li>
                  <strong>Số lượng nhân viên:</strong>{" "}
                  {company.employees.toLocaleString()}
                </li> */}
                {/* <li>
                  <strong>Lĩnh vực:</strong> {company.industries.join(", ")}
                </li> */}
                <li>
                  <strong>Trang web:</strong>{" "}
                  <a
                    href={company.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 hover:underline">
                    {company.website}
                  </a>
                </li>
              </ul>
            </div>
            <div className="max-h-min bg-gray-50 p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold">Địa Chỉ</h3>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default CompanyDetail;
