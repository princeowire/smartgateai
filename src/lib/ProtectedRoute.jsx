import { Navigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../lib/firebase"; // adjust path
import loader from "../../public/assets/loader.svg"

const ProtectedRoute = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);

  useEffect(() => {
    // ✅ Listen for Firebase auth changes
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  if (loading) {
    return <p className="bg-black text-center mt-10 text-yellow-400 absolute top-0 left-0 w-screen h-screen flex items-center justify-center "><img className="w-14" src={loader} alt="" /></p>; // you can add a spinner here
  }
  if (!user) {
    return <Navigate to="/login" replace />;
  }

  return children;
};

export default ProtectedRoute;
