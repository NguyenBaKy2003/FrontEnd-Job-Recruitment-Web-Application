// import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import ChoiseService from "../Service/ChoiseService";
function HomeEm() {
  const [fullName, setFullName] = useState("");
  const [workTitle, setWorkTitle] = useState("");
  const [workEmail, setWorkEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [companyLocation, setCompanyLocation] = useState("");
  const [websiteUrl, setWebsiteUrl] = useState("");
  const [skills, setSkills] = useState("");
  const [yearsOfExperience, setYearsOfExperience] = useState("");
  const [isAgreed, setIsAgreed] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log({
      fullName,
      workTitle,
      workEmail,
      phoneNumber,
      companyName,
      companyLocation,
      websiteUrl,
      skills,
      yearsOfExperience,
      isAgreed,
    });
  };
  return (
    <main>
      <div className="flex gap-6 flex-wrapflex flex-col lg:flex-row min-h-screen">
        <div className="w-full md:order-2 lg:w-1/2 flex justify-center items-center bg-gray-50">
          <img
            src="https://itviec.com/assets/employer_landing/hire-the-best-it-15-95d4b6df6293a405cd77c094b8c7eb5dcc99cf8711f5b47751c841cfa51023a0.png"
            alt=""
            className="w-7/12 sm:w-10/12 md:w-8/12"
          />
        </div>
        <div className="p-4 md:pl-9  md:order-1 lg:w-1/2 gap-4 flex flex-col justify-center items-center w-100">
          <h1 className="text-4xl font-serif ">
            Hire the best IT Professionals in Vietnam with TLJob
          </h1>
          <h3 className="text-2xl font-serif">
            With in-depth understanding in the IT sector and specialized skills,
            we can help you reach and hire the best IT candidates.
          </h3>
          <a href="#contact" className=" w-full">
            <button className="w-full text-white p-3 text-2xl md:w-2/5 bg-red-500 rounded-3xl">
              Contact Now
            </button>
          </a>
        </div>
      </div>
      <div className="bg-red-900 min-h-screen flex justify-center items-center py-10">
        <div className="bg-white w-full max-w-2xl p-8 rounded-lg shadow-lg">
          <h1 className="text-3xl font-bold text-center text-red-500 mb-6">
            Let’s find your IT Talents
          </h1>
          <p className="text-center text-gray-600 mb-4">
            Leave your contact so our Customer Love team can support you.
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Contact Information */}
            <div>
              <label
                htmlFor="fullName"
                className="block text-sm font-semibold text-gray-600">
                Full name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                required
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your full name"
              />
            </div>

            <div className="flex space-x-4">
              <div className="w-1/2">
                <label
                  htmlFor="workTitle"
                  className="block text-sm font-semibold text-gray-600">
                  Work title <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="workTitle"
                  name="workTitle"
                  value={workTitle}
                  onChange={(e) => setWorkTitle(e.target.value)}
                  required
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter your work title"
                />
              </div>
              <div className="w-1/2">
                <label
                  htmlFor="phoneNumber"
                  className="block text-sm font-semibold text-gray-600">
                  Phone number <span className="text-red-500">*</span>
                </label>
                <input
                  type="tel"
                  id="phoneNumber"
                  name="phoneNumber"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  required
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter your phone number"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="workEmail"
                className="block text-sm font-semibold text-gray-600">
                Work email <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                id="workEmail"
                name="workEmail"
                value={workEmail}
                onChange={(e) => setWorkEmail(e.target.value)}
                required
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your work email"
              />
            </div>

            {/* Company Information */}
            <div>
              <label
                htmlFor="companyName"
                className="block text-sm font-semibold text-gray-600">
                Company name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="companyName"
                name="companyName"
                value={companyName}
                onChange={(e) => setCompanyName(e.target.value)}
                required
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your company name"
              />
            </div>

            <div className="flex space-x-4">
              <div className="w-1/2">
                <label
                  htmlFor="companyLocation"
                  className="block text-sm font-semibold text-gray-600">
                  Company location
                </label>
                <input
                  type="text"
                  id="companyLocation"
                  name="companyLocation"
                  value={companyLocation}
                  onChange={(e) => setCompanyLocation(e.target.value)}
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter company location"
                />
              </div>
              <div className="w-1/2">
                <label
                  htmlFor="websiteUrl"
                  className="block text-sm font-semibold text-gray-600">
                  Website URL
                </label>
                <input
                  type="url"
                  id="websiteUrl"
                  name="websiteUrl"
                  value={websiteUrl}
                  onChange={(e) => setWebsiteUrl(e.target.value)}
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter website URL"
                />
              </div>
            </div>

            {/* Skills and Experience */}
            <div>
              <label
                htmlFor="skills"
                className="block text-sm font-semibold text-gray-600">
                Skills <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="skills"
                name="skills"
                value={skills}
                onChange={(e) => setSkills(e.target.value)}
                required
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your skills (comma separated)"
              />
            </div>

            <div>
              <label
                htmlFor="yearsOfExperience"
                className="block text-sm font-semibold text-gray-600">
                Years of Experience <span className="text-red-500">*</span>
              </label>
              <input
                type="number"
                id="yearsOfExperience"
                name="yearsOfExperience"
                value={yearsOfExperience}
                onChange={(e) => setYearsOfExperience(e.target.value)}
                required
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter years of experience"
              />
            </div>

            {/* Terms and Conditions */}
            <div className="flex items-center">
              <input
                type="checkbox"
                id="agree"
                name="agree"
                checked={isAgreed}
                onChange={() => setIsAgreed(!isAgreed)}
                required
                className="mr-2"
              />
              <label htmlFor="agree" className="text-sm text-gray-600">
                I have read and agree to{" "}
                <Link to="/" className="text-blue-500">
                  Terms & Conditions
                </Link>{" "}
                and{" "}
                <Link to="/" className="text-blue-500">
                  Privacy Policy
                </Link>
                .
              </label>
            </div>

            {/* Submit Button */}
            <div className="mt-6">
              <button
                type="submit"
                className="w-full bg-red-500 text-white py-2 rounded-lg hover:bg-red-600 focus:outline-none">
                Contact me
              </button>
            </div>
          </form>

          <div className="mt-6 text-center">
            <p className="text-sm text-gray-600">
              Already have an Employer account?{" "}
              <Link
                to="/employes/loginEm"
                className="text-blue-500 hover:underline">
                Sign in
              </Link>
            </p>
          </div>
        </div>
      </div>
      <div className="">
        <ChoiseService></ChoiseService>
      </div>
    </main>
  );
}

export default HomeEm;
