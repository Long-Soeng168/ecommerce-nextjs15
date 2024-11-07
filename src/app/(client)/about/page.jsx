// pages/about.js

import Image from "next/image";

export default function About() {
  return (
    <div className="min-h-screen p-8 bg-gray-50">
      {/* Header */}
      <header className="mb-16 text-center">
        <h1 className="text-5xl font-extrabold text-gray-800">About Us</h1>
        <p className="max-w-2xl mx-auto mt-6 text-lg text-gray-600">
          Our mission is to innovate and elevate experiences through creativity, technology, and dedication to quality.
        </p>
      </header>

      {/* Mission Section */}
      <section className="max-w-4xl p-8 mx-auto mb-12 transition duration-500 transform bg-white rounded-lg shadow-md hover:shadow-lg">
        <h2 className="mb-4 text-3xl font-bold text-gray-800">Our Mission</h2>
        <p className="leading-relaxed text-gray-600">
          At our core, we aim to create solutions that make a difference. Our commitment to innovation drives us to
          continually improve, adapt, and meet the ever-changing needs of our customers. Whether through our products
          or services, we prioritize delivering excellence in every detail.
        </p>
      </section>

      {/* Vision Section */}
      <section className="max-w-4xl p-8 mx-auto mb-12 transition duration-500 transform bg-white rounded-lg shadow-md hover:shadow-lg">
        <h2 className="mb-4 text-3xl font-bold text-gray-800">Our Vision</h2>
        <p className="leading-relaxed text-gray-600">
          We envision a future where technology seamlessly integrates into everyday life, enhancing productivity and
          bringing people closer together. Through continuous growth and a steadfast focus on customer satisfaction,
          we aim to lead by example in our industry.
        </p>
      </section>

      {/* Values Section */}
      <section className="max-w-4xl p-8 mx-auto mb-12 transition duration-500 transform bg-white rounded-lg shadow-md hover:shadow-lg">
        <h2 className="mb-4 text-3xl font-bold text-gray-800">Our Values</h2>
        <ul className="text-gray-600 list-disc list-inside">
          <li className="mb-3"><strong>Integrity:</strong> We believe in transparency, honesty, and accountability in all that we do.</li>
          <li className="mb-3"><strong>Innovation:</strong> We strive to push boundaries and embrace new ideas.</li>
          <li className="mb-3"><strong>Customer-Centricity:</strong> Our customers are at the heart of our operations.</li>
          <li className="mb-3"><strong>Quality:</strong> We prioritize excellence in every product and service we deliver.</li>
        </ul>
      </section>

      {/* History Section */}
      <section className="max-w-4xl p-8 mx-auto mb-12 transition duration-500 transform bg-white rounded-lg shadow-md hover:shadow-lg">
        <h2 className="mb-4 text-3xl font-bold text-gray-800">Our Journey</h2>
        <div className="space-y-4">
          <div className="flex items-start space-x-4">
            <span className="font-bold text-gray-500">2020</span>
            <p className="text-gray-600">
              Founded with a vision to revolutionize technology solutions, starting as a small startup with big dreams.
            </p>
          </div>
          <div className="flex items-start space-x-4">
            <span className="font-bold text-gray-500">2022</span>
            <p className="text-gray-600">
              Launched our first major product, gaining significant traction in the market and expanding our customer base.
            </p>
          </div>
          <div className="flex items-start space-x-4">
            <span className="font-bold text-gray-500">2024</span>
            <p className="text-gray-600">
              Expanded globally, with teams and clients around the world, and continued to innovate with new offerings.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
