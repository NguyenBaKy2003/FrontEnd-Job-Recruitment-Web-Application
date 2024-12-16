import { useState, useEffect } from "react";

function SignupEmployer() {
  // Initialize state for positions and categories
  const [categories, setCategories] = useState([]);
  const [positions, setPositions] = useState([]);

  const [formData, setFormData] = useState({
    userName: "",
    email: "",
    password: "",
    confirmPassword: "",
    company_name: "",
    jobTitle: "",
    firstName: "",
    lastName: "",
    phone: "",
    address: "",
    role_id: 1,
    status: "active",
    create_by: "Employer",
    company_address: "",
    company_introduce: "",
    position: "",
    service_id: 1, // Default to Free Plan
    category_id: "", // Default category
    name: "", // Default category name
    code: "", // Default category code
  });

  const [message, setMessage] = useState(""); // Success message
  const [error, setError] = useState(""); // Error message
  const [loading, setLoading] = useState(false); // Loading state

  // Fetch categories and positions from the API on component mount
  useEffect(() => {
    // Fetch categories
    fetch("http://localhost:3001/api/category")
      .then((response) => response.json())
      .then((data) => {
        setCategories(data); // Set categories state
        if (data && data.length > 0) {
          setFormData((prevData) => ({
            ...prevData,
            category_id: data[0].id,
            name: data[0].name,
            code: data[0].code,
          }));
        }
      })
      .catch((err) => setError("Không thể tải danh mục"));

    // Fetch positions
    fetch("http://localhost:3001/api/positions")
      .then((response) => response.json())
      .then((data) => setPositions(data)) // Set positions state
      .catch((err) => setError("Không thể tải vị trí"));
  }, []);

  // Handle changes in category selection
  const handleCategoryChange = (e) => {
    const selectedCategory = categories.find(
      (category) => category.id === parseInt(e.target.value)
    );

    if (selectedCategory) {
      setFormData((prevData) => ({
        ...prevData,
        category_id: selectedCategory.id,
        name: selectedCategory.name,
        code: selectedCategory.code,
      }));
    }
  };

  // Handle changes for other inputs
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handlePositionChange = (e) => {
    const selectedPosition = positions.find(
      (position) => position.id === parseInt(e.target.value)
    );
    if (selectedPosition) {
      setFormData((prevData) => ({
        ...prevData,
        position: selectedPosition.id,
      }));
    }
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    // Validate passwords
    if (formData.password !== formData.confirmPassword) {
      setError("Mật khẩu và xác nhận mật khẩu không khớp!");
      setLoading(false);
      return;
    }

    // Validate email
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(formData.email)) {
      setError("Email không hợp lệ!");
      setLoading(false);
      return;
    }

    // Validate phone
    const phoneRegex = /^[0-9]{10,12}$/;
    if (!phoneRegex.test(formData.phone)) {
      setError("Số điện thoại không hợp lệ!");
      setLoading(false);
      return;
    }

    try {
      const response = await fetch(
        "http://localhost:3001/api/auth/register/employer",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            ...formData, // This includes category_id, name, and code
          }),
        }
      );

      const data = await response.json();

      if (response.ok) {
        setMessage("Đăng ký thành công!");
        setError("");
        // Reset form data after successful registration
        setFormData({
          userName: "",
          email: "",
          password: "",
          confirmPassword: "",
          company_name: "",
          jobTitle: "",
          firstName: "",
          lastName: "",
          phone: "",
          address: "",
          company_address: "",
          company_introduce: "",
          position: "",
          service_id: 1,
          category_id: categories[0]?.id || "", // Default category
          name: categories[0]?.name || "", // Default category name
          code: categories[0]?.code || "", // Default category code
        });
      } else {
        setError(data.error || "Đăng ký thất bại!");
      }
    } catch (err) {
      setError("Đã xảy ra lỗi khi kết nối với máy chủ.");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col lg:flex-row min-h-screen">
      <div className="w-full lg:w-1/2 flex justify-center items-center bg-gray-50">
        <img
          src="https://itviec.com/assets/employer_landing/hire-the-best-it-15-95d4b6df6293a405cd77c094b8c7eb5dcc99cf8711f5b47751c841cfa51023a0.png"
          className="w-7/12 sm:w-10/12 md:w-8/12"
          alt="Employer"
        />
      </div>

      <div className="w-full lg:w-1/2 flex items-center justify-center bg-blue-50 p-6">
        <div className="w-full max-w-4xl bg-white rounded-lg shadow-md p-8">
          <h1 className="text-3xl text-red-500 font-semibold text-center mb-8">
            TLJob
          </h1>

          {/* Show success or error message */}
          {error && <p className="text-red-500 mb-4">{error}</p>}
          {message && <p className="text-green-500 mb-4">{message}</p>}

          <form onSubmit={handleSubmit}>
            {/* Account Section */}
            <div className="mb-6">
              <h2 className="text-lg font-semibold mb-4">
                Thông tin tài khoản
              </h2>
              <div className="grid grid-cols-2 gap-4">
                <input
                  type="text"
                  name="userName"
                  value={formData.userName}
                  onChange={handleChange}
                  placeholder="Tên đăng nhập (*)"
                  className="p-3 border rounded-md w-full"
                  required
                />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email (*)"
                  className="p-3 border rounded-md w-full"
                  required
                />
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="Mật khẩu (*)"
                  className="p-3 border rounded-md w-full"
                  required
                />
                <input
                  type="password"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  placeholder="Xác nhận mật khẩu (*)"
                  className="p-3 border rounded-md w-full"
                  required
                />
              </div>
            </div>

            {/* Employer Info Section */}
            <div className="mb-6">
              <h2 className="text-lg font-semibold mb-4">
                Thông tin nhà tuyển dụng
              </h2>
              <div className="grid grid-cols-2 gap-4">
                <input
                  type="text"
                  name="company_name"
                  value={formData.company_name}
                  onChange={handleChange}
                  placeholder="Tên công ty (*)"
                  className="p-3 border rounded-md w-full"
                  required
                />
                <select
                  name="position"
                  value={formData.position}
                  onChange={handlePositionChange}
                  className="p-3 border rounded-md w-full"
                  required>
                  {positions.map((position) => (
                    <option key={position.id} value={position.name}>
                      {position.name}
                    </option>
                  ))}
                </select>
                <input
                  type="text"
                  name="company_address"
                  value={formData.company_address}
                  onChange={handleChange}
                  placeholder="Địa chỉ công ty (*)"
                  className="p-3 border rounded-md w-full"
                  required
                />
                <input
                  type="text"
                  name="company_introduce"
                  value={formData.company_introduce}
                  onChange={handleChange}
                  placeholder="Giới thiệu công ty (*)"
                  className="p-3 border rounded-md w-full"
                  required
                />
              </div>
            </div>

            {/* Category Name Section */}
            <div className="mb-6">
              <h2 className="text-lg font-semibold mb-4">Chọn danh mục</h2>
              <select
                name="category_id"
                value={formData.category_id}
                onChange={handleCategoryChange}
                className="p-3 border rounded-md w-full">
                {categories.map((category) => (
                  <option key={category.id} value={category.id}>
                    {category.name}
                  </option>
                ))}
              </select>

              <input
                type="text"
                name="code"
                value={formData.code}
                placeholder="Mã danh mục (Tự động tạo)"
                className="p-3 border rounded-md w-full mt-4"
                readOnly
              />
            </div>

            {/* Service Plan Section */}
            <div className="mb-6">
              <h2 className="text-lg font-semibold mb-4">Chọn gói dịch vụ</h2>
              <select
                name="service_id"
                value={formData.service_id}
                onChange={handleChange}
                className="p-3 border rounded-md w-full">
                <option value="1">Gói miễn phí (1 tháng)</option>
                <option value="2">Gói 1 tháng</option>
                <option value="3">Gói 3 tháng</option>
              </select>
            </div>

            {/* Personal Info Section */}
            <div className="mb-6">
              <h2 className="text-lg font-semibold mb-4">Thông tin cá nhân</h2>
              <div className="grid grid-cols-2 gap-4">
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  placeholder="Họ (*)"
                  className="p-3 border rounded-md w-full"
                  required
                />
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  placeholder="Tên (*)"
                  className="p-3 border rounded-md w-full"
                  required
                />
              </div>
            </div>

            {/* Phone and Address Section */}
            <div className="mb-6">
              <input
                type="text"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Số điện thoại (*)"
                className="p-3 border rounded-md w-full"
                required
              />
              <input
                type="text"
                name="address"
                value={formData.address}
                onChange={handleChange}
                placeholder="Địa chỉ (*)"
                className="p-3 border rounded-md w-full mt-4"
                required
              />
            </div>

            {/* Terms and Submit Button */}
            <div className="mb-6 text-sm">
              <p>
                Tôi đã đọc và đồng ý với{" "}
                <a href="/" className="text-blue-500 underline">
                  Điều khoản dịch vụ
                </a>{" "}
                và{" "}
                <a href="/" className="text-blue-500 underline">
                  Chính sách bảo mật
                </a>{" "}
                của TLJob
              </p>
            </div>
            <button
              type="submit"
              className="w-full bg-red-600 text-white py-3 rounded-md hover:bg-red-700 transition"
              disabled={loading}>
              {loading ? "Đang xử lý..." : "Đăng ký"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default SignupEmployer;
