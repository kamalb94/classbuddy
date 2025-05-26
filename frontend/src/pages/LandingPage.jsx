import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import AuthModal from "../modals/AuthModal"; // adjust path accordingly

export default function LandingPage() {
  const [showModal, setShowModal] = useState(false);
  const user = useSelector((state) => state.user.user);
 
  const navigate = useNavigate();

  // Handler to check login and navigate or open modal
  const handleAction = (path) => {
    if (user) {
      navigate(path);
    } else {
      setShowModal(true);
    }
  };

  const features = [
    {
      title: "Seamless Collaboration",
      desc: "Share notes, chat, and work on group projects effortlessly.",
      route: "/collaboration",
    },
    {
      title: "Personalized Feedback",
      desc: "Give and receive feedback to help each other improve.",
      route: "/feedback",
    },
    {
      title: "Track Your Progress",
      desc: "Monitor your learning journey with detailed analytics.",
      route: "/progress",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-gray-900 text-gray-100">
      {/* Navigation */}
      <nav className="flex justify-between items-center p-6 bg-gray-800 shadow-md sticky top-0 z-10">
        <div className="text-2xl font-bold text-indigo-400">ClassBuddy</div>
        <ul className="hidden md:flex space-x-8 text-gray-300 font-medium">
          <li>
            <a href="#features" className="hover:text-indigo-400 transition">
              Features
            </a>
          </li>
          <li>
            <a href="#about" className="hover:text-indigo-400 transition">
              About
            </a>
          </li>
          <li>
            <a href="#contact" className="hover:text-indigo-400 transition">
              Contact
            </a>
          </li>
        </ul>
        <button
          onClick={() => handleAction("/sessions")}
          className="hidden md:block bg-indigo-600 text-white px-5 py-2 rounded-md hover:bg-indigo-700 transition"
        >
          Get Started
        </button>
      </nav>

      {/* Hero Section */}
      <header className="flex-grow bg-gradient-to-r from-indigo-700 via-purple-700 to-pink-700 text-white px-6 py-24">
  <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
    
    {/* Text content */}
    <div className="flex-1 text-center md:text-left">
      <h1 className="text-5xl font-extrabold mb-4 leading-tight">
        Your Ultimate Study Companion
      </h1>
      <p className="mb-8 text-lg opacity-90 max-w-md mx-auto md:mx-0">
        Connect, collaborate, and succeed with ClassBuddy — the smart platform for students.
      </p>
      <button
        onClick={() => handleAction("/sessions")}
        className="bg-white text-indigo-700 font-semibold px-8 py-3 rounded-md shadow-md hover:bg-gray-200 transition"
      >
        Join Now
      </button>
    </div>

    {/* Illustration image */}
    <div className="flex-1">
      <img
        src="studying.svg"
        alt="Studying Illustration"
        className="w-full max-w-md mx-auto"
      />
    </div>
  </div>
</header>


      {/* Features Section */}
      <section
        id="features"
        className="py-20 px-6 text-center max-w-6xl mx-auto"
      >
        <h2 className="text-4xl font-bold mb-12 text-white">Features</h2>
        <div className="grid md:grid-cols-3 gap-10">
        {features.map((feature, idx) => (
          <div
            key={idx}
            className="bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition"
          >
            <h3 className="text-2xl font-semibold mb-3 text-indigo-400">
              {feature.title}
            </h3>
            <p className="text-gray-300">{feature.desc}</p>
            <button
              onClick={() => handleAction(feature.route)}
              className="mt-4 text-sm text-indigo-400 hover:underline"
            >
              Try Now
            </button>
          </div>
        ))}
      </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6 max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-6 text-white">About ClassBuddy</h2>
        <p className="text-gray-300 text-lg leading-relaxed">
          ClassBuddy is designed to empower students by connecting them
          through a smart and easy-to-use platform, fostering collaboration and
          personal growth.
        </p>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6 max-w-xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-6 text-white">Contact Us</h2>
        <p className="text-gray-400 mb-8">
          Reach out to us at{" "}
          <a
            href="mailto:support@classbuddy.com"
            className="text-indigo-400 hover:underline"
          >
            support@classbuddy.com
          </a>
        </p>
        <button
          onClick={() => handleAction("/sessions")}
          className="inline-block bg-indigo-600 hover:bg-indigo-700 text-white font-semibold px-6 py-3 rounded-md transition"
        >
          Create Your Account
        </button>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-gray-400 py-8 text-center">
        <p>© 2025 ClassBuddy. All rights reserved.</p>
        <div className="mt-4 space-x-6">
          <a href="#" className="hover:text-white">
            Twitter
          </a>
          <a href="#" className="hover:text-white">
            LinkedIn
          </a>
          <a href="#" className="hover:text-white">
            GitHub
          </a>
        </div>
      </footer>

      {/* Show Auth Modal */}
      {showModal && <AuthModal onClose={() => setShowModal(false)} />}
    </div>
  );
}
