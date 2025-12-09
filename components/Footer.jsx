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
    <footer className="bg-[#0e1732] text-[#d4af37] relative overflow-hidden font-serif">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <Image
              src="/logo2.png"
              alt="HillNest Logo"
              width={140}
              height={140}
              className="object-contain mb-4"
              priority
            />
            <p className="text-white/80 max-w-xs leading-relaxed font-light">
              Discover comfort and luxury for your Stays in the lap of the Himalayas. HillNest
              Stays offers curated hotel experiences to make every trip
              unforgettable.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-6 text-white tracking-wide">
              Explore
            </h3>
            <ul className="space-y-3 font-light">
              {[
                { name: "Home", link: "/" },
                { name: "About Us", link: "/about" },
                { name: "Rooms & Suites", link: "/listings" },
                { name: "Gallery", link: "/gallery" },
              ].map((item, i) => (
                <li key={i}>
                  <Link
                    href={item.link}
                    className="text-white hover:text-[#d4af37] transition relative inline-block
                      after:content-[''] after:absolute after:w-0 after:h-[1px] after:left-0 after:-bottom-1
                      after:bg-[#d4af37] hover:after:w-full after:transition-all after:duration-300"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-6 text-white tracking-wide">
              Customer Support
            </h3>
            <ul className="space-y-3 font-light">
              {[
                { name: "Contact Us", link: "/contact" },
                { name: "FAQs", link: "/faqs" },
                { name: "Policies", link: "/policies" },
              ].map((item, i) => (
                <li key={i}>
                  <Link
                    href={item.link}
                    className="text-white/80 hover:text-[#d4af37] transition relative inline-block
                      after:content-[''] after:absolute after:w-0 after:h-[1px] after:left-0 after:-bottom-1
                      after:bg-[#d4af37] hover:after:w-full after:transition-all after:duration-300"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-6 text-white tracking-wide">
              Stay Connected
            </h3>
            <div className="space-y-4 text-white font-light">
              <p className="flex items-center gap-3">
                <FaPhoneAlt className="text-[#d4af37]" /> +91 9758354290
              </p>
              <p className="flex items-center gap-3">
                <FaEnvelope className="text-[#d4af37]" />{" "}
                praveennegi700@gmail.com
              </p>
              <p className="flex items-center gap-3">
                <FaMapMarkerAlt className="text-[#d4af37]" /> HillNest Stays,
                Ghansali, Tehri Garhwal, Uttarakhand
              </p>
            </div>

            <div className="flex space-x-4 mt-6">
              {[FaFacebookF, FaInstagram, FaTwitter].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="p-3 bg-white/10 rounded-full hover:bg-[#d4af37] hover:text-[#0e1732] transition transform hover:scale-110"
                >
                  <Icon />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-white/20 text-center text-sm text-white">
          <p>
            © {new Date().getFullYear()} HillNest Stays. All rights reserved.
          </p>
          <p className="mt-1">
            Inspired by the beauty of Uttarakhand&apos;s hills.
          </p>
        </div>
      </div>
    </footer>
  );
}
