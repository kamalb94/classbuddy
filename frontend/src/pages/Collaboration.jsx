import React from "react";

export default function Collaboration() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-bl from-[#1a2332] to-[#020204]  text-white p-8">
      <h1 className="text-3xl font-bold mb-6 mt-12">Seamless Collaboration</h1>
      <p className="max-w-xl text-lg mb-4 opacity-80 text-center">
        This is the Collaboration Lab! Here you can share notes, chat, and
        work on group projects effortlessly. We're still building this feature,
        but stay tuned for updates!
      </p>

      <img
        src="./under_construction.svg"
        alt="Work in progress"
        className="w-72 h-72"
      />

      <div className="bg-[#1a2332] rounded-lg p-6 shadow-lg max-w-xl w-full mt-4">
        <h2 className="text-2xl font-semibold mb-4">Coming Soon</h2>
        <ul className="list-disc list-inside space-y-2 text-[#f0c0c0]">
          <li>Real-time chat rooms</li>
          <li>Shared document editing</li>
          <li>Task assignments and deadlines</li>
        </ul>
      </div>
    </div>
  );
}
