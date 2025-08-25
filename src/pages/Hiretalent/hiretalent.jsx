"use client";

import { Briefcase, MapPin, Star, Users } from "lucide-react";
import { useState } from "react";

// Dummy Data
const dummyTalent = [
  {
    id: 1,
    name: "Jane Doe",
    role: "Frontend Developer",
    location: "Lagos, Nigeria",
    experience: "3 years",
    skills: ["React", "Next.js", "Tailwind CSS"],
    rating: 4.5,
  },
  {
    id: 2,
    name: "Michael Smith",
    role: "UI/UX Designer",
    location: "Abuja, Nigeria",
    experience: "5 years",
    skills: ["Figma", "Sketch", "Illustrator"],
    rating: 4.8,
  },
  {
    id: 3,
    name: "Sarah Johnson",
    role: "Backend Developer",
    location: "Port Harcourt, Nigeria",
    experience: "4 years",
    skills: ["Node.js", "Express", "MongoDB"],
    rating: 4.6,
  },
];

export default function HireTalent() {
  const [talents] = useState(dummyTalent);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-semibold text-white mb-6">
        Hire Top Talent
      </h1>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {talents.map((talent) => (
          <div
            key={talent.id}
            className="border border-[#1C1D20] bg-[#111] rounded-2xl p-5 hover:border-blue-500 transition"
          >
            <div className="flex items-center justify-between mb-3">
              <h2 className="text-lg font-semibold text-white">
                {talent.name}
              </h2>
              <span className="flex items-center text-yellow-400 text-sm">
                <Star className="w-4 h-4 mr-1" />
                {talent.rating}
              </span>
            </div>

            <p className="text-gray-400 text-sm mb-2 flex items-center">
              <Briefcase className="w-4 h-4 mr-2" />
              {talent.role}
            </p>

            <p className="text-gray-400 text-sm mb-2 flex items-center">
              <MapPin className="w-4 h-4 mr-2" />
              {talent.location}
            </p>

            <p className="text-gray-400 text-sm mb-2 flex items-center">
              <Users className="w-4 h-4 mr-2" />
              {talent.experience} experience
            </p>

            <div className="flex flex-wrap gap-2 mt-3">
              {talent.skills.map((skill, i) => (
                <span
                  key={i}
                  className="px-3 py-1 text-xs rounded-full bg-blue-500/10 text-blue-400"
                >
                  {skill}
                </span>
              ))}
            </div>

            <button className="w-full mt-4 py-2 rounded-lg bg-gradient-to-r from-blue-500 to-purple-500 text-white text-sm font-medium hover:opacity-90 transition">
              Hire {talent.name.split(" ")[0]}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
