import { useState, useEffect } from "react";
import axios from "axios";
import ChangePassword from "./ChangePassWord"; // Import the ChangePassword component

const RecruiterProfile = () => {
  const [profile, setProfile] = useState({
    avatar: "https://via.placeholder.com/150",
    userName: "",
    email: "",
    firstName: "",
    lastName: "",
    phone: "",
    address: "",
    company_name: "",
    position: "",
    company_address: "",
    company_introduce: "",
  });

  const [isEditing, setIsEditing] = useState(false);
  const [error, setError] = useState(null);
  const [showChangePassword, setShowChangePassword] = useState(false); // State to control the modal

  useEffect(() => {
    const fetchProfile = async () => {
      const userID = localStorage.getItem("employerId");
      const token = localStorage.getItem("token");

      if (!userID || !token) {
        setError("No user ID or authorization token found.");
        return;
      }

      try {
        const response = await axios.get(
          `http://localhost:3001/api/employer/employers/${userID}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        if (response.data) {
          const employer = response.data;
          const user = employer.User;

          setProfile({
            avatar: "https://via.placeholder.com/150",
            userName: user?.userName || "N/A",
            email: user?.email || "N/A",
            firstName: user?.firstName || "N/A",
            lastName: user?.lastName || "N/A",
            phone: user?.phone || "N/A",
            address: employer.company_address || "N/A",
            company_name: employer.company_name || "N/A",
            position: employer.position || "N/A",
            company_address: employer.company_address || "N/A",
            company_introduce: employer.company_introduce || "N/A",
          });
        } else {
          setError("Profile data not found.");
        }
      } catch (error) {
        console.error("Error fetching profile:", error);
        setError(
          error.response?.data?.error ||
            "An error occurred while fetching the profile."
        );
      }
    };

    fetchProfile();
  }, []);

  const handleUpdateProfile = async () => {
    const userID = localStorage.getItem("employerId");
    const token = localStorage.getItem("token");

    if (!userID || !token) {
      setError("No user ID or authorization token found.");
      return;
    }

    try {
      const response = await axios.put(
        `http://localhost:3001/api/employer/employers/${userID}`,
        profile,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (response.status === 200) {
        alert("Profile updated successfully!");
        setIsEditing(false);
      }
    } catch (error) {
      console.error("Error updating profile:", error);
      setError(
        error.response?.data?.error ||
          "An error occurred while updating the profile."
      );
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProfile((prevProfile) => ({
      ...prevProfile,
      [name]: value,
    }));
  };

  const toggleChangePasswordModal = () => {
    setShowChangePassword((prev) => !prev);
  };

  if (error) {
    return <div className="text-red-500">{error}</div>;
  }

  return (
    <div className="container mx-auto py-10 px-4">
      <header className="bg-white rounded-lg shadow-lg mb-6 p-6 flex justify-between items-center">
        <h1 className="text-2xl font-bold">Thông tin cá nhân</h1>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <div className="flex flex-col items-center">
            <img
              src={profile.avatar}
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
              <button className="bg-blue-500 text-white md:w-full py-2 px-4 rounded-lg hover:bg-blue-600">
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
                {profile.website || "https://kyfuho.com"}
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
                  name="company_name"
                  value={profile.company_name || ""}
                  onChange={handleInputChange}
                  className="border p-2 rounded w-full"
                />
              ) : (
                <span>{profile.company_name || "Axon"}</span>
              )}
            </p>
          </div>
          <div className="flex mt-6">
            <button
              onClick={
                isEditing ? handleUpdateProfile : () => setIsEditing(true)
              }
              className="bg-red-500 text-white py-2 px-4 rounded-lg hover:bg-red-600 mr-2">
              {isEditing ? "Save Changes" : "Edit Profile"}
            </button>
            <button
              onClick={toggleChangePasswordModal}
              className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600">
              Change Password
            </button>
          </div>
        </div>
      </div>

      {showChangePassword && (
        <ChangePassword onClose={toggleChangePasswordModal} />
      )}
    </div>
  );
};

export default RecruiterProfile;
