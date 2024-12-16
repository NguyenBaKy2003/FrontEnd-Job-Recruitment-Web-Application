import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";

const CompanyDetail = () => {
  const { companyId } = useParams(); // Get companyId from URL
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
        setCompany(data); // Save the fetched data
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false); // End loading state
      }
    };

    fetchCompanyData();
  }, [companyId]); // Trigger on companyId change

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!company) return <div>Company not found!</div>;

  // Check if there are jobs
  const jobs = company.Jobs || [];

  // Safely access category and benefit, with fallback
  const firstJob = jobs[0] || null;
  const categoryName = firstJob?.Category?.name || "No category available";
  const benefit = firstJob?.benefit || "No benefits available";

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
          <div className="lg:col-span-9 bg-white p-6  h-max rounded-lg shadow-lg">
            <div className="mt-6">
              <h2 className="text-2xl font-semibold">Giới Thiệu </h2>
              <p className="mt-4 text-gray-700">{company.company_introduce}</p>
            </div>
            <div className="mt-6">
              <h2 className="text-2xl font-semibold">Thể Loại Công Ty</h2>
              <p className="mt-4 text-gray-700">{categoryName}</p>
            </div>
            <div className="mt-6">
              <h2 className="text-2xl font-semibold">Quyền Lợi</h2>
              <p className="mt-4 text-gray-700">{benefit}</p>
            </div>
          </div>

          <div className="lg:col-span-3 flex flex-col gap-5">
            <div className="max-h-min bg-gray-50 p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold">Địa Chỉ</h3>
              <p>{company.company_address}</p>
            </div>
            <div className="max-h-min bg-gray-50 p-6 rounded-lg shadow-md">
              {jobs.length === 0 ? (
                <div className="mt-6 text-gray-600">
                  <p>No jobs available for this company.</p>
                </div>
              ) : (
                <div className="mt-6">
                  <h2 className="text-2xl font-semibold">Công Việc Đang Có</h2>
                  <ul className="mt-4 space-y-4">
                    {jobs.map((job) => (
                      <li
                        key={job.id}
                        className="border p-4 rounded-lg shadow-sm">
                        <Link
                          to={`/findjob/${job.id}`} // Use relative path for routing
                          className="text-xl font-bold hover:underline">
                          {job.title}
                        </Link>
                        <p className="text-gray-600">{job.description}</p>
                        <p className="text-gray-500">
                          Địa Điểm: {job.location}
                        </p>
                        <p className="text-gray-500">
                          Mức Lương:{" "}
                          {new Intl.NumberFormat().format(job.salary)} VND
                        </p>
                        <p className="text-gray-500">
                          Hình Thức Làm Việc: {job.type}
                        </p>
                        <p className="text-gray-500">
                          Hạn Ứng Tuyển:{" "}
                          {new Date(
                            job.application_deadline
                          ).toLocaleDateString()}
                        </p>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default CompanyDetail;
