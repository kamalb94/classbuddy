// SessionDetails.jsx
import React from "react";
import { useParams } from "react-router-dom";

const feedbacks = [
  { id: 1, session: "Project Presentation Week", from: "Student A", to: "Student B", comments: "Great explanation and clear slides!", rating: 4 },
  { id: 2, session: "Project Presentation Week", from: "Student C", to: "Student D", comments: "Could improve on eye contact during presentation.", rating: 3 },
  { id: 3, session: "Midterm Peer Review", from: "Student E", to: "Student F", comments: "Very cooperative and helpful teammate.", rating: 5 },
  { id: 4, session: "Midterm Peer Review", from: "Student G", to: "Student H", comments: "Needs to participate more actively in discussions.", rating: 2 },
  { id: 5, session: "Final Project Feedback", from: "Student I", to: "Student J", comments: "Excellent coding skills and problem solving.", rating: 5 },
  { id: 6, session: "Final Project Feedback", from: "Student K", to: "Student L", comments: "Presentation was clear but a bit rushed.", rating: 3 },
];

export default function SessionDetails() {
  const { slug } = useParams();
  const filteredFeedbacks = feedbacks.filter(f => f.session === decodeURIComponent(slug));


  return (
    <div className="min-h-screen bg-gray-900 p-8 text-gray-300">
      <h1 className="text-3xl font-bold mb-6 text-indigo-400 text-center">
        {decodeURIComponent(slug)} - Feedback Overview
      </h1>

      <div className="max-w-6xl mx-auto bg-gray-800 rounded-lg shadow-lg p-6 overflow-x-auto">
        {filteredFeedbacks.length === 0 ? (
          <p className="text-center text-gray-400">No feedback found for this session.</p>
        ) : (
          <table className="min-w-full divide-y divide-gray-700">
            <thead className="bg-indigo-700 text-gray-200">
              <tr>
                <th className="px-6 py-3 text-left text-sm font-semibold">From</th>
                <th className="px-6 py-3 text-left text-sm font-semibold">To</th>
                <th className="px-6 py-3 text-left text-sm font-semibold">Comments</th>
                <th className="px-6 py-3 text-left text-sm font-semibold">Rating</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-700">
              {filteredFeedbacks.map(({ id, from, to, comments, rating }) => (
                <tr key={id} className="hover:bg-indigo-900 transition duration-200">
                  <td className="px-6 py-4 whitespace-nowrap text-sm">{from}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm">{to}</td>
                  <td className="px-6 py-4 text-sm max-w-md">{comments}</td>
                  <td className="px-6 py-4 text-yellow-400 text-sm">
                    {"⭐".repeat(rating) + "☆".repeat(5 - rating)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}
