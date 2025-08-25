import React, { useState } from 'react';
import { TrendingUp, Users, Target, Award, BarChart3, PieChart, Calendar, Download } from 'lucide-react';

export default function Analytics() {
  const [timeRange, setTimeRange] = useState('3months');

  const timeRanges = [
    { id: '1month', label: 'Last Month' },
    { id: '3months', label: 'Last 3 Months' },
    { id: '6months', label: 'Last 6 Months' },
    { id: '1year', label: 'Last Year' }
  ];

  const overviewMetrics = [
    {
      title: 'Career Progress Score',
      value: '87%',
      change: '+12%',
      trend: 'up',
      icon: TrendingUp,
      color: 'text-green-400',
      bgColor: 'bg-green-500/10'
    },
    {
      title: 'Skills Mastered',
      value: '24',
      change: '+8',
      trend: 'up',
      icon: Award,
      color: 'text-blue-400',
      bgColor: 'bg-blue-500/10'
    },
    {
      title: 'Network Growth',
      value: '156',
      change: '+23',
      trend: 'up',
      icon: Users,
      color: 'text-purple-400',
      bgColor: 'bg-purple-500/10'
    },
    {
      title: 'Goal Achievement',
      value: '78%',
      change: '+5%',
      trend: 'up',
      icon: Target,
      color: 'text-orange-400',
      bgColor: 'bg-orange-500/10'
    }
  ];

  const skillProgress = [
    { skill: 'React', current: 85, target: 90, category: 'Frontend' },
    { skill: 'Python', current: 70, target: 85, category: 'Backend' },
    { skill: 'Machine Learning', current: 45, target: 75, category: 'AI/ML' },
    { skill: 'Leadership', current: 60, target: 80, category: 'Soft Skills' },
    { skill: 'System Design', current: 55, target: 75, category: 'Architecture' }
  ];

  const learningActivity = [
    { month: 'Sep', hours: 18, courses: 2, certifications: 1 },
    { month: 'Oct', hours: 24, courses: 3, certifications: 0 },
    { month: 'Nov', hours: 32, courses: 2, certifications: 2 },
    { month: 'Dec', hours: 28, courses: 4, certifications: 1 }
  ];

  const jobMatchTrends = [
    { week: 'Week 1', matches: 12, applications: 3, responses: 1 },
    { week: 'Week 2', matches: 18, applications: 5, responses: 2 },
    { week: 'Week 3', matches: 22, applications: 4, responses: 3 },
    { week: 'Week 4', matches: 25, applications: 6, responses: 4 }
  ];

  const industryDemand = [
    { industry: 'Technology', demand: 95, growth: '+28%' },
    { industry: 'Finance', demand: 78, growth: '+15%' },
    { industry: 'Healthcare', demand: 82, growth: '+22%' },
    { industry: 'Education', demand: 65, growth: '+12%' },
    { industry: 'Retail', demand: 58, growth: '+8%' }
  ];

  const recommendations = [
    {
      type: 'Skill Gap',
      title: 'Focus on System Design',
      description: 'This skill is highly demanded in senior roles and you\'re 20 points below target',
      priority: 'High',
      action: 'Start Course'
    },
    {
      type: 'Career Move',
      title: 'Senior Developer Roles',
      description: 'Your skill profile matches 87% of senior developer positions',
      priority: 'Medium',
      action: 'Explore Jobs'
    },
    {
      type: 'Network',
      title: 'Connect with AI/ML Experts',
      description: 'Expand your network in machine learning to support your learning goals',
      priority: 'Low',
      action: 'Find Mentors'
    }
  ];

  return (
    <div className="p-6 space-y-8 text-gray-100">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold mb-2">Career Analytics</h1>
          <p className="text-gray-400">Track your professional growth and market insights</p>
        </div>
        <div className="flex items-center space-x-4">
          <select
            value={timeRange}
            onChange={(e) => setTimeRange(e.target.value)}
            className="px-4 py-2 border border-[#1C1D20] bg-[#111214] rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            {timeRanges.map(range => (
              <option key={range.id} value={range.id}>{range.label}</option>
            ))}
          </select>
          <button className="flex items-center space-x-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
            <Download className="w-4 h-4" />
            <span>Export</span>
          </button>
        </div>
      </div>

      {/* Overview Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {overviewMetrics.map((metric, index) => (
          <div key={index} className="bg-[#111214] border border-[#1C1D20] rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-center justify-between mb-4">
              <div className={`w-12 h-12 ${metric.bgColor} rounded-lg flex items-center justify-center`}>
                <metric.icon className={`w-6 h-6 ${metric.color}`} />
              </div>
              <span className={`text-sm font-medium flex items-center ${
                metric.trend === 'up' ? 'text-green-400' : 'text-red-400'
              }`}>
                {metric.change}
                <TrendingUp className="w-4 h-4 ml-1" />
              </span>
            </div>
            <p className="text-2xl font-bold mb-1">{metric.value}</p>
            <p className="text-gray-400 text-sm">{metric.title}</p>
          </div>
        ))}
      </div>

      {/* Skills Progress + Learning Activity */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-[#111214] border border-[#1C1D20] rounded-xl p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-semibold">Skills Progress</h2>
            <button className="text-blue-400 hover:text-blue-500 text-sm font-medium">View Details</button>
          </div>
          <div className="space-y-6">
            {skillProgress.map((skill, index) => (
              <div key={index} className="space-y-3">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-medium">{skill.skill}</h3>
                    <p className="text-gray-500 text-sm">{skill.category}</p>
                  </div>
                  <div className="text-right">
                    <span className="text-sm font-medium">{skill.current}%</span>
                    <p className="text-gray-500 text-xs">Target: {skill.target}%</p>
                  </div>
                </div>
                <div className="space-y-1">
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div
                      className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                      style={{ width: `${skill.current}%` }}
                    ></div>
                  </div>
                  <div className="w-full bg-gray-800 rounded-full h-1">
                    <div
                      className="bg-gray-500 h-1 rounded-full"
                      style={{ width: `${skill.target}%` }}
                    ></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Learning Activity */}
        <div className="bg-[#111214] border border-[#1C1D20] rounded-xl p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-semibold">Learning Activity</h2>
            <div className="flex items-center space-x-2">
              <BarChart3 className="w-5 h-5 text-blue-400" />
              <span className="text-sm text-gray-400">Monthly Trends</span>
            </div>
          </div>
          <div className="space-y-4">
            {learningActivity.map((month, index) => (
              <div key={index} className="flex items-center justify-between p-4 bg-[#1A1B1E] rounded-lg">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-blue-500/10 rounded-lg flex items-center justify-center">
                    <Calendar className="w-6 h-6 text-blue-400" />
                  </div>
                  <div>
                    <h3 className="font-medium">{month.month} 2024</h3>
                    <p className="text-gray-400 text-sm">{month.hours}h learning time</p>
                  </div>
                </div>
                <div className="text-right text-gray-400 text-sm">
                  <span>{month.courses} courses</span> · <span>{month.certifications} certs</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Job Market Insights */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Job Match Trends */}
        <div className="lg:col-span-2 bg-[#111214] border border-[#1C1D20] rounded-xl p-6">
          <h2 className="text-xl font-semibold mb-6">Job Matching Trends</h2>
          <div className="space-y-4">
            {jobMatchTrends.map((week, index) => (
              <div key={index} className="grid grid-cols-4 gap-4 items-center p-4 bg-[#1A1B1E] rounded-lg">
                <p className="font-medium">{week.week}</p>
                <div className="text-center">
                  <p className="text-2xl font-bold text-blue-400">{week.matches}</p>
                  <p className="text-gray-500 text-xs">Matches</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-bold text-green-400">{week.applications}</p>
                  <p className="text-gray-500 text-xs">Applied</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-bold text-purple-400">{week.responses}</p>
                  <p className="text-gray-500 text-xs">Responses</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Industry Demand */}
        <div className="bg-[#111214] border border-[#1C1D20] rounded-xl p-6">
          <h2 className="text-xl font-semibold mb-6">Industry Demand</h2>
          <div className="space-y-4">
            {industryDemand.map((industry, index) => (
              <div key={index} className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">{industry.industry}</span>
                  <span className="text-green-400 text-xs font-medium">{industry.growth}</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="flex-1 bg-gray-700 rounded-full h-2">
                    <div
                      className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full transition-all duration-300"
                      style={{ width: `${industry.demand}%` }}
                    ></div>
                  </div>
                  <span className="text-sm font-medium text-gray-300">{industry.demand}%</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* AI Recommendations */}
      <div className="bg-gradient-to-r from-purple-500/5 to-blue-500/5 rounded-xl p-6 border border-[#1C1D20]">
        <div className="flex items-center space-x-2 mb-4">
          <PieChart className="w-6 h-6 text-purple-400" />
          <h2 className="text-xl font-semibold">AI-Powered Insights</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {recommendations.map((rec, index) => (
            <div key={index} className="bg-[#111214] p-5 rounded-lg border border-[#1C1D20]">
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-medium text-gray-400 bg-[#1A1B1E] px-2 py-1 rounded">
                  {rec.type}
                </span>
                <span className={`text-xs font-medium px-2 py-1 rounded ${
                  rec.priority === 'High' ? 'bg-red-500/10 text-red-400' :
                  rec.priority === 'Medium' ? 'bg-yellow-500/10 text-yellow-400' :
                  'bg-green-500/10 text-green-400'
                }`}>
                  {rec.priority}
                </span>
              </div>
              <h3 className="font-semibold mb-2">{rec.title}</h3>
              <p className="text-gray-400 text-sm mb-4">{rec.description}</p>
              <button className="w-full bg-purple-600 text-white py-2 rounded-lg hover:bg-purple-700 transition-colors text-sm font-medium">
                {rec.action}
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
