import { useState } from "react";
import { Link } from "react-router-dom";

const PackagePayment = () => {
  const [selectedPlan, setSelectedPlan] = useState(null);

  const plans = [
    {
      id: "free",
      name: "Free Plan",
      price: "Free",
      duration: "1 Month",
      features: ["Basic features", "1-month access", "No payment required"],
      jobListings: 10,
    },
    {
      id: "1-month",
      name: "1 Month Plan",
      price: "$9.99",
      duration: "1 Month",
      features: [
        "Access all features",
        "1-month subscription",
        "Full customer support",
      ],
      jobListings: 50,
    },
    {
      id: "3-month",
      name: "3 Month Plan",
      price: "$24.99",
      duration: "3 Months",
      features: [
        "Access all features",
        "3-month subscription",
        "Priority customer support",
      ],
      jobListings: 150,
    },
  ];

  const handlePlanSelection = (planId) => {
    const selected = plans.find((plan) => plan.id === planId);
    setSelectedPlan(selected);
  };

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
                  {plan.name}
                </h2>
                <p className="text-center text-gray-600 mt-2">
                  {plan.price} for {plan.duration}
                </p>
                <p className="text-center text-gray-600 mt-2">
                  <strong>{plan.jobListings}</strong> Job Listings Available
                </p>
                <ul className="list-disc pl-5 mt-4 text-gray-600">
                  {plan.features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
              </div>
              <div className="mt-6">
                <button
                  onClick={() => handlePlanSelection(plan.id)}
                  className="w-full  bg-red-500 text-white py-2 rounded-lg hover:bg-red-600 focus:outline-none">
                  Select {plan.name}
                </button>
              </div>
            </div>
          ))}
        </div>

        {selectedPlan && (
          <div className="mt-8 text-center">
            <p className="text-xl font-semibold text-gray-700">
              You selected the{" "}
              <span className="text-red-500">{selectedPlan.name}</span> plan
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
