import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Company from "../Home/Company";

function CompanyAll() {
  const [companies, setCompanies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCompanies = async () => {
      try {
        const response = await fetch(
          "http://localhost:3001/api/employer/employers"
        );
        if (!response.ok) {
          throw new Error("Failed to fetch companies");
        }
        const data = await response.json();
        setCompanies(data); // Assuming the API returns an array of company objects
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchCompanies();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-40">
        <div className="loader" />
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center text-red-500">
        <p>Error: {error}</p>
        <button
          onClick={() => window.location.reload()}
          className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg">
          Thử lại
        </button>
      </div>
    );
  }

  if (companies.length === 0) {
    return (
      <div className="text-center text-gray-500">Không có công ty nào.</div>
    );
  }

  return (
    <div className="py-10 container mx-auto px-3">
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
