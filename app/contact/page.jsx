"use client";

import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { useState } from "react";
import toast from "react-hot-toast";
import Image from "next/image";
import { db } from "../../lib/firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";

const ContactPage = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Save to Firebase
      await addDoc(collection(db, "contacts"), {
        ...formData,
        createdAt: serverTimestamp(),
      });

      // Send Email
      const emailRes = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const emailData = await emailRes.json();
      if (!emailRes.ok) {
        throw new Error(emailData.message || "Email send failed");
      }

      // Send to Airtable (optional)
      const airtableRes = await fetch("/api/send-to-airtable", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const airtableData = await airtableRes.json();
      if (!airtableRes.ok) {
        toast.error("Airtable failed: " + airtableData.message);
      } else {
        toast.success("Saved in Airtable!");
      }

      toast.success("Query sent successfully!");
      setFormData({ fullName: "", email: "", phone: "", message: "" });

      setTimeout(() => {
        router.push("/");
      }, 1500);
    } catch (error) {
      console.error(error);
      toast.error("Error: " + error.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-white py-12 px-6 pt-40">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-5xl mx-auto bg-[#F1EDE6] shadow-2xl rounded-2xl p-8"
      >
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="lg:w-1/2 relative h-[100vh] overflow-hidden hidden md:block rounded-xl">
            <Image
              src="https://images.unsplash.com/photo-1680770638423-6d4c1089bd7a?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Room Booking Banner"
              fill
              style={{ objectFit: "cover" }}
              priority
              className="rounded-xl"
            />
          </div>

          {/* Form Section */}
          <div className="lg:w-1/2">
            <h1 className="md:text-4xl text-2xl font-bold text-center font-serif text-[#0e1732] mb-6">
              Contact Us for Your Dream Room Booking
            </h1>
            <p className="text-center text-gray-600 mb-8 font-serif">
              We'd love to help you find the perfect stay. Reach out with any
              questions or requests.
            </p>
            <form className="space-y-6 font-sans" onSubmit={handleSubmit}>
              <div>
                <label className="block mb-1 font-medium text-gray-700">
                  Full Name
                </label>
                <input
                  type="text"
                  name="fullName"
                  placeholder="Your Name"
                  className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
                  value={formData.fullName}
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <label className="block mb-1 font-medium text-gray-700">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="your@email.com"
                  className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <label className="block mb-1 font-medium text-gray-700">
                  Phone Number
                </label>
                <input
                  type="tel"
                  name="phone"
                  placeholder="+91 1234567890"
                  className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
                  value={formData.phone}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label className="block mb-1 font-medium text-gray-700">
                  Message
                </label>
                <textarea
                  rows={4}
                  name="message"
                  placeholder="Tell us what you're looking for..."
                  className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>
              <motion.button
                whileTap={{ scale: 0.95 }}
                whileHover={{ scale: 1.03 }}
                className="w-full bg-[#0e1732] hover:bg-white font-serif text-white hover:text-[#0e1732] border border-[#0e1732] font-semibold py-3 rounded-xl shadow-lg transition"
                type="submit"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Sending..." : "Send Inquiry"}
              </motion.button>
            </form>

            <div className="mt-10 text-center text-sm text-gray-500 font-serif">
              Or reach us on WhatsApp:{" "}
              <a
                href="https://wa.me/919876543210"
                className="text-[#0e1732] underline"
                target="_blank"
              >
                +91 9758354290
              </a>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};
export default ContactPage;
