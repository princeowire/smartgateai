import React, { useState } from "react";
import { Mail, Lock, User2, EyeClosed, Eye } from "lucide-react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const EmployersForm = () => {
  const [seePassword, setSeePassword] = useState(false);

  const initialValues = {
    firstName: "",
    lastName: "",
    company: "",
    email: "",
    password: "",
  };

  const validationSchema = Yup.object({
    firstName: Yup.string().required("Required"),
    lastName: Yup.string().required("Required"),
    company: Yup.string().required("Required"),
    email: Yup.string().email("Invalid email").required("Required"),
    password: Yup.string().min(6, "Min 6 chars").required("Required"),
  });

  const handleSubmit = (values) => {
    console.log("Form Data:", values);
  };

  return (
    <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
      <Form className="w-full md:w-1/2 flex flex-col items-center justify-center p-10 backdrop-blur-md bg-white/5">
        <h2 className="text-3xl font-bold text-yellow-400 mb-6">Employer Sign up</h2>

        {/* First + Last Name */}
        <div className="flex gap-4 w-full">
          
          <div className="relative flex items-center bg-white/10 rounded-full px-4 py-3 w-full mb-6">
            <User2 className="text-yellow-400 mr-3" />
            <Field
              name="firstName"
              type="text"
              placeholder="First Name"
              className="bg-transparent w-full outline-none text-white placeholder-gray-400"
            />
            <ErrorMessage name="firstName">
              {(msg) => (
                <div className="absolute -top-5 left-2 text-xs text-red-500">{msg}</div>
              )}
            </ErrorMessage>
          </div>

          <div className="relative flex items-center bg-white/10 rounded-full px-4 py-3 w-full mb-6">
            <User2 className="text-yellow-400 mr-3" />
            <Field
              name="lastName"
              type="text"
              placeholder="Last Name"
              className="bg-transparent w-full outline-none text-white placeholder-gray-400"
            />
            <ErrorMessage name="lastName">
              {(msg) => (
                <div className="absolute -top-5 left-2 text-xs text-red-500">{msg}</div>
              )}
            </ErrorMessage>
          </div>
        </div>

        {/* Company */}
        <div className="relative flex items-center bg-white/10 rounded-full px-4 py-3 w-full mb-6">
          <User2 className="text-yellow-400 mr-3" />
          <Field
            name="company"
            type="text"
            placeholder="Company Name"
            className="bg-transparent w-full outline-none text-white placeholder-gray-400"
          />
          <ErrorMessage name="company">
            {(msg) => (
              <div className="absolute -top-5 left-2 text-xs text-red-500">{msg}</div>
            )}
          </ErrorMessage>
        </div>

        {/* Email */}
        <div className="relative flex items-center bg-white/10 rounded-full px-4 py-3 w-full mb-6">
          <Mail className="text-yellow-400 mr-3" />
          <Field
            name="email"
            type="email"
            placeholder="Email ID"
            className="bg-transparent w-full outline-none text-white placeholder-gray-400"
          />
          <ErrorMessage name="email">
            {(msg) => (
              <div className="absolute -top-5 left-2 text-xs text-red-500">{msg}</div>
            )}
          </ErrorMessage>
        </div>

        {/* Password */}
        <div className="relative flex items-center bg-white/10 rounded-full px-4 py-3 w-full mb-6">
          <Lock className="text-yellow-400 mr-3" />
          <Field
            name="password"
            type={seePassword ? "text" : "password"}
            placeholder="Password"
            className="bg-transparent w-full outline-none text-white placeholder-gray-400"
          />
          <div onClick={() => setSeePassword(!seePassword)} className="cursor-pointer ml-2">
            {seePassword ? <Eye className="text-yellow-400" /> : <EyeClosed className="text-yellow-400" />}
          </div>
          <ErrorMessage name="password">
            {(msg) => (
              <div className="absolute -top-5 left-2 text-xs text-red-500">{msg}</div>
            )}
          </ErrorMessage>
        </div>

        {/* Submit Button */}
        <button type="submit" className="bg-yellow-400 text-black font-semibold rounded-full w-full py-3 hover:bg-yellow-300 transition">
          Sign up
        </button>
      </Form>
    </Formik>
  );
};

export default EmployersForm;
