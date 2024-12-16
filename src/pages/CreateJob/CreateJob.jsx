import { useState, useEffect } from "react";
import axios from "axios";

const CreateJob = () => {
  // Initialize form data with employer_id from localStorage
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    requirements: "",
    benefit: "",
    application_deadline: "",
    location: "",
    salary: "",
    type: "",
    employer_id: Number(localStorage.getItem("employerId")) || 1, // Convert to number
    category_id: 1, // Default to "Công nghệ thông tin"
    position: "", // Initialize position
    skill_id: [], // Initialize as an empty array
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [positions, setPositions] = useState([]); // State to hold positions
  const [skills, setSkills] = useState([]); // State to hold skills

  useEffect(() => {
    // Check if employer_id is not in localStorage and handle redirection or error message if needed
    if (!formData.employer_id) {
      setError("Vui lòng đăng nhập để tạo công việc.");
    }

    // Fetch positions from the API
    const fetchPositions = async () => {
      try {
        const response = await axios.get("http://localhost:3001/api/positions");
        setPositions(response.data); // Assuming the API returns an array of positions
      } catch (err) {
        console.error("Error fetching positions:", err);
        setError("Không thể tải danh sách vị trí.");
      }
    };

    // Fetch skills from the API
    const fetchSkills = async () => {
      try {
        const response = await axios.get("http://localhost:3001/api/skills");
        setSkills(response.data); // Assuming the API returns an array of skills
      } catch (err) {
        console.error("Error fetching skills:", err);
        setError("Không thể tải danh sách kỹ năng.");
      }
    };

    fetchPositions();
    fetchSkills();
  }, [formData.employer_id]);

  const handleChange = (e) => {
    const { name, value, type, options } = e.target;

    if (type === "select-multiple") {
      // Get all selected options and convert them to numbers
      const selectedValues = Array.from(options)
        .filter((option) => option.selected)
        .map((option) => Number(option.value)); // Convert to number

      // Update the skill_id array (appending the selected skills)
      setFormData((prev) => ({
        ...prev,
        [name]: selectedValues,
      }));
    } else {
      // For other inputs (like text inputs)
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));

      // Update category_id if the field is changed
      if (name === "field") {
        setFormData((prev) => ({
          ...prev,
          category_id: Number(value), // Update category_id based on selected field
        }));
      }
    }
  };

  const handleSkillChange = (e) => {
    const { value, checked } = e.target;

    // Update skill_id array based on checkbox selection
    if (checked) {
      setFormData((prev) => ({
        ...prev,
        skill_id: [...prev.skill_id, Number(value)], // Add selected skill
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        skill_id: prev.skill_id.filter((id) => id !== Number(value)), // Remove unselected skill
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    // Client-side validation
    if (
      !formData.title ||
      !formData.description ||
      !formData.requirements ||
      !formData.benefit ||
      !formData.application_deadline ||
      !formData.location ||
      !formData.salary ||
      !formData.type ||
      !formData.position || // Ensure position is selected
      !formData.skill_id.length
    ) {
      setError(
        "Vui lòng điền tất cả các trường bắt buộc và chọn ít nhất một kỹ năng."
      );
      return;
    }

    if (new Date(formData.application_deadline) < new Date()) {
      setError("Hạn ứng tuyển phải là một ngày trong tương lai.");
      return;
    }

    setLoading(true);
    try {
      console.log("Form Data being sent:", formData); // Log form data

      // Sending POST request to back-end API to create job
      const response = await axios.post(
        "http://localhost:3001/api/jobs/jobadd",
        formData,
        {
          headers: { "Content-Type": "application/json" },
        }
      );

      // On success, show success message and reset form
      alert("Tạo công việc thành công!");
      setFormData({
        title: "",
        description: "",
        requirements: "",
        benefit: "",
        application_deadline: "",
        location: "",
        salary: "",
        type: "",
        category_id: 1, // Reset to default category
        position: "", // Reset position
        skill_id: [], // Reset skills array after submission
        employer_id: Number(localStorage.getItem("employerId")) || 1, // Ensure employer_id is retained
      });
    } catch (error) {
      console.error("Error creating job:", error); // Log the error for debugging
      setError(
        error.response?.data?.error ||
          "Không thể tạo công việc. Vui lòng thử lại."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-md mt-10">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Tạo công việc</h2>

      {error && (
        <div className="text-red-500 mb-4" aria-live="polite">
          {error}
        </div>
      )}

      <form onSubmit={handleSubmit}>
        {/* Tiêu đề */}
        <div className="mb-4">
          <label
            htmlFor="title"
            className="block text-sm font-medium text-gray-700 mb-2">
            Tiêu đề
          </label>
          <input
            type="text"
            name="title"
            id="title"
            value={formData.title}
            onChange={handleChange}
            placeholder="Nhập tiêu đề công việc"
            required
            className="border border-gray-300 rounded-md p-2 w-full"
          />
        </div>

        {/* Mô tả */}
        <div className="mb-4">
          <label
            htmlFor="description"
            className="block text-sm font-medium text-gray-700 mb-2">
            Mô tả
          </label>
          <textarea
            name="description"
            id="description"
            value={formData.description}
            onChange={handleChange}
            placeholder="Nhập mô tả chi tiết công việc"
            required
            className="border border-gray-300 rounded-md p-2 w-full"
          />
        </div>

        {/* Yêu cầu */}
        <div className="mb-4">
          <label
            htmlFor="requirements"
            className="block text-sm font-medium text-gray-700 mb-2">
            Yêu cầu
          </label>
          <textarea
            name="requirements"
            id="requirements"
            value={formData.requirements}
            onChange={handleChange}
            placeholder="Nhập các yêu cầu công việc"
            required
            className="border border-gray-300 rounded-md p-2 w-full"
          />
        </div>
        {/* Lợi ích */}
        <div className="mb-4">
          <label
            htmlFor="benefit"
            className="block text-sm font-medium text-gray-700 mb-2">
            Quyền lợi
          </label>
          <textarea
            name="benefit"
            id="benefit"
            value={formData.benefit}
            onChange={handleChange}
            placeholder="Nhập quyền lợi dành cho nhân viên"
            className="border border-gray-300 rounded-md p-2 w-full"
          />
        </div>

        {/* Hạn ứng tuyển */}
        <div className="mb-4">
          <label
            htmlFor="application_deadline"
            className="block text-sm font-medium text-gray-700 mb-2">
            Hạn ứng tuyển
          </label>
          <input
            type="date"
            name="application_deadline"
            id="application_deadline"
            value={formData.application_deadline}
            onChange={handleChange}
            required
            className="border border-gray-300 rounded-md p-2 w-full"
          />
        </div>

        {/* Địa điểm */}
        <div className="mb-4">
          <label
            htmlFor="location"
            className="block text-sm font-medium text-gray-700 mb-2">
            Địa điểm
          </label>
          <select
            name="location"
            id="location"
            value={formData.location}
            onChange={handleChange}
            required
            className="border border-gray-300 rounded-md p-2 w-full">
            <option value="">Chọn địa điểm</option>
            <option value="Hà Nội">Hà Nội</option>
            <option value="TP. Hồ Chí Minh">TP. Hồ Chí Minh</option>
            <option value="Đà Nẵng">Đà Nẵng</option>
          </select>
        </div>

        {/* Lương */}
        <div className="mb-4">
          <label
            htmlFor="salary"
            className="block text-sm font-medium text-gray-700 mb-2">
            Lương
          </label>
          <input
            type="text"
            name="salary"
            id="salary"
            value={formData.salary}
            onChange={handleChange}
            placeholder="Nhập mức lương (ví dụ: 1500000)"
            className="border border-gray-300 rounded-md p-2 w-full"
          />
        </div>

        {/* Loại công việc */}
        <div className="mb-4">
          <label
            htmlFor="type"
            className="block text-sm font-medium text-gray-700 mb-2">
            Loại công việc
          </label>
          <select
            name="type"
            id="type"
            value={formData.type}
            onChange={handleChange}
            required
            className="border border-gray-300 rounded-md p-2 w-full">
            <option value="">Chọn loại công việc</option>
            <option value="Full-time">Toàn thời gian</option>
            <option value="Part-time">Bán thời gian</option>
            <option value="Internship">Thực tập</option>
          </select>
        </div>

        {/* Linh vực */}
        <div className="mb-4">
          <label
            htmlFor="field"
            className="block text-sm font-medium text-gray-700 mb-2">
            Linh vực
          </label>
          <select
            name="field"
            id="field"
            onChange={handleChange}
            required
            className="border border-gray-300 rounded-md p-2 w-full">
            <option value="">Chọn linh vực</option>
            <option value="1">Công nghệ thông tin</option>
            <option value="2">Sale</option>
            <option value="3">Marketing</option>
          </select>
        </div>

        {/* Vị trí */}
        <div className="mb-4">
          <label
            htmlFor="position"
            className="block text-sm font-medium text-gray-700 mb-2">
            Vị trí
          </label>
          <select
            name="position"
            id="position"
            value={formData.position}
            onChange={handleChange}
            required
            className="border border-gray-300 rounded-md p-2 w-full">
            <option value="">Chọn vị trí</option>
            {positions.map((pos) => (
              <option key={pos.id} value={pos.name}>
                {pos.name}
              </option>
            ))}
          </select>
        </div>

        {/* Kỹ năng */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Kỹ năng
          </label>
          <div className="flex flex-col">
            {skills.map((skill) => (
              <label key={skill.id}>
                <input
                  type="checkbox"
                  value={skill.id}
                  checked={formData.skill_id.includes(skill.id)}
                  onChange={handleSkillChange}
                />
                {skill.name}
              </label>
            ))}
          </div>
        </div>

        <button
          type="submit"
          className="bg-blue-500 text-white font-bold py-2 px-4 rounded"
          disabled={loading}>
          {loading ? "Đang tạo..." : "Tạo công việc"}
        </button>
      </form>
    </div>
  );
};

export default CreateJob;
