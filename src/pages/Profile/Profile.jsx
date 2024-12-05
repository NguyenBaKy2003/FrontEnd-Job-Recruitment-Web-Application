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
              src="https://scontent.fhan14-4.fna.fbcdn.net/v/t39.30808-1/344542573_1016776169700186_59734981782926054_n.jpg?stp=dst-jpg_s200x200_tt6&_nc_cat=102&ccb=1-7&_nc_sid=0ecb9b&_nc_eui2=AeHE3pzgZ09WIumVk2SaUlzW8AfSrMmpN6nwB9Ksyak3qRO3GRAQCJN5k0u9DAbLgHWd1mkLGJGTGZQ8xITqFMmC&_nc_ohc=jGanNVFrBxIQ7kNvgEyC35v&_nc_zt=24&_nc_ht=scontent.fhan14-4.fna&_nc_gid=AQLU06RCXaQG0vuYhum4HUW&oh=00_AYBFVL2UDZMgcDmE-xYlA_1uvRAhYr0T2tCYva4JTCyu4Q&oe=67575866"
              alt="Avatar"
              className="w-24 h-24 rounded-full mb-4"
            />
            <h2 className="text-xl font-semibold">Nguyenbaky</h2>
            <div className="mt-4">
              <button className="bg-red-500 text-white py-2 px-4 rounded-lg mr-2 hover:bg-red-600">
                Follow
              </button>
              <button className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600">
                Message
              </button>
            </div>
          </div>

          <div className="mt-6 space-y-2">
            <p>
              <strong>Website:</strong>{" "}
              <a
                href="https://www.facebook.com/ky.nguyenba.9619/"
                className="text-blue-500 hover:underline">
                https://kyfuho.com
              </a>
            </p>
            <p>
              <strong>Github:</strong>{" "}
              <a
                href="https://github.com/NguyenBaKy2003"
                className="text-blue-500 hover:underline">
                github.com
              </a>
            </p>
            <p>
              <strong>Facebook:</strong>{" "}
              <a
                href="https://www.facebook.com/ky.nguyenba.9619/"
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
