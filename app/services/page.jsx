import {
  FaSearch,
  FaHome,
  FaMobileAlt,
  FaLock,
  FaHeadset,
  FaPlusCircle,
} from "react-icons/fa";

export default function Services() {
  return (
    <div className="min-h-screen bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-extrabold text-center text-gray-800 mb-14">
          Our Services
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {/* Service Card 1 */}
          <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition text-center">
            <FaHome className="text-blue-600 text-4xl mb-4 mx-auto" />
            <h2 className="text-xl font-semibold text-blue-600 mb-3">
              Room Listings
            </h2>
            <p className="text-gray-600">
              Verified and affordable room options across cities with detailed
              filters.
            </p>
          </div>

          {/* Service Card 2 */}
          <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition text-center">
            <FaPlusCircle className="text-blue-600 text-4xl mb-4 mx-auto" />
            <h2 className="text-xl font-semibold text-blue-600 mb-3">
              Post Your Property
            </h2>
            <p className="text-gray-600">
              List your available spaces easily and reach thousands of renters
              quickly.
            </p>
          </div>

          {/* Service Card 3 */}
          <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition text-center">
            <FaSearch className="text-blue-600 text-4xl mb-4 mx-auto" />
            <h2 className="text-xl font-semibold text-blue-600 mb-3">
              Smart Search Tools
            </h2>
            <p className="text-gray-600">
              Use filters and map views to discover rentals tailored to your
              needs.
            </p>
          </div>

          {/* Service Card 4 */}
          <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition text-center">
            <FaLock className="text-blue-600 text-4xl mb-4 mx-auto" />
            <h2 className="text-xl font-semibold text-blue-600 mb-3">
              Secure Booking
            </h2>
            <p className="text-gray-600">
              Transparent pricing and real-time availability with secure
              transactions.
            </p>
          </div>

          {/* Service Card 5 */}
          <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition text-center">
            <FaHeadset className="text-blue-600 text-4xl mb-4 mx-auto" />
            <h2 className="text-xl font-semibold text-blue-600 mb-3">
              Customer Support
            </h2>
            <p className="text-gray-600">
              Friendly support team available 24/7 to help you along your
              journey.
            </p>
          </div>

          {/* Service Card 6 */}
          <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition text-center">
            <FaMobileAlt className="text-blue-600 text-4xl mb-4 mx-auto" />
            <h2 className="text-xl font-semibold text-blue-600 mb-3">
              Mobile-Friendly
            </h2>
            <p className="text-gray-600">
              Browse, book, and manage rentals on any device with ease.
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-20">
          <h3 className="text-2xl sm:text-3xl font-semibold text-gray-800 mb-4">
            Ready to find your next room?
          </h3>
          <a
            href="/listings"
            className="inline-block px-8 py-3 bg-blue-600 text-white font-medium rounded-full hover:bg-blue-700 transition"
          >
            Explore Listings
          </a>
        </div>
      </div>
    </div>
  );
}
