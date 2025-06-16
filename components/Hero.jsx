"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

export default function Home() {
  const backgroundImages = [
    "https://images.unsplash.com/photo-1680503146476-abb8c752e1f4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0",
    "https://images.unsplash.com/photo-1729605411476-defbdab14c54?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1687180497323-0750d6fe0124?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1741506131058-533fcf894483?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1583845112203-29329902332e?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [nextImageIndex, setNextImageIndex] = useState(1);
  const [isFading, setIsFading] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsFading(true);
      setTimeout(() => {
        setCurrentImageIndex((prevIndex) =>
          prevIndex === backgroundImages.length - 1 ? 0 : prevIndex + 1
        );
        setNextImageIndex((prevIndex) =>
          prevIndex === backgroundImages.length - 1 ? 0 : prevIndex + 1
        );
        setIsFading(false);
      }, 900); 
    }, 4000); 
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="font-sans text-gray-800">
      <section className="relative h-screen bg-cover bg-center">
        <div
          className="absolute inset-0 bg-cover bg-center transition-opacity duration-1200"
          style={{
            backgroundImage: `url('${backgroundImages[currentImageIndex]}')`,
            opacity: isFading ? 0 : 1,
          }}
        />

        <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/30 flex flex-col justify-center items-center text-white px-4 text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif mb-4 drop-shadow-lg">
            Welcome to HillNest Stays
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl mb-4 max-w-xl font-serif">
            Experience luxury and comfort in the heart of nature
          </p>
          <Link
            href="/listings"
            className="mt-4 inline-block px-6 py-3 font-serif bg-white text-[#0e1732] font-semibold rounded-full hover:bg-[#0e1732] hover:text-white transition duration-300"
          >
            Explore Rooms
          </Link>
        </div>
      </section>

      <section className="bg-[#0e1732] py-16 px-4 sm:px-8 md:px-20 text-center font-serif">
        <h2 className="text-3xl md:text-4xl font-serif text-white mb-8">
          Why Choose HillNest Stays?
        </h2>
        <div className="max-w-4xl mx-auto text-white text-lg leading-relaxed">
          <p className="mb-4">
            At HillNest Stays, we blend luxury with nature. Whether you're
            waking up to birdsong, enjoying fresh organic meals, or soaking in
            the view from your private balcony, every detail is curated for your
            comfort.
          </p>
          <p className="mb-4">
            Explore nearby nature trails, indulge in spa therapies, or simply
            relax in our serene ambiance. Our eco-conscious ethos ensures your
            stay is both relaxing and sustainable.
          </p>
          <p className="mb-4">
            Discover the beauty of the wild — without compromising on comfort.
            Whether it's a romantic retreat, a solo escape, or a family
            adventure, Tranquil Stay is your ideal getaway.
          </p>
          <p className="mb-4">
            Each of our rooms is crafted with natural materials and modern
            amenities, providing a harmonious balance of elegance and rustic
            charm. Floor-to-ceiling windows invite the outdoors in, while plush
            bedding ensures a restful night's sleep.
          </p>
          <p className="mb-4">
            Our commitment to sustainability goes beyond aesthetics.
            Solar-powered infrastructure, rainwater harvesting, and a zero-waste
            kitchen reflect our dedication to the environment.
          </p>
          <p className="mb-4">
            Unwind with yoga at sunrise, gather around bonfires under starlit
            skies, or join our curated local excursions for an immersive
            cultural experience. From adventure to serenity, there's something
            for everyone.
          </p>
          <p className="mb-4">
            HillNest Stays isn't just a destination — it's a feeling. A place
            where the noise of the world fades away and peace takes center
            stage. Come for the view, stay for the experience.
          </p>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-8 md:px-16 bg-[#F1EDE6]">
        <h2 className="text-3xl md:text-4xl font-serif text-center mb-12 text-[#0e1732]">
          Our Rooms
        </h2>
        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 font-serif">
          {[
            {
              title: "Deluxe Room",
              image:
                "https://images.unsplash.com/photo-1729605411476-defbdab14c54?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0",
              desc: "Modern room with king-size bed, balcony & great views.",
              detail:
                "Enjoy a peaceful retreat with plush bedding, private balcony, and panoramic views of lush surroundings — perfect for a romantic escape or solo reset.",
            },
            {
              title: "Suite",
              image:
                "https://images.unsplash.com/photo-1590490359854-dfba19688d70?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0",
              desc: "Spacious suite with living area, luxury bath & amenities.",
              detail:
                "Our suites offer indulgence and privacy. Unwind in a separate living space, soak in a lavish tub, and enjoy premium amenities for a luxurious stay.",
            },
            {
              title: "Family Room",
              image:
                "https://images.unsplash.com/photo-1560448204-603b3fc33ddc?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0",
              desc: "Comfortable room perfect for families, with extra beds.",
              detail:
                "Designed for comfort and bonding, our family rooms feature extra sleeping space, cozy furnishings, and easy access to resort activities for all ages.",
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
                <h3 className="text-xl font-semibold font-serif mb-2 text-gray-800 group-hover:text-teal-600 transition">
                  {room.title}
                </h3>
                <p className="text-gray-600 font-serif text-[18px]">
                  {room.desc}
                </p>
                <p className="text-[16px] text-gray-700 mt-2 ">{room.detail}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
