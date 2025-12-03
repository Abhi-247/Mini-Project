import React, { useState } from 'react';
import { User, Store, Mail, Lock, Phone, MapPin, Building, FileText, Calendar, Users } from 'lucide-react';

const Signup = () => {
  const [userType, setUserType] = useState('vendor'); // 'admin' or 'vendor'
  
  // Admin form state
  const [adminData, setAdminData] = useState({
    username: '',
    password: '',
    confirmPassword: ''
  });

  // Vendor form state
  const [vendorData, setVendorData] = useState({
    // Personal Details
    fullName: '',
    email: '',
    phone: '',
    dateOfBirth: '',
    gender: '',
    
    // Address Details
    address: '',
    city: '',
    state: '',
    pincode: '',
    
    // Business Details
    businessName: '',
    businessType: '',
    businessCategory: '',
    yearsInBusiness: '',
    
    // License & Documents
    aadharNumber: '',
    panNumber: '',
    vendorLicenseNumber: '',
    gstNumber: '',
    
    // Login Credentials
    password: '',
    confirmPassword: ''
  });

  const handleAdminChange = (e) => {
    setAdminData({
      ...adminData,
      [e.target.name]: e.target.value
    });
  };

  const handleVendorChange = (e) => {
    setVendorData({
      ...vendorData,
      [e.target.name]: e.target.value
    });
  };

  const handleAdminSubmit = (e) => {
    e.preventDefault();
    if (adminData.password !== adminData.confirmPassword) {
      alert('Passwords do not match!');
      return;
    }
    console.log('Admin Signup:', adminData);
    alert('Admin registration submitted successfully!');
  };

  const handleVendorSubmit = (e) => {
    e.preventDefault();
    if (vendorData.password !== vendorData.confirmPassword) {
      alert('Passwords do not match!');
      return;
    }
    console.log('Vendor Signup:', vendorData);
    alert('Vendor registration submitted successfully! You will be verified within 24-48 hours.');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 pt-24 pb-12 px-6">
      <div className="max-w-4xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Create Your Account
          </h1>
          <p className="text-gray-600 text-lg">Join VendorEmpower and start your journey today</p>
        </div>

        {/* User Type Toggle */}
        <div className="bg-white rounded-2xl shadow-lg p-2 mb-8 flex gap-2">
          <button
            onClick={() => setUserType('vendor')}
            className={`flex-1 py-4 px-6 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center gap-2 ${
              userType === 'vendor'
                ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                : 'text-gray-600 hover:bg-gray-50'
            }`}
          >
            <Store className="w-5 h-5" />
            Vendor Registration
          </button>
          <button
            onClick={() => setUserType('admin')}
            className={`flex-1 py-4 px-6 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center gap-2 ${
              userType === 'admin'
                ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                : 'text-gray-600 hover:bg-gray-50'
            }`}
          >
            <User className="w-5 h-5" />
            Admin Registration
          </button>
        </div>

        {/* Admin Form */}
        {userType === 'admin' && (
          <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl flex items-center justify-center text-white">
                <User className="w-6 h-6" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-gray-800">Admin Registration</h2>
                <p className="text-sm text-gray-600">Create your admin account</p>
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Username *
                </label>
                <div className="relative">
                  <User className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    name="username"
                    value={adminData.username}
                    onChange={handleAdminChange}
                    placeholder="Enter username"
                    className="w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:border-purple-500 focus:outline-none transition-colors"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Password *
                </label>
                <div className="relative">
                  <Lock className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="password"
                    name="password"
                    value={adminData.password}
                    onChange={handleAdminChange}
                    placeholder="Enter password"
                    className="w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:border-purple-500 focus:outline-none transition-colors"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Confirm Password *
                </label>
                <div className="relative">
                  <Lock className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="password"
                    name="confirmPassword"
                    value={adminData.confirmPassword}
                    onChange={handleAdminChange}
                    placeholder="Re-enter password"
                    className="w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:border-purple-500 focus:outline-none transition-colors"
                    required
                  />
                </div>
              </div>

              <button
                onClick={handleAdminSubmit}
                className="w-full py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-bold text-lg shadow-lg hover:shadow-2xl hover:scale-105 transition-all"
              >
                Register as Admin
              </button>
            </div>
          </div>
        )}

        {/* Vendor Form */}
        {userType === 'vendor' && (
          <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl flex items-center justify-center text-white">
                <Store className="w-6 h-6" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-gray-800">Vendor Registration</h2>
                <p className="text-sm text-gray-600">Complete all details for license verification</p>
              </div>
            </div>

            <div className="space-y-8">
              
              {/* Personal Details Section */}
              <div>
                <h3 className="text-lg font-bold text-gray-800 mb-4 flex items-center gap-2">
                  <Users className="w-5 h-5 text-purple-600" />
                  Personal Details
                </h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="fullName"
                      value={vendorData.fullName}
                      onChange={handleVendorChange}
                      placeholder="Enter full name"
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-purple-500 focus:outline-none transition-colors"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={vendorData.email}
                      onChange={handleVendorChange}
                      placeholder="your@email.com"
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-purple-500 focus:outline-none transition-colors"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={vendorData.phone}
                      onChange={handleVendorChange}
                      placeholder="+91 1234567890"
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-purple-500 focus:outline-none transition-colors"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Date of Birth *
                    </label>
                    <input
                      type="date"
                      name="dateOfBirth"
                      value={vendorData.dateOfBirth}
                      onChange={handleVendorChange}
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-purple-500 focus:outline-none transition-colors"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Gender *
                    </label>
                    <select
                      name="gender"
                      value={vendorData.gender}
                      onChange={handleVendorChange}
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-purple-500 focus:outline-none transition-colors cursor-pointer"
                      required
                    >
                      <option value="">Select Gender</option>
                      <option value="male">Male</option>
                      <option value="female">Female</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Address Details Section */}
              <div>
                <h3 className="text-lg font-bold text-gray-800 mb-4 flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-purple-600" />
                  Address Details
                </h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="md:col-span-2">
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Full Address *
                    </label>
                    <input
                      type="text"
                      name="address"
                      value={vendorData.address}
                      onChange={handleVendorChange}
                      placeholder="Street address, locality"
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-purple-500 focus:outline-none transition-colors"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      City *
                    </label>
                    <input
                      type="text"
                      name="city"
                      value={vendorData.city}
                      onChange={handleVendorChange}
                      placeholder="City"
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-purple-500 focus:outline-none transition-colors"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      State *
                    </label>
                    <input
                      type="text"
                      name="state"
                      value={vendorData.state}
                      onChange={handleVendorChange}
                      placeholder="State"
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-purple-500 focus:outline-none transition-colors"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Pincode *
                    </label>
                    <input
                      type="text"
                      name="pincode"
                      value={vendorData.pincode}
                      onChange={handleVendorChange}
                      placeholder="6-digit pincode"
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-purple-500 focus:outline-none transition-colors"
                      required
                    />
                  </div>
                </div>
              </div>

              {/* Business Details Section */}
              <div>
                <h3 className="text-lg font-bold text-gray-800 mb-4 flex items-center gap-2">
                  <Building className="w-5 h-5 text-purple-600" />
                  Business Details
                </h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Business Name *
                    </label>
                    <input
                      type="text"
                      name="businessName"
                      value={vendorData.businessName}
                      onChange={handleVendorChange}
                      placeholder="Your business name"
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-purple-500 focus:outline-none transition-colors"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Business Type *
                    </label>
                    <select
                      name="businessType"
                      value={vendorData.businessType}
                      onChange={handleVendorChange}
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-purple-500 focus:outline-none transition-colors cursor-pointer"
                      required
                    >
                      <option value="">Select Type</option>
                      <option value="mobile">Mobile Vendor</option>
                      <option value="fixed">Fixed Location</option>
                      <option value="temporary">Temporary Setup</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Business Category *
                    </label>
                    <select
                      name="businessCategory"
                      value={vendorData.businessCategory}
                      onChange={handleVendorChange}
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-purple-500 focus:outline-none transition-colors cursor-pointer"
                      required
                    >
                      <option value="">Select Category</option>
                      <option value="food">Food & Beverages</option>
                      <option value="clothing">Clothing & Apparel</option>
                      <option value="accessories">Accessories & Jewelry</option>
                      <option value="electronics">Electronics</option>
                      <option value="crafts">Handicrafts & Art</option>
                      <option value="vegetables">Vegetables & Fruits</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Years in Business *
                    </label>
                    <input
                      type="number"
                      name="yearsInBusiness"
                      value={vendorData.yearsInBusiness}
                      onChange={handleVendorChange}
                      placeholder="e.g., 5"
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-purple-500 focus:outline-none transition-colors"
                      required
                    />
                  </div>
                </div>
              </div>

              {/* License & Documents Section */}
              <div>
                <h3 className="text-lg font-bold text-gray-800 mb-4 flex items-center gap-2">
                  <FileText className="w-5 h-5 text-purple-600" />
                  License & Documents
                </h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Aadhar Number *
                    </label>
                    <input
                      type="text"
                      name="aadharNumber"
                      value={vendorData.aadharNumber}
                      onChange={handleVendorChange}
                      placeholder="12-digit Aadhar number"
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-purple-500 focus:outline-none transition-colors"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      PAN Number *
                    </label>
                    <input
                      type="text"
                      name="panNumber"
                      value={vendorData.panNumber}
                      onChange={handleVendorChange}
                      placeholder="10-character PAN"
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-purple-500 focus:outline-none transition-colors"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Vendor License Number
                    </label>
                    <input
                      type="text"
                      name="vendorLicenseNumber"
                      value={vendorData.vendorLicenseNumber}
                      onChange={handleVendorChange}
                      placeholder="If already have"
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-purple-500 focus:outline-none transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      GST Number (Optional)
                    </label>
                    <input
                      type="text"
                      name="gstNumber"
                      value={vendorData.gstNumber}
                      onChange={handleVendorChange}
                      placeholder="15-character GST number"
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-purple-500 focus:outline-none transition-colors"
                    />
                  </div>
                </div>
              </div>

              {/* Login Credentials Section */}
              <div>
                <h3 className="text-lg font-bold text-gray-800 mb-4 flex items-center gap-2">
                  <Lock className="w-5 h-5 text-purple-600" />
                  Login Credentials
                </h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Password *
                    </label>
                    <input
                      type="password"
                      name="password"
                      value={vendorData.password}
                      onChange={handleVendorChange}
                      placeholder="Create password"
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-purple-500 focus:outline-none transition-colors"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Confirm Password *
                    </label>
                    <input
                      type="password"
                      name="confirmPassword"
                      value={vendorData.confirmPassword}
                      onChange={handleVendorChange}
                      placeholder="Re-enter password"
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-purple-500 focus:outline-none transition-colors"
                      required
                    />
                  </div>
                </div>
              </div>

              {/* Terms & Conditions */}
              <div className="bg-blue-50 p-6 rounded-xl">
                <label className="flex items-start gap-3 cursor-pointer">
                  <input 
                    type="checkbox" 
                    className="mt-1 w-5 h-5 text-purple-600 border-gray-300 rounded focus:ring-purple-500"
                    required
                  />
                  <span className="text-sm text-gray-700">
                    I agree to the <span className="text-purple-600 font-semibold">Terms & Conditions</span> and <span className="text-purple-600 font-semibold">Privacy Policy</span>. I understand that my information will be verified for license approval.
                  </span>
                </label>
              </div>

              <button
                onClick={handleVendorSubmit}
                className="w-full py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-bold text-lg shadow-lg hover:shadow-2xl hover:scale-105 transition-all"
              >
                Submit Registration for Verification
              </button>

              <p className="text-center text-sm text-gray-600">
                Already have an account? <a href="/login" className="text-purple-600 font-semibold hover:text-purple-700">Login here</a>
              </p>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};

export default Signup;