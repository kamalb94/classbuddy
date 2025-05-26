import React from "react";

const feedbacks = [
  {
    id: 1,
    session: "Project Presentation Week",
    from: "Student A",
    to: "Student B",
    comments: "Great explanation and clear slides!",
    rating: 4,
  },
  {
    id: 2,
    session: "Project Presentation Week",
    from: "Student C",
    to: "Student D",
    comments: "Could improve on eye contact during presentation.",
    rating: 3,
  },
  {
    id: 3,
    session: "Midterm Peer Review",
    from: "Student E",
    to: "Student F",
    comments: "Very cooperative and helpful teammate.",
    rating: 5,
  },
  {
    id: 4,
    session: "Midterm Peer Review",
    from: "Student G",
    to: "Student H",
    comments: "Needs to participate more actively in discussions.",
    rating: 2,
  },
  {
    id: 5,
    session: "Final Project Feedback",
    from: "Student I",
    to: "Student J",
    comments: "Excellent coding skills and problem solving.",
    rating: 5,
  },
  {
    id: 6,
    session: "Final Project Feedback",
    from: "Student K",
    to: "Student L",
    comments: "Presentation was clear but a bit rushed.",
    rating: 3,
  },
  {
    id: 7,
    session: "Weekly Peer Review",
    from: "Student M",
    to: "Student N",
    comments: "Good teamwork and timely delivery.",
    rating: 4,
  },
  {
    id: 8,
    session: "Weekly Peer Review",
    from: "Student O",
    to: "Student P",
    comments: "Could improve on communication skills.",
    rating: 3,
  },
  {
    id: 9,
    session: "Weekly Peer Review",
    from: "Student Q",
    to: "Student R",
    comments: "Always well prepared and focused.",
    rating: 5,
  },
  {
    id: 10,
    session: "Weekly Peer Review",
    from: "Student S",
    to: "Student T",
    comments: "Needs to be more proactive in discussions.",
    rating: 2,
  },
];

export default function FeedbackReview() {
  return (
    <div className="min-h-screen bg-gray-900 p-8 text-gray-300">
      <h1 className="text-4xl font-bold mb-8 text-center text-indigo-400">
        Peer Feedback Review
      </h1>

      <div className="max-w-6xl mx-auto bg-gray-800 rounded-lg shadow-lg p-6">
        <table className="min-w-full divide-y divide-gray-700">
          <thead className="bg-indigo-700 text-gray-200">
            <tr>
              <th className="px-6 py-3 text-left text-sm font-semibold">Session</th>
              <th className="px-6 py-3 text-left text-sm font-semibold">From</th>
              <th className="px-6 py-3 text-left text-sm font-semibold">To</th>
              <th className="px-6 py-3 text-left text-sm font-semibold">Comments</th>
              <th className="px-6 py-3 text-left text-sm font-semibold">Rating</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-700">
            {feedbacks.map(({ id, session, from, to, comments, rating }) => (
              <tr
                key={id}
                className="hover:bg-indigo-900 transition-colors duration-200"
              >
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-indigo-300">
                  {session}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm">{from}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm">{to}</td>
                <td className="px-6 py-4 text-sm max-w-lg">{comments}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-yellow-400">
                  {"⭐".repeat(rating) + "☆".repeat(5 - rating)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
