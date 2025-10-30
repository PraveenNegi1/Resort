// pages/about.js
import {
  FaBed,
  FaConciergeBell,
  FaWifi,
  FaDumbbell,
  FaUtensils,
} from "react-icons/fa";

export default function About() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div
        className="relative bg-cover bg-center h-[300px] flex items-center justify-center"
        style={{ backgroundImage: "url('/hotel-bg.jpg')" }}
      >
        <div className="bg-black/50 w-full h-full absolute top-0 left-0" />
        <h1 className="relative z-10 text-white text-4xl md:text-5xl font-bold text-center font-serif">
          About HillNest Stays
        </h1>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 font-serif text-gray-700">
        <section className="mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-semibold mb-4 text-[#0e1732]">
            Luxury Meets Comfort
          </h2>
          <p className="text-lg md:text-xl text-gray-600">
            At{" "}
            <span className="font-semibold text-[#0e1732]">HillNest Stays</span>
            , we offer more than just rooms — we deliver experiences. Whether
            you're traveling for leisure or business, our handpicked
            accommodations ensure a perfect stay.
          </p>
        </section>

        <div className="border-t border-gray-300 my-8" />

        <section className="mb-10">
          <h3 className="text-2xl font-semibold mb-3 text-[#0e1732]">
            Our Hotels
          </h3>
          <p className="text-gray-600 md:text-lg">
            We take pride in offering finely curated accommodations, from serene
            hilltop retreats to vibrant city hubs. Each of our hotels is
            designed with elegance and your comfort in mind.
          </p>
        </section>

        <section className="mb-10">
          <h3 className="text-2xl font-semibold mb-3 text-[#0e1732]">
            Rooms & Suites
          </h3>
          <p className="text-gray-600 md:text-lg">
            Whether it&apos;s a cozy corner for a weekend escape or a spacious suite
            for your long stay, all our rooms are equipped with high-speed
            Wi-Fi, plush bedding, flat-screen TVs, and scenic views to elevate
            your experience.
          </p>
        </section>

        <section className="mb-10">
          <h3 className="text-2xl font-semibold mb-3 text-[#0e1732]">
            Facilities & Services
          </h3>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-gray-700 md:text-lg">
            <li className="flex items-center gap-2">
              <FaDumbbell className="text-[#0e1732]" />
              State-of-the-art fitness centers
            </li>
            <li className="flex items-center gap-2">
              <FaUtensils className="text-[#0e1732]" />
              On-site local & international cuisine
            </li>
            <li className="flex items-center gap-2">
              <FaConciergeBell className="text-[#0e1732]" />
              24/7 concierge & room service
            </li>
            <li className="flex items-center gap-2">
              <FaWifi className="text-[#0e1732]" />
              Complimentary high-speed Wi-Fi
            </li>
            <li className="flex items-center gap-2">
              <FaBed className="text-[#0e1732]" />
              Premium in-room amenities
            </li>
          </ul>
        </section>

        <section className="mb-16">
          <h3 className="text-2xl font-semibold mb-3 text-[#0e1732]">
            Why Choose HillNest Stays
          </h3>
          <p className="text-gray-600 md:text-lg">
            Our commitment to excellence, thoughtful hospitality, and unique
            locations makes us a preferred choice for thousands of travelers.
            Enjoy a balance of tranquility and accessibility, backed by
            unmatched service.
          </p>
        </section>

        <div className="bg-[#0e1732] p-8 rounded-lg text-center text-white shadow-lg">
          <h4 className="text-2xl font-semibold mb-2">
            Ready to Book Your Stay?
          </h4>
          <p className="mb-4 md:text-lg">
            Browse our range of beautifully appointed rooms to find your perfect
            fit.
          </p>
          <a
            href="/listings"
            className="inline-block px-6 py-2 bg-white text-[#0e1732] font-medium rounded-md shadow hover:bg-gray-200 transition"
          >
            Explore Our Rooms
          </a>
        </div>
      </div>
    </div>
  );
}
