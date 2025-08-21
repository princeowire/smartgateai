import React from 'react';
import { TrendingUp, Users, BookOpen, Target, ArrowUpRight, Star, Clock, MapPin, Briefcase, Crown, Zap } from 'lucide-react';

export default function Dashboard() {
  // Antique gold palette (no config needed)
  // main:   #C9A646
  // light:  #E6C77C
  // dark:   #8C6C1F
  const stats = [
    { label: 'Job Matches', value: '24', change: '+12%', color: 'bg-gradient-to-r from-[#E6C77C] to-[#C9A646]', icon: Briefcase },
    { label: 'Skills Developed', value: '8', change: '+25%', color: 'bg-gradient-to-r from-[#C9A646] to-[#8C6C1F]', icon: Zap },
    { label: 'Network Growth', value: '156', change: '+18%', color: 'bg-gradient-to-r from-[#E6C77C] to-[#C9A646]', icon: Users },
    { label: 'Learning Hours', value: '42h', change: '+8%', color: 'bg-gradient-to-r from-[#C9A646] to-[#8C6C1F]', icon: BookOpen }
  ];

  const jobRecommendations = [
    { title: 'Senior Software Engineer', company: 'TechCorp', location: 'Remote', salary: '$120k - $160k', match: 95, logo: '🚀' },
    { title: 'Full Stack Developer', company: 'StartupXYZ', location: 'San Francisco', salary: '$100k - $140k', match: 87, logo: '💡' },
    { title: 'DevOps Engineer', company: 'CloudTech', location: 'Austin', salary: '$110k - $150k', match: 82, logo: '☁️' }
  ];

  const skillDevelopment = [
    { skill: 'React Advanced Patterns', progress: 75, timeLeft: '2 days' },
    { skill: 'Machine Learning Basics', progress: 45, timeLeft: '1 week' },
    { skill: 'System Design', progress: 90, timeLeft: '3 hours' }
  ];

  return (
    <div className="p-6 space-y-8 bg-black min-h-screen">
      <div>
        <h1 className="text-3xl font-bold text-[#C9A646] mb-2">
          Welcome back, <span className="text-[#E6C77C]">John!</span>
        </h1>
        <p className="text-[#E6C77C]/70">Here's your personalized workforce development overview</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="bg-black rounded-xl p-6 shadow-2xl border border-[#C9A646]/30 hover:border-[#E6C77C]/60 hover:shadow-[0_0_24px_0_#C9A64633] transition-all duration-300"
          >
            <div className="flex items-center justify-between mb-4">
              <div className={`w-12 h-12 ${stat.color} rounded-lg flex items-center justify-center shadow-lg`}>
                <stat.icon className="w-6 h-6 text-black" />
              </div>
              <span className="text-[#E6C77C] text-sm font-medium flex items-center">
                {stat.change}
                <ArrowUpRight className="w-4 h-4 ml-1" />
              </span>
            </div>
            <p className="text-2xl font-bold text-white mb-1">{stat.value}</p>
            <p className="text-[#E6C77C]/80 text-sm">{stat.label}</p>
          </div>
        ))}
      </div>

      {/* AI Recommendations */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Job Matches */}
        <div className="bg-black rounded-xl p-6 shadow-2xl border border-[#C9A646]/30">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center space-x-2">
              <Crown className="w-5 h-5 text-[#C9A646]" />
              <h2 className="text-xl font-semibold text-white">AI Job Recommendations</h2>
            </div>
            <button className="text-[#C9A646] hover:text-[#E6C77C] text-sm font-medium transition-colors duration-300">View All</button>
          </div>
          <div className="space-y-4">
            {jobRecommendations.map((job, index) => (
              <div
                key={index}
                className="p-4 border border-[#C9A646]/30 rounded-lg hover:border-[#E6C77C]/60 hover:shadow-[0_0_16px_0_#C9A64626] transition-all duration-300 cursor-pointer bg-black/40 backdrop-blur-sm"
              >
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-gradient-to-r from-[#E6C77C] to-[#C9A646] rounded-lg flex items-center justify-center text-xl shadow-lg">
                      {job.logo}
                    </div>
                    <div>
                      <h3 className="font-semibold text-white">{job.title}</h3>
                      <p className="text-[#E6C77C]/80 text-sm">{job.company}</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Star className="w-4 h-4 text-[#C9A646] fill-current" />
                    <span className="text-sm font-medium text-[#C9A646]">{job.match}%</span>
                  </div>
                </div>
                <div className="flex items-center justify-between text-sm text-[#E6C77C]/70">
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center">
                      <MapPin className="w-4 h-4 mr-1" />
                      {job.location}
                    </div>
                    <div className="flex items-center">
                      <Briefcase className="w-4 h-4 mr-1" />
                      {job.salary}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Skill Development */}
        <div className="bg-black rounded-xl p-6 shadow-2xl border border-[#C9A646]/30">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center space-x-2">
              <Zap className="w-5 h-5 text-[#C9A646]" />
              <h2 className="text-xl font-semibold text-white">Current Learning Path</h2>
            </div>
            <button className="text-[#C9A646] hover:text-[#E6C77C] text-sm font-medium transition-colors duration-300">View All</button>
          </div>
          <div className="space-y-6">
            {skillDevelopment.map((skill, index) => (
              <div key={index} className="space-y-3">
                <div className="flex items-center justify-between">
                  <h3 className="font-medium text-white">{skill.skill}</h3>
                  <div className="flex items-center text-sm text-[#E6C77C]/70">
                    <Clock className="w-4 h-4 mr-1" />
                    {skill.timeLeft}
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-[#E6C77C]/70">Progress</span>
                    <span className="font-medium text-[#C9A646]">{skill.progress}%</span>
                  </div>
                  <div className="w-full bg-[#8C6C1F]/30 rounded-full h-2">
                    <div
                      className="bg-gradient-to-r from-[#E6C77C] to-[#C9A646] h-2 rounded-full transition-all duration-500 shadow-sm"
                      style={{ width: `${skill.progress}%` }}
                    ></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="bg-gradient-to-r from-[#1A1A1A] to-[#0F0F0F] rounded-xl p-6 border border-[#C9A646]/30 backdrop-blur-sm">
        <h2 className="text-xl font-semibold text-white mb-4">Quick Actions</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <button className="bg-black p-4 rounded-lg border border-[#C9A646]/30 hover:border-[#E6C77C]/60 hover:shadow-[0_0_16px_0_#C9A64626] transition-all duration-300 text-left group">
            <Users className="w-8 h-8 text-[#C9A646] mb-2 group-hover:scale-110 transition-transform duration-300" />
            <h3 className="font-medium text-white mb-1">Find Mentors</h3>
            <p className="text-[#E6C77C]/70 text-sm">Connect with industry experts</p>
          </button>
          <button className="bg-black p-4 rounded-lg border border-[#C9A646]/30 hover:border-[#E6C77C]/60 hover:shadow-[0_0_16px_0_#C9A64626] transition-all duration-300 text-left group">
            <BookOpen className="w-8 h-8 text-[#C9A646] mb-2 group-hover:scale-110 transition-transform duration-300" />
            <h3 className="font-medium text-white mb-1">Start Course</h3>
            <p className="text-[#E6C77C]/70 text-sm">Begin your next learning journey</p>
          </button>
          <button className="bg-black p-4 rounded-lg border border-[#C9A646]/30 hover:border-[#E6C77C]/60 hover:shadow-[0_0_16px_0_#C9A64626] transition-all duration-300 text-left group">
            <Target className="w-8 h-8 text-[#C9A646] mb-2 group-hover:scale-110 transition-transform duration-300" />
            <h3 className="font-medium text-white mb-1">Set Goals</h3>
            <p className="text-[#E6C77C]/70 text-sm">Define your career objectives</p>
          </button>
        </div>
      </div>
    </div>
  );
}
