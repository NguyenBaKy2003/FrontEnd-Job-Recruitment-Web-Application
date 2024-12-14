import { useState, useEffect } from "react";

const RecruiterProfile = () => {
  // State to hold recruiter profile information
  const [profile, setProfile] = useState({
    avatar: "",
    name: "",
    website: "",
    github: "",
    facebook: "",
    firstName: "",
    lastName: "",
    position: "",
    email: "",
    phone: "",
    address: "",
    company_name: "",
  });

  // State to toggle between edit and view mode
  const [isEditing, setIsEditing] = useState(false);

  // Fetch the profile data from localStorage on component mount
  useEffect(() => {
    const savedProfile = JSON.parse(localStorage.getItem("employer"));
    if (savedProfile) {
      setProfile(savedProfile);
    }
  }, []);

  // Function to handle updating profile
  const handleUpdateProfile = () => {
    // Save the updated profile data to localStorage
    localStorage.setItem("employer", JSON.stringify(profile));
    alert("Profile updated successfully!");
    setIsEditing(false); // Exit edit mode after saving
  };

  // Handle input change to update the profile in state
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProfile((prevProfile) => {
      const updatedProfile = {
        ...prevProfile,
        [name]: value,
      };

      // Update fullName dynamically based on lastName + fullName
      if (name === "lastName" || name === "fullName") {
        updatedProfile.fullName = `${updatedProfile.lastName} ${value}`;
      }

      return updatedProfile;
    });
  };

  return (
    <div className="container mx-auto py-10 px-4">
      {/* Header */}
      <header className="bg-white rounded-lg shadow-lg mb-6 p-6 flex justify-between items-center">
        <h1 className="text-2xl font-bold">Thông tin cá nhân</h1>
      </header>

      {/* Profile */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Avatar và Liên hệ */}
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <div className="flex flex-col items-center">
            <img
              src={
                profile.avatar ||
                "https://scontent.fvii2-4.fna.fbcdn.net/v/t39.30808-6/344542573_1016776169700186_59734981782926054_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeHE3pzgZ09WIumVk2SaUlzW8AfSrMmpN6nwB9Ksyak3qRO3GRAQCJN5k0u9DAbLgHWd1mkLGJGTGZQ8xITqFMmC&_nc_ohc=glxuONPvYGoQ7kNvgEg-RXV&_nc_zt=23&_nc_ht=scontent.fvii2-4.fna&_nc_gid=AZDMc-cGe0uS9ooeE2tioMl&oh=00_AYDf-hi1OJg2v9JR8ZFocggASMj5dtc8Qzejloq9jHp0WA&oe=67638EC8"
              }
              alt="Avatar"
              className="w-24 h-24 rounded-full mb-4"
            />
            <h2 className="text-xl font-semibold">
              {profile.firstName + " " + profile.lastName || "Nguyen Ba Ky"}
            </h2>
            <div className="mt-4 md:flex">
              <button className="bg-red-500 text-white py-2 px-4 md:w-full rounded-lg mr-2 hover:bg-red-600">
                Follow
              </button>
              <button className="bg-blue-500 text-white  md:w-full py-2 px-4 rounded-lg hover:bg-blue-600">
                Message
              </button>
            </div>
          </div>

          <div className="mt-6 space-y-2">
            <p>
              <strong>Website:</strong>{" "}
              <a
                href={profile.website || "#"}
                className="text-blue-500 hover:underline">
                {profile.website || "https://locfuho.com"}
              </a>
            </p>
            <p>
              <strong>Github:</strong>{" "}
              <a
                href={profile.github || "#"}
                className="text-blue-500 hover:underline">
                {profile.github || "github.com"}
              </a>
            </p>
            <p>
              <strong>Facebook:</strong>{" "}
              <a
                href={profile.facebook || "#"}
                className="text-blue-500 hover:underline">
                {profile.facebook || "facebook.com"}
              </a>
            </p>
          </div>
        </div>

        {/* Thông tin chi tiết */}
        <div className="col-span-2 bg-white p-6 rounded-lg shadow-lg">
          <div className="space-y-4">
            <p>
              <strong>Họ và tên:</strong>{" "}
              {isEditing ? (
                <input
                  type="text"
                  name="fullName"
                  value={(profile.firstName && profile.lastName) || ""}
                  onChange={handleInputChange}
                  className="border p-2 rounded w-full"
                />
              ) : (
                <span>
                  {profile.firstName + " " + profile.lastName || "Nguyen Ba Ky"}
                </span>
              )}
            </p>
            <p>
              <strong>Vị trí:</strong>{" "}
              {isEditing ? (
                <input
                  type="text"
                  name="position"
                  value={profile.position || ""}
                  onChange={handleInputChange}
                  className="border p-2 rounded w-full"
                />
              ) : (
                <span>{profile.position || "HR"}</span>
              )}
            </p>
            <p>
              <strong>Email:</strong>{" "}
              {isEditing ? (
                <input
                  type="email"
                  name="email"
                  value={profile.email || ""}
                  onChange={handleInputChange}
                  className="border p-2 rounded w-full"
                />
              ) : (
                <span>{profile.email || "Nguyenbaky23@gmail.com"}</span>
              )}
            </p>
            <p>
              <strong>Số điện thoại:</strong>{" "}
              {isEditing ? (
                <input
                  type="text"
                  name="phone"
                  value={profile.phone || ""}
                  onChange={handleInputChange}
                  className="border p-2 rounded w-full"
                />
              ) : (
                <span>{profile.phone || "0123456789"}</span>
              )}
            </p>
            <p>
              <strong>Địa chỉ:</strong>{" "}
              {isEditing ? (
                <input
                  type="text"
                  name="address"
                  value={profile.address || ""}
                  onChange={handleInputChange}
                  className="border p-2 rounded w-full"
                />
              ) : (
                <span>{profile.address || "Hà Nội"}</span>
              )}
            </p>
            <p>
              <strong>Tên công ty:</strong>{" "}
              {isEditing ? (
                <input
                  type="text"
                  name="companyName"
                  value={profile.companyName || ""}
                  onChange={handleInputChange}
                  className="border p-2 rounded w-full"
                />
              ) : (
                <span>{profile.company_name || "Axon"}</span>
              )}
            </p>
          </div>
          <button
            onClick={isEditing ? handleUpdateProfile : () => setIsEditing(true)}
            className="mt-6 bg-red-500 text-white py-2 px-4 rounded-lg hover:bg-red-600">
            {isEditing ? "Save Changes" : "Edit Profile"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default RecruiterProfile;
