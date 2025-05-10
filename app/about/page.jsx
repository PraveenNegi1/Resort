// pages/about.js
export default function About() {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto font-serif">
        <h1 className="text-4xl font-bold font-serif text-gray-800 mb-6 text-center">
          About Our Hotel and Rooms
        </h1>

        <p className="text-lg text-gray-600 mb-6 ">
          Welcome to{" "}
          <span className="text-blue-600 font-semibold">StayEase Hotels</span>,
          where luxury meets comfort in every corner. Our hotel offer a diverse
          range of stays, from cozy rooms to extravagant suites, all designed to
          provide you with a truly memorable experience.
        </p>

        <h2 className="text-2xl font-semibold text-gray-700 mb-4">
          Our Hotels
        </h2>
        <p className="text-gray-600 mb-6 md:text-[18px]">
          At StayEase Hotel, we believe in offering the finest quality
          accommodations to our guests. Our portfolio includes a wide variety of
          rooms.
        </p>

        <h2 className="text-2xl font-semibold text-gray-700 mb-4">
          Rooms & Suites
        </h2>
        <p className="text-gray-600 mb-6  md:text-[18px]">
          Whether you&apos;re traveling for business, leisure, or a special occasion,
          our rooms and suites are designed to cater to your needs. We offer a
          range of room types, from standard rooms to luxurious suites, each
          furnished with comfort and elegance in mind. All rooms come with
          modern amenities including high-speed internet, flat-screen TVs, cozy
          bedding, and stunning views, so you can unwind and relax during your
          stay.
        </p>

        <h2 className="text-2xl font-semibold text-gray-700 mb-4">
          Facilities & Services
        </h2>
        <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-6  md:text-[18px]">
          <li>State-of-the-art fitness centers</li>
          <li>On-site restaurants offering local and international cuisine</li>
          <li>24/7 concierge service and room service</li>
          <li>Complimentary Wi-Fi throughout the property</li>
          <li>
            In-room amenities including minibars, premium toiletries, and more
          </li>
        </ul>

        <h2 className="text-2xl font-semibold text-gray-700 mb-4">
          Why Choose StayEase Hotels
        </h2>
        <p className="text-gray-600 mb-6  md:text-[18px]">
          StayEase Hotel is dedicated to offering exceptional comfort, service,
          and value for money. Our properties are strategically located to
          ensure you have easy access to both popular attractions and tranquil
          retreats. With personalized services, a wide range of room options,
          and top-tier facilities, we ensure that your stay is always enjoyable,
          convenient, and memorable.
        </p>

        <div className="bg-blue-100 p-6 rounded-lg shadow mt-10 text-center">
          <h3 className="text-xl font-semibold text-blue-800 mb-2">
            Ready to Book Your Stay?
          </h3>
          <p className="text-blue-700 mb-4  md:text-[18px]">
            Browse our selection rooms to find your perfect stay.
          </p>
          <a
            href="/listings"
            className="inline-block px-6 py-2 bg-blue-600 text-white font-medium rounded hover:bg-blue-700 transition"
          >
            Explore Our Rooms
          </a>
        </div>
      </div>
    </div>
  );
}
