import React, { useState } from 'react';
import { ArrowLeft, Home, HelpCircle, ChevronDown, ChevronUp } from 'lucide-react';

const FAQs = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "🥄 What is SARIRA Fig Malt made of?",
      answer: "SARIRA Fig Malt is made from 100% organic figs and premium nuts. No preservatives, no refined sugar, and no artificial flavors — just clean, plant-based nutrition."
    },
    {
      question: "🍼 Is SARIRA safe for children and elders?",
      answer: "Yes! SARIRA is gentle, nutritious, and family-friendly, suitable for children above 1 year and elders alike. It supports digestion, immunity, and energy in all age groups."
    },
    {
      question: "🍯 Can I use SARIRA as a sugar substitute?",
      answer: "Absolutely. SARIRA Fig Malt has a naturally sweet taste from figs and can be used in place of refined sugar in milk, tea, porridge, baking, or toast toppings."
    },
    {
      question: "💪 What are the health benefits of SARIRA?",
      answer: "SARIRA supports: • Digestive health (rich in fiber) • Energy and stamina • Iron and calcium intake • Gut-friendly sweetness • Gentle detox and immunity support"
    },
    {
      question: "🕒 How do I consume SARIRA Fig Malt?",
      answer: "You can: • Mix 1 tbsp with warm milk or water • Add to smoothies or porridge • Use as a toast topping • Bake into muffins or energy balls. Avoid boiling directly to preserve nutrients."
    },
    {
      question: "🚫 Does SARIRA contain grains, preservatives, or added sugar?",
      answer: "No. SARIRA is grain-free, preservative-free, and refined sugar-free. Just figs and nuts — nothing more."
    },
    {
      question: "🔄 What is the shelf life of SARIRA Fig Malt?",
      answer: "SARIRA has a shelf life of 6 months when stored in a cool, dry place. Always close the lid tightly after use."
    },
    {
      question: "📦 Where do you ship and how long does it take?",
      answer: "We ship across India. Orders are usually delivered in 3–7 business days depending on your location. Orders above ₹800 are eligible for free shipping."
    },
    {
      question: "💳 What payment options do you accept?",
      answer: "We accept UPI, debit/credit cards, net banking, and Cash on Delivery (COD) in select locations."
    },
    {
      question: "📩 Who do I contact for queries or returns?",
      answer: "For any support, email us at support@sarirawellness.com or WhatsApp us at +91-XXXXXXXXXX. We're available Mon–Sat, 10AM – 6PM."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

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
              <HelpCircle className="w-8 h-8 text-[#E38A30]" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-[#364A22] mb-4">
              Frequently Asked Questions
            </h1>
            <p className="text-lg text-gray-600">
              SARIRA Fig Malt – Wellness Made Simple
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-2xl overflow-hidden transition-all duration-300 hover:bg-gray-100"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between focus:outline-none"
                >
                  <h3 className="text-lg font-semibold text-[#364A22] pr-4">
                    {faq.question}
                  </h3>
                  <div className="text-[#E38A30] flex-shrink-0">
                    {openIndex === index ? (
                      <ChevronUp className="w-6 h-6" />
                    ) : (
                      <ChevronDown className="w-6 h-6" />
                    )}
                  </div>
                </button>
                
                {openIndex === index && (
                  <div className="px-6 pb-4">
                    <div className="border-t border-gray-200 pt-4">
                      <div className="text-gray-700 leading-relaxed whitespace-pre-line">
                        {faq.answer}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Still have questions */}
          <div className="mt-12 pt-8 border-t border-gray-200 text-center">
            <h3 className="text-xl font-semibold text-[#364A22] mb-4">Still have questions?</h3>
            <p className="text-gray-600 mb-6">
              Feel free to contact our wellness team — we're here to help you on your journey to better living.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:support@sarirawellness.com"
                className="bg-[#E38A30] hover:bg-[#E38A30]/90 text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-300"
              >
                Email Support
              </a>
              <a
                href="https://wa.me/91XXXXXXXXXX"
                className="bg-[#25D366] hover:bg-[#25D366]/90 text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-300"
              >
                WhatsApp Us
              </a>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default FAQs;