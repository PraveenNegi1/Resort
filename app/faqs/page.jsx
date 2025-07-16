export default function FAQsPage() {
  const faqs = [
    {
      question: "What time is check-in and check-out?",
      answer: "Check-in starts at 11:00 PM and check-out is by 11:00 AM.",
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

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50 py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-72 h-72 bg-gradient-to-br from-[#957C3D]/10 to-transparent rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-72 h-72 bg-gradient-to-tl from-[#0e1732]/10 to-transparent rounded-full blur-3xl transform translate-x-1/2 translate-y-1/2"></div>
      </div>

      <div className="relative max-w-4xl mx-auto mt-20 font-serif">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-[#0e1732] mb-4 sm:mb-6 leading-tight">
            Frequently Asked Questions
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-[#957C3D] to-[#B8A055] mx-auto rounded-full mb-6"></div>
          <p className="text-slate-600 text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed">
            Find answers to common questions about our resort services and
            amenities
          </p>
        </div>

        {/* FAQ Grid */}
        <div className="grid gap-4 sm:gap-6 lg:gap-8 mb-12 sm:mb-16">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="group bg-white/80 backdrop-blur-sm border border-slate-200/60 rounded-2xl sm:rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 p-6 sm:p-8 lg:p-10 transform hover:-translate-y-2 hover:scale-[1.02]"
            >
              <div className="flex items-start gap-4 sm:gap-6">
                <div className="flex-shrink-0 w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-gradient-to-br from-[#957C3D] to-[#B8A055] rounded-xl sm:rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110">
                  <span className="text-xl sm:text-2xl lg:text-3xl font-bold text-white">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>
                <div className="flex-1 min-w-0">
                  <h2 className="text-lg sm:text-xl lg:text-2xl font-bold text-[#0e1732] mb-3 sm:mb-4 group-hover:text-[#957C3D] transition-colors duration-300 leading-tight">
                    {faq.question}
                  </h2>
                  <div className="w-full h-px bg-gradient-to-r from-[#957C3D]/30 to-transparent mb-3 sm:mb-4"></div>
                  <p className="text-slate-600 text-sm sm:text-base lg:text-lg leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Contact Section */}
        <div className="bg-gradient-to-r from-[#0e1732] via-[#1e293b] to-[#0e1732] rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-12 text-center shadow-2xl">
          <div className="max-w-2xl mx-auto">
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4 sm:mb-6">
              Still Have Questions?
            </h3>
            <p className="text-slate-300 text-sm sm:text-base lg:text-lg mb-6 sm:mb-8 leading-relaxed">
              Can't find your question? Our friendly team is here to help you
              24/7
            </p>
            <div className="inline-flex flex-col sm:flex-row gap-4 sm:gap-6">
              <a
                href="/contact"
                className="inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-[#957C3D] to-[#B8A055] text-white font-semibold rounded-xl sm:rounded-2xl hover:shadow-lg hover:shadow-[#957C3D]/25 transition-all duration-300 transform hover:scale-105 text-sm sm:text-base"
              >
                Contact Us
              </a>
              <a
                href="tel:+1234567890"
                className="inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 bg-white/10 backdrop-blur-sm border border-white/20 text-white font-semibold rounded-xl sm:rounded-2xl hover:bg-white/20 transition-all duration-300 transform hover:scale-105 text-sm sm:text-base"
              >
                Call Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
