import React, { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Send, MessageSquare, HelpCircle, Users } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for contacting us! We will get back to you soon.');
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-purple-600 opacity-10"></div>
        <div className="absolute top-20 right-10 w-72 h-72 bg-purple-400 rounded-full blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute bottom-10 left-10 w-96 h-96 bg-blue-400 rounded-full blur-3xl opacity-20 animate-pulse"></div>
        
        <div className="relative max-w-6xl mx-auto px-6 text-center z-10">
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Get In Touch
          </h1>
          <p className="text-xl md:text-2xl mb-10 text-gray-700 max-w-3xl mx-auto">
            Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
          </p>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: <Mail className="w-6 h-6" />,
                title: 'Email Us',
                info: 'support@vendorempower.com',
                subInfo: 'We reply within 24 hours',
                link: 'mailto:support@vendorempower.com'
              },
              {
                icon: <Phone className="w-6 h-6" />,
                title: 'Call Us',
                info: '+91 123 456 7890',
                subInfo: 'Mon-Fri 9AM-6PM IST',
                link: 'tel:+911234567890'
              },
              {
                icon: <MapPin className="w-6 h-6" />,
                title: 'Visit Us',
                info: 'Mumbai, Maharashtra',
                subInfo: 'India - 400001',
                link: null
              },
              {
                icon: <Clock className="w-6 h-6" />,
                title: 'Working Hours',
                info: 'Monday - Friday',
                subInfo: '9:00 AM - 6:00 PM',
                link: null
              }
            ].map((item, idx) => (
              <div 
                key={idx}
                className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 cursor-pointer group"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform">
                  {item.icon}
                </div>
                <h3 className="text-lg font-bold text-gray-800 mb-2">{item.title}</h3>
                {item.link ? (
                  <a href={item.link} className="text-purple-600 font-semibold hover:text-purple-700 transition-colors">
                    {item.info}
                  </a>
                ) : (
                  <p className="text-purple-600 font-semibold">{item.info}</p>
                )}
                <p className="text-sm text-gray-500 mt-1">{item.subInfo}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Info Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            
            {/* Contact Form */}
            <div className="bg-white p-8 md:p-12 rounded-3xl shadow-xl">
              <h2 className="text-3xl font-bold mb-2 text-gray-800">Send us a Message</h2>
              <p className="text-gray-600 mb-8">Fill out the form below and we'll get back to you shortly.</p>
              
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your name"
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-purple-500 focus:outline-none transition-colors"
                    required
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="your@email.com"
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-purple-500 focus:outline-none transition-colors"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Phone
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+91 123 456 7890"
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-purple-500 focus:outline-none transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Subject *
                  </label>
                  <select
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-purple-500 focus:outline-none transition-colors cursor-pointer"
                    required
                  >
                    <option value="">Select a subject</option>
                    <option value="vendor">Vendor Registration</option>
                    <option value="customer">Customer Support</option>
                    <option value="technical">Technical Issue</option>
                    <option value="partnership">Partnership Inquiry</option>
                    <option value="feedback">Feedback</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us how we can help you..."
                    rows="6"
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-purple-500 focus:outline-none transition-colors resize-none"
                    required
                  ></textarea>
                </div>

                <button
                  onClick={handleSubmit}
                  className="w-full py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-bold text-lg shadow-lg hover:shadow-2xl hover:scale-105 transition-all flex items-center justify-center gap-2"
                >
                  <Send className="w-5 h-5" />
                  Send Message
                </button>
              </div>
            </div>

            {/* FAQ & Additional Info */}
            <div className="space-y-6">
              {/* FAQ Section */}
              <div className="bg-white p-8 rounded-3xl shadow-xl">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl flex items-center justify-center text-white">
                    <HelpCircle className="w-6 h-6" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800">Frequently Asked Questions</h3>
                </div>
                
                <div className="space-y-4">
                  {[
                    {
                      q: 'How do I register as a vendor?',
                      a: 'Click on "Become a Vendor" and fill out the registration form. You\'ll receive verification within 24 hours.'
                    },
                    {
                      q: 'Is there a fee to use the platform?',
                      a: 'Basic registration is free. Premium features are available with subscription plans.'
                    },
                    {
                      q: 'How does the proximity alert work?',
                      a: 'Customers get notified when their favorite vendors are within 200 meters of their location.'
                    }
                  ].map((faq, idx) => (
                    <div key={idx} className="border-l-4 border-purple-600 pl-4 py-2">
                      <h4 className="font-bold text-gray-800 mb-1">{faq.q}</h4>
                      <p className="text-sm text-gray-600">{faq.a}</p>
                    </div>
                  ))}
                </div>

                <button className="mt-6 text-purple-600 font-semibold hover:text-purple-700 transition-colors flex items-center gap-2">
                  View all FAQs →
                </button>
              </div>

              {/* Support Channels */}
              <div className="bg-gradient-to-br from-blue-600 to-purple-600 p-8 rounded-3xl shadow-xl text-white">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center backdrop-blur-sm">
                    <MessageSquare className="w-6 h-6" />
                  </div>
                  <h3 className="text-2xl font-bold">Other Ways to Reach Us</h3>
                </div>
                
                <div className="space-y-4">
                  <div className="bg-white/10 backdrop-blur-sm p-4 rounded-xl hover:bg-white/20 transition-all cursor-pointer">
                    <h4 className="font-bold mb-1">Live Chat</h4>
                    <p className="text-sm opacity-90">Available Mon-Fri, 9AM-6PM IST</p>
                  </div>

                  <div className="bg-white/10 backdrop-blur-sm p-4 rounded-xl hover:bg-white/20 transition-all cursor-pointer">
                    <h4 className="font-bold mb-1">WhatsApp Support</h4>
                    <p className="text-sm opacity-90">+91 123 456 7890</p>
                  </div>

                  <div className="bg-white/10 backdrop-blur-sm p-4 rounded-xl hover:bg-white/20 transition-all cursor-pointer">
                    <h4 className="font-bold mb-1">Community Forum</h4>
                    <p className="text-sm opacity-90">Connect with other vendors and customers</p>
                  </div>
                </div>
              </div>

              {/* Business Inquiries */}
              <div className="bg-white p-8 rounded-3xl shadow-xl">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl flex items-center justify-center text-white">
                    <Users className="w-6 h-6" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800">Business Inquiries</h3>
                </div>
                <p className="text-gray-600 mb-4">
                  For partnerships, press inquiries, or business collaborations, please contact our business team.
                </p>
                <a 
                  href="mailto:business@vendorempower.com"
                  className="text-purple-600 font-semibold hover:text-purple-700 transition-colors"
                >
                  business@vendorempower.com
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Map Section (Placeholder) */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Find Us Here
          </h2>
          <div className="bg-gradient-to-br from-blue-100 to-purple-100 rounded-3xl h-96 flex items-center justify-center shadow-xl">
            <div className="text-center">
              <MapPin className="w-16 h-16 mx-auto mb-4 text-purple-600" />
              <p className="text-xl font-semibold text-gray-700">Interactive Map Coming Soon</p>
              <p className="text-gray-600 mt-2">Mumbai, Maharashtra, India</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;