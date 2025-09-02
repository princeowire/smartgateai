import { useState } from "react";
import { Mail, Lock } from "lucide-react";
import { auth } from "../../lib/firebase"; 
import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});
  const [firebaseError, setFirebaseError] = useState(""); // ✅ fix
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    // Basic validation
    const newErrors = {};
    if (!email) newErrors.email = "Email is required";
    if (!password) newErrors.password = "Password is required";
    setErrors(newErrors);

    if (Object.keys(newErrors).length > 0) return; // stop if validation fails

    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);

      // ✅ Get ID token from Firebase user
      const token = await userCredential.user.getIdToken();

      // ✅ Save to localStorage
      localStorage.setItem("authToken", token);

      // redirect to home
      navigate("/");
    } catch (err) {
      setFirebaseError(err.message); // show firebase error
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-gray-900 to-black text-white">
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
        <div className="w-full md:w-1/2 flex flex-col items-center justify-center p-10 backdrop-blur-md bg-white/5">
          <h2 className="text-3xl font-bold text-yellow-400 mb-6">Login</h2>

          <form onSubmit={handleLogin} className="w-full">
            {/* Email Input */}
            <div className="mb-6">
              <div className="flex items-center bg-white/10 rounded-full px-4 py-3 w-full">
                <Mail className="text-yellow-400 mr-3" />
                <input
                  type="email"
                  placeholder="Email ID"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-transparent w-full outline-none text-white placeholder-gray-400"
                />
              </div>
              {errors.email && (
                <p className="mt-1 text-red-500 text-sm pl-2">{errors.email}</p>
              )}
            </div>

            {/* Password Input */}
            <div className="mb-6">
              <div className="flex items-center bg-white/10 rounded-full px-4 py-3 w-full">
                <Lock className="text-yellow-400 mr-3" />
                <input
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="bg-transparent w-full outline-none text-white placeholder-gray-400"
                />
              </div>
              {errors.password && (
                <p className="mt-1 text-red-500 text-sm pl-2">{errors.password}</p>
              )}
            </div>

            {/* Sign In Button */}
            <button
              type="submit"
              className="bg-yellow-400 text-black font-semibold rounded-full w-full py-3 hover:bg-yellow-300 transition"
            >
              Sign In
            </button>

            {/* Firebase Error */}
            {firebaseError && (
              <p className="mt-3 text-red-500 text-center">{firebaseError}</p>
            )}
          </form>

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
        </div>
      </div>
    </div>
  );
}
