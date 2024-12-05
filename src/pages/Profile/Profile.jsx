// import React from "react";

const RecruiterProfile = () => {
  return (
    <div className="container mx-auto py-10 px-4">
      {/* Header */}
      <header className="bg-white rounded-lg shadow-lg mb-6 p-6 flex justify-between items-center">
        <h1 className="text-2xl font-bold">Thông tin cá nhân</h1>
      </header>

      {/* Thông báo */}

      {/* Profile */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Avatar và Liên hệ */}
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <div className="flex flex-col items-center">
            <img
              src="https://via.placeholder.com/150"
              alt="Avatar"
              className="w-24 h-24 rounded-full mb-4"
            />
            <h2 className="text-xl font-semibold">Nguyenbaky</h2>
            <div className="mt-4">
              <button className="bg-red-500 text-white py-2 px-4 rounded-lg mr-2 hover:bg-red-600">
                Follow
              </button>
              <button className="bg-gray-500 text-white py-2 px-4 rounded-lg hover:bg-gray-600">
                Message
              </button>
            </div>
          </div>

          <div className="mt-6 space-y-2">
            <p>
              <strong>Website:</strong>{" "}
              <a
                href="https://locfuho.com"
                className="text-blue-500 hover:underline">
                https://kyfuho.com
              </a>
            </p>
            <p>
              <strong>Github:</strong>{" "}
              <a
                href="https://github.com"
                className="text-blue-500 hover:underline">
                github.com
              </a>
            </p>
            <p>
              <strong>Facebook:</strong>{" "}
              <a
                href="https://facebook.com"
                className="text-blue-500 hover:underline">
                facebook.com
              </a>
            </p>
          </div>
        </div>

        {/* Thông tin chi tiết */}
        <div className="col-span-2 bg-white p-6 rounded-lg shadow-lg">
          <div className="space-y-4">
            <p>
              <strong>Họ và tên:</strong> Nguyen Ba Ky
            </p>
            <p>
              <strong>Vị trí:</strong> HR
            </p>
            <p>
              <strong>Email:</strong> Nguyenbaky23@gmail.com
            </p>
            <p>
              <strong>Số điện thoại:</strong> 0123456789
            </p>
            <p>
              <strong>Địa chỉ:</strong> Hà Nội
            </p>
            <p>
              <strong>Tên công ty:</strong> Axon
            </p>
          </div>
          <button className="mt-6 bg-red-500 text-white py-2 px-4 rounded-lg hover:bg-red-600">
            Cập nhật thông tin
          </button>
        </div>
      </div>
    </div>
  );
};

export default RecruiterProfile;
