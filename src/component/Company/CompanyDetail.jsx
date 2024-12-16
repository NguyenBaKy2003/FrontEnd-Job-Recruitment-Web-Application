import { useParams } from "react-router-dom";
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
  const firstJob = company.Jobs && company.Jobs[0] ? company.Jobs[0] : null;

  // Safely access category and benefit, with fallback
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
          <div className="lg:col-span-9 bg-white p-6 rounded-lg shadow-lg">
            <div className="mt-6">
              <h2 className="text-2xl font-semibold">About Us</h2>
              <p className="mt-4 text-gray-700">{company.company_introduce}</p>
            </div>
            <div className="mt-6">
              <h2 className="text-2xl font-semibold">Category</h2>
              <p className="mt-4 text-gray-700">{categoryName}</p>
            </div>
            <div className="mt-6">
              <h2 className="text-2xl font-semibold">Benefits</h2>
              <p className="mt-4 text-gray-700">{benefit}</p>
            </div>
            {company.Jobs.length === 0 && (
              <div className="mt-6 text-gray-600">
                <p>No jobs available for this company.</p>
              </div>
            )}
          </div>

          <div className="lg:col-span-3 flex flex-col gap-5">
            <div className="max-h-min bg-gray-50 p-6 rounded-lg shadow-md">
              <h2 className="text-2xl font-semibold">General Information</h2>
              <ul className="mt-4 space-y-3">
                <li>
                  <strong>Founded Year:</strong> {company.founded}
                </li>
                <li>
                  <strong>Website:</strong>{" "}
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
              <h3 className="text-2xl font-semibold">Address</h3>
              <p>{company.company_address}</p>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default CompanyDetail;
