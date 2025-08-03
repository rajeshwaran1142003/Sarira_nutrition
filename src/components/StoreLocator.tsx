import React from 'react';
import { MapPin, Clock, Phone } from 'lucide-react';

const StoreLocator = () => {
  const stores = [
    {
      name: "SARIRA Chennai Flagship Store",
      address: "No. 45, T. Nagar Main Road, Chennai - 600017",
      hours: "10:00 AM - 7:00 PM",
      phone: "+91 XXXXXXXXXX",
      type: "Flagship Store"
    },
    {
      name: "Coimbatore Wellness Center",
      address: "78, Avinashi Road, Coimbatore - 641018",
      hours: "10:00 AM - 7:00 PM",
      phone: "+91 XXXXXXXXXX",
      type: "Retail Partner"
    },
    {
      name: "Madurai Traditional Store",
      address: "12, Meenakshi Amman Kovil Street, Madurai - 625001",
      hours: "10:00 AM - 6:30 PM",
      phone: "+91 XXXXXXXXXX",
      type: "Authorized Dealer"
    },
    {
      name: "Online Store",
      address: "Available 24/7 at www.sarirawellness.com",
      hours: "Always Open",
      phone: "support@sarirawellness.com",
      type: "E-commerce"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#364A22] mb-4">
            Store Locator
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Find SARIRA Fig Malt at these trusted locations across Tamil Nadu
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Map Placeholder */}
          <div className="order-2 lg:order-1">
            <div className="aspect-square bg-gray-100 rounded-2xl flex items-center justify-center border-2 border-gray-200">
              <div className="text-center">
                <MapPin className="w-16 h-16 text-[#E38A30] mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-[#364A22] mb-2">
                  Interactive Map
                </h3>
                <p className="text-gray-600">
                  Find the nearest store location
                </p>
              </div>
            </div>
          </div>

          {/* Store List */}
          <div className="order-1 lg:order-2 space-y-6">
            {stores.map((store, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-2xl p-6 hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-[#364A22] mb-1">
                      {store.name}
                    </h3>
                    <span className="inline-block bg-[#E38A30] text-white text-xs px-2 py-1 rounded-full">
                      {store.type}
                    </span>
                  </div>
                  <MapPin className="w-6 h-6 text-[#E38A30] flex-shrink-0" />
                </div>

                <div className="space-y-3">
                  <p className="text-gray-600 flex items-start">
                    <MapPin className="w-4 h-4 mr-2 mt-1 text-gray-400 flex-shrink-0" />
                    {store.address}
                  </p>
                  <p className="text-gray-600 flex items-center">
                    <Clock className="w-4 h-4 mr-2 text-gray-400 flex-shrink-0" />
                    {store.hours}
                  </p>
                  <p className="text-gray-600 flex items-center">
                    <Phone className="w-4 h-4 mr-2 text-gray-400 flex-shrink-0" />
                    {store.phone}
                  </p>
                </div>

                <button className="mt-4 w-full bg-[#E38A30] hover:bg-[#E38A30]/90 text-white py-2 px-4 rounded-lg transition-colors duration-300 text-sm font-medium">
                  Get Directions
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Online Store CTA */}
        <div className="mt-16 text-center bg-[#364A22] rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-white mb-4">
            Can't find a store nearby?
          </h3>
          <p className="text-white/80 mb-6">
            Order online and get SARIRA Fig Malt delivered to your doorstep
          </p>
          <button className="bg-[#E38A30] hover:bg-[#E38A30]/90 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105">
            Shop Online
          </button>
        </div>
      </div>
    </section>
  );
};

export default StoreLocator;