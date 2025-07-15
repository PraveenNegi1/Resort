"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import {
  FaStar,
  FaStarHalfAlt,
  FaRegStar,
  FaArrowLeft,
  FaArrowRight,
} from "react-icons/fa";

const StarRating = ({ rating }) => {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating - fullStars >= 0.25 && rating - fullStars < 0.75;
  const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

  return (
    <div className="flex justify-center text-yellow-500 my-2">
      {[...Array(fullStars)].map((_, i) => (
        <FaStar key={`full-${i}`} size={16} />
      ))}
      {hasHalfStar && <FaStarHalfAlt size={16} />}
      {[...Array(emptyStars)].map((_, i) => (
        <FaRegStar key={`empty-${i}`} size={16} />
      ))}
    </div>
  );
};

const testimonials = [
  {
    name: "Gopal Suhas",
    rating: 4.8,
    image:
      "https://images.unsplash.com/photo-1680503146476-abb8c752e1f4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0",
    review:
      "Indulging in a luxurious retreat at a resort is akin to basking in a heavenly oasis. I had the pleasure of relishing such an experience recently, and it was a remarkable sojourn...",
  },
  {
    name: "Shweta Gupta",
    rating: 4.5,
    image:
      "https://images.unsplash.com/photo-1687180497323-0750d6fe0124?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    review:
      "Just exited from the property and I have only good things to say about this place. Absolutely beautiful, peaceful ambience and healthy + divine food like a perfect combination...",
  },
  {
    name: "Bharti Choudhary",
    rating: 4.0,
    image:
      "https://images.unsplash.com/photo-1583845112203-29329902332e?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    review:
      "We had a trip to the Inn in month of September and it was really pleasant experience. We weren’t expecting an easy trip with a 4-month-old baby and a picky eater toddler...",
  },
  {
    name: "Ramesh Verma",
    rating: 4.2,
    image:
      "https://images.unsplash.com/photo-1741506131058-533fcf894483?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    review:
      "Amazing stay! The environment was very welcoming and peaceful. The service and staff were outstanding. Highly recommend!",
  },
  {
    name: "Nikita Sharma",
    rating: 5.0,
    image:
      "https://images.unsplash.com/photo-1746173098372-2e560f188b36?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    review:
      "A fantastic place to unwind. Loved the natural surroundings and food. Will visit again with family!",
  },
  {
    name: "Sanjay Kumar",
    rating: 4.6,
    image:
      "https://images.unsplash.com/photo-1687305143584-3720d56cd2c6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    review:
      "Great hospitality and clean rooms. Our stay was comfortable and enjoyable. Worth every penny!",
  },
];

const Testimonials = () => {
  const itemsPerPage = 3;
  const [currentPage, setCurrentPage] = useState(0);
  const totalPages = Math.ceil(testimonials.length / itemsPerPage);

  const handleNext = () => {
    setCurrentPage((prev) => (prev + 1) % totalPages);
  };

  const handlePrev = () => {
    setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 3000); 

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  const startIndex = currentPage * itemsPerPage;
  const currentTestimonials = testimonials.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  return (
    <section className="bg-white py-20 relative overflow-hidden">
      <h1 className="text-5xl text-[#0e1732] font-semibold text-center mb-32 font-serif tracking-wide">
        Testimonials
        <p className="w-20 h-1 mx-auto mt-2 bg-[#0e1732]" />
      </h1>

      <div className="flex flex-wrap justify-center gap-8 px-4 max-w-7xl mx-auto transition-all duration-500">
        {currentTestimonials.map((t, idx) => (
          <div
            key={idx}
            className="bg-[#F1EDE6] rounded-2xl p-6 shadow-md max-w-sm w-full text-center relative"
          >
            <div className="w-24 h-24 mx-auto -mt-20 rounded-full border-[6px] border-[#0e1732] overflow-hidden shadow-md">
              <Image
                src={t.image}
                alt={t.name}
                width={96}
                height={96}
                className="object-cover w-full h-full"
              />
            </div>
            <h2 className="text-xl font-medium mt-4 font-serif">{t.name}</h2>
            <StarRating rating={t.rating} />
            <p className="text-sm text-gray-600">{t.review}</p>
          </div>
        ))}
      </div>

      <div className="flex justify-center mt-12 gap-4">
        <button
          onClick={handlePrev}
          className="w-10 h-10 rounded-full border border-[#e3c79d] flex items-center justify-center hover:bg-[#e3c79d]/20 transition"
        >
          <FaArrowLeft />
        </button>
        <button
          onClick={handleNext}
          className="w-10 h-10 rounded-full border border-[#e3c79d] flex items-center justify-center hover:bg-[#e3c79d]/20 transition"
        >
          <FaArrowRight />
        </button>
      </div>
    </section>
  );
};

export default Testimonials;
