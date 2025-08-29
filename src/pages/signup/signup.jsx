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

        {isEmployer ?  <EmployersForm employerSave={!isEmployer} setemployerSave={setIsEmployer} /> : <TalentForm employerSave={!isEmployer} setemployerSave={setIsEmployer} /> } 

      </div>

      {/* Toggle Between User & Employer */}
      <div onClick={() => setIsEmployer(!isEmployer)} className="mt-8 text-sm w-[250px] bg-amber-300 h-10 rounded-full relative flex justify-center items-center p-1">
        <button
          className={`text-yellow-400 p-2 font-semibold text-sm bg-gray-800 w-[125px] h-9 rounded-full absolute ${isEmployer ? "left-[2px]" : "right-[2px]"}`}
        >
          {isEmployer ? "Employer" : "User"}
        </button>

        <div className="flex gap-4 justify-between w-full text-[#0b0d13] font-semibold">
          <p className="pl-10">Employer</p><p className="pr-10 ">User</p>
        </div>

      </div>

    </div>
  );
}
