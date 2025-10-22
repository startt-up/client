import React from "react";
import { FaUpload, FaClock, FaCheckCircle } from "react-icons/fa";
import { FiCalendar, FiClock, FiUser } from "react-icons/fi";

const MentorDashboard = () => {
  const stats = [
    { title: "Total Uploads", value: 15, icon: <FaUpload />, color: "text-indigo-600" },
    { title: "Pending approvals", value: 2, icon: <FaClock />, color: "text-purple-600" },
    { title: "Approved resources", value: 12, icon: <FaCheckCircle />, color: "text-green-600" },
  ];

  const sessions = [
    {
      name: "Alex Kumar",
      topic: "React Hooks Deep Dive",
      date: "Oct 12, 2025",
      time: "2:00 PM",
      duration: "1 hour",
      status: "Pending",
    },
    {
      name: "Sarah Chen",
      topic: "System Design Interview Prep",
      date: "Oct 15, 2025",
      time: "4:30 PM",
      duration: "1.5 hours",
      status: "Pending",
    },
    {
      name: "Mike Johnson",
      topic: "Career Guidance - Product Manager",
      date: "Oct 10, 2025",
      time: "11:00 AM",
      duration: "45 min",
      status: "Confirmed",
    },
  ];

  return (
    <div className="min-h-screen bg-[#F8F9FF] px-8 py-6">
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-3xl font-semibold text-gray-800">Welcome back, Mentor!</h1>
        <p className="text-gray-500 text-sm">
          Here’s an overview of your contributions and sessions.
        </p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {stats.map((item, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-xl flex items-center justify-between px-6 py-5 border border-gray-100"
          >
            <div>
              <p className="text-gray-500 text-sm">{item.title}</p>
              <h2 className="text-2xl font-bold text-gray-800">{item.value}</h2>
            </div>
            <div className={`text-3xl ${item.color}`}>{item.icon}</div>
          </div>
        ))}
      </div>

      {/* Main Content */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* LEFT SIDE (Forms) */}
        <div className="lg:col-span-2 space-y-8">
          {/* Upload Study Material */}
          <div className="bg-white rounded-2xl shadow-md p-6 border border-gray-100">
            <h3 className="text-lg font-semibold mb-4">Upload Study Material</h3>
            <form className="space-y-4">
              <input
                type="text"
                placeholder="eg. Full Stack Developer"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-indigo-400 outline-none"
              />
              <textarea
                rows="3"
                placeholder="Outline the path"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-indigo-400 outline-none"
              ></textarea>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <select className="border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-indigo-400 outline-none">
                  <option value="">Select Subject</option>
                  <option value="Btech">BTech</option>
                  <option value="BCA">BCA</option>
                  <option value="MCA">MCA</option>
                </select>
                <input
                  type="password"
                  placeholder="Enter your password"
                  className="border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-indigo-400 outline-none"
                />
              </div>

              <div className="border-2 border-dashed border-gray-300 rounded-xl p-6 text-center">
                <p className="text-gray-500 mb-2">Upload a file or drag and drop</p>
                <label className="inline-block bg-indigo-100 text-indigo-700 px-4 py-2 rounded-md font-medium cursor-pointer hover:bg-indigo-200 transition">
                  Choose File
                  <input type="file" className="hidden" />
                </label>
              </div>

              <button
                type="submit"
                className="w-full bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700 transition font-medium"
              >
                Upload Material
              </button>
            </form>
          </div>

          {/* Propose Road Map */}
          <div className="bg-white rounded-2xl shadow-md p-6 border border-gray-100">
            <h3 className="text-lg font-semibold mb-4">Propose a Road Map</h3>
            <form className="space-y-4">
              <input
                type="text"
                placeholder="Roadmap Title (e.g., MERN Stack Journey)"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-indigo-400 outline-none"
              />
              <textarea
                rows="4"
                placeholder="Write the roadmap outline or key steps here..."
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-indigo-400 outline-none"
              ></textarea>

              <div className="flex justify-end">
                <button
                  type="submit"
                  className="bg-purple-600 text-white px-5 py-2 rounded-lg hover:bg-purple-700 transition font-medium"
                >
                  Submit Road Map
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* RIGHT SIDE (Session Requests) */}
        <div>
          <div className="bg-white rounded-2xl shadow-md p-6 border border-gray-100">
            <h3 className="text-lg font-semibold mb-4">Session Requests</h3>
            <div className="space-y-4">
              {sessions.map((session, index) => (
                <div
                  key={index}
                  className="border border-gray-200 rounded-lg p-4 hover:shadow-sm transition"
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-semibold text-gray-800">{session.name}</h4>
                      <p className="text-sm text-gray-500">{session.topic}</p>
                    </div>
                    <span
                      className={`text-xs font-medium px-2 py-1 rounded ${
                        session.status === "Confirmed"
                          ? "bg-green-100 text-green-700"
                          : "bg-yellow-100 text-yellow-700"
                      }`}
                    >
                      {session.status}
                    </span>
                  </div>

                  <div className="flex items-center gap-3 text-sm text-gray-500 mt-2">
                    <FiCalendar /> {session.date}
                    <FiClock /> {session.time}
                    <span>({session.duration})</span>
                  </div>

                  <div className="flex gap-3 mt-3">
                    <button className="flex-1 bg-green-100 text-green-700 py-1 rounded hover:bg-green-200">
                      Accept
                    </button>
                    <button className="flex-1 bg-red-100 text-red-700 py-1 rounded hover:bg-red-200">
                      Decline
                    </button>
                    <button className="flex-1 bg-indigo-100 text-indigo-700 py-1 rounded hover:bg-indigo-200">
                      Start Call
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MentorDashboard;
