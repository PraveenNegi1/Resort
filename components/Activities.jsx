"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const activities = [
  {
    title: "Mountain Trekking",
    description:
      "Explore scenic trails with guided trekking experiences in the Himalayas.",
    image: "/images/trekking.jpg",
  },
  {
    title: "Ayurvedic Spa",
    description:
      "Relax and rejuvenate with authentic Ayurvedic treatments at our luxury spa.",
    image: "/images/spa.jpg",
  },
  {
    title: "Cultural Evenings",
    description:
      "Enjoy traditional dance performances and local cuisine under the stars.",
    image: "/images/cultural.jpg",
  },
  {
    title: "River Rafting",
    description:
      "Experience the thrill of rafting in the Ganges or other thrilling rivers.",
    image: "/images/rafting.jpg",
  },
];

export default function ActivitiesPage() {
  return (
    <main className="px-6 py-12 bg-gray-100 min-h-screen">
      <h1 className="text-4xl md:text-5xl  font-serif text-center mb-12 text-gray-800">
        Activities
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {activities.map((activity, index) => (
          <motion.div
            key={index}
            className="bg-white rounded-2xl shadow-lg overflow-hidden"
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.3 }}
          >
            <Image
              src={activity.image}
              alt={activity.title}
              width={600}
              height={400}
              className="w-full h-56 object-cover"
            />
            <div className="p-6">
              <h2 className="text-xl font-semibold mb-2 font-serif">{activity.title}</h2>
              <p className="text-gray-600 font-serif">{activity.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </main>
  );
}
