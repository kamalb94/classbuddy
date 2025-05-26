import React from 'react';

const Progress = () => {
    const dummyStats = [
        { label: "Feedback Sessions", value: 12 },
        { label: "Peers Reviewed", value: 45 },
        { label: "Feedback Submitted", value: 128 },
      ];
    
      const overallProgressPercent = 75; // example: 75% progress / rating
      const overallScore = 3.75; // example score out of 5
    
      // Dummy session scores for bars
      const dummyChartData = [
        { session: "Project Presentation", score: 4.5 },
        { session: "Midterm Reviews", score: 3.8 },
        { session: "Final Project", score: 4.2 },
      ];
    
      // Constants for SVG circle (progress wheel)
      const radius = 70;
      const circumference = 2 * Math.PI * radius;
      const offset = circumference - (overallProgressPercent / 100) * circumference;
    
      return (
        <div className="min-h-screen bg-gradient-to-tr from-black via-gray-900 to-gray-800 text-white p-8 flex flex-col items-center">
            <div className='text-[120px]'>🚧 </div>
          <h1 className="text-2xl font-extrabold mb-6 text-indigo-500">
            Progress Page Under Construction
          </h1>
          <p className="text-gray-400 mb-12 max-w-xl text-center">
            We're working hard to bring you detailed analytics and progress tracking.
            Meanwhile, here is a preview of how it will look.
          </p>
    
          {/* Analytics Section */}
          <div className="flex flex-col md:flex-row gap-16 w-full max-w-6xl items-center justify-center border border-indigo-600 py-20 rounded-xl">
            {/* Progress Wheel */}
            <div className="flex flex-col items-center space-y-4">
              <svg
                className="transform -rotate-90"
                width={160}
                height={160}
                viewBox="0 0 160 160"
              >
                <circle
                  className="text-gray-700"
                  strokeWidth="12"
                  stroke="currentColor"
                  fill="transparent"
                  r={radius}
                  cx="80"
                  cy="80"
                />
                <circle
                  className="text-indigo-500 transition-all duration-1000"
                  strokeWidth="12"
                  strokeLinecap="round"
                  stroke="currentColor"
                  fill="transparent"
                  r={radius}
                  cx="80"
                  cy="80"
                  strokeDasharray={circumference}
                  strokeDashoffset={offset}
                />
              </svg>
              <div className="text-center">
                <p className="text-indigo-400 font-semibold text-lg">
                  Overall Progress
                </p>
                <p className="text-4xl font-extrabold text-white">
                  {overallProgressPercent}%
                </p>
                <p className="text-gray-400">Average Score: {overallScore.toFixed(2)} ⭐</p>
              </div>
            </div>
    
            {/* Bar Charts */}
            <div className="flex-1 w-full max-w-3xl">
              <h2 className="text-xl font-semibold mb-6 text-indigo-400">
                Average Ratings by Session
              </h2>
    
              <div className="space-y-6 text-sm">
                {dummyChartData.map(({ session, score }) => {
                  const percent = (score / 5) * 100;
                  return (
                    <div key={session}>
                      <div className="flex justify-between mb-1 text-gray-300">
                        <span>{session}</span>
                        <span>{score.toFixed(1)} ⭐</span>
                      </div>
                      <div className="w-full bg-gray-700 rounded-full h-4">
                        <div
                          className="bg-indigo-500 h-4 rounded-full transition-all duration-500"
                          style={{ width: `${percent}%` }}
                          title={`${score.toFixed(1)} out of 5`}
                        ></div>
                      </div>
                    </div>
                  );
                })}
              </div>
    
              {/* Additional Stats */}
              <div className="grid grid-cols-3 gap-6 mt-12">
                {dummyStats.map(({ label, value }) => (
                  <div
                    key={label}
                    className="bg-gray-900 rounded-lg p-6 text-center shadow-lg"
                  >
                    <p className="text-3xl font-bold text-indigo-400">{value}</p>
                    <p className="mt-2 text-gray-400">{label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      );
    }

export default Progress