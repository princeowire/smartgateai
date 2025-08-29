import { useState } from "react";
import EmployersForm from "../../components/signup-form/employersForm";
import TalentForm from "../../components/signup-form/talentForm";

export default function Signup() {
  const [isEmployer, setIsEmployer] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleToggle = () => {
    setLoading(true); // start loading
    setTimeout(() => {
      setIsEmployer(!isEmployer);
      setLoading(false); // stop loading after small delay
    }, 600); // adjust duration
  };

  return (
    <div className="min-h-screen flex items-center justify-center flex-col bg-gradient-to-br from-black via-gray-900 to-black text-white">
      <div className="flex w-[900px] rounded-2xl shadow-2xl overflow-hidden">

        {/* Left Side Image */}
        <div className="hidden md:block w-1/2">
          <img
            src="/7970.jpg"
            alt="Login Side"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Right Side Form */}
        {loading ? (
          <div className="flex items-center justify-center w-1/2 min-h-[450px] bg-gray-900">
            <div className="w-10 h-10 border-4 border-yellow-400 border-t-transparent rounded-full animate-spin"></div>
          </div>
        ) : (
          <>
            {isEmployer ? (
              <EmployersForm
                employerSave={!isEmployer}
                setemployerSave={setIsEmployer}
              />
            ) : (
              <TalentForm
                employerSave={!isEmployer}
                setemployerSave={setIsEmployer}
              />
            )}
          </>
        )}
      </div>

      {/* Toggle Between User & Employer */}
      <div
        onClick={handleToggle}
        className="mt-8 w-[250px] h-10 bg-amber-300 rounded-full relative flex items-center cursor-pointer select-none p-1"
      >
        {/* Sliding knob */}
        <button
          type="button"
          className={`absolute top-1 left-1 h-8 w-[calc(50%-4px)] rounded-full bg-gray-800 text-yellow-400 font-semibold text-sm
                flex items-center justify-center
                transition-transform duration-500 ease-in-out
                ${isEmployer ? 'translate-x-0' : 'translate-x-[100%]'}`}
        >
          {isEmployer ? 'Employer' : 'User'}
        </button>

        {/* Track labels */}
        <div className="flex justify-between w-full px-4 text-[#0b0d13] font-semibold text-sm pointer-events-none">
          <span className="ml-6">Employer</span>
          <span className="mr-6">User</span>
        </div>
      </div>
    </div>
  );
}
