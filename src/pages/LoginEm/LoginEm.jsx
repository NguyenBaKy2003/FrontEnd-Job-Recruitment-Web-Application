import { useState } from "react";
import { Link } from "react-router-dom";

const LoginEm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false); // State for loading

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login logic here
    console.log("Email:", email);
    console.log("Password:", password);
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

        {/* Sign In Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Google Sign-in */}
          <button
            type="button"
            onClick={handleGoogleSignIn}
            className="w-full bg-red-500 text-white py-2 rounded-lg flex items-center justify-center space-x-2 hover:bg-red-600 focus:outline-none">
            {loading ? (
              <div className="flex items-center justify-center space-x-2">
                <span className="loader"></span>{" "}
                {/* You can add a simple loading spinner here */}
                <span>Signing in with Google...</span>
              </div>
            ) : (
              <>
                <img
                  src="https://searchengineland.com/figz/wp-content/seloads/2015/09/google-g-logo-2015-1920.png"
                  alt="Google"
                  className="w-1/6 rounded-full"
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

          {/* Email and Password Fields */}
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-semibold text-gray-600">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full mt-2 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your email"
            />
          </div>

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
                className="absolute right-3 top-2 text-gray-600">
                {showPassword ? "Hide" : "Show"}
              </button>
            </div>
          </div>

          <div className="flex justify-between items-center">
            <button
              type="submit"
              className="w-full bg-red-500 text-white py-2 rounded-lg hover:bg-red-600 focus:outline-none">
              Sign In with Email
            </button>
          </div>
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
            Do not have an account?{" "}
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
