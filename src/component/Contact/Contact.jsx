// import React from "react";

function Contact() {
  const candidates = [
    {
      id: 1,
      name: "Nguyen Ba Ky Dep Trai",
      role: "Frontend Developer",
      email: "nguyenbaky23@gmail.com",
      phone: "+84 123 456 789",
      location: "Hồ Chí Minh, Việt Nam",
      imageUrl:
        "https://scontent.fhan14-4.fna.fbcdn.net/v/t39.30808-1/344542573_1016776169700186_59734981782926054_n.jpg?stp=dst-jpg_s200x200_tt6&_nc_cat=102&ccb=1-7&_nc_sid=0ecb9b&_nc_eui2=AeHE3pzgZ09WIumVk2SaUlzW8AfSrMmpN6nwB9Ksyak3qRO3GRAQCJN5k0u9DAbLgHWd1mkLGJGTGZQ8xITqFMmC&_nc_ohc=jGanNVFrBxIQ7kNvgEyC35v&_nc_zt=24&_nc_ht=scontent.fhan14-4.fna&_nc_gid=AiUgm9wCwZSWqHE3Yh6tHkr&oh=00_AYA4nnyuPefG8Ov75zIpLv8e0-TPm8M1EtesEnjg1fKTHg&oe=675790A6",
    },
    {
      id: 2,
      name: "Phan Tấn Trung",
      role: "Backend Developer",
      email: "janesmith@example.com",
      phone: "+84 987 654 321",
      location: "Hà Nội, Việt Nam",
      imageUrl:
        "https://lh4.googleusercontent.com/N8zRhskPSotKzWxs5wm68JaDX0yCGY-ASI7g3AOqgBeFBD24sPQMd62CEsQT_WJRJ5RhFuBnEzzhcuTa-ZMussF_MQhbEYCKqKTCyL3zL6q17MYOpNpE3YqtUtyXIuBFkpyYlX-z",
    },
    {
      id: 3,
      name: "Anh Bảy Chọ",
      role: "Mobile App Developer",
      email: "alicenguyen@example.com",
      phone: "+84 456 789 012",
      location: "Đà Nẵng, Việt Nam",
      imageUrl:
        "https://th.bing.com/th/id/OIP.chkLh21I2aKrkJNkvAnTIAAAAA?rs=1&pid=ImgDetMain",
    },
  ];

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 py-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {candidates.map((candidate) => (
          <div
            key={candidate.id}
            className="max-w-xs rounded-lg overflow-hidden shadow-lg p-6 bg-white">
            <img
              className="w-32 h-32 rounded-full mx-auto mb-4"
              src={candidate.imageUrl}
              alt={candidate.name}
            />
            <div className="text-center">
              <h2 className="text-2xl font-semibold text-gray-800">
                {candidate.name}
              </h2>
              <p className="text-gray-600">{candidate.role}</p>
            </div>
            <div className="mt-4 text-center">
              <a
                href={`mailto:${candidate.email}`}
                className="text-blue-500 hover:text-blue-700 transition duration-300 block mb-2">
                {candidate.email}
              </a>
              <p className="text-gray-600">Phone: {candidate.phone}</p>
              <p className="text-gray-600">Location: {candidate.location}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Contact;
