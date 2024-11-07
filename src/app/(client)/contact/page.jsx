// pages/contact.js
import React from 'react';
import { Mail, Phone, MapPin } from "lucide-react";

const ContactPage = () => {
  return (
      <div className="grid gap-12 m-8 lg:grid-cols-2">
        {/* Company Contact Information */}
        <div className="p-8 bg-white border rounded-lg shadow-md">
          <h2 className="mb-4 text-3xl font-semibold text-gray-800">Contact Information</h2>
          <p className="mb-6 text-gray-600">Feel free to reach out to us via phone, email, or visit us at our office. We’d be happy to help!</p>
          
          <div className="space-y-4">
            <div className="flex items-center space-x-4">
              <Mail className="w-6 h-6 text-gray-600" />
              <p className="text-gray-600">longsoeng@gmail.com</p>
            </div>
            <div className="flex items-center space-x-4">
              <Phone className="w-6 h-6 text-gray-600" />
              <p className="text-gray-600">0956783252</p>
            </div>
            <div className="flex items-center space-x-4">
              <MapPin className="w-6 h-6 text-gray-600" />
              <p className="text-gray-600">148E0, st 148, Doun Penh, Phnom Penh, Cambodia</p>
            </div>
          </div>
          
          {/* Google Maps Iframe */}
          <div className="mt-6">
            <h3 className="mb-2 text-lg font-semibold text-gray-800">Our Location</h3>
            <div className="w-full h-64 overflow-hidden rounded-lg shadow">
              <iframe
                className="w-full h-full"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3169.8242578339887!2d-122.08424978432767!3d37.42206567982625!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fb24e70c3b0ed%3A0x65a5b6bde27fd3b5!2sGoogleplex!5e0!3m2!1sen!2sus!4v1617197934606!5m2!1sen!2sus"
                allowFullScreen=""
                loading="lazy"
                title="Google Maps Location"
              ></iframe>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="p-8 bg-white border rounded-lg shadow-md">
          <h2 className="mb-4 text-3xl font-semibold text-center text-gray-800">Send Us a Message</h2>
          <form className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
              <input
                type="text"
                id="name"
                className="block w-full px-4 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-blue-500"
                placeholder="Your Name"
                required
              />
            </div>
            
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
              <input
                type="email"
                id="email"
                className="block w-full px-4 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-blue-500"
                placeholder="Your Email"
                required
              />
            </div>
            
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone</label>
              <input
                type="text"
                id="phone"
                className="block w-full px-4 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-blue-500"
                placeholder="Phone Number"
                required
              />
            </div>
            
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
              <textarea
                id="message"
                className="block w-full px-4 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-blue-500"
                placeholder="Your Message"
                rows="4"
                required
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full px-4 py-2 text-white bg-blue-500 rounded-md shadow hover:bg-blue-600 focus:outline-none"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
  );
};

export default ContactPage;
