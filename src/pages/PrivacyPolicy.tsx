import React from 'react';
import { ArrowLeft, Home, Shield, Eye, Lock, Users, Cookie, Mail } from 'lucide-react';

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-gray-50 animate-fade-in">
      {/* Header */}
      <header className="bg-[#364A22] text-white py-6 shadow-lg">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <button 
                onClick={() => window.close()}
                className="flex items-center text-white/80 hover:text-[#E38A30] transition-colors duration-300"
              >
                <ArrowLeft className="w-5 h-5 mr-2" />
                Back
              </button>
              <a 
                href="/"
                target="_blank"
                className="flex items-center text-white/80 hover:text-[#E38A30] transition-colors duration-300"
              >
                <Home className="w-5 h-5 mr-2" />
                Home
              </a>
            </div>
            <img 
              src="/images/Logo.png" 
              alt="SARIRA" 
              className="h-10 w-auto brightness-110 contrast-125"
            />
          </div>
        </div>
      </header>

      {/* Content */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-[#E38A30]/10 rounded-full mb-4">
              <Shield className="w-8 h-8 text-[#E38A30]" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-[#364A22] mb-4">
              Privacy Policy
            </h1>
            <p className="text-lg text-gray-600 mb-2">
              Last updated: [Insert Date]
            </p>
            <p className="text-gray-600">
              Welcome to SARIRA. Your privacy is important to us, and we are committed to protecting the personal information you share with us.
            </p>
          </div>

          <div className="space-y-8">
            {/* Information We Collect */}
            <section>
              <h2 className="text-2xl font-bold text-[#364A22] mb-4 flex items-center">
                <span className="w-8 h-8 bg-[#E38A30] text-white rounded-full flex items-center justify-center text-sm font-bold mr-3">1</span>
                Information We Collect
              </h2>
              <div className="bg-gray-50 rounded-xl p-6">
                <p className="text-gray-700 mb-4">When you use our website or place an order, we may collect the following types of information:</p>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <Users className="w-5 h-5 text-[#E38A30] mt-0.5 mr-3 flex-shrink-0" />
                    <div>
                      <strong>Personal Information:</strong> Name, phone number, email address, shipping address, billing address
                    </div>
                  </li>
                  <li className="flex items-start">
                    <Lock className="w-5 h-5 text-[#E38A30] mt-0.5 mr-3 flex-shrink-0" />
                    <div>
                      <strong>Payment Information:</strong> Processed securely via third-party payment gateways (we do not store your card details)
                    </div>
                  </li>
                  <li className="flex items-start">
                    <Eye className="w-5 h-5 text-[#E38A30] mt-0.5 mr-3 flex-shrink-0" />
                    <div>
                      <strong>Order History:</strong> Items purchased, quantity, order value, and delivery records
                    </div>
                  </li>
                  <li className="flex items-start">
                    <Cookie className="w-5 h-5 text-[#E38A30] mt-0.5 mr-3 flex-shrink-0" />
                    <div>
                      <strong>Device/Usage Data:</strong> IP address, browser type, referring URL, and time spent on pages (for analytics)
                    </div>
                  </li>
                  <li className="flex items-start">
                    <Mail className="w-5 h-5 text-[#E38A30] mt-0.5 mr-3 flex-shrink-0" />
                    <div>
                      <strong>Communication:</strong> Emails, WhatsApp, or feedback shared with us
                    </div>
                  </li>
                </ul>
              </div>
            </section>

            {/* How We Use Your Information */}
            <section>
              <h2 className="text-2xl font-bold text-[#364A22] mb-4 flex items-center">
                <span className="w-8 h-8 bg-[#E38A30] text-white rounded-full flex items-center justify-center text-sm font-bold mr-3">2</span>
                How We Use Your Information
              </h2>
              <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
                <p className="text-gray-700 mb-4">We use your data to:</p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-[#E38A30] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Process and fulfill your orders
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-[#E38A30] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Send order confirmations and delivery updates
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-[#E38A30] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Provide customer support
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-[#E38A30] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Send promotional emails (only with your consent)
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-[#E38A30] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Improve our website, services, and user experience
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-[#E38A30] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Prevent fraud and ensure secure transactions
                  </li>
                </ul>
              </div>
            </section>

            {/* Sharing Your Information */}
            <section>
              <h2 className="text-2xl font-bold text-[#364A22] mb-4 flex items-center">
                <span className="w-8 h-8 bg-[#E38A30] text-white rounded-full flex items-center justify-center text-sm font-bold mr-3">3</span>
                Sharing Your Information
              </h2>
              <div className="bg-green-50 border border-green-200 rounded-xl p-6">
                <p className="text-gray-700 mb-4 font-semibold">We do not sell, rent, or trade your personal information.</p>
                <p className="text-gray-700 mb-4">We only share it with:</p>
                <ul className="space-y-2 mb-4">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-[#E38A30] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Logistics and courier partners (to deliver your order)
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-[#E38A30] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Payment gateways (to securely process your transaction)
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-[#E38A30] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Email/SMS marketing tools (only if you opt-in for updates)
                  </li>
                </ul>
                <p className="text-sm text-gray-600">All partners are expected to comply with strict data protection standards.</p>
              </div>
            </section>

            {/* Cookies & Tracking */}
            <section>
              <h2 className="text-2xl font-bold text-[#364A22] mb-4 flex items-center">
                <span className="w-8 h-8 bg-[#E38A30] text-white rounded-full flex items-center justify-center text-sm font-bold mr-3">4</span>
                Cookies & Tracking
              </h2>
              <div className="bg-gray-50 rounded-xl p-6">
                <p className="text-gray-700">
                  Our website uses cookies to enhance your browsing experience and help us understand user behavior. 
                  You can adjust your browser settings to disable cookies at any time, although this may impact site functionality.
                </p>
              </div>
            </section>

            {/* Data Security */}
            <section>
              <h2 className="text-2xl font-bold text-[#364A22] mb-4 flex items-center">
                <span className="w-8 h-8 bg-[#E38A30] text-white rounded-full flex items-center justify-center text-sm font-bold mr-3">5</span>
                Data Security
              </h2>
              <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
                <p className="text-gray-700">
                  We use industry-standard encryption and security protocols to protect your data from unauthorized access, 
                  misuse, or disclosure. Your payment details are handled by trusted third-party gateways that are PCI-DSS compliant.
                </p>
              </div>
            </section>

            {/* Your Rights */}
            <section>
              <h2 className="text-2xl font-bold text-[#364A22] mb-4 flex items-center">
                <span className="w-8 h-8 bg-[#E38A30] text-white rounded-full flex items-center justify-center text-sm font-bold mr-3">6</span>
                Your Rights
              </h2>
              <div className="bg-gray-50 rounded-xl p-6">
                <p className="text-gray-700 mb-4">You may:</p>
                <ul className="space-y-2 mb-4">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-[#E38A30] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Request access to your personal data
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-[#E38A30] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Ask for corrections or deletions
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-[#E38A30] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Opt out of promotional emails at any time
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-[#E38A30] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Request account deactivation
                  </li>
                </ul>
                <p className="text-gray-700">
                  For any of the above, email us at <a href="mailto:support@sarirawellness.com" className="text-[#E38A30] hover:underline">support@sarirawellness.com</a>.
                </p>
              </div>
            </section>

            {/* Children's Privacy */}
            <section>
              <h2 className="text-2xl font-bold text-[#364A22] mb-4 flex items-center">
                <span className="w-8 h-8 bg-[#E38A30] text-white rounded-full flex items-center justify-center text-sm font-bold mr-3">7</span>
                Children's Privacy
              </h2>
              <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-6">
                <p className="text-gray-700">
                  Our products are intended for purchase by adults. We do not knowingly collect personal data from children under 18.
                </p>
              </div>
            </section>

            {/* Policy Updates */}
            <section>
              <h2 className="text-2xl font-bold text-[#364A22] mb-4 flex items-center">
                <span className="w-8 h-8 bg-[#E38A30] text-white rounded-full flex items-center justify-center text-sm font-bold mr-3">8</span>
                Policy Updates
              </h2>
              <div className="bg-gray-50 rounded-xl p-6">
                <p className="text-gray-700">
                  We may update this Privacy Policy from time to time. The latest version will always be available on our website, 
                  and your continued use indicates acceptance.
                </p>
              </div>
            </section>
          </div>

          {/* Contact Us */}
          <div className="mt-12 pt-8 border-t border-gray-200 text-center">
            <h3 className="text-xl font-semibold text-[#364A22] mb-4">📩 Contact Us</h3>
            <p className="text-gray-600 mb-4">For questions, feedback, or privacy concerns, contact:</p>
            <div className="space-y-2">
              <p className="text-gray-700 font-semibold">SARIRA Wellness</p>
              <p className="text-gray-700">
                Email: <a href="mailto:support@sarirawellness.com" className="text-[#E38A30] hover:underline">support@sarirawellness.com</a>
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default PrivacyPolicy;