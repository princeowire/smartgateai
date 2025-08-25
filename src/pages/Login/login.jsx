import { useState } from "react";
import { Mail, Lock } from "lucide-react";

export default function Login() {
  const [isEmployer, setIsEmployer] = useState(false);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-gray-900 to-black text-white">
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
        <div className="w-full md:w-1/2 flex flex-col items-center justify-center p-10 backdrop-blur-md bg-white/5">
          <h2 className="text-3xl font-bold text-yellow-400 mb-6">
            {isEmployer ? "Employer Login" : "User Login"}
          </h2>

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
              type="password"
              placeholder="Password"
              className="bg-transparent w-full outline-none text-white placeholder-gray-400"
            />
          </div>

          {/* Sign In Button */}
          <button className="bg-yellow-400 text-black font-semibold rounded-full w-full py-3 hover:bg-yellow-300 transition">
            Sign In
          </button>

          {/* Remember Me + Forgot Password */}
          <div className="flex justify-between items-center w-full text-sm text-gray-400 mt-3">
            <label className="flex items-center gap-2 cursor-pointer">
              <input type="checkbox" className="accent-yellow-400" />
              Remember me
            </label>
            <a href="#" className="hover:underline">
              Forgot Password?
            </a>
          </div>

          {/* Toggle Between User & Employer */}
          <div onClick={() => setIsEmployer(!isEmployer)} className="w-[250px] bg-amber-300 h-10 rounded-full relative flex justify-center items-center p-1">
            <button
              className={`text-yellow-400 p-2 hover:underline text-sm bg-gray-800 w-[125px] h-9 rounded-full absolute ${isEmployer ? "left-[2px]" : "right-[2px]"}`}
            >
              {isEmployer ? "User Login" : "Employer Login"}
            </button>

            <div className="flex gap-4 justify-between w-full">
              <p className="pl-10">user</p><p className="pr-10 ">Employer</p>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
