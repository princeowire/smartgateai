import { useState } from "react";
import EmployersForm from "../../components/signup-form/employersForm";
import TalentForm from "../../components/signup-form/talentForm";

export default function Signup() {
  const [isEmployer, setIsEmployer] = useState(false);

  return (
    <div className="min-h-screen flex items-center justify-center flex-col bg-gradient-to-br from-black via-gray-900 to-black text-white">
      <div className="flex w-[900px] rounded-2xl shadow-2xl overflow-hidden">

        {/* Left Side Image */}
        <div className="hidden md:block w-1/2">
          <img
            src="/7970.jpg" // Place your uploaded image in public folder
            alt="Login Side"
            className="w-full h-full object-cover"
          />
        </div>


        {/* Right Side Form */}

        {isEmployer ? <EmployersForm employerSave={!isEmployer} setemployerSave={setIsEmployer} /> : <TalentForm employerSave={!isEmployer} setemployerSave={setIsEmployer} />}

      </div>

      {/* Toggle Between User & Employer */}
      <div
        onClick={() => setIsEmployer(!isEmployer)}
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
          <span>Employer</span>
          <span>User</span>
        </div>
      </div>

    </div>
  );
}
