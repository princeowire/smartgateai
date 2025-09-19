import React, { useState } from "react";
import { Mail, Lock, User2, EyeClosed, Eye } from "lucide-react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore"; // ✅ Firestore functions
import { auth, db } from "../../lib/firebase"; // make sure db = getFirestore(app)
import { useNavigate } from "react-router-dom";

const EmployersForm = () => {
  const [seePassword, setSeePassword] = useState(false);
  const navigate = useNavigate();

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

  const handleSubmit = async (values, { setSubmitting, resetForm }) => {
    try {
      // ✅ Create employer in Firebase Auth
      const userCred = await createUserWithEmailAndPassword(
        auth,
        values.email,
        values.password
      );

      // ✅ Save employer details in Firestore
      await setDoc(doc(db, "users", userCred.user.uid), {
        firstName: values.firstName,
        lastName: values.lastName,
        company: values.company,
        email: values.email,
        role: "employer",
        createdAt: Date.now(),
      });

      alert("Employer account created ✅");
      resetForm();
      navigate("/"); // redirect after signup
    } catch (error) {
      console.error("Signup error:", error);
      alert(error.message);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      <Form className="w-full md:w-1/2 flex flex-col items-center justify-center p-10 backdrop-blur-md bg-white/5">
        <h2 className="text-3xl font-bold text-yellow-400 mb-6">
          Employer Sign up
        </h2>

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
            <ErrorMessage
              name="firstName"
              component="div"
              className="absolute -top-5 left-2 text-xs text-red-500"
            />
          </div>

          <div className="relative flex items-center bg-white/10 rounded-full px-4 py-3 w-full mb-6">
            <User2 className="text-yellow-400 mr-3" />
            <Field
              name="lastName"
              type="text"
              placeholder="Last Name"
              className="bg-transparent w-full outline-none text-white placeholder-gray-400"
            />
            <ErrorMessage
              name="lastName"
              component="div"
              className="absolute -top-5 left-2 text-xs text-red-500"
            />
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
          <ErrorMessage
            name="company"
            component="div"
            className="absolute -top-5 left-2 text-xs text-red-500"
          />
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
          <ErrorMessage
            name="email"
            component="div"
            className="absolute -top-5 left-2 text-xs text-red-500"
          />
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
          <ErrorMessage
            name="password"
            component="div"
            className="absolute -top-5 left-2 text-xs text-red-500"
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="bg-yellow-400 text-black font-semibold rounded-full w-full py-3 hover:bg-yellow-300 transition"
        >
          Sign up
        </button>
      </Form>
    </Formik>
  );
};

export default EmployersForm;
