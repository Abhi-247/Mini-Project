import React, { useState } from "react";
import { User, Store, Lock, Mail, Eye, EyeOff } from "lucide-react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";
import { auth, db } from "../firebase/firebase";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const Login = () => {
  const [userType, setUserType] = useState("vendor");
  const [showPassword, setShowPassword] = useState(false);

  const { login } = useAuth();
  const navigate = useNavigate();

  const [loginData, setLoginData] = useState({
    identifier: "",
    password: "",
  });

  const handleChange = (e) => {
    setLoginData({ ...loginData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Login user
      const res = await signInWithEmailAndPassword(auth, loginData.identifier, loginData.password);

      // Determine role based on userType selection
      const userDoc = await getDoc(doc(db, userType === "admin" ? "admins" : "vendors", res.user.uid));

      if (!userDoc.exists()) {
        alert("User not found in database. Contact support.");
        return;
      }

      const role = userDoc.data().role;
      login(role);

      // Redirect based on role
      if (role === "admin") navigate("/admin");
      if (role === "vendor") navigate("/vendor");
    } catch (error) {
      alert(error.message);
    }
  };

  const handleForgotPassword = () => {
    alert("Password reset link will be sent to your email.");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 flex items-center justify-center px-6 py-12 mt-7">
      <div className="w-full max-w-md">

        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-3 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Welcome Back
          </h1>
          <p className="text-gray-600 text-lg">Sign in to your VendorConnect account</p>
        </div>

        {/* User Type Toggle */}
        <div className="bg-white rounded-2xl shadow-lg p-2 mb-6 flex gap-2">
          <button
            onClick={() => setUserType("vendor")}
            className={`flex-1 py-3 px-4 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center gap-2 ${
              userType === "vendor"
                ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg"
                : "text-gray-600 hover:bg-gray-50"
            }`}
          >
            <Store className="w-5 h-5" />
            Vendor
          </button>
          <button
            onClick={() => setUserType("admin")}
            className={`flex-1 py-3 px-4 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center gap-2 ${
              userType === "admin"
                ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg"
                : "text-gray-600 hover:bg-gray-50"
            }`}
          >
            <User className="w-5 h-5" />
            Admin
          </button>
        </div>

        {/* Login Form */}
        <div className="bg-white rounded-3xl shadow-xl p-8 md:p-10">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl flex items-center justify-center text-white">
              {userType === "admin" ? <User className="w-6 h-6" /> : <Store className="w-6 h-6" />}
            </div>
            <div>
              <h2 className="text-2xl font-bold text-gray-800">
                {userType === "admin" ? "Admin Login" : "Vendor Login"}
              </h2>
              <p className="text-sm text-gray-600">Enter your credentials to continue</p>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Email/Username */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                {userType === "admin" ? "Email" : "Email Address"} *
              </label>
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="email"
                  name="identifier"
                  value={loginData.identifier}
                  onChange={handleChange}
                  placeholder="Enter your email"
                  className="w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-purple-500"
                  required
                />
              </div>
            </div>

            {/* Password */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Password *</label>
              <div className="relative">
                <Lock className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  value={loginData.password}
                  onChange={handleChange}
                  placeholder="Enter your password"
                  className="w-full pl-12 pr-12 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-purple-500"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-500"
                >
                  {showPassword ? <EyeOff /> : <Eye />}
                </button>
              </div>
            </div>

            {/* Options */}
            <div className="flex items-center justify-between">
              <label className="flex items-center gap-2 cursor-pointer">
                <input type="checkbox" className="w-4 h-4 text-purple-600" />
                <span className="text-sm text-gray-700">Remember me</span>
              </label>

              <button type="button" onClick={handleForgotPassword} className="text-sm text-purple-600 font-semibold">
                Forgot Password?
              </button>
            </div>

            {/* Submit */}
            <button className="w-full py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold rounded-xl shadow-lg hover:scale-105">
              Sign In
            </button>
          </form>

          {/* Divider */}
          <div className="relative my-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-200"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-4 bg-white text-gray-500">OR</span>
            </div>
          </div>

          {/* Sign Up link */}
          <p className="text-center text-sm text-gray-600">
            Don’t have an account?{" "}
            <a href="/signup" className="text-purple-600 font-semibold">
              Create Account
            </a>
          </p>
        </div>

        {/* Footer Info */}
        <p className="text-xs text-center text-gray-600 mt-4">
          {userType === "vendor"
            ? "🔒 Vendor accounts require admin approval before accessing the dashboard."
            : "🔐 Admin accounts have system-wide access permissions."}
        </p>
      </div>
    </div>
  );
};

export default Login;
