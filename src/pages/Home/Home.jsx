import React from "react";
import { Users, Briefcase, Search, Workflow } from "lucide-react";
import { Link } from "react-router-dom";

const DashboardSection = () => {
  return (
    <div className="p-6 space-y-8 bg-[#0f0f0f] min-h-screen text-gray-100">

      {/* Quick Links */}
      <div>
        <h2 className="text-lg font-semibold mb-4">Quick Links</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {/* Card */}
          <Link to="./hire-talent" className="rounded-xl border border-gray-700 p-6 bg-[#1a1a1a] hover:bg-[#222] transition hover:ring-1 ring-blue-500" >
            <Users className="w-6 h-6 mb-3 text-blue-400" />
            <h3 className="font-semibold">Hire Talents</h3>
            <p className="text-sm text-gray-400">Find and hire the right people.</p>
          </Link>

          <Link to="./post-job" className="rounded-xl border border-gray-700 p-6 bg-[#1a1a1a] hover:bg-[#222] transition hover:ring-1 ring-blue-500">
            <Briefcase className="w-6 h-6 mb-3 text-green-400" />
            <h3 className="font-semibold">Post a Job</h3>
            <p className="text-sm text-gray-400">
              Post a new job opening and reach qualified candidates.
            </p>
          </Link>

          <Link to="./browse-talent" className="rounded-xl border border-gray-700 p-6 bg-[#1a1a1a] hover:bg-[#222] transition hover:ring-1 ring-blue-500">
            <Search className="w-6 h-6 mb-3 text-purple-400" />
            <h3 className="font-semibold">Browse Talent</h3>
            <p className="text-sm text-gray-400">Explore available candidates.</p>
          </Link>

          <Link to="./manage-hire" className="rounded-xl border border-gray-700 p-6 bg-[#1a1a1a] hover:bg-[#222] transition hover:ring-1 ring-blue-500">
            <Workflow className="w-6 h-6 mb-3 text-orange-400" />
            <h3 className="font-semibold">Manage Hires</h3>
            <p className="text-sm text-gray-400">Track and manage hired people.</p>
          </Link>
        </div>

      </div>


      {/* Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="rounded-xl border border-gray-700 p-5 text-center bg-[#1a1a1a] hover:bg-[#222] transition">
          <p className="text-sm text-gray-400">New Matches</p>
          <h3 className="text-2xl font-bold text-white">0</h3>
          <span className="text-xs text-gray-500">0%</span>
        </div>
        <div className="rounded-xl border border-gray-700 p-5 text-center bg-[#1a1a1a] hover:bg-[#222] transition">
          <p className="text-sm text-gray-400">Jobs Listed</p>
          <h3 className="text-2xl font-bold text-white">0</h3>
          <span className="text-xs text-gray-500">0%</span>
        </div>
        <div className="rounded-xl border border-gray-700 p-5 text-center bg-[#1a1a1a] hover:bg-[#222] transition">
          <p className="text-sm text-gray-400">Total Hires</p>
          <h3 className="text-2xl font-bold text-white">0</h3>
          <span className="text-xs text-gray-500">0%</span>
        </div>
      </div>

      {/* Latest Posting + What's New */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        <div className="col-span-2 rounded-xl border border-gray-700 p-5 bg-[#1a1a1a] hover:bg-[#222] transition">
          <div className="flex justify-between items-center mb-4">
            <h3 className="font-semibold text-white">Latest Posting</h3>
            <button className="text-blue-400 text-sm hover:underline">See more</button>
          </div>
          <div className="h-28 bg-[#2a2a2a] rounded-xl grid place-items-center text-gray-500">
            Posting placeholder
          </div>
        </div>

        <div className="rounded-xl border border-gray-700 p-5 bg-gradient-to-br from-purple-800/50 to-purple-600/30">
          <h3 className="font-semibold mb-2 text-white">What's New?</h3>
          <p className="text-sm text-gray-300">
            Let’s do it for you! 🚀 Stay updated with the latest features.
          </p>
        </div>
      </div>
    </div>
  );
};

export default DashboardSection;
