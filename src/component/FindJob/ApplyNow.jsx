import { useState } from "react";

const ApplyNow = () => {
  const [applicantName, setApplicantName] = useState("");
  const [applicantEmail, setApplicantEmail] = useState("");
  // const [resume, setResume] = useState(null);
  const [coverLetter, setCoverLetter] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage("Application submitted successfully!");
    // Reset form fields
    setApplicantName("");
    setApplicantEmail("");
    // setResume(null);
    setCoverLetter("");
  };

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center py-10">
      <div className="bg-white w-full max-w-lg p-8 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold text-center text-orange-600 mb-6">
          Apply for the Job
        </h1>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label
              htmlFor="applicantName"
              className="block text-sm font-semibold text-gray-600">
              Full Name
            </label>
            <input
              type="text"
              id="applicantName"
              value={applicantName}
              onChange={(e) => setApplicantName(e.target.value)}
              required
              className="w-full mt-2 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your full name"
            />
          </div>

          <div>
            <label
              htmlFor="applicantEmail"
              className="block text-sm font-semibold text-gray-600">
              Email Address
            </label>
            <input
              type="email"
              id="applicantEmail"
              value={applicantEmail}
              onChange={(e) => setApplicantEmail(e.target.value)}
              required
              className="w-full mt-2 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your email address"
            />
          </div>

          <div>
            <label
              htmlFor="resume"
              className="block text-sm font-semibold text-gray-600">
              Your CV
            </label>
            <input
              type="file"
              id="resume"
              accept=".pdf,.doc,.docx"
              // onChange={(e) => setResume(e.target.files[0])}
              required
              className="w-full mt-2 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label
              htmlFor="coverLetter"
              className="block text-sm font-semibold text-gray-600">
              Cover Letter
            </label>
            <textarea
              id="coverLetter"
              value={coverLetter}
              onChange={(e) => setCoverLetter(e.target.value)}
              required
              rows="4"
              className="w-full mt-2 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Write your cover letter"
            />
          </div>

          <div className="mt-6">
            <button
              type="submit"
              className="w-full bg-orange-600 text-white py-2 rounded-lg hover:bg-orange-700 focus:outline-none">
              Submit Application
            </button>
          </div>
        </form>

        {message && (
          <div className="mt-6 text-center text-green-600 font-semibold">
            <p>{message}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ApplyNow;
