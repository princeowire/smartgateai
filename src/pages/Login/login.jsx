import { Mail, Lock, EyeClosed, Eye } from "lucide-react";
import { auth } from "../../lib/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useState } from "react";
import WelcomePopup from "../../components/welcomepopup/WelcomePopup"// ✅ import popup

export default function Login() {
  const [seePassword, setSeePassword] = useState(false);
  const [showWelcome, setShowWelcome] = useState(false); // ✅ popup state
  const navigate = useNavigate();

  // ✅ Yup validation schema
  const validationSchema = Yup.object({
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .required("Password is required"),
  });

  // ✅ Handle login
  const handleLogin = async (values, { setSubmitting, setFieldError }) => {
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        values.email,
        values.password
      );

      // Save token
      const token = await userCredential.user.getIdToken();
      localStorage.setItem("authToken", token);

      // ✅ Always show popup after login
      setShowWelcome(true);
      
    } catch (err) {
      setFieldError("password", err.message);
    } finally {
      setSubmitting(false);
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

          <Formik
            initialValues={{ email: "", password: "" }}
            validationSchema={validationSchema}
            onSubmit={handleLogin}
          >
            {({ isSubmitting }) => (
              <Form className="w-full">
                {/* Email Input */}
                <div className="mb-6">
                  <div className="flex items-center bg-white/10 rounded-full px-4 py-3 w-full">
                    <Mail className="text-yellow-400 mr-3" />
                    <Field
                      type="email"
                      name="email"
                      placeholder="Email ID"
                      className="bg-transparent w-full outline-none text-white placeholder-gray-400"
                    />
                  </div>
                  <ErrorMessage
                    name="email"
                    component="p"
                    className="mt-1 text-red-500 text-sm pl-2"
                  />
                </div>

                {/* Password Input */}
                <div className="mb-6">
                  <div className="flex items-center bg-white/10 rounded-full px-4 py-3 w-full">
                    <Lock className="text-yellow-400 mr-3" />
                    <Field
                      type={seePassword ? "text" : "password"}
                      name="password"
                      placeholder="Password"
                      className="bg-transparent w-full outline-none text-white placeholder-gray-400"
                    />
                    <div
                      onClick={() => setSeePassword(!seePassword)}
                      className="cursor-pointer ml-2"
                    >
                      {seePassword ? (
                        <Eye className="text-yellow-400" />
                      ) : (
                        <EyeClosed className="text-yellow-400" />
                      )}
                    </div>
                  </div>
                  <ErrorMessage
                    name="password"
                    component="p"
                    className="mt-1 text-red-500 text-sm pl-2"
                  />
                </div>

                {/* Sign In Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-yellow-400 text-black font-semibold rounded-full w-full py-3 hover:bg-yellow-300 transition disabled:opacity-50"
                >
                  {isSubmitting ? "Signing In..." : "Sign In"}
                </button>
              </Form>
            )}
          </Formik>

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

      {/* ✅ Show Welcome Popup */}
      {showWelcome && (
        <WelcomePopup
          onClose={() => {
            setShowWelcome(false);
            navigate("/home"); // redirect after closing popup
          }}
        />
      )}
    </div>
  );
}
