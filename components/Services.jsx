import {
  FaSearch,
  FaHome,
  FaMobileAlt,
  FaLock,
  FaHeadset,
  FaWifi,
  FaUtensils,
} from "react-icons/fa";

export default function Services() {
  return (
    <div className="min-h-screen bg-[#0e1732] py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto font-serif">
        <h1 className="text-4xl md:text-5xl font-serif text-center text-white mb-14">
          Our Services
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition text-center">
            <FaWifi className="text-[#0e1732] text-4xl mb-4 mx-auto" />
            <h2 className="text-xl font-semibold text-[#0e1732] mb-3">
              Free WiFi
            </h2>
            <p className="text-gray-600">
              Enjoy high-speed internet access throughout the property for work
              and entertainment.
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition text-center">
            <FaUtensils className="text-[#0e1732] text-4xl mb-4 mx-auto" />
            <h2 className="text-xl font-semibold text-[#0e1732] mb-3">
              Food Facility
            </h2>
            <p className="text-gray-600">
              Enjoy delicious meals with our in-house dining or room service
              options.
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition text-center">
            <FaLock className="text-[#0e1732]text-4xl mb-4 mx-auto" />
            <h2 className="text-xl font-semibold text-[#0e1732] mb-3">
              Secure Booking
            </h2>
            <p className="text-gray-600">
              Transparent pricing and real-time availability with secure
              transactions.
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition text-center">
            <FaHeadset className="text-[#0e1732] text-4xl mb-4 mx-auto" />
            <h2 className="text-xl font-semibold text-[#0e1732] mb-3">
              Customer Support
            </h2>
            <p className="text-gray-600">
              Friendly support team available 24/7 to help you along your
              journey.
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition text-center">
            <FaMobileAlt className="text-[#0e1732] text-4xl mb-4 mx-auto" />
            <h2 className="text-xl font-semibold text-[#0e1732] mb-3">
              Mobile-Friendly
            </h2>
            <p className="text-gray-600">
              Browse, book, and manage rentals on any device with ease.
            </p>
          </div>
        </div>

        <div className="text-center mt-20">
          <h2 className="text-2xl sm:text-3xl font-semibold text-white mb-4">
            Ready to find your next room?
          </h2>
          <a
            href="/listings"
            className="inline-block px-8 py-3 bg-white text-[#0e1732] font-medium rounded-full hover:bg-[#0e1732] hover:text-white border border-white transition"
          >
            Explore Rooms
          </a>
        </div>
      </div>
    </div>
  );
}
