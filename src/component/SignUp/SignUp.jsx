// import React from "react";
function SignUp() {
  return (
    // <>
    <div className="flex flex-col lg:flex-row min-h-screen">
      <div className="w-full lg:w-1/2 flex justify-center items-center bg-gray-50">
        <img
          src="https://itviec.com/assets/employer_landing/hire-the-best-it-15-95d4b6df6293a405cd77c094b8c7eb5dcc99cf8711f5b47751c841cfa51023a0.png"
          className="w-7/12 sm:w-10/12 md:w-8/12"
          alt="Employer"
        />
      </div>

      <div className="w-full lg:w-1/2 flex items-center justify-center bg-blue-50 p-6">
        <div className="min-h-screen flex justify-center items-center bg-blue-50">
          <div className="w-full max-w-4xl bg-white rounded-lg shadow-md p-8">
            <h1 className="text-2xl font-semibold text-center mb-8">TLJob</h1>

            <form>
              {/* Tài khoản Section */}
              <div className="mb-6">
                <h2 className="text-lg font-semibold mb-4">Tài khoản</h2>
                <div className="grid grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="Tên đăng nhập (*)"
                    className="p-3 border rounded-md w-full"
                  />
                  <input
                    type="email"
                    placeholder="Email (*)"
                    className="p-3 border rounded-md w-full"
                  />
                  <input
                    type="password"
                    placeholder="Mật khẩu (*)"
                    className="p-3 border rounded-md w-full"
                  />
                  <input
                    type="password"
                    placeholder="Xác nhận mật khẩu (*)"
                    className="p-3 border rounded-md w-full"
                  />
                </div>
              </div>

              {/* Thông tin ứng viên Section */}
              <div className="mb-6">
                <h2 className="text-lg font-semibold mb-4">
                  Thông tin ứng viên
                </h2>
                <div className="grid grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="Họ (*)"
                    className="p-3 border rounded-md w-full"
                  />
                  <input
                    type="text"
                    placeholder="Tên (*)"
                    className="p-3 border rounded-md w-full"
                  />
                  <textarea
                    placeholder="Kinh nghiệm (*)"
                    className="p-3 border rounded-md w-full col-span-2"
                    rows="3"></textarea>
                  <textarea
                    placeholder="Học vấn (*)"
                    className="p-3 border rounded-md w-full col-span-2"
                    rows="3"></textarea>
                  <div className="col-span-2">
                    <label className="block mb-2">Kĩ năng (*)</label>
                    <select className="p-3 border rounded-md w-full">
                      <option>Công nghệ thông tin</option>
                      <option>Java</option>
                      <option>JavaScript</option>
                      <option>ReactJS</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Terms and Submit */}
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
                className="w-full bg-orange-600 text-white py-3 rounded-md hover:bg-orange-700 transition">
                Đăng ký
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
    // </>
  );
}

export default SignUp;
