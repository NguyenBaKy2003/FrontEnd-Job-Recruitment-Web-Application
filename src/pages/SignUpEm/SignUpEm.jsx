import { useState } from "react";

function SignupEm() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
    firstname: "",
    lastname: "",
    phone: "",
    address: "",
  });

  const [message, setMessage] = useState(""); // Success message
  const [error, setError] = useState(""); // Error message
  const [loading, setLoading] = useState(false); // Loading state

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true); // Start loading

    // Check if passwords match
    if (formData.password !== formData.confirmPassword) {
      setError("Mật khẩu và xác nhận mật khẩu không khớp!");
      setLoading(false);
      return;
    }

    // Basic email and phone validation
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(formData.email)) {
      setError("Email không hợp lệ!");
      setLoading(false);
      return;
    }

    const phoneRegex = /^[0-9]{10,12}$/;
    if (!phoneRegex.test(formData.phone)) {
      setError("Số điện thoại không hợp lệ!");
      setLoading(false);
      return;
    }

    try {
      // Send data to the API
      const response = await fetch(
        "http://localhost:3001/api/v1/auth/register",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            username: formData.username,
            email: formData.email,
            password: formData.password,
            firstname: formData.firstname,
            lastname: formData.lastname,
            phone: formData.phone, // Send the phone number
            address: formData.address, // Send the address
          }),
        }
      );

      const data = await response.json();

      if (response.ok) {
        setMessage("Đăng ký thành công!"); // Success message
        setError("");
        setFormData({
          username: "",
          email: "",
          password: "",
          confirmPassword: "",
          firstname: "",
          lastname: "",
          phone: "", // Reset phone number field
          address: "", // Reset address field
        });
      } else {
        setError(data.error || "Đăng ký thất bại!"); // Show error from server
      }
    } catch (err) {
      setError("Đã xảy ra lỗi khi kết nối với máy chủ."); // Connection error
      console.error(err);
    } finally {
      setLoading(false); // Stop loading
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
              <h2 className="text-lg font-semibold mb-4">Tài khoản</h2>
              <div className="grid grid-cols-2 gap-4">
                <input
                  type="text"
                  name="username"
                  value={formData.username}
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

            {/* Candidate Info Section */}
            <div className="mb-6">
              <h2 className="text-lg font-semibold mb-4">Thông tin ứng viên</h2>
              <div className="grid grid-cols-2 gap-4">
                <input
                  type="text"
                  name="firstname"
                  value={formData.firstname}
                  onChange={handleChange}
                  placeholder="Họ (*)"
                  className="p-3 border rounded-md w-full"
                  required
                />
                <input
                  type="text"
                  name="lastname"
                  value={formData.lastname}
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

export default SignupEm;
