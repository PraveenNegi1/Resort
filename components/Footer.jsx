import Link from "next/link";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaPhoneAlt,
  FaEnvelope,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-gray-900 to-gray-800 text-gray-200 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand Section */}
          <div className="flex flex-col items-center md:items-start">
            <h2 className="text-3xl font-extrabold mb-4 text-white tracking-tight">
              RoomRental
            </h2>
            <p className="text-gray-400 text-center md:text-left max-w-xs">
              Simplifying your room search with verified listings and dedicated
              support.
            </p>
          </div>

          {/* Quick Links Section */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-xl font-semibold mb-6 text-white">
              Quick Links
            </h3>
            <ul className="space-y-3 text-gray-400">
              <li>
                <Link
                  href="/"
                  className="hover:text-white transition-colors duration-300"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="hover:text-white transition-colors duration-300"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="hover:text-white transition-colors duration-300"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="/listings"
                  className="hover:text-white transition-colors duration-300"
                >
                  Listings
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Section */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-xl font-semibold mb-6 text-white">Contact</h3>
            <div className="space-y-4 text-gray-400">
              <p className="flex items-center gap-3">
                <FaPhoneAlt className="text-white" />
                <span>+91 98765 43210</span>
              </p>
              <p className="flex items-center gap-3">
                <FaEnvelope className="text-white" />
                <span>contact@roomrental.com</span>
              </p>
            </div>
            <div className="flex space-x-6 mt-6 text-2xl text-gray-300">
              <a
                href="#"
                className="hover:text-white transform hover:scale-110 transition-all duration-300"
                aria-label="Facebook"
              >
                <FaFacebookF />
              </a>
              <a
                href="#"
                className="hover:text-white transform hover:scale-110 transition-all duration-300"
                aria-label="Instagram"
              >
                <FaInstagram />
              </a>
              <a
                href="#"
                className="hover:text-white transform hover:scale-110 transition-all duration-300"
                aria-label="Twitter"
              >
                <FaTwitter />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="mt-12 pt-8 border-t border-gray-700 text-center">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} RoomRental. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
