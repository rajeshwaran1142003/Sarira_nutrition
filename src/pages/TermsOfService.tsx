import React from 'react';
import { ArrowLeft, Home, FileText, Users, ShoppingCart, Truck, RotateCcw, Globe, Shield, Scale } from 'lucide-react';

const TermsOfService = () => {
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
              <FileText className="w-8 h-8 text-[#E38A30]" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-[#364A22] mb-4">
              Terms of Service
            </h1>
            <p className="text-lg text-gray-600 mb-2">
              Last updated: [Insert Date]
            </p>
            <p className="text-gray-600">
              Welcome to www.sarirawellness.com (the "Website"), operated by SARIRA Wellness. By accessing or using our website, 
              purchasing our products, or interacting with our services, you agree to the following terms and conditions.
            </p>
            <p className="text-sm text-gray-500 mt-2">
              Please read them carefully before using this site.
            </p>
          </div>

          <div className="space-y-8">
            {/* Eligibility */}
            <section>
              <h2 className="text-2xl font-bold text-[#364A22] mb-4 flex items-center">
                <span className="w-8 h-8 bg-[#E38A30] text-white rounded-full flex items-center justify-center text-sm font-bold mr-3">1</span>
                Eligibility
              </h2>
              <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
                <div className="flex items-start">
                  <Users className="w-6 h-6 text-blue-600 mt-0.5 mr-3 flex-shrink-0" />
                  <p className="text-gray-700">
                    You must be at least <strong>18 years of age</strong> to purchase from our website. 
                    By using the site, you confirm that you are legally capable of entering into a contract.
                  </p>
                </div>
              </div>
            </section>

            {/* Product Information */}
            <section>
              <h2 className="text-2xl font-bold text-[#364A22] mb-4 flex items-center">
                <span className="w-8 h-8 bg-[#E38A30] text-white rounded-full flex items-center justify-center text-sm font-bold mr-3">2</span>
                Product Information
              </h2>
              <div className="bg-gray-50 rounded-xl p-6">
                <p className="text-gray-700">
                  We make every effort to display product descriptions, ingredients, prices, and images accurately. 
                  However, SARIRA does not warrant that all product details are always current or error-free. 
                  We reserve the right to modify product specifications without prior notice.
                </p>
              </div>
            </section>

            {/* Orders & Payments */}
            <section>
              <h2 className="text-2xl font-bold text-[#364A22] mb-4 flex items-center">
                <span className="w-8 h-8 bg-[#E38A30] text-white rounded-full flex items-center justify-center text-sm font-bold mr-3">3</span>
                Orders & Payments
              </h2>
              <div className="bg-gray-50 rounded-xl p-6">
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <ShoppingCart className="w-5 h-5 text-[#E38A30] mt-0.5 mr-3 flex-shrink-0" />
                    All orders placed through the website are subject to acceptance and availability.
                  </li>
                  <li className="flex items-start">
                    <ShoppingCart className="w-5 h-5 text-[#E38A30] mt-0.5 mr-3 flex-shrink-0" />
                    We reserve the right to refuse or cancel any order for any reason, including pricing errors or stock availability.
                  </li>
                  <li className="flex items-start">
                    <ShoppingCart className="w-5 h-5 text-[#E38A30] mt-0.5 mr-3 flex-shrink-0" />
                    Payments must be made using approved payment methods (UPI, cards, net banking, etc.). We do not store your payment details.
                  </li>
                </ul>
              </div>
            </section>

            {/* Shipping & Delivery */}
            <section>
              <h2 className="text-2xl font-bold text-[#364A22] mb-4 flex items-center">
                <span className="w-8 h-8 bg-[#E38A30] text-white rounded-full flex items-center justify-center text-sm font-bold mr-3">4</span>
                Shipping & Delivery
              </h2>
              <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
                <div className="flex items-start">
                  <Truck className="w-6 h-6 text-blue-600 mt-0.5 mr-3 flex-shrink-0" />
                  <div>
                    <p className="text-gray-700 mb-2">
                      Orders are processed within 1–2 business days. Delivery timelines are estimates and not guaranteed.
                    </p>
                    <p className="text-sm text-gray-600">
                      For full details, please refer to our <a href="/shipping-delivery" target="_blank" className="text-[#E38A30] hover:underline">Shipping Policy</a>.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Returns & Refunds */}
            <section>
              <h2 className="text-2xl font-bold text-[#364A22] mb-4 flex items-center">
                <span className="w-8 h-8 bg-[#E38A30] text-white rounded-full flex items-center justify-center text-sm font-bold mr-3">5</span>
                Returns & Refunds
              </h2>
              <div className="bg-green-50 border border-green-200 rounded-xl p-6">
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <RotateCcw className="w-5 h-5 text-green-600 mt-0.5 mr-3 flex-shrink-0" />
                    We accept returns only in cases of damaged, defective, or incorrect items.
                  </li>
                  <li className="flex items-start">
                    <RotateCcw className="w-5 h-5 text-green-600 mt-0.5 mr-3 flex-shrink-0" />
                    Refunds will be processed as per our <a href="/returns-refunds" target="_blank" className="text-[#E38A30] hover:underline">Return Policy</a>.
                  </li>
                  <li className="flex items-start">
                    <RotateCcw className="w-5 h-5 text-green-600 mt-0.5 mr-3 flex-shrink-0" />
                    SARIRA reserves the right to reject any return request that does not meet our criteria.
                  </li>
                </ul>
              </div>
            </section>

            {/* Use of Website */}
            <section>
              <h2 className="text-2xl font-bold text-[#364A22] mb-4 flex items-center">
                <span className="w-8 h-8 bg-[#E38A30] text-white rounded-full flex items-center justify-center text-sm font-bold mr-3">6</span>
                Use of Website
              </h2>
              <div className="bg-red-50 border border-red-200 rounded-xl p-6">
                <p className="text-gray-700 mb-4">You agree not to misuse the website or its content. You may not:</p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Use the website for unlawful or fraudulent purposes
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Attempt to gain unauthorized access to our systems
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Copy, distribute, or reproduce any content without permission
                  </li>
                </ul>
              </div>
            </section>

            {/* Intellectual Property */}
            <section>
              <h2 className="text-2xl font-bold text-[#364A22] mb-4 flex items-center">
                <span className="w-8 h-8 bg-[#E38A30] text-white rounded-full flex items-center justify-center text-sm font-bold mr-3">7</span>
                Intellectual Property
              </h2>
              <div className="bg-gray-50 rounded-xl p-6">
                <p className="text-gray-700">
                  All content on this site — including logos, product descriptions, images, and text — is the property of SARIRA 
                  and protected under applicable copyright and trademark laws.
                </p>
              </div>
            </section>

            {/* Limitation of Liability */}
            <section>
              <h2 className="text-2xl font-bold text-[#364A22] mb-4 flex items-center">
                <span className="w-8 h-8 bg-[#E38A30] text-white rounded-full flex items-center justify-center text-sm font-bold mr-3">8</span>
                Limitation of Liability
              </h2>
              <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-6">
                <p className="text-gray-700 mb-4">SARIRA shall not be liable for any direct, indirect, incidental, or consequential damages that result from:</p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <Shield className="w-5 h-5 text-yellow-600 mt-0.5 mr-3 flex-shrink-0" />
                    The use or inability to use the website
                  </li>
                  <li className="flex items-start">
                    <Shield className="w-5 h-5 text-yellow-600 mt-0.5 mr-3 flex-shrink-0" />
                    Product misuse
                  </li>
                  <li className="flex items-start">
                    <Shield className="w-5 h-5 text-yellow-600 mt-0.5 mr-3 flex-shrink-0" />
                    Delays or failure in delivery beyond our control
                  </li>
                </ul>
              </div>
            </section>

            {/* Privacy */}
            <section>
              <h2 className="text-2xl font-bold text-[#364A22] mb-4 flex items-center">
                <span className="w-8 h-8 bg-[#E38A30] text-white rounded-full flex items-center justify-center text-sm font-bold mr-3">9</span>
                Privacy
              </h2>
              <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
                <p className="text-gray-700">
                  Your personal information is handled in accordance with our <a href="/privacy-policy" target="_blank" className="text-[#E38A30] hover:underline">Privacy Policy</a>. 
                  By using our site, you consent to the collection and use of your data as described there.
                </p>
              </div>
            </section>

            {/* Modifications to Terms */}
            <section>
              <h2 className="text-2xl font-bold text-[#364A22] mb-4 flex items-center">
                <span className="w-8 h-8 bg-[#E38A30] text-white rounded-full flex items-center justify-center text-sm font-bold mr-3">10</span>
                Modifications to Terms
              </h2>
              <div className="bg-gray-50 rounded-xl p-6">
                <p className="text-gray-700">
                  We reserve the right to update or change these terms at any time. Continued use of the website after any changes 
                  implies acceptance of the new terms.
                </p>
              </div>
            </section>

            {/* Governing Law */}
            <section>
              <h2 className="text-2xl font-bold text-[#364A22] mb-4 flex items-center">
                <span className="w-8 h-8 bg-[#E38A30] text-white rounded-full flex items-center justify-center text-sm font-bold mr-3">11</span>
                Governing Law
              </h2>
              <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
                <div className="flex items-start">
                  <Scale className="w-6 h-6 text-blue-600 mt-0.5 mr-3 flex-shrink-0" />
                  <p className="text-gray-700">
                    These Terms shall be governed by and construed in accordance with the laws of India. 
                    Any disputes shall be subject to the jurisdiction of the courts in Chennai, Tamil Nadu.
                  </p>
                </div>
              </div>
            </section>
          </div>

          {/* Contact Us */}
          <div className="mt-12 pt-8 border-t border-gray-200 text-center">
            <h3 className="text-xl font-semibold text-[#364A22] mb-4">📩 Contact Us</h3>
            <p className="text-gray-600 mb-4">For questions about these Terms, contact us at:</p>
            <p className="text-gray-700">
              📧 <a href="mailto:support@sarirawellness.com" className="text-[#E38A30] hover:underline">support@sarirawellness.com</a>
            </p>
            <div className="mt-8 pt-6 border-t border-gray-100">
              <p className="text-[#364A22] font-semibold">SARIRA – Wellness with Transparency.</p>
              <p className="text-gray-600 text-sm mt-1">Thank you for choosing us to be part of your health journey.</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default TermsOfService;