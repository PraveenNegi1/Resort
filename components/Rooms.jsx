"use client";

import Image from "next/image";
import { FaWifi, FaBath, FaTv, FaSnowflake } from "react-icons/fa";

export default function RoomsPage() {
  const rooms = [
    {
      id: 1,
      title: "Cozy Deluxe Room",
      description: "A beautiful room with mountain views, perfect for couples.",
      price: 3500,
      imageUrl: "/api/placeholder/800/600",
      amenities: ["wifi", "bath", "tv", "ac"],
    },
    {
      id: 2,
      title: "Executive Suite",
      description:
        "Spacious suite with separate living area and premium amenities.",
      price: 3100,
      imageUrl: "/api/placeholder/800/600",
      amenities: ["wifi", "bath", "tv", "ac"],
    },
    {
      id: 3,
      title: "Family Room",
      description:
        "Comfortable room with twin beds, ideal for families with children.",
      price: 2000,
      imageUrl: "/api/placeholder/800/600",
      amenities: ["wifi", "bath", "tv"],
    },
  ];

  const RoomCard = ({ room }) => {
    const { title, description, price, imageUrl, amenities } = room;

    return (
      <div className="bg-white rounded-2xl shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105 hover:shadow-xl">
        <div className="relative w-full h-64">
          <Image
            src={imageUrl}
            alt={title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
        </div>
        <div className="p-6 space-y-3">
          <h3 className="text-2xl font-bold text-gray-800">{title}</h3>
          <p className="text-gray-600">{description}</p>
          <div className="flex gap-4 text-gray-500 text-lg mt-3">
            {amenities.includes("wifi") && (
              <div className="flex flex-col items-center">
                <FaWifi className="text-blue-500" />
                <span className="text-xs mt-1">Wi-Fi</span>
              </div>
            )}
            {amenities.includes("bath") && (
              <div className="flex flex-col items-center">
                <FaBath className="text-blue-500" />
                <span className="text-xs mt-1">Bath</span>
              </div>
            )}
            {amenities.includes("tv") && (
              <div className="flex flex-col items-center">
                <FaTv className="text-blue-500" />
                <span className="text-xs mt-1">TV</span>
              </div>
            )}
            {amenities.includes("ac") && (
              <div className="flex flex-col items-center">
                <FaSnowflake className="text-blue-500" />
                <span className="text-xs mt-1">AC</span>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="container mx-auto py-12 px-4">
      <h1 className="text-4xl font-bold text-center mb-8">
        Our Luxurious Rooms
      </h1>
      <p className="text-gray-600 text-center max-w-2xl mx-auto mb-12">
        Experience comfort and elegance in our carefully designed rooms, each
        offering unique amenities to make your stay memorable.
      </p>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {rooms.map((room) => (
          <RoomCard key={room.id} room={room} />
        ))}
      </div>
    </div>
  );
}
