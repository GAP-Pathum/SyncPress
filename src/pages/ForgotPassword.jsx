// src/pages/ForgotPassword.jsx
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const ForgotPassword = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");

  const handlePasswordReset = (e) => {
    e.preventDefault();
    // Implement password reset logic here (e.g., Firebase Auth resetPassword)
    // On success:
    alert("Password reset link sent!");
    navigate("/login");
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold text-center text-gray-800">Reset Password</h2>
        <form className="space-y-4" onSubmit={handlePasswordReset}>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500"
          />
          <button
            type="submit"
            className="w-full py-3 font-semibold text-white bg-indigo-500 rounded-md hover:bg-indigo-600"
          >
            Reset Password
          </button>
        </form>
        <p className="text-center text-gray-600">
          Remembered your password?{" "}
          <span
            onClick={() => navigate("/login")}
            className="text-indigo-600 cursor-pointer"
          >
            Login here
          </span>
        </p>
      </div>
    </div>
  );
};

export default ForgotPassword;
