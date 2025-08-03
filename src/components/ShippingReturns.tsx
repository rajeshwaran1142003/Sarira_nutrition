import React from 'react';
import { Truck, RotateCcw, Shield, Clock } from 'lucide-react';

const ShippingReturns = () => {
  const policies = [
    {
      icon: <Truck className="w-8 h-8" />,
      title: "Free Shipping",
      description: "Free shipping on prepaid orders above ₹800",
      details: "Delivery charges vary by location for orders below ₹800"
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: "Fast Processing",
      description: "Orders placed before 5 PM are processed within 1 business day",
      details: "Estimated delivery: 6-10 working days across India"
    },
    {
      icon: <RotateCcw className="w-8 h-8" />,
      title: "Easy Returns",
      description: "7-day return policy for unopened products in original packaging",
      details: "Full refund within 5-7 working days"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Damage Protection",
      description: "Contact us within 48 hours for damaged or incorrect items",
      details: "We arrange refund or replacement with photographic proof"
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#364A22] mb-4">
            Shipping & Returns
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We make it easy to get SARIRA Fig Malt delivered to you with hassle-free policies
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {policies.map((policy, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="text-[#E38A30] mb-4 flex justify-center">
                {policy.icon}
              </div>
              <h3 className="text-xl font-semibold text-[#364A22] mb-2">
                {policy.title}
              </h3>
              <p className="text-gray-600 mb-3 text-sm">
                {policy.description}
              </p>
              <p className="text-[#E38A30] text-xs font-medium">
                {policy.details}
              </p>
            </div>
          ))}
        </div>

        {/* Detailed Policies */}
        <div className="bg-white rounded-2xl p-8 shadow-lg">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-bold text-[#364A22] mb-4">
                Shipping & Delivery
              </h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-[#E38A30] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  We deliver across India, excluding certain remote regions
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-[#E38A30] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Weekends & public holidays are not processing days
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-[#E38A30] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Courier tracking via email or SMS provided at dispatch
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-[#E38A30] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Customers responsible for reshipping fees if returned due to incorrect address
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-[#364A22] mb-4">
                Returns & Refunds
              </h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-[#E38A30] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Unopened items in original packaging only, within 7 days of delivery
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-[#E38A30] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Opened or used food products are not returnable
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-[#E38A30] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Items damaged due to customer fault are not eligible
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-[#E38A30] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Full refund including shipping charges for cancelled orders before dispatch
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-8 pt-8 border-t border-gray-200 text-center">
            <p className="text-gray-600 mb-4">
              Have questions about shipping or returns?
            </p>
            <button className="bg-[#E38A30] hover:bg-[#E38A30]/90 text-white px-6 py-2 rounded-lg transition-colors duration-300 font-medium">
              Contact Support
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShippingReturns;