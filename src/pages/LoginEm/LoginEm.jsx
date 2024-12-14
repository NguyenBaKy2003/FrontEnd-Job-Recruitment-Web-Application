import axios from "axios";
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

const LoginEm = () => {
  const [userName, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const navigate = useNavigate();

  // Check if user is already logged in
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      navigate("/employes");
    }
  }, [navigate]);

  const login = async (e) => {
    e.preventDefault();

    setLoading(true);
    setError("");
    setSuccess("");
    localStorage.clear(); // Clear all existing localStorage data on login attempt

    const data = { userName, password };

    try {
      const response = await axios.post(
        "http://localhost:3001/api/auth/login/employer",
        data
      );

      if (response.data.token) {
        const { token, employer } = response.data;

        // Store token and user data in localStorage
        localStorage.setItem("token", token);
        // localStorage.setItem("employer", JSON.stringify(employer)); // Store user object as a JSON string
        localStorage.setItem("employerId", employer.id);
        setSuccess("Login successful!");
        setTimeout(() => {
          navigate("/employes");
          window.location.reload(); // Reload to fetch user data or reset app state
        }, 500);
      } else {
        setError("Login failed. Please check your credentials.");
      }
    } catch (error) {
      setError(
        error.response?.data?.error || "An error occurred. Please try again."
      );
      console.error("Login error:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleSignIn = () => {
    setLoading(true);
    // Simulate Google sign-in logic
    setTimeout(() => {
      console.log("Google sign-in successful");
      setLoading(false);
    }, 1500);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="max-w-md w-full bg-white p-8 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold text-center text-red-500 mb-6">
          Welcome to TLJob
        </h1>
        <p className="text-center text-gray-600 mb-8">
          By signing in, you agree to TLJob{" "}
          <a href="/" className="text-blue-500 hover:underline">
            Terms & Conditions
          </a>{" "}
          and{" "}
          <a href="/" className="text-blue-500 hover:underline">
            Privacy Policy
          </a>{" "}
          in relation to your privacy information.
        </p>

        {/* Error or Success Messages */}
        {error && <div className="text-red-500 text-center mb-4">{error}</div>}
        {success && (
          <div className="text-green-500 text-center mb-4">{success}</div>
        )}

        {/* Sign In Form */}
        <form onSubmit={login} className="space-y-4">
          {/* Google Sign-in */}
          <button
            type="button"
            onClick={handleGoogleSignIn}
            className="w-full bg-red-500 text-white py-2 rounded-lg flex items-center justify-center space-x-2 hover:bg-red-600 focus:outline-none"
            disabled={loading}>
            {loading ? (
              <div className="flex items-center justify-center space-x-2">
                <span className="animate-spin h-5 w-5 border-4 border-white border-t-transparent rounded-full"></span>
                <span>Signing in with Google...</span>
              </div>
            ) : (
              <>
                <img
                  src="https://searchengineland.com/figz/wp-content/seloads/2015/09/google-g-logo-2015-1920.png"
                  alt="Google"
                  className="w-5 h-5"
                />
                <span>Sign In with Google</span>
              </>
            )}
          </button>

          <div className="flex items-center justify-between">
            <hr className="w-full border-gray-300" />
            <span className="text-gray-500 mx-2">or</span>
            <hr className="w-full border-gray-300" />
          </div>

          {/* Username Input */}
          <div>
            <label
              htmlFor="username"
              className="block text-sm font-semibold text-gray-600">
              Username
            </label>
            <input
              type="text"
              id="username"
              name="username"
              value={userName}
              onChange={(e) => setUsername(e.target.value)}
              required
              className="w-full mt-2 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your username"
            />
          </div>

          {/* Password Input */}
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-semibold text-gray-600">
              Password
            </label>
            <div className="relative mt-2">
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your password"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-2 text-gray-600 focus:outline-none">
                {showPassword ? "Hide" : "Show"}
              </button>
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-red-500 text-white py-2 rounded-lg hover:bg-red-600 focus:outline-none"
            disabled={loading}>
            {loading ? "Signing In..." : "Sign In"}
          </button>
        </form>

        {/* Forgot Password */}
        <div className="mt-4 text-center">
          <button
            className="text-sm text-blue-500 hover:underline"
            onClick={() => console.log("Forgot password clicked")}>
            Forgot password?
          </button>
        </div>

        {/* Sign Up Link */}
        <div className="mt-6 text-center">
          <p className="text-sm text-gray-600">
            Dont have an account?{" "}
            <Link
              to="/employes/signupEm"
              className="text-blue-500 hover:underline">
              Sign up now!
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginEm;
