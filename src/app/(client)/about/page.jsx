import React from 'react';

const AboutPage = () => {
  return (
    <div className="flex flex-col items-center min-h-screen">
      <div className="w-full p-8 mt-4 bg-white rounded-lg shadow-md">
        <h1 className="mb-4 text-3xl font-bold text-center text-gray-800">About Us</h1>
        <p className="mb-8 text-center text-gray-600">
          Welcome to [Your Company Name]! We are dedicated to providing exceptional service and delivering high-quality products that meet the needs of our customers. Our team is passionate, skilled, and committed to excellence in everything we do.
        </p>

        <h2 className="mb-2 text-2xl font-semibold text-gray-800">Our Mission</h2>
        <p className="mb-6 text-gray-600">
          Our mission is to drive innovation and create solutions that empower people around the world. We aim to build long-lasting relationships with our clients through trust, integrity, and a commitment to their success.
        </p>

        <h2 className="mb-2 text-2xl font-semibold text-gray-800">Our Values</h2>
        <ul className="space-y-2 text-gray-600 list-disc list-inside">
          <li>Customer Satisfaction</li>
          <li>Innovation and Excellence</li>
          <li>Integrity and Transparency</li>
          <li>Collaboration and Teamwork</li>
          <li>Continuous Learning and Growth</li>
        </ul>

        <h2 className="mt-8 mb-2 text-2xl font-semibold text-gray-800">Meet the Team</h2>
        <p className="text-gray-600">
          Our team consists of experienced professionals from various fields who bring unique skills and perspectives to the table. Together, we strive to push boundaries and deliver outstanding results for our clients.
        </p>
      </div>
    </div>
  );
};

export default AboutPage;
