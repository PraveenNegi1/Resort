// pages/about.js
export default function About() {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-800 mb-6 text-center">
          About Us
        </h1>

        <p className="text-lg text-gray-600 mb-6">
          Welcome to{" "}
          <span className="text-blue-600 font-semibold">RoomRental</span>, your
          go-to platform for finding comfortable and affordable rooms for rent
          across the country. Whether you&apos;re a student, working professional, or
          traveler, we&apos;re here to help you find the perfect space that feels
          like home.
        </p>

        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Our Story</h2>
        <p className="text-gray-600 mb-6">
          RoomRental was born out of a need to simplify the room-hunting
          process. We noticed how difficult it was for people to find reliable
          and budget-friendly accommodations—so we decided to change that.
          Today, we connect thousands of room seekers with verified listings in
          just a few clicks.
        </p>

        <h2 className="text-2xl font-semibold text-gray-700 mb-4">
          Our Mission
        </h2>
        <p className="text-gray-600 mb-6">
          Our mission is to create a seamless and secure platform that bridges
          the gap between landlords and tenants. We aim to provide a wide
          selection of rooms, transparent pricing, and real-time availability to
          make renting easier than ever.
        </p>

        <div className="bg-blue-100 p-6 rounded-lg shadow mt-10 text-center">
          <h3 className="text-xl font-semibold text-blue-800 mb-2">
            Looking for a room?
          </h3>
          <p className="text-blue-700 mb-4">
            Start your journey today and find a place you&apos;ll love to live in.
          </p>
          <a
            href="/listings"
            className="inline-block px-6 py-2 bg-blue-600 text-white font-medium rounded hover:bg-blue-700 transition"
          >
            Browse Listings
          </a>
        </div>
      </div>
    </div>
  );
}
