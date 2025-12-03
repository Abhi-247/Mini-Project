import React, { useState } from 'react';
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin, Send } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

const Footer = () => {
  const [email, setEmail] = useState('');

  const handleSubscribe = () => {
    if (email) {
      alert('Thank you for subscribing!');
      setEmail('');
    }
  };

  const handleNavClick = (path) => {
    console.log('Navigate to:', path);
  };

  const { isLoggedIn } = useAuth();
   
  if (isLoggedIn) return null;

  return (
    <footer className="bg-gray-900 text-gray-300">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl flex items-center justify-center text-white font-bold text-xl shadow-lg">
                V
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                VendorConnect
              </span>
            </div>
            <p className="text-gray-400 leading-relaxed mb-6">
              Connecting customers with local street vendors, promoting small businesses and community support.
            </p>
            <div className="flex space-x-4">
              <button className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gradient-to-br hover:from-blue-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-110">
                <Facebook className="w-5 h-5" />
              </button>
              <button className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gradient-to-br hover:from-blue-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-110">
                <Twitter className="w-5 h-5" />
              </button>
              <button className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gradient-to-br hover:from-blue-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-110">
                <Instagram className="w-5 h-5" />
              </button>
              <button className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gradient-to-br hover:from-blue-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-110">
                <Linkedin className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold text-xl mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <button 
                  onClick={() => handleNavClick('/')}
                  className="text-gray-400 hover:text-white hover:translate-x-2 transition-all duration-300 flex items-center"
                >
                  <span className="mr-2">→</span> Home
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNavClick('/about')}
                  className="text-gray-400 hover:text-white hover:translate-x-2 transition-all duration-300 flex items-center"
                >
                  <span className="mr-2">→</span> About Us
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNavClick('/vendors')}
                  className="text-gray-400 hover:text-white hover:translate-x-2 transition-all duration-300 flex items-center"
                >
                  <span className="mr-2">→</span> Find Vendors
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNavClick('/how-it-works')}
                  className="text-gray-400 hover:text-white hover:translate-x-2 transition-all duration-300 flex items-center"
                >
                  <span className="mr-2">→</span> How It Works
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNavClick('/blog')}
                  className="text-gray-400 hover:text-white hover:translate-x-2 transition-all duration-300 flex items-center"
                >
                  <span className="mr-2">→</span> Blog
                </button>
              </li>
            </ul>
          </div>

          {/* Support & Legal */}
          <div>
            <h4 className="text-white font-bold text-xl mb-6">Support & Legal</h4>
            <ul className="space-y-3">
              <li>
                <button 
                  onClick={() => handleNavClick('/faq')}
                  className="text-gray-400 hover:text-white hover:translate-x-2 transition-all duration-300 flex items-center"
                >
                  <span className="mr-2">→</span> FAQ
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNavClick('/support')}
                  className="text-gray-400 hover:text-white hover:translate-x-2 transition-all duration-300 flex items-center"
                >
                  <span className="mr-2">→</span> Help Center
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNavClick('/contact')}
                  className="text-gray-400 hover:text-white hover:translate-x-2 transition-all duration-300 flex items-center"
                >
                  <span className="mr-2">→</span> Contact Us
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNavClick('/privacy')}
                  className="text-gray-400 hover:text-white hover:translate-x-2 transition-all duration-300 flex items-center"
                >
                  <span className="mr-2">→</span> Privacy Policy
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNavClick('/terms')}
                  className="text-gray-400 hover:text-white hover:translate-x-2 transition-all duration-300 flex items-center"
                >
                  <span className="mr-2">→</span> Terms of Service
                </button>
              </li>
            </ul>
          </div>

          {/* Contact & Newsletter */}
          <div>
            <h4 className="text-white font-bold text-xl mb-6">Stay Connected</h4>
            <div className="space-y-4 mb-6">
              <div className="flex items-start space-x-3">
                <Mail className="w-5 h-5 text-purple-400 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-sm text-gray-500">Email</p>
                  <a href="mailto:support@vendorempower.com" className="text-gray-300 hover:text-white transition-colors">
                    support@vendorempower.com
                  </a>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Phone className="w-5 h-5 text-purple-400 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-sm text-gray-500">Phone</p>
                  <a href="tel:+911234567890" className="text-gray-300 hover:text-white transition-colors">
                    +91 123 456 7890
                  </a>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-purple-400 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-sm text-gray-500">Location</p>
                  <p className="text-gray-300">Mumbai, India</p>
                </div>
              </div>
            </div>

            {/* Newsletter */}
            <div className="mt-6">
              <h5 className="text-white font-semibold mb-3">Newsletter</h5>
              <p className="text-sm text-gray-400 mb-3">Subscribe to get updates and offers</p>
              <div className="flex">
                <input 
                  type="email" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email"
                  className="flex-1 px-4 py-2 bg-gray-800 text-white rounded-l-lg border-2 border-gray-700 focus:border-purple-500 focus:outline-none transition-colors"
                />
                <button 
                  onClick={handleSubscribe}
                  className="px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-r-lg hover:shadow-lg transition-all transform hover:scale-105 flex items-center"
                >
                  <Send className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-500 text-sm">
              © 2025 VendorEmpower. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <button 
                onClick={() => handleNavClick('/sitemap')}
                className="text-gray-500 hover:text-white transition-colors"
              >
                Sitemap
              </button>
              <button 
                onClick={() => handleNavClick('/accessibility')}
                className="text-gray-500 hover:text-white transition-colors"
              >
                Accessibility
              </button>
              <button 
                onClick={() => handleNavClick('/cookies')}
                className="text-gray-500 hover:text-white transition-colors"
              >
                Cookie Policy
              </button>
            </div>
          </div>
        </div>
      </div>

    </footer>
  );
};

export default Footer;