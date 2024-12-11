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
    workingMethod: "",
    category: "",
    position: "",
    skills: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Make API request to create job
      const response = await axios.post(
        "http://localhost:3001/api/v1/jobs/addjob",
        formData,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`, // If you're using authentication
          },
        }
      );

      console.log("Job created successfully:", response.data);
      alert("Job posted successfully!");
    } catch (error) {
      console.error("Error creating job:", error);
      alert("Failed to post the job.");
    }
  };

  return (
    <div className="max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-md mt-10">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">
        Tạo công việc của nhà tuyển dụng
      </h2>

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
            className="mt-1 block w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            rows="3"></textarea>
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
            rows="3"></textarea>
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
            rows="3"></textarea>
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
            className="mt-1 block w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500">
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
            className="mt-1 block w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500">
            <option value="Dưới 10 triệu">Dưới 10 triệu</option>
            <option value="10 - 20 triệu">10 - 20 triệu</option>
            <option value="20 - 30 triệu">20 - 30 triệu</option>
          </select>
        </div>

        {/* Phương thức làm việc */}
        <div className="mb-4">
          <label
            htmlFor="workingMethod"
            className="block text-sm font-medium text-gray-700">
            Phương thức làm việc
          </label>
          <select
            id="workingMethod"
            name="workingMethod"
            value={formData.workingMethod}
            onChange={handleChange}
            className="mt-1 block w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500">
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
            value={formData.category}
            onChange={handleChange}
            className="mt-1 block w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500">
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
            className="mt-1 block w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500">
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
            className="mt-1 block w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500">
            <option value="Java">Java</option>
            <option value="Python">Python</option>
            <option value="ReactJS">ReactJS</option>
          </select>
        </div>

        {/* Button Tạo tin */}
        <button
          type="submit"
          className="w-full bg-red-600 text-white py-3 rounded-md hover:bg-red-700 transition">
          TẠO TIN
        </button>
      </form>
    </div>
  );
};

export default CreateJob;
