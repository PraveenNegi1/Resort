import Link from "next/link";
import { FaShieldAlt, FaWallet, FaHeadset } from "react-icons/fa";
import RoomsPage from "./Rooms";

export default function Hero() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-blue-400 text-white py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1950&q=80"
            alt="room rental"
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-blue-800 opacity-60" />
        </div>
        <div className="relative z-10 max-w-5xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-4 drop-shadow-lg">
            Find Your Perfect Room Today
          </h1>
          <p className="text-lg sm:text-xl mb-8 drop-shadow-md">
            Hassle-free rentals for students, professionals, and travelers.
          </p>
          <Link
            href="/listings"
            className="inline-block bg-white text-blue-700 font-semibold px-6 py-3 rounded-full shadow-lg hover:bg-blue-50 transition"
          >
            Browse Listings
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-100">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-14">
            Why Choose <span className="text-blue-600">RoomRental</span>?
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow hover:shadow-xl transition text-center">
              <FaShieldAlt className="text-blue-600 text-4xl mb-4 mx-auto" />
              <h3 className="text-xl font-semibold mb-2">Verified Listings</h3>
              <p className="text-gray-600">
                All rooms are checked to ensure you get exactly what you see.
              </p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow hover:shadow-xl transition text-center">
              <FaWallet className="text-blue-600 text-4xl mb-4 mx-auto" />
              <h3 className="text-xl font-semibold mb-2">Affordable Prices</h3>
              <p className="text-gray-600">
                A wide range of budget-friendly options that suit your needs.
              </p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow hover:shadow-xl transition text-center">
              <FaHeadset className="text-blue-600 text-4xl mb-4 mx-auto" />
              <h3 className="text-xl font-semibold mb-2">24/7 Support</h3>
              <p className="text-gray-600">
                We're always available to help you through chat, email, or
                phone.
              </p>
            </div>
          </div>
        </div>
      </section>

      <div>
        <RoomsPage />
      </div>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-4">
            Ready to rent your next room?
          </h2>
          <p className="text-gray-600 mb-6 text-lg">
            Start browsing and discover the place you’ll love to call home.
          </p>
          <Link
            href="/services"
            className="inline-block px-6 py-3 bg-blue-600 text-white font-medium rounded-full hover:bg-blue-700 transition"
          >
            View Our Services
          </Link>
        </div>
      </section>
    </div>
  );
}
