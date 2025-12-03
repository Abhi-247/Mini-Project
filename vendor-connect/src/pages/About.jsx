import React from 'react';
import { Target, Users, Heart, Zap, Award, Shield, TrendingUp, Globe } from 'lucide-react';

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-purple-600 opacity-10"></div>
        <div className="absolute top-20 right-10 w-72 h-72 bg-purple-400 rounded-full blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute bottom-10 left-10 w-96 h-96 bg-blue-400 rounded-full blur-3xl opacity-20 animate-pulse"></div>
        
        <div className="relative max-w-6xl mx-auto px-6 text-center z-10">
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            About VendorEmpower
          </h1>
          <p className="text-xl md:text-2xl mb-10 text-gray-700 max-w-3xl mx-auto">
            Empowering street vendors through technology and connecting communities with local businesses.
          </p>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Mission */}
            <div className="bg-white p-10 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center text-white mb-6">
                <Target className="w-8 h-8" />
              </div>
              <h2 className="text-3xl font-bold mb-4 text-gray-800">Our Mission</h2>
              <p className="text-gray-600 leading-relaxed text-lg">
                To empower street vendors by providing them with digital tools and platforms that enhance their visibility, streamline operations, and connect them directly with customers. We believe in creating opportunities for local businesses to thrive in the digital age.
              </p>
            </div>

            {/* Vision */}
            <div className="bg-white p-10 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center text-white mb-6">
                <Globe className="w-8 h-8" />
              </div>
              <h2 className="text-3xl font-bold mb-4 text-gray-800">Our Vision</h2>
              <p className="text-gray-600 leading-relaxed text-lg">
                To become the leading platform for street vendor empowerment across India, fostering a sustainable ecosystem where local businesses flourish, communities thrive, and technology bridges the gap between vendors and customers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Our Core Values
          </h2>
          <p className="text-center text-gray-600 mb-16 text-lg max-w-3xl mx-auto">
            The principles that guide everything we do
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Heart className="w-8 h-8" />,
                title: 'Community First',
                desc: 'We prioritize the needs of vendors and customers, building a supportive community.'
              },
              {
                icon: <Shield className="w-8 h-8" />,
                title: 'Trust & Transparency',
                desc: 'We operate with integrity, ensuring fair practices and honest communication.'
              },
              {
                icon: <Zap className="w-8 h-8" />,
                title: 'Innovation',
                desc: 'We continuously improve our platform with cutting-edge technology and features.'
              },
              {
                icon: <TrendingUp className="w-8 h-8" />,
                title: 'Growth',
                desc: 'We are committed to the growth and success of every vendor on our platform.'
              }
            ].map((value, idx) => (
              <div 
                key={idx}
                className="group bg-gradient-to-br from-blue-50 to-purple-50 p-8 rounded-2xl hover:shadow-xl transition-all duration-300 hover:-translate-y-2 cursor-pointer"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl flex items-center justify-center text-white mb-5 group-hover:scale-110 transition-transform">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-800">{value.title}</h3>
                <p className="text-gray-600">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What We Do Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            What We Do
          </h2>
          <p className="text-center text-gray-600 mb-16 text-lg max-w-3xl mx-auto">
            Comprehensive solutions for street vendors and customers
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Users className="w-12 h-12" />,
                title: 'Vendor Empowerment',
                features: [
                  'Digital vendor profiles',
                  'Product catalog management',
                  'Real-time location sharing',
                  'Customer review system',
                  'Analytics dashboard'
                ]
              },
              {
                icon: <Globe className="w-12 h-12" />,
                title: 'Customer Experience',
                features: [
                  'Find vendors nearby',
                  'Browse by category',
                  'Rate and review',
                  'Proximity alerts',
                  'Favorite vendors'
                ]
              },
              {
                icon: <Award className="w-12 h-12" />,
                title: 'Government Support',
                features: [
                  'License applications',
                  'Subsidy information',
                  'Scheme access',
                  'Compliance tracking',
                  'Support programs'
                ]
              }
            ].map((service, idx) => (
              <div 
                key={idx}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className="w-20 h-20 bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center text-white mb-6 mx-auto">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold mb-6 text-center text-gray-800">{service.title}</h3>
                <ul className="space-y-3">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-start text-gray-600">
                      <span className="text-purple-600 font-bold mr-2">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-20 px-6 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-white">
            Our Impact
          </h2>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { number: '5,000+', label: 'Active Vendors' },
              { number: '50,000+', label: 'Happy Customers' },
              { number: '100+', label: 'Cities Covered' },
              { number: '4.8/5', label: 'Average Rating' }
            ].map((stat, idx) => (
              <div 
                key={idx}
                className="text-center bg-white/10 backdrop-blur-lg p-8 rounded-2xl hover:bg-white/20 transition-all duration-300 hover:scale-105"
              >
                <div className="text-5xl font-extrabold text-white mb-2">{stat.number}</div>
                <div className="text-xl text-white/90">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white p-12 rounded-3xl shadow-xl">
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Our Story
            </h2>
            <div className="space-y-6 text-gray-700 text-lg leading-relaxed">
              <p>
                VendorEmpower was born from a simple observation: street vendors are the backbone of local economies, yet they often lack access to the digital tools that could transform their businesses.
              </p>
              <p>
                In 2024, our founders set out to bridge this gap. What started as a small initiative to help local vendors in Mumbai quickly grew into a nationwide movement. We realized that technology could do more than just connect vendors with customers—it could empower them to build sustainable, thriving businesses.
              </p>
              <p>
                Today, VendorEmpower serves thousands of vendors across India, providing them with the tools, visibility, and support they need to succeed in an increasingly digital world. But we're just getting started.
              </p>
              <p className="font-semibold text-purple-600">
                Our mission continues: to empower every street vendor with the technology and opportunities they deserve.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Join Our Mission
          </h2>
          <p className="text-xl text-gray-700 mb-10 max-w-2xl mx-auto">
            Whether you're a vendor looking to grow your business or a customer wanting to support local entrepreneurs, we'd love to have you with us.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-10 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-bold text-lg shadow-2xl hover:shadow-purple-300 hover:scale-105 transition-all">
              Become a Vendor
            </button>
            <button className="px-10 py-4 bg-white text-purple-700 border-2 border-purple-600 rounded-full font-bold text-lg shadow-lg hover:bg-purple-50 hover:scale-105 transition-all">
              Explore Vendors
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;