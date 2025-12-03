import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext.jsx";

const ProtectedRoute = ({ element, role }) => {
  const { userRole } = useAuth();

  if (userRole !== role) {
    return <Navigate to="/login" replace />;
  }

  return element;
};

export default ProtectedRoute;
