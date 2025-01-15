import React, { useEffect, useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import Login from "../components/Login";
import Signup from "../components/Signup";

const AuthPage: React.FC = () => {
  const { user, isAuthenticated, logout } = useAuth();
  const [showSignup, setShowSignup] = useState(false);
  const navigate = useNavigate();

  // Redirect to /home if authenticated
  useEffect(() => {
    if (isAuthenticated) {
      navigate("/home");
    }
  }, [isAuthenticated, navigate]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md bg-white p-6 rounded-lg shadow-md">
        {isAuthenticated ? (
          <>
            <h1 className="text-2xl font-bold text-center text-gray-800 mb-4">
              Welcome, {user?.name}!
            </h1>
            <p className="text-center text-gray-600 mb-6">
              You're logged in with the email:{" "}
              <strong>{user?.email}</strong>
            </p>
            <button
              onClick={logout}
              className="w-full bg-red-500 text-white py-2 px-4 rounded-lg hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-400"
            >
              Logout
            </button>
          </>
        ) : (
          <>
            {showSignup ? (
              <>
                <Signup />
                <p className="mt-4 text-sm text-center text-gray-600">
                  Already have an account?{" "}
                  <button
                    onClick={() => setShowSignup(false)}
                    className="text-blue-500 hover:underline"
                  >
                    Login here
                  </button>
                </p>
              </>
            ) : (
              <>
                <Login />
                <p className="mt-4 text-sm text-center text-gray-600">
                  Don't have an account?{" "}
                  <button
                    onClick={() => setShowSignup(true)}
                    className="text-blue-500 hover:underline"
                  >
                    Sign up here
                  </button>
                </p>
              </>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default AuthPage;
