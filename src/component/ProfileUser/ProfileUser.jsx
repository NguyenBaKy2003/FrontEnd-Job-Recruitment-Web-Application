import { useState, useEffect } from "react";
import axios from "axios";

const ProfileUser = () => {
  const [profile, setProfile] = useState({
    userName: "",
    email: "",
    firstName: "",
    lastName: "",
    experience: "",
    education: "",
    skills: [], // Ensure this is an array
    phone: "",
    address: "",
  });

  const [isEditing, setIsEditing] = useState(false);
  const [loading, setLoading] = useState(false); // Loading state
  const [error, setError] = useState(""); // Error state

  useEffect(() => {
    const applicantId = localStorage.getItem("applicant_id");
    if (applicantId) {
      fetchUserProfile(applicantId);
    }
  }, []);

  const fetchUserProfile = async (applicantId) => {
    setLoading(true); // Start loading
    try {
      const token = localStorage.getItem("token");
      const response = await axios.get(
        `http://localhost:3001/api/applicant/applicants/${applicantId}`, // Adjusted to use the correct endpoint
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      // Map the API response to the profile state
      setProfile({
        userName: response.data.User.userName, // Access user data
        email: response.data.User.email,
        firstName: response.data.User.firstName,
        lastName: response.data.User.lastName,
        experience: response.data.experience,
        education: response.data.education,
        skills: response.data.Skills.map((skill) => skill.name) || [], // Ensure skills is an array
        phone: response.data.User.phone || "", // Assuming phone is part of the response
        address: response.data.User.address || "", // Assuming address is part of the response
      });
      setError(""); // Clear any previous errors
    } catch (error) {
      console.error("Error fetching user profile:", error);
      setError(
        "An error occurred while fetching the profile. Please try again."
      );
    } finally {
      setLoading(false); // Stop loading
    }
  };

  const handleUpdateProfile = async () => {
    setLoading(true); // Start loading
    try {
      const token = localStorage.getItem("token");
      const applicantId = localStorage.getItem("applicant_id"); // Get the applicant ID
      const response = await axios.put(
        `http://localhost:3001/api/applicant/applicants/${applicantId}`, // Adjusted to use the correct endpoint
        {
          userName: profile.userName,
          email: profile.email,
          firstName: profile.firstName,
          lastName: profile.lastName,
          experience: profile.experience,
          education: profile.education,
          skills: profile.skills.map((skill) => ({ name: skill })), // Format skills for the API
          phone: profile.phone,
          address: profile.address,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (response.data) {
        alert("Profile updated successfully!");
        setIsEditing(false);
        setError(""); // Clear any previous errors
      } else {
        setError("Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error("Error updating profile:", error);
      setError(
        "An error occurred while updating the profile. Please try again."
      );
    } finally {
      setLoading(false); // Stop loading
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProfile((prevProfile) => ({
      ...prevProfile,
      [name]: value,
    }));
  };

  const handleSkillChange = (e) => {
    const { value } = e.target;
    setProfile((prevProfile) => ({
      ...prevProfile,
      skills: value.split(",").map((skill) => skill.trim()),
    }));
  };

  return (
    <div className="container mx-auto py-10 px-4">
      {loading && <p>Loading...</p>} {/* Loading indicator */}
      {error && <p className="text-red-500">{error}</p>} {/* Error message */}
      <header className="bg-white rounded-lg shadow-lg mb-6 p-6 flex justify-between items-center">
        <h1 className="text-2xl font-bold">Thông tin người dùng</h1>
      </header>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <div className="flex flex-col items-center">
            <img
              src={`https://scontent.fvii2-4.fna.fbcdn.net/v/t39.30808-6/344542573_1016776169700186_59734981782926054_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeHE3pzgZ09WIumVk2SaUlzW8AfSrMmpN6nwB9Ksyak3qRO3GRAQCJN5k0u9DAbLgHWd1mkLGJGTGZQ8xITqFMmC&_nc_ohc=glxuONPvYGoQ7kNvgEg-RXV&_nc_zt=23&_nc_ht=scontent.fvii2-4.fna&_nc_gid=AZDMc-cGe0uS9ooeE2tioMl&oh=00_AYDf-hi1OJg2v9JR8ZFocggASMj5dtc8Qzejloq9jHp0WA&oe=67638EC8`}
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
              <strong>Username:</strong>{" "}
              {isEditing ? (
                <input
                  type="text"
                  name="userName"
                  value={profile.userName || ""}
                  onChange={handleInputChange}
                  className="border p-2 rounded w-full"
                />
              ) : (
                <span>{profile.userName || "johndoe"}</span>
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
                  className="border p-2 rounded w-full "
                />
              ) : (
                <span>{profile.email || "johndoe@example.com"}</span>
              )}
            </p>

            <p>
              <strong>First Name:</strong>{" "}
              {isEditing ? (
                <input
                  type="text"
                  name="firstName"
                  value={profile.firstName || ""}
                  onChange={handleInputChange}
                  className="border p-2 rounded w-full"
                />
              ) : (
                <span>{profile.firstName || "John"}</span>
              )}
            </p>
            <p>
              <strong>Last Name:</strong>{" "}
              {isEditing ? (
                <input
                  type="text"
                  name="lastName"
                  value={profile.lastName || ""}
                  onChange={handleInputChange}
                  className="border p-2 rounded w-full"
                />
              ) : (
                <span>{profile.lastName || "Doe"}</span>
              )}
            </p>
            <p>
              <strong>Experience:</strong>{" "}
              {isEditing ? (
                <textarea
                  name="experience"
                  value={profile.experience || ""}
                  onChange={handleInputChange}
                  className="border p-2 rounded w-full"
                />
              ) : (
                <span>
                  {profile.experience || "5 years of software development"}
                </span>
              )}
            </p>
            <p>
              <strong>Education:</strong>{" "}
              {isEditing ? (
                <textarea
                  name="education"
                  value={profile.education || ""}
                  onChange={handleInputChange}
                  className="border p-2 rounded w-full"
                />
              ) : (
                <span>
                  {profile.education || "Bachelor's in Computer Science"}
                </span>
              )}
            </p>
            <p>
              <strong>Skills:</strong>{" "}
              {isEditing ? (
                <input
                  type="text"
                  name="skills"
                  value={
                    Array.isArray(profile.skills)
                      ? profile.skills.join(", ")
                      : ""
                  }
                  onChange={handleSkillChange}
                  className="border p-2 rounded w-full"
                  placeholder="Enter skills, separated by commas"
                />
              ) : (
                <span>
                  {Array.isArray(profile.skills)
                    ? profile.skills.join(", ")
                    : "JavaScript, React, Node.js"}
                </span>
              )}
            </p>
            <p>
              <strong>Phone:</strong>{" "}
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
              <strong>Address:</strong>{" "}
              {isEditing ? (
                <input
                  type="text"
                  name="address"
                  value={profile.address || ""}
                  onChange={handleInputChange}
                  className="border p-2 rounded w-full"
                />
              ) : (
                <span>{profile.address || "Hà Nội, Vietnam"}</span>
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

export default ProfileUser;
