// pages/contact.js
import React from "react";
import { Mail, Phone, MapPin } from "lucide-react";
import { getContact } from "@/services/page-services";

const ContactPage = async () => {
  let contact = await getContact();
  return (
    <div className="grid gap-12 m-8 lg:grid-cols-2">
      {/* Company Contact Information */}
      <div className="p-8 bg-white border rounded-lg shadow-md">
        <h2 className="mb-4 text-3xl font-semibold text-gray-800">
          Contact Information
        </h2>
        <div className="mb-4">
          {contact?.description ? (
            <div
              className="w-full prose max-w-none lg:prose-xl"
              dangerouslySetInnerHTML={{ __html: contact?.description }}
            />
          ) : (
            <p>No description available.</p>
          )}
        </div>

        <div className="space-y-4 ">
          <div className="flex items-center space-x-4">
            <Mail className="w-6 h-6 text-gray-600" />
            <p className="text-gray-600">{contact?.email}</p>
          </div>
          <div className="flex items-center space-x-4">
            <Phone className="w-6 h-6 text-gray-600" />
            <p className="text-gray-600">{contact?.phone}</p>
          </div>
          <div className="flex items-center space-x-4">
            <MapPin className="w-6 h-6 text-gray-600" />
            <p className="text-gray-600">{contact?.address}</p>
          </div>
        </div>

        {/* Google Maps Iframe */}
        <div className="mt-6">
          <h3 className="mb-2 text-lg font-semibold text-gray-800">
            Our Location
          </h3>
          <div className="h-64 overflow-hidden rounded-lg ">
            <iframe
              className="w-full h-full"
              src={contact?.map}
              allowFullScreen=""
              loading="lazy"
              title="Google Maps Location"
            ></iframe>
          </div>

        </div>
      </div>

      {/* Contact Form */}
      <div className="p-8 bg-white border rounded-lg shadow-md">
        <h2 className="mb-4 text-3xl font-semibold text-center text-gray-800">
          Send Us a Message
        </h2>
        <form className="space-y-6">
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              className="block w-full px-4 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-blue-500"
              placeholder="Your Name"
              required
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              className="block w-full px-4 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-blue-500"
              placeholder="Your Email"
              required
            />
          </div>

          <div>
            <label
              htmlFor="phone"
              className="block text-sm font-medium text-gray-700"
            >
              Phone
            </label>
            <input
              type="text"
              id="phone"
              className="block w-full px-4 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-blue-500"
              placeholder="Phone Number"
              required
            />
          </div>

          <div>
            <label
              htmlFor="message"
              className="block text-sm font-medium text-gray-700"
            >
              Message
            </label>
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
