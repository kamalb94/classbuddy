import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {
    useLoginUserMutation,
    useRegisterUserMutation,
} from "../features/Apis/authApi"; // adjust path as needed
import { setUser } from "../redux/userSlice";

export default function AuthModal({ onClose }) {
    const dispatch = useDispatch();
  const [isSignIn, setIsSignIn] = useState(true);
  const [formData, setFormData] = useState({
    email: "",
    name: "",
    role: "",
    password: "",
    confirmPassword: "",
  });
  const [error, setError] = useState(null);

  const [loginUser] = useLoginUserMutation();
  const [registerUser] = useRegisterUserMutation();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);

    const { email, password, confirmPassword, name, role } = formData;

    if (!isSignIn && password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    try {
      if (isSignIn) {
        const res = await loginUser({ email, password }).unwrap();
        console.log("Login success:", res.user);
        if(res.user){
            dispatch(setUser(res.user))
        }
        onClose();
      } else {
        const res = await registerUser({ email, password, name, role }).unwrap();
        console.log("Registration success:", res.user);

        if(res.user){
            dispatch(setUser(res.user))
        }
        onClose();
      }
    } catch (err) {
      console.error("Auth error:", err);
      setError(err?.data?.message || "Something went wrong");
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70 backdrop-blur-sm">
      <div className="bg-gray-800 p-8 rounded-xl shadow-xl w-full max-w-md">
        <h3 className="text-2xl font-bold text-white mb-6">
          {isSignIn ? "Sign In" : "Sign Up"}
        </h3>

        <form className="space-y-4" onSubmit={handleSubmit}>
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 rounded-md bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />

          {!isSignIn && (
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 rounded-md bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          )}

          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 rounded-md bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />

          {!isSignIn && (
            <input
              type="password"
              name="confirmPassword"
              placeholder="Confirm Password"
              value={formData.confirmPassword}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 rounded-md bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          )}

{!isSignIn && (
  <div className="w-full">
    <label className="block text-gray-300 mb-1">You are:</label>
    <select
      name="role"
      value={formData.role}
      onChange={handleChange}
      className="w-full px-4 py-2 rounded-md bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-500"
      required
    >
      <option value="student">Student</option>
      <option value="instructor">Instructor</option>
    </select>
  </div>
)}

          {error && (
            <p className="text-red-400 text-sm text-center">{error}</p>
          )}

          <button
            type="submit"
            className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 rounded-md transition"
          >
            {isSignIn ? "Log In" : "Register"}
          </button>
        </form>

        <p className="mt-4 text-sm text-gray-400 text-center">
          {isSignIn ? "Don't have an account?" : "Already have an account?"}{" "}
          <button
            onClick={() => {
              setIsSignIn(!isSignIn);
              setError(null); // Clear error on switch
            }}
            className="text-indigo-400 hover:underline font-semibold"
          >
            {isSignIn ? "Sign Up" : "Sign In"}
          </button>
        </p>

        <button
          onClick={onClose}
          className="mt-4 w-full text-sm text-gray-400 hover:text-white"
        >
          Cancel
        </button>
      </div>
    </div>
  );
}
