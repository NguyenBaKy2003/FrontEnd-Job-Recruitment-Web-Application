import { useState } from "react";
import axios from "axios";

const CreateJob = () => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    requirements: "",
    benefits: "",
    deadline: "",
    location: "",
    salary: "",
    type: "",
    category: { code: "", name: "" }, // Adjusted to be an object
    position: "",
    skills: "", // Consider changing this to an array if you want multiple skills
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;

    // Handle category separately
    if (name === "category") {
      setFormData((prevData) => ({
        ...prevData,
        category: { ...prevData.category, name: value }, // Assuming value is the category name
      }));
    } else {
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    // Check for duplicate job titles
    const isDuplicate = existingJobs.some(
      (job) => job.title.toLowerCase() === formData.title.toLowerCase()
    );

    if (isDuplicate) {
      setError("Công việc với tiêu đề này đã tồn tại.");
      setLoading(false);
      return;
    }

    // Basic validation
    if (
      !formData.title ||
      !formData.description ||
      !formData.requirements ||
      !formData.benefits ||
      !formData.deadline ||
      !formData.location ||
      !formData.salary ||
      !formData.type ||
      !formData.category.name ||
      !formData.position ||
      !formData.skills
    ) {
      setError("Vui lòng điền tất cả các trường bắt buộc.");
      setLoading(false);
      return;
    }

    // Log the form data before sending
    console.log("Form Data being sent:", formData);

    try {
      const response = await axios.post(
        "http://localhost:3001/api/jobs",
        formData,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );

      console.log("Job created successfully:", response.data);
      alert("Job posted successfully!");
      setFormData({
        title: "",
        description: "",
        requirements: "",
        benefits: "",
        deadline: "",
        location: "",
        salary: "",
        type: "",
        category: { code: "", name: "" },
        position: "",
        skills: "",
      });
    } catch (error) {
      console.error("Error creating job:", error);
      setError("Failed to post the job. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-md mt-10">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">
        Tạo công việc của nhà tuyển dụng
      </h2>

      {error && <div className="text-red-500 mb-4">{error}</div>}

      <form onSubmit={handleSubmit}>
        {/* Tiêu đề */}
        <div className="mb-4">
          <label
            htmlFor="title"
            className="block text-sm font-medium text-gray-700">
            Tiêu đề
          </label>
          <input
            type="text"
            id="title"
            name="title"
            value={formData.title}
            onChange={handleChange}
            placeholder="Nhập tiêu đề tin tuyển dụng"
            className="mt-1 block w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            required
          />
        </div>
        {/* Mô tả */}
        <div className="mb-4">
          <label
            htmlFor="description"
            className="block text-sm font-medium text-gray-700">
            Mô tả tuyển dụng
          </label>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            placeholder="Nhập mô tả cho tin tuyển dụng"
            className="mt-1 block w-full p-3 border border gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            rows="3"
            required></textarea>
        </div>
        {/* Yêu cầu */}
        <div className="mb-4">
          <label
            htmlFor="requirements"
            className="block text-sm font-medium text-gray-700">
            Yêu cầu tuyển dụng
          </label>
          <textarea
            id="requirements"
            name="requirements"
            value={formData.requirements}
            onChange={handleChange}
            placeholder="Nhập yêu cầu tuyển dụng"
            className="mt-1 block w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            rows="3"
            required></textarea>
        </div>
        {/* Quyền lợi */}
        <div className="mb-4">
          <label
            htmlFor="benefits"
            className="block text-sm font-medium text-gray-700">
            Quyền lợi
          </label>
          <textarea
            id="benefits"
            name="benefits"
            value={formData.benefits}
            onChange={handleChange}
            placeholder="Nhập quyền lợi cho ứng viên"
            className="mt-1 block w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            rows="3"
            required></textarea>
        </div>
        {/* Hạn ứng tuyển */}
        <div className="mb-4">
          <label
            htmlFor="deadline"
            className="block text-sm font-medium text-gray-700">
            Hạn ứng tuyển
          </label>
          <input
            type="date"
            id="deadline"
            name="deadline"
            value={formData.deadline}
            onChange={handleChange}
            className="mt-1 block w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            required
          />
        </div>
        {/* Địa điểm làm việc */}
        <div className="mb-4">
          <label
            htmlFor="location"
            className="block text-sm font-medium text-gray-700">
            Địa điểm làm việc
          </label>
          <select
            id="location"
            name="location"
            value={formData.location}
            onChange={handleChange}
            className="mt-1 block w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            required>
            <option value="">Chọn tỉnh/thành phố</option>
            <option value="Hà Nội">Hà Nội</option>
            <option value="TP. Hồ Chí Minh">TP. Hồ Chí Minh</option>
            <option value="Đà Nẵng">Đà Nẵng</option>
          </select>
        </div>
        {/* Mức lương */}
        <div className="mb-4">
          <label
            htmlFor="salary"
            className="block text-sm font-medium text-gray-700">
            Mức lương
          </label>
          <select
            id="salary"
            name="salary"
            value={formData.salary}
            onChange={handleChange}
            className="mt-1 block w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            required>
            <option value="Dưới 10 triệu">Dưới 10 triệu</option>
            <option value="10 - 20 triệu">10 - 20 triệu</option>
            <option value="20 - 30 triệu">20 - 30 triệu</option>
          </select>
        </div>
        {/* Phương thức làm việc */}
        <div className="mb-4">
          <label
            htmlFor="type"
            className="block text-sm font-medium text-gray-700">
            Phương thức làm việc
          </label>
          <select
            id="type"
            name="type"
            value={formData.type}
            onChange={handleChange}
            className="mt-1 block w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            required>
            <option value="Full time">Full time</option>
            <option value="Part time">Part time</option>
            <option value="Remote">Remote</option>
          </select>
        </div>
        {/* Danh mục */}

        <div className="mb-4">
          <label
            htmlFor="category"
            className="block text-sm font-medium text-gray-700">
            Danh mục
          </label>
          <select
            id="category"
            name="category"
            value={formData.category.name} // Accessing the name property
            onChange={handleChange}
            className="mt-1 block w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            required>
            <option value="">Chọn danh mục</option>
            <option value="Công nghệ thông tin">Công nghệ thông tin</option>
            <option value="Marketing">Marketing</option>
            <option value="Thiết kế">Thiết kế</option>
          </select>
        </div>
        {/* Vị trí */}
        <div className="mb-4">
          <label
            htmlFor="position"
            className="block text-sm font-medium text-gray-700">
            Vị trí
          </label>
          <select
            id="position"
            name="position"
            value={formData.position}
            onChange={handleChange}
            className="mt-1 block w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            required>
            <option value="">Chọn vị trí</option>
            <option value="Back-end">Back-end</option>
            <option value="Front-end">Front-end</option>
            <option value="Full-stack">Full-stack</option>
          </select>
        </div>
        {/* Kỹ năng */}
        <div className="mb-6">
          <label
            htmlFor="skills"
            className="block text-sm font-medium text-gray-700">
            Kỹ năng
          </label>
          <select
            id="skills"
            name="skills"
            value={formData.skills}
            onChange={handleChange}
            className="mt-1 block w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            required>
            <option value="">Chọn kỹ năng</option>
            <option value="Java">Java</option>
            <option value="Python">Python</option>
            <option value="ReactJS">ReactJS</option>
          </select>
        </div>
        {/* Button Tạo tin */}
        <button
          type="submit"
          className={`w-full bg-red-600 text-white py-3 rounded-md hover:bg-red-700 transition ${
            loading ? "opacity-50 cursor-not-allowed" : ""
          }`}
          disabled={loading} // Disable button while loading
        >
          {loading ? "Đang tạo..." : "TẠO TIN"}
        </button>
      </form>
    </div>
  );
};

export default CreateJob;
