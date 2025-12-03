import { createBrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Contact from "./pages/Contact.jsx";
import Login from "./pages/Login.jsx";
import Signup from "./pages/Signup.jsx";
import AdminDashboard from "./dashboards/AdminDashboard.jsx";
import VendorDashboard from "./dashboards/VendorDashboard.jsx";
import ProtectedRoute from "./components/ProtectedRoute.jsx";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/about", element: <About /> },
      { path: "/contact", element: <Contact /> },
      { path: "/login", element: <Login /> },
      { path: "/signup", element: <Signup /> },

      {
        path: "/admin",
        element: <ProtectedRoute role="admin" element={<AdminDashboard />} />
      },
      {
        path: "/vendor",
        element: <ProtectedRoute role="vendor" element={<VendorDashboard />} />
      }
    ],
  },
]);
