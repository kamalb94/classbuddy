import React, { useState } from "react";

const sessions = [
  "Project Presentation Week",
  "Midterm Reviews",
  "Final Project Feedback",
];

const peers = [
  "Peer 1",
  "Peer 2",
  "Peer 3",
  // This list should be dynamic in a real app — fetch from backend
];

export default function Feedback() {
  const [formData, setFormData] = useState({
    session: "",
    peer: "",
    feedback: "",
    rating: 0, // added rating
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: name === "rating" ? Number(value) : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate
    if (
      !formData.session ||
      !formData.peer ||
      !formData.feedback.trim() ||
      formData.rating === 0
    ) {
      alert("Please complete all fields, including rating, before submitting.");
      return;
    }

    // Simulate submission (in real app, call backend API)
    console.log("Feedback submitted:", formData);

    setSubmitted(true);
    setFormData({ session: "", peer: "", feedback: "", rating: 0 });
  };

  return (
    <div className="min-h-screen bg-gradient-to-tr from-black via-gray-900 to-gray-800 flex items-center justify-center p-6
">
      <div className="bg-gray-900 bg-opacity-90 rounded-xl shadow-2xl max-w-lg w-full p-8 border border-neutral-700">
        <h2 className="text-2xl font-bold mb-6 text-white text-center">
          Anonymous Peer Feedback
        </h2>

        {submitted ? (
          <div className="text-center text-green-400 text-lg">
            Thank you for your feedback! 🙌
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Session Select */}
            <div>
              <label
                htmlFor="session"
                className="block mb-2 text-sm font-semibold text-gray-300"
              >
                Select Session
              </label>
              <select
                name="session"
                id="session"
                value={formData.session}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-md bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
                required
              >
                <option value="" disabled>
                  -- Choose a session --
                </option>
                {sessions.map((session, i) => (
                  <option key={i} value={session}>
                    {session}
                  </option>
                ))}
              </select>
            </div>

            {/* Peer Select */}
            <div>
              <label
                htmlFor="peer"
                className="block mb-2 text-sm font-semibold text-gray-300"
              >
                Select Peer to Review
              </label>
              <select
                name="peer"
                id="peer"
                value={formData.peer}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-md bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
                required
              >
                <option value="" disabled>
                  -- Choose a peer --
                </option>
                {peers.map((peer, i) => (
                  <option key={i} value={peer}>
                    {peer}
                  </option>
                ))}
              </select>
            </div>

            {/* Feedback Textarea */}
            <div>
              <label
                htmlFor="feedback"
                className="block mb-2 text-sm font-semibold text-gray-300"
              >
                Your Feedback (Anonymous)
              </label>
              <textarea
                name="feedback"
                id="feedback"
                value={formData.feedback}
                onChange={handleChange}
                placeholder="Write your feedback here..."
                rows={5}
                className="w-full px-4 py-3 rounded-md bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition resize-none"
                required
              ></textarea>
            </div>

            {/* Rating Input */}
            <div>
              <label
                htmlFor="rating"
                className="block mb-2 text-sm font-semibold text-gray-300"
              >
                Rate Your Peer (1 - 5)
              </label>
              <select
                name="rating"
                id="rating"
                value={formData.rating}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-md bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
                required
              >
                <option value={0} disabled>
                  -- Select rating --
                </option>
                {[1, 2, 3, 4, 5].map((num) => (
                  <option key={num} value={num}>
                    {num} {num === 1 ? "star" : "stars"}
                  </option>
                ))}
              </select>
            </div>

            <button
              type="submit"
              className="w-full bg-indigo-600 hover:bg-indigo-700 transition text-white font-semibold py-3 rounded-md shadow-md"
            >
              Submit Feedback
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
