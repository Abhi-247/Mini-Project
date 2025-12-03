import React, { useState } from 'react';
import { 
  Store, Package, MapPin, Star, Heart, TrendingUp, 
  Edit, Plus, Trash2, Eye, Settings, LogOut, Bell,
  Users, DollarSign, BarChart3, Camera, Save, X,
  Clock, CheckCircle, AlertCircle, MessageSquare, Share2
} from 'lucide-react';

const VendorDashboard = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [isEditingProfile, setIsEditingProfile] = useState(false);
  const [, setShowAddProduct] = useState(false);

  // Vendor profile data
  const [vendorProfile, setVendorProfile] = useState({
    name: 'Rajesh Kumar',
    businessName: 'Raj Food Cart',
    email: 'rajesh@example.com',
    phone: '+91 9876543210',
    category: 'Food & Beverages',
    address: 'Andheri West, Mumbai, Maharashtra',
    description: 'Serving delicious street food for over 5 years. Specializing in Indian snacks and beverages.',
    isOnline: true,
    rating: 4.8,
    totalReviews: 234,
    approvalStatus: 'approved' // pending, approved, rejected
  });

  // Products data
  const [products, setProducts] = useState([
    {
      id: 1,
      name: 'Vada Pav',
      price: 20,
      category: 'Snacks',
      image: '🥙',
      stock: 'In Stock',
      description: 'Mumbai\'s favorite street food'
    },
    {
      id: 2,
      name: 'Chai',
      price: 10,
      category: 'Beverages',
      image: '☕',
      stock: 'In Stock',
      description: 'Fresh masala chai'
    },
    {
      id: 3,
      name: 'Samosa',
      price: 15,
      category: 'Snacks',
      image: '🥟',
      stock: 'Low Stock',
      description: 'Crispy potato samosas'
    }
  ]);

  // Statistics
  const stats = {
    totalViews: 1234,
    totalFavorites: 89,
    totalOrders: 156,
    revenue: 15600
  };

  // Reviews data
  const reviews = [
    {
      id: 1,
      customer: 'Priya Sharma',
      rating: 5,
      comment: 'Amazing food! Best vada pav in the area.',
      date: '2025-01-20'
    },
    {
      id: 2,
      customer: 'Amit Patel',
      rating: 4,
      comment: 'Good quality and taste. Will visit again.',
      date: '2025-01-18'
    },
    {
      id: 3,
      customer: 'Sneha Reddy',
      rating: 5,
      comment: 'Excellent service and delicious snacks!',
      date: '2025-01-15'
    }
  ];

  const handleToggleOnline = () => {
    setVendorProfile({ ...vendorProfile, isOnline: !vendorProfile.isOnline });
  };

  const handleDeleteProduct = (id) => {
    if (window.confirm('Are you sure you want to delete this product?')) {
      setProducts(products.filter(p => p.id !== id));
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Sidebar */}
      <div className="fixed left-0 top-0 h-full w-64 bg-white shadow-xl z-40 flex flex-col">
        <div className="p-6 border-b border-gray-200">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl flex items-center justify-center text-white font-bold text-xl">
              {vendorProfile.businessName.charAt(0)}
            </div>
            <div>
              <h2 className="font-bold text-gray-800">{vendorProfile.businessName}</h2>
              <p className="text-xs text-gray-500">{vendorProfile.name}</p>
            </div>
          </div>
        </div>

        <nav className="flex-1 p-4 space-y-2">
          <button 
            onClick={() => setActiveTab('overview')}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl font-semibold transition-all ${
              activeTab === 'overview'
                ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white'
                : 'text-gray-600 hover:bg-gray-100'
            }`}
          >
            <BarChart3 className="w-5 h-5" />
            Overview
          </button>
          <button 
            onClick={() => setActiveTab('products')}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl font-semibold transition-all ${
              activeTab === 'products'
                ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white'
                : 'text-gray-600 hover:bg-gray-100'
            }`}
          >
            <Package className="w-5 h-5" />
            Products
          </button>
          <button 
            onClick={() => setActiveTab('reviews')}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl font-semibold transition-all ${
              activeTab === 'reviews'
                ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white'
                : 'text-gray-600 hover:bg-gray-100'
            }`}
          >
            <Star className="w-5 h-5" />
            Reviews
          </button>
          <button 
            onClick={() => setActiveTab('profile')}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl font-semibold transition-all ${
              activeTab === 'profile'
                ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white'
                : 'text-gray-600 hover:bg-gray-100'
            }`}
          >
            <Settings className="w-5 h-5" />
            Profile Settings
          </button>
        </nav>

        <div className="p-4 border-t border-gray-200">
          <button className="w-full flex items-center gap-3 px-4 py-3 text-red-600 hover:bg-red-50 rounded-xl font-semibold transition-colors">
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
              {activeTab === 'overview' && 'Dashboard Overview'}
              {activeTab === 'products' && 'My Products'}
              {activeTab === 'reviews' && 'Customer Reviews'}
              {activeTab === 'profile' && 'Profile Settings'}
            </h1>
            <p className="text-gray-600 mt-2">
              {vendorProfile.approvalStatus === 'approved' && 'Your vendor account is active'}
              {vendorProfile.approvalStatus === 'pending' && 'Your application is under review'}
              {vendorProfile.approvalStatus === 'rejected' && 'Your application was rejected'}
            </p>
          </div>
          <div className="flex items-center gap-4">
            {/* Online/Offline Toggle */}
            <div className="flex items-center gap-3 bg-white px-4 py-2 rounded-xl shadow-lg">
              <span className="text-sm font-semibold text-gray-700">Status:</span>
              <button
                onClick={handleToggleOnline}
                className={`relative w-14 h-7 rounded-full transition-colors ${
                  vendorProfile.isOnline ? 'bg-green-500' : 'bg-gray-300'
                }`}
              >
                <div className={`absolute top-1 left-1 w-5 h-5 bg-white rounded-full transition-transform ${
                  vendorProfile.isOnline ? 'translate-x-7' : ''
                }`}></div>
              </button>
              <span className={`text-sm font-semibold ${
                vendorProfile.isOnline ? 'text-green-600' : 'text-gray-600'
              }`}>
                {vendorProfile.isOnline ? 'Online' : 'Offline'}
              </span>
            </div>

            <button className="p-3 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all relative">
              <Bell className="w-6 h-6 text-gray-600" />
              <span className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 rounded-full text-white text-xs flex items-center justify-center">
                3
              </span>
            </button>
          </div>
        </div>

        {/* Approval Status Banner */}
        {vendorProfile.approvalStatus === 'pending' && (
          <div className="bg-yellow-50 border-2 border-yellow-200 rounded-2xl p-6 mb-8 flex items-center gap-4">
            <Clock className="w-12 h-12 text-yellow-600" />
            <div className="flex-1">
              <h3 className="text-xl font-bold text-yellow-800 mb-1">Application Under Review</h3>
              <p className="text-yellow-700">Your vendor application is being reviewed by our admin team. You'll be notified within 24-48 hours.</p>
            </div>
          </div>
        )}

        {vendorProfile.approvalStatus === 'rejected' && (
          <div className="bg-red-50 border-2 border-red-200 rounded-2xl p-6 mb-8 flex items-center gap-4">
            <AlertCircle className="w-12 h-12 text-red-600" />
            <div className="flex-1">
              <h3 className="text-xl font-bold text-red-800 mb-1">Application Rejected</h3>
              <p className="text-red-700">Your application was not approved. Please contact support for more information.</p>
            </div>
            <button className="px-6 py-2 bg-red-600 text-white rounded-xl font-semibold hover:bg-red-700 transition-colors">
              Contact Support
            </button>
          </div>
        )}

        {/* Overview Tab */}
        {activeTab === 'overview' && (
          <div className="space-y-8">
            {/* Statistics Cards */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                    <Eye className="w-6 h-6 text-blue-600" />
                  </div>
                </div>
                <h3 className="text-3xl font-bold text-gray-800">{stats.totalViews}</h3>
                <p className="text-gray-600 text-sm">Profile Views</p>
              </div>

              <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 bg-pink-100 rounded-xl flex items-center justify-center">
                    <Heart className="w-6 h-6 text-pink-600" />
                  </div>
                </div>
                <h3 className="text-3xl font-bold text-gray-800">{stats.totalFavorites}</h3>
                <p className="text-gray-600 text-sm">Favorites</p>
              </div>

              <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                    <Users className="w-6 h-6 text-green-600" />
                  </div>
                </div>
                <h3 className="text-3xl font-bold text-gray-800">{stats.totalOrders}</h3>
                <p className="text-gray-600 text-sm">Total Orders</p>
              </div>

              <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center">
                    <DollarSign className="w-6 h-6 text-purple-600" />
                  </div>
                </div>
                <h3 className="text-3xl font-bold text-gray-800">₹{stats.revenue}</h3>
                <p className="text-gray-600 text-sm">Total Revenue</p>
              </div>
            </div>

            {/* Quick Info */}
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                  <Store className="w-6 h-6 text-purple-600" />
                  Business Information
                </h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Business Name:</span>
                    <span className="font-semibold text-gray-800">{vendorProfile.businessName}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Category:</span>
                    <span className="font-semibold text-gray-800">{vendorProfile.category}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Rating:</span>
                    <span className="font-semibold text-gray-800 flex items-center gap-1">
                      <Star className="w-4 h-4 fill-yellow-500 text-yellow-500" />
                      {vendorProfile.rating}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Total Reviews:</span>
                    <span className="font-semibold text-gray-800">{vendorProfile.totalReviews}</span>
                  </div>
                </div>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                  <MapPin className="w-6 h-6 text-purple-600" />
                  Location & Contact
                </h3>
                <div className="space-y-3">
                  <div>
                    <span className="text-gray-600 block mb-1">Address:</span>
                    <span className="font-semibold text-gray-800">{vendorProfile.address}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Email:</span>
                    <span className="font-semibold text-gray-800">{vendorProfile.email}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Phone:</span>
                    <span className="font-semibold text-gray-800">{vendorProfile.phone}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Recent Reviews */}
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h3 className="text-xl font-bold text-gray-800 mb-6 flex items-center gap-2">
                <MessageSquare className="w-6 h-6 text-purple-600" />
                Recent Reviews
              </h3>
              <div className="space-y-4">
                {reviews.slice(0, 3).map(review => (
                  <div key={review.id} className="border-l-4 border-purple-600 pl-4 py-2">
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <p className="font-semibold text-gray-800">{review.customer}</p>
                        <div className="flex items-center gap-1 mt-1">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className={`w-4 h-4 ${i < review.rating ? 'fill-yellow-500 text-yellow-500' : 'text-gray-300'}`} />
                          ))}
                        </div>
                      </div>
                      <span className="text-sm text-gray-500">{review.date}</span>
                    </div>
                    <p className="text-gray-600">{review.comment}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Products Tab */}
        {activeTab === 'products' && (
          <div className="space-y-6">
            <div className="flex justify-between items-center">
              <p className="text-gray-600">Manage your product catalog</p>
              <button
                onClick={() => setShowAddProduct(true)}
                className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-semibold hover:shadow-lg transition-all flex items-center gap-2"
              >
                <Plus className="w-5 h-5" />
                Add New Product
              </button>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {products.map(product => (
                <div key={product.id} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all overflow-hidden">
                  <div className="h-48 bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center text-8xl">
                    {product.image}
                  </div>
                  <div className="p-6">
                    <div className="flex justify-between items-start mb-3">
                      <div>
                        <h3 className="text-xl font-bold text-gray-800">{product.name}</h3>
                        <p className="text-sm text-gray-500">{product.category}</p>
                      </div>
                      <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                        product.stock === 'In Stock' ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700'
                      }`}>
                        {product.stock}
                      </span>
                    </div>
                    <p className="text-gray-600 text-sm mb-4">{product.description}</p>
                    <div className="flex justify-between items-center">
                      <span className="text-2xl font-bold text-purple-600">₹{product.price}</span>
                      <div className="flex gap-2">
                        <button className="p-2 bg-blue-100 text-blue-600 rounded-lg hover:bg-blue-200 transition-colors">
                          <Edit className="w-4 h-4" />
                        </button>
                        <button 
                          onClick={() => handleDeleteProduct(product.id)}
                          className="p-2 bg-red-100 text-red-600 rounded-lg hover:bg-red-200 transition-colors"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Reviews Tab */}
        {activeTab === 'reviews' && (
          <div className="space-y-6">
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="flex items-center gap-6 mb-8">
                <div className="text-center">
                  <div className="text-5xl font-bold text-gray-800">{vendorProfile.rating}</div>
                  <div className="flex items-center gap-1 mt-2">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-yellow-500 text-yellow-500" />
                    ))}
                  </div>
                  <p className="text-sm text-gray-600 mt-2">{vendorProfile.totalReviews} reviews</p>
                </div>
                <div className="flex-1">
                  <div className="space-y-2">
                    {[5, 4, 3, 2, 1].map(rating => (
                      <div key={rating} className="flex items-center gap-3">
                        <span className="text-sm text-gray-600 w-8">{rating} ⭐</span>
                        <div className="flex-1 h-3 bg-gray-200 rounded-full overflow-hidden">
                          <div 
                            className="h-full bg-gradient-to-r from-blue-600 to-purple-600"
                            style={{ width: `${Math.random() * 100}%` }}
                          ></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                {reviews.map(review => (
                  <div key={review.id} className="border-b border-gray-200 pb-4 last:border-0">
                    <div className="flex justify-between items-start mb-3">
                      <div>
                        <p className="font-semibold text-gray-800 text-lg">{review.customer}</p>
                        <div className="flex items-center gap-1 mt-1">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className={`w-4 h-4 ${i < review.rating ? 'fill-yellow-500 text-yellow-500' : 'text-gray-300'}`} />
                          ))}
                        </div>
                      </div>
                      <span className="text-sm text-gray-500">{review.date}</span>
                    </div>
                    <p className="text-gray-700">{review.comment}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Profile Settings Tab */}
        {activeTab === 'profile' && (
          <div className="space-y-6">
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-xl font-bold text-gray-800">Profile Information</h3>
                <button
                  onClick={() => setIsEditingProfile(!isEditingProfile)}
                  className="px-6 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-semibold hover:shadow-lg transition-all flex items-center gap-2"
                >
                  {isEditingProfile ? <Save className="w-5 h-5" /> : <Edit className="w-5 h-5" />}
                  {isEditingProfile ? 'Save Changes' : 'Edit Profile'}
                </button>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Business Name</label>
                  <input
                    type="text"
                    value={vendorProfile.businessName}
                    disabled={!isEditingProfile}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-purple-500 focus:outline-none transition-colors disabled:bg-gray-50"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Owner Name</label>
                  <input
                    type="text"
                    value={vendorProfile.name}
                    disabled={!isEditingProfile}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-purple-500 focus:outline-none transition-colors disabled:bg-gray-50"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Email</label>
                  <input
                    type="email"
                    value={vendorProfile.email}
                    disabled={!isEditingProfile}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-purple-500 focus:outline-none transition-colors disabled:bg-gray-50"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Phone</label>
                  <input
                    type="tel"
                    value={vendorProfile.phone}
                    disabled={!isEditingProfile}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-purple-500 focus:outline-none transition-colors disabled:bg-gray-50"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Category</label>
                  <input
                    type="text"
                    value={vendorProfile.category}
                    disabled={!isEditingProfile}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-purple-500 focus:outline-none transition-colors disabled:bg-gray-50"
                  />
                </div>

                <div className="md:col-span-2">
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Address</label>
                  <input
                    type="text"
                    value={vendorProfile.address}
                    disabled={!isEditingProfile}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-purple-500 focus:outline-none transition-colors disabled:bg-gray-50"
                  />
                </div>

                <div className="md:col-span-2">
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Business Description</label>
                  <textarea
                    value={vendorProfile.description}
                    disabled={!isEditingProfile}
                    rows="4"
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-purple-500 focus:outline-none transition-colors disabled:bg-gray-50 resize-none"
                  />
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default VendorDashboard;