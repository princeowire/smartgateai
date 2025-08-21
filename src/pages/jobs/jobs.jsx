import React, { useState } from 'react';
import { Search, Filter, MapPin, Clock, Briefcase, Star, Crown, Zap } from 'lucide-react';

export default function Jobs() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedFilter, setSelectedFilter] = useState('all');

  const jobs = [
    {
      id: 1,
      title: 'Senior Frontend Developer',
      company: 'TechFlow Inc.',
      location: 'San Francisco, CA',
      type: 'Full-time',
      salary: '$130k - $170k',
      posted: '2 days ago',
      match: 98,
      skills: ['React', 'TypeScript', 'Next.js'],
      description: 'Join our innovative team building next-generation web applications...',
      logo: '🚀'
    },
    {
      id: 2,
      title: 'AI/ML Engineer',
      company: 'DataMind Corp',
      location: 'Remote',
      type: 'Full-time',
      salary: '$140k - $180k',
      posted: '1 day ago',
      match: 92,
      skills: ['Python', 'TensorFlow', 'AWS'],
      description: 'Develop cutting-edge machine learning models and AI solutions...',
      logo: '🤖'
    },
    {
      id: 3,
      title: 'Product Manager',
      company: 'InnovateLab',
      location: 'Austin, TX',
      type: 'Full-time',
      salary: '$120k - $150k',
      posted: '3 days ago',
      match: 85,
      skills: ['Product Strategy', 'Agile', 'Analytics'],
      description: 'Lead product development for our flagship SaaS platform...',
      logo: '📊'
    },
    {
      id: 4,
      title: 'DevOps Engineer',
      company: 'CloudScale',
      location: 'Seattle, WA',
      type: 'Full-time',
      salary: '$125k - $160k',
      posted: '5 days ago',
      match: 88,
      skills: ['Kubernetes', 'Docker', 'CI/CD'],
      description: 'Build and maintain scalable cloud infrastructure...',
      logo: '☁️'
    },
    {
      id: 5,
      title: 'UX Designer',
      company: 'DesignHub',
      location: 'New York, NY',
      type: 'Contract',
      salary: '$90k - $120k',
      posted: '1 week ago',
      match: 79,
      skills: ['Figma', 'User Research', 'Prototyping'],
      description: 'Create intuitive user experiences for mobile and web applications...',
      logo: '🎨'
    }
  ];

  const filters = [
    { id: 'all', label: 'All Jobs' },
    { id: 'fulltime', label: 'Full-time' },
    { id: 'remote', label: 'Remote' },
    { id: 'contract', label: 'Contract' }
  ];

  const filteredJobs = jobs.filter(job => {
    const matchesSearch = job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.skills.some(skill => skill.toLowerCase().includes(searchTerm.toLowerCase()));

    const matchesFilter = selectedFilter === 'all' ||
      (selectedFilter === 'fulltime' && job.type === 'Full-time') ||
      (selectedFilter === 'remote' && job.location === 'Remote') ||
      (selectedFilter === 'contract' && job.type === 'Contract');

    return matchesSearch && matchesFilter;
  });

  return (
    <div className="p-6 space-y-6 min-h-screen bg-black">
      <div>
        <h1 className="text-3xl font-bold text-gray-100 mb-2">
          <span className="text-[#FFD700]">AI-Powered</span> Job Matching
        </h1>
        <p className="text-gray-400">Discover opportunities tailored to your skills and career goals</p>
      </div>

      {/* Search and Filter */}
      <div className="bg-[#111] rounded-xl p-6 shadow-2xl border border-[#FFD700]/30">
        <div className="flex flex-col lg:flex-row lg:items-center space-y-4 lg:space-y-0 lg:space-x-4">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#FFD700] w-5 h-5" />
            <input
              type="text"
              placeholder="Search jobs, companies, or skills..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 bg-black border border-[#FFD700]/30 rounded-lg focus:ring-2 focus:ring-[#FFD700] focus:border-[#FFD700] text-gray-100 placeholder-gray-500"
            />
          </div>
          <div className="flex items-center space-x-2">
            <Filter className="w-5 h-5 text-[#FFD700]" />
            <select
              value={selectedFilter}
              onChange={(e) => setSelectedFilter(e.target.value)}
              className="px-4 py-3 bg-black border border-[#FFD700]/30 rounded-lg focus:ring-2 focus:ring-[#FFD700] focus:border-[#FFD700] text-gray-100"
            >
              {filters.map(filter => (
                <option key={filter.id} value={filter.id} className="bg-black">
                  {filter.label}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* AI Insights */}
      <div className="bg-gradient-to-r from-[#FFD700]/10 to-black rounded-xl p-6 border border-[#FFD700]/30">
        <div className="flex items-center space-x-2 mb-3">
          <Crown className="w-5 h-5 text-[#FFD700]" />
          <h2 className="text-lg font-semibold text-gray-100">AI Market Insights</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
          <div className="bg-black p-4 rounded-lg border border-[#FFD700]/20">
            <p className="text-gray-400">Trending Skills</p>
            <p className="font-semibold text-[#FFD700]">React, Python, AWS</p>
          </div>
          <div className="bg-black p-4 rounded-lg border border-[#FFD700]/20">
            <p className="text-gray-400">Salary Trends</p>
            <p className="font-semibold text-[#FFD700]">↗️ 15% increase this quarter</p>
          </div>
          <div className="bg-black p-4 rounded-lg border border-[#FFD700]/20">
            <p className="text-gray-400">Match Quality</p>
            <p className="font-semibold text-[#FFD700]">87% average match score</p>
          </div>
        </div>
      </div>

      {/* Job Listings */}
      <div className="space-y-4">
        <h2 className="text-xl font-semibold text-gray-100">{filteredJobs.length} Jobs Found</h2>

        {filteredJobs.map((job) => (
          <div
            key={job.id}
            className="bg-[#111] rounded-xl p-6 shadow-2xl border border-[#FFD700]/20 hover:border-[#FFD700]/50 hover:shadow-lg hover:shadow-[#FFD700]/30 transition-all duration-300 cursor-pointer"
          >
            <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between space-y-4 lg:space-y-0">
              <div className="flex-1 space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="w-16 h-16 bg-[#FFD700] rounded-xl flex items-center justify-center text-2xl shadow-lg text-black">
                    {job.logo}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center space-x-3 mb-2">
                      <h3 className="text-xl font-semibold text-gray-100">{job.title}</h3>
                      <div className="flex items-center bg-[#FFD700] text-black px-2 py-1 rounded-full text-xs font-bold shadow-sm">
                        <Star className="w-3 h-3 mr-1 fill-current" />
                        {job.match}% match
                      </div>
                    </div>
                    <p className="text-gray-400 mb-2">{job.company}</p>
                    <div className="flex flex-wrap items-center gap-4 text-sm text-gray-400">
                      <div className="flex items-center">
                        <MapPin className="w-4 h-4 mr-1" />
                        {job.location}
                      </div>
                      <div className="flex items-center">
                        <Briefcase className="w-4 h-4 mr-1" />
                        {job.type}
                      </div>
                      <div className="flex items-center">
                        <Clock className="w-4 h-4 mr-1" />
                        {job.posted}
                      </div>
                    </div>
                  </div>
                </div>

                <p className="text-gray-300">{job.description}</p>

                <div className="flex flex-wrap gap-2">
                  {job.skills.map((skill, index) => (
                    <span
                      key={index}
                      className="bg-[#FFD700]/10 text-[#FFD700] border border-[#FFD700]/30 px-3 py-1 rounded-full text-sm font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div className="lg:text-right space-y-3">
                <p className="text-2xl font-bold text-[#FFD700]">{job.salary}</p>
                <div className="space-y-2">
                  <button className="w-full lg:w-auto bg-[#FFD700] text-black px-6 py-2 rounded-lg hover:shadow-lg hover:shadow-[#FFD700]/50 transition-all duration-300 font-bold">
                    Apply Now
                  </button>
                  <button className="w-full lg:w-auto border border-[#FFD700]/30 text-gray-300 px-6 py-2 rounded-lg hover:bg-[#222] hover:text-[#FFD700] transition-all duration-300 font-medium">
                    Save Job
                  </button>
                </div>
                <button className="flex items-center text-[#FFD700] hover:text-yellow-300 text-sm font-medium transition-colors duration-300">
                  <Zap className="w-4 h-4 mr-1" />
                  Skill Gap Analysis
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
