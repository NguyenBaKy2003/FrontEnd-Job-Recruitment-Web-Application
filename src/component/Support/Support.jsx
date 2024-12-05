// import React from "react";
import { useState } from "react";
function Support() {
  const [formData, setFormData] = useState({ email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Giả lập gửi yêu cầu
    console.log("Submitting:", formData);
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold text-center mb-6">Hỗ Trợ</h1>

        {/* Thông tin liên hệ */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Liên Hệ Với Chúng Tôi
          </h2>
          <p className="text-gray-600">
            Nếu bạn cần hỗ trợ, vui lòng liên hệ với chúng tôi qua email hoặc số
            điện thoại dưới đây:
          </p>
          <ul className="mt-4">
            <li className="mb-2">
              <strong>Email:</strong> support@example.com
            </li>
            <li>
              <strong>Phone:</strong> +84 123 456 789
            </li>
          </ul>
        </section>

        {/* Biểu mẫu gửi yêu cầu */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Gửi Yêu Cầu Hỗ Trợ
          </h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="email" className="block text-gray-700">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className="w-full p-3 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-gray-700">
                Thông điệp
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                className="w-full p-3 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                rows="5"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full p-3 mt-4 bg-orange-600 text-white rounded-md hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-orange-500">
              Gửi Yêu Cầu
            </button>
          </form>

          {submitted && (
            <div className="mt-4 text-green-500">
              <p>Yêu cầu của bạn đã được gửi thành công!</p>
            </div>
          )}
        </section>

        {/* Câu hỏi thường gặp (FAQ) */}
        <section>
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Câu Hỏi Thường Gặp
          </h2>
          <div className="space-y-4">
            <div>
              <h3 className="font-semibold text-gray-700">
                Làm sao để thay đổi mật khẩu?
              </h3>
              <p className="text-gray-600">
                Bạn có thể thay đổi mật khẩu trong phần Cài đặt tài khoản của
                chúng tôi.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-700">
                Tôi có thể liên hệ với ai nếu gặp vấn đề về đơn hàng?
              </h3>
              <p className="text-gray-600">
                Bạn có thể liên hệ với bộ phận Hỗ trợ khách hàng qua email hoặc
                số điện thoại trên trang này.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-700">
                Làm sao để yêu cầu hoàn tiền?
              </h3>
              <p className="text-gray-600">
                Chúng tôi sẽ xem xét yêu cầu hoàn tiền của bạn trong vòng 7 ngày
                làm việc sau khi nhận được thông tin từ bạn.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
export default Support;
