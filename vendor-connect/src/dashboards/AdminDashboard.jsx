import React, { useState } from 'react';
import {
  Users, CheckCircle, XCircle, Clock, TrendingUp, Store,
  MessageSquare, Settings, LogOut, Search, Filter, Eye,
  FileText, BarChart3, Bell, AlertCircle, Download
} from 'lucide-react';

const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState('pending');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedVendor, setSelectedVendor] = useState(null);

  const [vendors, setVendors] = useState([
    {
      id: 1,
      name: 'Rajesh Kumar',
      businessName: 'Raj Food Cart',
      email: 'rajesh@example.com',
      phone: '+91 9876543210',
      category: 'Food & Beverages',
      businessType: 'Mobile Vendor',
      address: 'Mumbai, Maharashtra',
      aadhar: '1234-5678-9012',
      pan: 'ABCDE1234F',
      status: 'pending',
      appliedDate: '2025-01-15',
      yearsInBusiness: 5
    },
    {
      id: 2,
      name: 'Priya Sharma',
      businessName: 'Priya Boutique',
      email: 'priya@example.com',
      phone: '+91 9876543211',
      category: 'Clothing & Apparel',
      businessType: 'Fixed Location',
      address: 'Delhi, Delhi',
      aadhar: '9876-5432-1098',
      pan: 'XYZAB5678C',
      status: 'pending',
      appliedDate: '2025-01-16',
      yearsInBusiness: 3
    },
    {
      id: 3,
      name: 'Amit Patel',
      businessName: 'Electronics Hub',
      email: 'amit@example.com',
      phone: '+91 9876543212',
      category: 'Electronics',
      businessType: 'Fixed Location',
      address: 'Ahmedabad, Gujarat',
      aadhar: '5555-4444-3333',
      pan: 'PQRST1111D',
      status: 'approved',
      appliedDate: '2025-01-10',
      approvedDate: '2025-01-12',
      yearsInBusiness: 7
    },
    {
      id: 4,
      name: 'Sneha Reddy',
      businessName: 'Craft Corner',
      email: 'sneha@example.com',
      phone: '+91 9876543213',
      category: 'Handicrafts & Art',
      businessType: 'Temporary Setup',
      address: 'Hyderabad, Telangana',
      aadhar: '7777-8888-9999',
      pan: 'LMNOP2222E',
      status: 'rejected',
      appliedDate: '2025-01-14',
      rejectedDate: '2025-01-15',
      rejectionReason: 'Incomplete documentation',
      yearsInBusiness: 2
    }
  ]);

  const stats = {
    totalVendors: vendors.length,
    pending: vendors.filter(v => v.status === 'pending').length,
    approved: vendors.filter(v => v.status === 'approved').length,
    rejected: vendors.filter(v => v.status === 'rejected').length
  };

  const handleApprove = (id) => {
    setVendors(vendors.map(v =>
      v.id === id
        ? { ...v, status: 'approved', approvedDate: new Date().toISOString().split('T')[0] }
        : v
    ));
    setSelectedVendor(null);
    alert('Vendor approved successfully!');
  };

  const handleReject = (id) => {
    const reason = prompt('Enter rejection reason:');
    if (reason) {
      setVendors(vendors.map(v =>
        v.id === id
          ? { ...v, status: 'rejected', rejectedDate: new Date().toISOString().split('T')[0], rejectionReason: reason }
          : v
      ));
      setSelectedVendor(null);
      alert('Vendor rejected!');
    }
  };

  const handleLogout = () => {
    const confirmLogout = window.confirm("Are you sure you want to logout?");
    if (confirmLogout) {
      alert('Logged out successfully!');
    }
  };

  const filteredVendors = vendors.filter(v => {
    const matchesTab = activeTab === 'all' || v.status === activeTab;
    const matchesSearch = v.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      v.businessName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      v.email.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesTab && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Sidebar */}
      <div className="fixed left-0 top-0 h-full w-64 bg-white shadow-xl z-40 flex flex-col">
        <div className="p-6 border-b border-gray-200">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl flex items-center justify-center text-white font-bold text-xl">
              A
            </div>
            <div>
              <h2 className="font-bold text-gray-800">Admin Panel</h2>
              <p className="text-xs text-gray-500">VendorEmpower</p>
            </div>
          </div>
        </div>

        <nav className="flex-1 p-4 space-y-2">
          <button className="w-full flex items-center gap-3 px-4 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-semibold">
            <Users className="w-5 h-5" />
            Vendor Management
          </button>
          <button className="w-full flex items-center gap-3 px-4 py-3 text-gray-600 hover:bg-gray-100 rounded-xl font-semibold transition-colors">
            <BarChart3 className="w-5 h-5" />
            Analytics
          </button>
          <button className="w-full flex items-center gap-3 px-4 py-3 text-gray-600 hover:bg-gray-100 rounded-xl font-semibold transition-colors">
            <MessageSquare className="w-5 h-5" />
            Messages
          </button>
          <button className="w-full flex items-center gap-3 px-4 py-3 text-gray-600 hover:bg-gray-100 rounded-xl font-semibold transition-colors">
            <Settings className="w-5 h-5" />
            Settings
          </button>
        </nav>

        <div className="p-4 border-t border-gray-200">
          <button
            onClick={handleLogout}
            className="w-full flex items-center gap-3 px-4 py-3 text-red-600 hover:bg-red-50 rounded-xl font-semibold transition-colors"
          >
            <LogOut className="w-5 h-5" />
            Logout
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="ml-64 p-8">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Vendor Management
            </h1>
            <p className="text-gray-600 mt-2">Review and approve vendor registrations</p>
          </div>
          <div className="flex items-center gap-4">
            <button className="p-3 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all relative">
              <Bell className="w-6 h-6 text-gray-600" />
              <span className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 rounded-full text-white text-xs flex items-center justify-center">
                {stats.pending}
              </span>
            </button>
            <div className="flex items-center gap-3 bg-white px-4 py-2 rounded-xl shadow-lg">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white font-bold">
                A
              </div>
              <div>
                <p className="font-semibold text-gray-800">Admin</p>
                <p className="text-xs text-gray-500">Super Admin</p>
              </div>
            </div>
          </div>
        </div>

        {/* Statistics Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                <Store className="w-6 h-6 text-blue-600" />
              </div>
              <TrendingUp className="w-5 h-5 text-green-500" />
            </div>
            <h3 className="text-3xl font-bold text-gray-800">{stats.totalVendors}</h3>
            <p className="text-gray-600 text-sm">Total Vendors</p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all cursor-pointer"
            onClick={() => setActiveTab('pending')}>
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-yellow-100 rounded-xl flex items-center justify-center">
                <Clock className="w-6 h-6 text-yellow-600" />
              </div>
            </div>
            <h3 className="text-3xl font-bold text-gray-800">{stats.pending}</h3>
            <p className="text-gray-600 text-sm">Pending Approval</p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all cursor-pointer"
            onClick={() => setActiveTab('approved')}>
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                <CheckCircle className="w-6 h-6 text-green-600" />
              </div>
            </div>
            <h3 className="text-3xl font-bold text-gray-800">{stats.approved}</h3>
            <p className="text-gray-600 text-sm">Approved</p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all cursor-pointer"
            onClick={() => setActiveTab('rejected')}>
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center">
                <XCircle className="w-6 h-6 text-red-600" />
              </div>
            </div>
            <h3 className="text-3xl font-bold text-gray-800">{stats.rejected}</h3>
            <p className="text-gray-600 text-sm">Rejected</p>
          </div>
        </div>

        {/* Filters and Search */}
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-6">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="flex gap-2">
              <button
                onClick={() => setActiveTab('all')}
                className={`px-6 py-2 rounded-xl font-semibold transition-all ${activeTab === 'all'
                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
              >
                All
              </button>
              <button
                onClick={() => setActiveTab('pending')}
                className={`px-6 py-2 rounded-xl font-semibold transition-all ${activeTab === 'pending'
                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
              >
                Pending
              </button>
              <button
                onClick={() => setActiveTab('approved')}
                className={`px-6 py-2 rounded-xl font-semibold transition-all ${activeTab === 'approved'
                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
              >
                Approved
              </button>
              <button
                onClick={() => setActiveTab('rejected')}
                className={`px-6 py-2 rounded-xl font-semibold transition-all ${activeTab === 'rejected'
                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
              >
                Rejected
              </button>
            </div>

            <div className="flex gap-3 w-full md:w-auto">
              <div className="relative flex-1 md:w-64">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search vendors..."
                  className="w-full pl-10 pr-4 py-2 border-2 border-gray-200 rounded-xl focus:border-purple-500 focus:outline-none transition-colors"
                />
              </div>
              <button className="px-4 py-2 bg-gray-100 rounded-xl hover:bg-gray-200 transition-colors">
                <Filter className="w-5 h-5 text-gray-600" />
              </button>
            </div>
          </div>
        </div>

        {/* Vendors Table */}
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gradient-to-r from-blue-600 to-purple-600 text-white">
                <tr>
                  <th className="px-6 py-4 text-left font-semibold">Vendor Details</th>
                  <th className="px-6 py-4 text-left font-semibold">Business Info</th>
                  <th className="px-6 py-4 text-left font-semibold">Contact</th>
                  <th className="px-6 py-4 text-left font-semibold">Status</th>
                  <th className="px-6 py-4 text-left font-semibold">Applied Date</th>
                  <th className="px-6 py-4 text-center font-semibold">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {filteredVendors.map((vendor) => (
                  <tr key={vendor.id} className="hover:bg-gray-50 transition-colors">
                    <td className="px-6 py-4">
                      <div>
                        <p className="font-semibold text-gray-800">{vendor.name}</p>
                        <p className="text-sm text-gray-500">{vendor.address}</p>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div>
                        <p className="font-semibold text-gray-800">{vendor.businessName}</p>
                        <p className="text-sm text-gray-500">{vendor.category}</p>
                        <p className="text-xs text-gray-400">{vendor.businessType}</p>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div>
                        <p className="text-sm text-gray-800">{vendor.email}</p>
                        <p className="text-sm text-gray-500">{vendor.phone}</p>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <span className={`px-3 py-1 rounded-full text-xs font-semibold ${vendor.status === 'pending'
                          ? 'bg-yellow-100 text-yellow-700'
                          : vendor.status === 'approved'
                            ? 'bg-green-100 text-green-700'
                            : 'bg-red-100 text-red-700'
                        }`}>
                        {vendor.status.charAt(0).toUpperCase() + vendor.status.slice(1)}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <p className="text-sm text-gray-600">{vendor.appliedDate}</p>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center justify-center gap-2">
                        <button
                          onClick={() => setSelectedVendor(vendor)}
                          className="p-2 bg-blue-100 text-blue-600 rounded-lg hover:bg-blue-200 transition-colors"
                          title="View Details"
                        >
                          <Eye className="w-4 h-4" />
                        </button>
                        {vendor.status === 'pending' && (
                          <>
                            <button
                              onClick={() => handleApprove(vendor.id)}
                              className="p-2 bg-green-100 text-green-600 rounded-lg hover:bg-green-200 transition-colors"
                              title="Approve"
                            >
                              <CheckCircle className="w-4 h-4" />
                            </button>
                            <button
                              onClick={() => handleReject(vendor.id)}
                              className="p-2 bg-red-100 text-red-600 rounded-lg hover:bg-red-200 transition-colors"
                              title="Reject"
                            >
                              <XCircle className="w-4 h-4" />
                            </button>
                          </>
                        )}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {filteredVendors.length === 0 && (
            <div className="text-center py-12">
              <AlertCircle className="w-16 h-16 text-gray-400 mx-auto mb-4" />
              <p className="text-gray-600 text-lg">No vendors found</p>
            </div>
          )}
        </div>
      </div>

      {/* Vendor Detail Modal */}
      {selectedVendor && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-6">
          <div className="bg-white rounded-3xl shadow-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto">
            <div className="sticky top-0 bg-gradient-to-r from-blue-600 to-purple-600 text-white p-6 rounded-t-3xl">
              <div className="flex justify-between items-center">
                <h2 className="text-2xl font-bold">Vendor Details</h2>
                <button
                  onClick={() => setSelectedVendor(null)}
                  className="p-2 hover:bg-white/20 rounded-lg transition-colors"
                >
                  <XCircle className="w-6 h-6" />
                </button>
              </div>
            </div>

            <div className="p-6 space-y-6">
              {/* Personal Info */}
              <div>
                <h3 className="text-lg font-bold text-gray-800 mb-3 flex items-center gap-2">
                  <Users className="w-5 h-5 text-purple-600" />
                  Personal Information
                </h3>
                <div className="grid grid-cols-2 gap-4 bg-gray-50 p-4 rounded-xl">
                  <div>
                    <p className="text-sm text-gray-500">Full Name</p>
                    <p className="font-semibold text-gray-800">{selectedVendor.name}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Email</p>
                    <p className="font-semibold text-gray-800">{selectedVendor.email}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Phone</p>
                    <p className="font-semibold text-gray-800">{selectedVendor.phone}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Address</p>
                    <p className="font-semibold text-gray-800">{selectedVendor.address}</p>
                  </div>
                </div>
              </div>

              {/* Business Info */}
              <div>
                <h3 className="text-lg font-bold text-gray-800 mb-3 flex items-center gap-2">
                  <Store className="w-5 h-5 text-purple-600" />
                  Business Information
                </h3>
                <div className="grid grid-cols-2 gap-4 bg-gray-50 p-4 rounded-xl">
                  <div>
                    <p className="text-sm text-gray-500">Business Name</p>
                    <p className="font-semibold text-gray-800">{selectedVendor.businessName}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Category</p>
                    <p className="font-semibold text-gray-800">{selectedVendor.category}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Business Type</p>
                    <p className="font-semibold text-gray-800">{selectedVendor.businessType}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Years in Business</p>
                    <p className="font-semibold text-gray-800">{selectedVendor.yearsInBusiness} years</p>
                  </div>
                </div>
              </div>

              {/* Documents */}
              <div>
                <h3 className="text-lg font-bold text-gray-800 mb-3 flex items-center gap-2">
                  <FileText className="w-5 h-5 text-purple-600" />
                  Documents & Verification
                </h3>
                <div className="grid grid-cols-2 gap-4 bg-gray-50 p-4 rounded-xl">
                  <div>
                    <p className="text-sm text-gray-500">Aadhar Number</p>
                    <p className="font-semibold text-gray-800">{selectedVendor.aadhar}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">PAN Number</p>
                    <p className="font-semibold text-gray-800">{selectedVendor.pan}</p>
                  </div>
                </div>
              </div>

              {/* Status Info */}
              <div>
                <h3 className="text-lg font-bold text-gray-800 mb-3">Application Status</h3>
                <div className="bg-gray-50 p-4 rounded-xl space-y-2">
                  <div className="flex items-center gap-2">
                    <span className="text-sm text-gray-500">Status:</span>
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${selectedVendor.status === 'pending'
                        ? 'bg-yellow-100 text-yellow-700'
                        : selectedVendor.status === 'approved'
                          ? 'bg-green-100 text-green-700'
                          : 'bg-red-100 text-red-700'
                      }`}>
                      {selectedVendor.status.charAt(0).toUpperCase() + selectedVendor.status.slice(1)}
                    </span>
                  </div>
                  <div>
                    <span className="text-sm text-gray-500">Applied Date: </span>
                    <span className="font-semibold text-gray-800">{selectedVendor.appliedDate}</span>
                  </div>
                  {selectedVendor.approvedDate && (
                    <div>
                      <span className="text-sm text-gray-500">Approved Date: </span>
                      <span className="font-semibold text-gray-800">{selectedVendor.approvedDate}</span>
                    </div>
                  )}
                  {selectedVendor.rejectionReason && (
                    <div>
                      <span className="text-sm text-gray-500">Rejection Reason: </span>
                      <span className="font-semibold text-red-600">{selectedVendor.rejectionReason}</span>
                    </div>
                  )}
                </div>
              </div>

              {/* Action Buttons */}
              {selectedVendor.status === 'pending' && (
                <div className="flex gap-4 pt-4">
                  <button
                    onClick={() => handleApprove(selectedVendor.id)}
                    className="flex-1 py-3 bg-gradient-to-r from-green-600 to-green-700 text-white rounded-xl font-semibold hover:shadow-lg transition-all flex items-center justify-center gap-2"
                  >
                    <CheckCircle className="w-5 h-5" />
                    Approve Vendor
                  </button>
                  <button
                    onClick={() => handleReject(selectedVendor.id)}
                    className="flex-1 py-3 bg-gradient-to-r from-red-600 to-red-700 text-white rounded-xl font-semibold hover:shadow-lg transition-all flex items-center justify-center gap-2"
                  >
                    <XCircle className="w-5 h-5" />
                    Reject Application
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminDashboard;