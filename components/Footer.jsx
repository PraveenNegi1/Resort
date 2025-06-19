import Link from "next/link";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-[#0e1732] text-[#957C3D] pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 font-serif">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Logo and Description */}
          <div className="flex flex-col items-center md:items-start">
            <div className="mb-4">
              <Image
                src="/logo2.png"
                alt="HillNest Logo"
                width={180}
                height={180}
                className="object-contain"
              />
            </div>
            <p className="text-white text-center md:text-left max-w-xs leading-relaxed">
              Discover comfort and luxury in the lap of the Himalayas. HillNest
              Stays offers curated hotel experiences to make every trip
              unforgettable.
            </p>
          </div>

          {/* Explore Links */}
          <div>
            <h3 className="text-xl font-semibold mb-6 text-white">Explore</h3>
            <ul className="space-y-3 text-white">
              <li>
                <Link href="/" className="hover:text-[#957C3D] transition">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-[#957C3D] transition">
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/listings"
                  className="hover:text-[#957C3D] transition"
                >
                  Rooms & Suites
                </Link>
              </li>
              <li>
              </li>
              <li>
                <Link
                  href="/gallery"
                  className="hover:text-[#957C3D] transition"
                >
                  Gallery
                </Link>
              </li>
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <h3 className="text-xl font-semibold mb-6 text-white">
              Customer Support
            </h3>
            <ul className="space-y-3 text-white">
              <li>
                <Link
                  href="/contact"
                  className="hover:text-[#957C3D] transition"
                >
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/faq" className="hover:text-[#957C3D] transition">
                  FAQs
                </Link>
              </li>
              <li>
                <Link
                  href="/policies"
                  className="hover:text-[#957C3D] transition"
                >
                  Policies
                </Link>
              </li>
              <li>
                <Link
                  href="/support"
                  className="hover:text-[#957C3D] transition"
                >
                  Help Center
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info and Socials */}
          <div className="text-white">
            <h3 className="text-xl font-semibold mb-6">Stay Connected</h3>
            <div className="space-y-4">
              <p className="flex items-center gap-3">
                <FaPhoneAlt /> <span>+91 98765 43210</span>
              </p>
              <p className="flex items-center gap-3">
                <FaEnvelope /> <span>contact@hillneststays.com</span>
              </p>
              <p className="flex items-center gap-3">
                <FaMapMarkerAlt />{" "}
                <span>HillNest Stays, Ghansali, Uttarakhand</span>
              </p>
            </div>

            <div className="flex space-x-6 mt-6 text-2xl text-gray-300">
              <a
                href="#"
                className="hover:text-white hover:scale-110 transition"
                aria-label="Facebook"
              >
                <FaFacebookF />
              </a>
              <a
                href="#"
                className="hover:text-white hover:scale-110 transition"
                aria-label="Instagram"
              >
                <FaInstagram />
              </a>
              <a
                href="#"
                className="hover:text-white hover:scale-110 transition"
                aria-label="Twitter"
              >
                <FaTwitter />
              </a>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-12 pt-8 border-t border-white text-center text-sm text-white">
          <p>
            © {new Date().getFullYear()} HillNest Stays. All rights reserved.
          </p>
          <p className="mt-2">Crafted with love in the hills of Uttarakhand.</p>
        </div>
      </div>
    </footer>
  );
}
