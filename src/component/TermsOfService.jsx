import React from "react";

const TermsOfService = () => {
  return (
    <div className="bg-gray-100 pt-20 min-h-screen">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-green-500 to-teal-600 text-white py-12 pt-24">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">Terms of Service</h1>
          <p className="text-lg">
            Understand the rules and regulations for using our services.
          </p>
        </div>
      </div>

      {/* Content Section */}
      <div className="container mx-auto px-4 py-12">
        <div className="bg-white shadow-lg rounded-lg p-6 md:p-12">
          <h2 className="text-2xl font-bold mb-6">
            Welcome to Our Terms of Service
          </h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            These terms and conditions govern your use of Travel Agency’s
            website and services. By accessing our platform, you agree to comply
            with these terms.
          </p>

          {/* Terms Section */}
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">
                1. Acceptance of Terms
              </h3>
              <p className="text-gray-700 leading-relaxed">
                By using our services, you agree to these terms. If you do not
                agree, please refrain from using our platform.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4">
                2. User Responsibilities
              </h3>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>You must be at least 18 years old to use our services.</li>
                <li>
                  Provide accurate and up-to-date information during sign-up.
                </li>
                <li>
                  Do not engage in prohibited activities such as fraud or
                  spamming.
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4">
                3. Intellectual Property
              </h3>
              <p className="text-gray-700 leading-relaxed">
                All content, including images, text, and logos, are the property
                of Travel Agency. Unauthorized use is prohibited.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4">
                4. Limitation of Liability
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Travel Agency is not responsible for damages resulting from the
                misuse of our services. Use at your own risk.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4">
                5. Changes to Terms
              </h3>
              <p className="text-gray-700 leading-relaxed">
                We reserve the right to modify these terms at any time. Please
                review this page regularly to stay informed of updates.
              </p>
            </div>
          </div>

          {/* Acceptance Section */}
          <div className="mt-8">
            <p className="text-gray-700">
              By continuing to use our platform, you acknowledge that you have
              read and agree to our terms.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsOfService;
