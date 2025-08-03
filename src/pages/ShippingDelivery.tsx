import React from 'react';
import { ArrowLeft, Home, Truck, Clock, AlertCircle, RefreshCw } from 'lucide-react';

const ShippingDelivery = () => {
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
              <Truck className="w-8 h-8 text-[#E38A30]" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-[#364A22] mb-4">
              Shipping & Delivery
            </h1>
            <p className="text-lg text-gray-600">
              Everything you need to know about our shipping policies and delivery process
            </p>
          </div>

          <div className="space-y-8">
            {/* Shipping Coverage & Charges */}
            <section>
              <h2 className="text-2xl font-bold text-[#364A22] mb-4 flex items-center">
                <span className="w-8 h-8 bg-[#E38A30] text-white rounded-full flex items-center justify-center text-sm font-bold mr-3">1</span>
                Shipping Coverage & Charges
              </h2>
              <div className="bg-gray-50 rounded-xl p-6">
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-[#E38A30] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    We deliver across India (local areas in Tamil Nadu included), excluding certain remote regions.
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-[#E38A30] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <strong>Free shipping on prepaid orders above ₹800.</strong>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-[#E38A30] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    For orders below ₹800, delivery charges vary by location.
                  </li>
                </ul>
              </div>
            </section>

            {/* Order Processing Time */}
            <section>
              <h2 className="text-2xl font-bold text-[#364A22] mb-4 flex items-center">
                <span className="w-8 h-8 bg-[#E38A30] text-white rounded-full flex items-center justify-center text-sm font-bold mr-3">2</span>
                Order Processing Time
              </h2>
              <div className="bg-gray-50 rounded-xl p-6">
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <Clock className="w-5 h-5 text-[#E38A30] mt-0.5 mr-3 flex-shrink-0" />
                    Orders placed before 5 PM are processed within 1 business day.
                  </li>
                  <li className="flex items-start">
                    <AlertCircle className="w-5 h-5 text-[#E38A30] mt-0.5 mr-3 flex-shrink-0" />
                    Weekends & public holidays are not processing days.
                  </li>
                </ul>
              </div>
            </section>

            {/* Delivery Timeline */}
            <section>
              <h2 className="text-2xl font-bold text-[#364A22] mb-4 flex items-center">
                <span className="w-8 h-8 bg-[#E38A30] text-white rounded-full flex items-center justify-center text-sm font-bold mr-3">3</span>
                Delivery Timeline
              </h2>
              <div className="bg-gray-50 rounded-xl p-6">
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-[#E38A30] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <strong>Estimated delivery: 6 – 10 working days across India</strong>, depending on your location.
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-[#E38A30] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Courier tracking via email or SMS provided at dispatch.
                  </li>
                </ul>
              </div>
            </section>

            {/* Failed Deliveries */}
            <section>
              <h2 className="text-2xl font-bold text-[#364A22] mb-4 flex items-center">
                <span className="w-8 h-8 bg-[#E38A30] text-white rounded-full flex items-center justify-center text-sm font-bold mr-3">4</span>
                Failed Deliveries or Erroneous Address
              </h2>
              <div className="bg-red-50 border border-red-200 rounded-xl p-6">
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <AlertCircle className="w-5 h-5 text-red-500 mt-0.5 mr-3 flex-shrink-0" />
                    Customers are responsible for reshipping fees if the order is returned due to incomplete or incorrect address.
                  </li>
                  <li className="flex items-start">
                    <AlertCircle className="w-5 h-5 text-red-500 mt-0.5 mr-3 flex-shrink-0" />
                    SARIRA is not liable for lost packages from address errors.
                  </li>
                </ul>
              </div>
            </section>

            {/* Order Cancellation & Refund */}
            <section>
              <h2 className="text-2xl font-bold text-[#364A22] mb-4 flex items-center">
                <RefreshCw className="w-8 h-8 text-[#E38A30] mr-3" />
                Order Cancellation & Refund
              </h2>
              <div className="bg-green-50 border border-green-200 rounded-xl p-6">
                <p className="text-gray-700">
                  If the order is cancelled before dispatch or cannot be delivered to your location, we issue a 
                  <strong> full refund—including shipping charges—within 48 business hours</strong> of processing.
                </p>
              </div>
            </section>
          </div>

          {/* Contact Support */}
          <div className="mt-12 pt-8 border-t border-gray-200 text-center">
            <h3 className="text-xl font-semibold text-[#364A22] mb-4">📩 Customer Support</h3>
            <p className="text-gray-600 mb-4">Need help?</p>
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

export default ShippingDelivery;