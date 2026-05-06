import { Navigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

function ProtectedRoute({ children }) {
  const [loading, setLoading] = useState(true);
  const [isAuth, setIsAuth] = useState(false);

  useEffect(() => {
    axios
      .get("https://zerodha-backend-5ncl.onrender.com/me", {
        withCredentials: true,
      })
      .then(() => {
        setIsAuth(true);
        setLoading(false);
      })
      .catch(() => {
        setIsAuth(false);
        setLoading(false);
      });
  }, []);

  if (loading) return <h3>Loading...</h3>;

  if (!isAuth) return <Navigate to="/signin" />;

  return children;
}

export default ProtectedRoute;