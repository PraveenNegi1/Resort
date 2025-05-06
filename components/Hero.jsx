import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="font-sans text-gray-800">
      {/* Hero Section */}
      <section
        className="relative h-screen bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1606402179428-a57976d71fa4?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/30 flex flex-col justify-center items-center text-white px-4 text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif mb-4 drop-shadow-lg">
            Welcome to Tranquil Stay
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl mb-6 max-w-xl font-sans">
            Experience luxury and comfort in the heart of nature
          </p>
          <Link
            href="/listings"
            className="mt-4 inline-block px-6 py-3 bg-white text-blue-600 font-semibold rounded-full hover:bg-blue-600 hover:text-white transition duration-300"
          >
            Explore Rooms
          </Link>
        </div>
      </section>

      {/* Rooms Preview Section */}
      <section className="py-16 px-4 sm:px-8 md:px-16 bg-gray-50">
        <h2 className="text-3xl md:text-4xl font-serif text-center mb-12 text-gray-800">
          Our Rooms
        </h2>
        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3">
          {[
            {
              title: "Deluxe Room",
              image: "https://source.unsplash.com/400x300/?hotel-room",
              desc: "Modern room with king-size bed, balcony & great views.",
            },
            {
              title: "Suite",
              image: "https://source.unsplash.com/400x300/?suite,luxury-room",
              desc: "Spacious suite with living area, luxury bath & amenities.",
            },
            {
              title: "Family Room",
              image: "https://source.unsplash.com/400x300/?family-room",
              desc: "Comfortable room perfect for families, with extra beds.",
            },
          ].map((room, index) => (
            <Link
              href="/listings"
              key={index}
              className="group block bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition"
            >
              <div className="overflow-hidden">
                <img
                  src={room.image}
                  alt={room.title}
                  className="w-full h-60 object-cover transform group-hover:scale-105 transition duration-300"
                />
              </div>
              <div className="p-5">
                <h3 className="text-xl font-semibold mb-2 text-gray-800 group-hover:text-blue-600 transition">
                  {room.title}
                </h3>
                <p className="text-gray-600">{room.desc}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
