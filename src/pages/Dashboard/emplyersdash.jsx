import React, { useState, useEffect } from 'react';
import { 
  FiHome, FiBriefcase, FiUsers, FiBarChart2, 
  FiMessageSquare, FiSettings, FiSearch, FiBell,
  FiPlus, FiEye, FiEdit, FiTrash2, FiFilter,
  FiChevronLeft, FiChevronRight, FiCalendar, FiMapPin,
  FiMenu
} from 'react-icons/fi';

const EmployerDashboard = () => {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [showJobModal, setShowJobModal] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [jobs, setJobs] = useState([]);
  const [candidates, setCandidates] = useState([]);
  const [newJob, setNewJob] = useState({
    title: '',
    department: '',
    location: '',
    type: '',
    description: '',
    requirements: ''
  });

  // Sample data for demonstration
  useEffect(() => {
    // Mock job data
    setJobs([
      {
        id: 1,
        title: 'Senior Frontend Developer',
        department: 'Engineering',
        location: 'Remote',
        type: 'Full-time',
        applications: 45,
        date: 'Jun 5, 2023',
        status: 'published'
      },
      {
        id: 2,
        title: 'UX/UI Designer',
        department: 'Design',
        location: 'San Francisco, CA',
        type: 'Full-time',
        applications: 32,
        date: 'May 28, 2023',
        status: 'published'
      },
      {
        id: 3,
        title: 'DevOps Engineer',
        department: 'Engineering',
        location: 'New York, NY',
        type: 'Contract',
        applications: 18,
        date: 'May 15, 2023',
        status: 'draft'
      },
      {
        id: 4,
        title: 'Product Manager',
        department: 'Product',
        location: 'Chicago, IL',
        type: 'Full-time',
        applications: 67,
        date: 'Apr 30, 2023',
        status: 'closed'
      }
    ]);

    // Mock candidate data
    setCandidates([
      {
        id: 1,
        name: 'Sarah Johnson',
        position: 'Frontend Developer',
        date: 'Jun 12, 2023',
        status: 'New'
      },
      {
        id: 2,
        name: 'Michael Chen',
        position: 'UX Designer',
        date: 'Jun 11, 2023',
        status: 'Reviewed'
      },
      {
        id: 3,
        name: 'Emily Williams',
        position: 'Product Manager',
        date: 'Jun 10, 2023',
        status: 'New'
      },
      {
        id: 4,
        name: 'David Brown',
        position: 'Backend Engineer',
        date: 'Jun 9, 2023',
        status: 'Rejected'
      }
    ]);
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewJob({
      ...newJob,
      [name]: value
    });
  };

  const handleSubmitJob = (e) => {
    e.preventDefault();
    const newJobWithId = {
      ...newJob,
      id: jobs.length + 1,
      applications: 0,
      date: new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' }),
      status: 'published'
    };
    setJobs([...jobs, newJobWithId]);
    setShowJobModal(false);
    setNewJob({
      title: '',
      department: '',
      location: '',
      type: '',
      description: '',
      requirements: ''
    });
  };

  const getStatusClass = (status) => {
    switch (status) {
      case 'published':
      case 'New':
        return 'bg-green-100 text-green-800';
      case 'draft':
      case 'Reviewed':
        return 'bg-yellow-100 text-yellow-800';
      case 'closed':
      case 'Rejected':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const renderDashboard = () => (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
        <div className="bg-white rounded-lg shadow p-6">
          <div className="bg-blue-500 rounded-lg p-3 inline-block mb-4">
            <FiBriefcase className="text-white text-2xl" />
          </div>
          <p className="text-gray-500 font-medium">Active Jobs</p>
          <h3 className="text-3xl font-bold mt-2">12</h3>
        </div>
        
        <div className="bg-white rounded-lg shadow p-6">
          <div className="bg-green-500 rounded-lg p-3 inline-block mb-4">
            <FiUsers className="text-white text-2xl" />
          </div>
          <p className="text-gray-500 font-medium">Applications</p>
          <h3 className="text-3xl font-bold mt-2">245</h3>
        </div>
        
        <div className="bg-white rounded-lg shadow p-6">
          <div className="bg-yellow-500 rounded-lg p-3 inline-block mb-4">
            <FiEye className="text-white text-2xl" />
          </div>
          <p className="text-gray-500 font-medium">Profile Views</p>
          <h3 className="text-3xl font-bold mt-2">1,245</h3>
        </div>
        
        <div className="bg-white rounded-lg shadow p-6">
          <div className="bg-red-500 rounded-lg p-3 inline-block mb-4">
            <FiCalendar className="text-white text-2xl" />
          </div>
          <p className="text-gray-500 font-medium">Pending Reviews</p>
          <h3 className="text-3xl font-bold mt-2">18</h3>
        </div>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-lg font-bold">Applications Overview</h3>
            <select className="border rounded-md px-3 py-2 text-sm">
              <option>Last 7 Days</option>
              <option>Last 30 Days</option>
              <option>Last 90 Days</option>
            </select>
          </div>
          <div className="bg-gray-100 rounded-lg h-64 flex items-center justify-center">
            <p className="text-gray-500">Applications Chart Visualization</p>
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-lg font-bold">Recent Applicants</h3>
            <a href="#" className="text-blue-500 text-sm">View All</a>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="text-left text-gray-500 text-sm">
                  <th className="pb-3 font-medium">Name</th>
                  <th className="pb-3 font-medium">Position</th>
                  <th className="pb-3 font-medium">Date</th>
                  <th className="pb-3 font-medium">Status</th>
                </tr>
              </thead>
              <tbody>
                {candidates.map(candidate => (
                  <tr key={candidate.id} className="border-t">
                    <td className="py-3">{candidate.name}</td>
                    <td className="py-3">{candidate.position}</td>
                    <td className="py-3">{candidate.date}</td>
                    <td className="py-3">
                      <span className={`px-2 py-1 rounded-full text-xs ${getStatusClass(candidate.status)}`}>
                        {candidate.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );

  const renderJobs = () => (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Job Postings</h2>
        <button 
          className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center"
          onClick={() => setShowJobModal(true)}
        >
          <FiPlus className="mr-2" /> Post New Job
        </button>
      </div>
      
      <div className="bg-white rounded-lg shadow overflow-hidden">
        <div className="flex justify-between items-center p-4 border-b">
          <div className="relative w-64">
            <FiSearch className="absolute left-3 top-3 text-gray-400" />
            <input 
              type="text" 
              placeholder="Search jobs..." 
              className="pl-10 pr-4 py-2 border rounded-lg w-full"
            />
          </div>
          <button className="flex items-center text-gray-500">
            <FiFilter className="mr-2" /> Filter
          </button>
        </div>
        
        <table className="w-full">
          <thead>
            <tr className="text-left text-gray-500 text-sm">
              <th className="p-4 font-medium">Job Title</th>
              <th className="p-4 font-medium">Applications</th>
              <th className="p-4 font-medium">Date Posted</th>
              <th className="p-4 font-medium">Status</th>
              <th className="p-4 font-medium">Actions</th>
            </tr>
          </thead>
          <tbody>
            {jobs.map(job => (
              <tr key={job.id} className="border-t hover:bg-gray-50">
                <td className="p-4">
                  <div className="font-medium">{job.title}</div>
                  <div className="text-sm text-gray-500 flex items-center mt-1">
                    <FiMapPin className="mr-1" /> {job.location}
                  </div>
                </td>
                <td className="p-4">{job.applications}</td>
                <td className="p-4">{job.date}</td>
                <td className="p-4">
                  <span className={`px-2 py-1 rounded-full text-xs ${getStatusClass(job.status)}`}>
                    {job.status}
                  </span>
                </td>
                <td className="p-4">
                  <div className="flex space-x-2">
                    <button className="text-gray-500 hover:text-blue-500">
                      <FiEye />
                    </button>
                    <button className="text-gray-500 hover:text-green-500">
                      <FiEdit />
                    </button>
                    <button className="text-gray-500 hover:text-red-500">
                      <FiTrash2 />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        
        <div className="flex justify-between items-center p-4 border-t">
          <div className="text-sm text-gray-500">Showing 1 to 4 of 12 results</div>
          <div className="flex space-x-2">
            <button className="p-2 border rounded-lg text-gray-500 hover:bg-gray-50">
              <FiChevronLeft />
            </button>
            <button className="p-2 border rounded-lg bg-blue-500 text-white">
              1
            </button>
            <button className="p-2 border rounded-lg text-gray-500 hover:bg-gray-50">
              2
            </button>
            <button className="p-2 border rounded-lg text-gray-500 hover:bg-gray-50">
              3
            </button>
            <button className="p-2 border rounded-lg text-gray-500 hover:bg-gray-50">
              <FiChevronRight />
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  const renderCandidates = () => (
    <div className="bg-white rounded-lg shadow p-6">
      <h2 className="text-2xl font-bold mb-6">Candidates Management</h2>
      <p className="text-gray-500">Candidate management interface will be implemented here.</p>
    </div>
  );

  const renderAnalytics = () => (
    <div className="bg-white rounded-lg shadow p-6">
      <h2 className="text-2xl font-bold mb-6">Analytics & Reports</h2>
      <p className="text-gray-500">Analytics and reporting dashboard will be implemented here.</p>
    </div>
  );

  const renderMessages = () => (
    <div className="bg-white rounded-lg shadow p-6">
      <h2 className="text-2xl font-bold mb-6">Messages</h2>
      <p className="text-gray-500">Messaging interface will be implemented here.</p>
    </div>
  );

  const renderSettings = () => (
    <div className="bg-white rounded-lg shadow p-6">
      <h2 className="text-2xl font-bold mb-6">Account Settings</h2>
      <p className="text-gray-500">Account settings and configuration will be implemented here.</p>
    </div>
  );

  const navigationItems = [
    { id: 'dashboard', icon: FiHome, label: 'Dashboard' },
    { id: 'jobs', icon: FiBriefcase, label: 'Jobs' },
    { id: 'candidates', icon: FiUsers, label: 'Candidates' },
    { id: 'analytics', icon: FiBarChart2, label: 'Analytics' },
    { id: 'messages', icon: FiMessageSquare, label: 'Messages' },
    { id: 'settings', icon: FiSettings, label: 'Settings' }
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      
      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        {activeTab === 'dashboard' && renderDashboard()}
        {activeTab === 'jobs' && renderJobs()}
        {activeTab === 'candidates' && renderCandidates()}
        {activeTab === 'analytics' && renderAnalytics()}
        {activeTab === 'messages' && renderMessages()}
        {activeTab === 'settings' && renderSettings()}
      </main>
      
      {/* Add Job Modal */}
      {showJobModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg w-full max-w-2xl max-h-screen overflow-y-auto">
            <div className="flex justify-between items-center p-6 border-b sticky top-0 bg-white">
              <h3 className="text-lg font-bold">Post New Job</h3>
              <button 
                className="text-gray-500 hover:text-gray-700"
                onClick={() => setShowJobModal(false)}
              >
                &times;
              </button>
            </div>
            
            <form onSubmit={handleSubmitJob} className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Job Title</label>
                  <input
                    type="text"
                    name="title"
                    value={newJob.title}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border rounded-lg"
                    placeholder="e.g. Senior Frontend Developer"
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Department</label>
                  <select
                    name="department"
                    value={newJob.department}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border rounded-lg"
                    required
                  >
                    <option value="">Select Department</option>
                    <option value="Engineering">Engineering</option>
                    <option value="Design">Design</option>
                    <option value="Product">Product</option>
                    <option value="Marketing">Marketing</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Location</label>
                  <input
                    type="text"
                    name="location"
                    value={newJob.location}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border rounded-lg"
                    placeholder="e.g. New York, NY"
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Job Type</label>
                  <select
                    name="type"
                    value={newJob.type}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border rounded-lg"
                    required
                  >
                    <option value="">Select Job Type</option>
                    <option value="Full-time">Full-time</option>
                    <option value="Part-time">Part-time</option>
                    <option value="Contract">Contract</option>
                    <option value="Internship">Internship</option>
                  </select>
                </div>
              </div>
              
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-1">Job Description</label>
                <textarea
                  name="description"
                  value={newJob.description}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border rounded-lg"
                  rows="4"
                  placeholder="Describe the role and responsibilities..."
                  required
                ></textarea>
              </div>
              
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-1">Requirements</label>
                <textarea
                  name="requirements"
                  value={newJob.requirements}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border rounded-lg"
                  rows="4"
                  placeholder="List the requirements..."
                  required
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="w-full bg-blue-500 hover:bg-blue-600 text-white py-3 rounded-lg font-medium"
              >
                Post Job
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default EmployerDashboard;