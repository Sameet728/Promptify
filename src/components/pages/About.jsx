import React from "react";

const About = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-8">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-6">About Us</h2>
        <p className="text-lg text-gray-700 mb-4">
          Welcome to our website! We are a team of passionate individuals dedicated to providing the best services and products for our customers.
        </p>
        <p className="text-lg text-gray-700 mb-4">
          Our mission is to deliver high-quality solutions that enhance your life, whether through innovative technology, creative design, or outstanding customer service. We believe in making a positive impact on the world, and we strive to exceed expectations in everything we do.
        </p>
        <p className="text-lg text-gray-700">
          If you have any questions, feel free to reach out to us via our contact page, and we'll be happy to assist you!
        </p>

        {/* Contact Information */}
        <div className="mt-6 text-center text-gray-700">
          <p>For inquiries, please reach out to:</p>
          <p className="mt-2">
            <strong>Sameet Pisal</strong>
            <br />
            <a href="mailto:sameetpisal@gmail.com" className="text-blue-500 hover:text-blue-600">
              sameetpisal@gmail.com
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
