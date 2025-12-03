import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useAuth } from "../context/AuthContext";   // <-- Added auth context
import { signOut } from "firebase/auth";
import { auth } from "../firebase/firebase";        // <-- For Firebase logout

const Navbar = () => {
  const { userRole, isLoggedIn, logout } = useAuth();   // <-- From global state
  const navigate = useNavigate();

  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLogoutClick = async () => {
    await signOut(auth);      // Firebase logout
    logout();                 // remove role and login from context
    navigate("/");            // redirect home
  };

  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  // --- Hide navbar completely when logged in inside dashboard ---
  if (isLoggedIn) return null;

  return (
    <nav
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/90 backdrop-blur-lg shadow-lg"
          : "bg-white/50 backdrop-blur-sm"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl flex items-center justify-center text-white font-bold text-xl shadow-lg transform group-hover:scale-110 transition">
              V
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              VendorConnect
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-700 hover:text-purple-600 font-medium transition">
              Home
            </Link>
            <Link to="/about" className="text-gray-700 hover:text-purple-600 font-medium transition">
              About
            </Link>
            <Link to="/contact" className="text-gray-700 hover:text-purple-600 font-medium transition">
              Contact
            </Link>

            {/* Dashboard Links */}
            {userRole === "admin" && (
              <Link to="/admin" className="text-gray-700 hover:text-purple-600 font-medium transition">
                Admin Dashboard
              </Link>
            )}
            {userRole === "vendor" && (
              <Link to="/vendor" className="text-gray-700 hover:text-purple-600 font-medium transition">
                Vendor Dashboard
              </Link>
            )}
          </div>

          {/* Desktop Auth Buttons */}
          <div className="hidden md:flex items-center space-x-3">
            {!isLoggedIn ? (
              <>
                <Link to="/login">
                  <button className="px-6 py-2 border-2 border-purple-600 text-purple-600 rounded-lg font-semibold hover:bg-purple-50 transition">
                    Login
                  </button>
                </Link>
                <Link to="/signup">
                  <button className="px-6 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-semibold hover:shadow-lg hover:scale-105 transition">
                    Signup
                  </button>
                </Link>
              </>
            ) : (
              <button
                onClick={handleLogoutClick}
                className="px-6 py-2 bg-gradient-to-r from-red-600 to-red-700 text-white rounded-lg font-semibold hover:shadow-lg hover:scale-105 transition"
              >
                Logout
              </button>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-gray-200">
            <div className="flex flex-col space-y-3 pt-4">
              <Link to="/" onClick={closeMobileMenu} className="text-gray-700 hover:text-purple-600 font-medium">
                Home
              </Link>
              <Link to="/about" onClick={closeMobileMenu} className="text-gray-700 hover:text-purple-600 font-medium">
                About
              </Link>
              <Link to="/contact" onClick={closeMobileMenu} className="text-gray-700 hover:text-purple-600 font-medium">
                Contact
              </Link>

              {userRole === "admin" && (
                <Link to="/admin" onClick={closeMobileMenu} className="text-gray-700 hover:text-purple-600 font-medium">
                  Admin Dashboard
                </Link>
              )}
              {userRole === "vendor" && (
                <Link to="/vendor" onClick={closeMobileMenu} className="text-gray-700 hover:text-purple-600 font-medium">
                  Vendor Dashboard
                </Link>
              )}

              {/* Mobile Auth Buttons */}
              <div className="flex flex-col space-y-2 pt-2">
                {!isLoggedIn ? (
                  <>
                    <Link to="/login" onClick={closeMobileMenu}>
                      <button className="w-full px-6 py-2 border-2 border-purple-600 text-purple-600 rounded-lg font-semibold hover:bg-purple-50 transition">
                        Login
                      </button>
                    </Link>
                    <Link to="/signup" onClick={closeMobileMenu}>
                      <button className="w-full px-6 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-semibold hover:shadow-lg transition">
                        Signup
                      </button>
                    </Link>
                  </>
                ) : (
                  <button
                    onClick={() => {
                      handleLogoutClick();
                      closeMobileMenu();
                    }}
                    className="w-full px-6 py-2 bg-gradient-to-r from-red-600 to-red-700 text-white rounded-lg font-semibold hover:shadow-lg transition"
                  >
                    Logout
                  </button>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
