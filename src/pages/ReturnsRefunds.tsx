import React from 'react';
import { ArrowLeft, Home, RotateCcw, Shield, AlertTriangle, CheckCircle } from 'lucide-react';

const ReturnsRefunds = () => {
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
              <RotateCcw className="w-8 h-8 text-[#E38A30]" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-[#364A22] mb-4">
              Returns & Refunds
            </h1>
            <p className="text-lg text-gray-600">
              Our return policy and refund process explained
            </p>
          </div>

          <div className="space-y-8">
            {/* Eligible Returns */}
            <section>
              <h2 className="text-2xl font-bold text-[#364A22] mb-4 flex items-center">
                <span className="w-8 h-8 bg-[#E38A30] text-white rounded-full flex items-center justify-center text-sm font-bold mr-3">1</span>
                Eligible Returns
              </h2>
              <div className="bg-green-50 border border-green-200 rounded-xl p-6">
                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-green-600 mt-0.5 mr-3 flex-shrink-0" />
                  <div>
                    <p className="text-gray-700 mb-2">
                      We accept <strong>unopened items in original packaging only</strong>, provided they are returned 
                      <strong> within 7 days of delivery</strong>.
                    </p>
                    <p className="text-sm text-gray-600">
                      Guests outside this timeframe or with opened items are not eligible.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Damaged or Incorrect Items */}
            <section>
              <h2 className="text-2xl font-bold text-[#364A22] mb-4 flex items-center">
                <span className="w-8 h-8 bg-[#E38A30] text-white rounded-full flex items-center justify-center text-sm font-bold mr-3">2</span>
                Damaged or Incorrect Items
              </h2>
              <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
                <div className="flex items-start">
                  <Shield className="w-6 h-6 text-blue-600 mt-0.5 mr-3 flex-shrink-0" />
                  <div>
                    <p className="text-gray-700">
                      If you receive a defective, damaged, or incorrect product, <strong>contact us within 48 hours</strong> 
                      with photographic proof. We will arrange a refund or ship a replacement.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Non-Returnable Items */}
            <section>
              <h2 className="text-2xl font-bold text-[#364A22] mb-4 flex items-center">
                <span className="w-8 h-8 bg-red-500 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3">3</span>
                Non-Returnable Items
              </h2>
              <div className="bg-red-50 border border-red-200 rounded-xl p-6">
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <AlertTriangle className="w-5 h-5 text-red-500 mt-0.5 mr-3 flex-shrink-0" />
                    Opened or used food products
                  </li>
                  <li className="flex items-start">
                    <AlertTriangle className="w-5 h-5 text-red-500 mt-0.5 mr-3 flex-shrink-0" />
                    Items damaged due to your fault
                  </li>
                  <li className="flex items-start">
                    <AlertTriangle className="w-5 h-5 text-red-500 mt-0.5 mr-3 flex-shrink-0" />
                    Returns made after 7 days of delivery
                  </li>
                </ul>
              </div>
            </section>

            {/* Refund Process */}
            <section>
              <h2 className="text-2xl font-bold text-[#364A22] mb-4 flex items-center">
                <span className="w-8 h-8 bg-[#E38A30] text-white rounded-full flex items-center justify-center text-sm font-bold mr-3">4</span>
                Refund Process
              </h2>
              <div className="bg-gray-50 rounded-xl p-6">
                <p className="text-gray-700">
                  Once approved, refunds are processed to the original payment method 
                  <strong> within 5–7 working days</strong>—deducting any return shipping charges if applicable.
                </p>
              </div>
            </section>
          </div>

          {/* Contact Support */}
          <div className="mt-12 pt-8 border-t border-gray-200 text-center">
            <h3 className="text-xl font-semibold text-[#364A22] mb-4">📩 Customer Support</h3>
            <p className="text-gray-600 mb-4">Need help with a return?</p>
            <div className="space-y-2">
              <p className="text-gray-700">
                📧 <a href="mailto:support@sarirawellness.com" className="text-[#E38A30] hover:underline">support@sarirawellness.com</a>
              </p>
              <p className="text-gray-600 text-sm">Hours: Mon–Sat, 10 AM – 6 PM</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ReturnsRefunds;