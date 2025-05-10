"use client";

import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

const ContactPage = () => {
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success("Query sent successfully!");
    setTimeout(() => {
      router.push("/");
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-100 via-white to-blue-50 py-12 px-6">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-3xl mx-auto bg-white shadow-2xl rounded-2xl p-8"
      >
        <h1 className="text-4xl font-bold text-center font-serif text-blue-700 mb-6">
          Contact Us for Room Booking
        </h1>
        <p className="text-center text-gray-600 mb-8 font-serif">
          We'd love to help you find the perfect stay. Reach out with any
          questions or requests.
        </p>
        <form className="space-y-6" onSubmit={handleSubmit}>
          <div>
            <label className="block mb-1 font-medium text-gray-700">
              Full Name
            </label>
            <input
              type="text"
              placeholder="Your Name"
              className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
          </div>
          <div>
            <label className="block mb-1 font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              placeholder="your@email.com"
              className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
          </div>
          <div>
            <label className="block mb-1 font-medium text-gray-700">
              Phone Number
            </label>
            <input
              type="tel"
              placeholder="+91 1234567890"
              className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
          <div>
            <label className="block mb-1 font-medium text-gray-700">
              Message
            </label>
            <textarea
              rows={4}
              placeholder="Tell us what you're looking for..."
              className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            ></textarea>
          </div>
          <motion.button
            whileTap={{ scale: 0.95 }}
            whileHover={{ scale: 1.03 }}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-xl shadow-lg transition"
            type="submit"
          >
            Send Inquiry
          </motion.button>
        </form>

        <div className="mt-10 text-center text-sm text-gray-500 font-serif">
          Or reach us on WhatsApp:{" "}
          <a
            href="https://wa.me/919876543210"
            className="text-blue-600 underline"
            target="_blank"
          >
            +91 98765 43210
          </a>
        </div>
      </motion.div>
    </div>
  );
};

export default ContactPage;
