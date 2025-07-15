// app/faqs/page.jsx

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
    <main className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100 py-16 px-4">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-center text-[#0e1732] mb-12">
          Frequently Asked Questions
        </h1>

        <div className="grid gap-6">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="group bg-white border border-slate-200 rounded-2xl shadow-sm hover:shadow-xl transition-shadow duration-300 p-6 md:p-8"
            >
              <div className="flex items-start gap-4">
                <div className="text-2xl md:text-3xl text-[#957C3D]"></div>
                <div>
                  <h2 className="text-lg md:text-xl font-semibold text-[#0e1732] mb-2 group-hover:text-[#957C3D] transition-colors duration-300">
                    {faq.question}
                  </h2>
                  <p className="text-slate-600 leading-relaxed">{faq.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <p className="text-sm text-slate-500">
            Can’t find your question?{" "}
            <a
              href="/contact"
              className="text-[#0e1732] font-medium hover:underline"
            >
              Contact us
            </a>
          </p>
        </div>
      </div>
    </main>
  );
}
