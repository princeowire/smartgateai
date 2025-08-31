import React, { useState } from "react";
import { Mail, Lock, User2, EyeClosed, Eye } from "lucide-react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const TalentForm = ({ employerSave, setemployerSave }) => {
  const [seePassword, setSeepassword] = useState(false);

  // ✅ Validation Schema
  const validationSchema = Yup.object({
    firstName: Yup.string().required("First name is required"),
    lastName: Yup.string().required("Last name is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    password: Yup.string().min(6, "Password must be at least 6 characters").required("Password is required"),
  });

  // ✅ Handle Submit
  const handleSubmit = (values) => {
    console.log("Form values:", values);
    // you can call setemployerSave(values) if you want to save
  };

  return (
    <Formik
      initialValues={{ firstName: "", lastName: "", email: "", password: "" }}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {() => (
        <Form className="w-full md:w-1/2 flex flex-col items-center justify-center p-10 backdrop-blur-md bg-white/5">
          <h2 className="text-3xl font-bold text-yellow-400 mb-6">User Sign up</h2>

          {/* Firstname Input */}
          <div className="w-full mb-4">
            <div className="flex items-center bg-white/10 rounded-full px-4 py-3">
              <User2 className="text-yellow-400 mr-3" />
              <Field
                type="text"
                name="firstName"
                placeholder="First Name"
                className="bg-transparent w-full outline-none text-white placeholder-gray-400"
              />
            </div>
            <ErrorMessage name="firstName" component="div" className="text-red-400 text-sm mt-1 ml-3" />
          </div>

          {/* Lastname Input */}
          <div className="w-full mb-4">
            <div className="flex items-center bg-white/10 rounded-full px-4 py-3">
              <User2 className="text-yellow-400 mr-3" />
              <Field
                type="text"
                name="lastName"
                placeholder="Last Name"
                className="bg-transparent w-full outline-none text-white placeholder-gray-400"
              />
            </div>
            <ErrorMessage name="lastName" component="div" className="text-red-400 text-sm mt-1 ml-3" />
          </div>

          {/* Email Input */}
          <div className="w-full mb-4">
            <div className="flex items-center bg-white/10 rounded-full px-4 py-3">
              <Mail className="text-yellow-400 mr-3" />
              <Field
                type="email"
                name="email"
                placeholder="Email ID"
                className="bg-transparent w-full outline-none text-white placeholder-gray-400"
              />
            </div>
            <ErrorMessage name="email" component="div" className="text-red-400 text-sm mt-1 ml-3" />
          </div>

          {/* Password Input */}
          <div className="w-full mb-4">
            <div className="flex items-center bg-white/10 rounded-full px-4 py-3">
              <Lock className="text-yellow-400 mr-3" />
              <Field
                type={seePassword ? "text" : "password"}
                name="password"
                placeholder="Password"
                className="bg-transparent w-full outline-none text-white placeholder-gray-400"
              />
              <div onClick={() => setSeepassword(!seePassword)} className="cursor-pointer">
                {seePassword ? <Eye className="text-yellow-400" /> : <EyeClosed className="text-yellow-400" />}
              </div>
            </div>
            <ErrorMessage name="password" component="div" className="text-red-400 text-sm mt-1 ml-3" />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="bg-yellow-400 text-black font-semibold rounded-full w-full py-3 hover:bg-yellow-300 transition"
          >
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
        </Form>
      )}
    </Formik>
  );
};

export default TalentForm;
