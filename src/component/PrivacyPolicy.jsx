import React from "react";

const PrivacyPolicy = () => {
  return (
    <div className="bg-gray-100 pt-20 min-h-screen">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">Privacy Policy</h1>
          <p className="text-lg">
            Learn how we collect, use, and protect your information.
          </p>
        </div>
      </div>

      {/* Content Section */}
      <div className="container mx-auto px-4 py-12">
        <div className="bg-white shadow-lg rounded-lg p-6 md:p-12">
          <h2 className="text-2xl font-bold mb-6">Introduction</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Welcome to Travel Agency's Privacy Policy. We value your trust and
            are committed to protecting your personal information. This policy
            explains how we handle your data.
          </p>

          <h3 className="text-xl font-semibold mb-4">
            1. Information We Collect
          </h3>
          <ul className="list-disc list-inside mb-6 space-y-2 text-gray-700">
            <li>Personal details such as name, email, and contact number.</li>
            <li>Information provided during bookings or inquiries.</li>
            <li>Usage data to improve your experience on our platform.</li>
          </ul>

          <h3 className="text-xl font-semibold mb-4">
            2. How We Use Your Information
          </h3>
          <p className="text-gray-700 leading-relaxed mb-6">
            We use your information to provide better services, enhance your
            user experience, and communicate with you regarding our offerings.
          </p>

          <h3 className="text-xl font-semibold mb-4">
            3. Protecting Your Data
          </h3>
          <p className="text-gray-700 leading-relaxed mb-6">
            Your data's security is our priority. We use advanced measures like
            encryption and secure servers to keep your information safe.
          </p>

          <h3 className="text-xl font-semibold mb-4">4. Your Rights</h3>
          <p className="text-gray-700 leading-relaxed mb-6">
            You have the right to access, update, or delete your personal
            information. Feel free to contact us to exercise your rights.
          </p>

          <h3 className="text-xl font-semibold mb-4">5. Contact Us</h3>
          <p className="text-gray-700 leading-relaxed">
            If you have any questions about this Privacy Policy, please contact
            us at{" "}
            <a
              href="mailto:support@wandervista.com"
              className="text-blue-600 underline"
            >
              support@wandervista.com
            </a>
            .
          </p>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
