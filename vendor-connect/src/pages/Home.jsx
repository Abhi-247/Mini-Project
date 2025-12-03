import React, { useState } from 'react';
import { MapPin, Star, Heart, Bell, Grid, Award, TrendingUp, Search, Filter } from 'lucide-react';

const Home = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedRating, setSelectedRating] = useState('All');
  const [favoriteVendors, setFavoriteVendors] = useState([]);

  const categories = ['All', 'Food', 'Clothing', 'Accessories', 'Electronics', 'Crafts'];
  const ratings = ['All', '4+ Stars', '3+ Stars'];

  const vendors = [
    { id: 1, name: 'Raj\'s Food Cart', category: 'Food', rating: 4.8, reviews: 234, distance: '0.3 km', image: '🍜', specialty: 'Street Food', price: '₹₹', online: true },
    { id: 2, name: 'Priya\'s Boutique', category: 'Clothing', rating: 4.6, reviews: 189, distance: '0.5 km', image: '👗', specialty: 'Traditional Wear', price: '₹₹₹', online: false },
    { id: 3, name: 'Kumar Electronics', category: 'Electronics', rating: 4.9, reviews: 312, distance: '0.8 km', image: '📱', specialty: 'Mobile Accessories', price: '₹₹', online: true },
    { id: 4, name: 'Anita\'s Jewelry', category: 'Accessories', rating: 4.7, reviews: 156, distance: '0.4 km', image: '💍', specialty: 'Handmade Jewelry', price: '₹₹₹', online: true },
    { id: 5, name: 'Cafe On Wheels', category: 'Food', rating: 4.5, reviews: 278, distance: '0.6 km', image: '☕', specialty: 'Coffee & Snacks', price: '₹', online: false },
    { id: 6, name: 'Artisan Crafts Co', category: 'Crafts', rating: 4.8, reviews: 145, distance: '0.7 km', image: '🎨', specialty: 'Handmade Art', price: '₹₹₹', online: true },
  ];

  const filteredVendors = vendors.filter(vendor => {
    const categoryMatch = selectedCategory === 'All' || vendor.category === selectedCategory;
    const ratingMatch = selectedRating === 'All' || 
      (selectedRating === '4+ Stars' && vendor.rating >= 4) ||
      (selectedRating === '3+ Stars' && vendor.rating >= 3);
    return categoryMatch && ratingMatch;
  });

  const toggleFavorite = (id) => {
    setFavoriteVendors(prev => 
      prev.includes(id) ? prev.filter(v => v !== id) : [...prev, id]
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* HERO SECTION */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-purple-600 opacity-10"></div>
        <div className="absolute top-20 right-10 w-72 h-72 bg-purple-400 rounded-full blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute bottom-10 left-10 w-96 h-96 bg-blue-400 rounded-full blur-3xl opacity-20 animate-pulse"></div>
        
        <div className="relative max-w-6xl mx-auto px-6 text-center z-10">
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Empowering Street Vendors &<br/>Connecting Them with Customers
          </h1>
          <p className="text-xl md:text-2xl mb-10 text-gray-700 max-w-3xl mx-auto">
            Discover nearby street vendors, explore products, rate and review services, and support local businesses.
          </p>
          <button className="px-10 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-bold text-lg shadow-2xl hover:shadow-purple-300 hover:scale-105 transition-all transform">
            Get Started 🚀
          </button>
        </div>
      </section>

      {/* FEATURES GRID */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Explore Features
          </h2>
          <p className="text-center text-gray-600 mb-16 text-lg">Everything you need to connect with local street vendors</p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: <MapPin className="w-8 h-8" />, title: 'Find Vendors Near You', desc: 'Use GPS to locate street vendors in your vicinity with real-time updates.' },
              { icon: <Grid className="w-8 h-8" />, title: 'Browse By Category', desc: 'Filter vendors by food, clothing, accessories, and more categories.' },
              { icon: <Search className="w-8 h-8" />, title: 'Search by Username', desc: 'Quickly find your favorite vendors using their unique username.' },
              { icon: <Star className="w-8 h-8" />, title: 'Rate & Review Vendor', desc: 'Share your experience and help others discover quality vendors.' },
              { icon: <Award className="w-8 h-8" />, title: 'Product Listings & Gallery', desc: 'Browse through vendor products with photos and detailed descriptions.' },
              { icon: <Bell className="w-8 h-8" />, title: 'Proximity Alerts', desc: 'Get notified when your favorite vendors are within 200m of you.' },
            ].map((feature, idx) => (
              <div 
                key={idx}
                className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 cursor-pointer"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl flex items-center justify-center text-white mb-5 group-hover:scale-110 transition-transform">
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-bold mb-3 text-gray-800">{feature.title}</h3>
                <p className="text-gray-600">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FILTER AND VENDOR CARDS SECTION */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Discover Street Vendors
          </h2>
          <p className="text-center text-gray-600 mb-12 text-lg">Browse and connect with local vendors near you</p>
          
          {/* FILTER BAR */}
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-6 mb-10 shadow-md">
            <div className="flex flex-col md:flex-row gap-6 items-center">
              {/* Search Bar */}
              <div className="flex-1 relative w-full">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input 
                  type="text" 
                  placeholder="Search vendors by name or specialty..."
                  className="w-full pl-12 pr-4 py-3 rounded-xl border-2 border-gray-200 focus:border-purple-500 focus:outline-none transition-colors"
                />
              </div>

              {/* Category Filter */}
              <div className="flex items-center gap-3">
                <Filter className="text-gray-600 w-5 h-5" />
                <select 
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-purple-500 focus:outline-none bg-white cursor-pointer transition-colors font-medium"
                >
                  {categories.map(cat => (
                    <option key={cat} value={cat}>{cat}</option>
                  ))}
                </select>
              </div>

              {/* Rating Filter */}
              <div className="flex items-center gap-3">
                <Star className="text-gray-600 w-5 h-5" />
                <select 
                  value={selectedRating}
                  onChange={(e) => setSelectedRating(e.target.value)}
                  className="px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-purple-500 focus:outline-none bg-white cursor-pointer transition-colors font-medium"
                >
                  {ratings.map(rating => (
                    <option key={rating} value={rating}>{rating}</option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          {/* VENDOR CARDS GRID */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredVendors.map((vendor) => (
              <div 
                key={vendor.id}
                className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden hover:-translate-y-2 cursor-pointer"
              >
                {/* Card Header */}
                <div className="relative h-48 bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center text-8xl">
                  {vendor.image}
                  <button 
                    onClick={() => toggleFavorite(vendor.id)}
                    className="absolute top-4 right-4 w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform"
                  >
                    <Heart 
                      className={`w-6 h-6 ${favoriteVendors.includes(vendor.id) ? 'fill-red-500 text-red-500' : 'text-gray-400'}`}
                    />
                  </button>
                  {vendor.online && (
                    <div className="absolute top-4 left-4 px-3 py-1 bg-green-500 text-white text-sm font-semibold rounded-full flex items-center gap-1">
                      <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                      Online
                    </div>
                  )}
                </div>

                {/* Card Body */}
                <div className="p-6">
                  <div className="flex justify-between items-start mb-3">
                    <div>
                      <h3 className="text-2xl font-bold text-gray-800 mb-1">{vendor.name}</h3>
                      <p className="text-purple-600 font-medium">{vendor.specialty}</p>
                    </div>
                    <div className="text-right">
                      <div className="flex items-center gap-1 text-yellow-500 font-bold text-lg">
                        <Star className="w-5 h-5 fill-current" />
                        {vendor.rating}
                      </div>
                      <p className="text-sm text-gray-500">{vendor.reviews} reviews</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 text-sm text-gray-600 mb-4 flex-wrap">
                    <div className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      {vendor.distance}
                    </div>
                    <div className="flex items-center gap-1">
                      <TrendingUp className="w-4 h-4" />
                      {vendor.price}
                    </div>
                    <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-semibold">
                      {vendor.category}
                    </span>
                  </div>

                  <button className="w-full py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-semibold hover:shadow-lg transition-all transform hover:scale-105">
                    View Details
                  </button>
                </div>
              </div>
            ))}
          </div>

          {filteredVendors.length === 0 && (
            <div className="text-center py-20">
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-2xl font-bold text-gray-800 mb-2">No vendors found</h3>
              <p className="text-gray-600">Try adjusting your filters</p>
            </div>
          )}
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="py-20 px-6 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            How It Works
          </h2>
          <p className="text-center text-gray-600 mb-16 text-lg">Get started in just 3 simple steps</p>
          
          <div className="grid md:grid-cols-3 gap-12">
            {[
              { num: 1, title: 'Signup & Verify', desc: 'Register with your mobile number and verify via OTP for secure access.' },
              { num: 2, title: 'Select & Explore', desc: 'Choose product categories and view nearby vendors on an interactive map.' },
              { num: 3, title: 'Favorite & Get Alerts', desc: 'Mark vendors as favorites and receive proximity alerts when they\'re nearby.' },
            ].map((step) => (
              <div key={step.num} className="text-center group">
                <div className="w-20 h-20 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white text-3xl font-bold mx-auto mb-6 shadow-xl group-hover:scale-110 transition-transform">
                  {step.num}
                </div>
                <h3 className="text-2xl font-bold mb-3 text-gray-800">{step.title}</h3>
                <p className="text-gray-600">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA BANNER */}
      <section className="py-20 px-6 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Join Us and Support Local Street Vendors</h2>
          <p className="text-xl mb-8 opacity-90">Be part of a community that empowers local businesses</p>
          <button className="px-10 py-4 bg-white text-purple-700 rounded-full font-bold text-lg shadow-2xl hover:scale-105 transition-transform">
            Create Account
          </button>
        </div>
      </section>
    </div>
  );
};

export default Home;