import React from 'react'
import { Mail, Lock, User2, EyeClosed, Eye } from "lucide-react";
import { useState } from "react";

const TalentForm = ({employerSave, setemployerSave}) => {
  const [seePassword, setSeepassword] = useState(false);


  return (
    <div className="w-full md:w-1/2 flex flex-col items-center justify-center p-10 backdrop-blur-md bg-white/5">

      <h2 className="text-3xl font-bold text-yellow-400 mb-6">
        User Sign up
      </h2>

      {/* firstname Input */}
      <div className="flex items-center bg-white/10 rounded-full px-4 py-3 w-full mb-4">
        <User2 className="text-yellow-400 mr-3" />
        <input
          type="text"
          placeholder="First Name"
          className="bg-transparent w-full outline-none text-white placeholder-gray-400"
        />
      </div>

      {/* Last Name Input */}
      <div className="flex items-center bg-white/10 rounded-full px-4 py-3 w-full mb-4">
        <User2 className="text-yellow-400 mr-3" />
        <input
          type="text"
          placeholder="Last Name"
          className="bg-transparent w-full outline-none text-white placeholder-gray-400"
        />
      </div>

      {/* Email Input */}
      <div className="flex items-center bg-white/10 rounded-full px-4 py-3 w-full mb-4">
        <Mail className="text-yellow-400 mr-3" />
        <input
          type="email"
          placeholder="Email ID"
          className="bg-transparent w-full outline-none text-white placeholder-gray-400"
        />
      </div>

      {/* Password Input */}
      <div className="flex items-center bg-white/10 rounded-full px-4 py-3 w-full mb-4">
        <Lock className="text-yellow-400 mr-3" />
        <input
          type={seePassword ? "password" : "text"}
          placeholder="Password"
          className="bg-transparent w-full outline-none text-white placeholder-gray-400"
        />
        <div onClick={() => setSeepassword(!seePassword)}>
          {seePassword ? <Eye className="text-yellow-400" /> : <EyeClosed className="text-yellow-400" />}
        </div>
      </div>

      {/* Sign In Button */}
      <button className="bg-yellow-400 text-black font-semibold rounded-full w-full py-3 hover:bg-yellow-300 transition">
        Sign up
      </button>

      {/* Remember Me + Forgot Password */}
      <div className="flex justify-between items-center w-full text-sm text-gray-400 mt-3">
        <label className="flex items-center gap-2 cursor-pointer">
          <input type="checkbox" className="accent-yellow-400 custom-checkbox" />
          Remember me
        </label>
        <a href="#" className="hover:underline">
          Forgot Password?
        </a>
      </div>

    </div>
  )
}

export default TalentForm;