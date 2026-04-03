"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

export default function FAQsPage() {
  const faqs = [
    {
      question: "What time is check-in and check-out?",
      answer: "Check-in starts at 11:00 AM and check-out is by 11:00 AM.",
    },
    {
      question: "Do you allow pets at the resort?",
      answer:
        "Yes, we are pet-friendly. Please notify us in advance and follow pet guidelines.",
    },
    {
      question: "Is there Wi-Fi available?",
      answer:
        "Yes, complimentary high-speed Wi-Fi is available throughout the resort.",
    },
    {
      question: "Can I cancel or reschedule my booking?",
      answer:
        "Yes, you can cancel or reschedule up to 7 days before check-in for a full refund.",
    },
    {
      question: "Is breakfast included in the room rate?",
      answer: "Yes, complimentary breakfast is included for all room bookings.",
    },
    {
      question: "Do you offer airport or railway station pickup?",
      answer:
        "Yes, we offer paid pickup and drop services. Please inform us 24 hours in advance.",
    },
    {
      question: "Are there recreational activities available?",
      answer:
        "Yes! We offer activities like trekking, bonfires, nature walks, and indoor games.",
    },
    {
      question: "Do you have parking facilities?",
      answer: "Yes, we offer free secure parking for all our guests.",
    },
    {
      question: "Are outside visitors allowed inside the resort?",
      answer:
        "Only registered guests are allowed. Visitors may be permitted in common areas with prior approval.",
    },
    {
      question: "What safety and hygiene measures are in place?",
      answer:
        "We follow strict cleaning protocols, provide sanitizers, and ensure regular disinfection of all common areas.",
    },
  ];

  const [openIndex, setOpenIndex] = useState(null);

  return (
    <main className="relative min-h-screen pt-32 bg-gradient-to-br from-[#f5f3ef] via-[#faf9f6] to-[#f8f7f3] py-16 px-4 sm:px-6 lg:px-8 font-serif overflow-hidden">
      <div className="absolute top-0 left-0 w-96 h-96 bg-[#bfa86f]/20 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#0e1732]/10 rounded-full blur-3xl translate-x-1/3 translate-y-1/3" />

      <div className="relative max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl  font-bold text-[#0e1732] mb-6 leading-tight">
            Frequently Asked Questions
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-[#957C3D] to-[#B8A055] mx-auto rounded-full mb-6"></div>
          <p className="text-gray-600 text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed">
            Find quick answers about your stay, amenities, and services at
            HillNest Stays
          </p>
        </div>

        <div className="grid gap-6 sm:gap-8 mb-20">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              className="bg-white border border-[#e8e6e1] rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden"
              whileHover={{ y: -2 }}
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex justify-between items-center text-left px-6 sm:px-8 py-5 sm:py-6 focus:outline-none"
              >
                <h2 className="text-lg sm:text-xl font-semibold text-[#0e1732] leading-snug">
                  {faq.question}
                </h2>
                <motion.div
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <ChevronDown className="w-6 h-6 text-[#957C3D]" />
                </motion.div>
              </button>

              <AnimatePresence initial={false}>
                {openIndex === index && (
                  <motion.div
                    key="content"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                    className="overflow-hidden border-t border-[#f2eee9]"
                  >
                    <p className="text-gray-600 text-base sm:text-lg leading-relaxed px-6 sm:px-8 py-4 bg-[#fdfcfb]">
                      {faq.answer}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="relative bg-gradient-to-r from-[#0e1732] via-[#1a2140] to-[#0e1732] rounded-3xl shadow-2xl p-8 sm:p-10 lg:p-14 text-center overflow-hidden"
          whileHover={{ scale: 1.02 }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-20" />
          <div className="relative z-10 max-w-2xl mx-auto">
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4 sm:mb-6">
              Still Have Questions?
            </h3>
            <p className="text-slate-300 text-base sm:text-lg mb-8 leading-relaxed">
              Can&apos;t find your question? Our friendly team is available around
              the clock to help you.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6">
              <a
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-3 bg-gradient-to-r from-[#957C3D] to-[#B8A055] text-white font-semibold rounded-full hover:shadow-lg hover:shadow-[#957C3D]/40 transition-all duration-300 text-base sm:text-lg"
              >
                Contact Us
              </a>
              <a
                href="tel:+1234567890"
                className="inline-flex items-center justify-center px-8 py-3 border border-white/30 text-white font-semibold rounded-full hover:bg-white/10 transition-all duration-300 text-base sm:text-lg"
              >
                Call Now
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </main>
  );
}
