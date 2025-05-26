import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { useCreateSessionMutation, useGetAllSessionsQuery } from '../features/Apis/sessionsApi';
// adjust path if needed

export default function Sessions() {

  const user = useSelector((state)=>state.user.user);
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    deadline: '',
    allowAnonymous: true,
    maxFeedbackPerStudent: 1,
  });

  // Replace with actual logged-in user ID (from auth state, etc.)
  const createdBy = user?._id;

  const { data: sessions, isLoading: isFetchingSessions } = useGetAllSessionsQuery();
  const [createSession, { isLoading: isCreating }] = useCreateSessionMutation();

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.title || !createdBy) return;

    try {
      const payload = {
        ...formData,
        createdBy,
      };

      await createSession(payload).unwrap();
      setFormData({
        title: '',
        description: '',
        deadline: '',
        allowAnonymous: true,
        maxFeedbackPerStudent: 1,
      });
      setShowForm(false);
    } catch (err) {
      console.error('RTK Mutation Error:', err);
    }
  };

  return (
    <div className="dark bg-gray-900 min-h-screen text-white py-10 px-6">
      <div className="flex justify-between items-center max-w-6xl mx-auto mb-6">
        <h1 className="text-3xl font-bold">Feedback Sessions</h1>
        <button
          onClick={() => setShowForm(!showForm)}
          className="bg-indigo-600 hover:bg-indigo-700 px-4 py-2 rounded-md text-white font-semibold"
        >
          {showForm ? 'Cancel' : 'Add New Session'}
        </button>
      </div>

      {showForm && (
        <form
          onSubmit={handleSubmit}
          className="bg-gray-800 p-6 rounded-lg border border-gray-700 mb-6 max-w-6xl mx-auto space-y-4"
        >
          <input
            type="text"
            name="title"
            placeholder="Session Title (required)"
            value={formData.title}
            onChange={handleChange}
            className="w-full p-2 rounded bg-gray-700 text-white border border-gray-600"
            required
          />

          <input
            type="text"
            name="description"
            placeholder="Description (optional)"
            value={formData.description}
            onChange={handleChange}
            className="w-full p-2 rounded bg-gray-700 text-white border border-gray-600"
          />

          <input
            type="date"
            name="deadline"
            value={formData.deadline}
            onChange={handleChange}
            className="w-full p-2 rounded bg-gray-700 text-white border border-gray-600"
          />

          <div className="flex items-center space-x-2">
            <input
              type="checkbox"
              name="allowAnonymous"
              checked={formData.allowAnonymous}
              onChange={handleChange}
              className="form-checkbox h-5 w-5 text-indigo-600"
            />
            <label className="text-sm">Allow Anonymous Feedback</label>
          </div>

          <div>
            <label className="block text-sm mb-1">Max Feedback per Student</label>
            <input
              type="number"
              name="maxFeedbackPerStudent"
              min={1}
              value={formData.maxFeedbackPerStudent}
              onChange={handleChange}
              className="w-full p-2 rounded bg-gray-700 text-white border border-gray-600"
            />
          </div>

          <button
            type="submit"
            disabled={isCreating}
            className="bg-green-600 hover:bg-green-700 px-4 py-2 rounded text-white font-semibold"
          >
            {isCreating ? 'Creating...' : 'Create Session'}
          </button>
        </form>
      )}

      {isFetchingSessions ? (
        <div className="text-center text-gray-400">Loading sessions...</div>
      ) : (
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
          {sessions?.map((session) => (
            <Link
              key={session._id}
              to={`/session/${encodeURIComponent(session.title)}`}
              className="bg-gray-800 p-4 rounded-lg shadow-sm border border-gray-700 hover:border-indigo-500 transition-all block"
            >
              <h2 className="text-lg font-semibold mb-1">{session.title}</h2>
              <p className="text-sm text-gray-300 mb-2">{session.description}</p>
              <div className="text-xs text-gray-400">
                Deadline: {session.deadline ? new Date(session.deadline).toLocaleDateString() : 'N/A'}
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
