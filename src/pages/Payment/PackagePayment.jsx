import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const PackagePayment = () => {
  const [plans, setPlans] = useState([]);
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchPlans = async () => {
      setLoading(true);
      setError("");
      try {
        const response = await axios.get("http://localhost:3001/api/service");
        setPlans(response.data);
      } catch (error) {
        console.error(error);
        setError("Failed to fetch plans. Please try again.");
      } finally {
        setLoading(false);
      }
    };

    fetchPlans();
  }, []);

  const handlePlanSelection = (planId) => {
    const selected = plans.find((plan) => plan.id === planId);
    setSelectedPlan(selected);
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <p className="text-gray-700">Loading plans...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <p className="text-red-500">{error}</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center py-10">
      <div className="bg-white w-full max-w-3xl p-8 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold text-center text-red-500 mb-6">
          Choose Your Subscription Plan
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {plans.map((plan) => (
            <div
              key={plan.id}
              className={`${
                selectedPlan?.id === plan.id
                  ? "border-2 border-red-500"
                  : "border"
              } p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-all`}>
              <div className="lg:h-3/4">
                <h2 className="text-xl font-semibold text-center text-gray-700">
                  {plan.service_name}
                </h2>
                <p className="text-center text-gray-600 mt-2">
                  ${plan.price} {plan.duration || "per month"}
                </p>
                <p className="text-center text-gray-600 mt-2">
                  <strong>{plan.jobPostNumber || 0}</strong> Job Listings
                  Available
                </p>
                <ul className="list-disc pl-5 mt-4 text-gray-600">
                  {/* If features are available in the API, render them here */}
                  <li>Status: {plan.status}</li>
                </ul>
              </div>
              <div className="mt-6">
                <button
                  onClick={() => handlePlanSelection(plan.id)}
                  className="w-full bg-red-500 text-white py-2 rounded-lg hover:bg-red-600 focus:outline-none">
                  Select {plan.service_name}
                </button>
              </div>
            </div>
          ))}
        </div>

        {selectedPlan && (
          <div className="mt-8 text-center">
            <p className="text-xl font-semibold text-gray-700">
              You selected the{" "}
              <span className="text-red-500">{selectedPlan.service_name}</span>{" "}
              plan
            </p>
            <Link
              to={`/employes/payment/${selectedPlan.id}`}
              state={{ selectedPlan }}
              className="mt-4 inline-block bg-blue-500 text-white py-2 px-6 rounded-lg hover:bg-blue-600 focus:outline-none">
              Proceed to Checkout
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default PackagePayment;
