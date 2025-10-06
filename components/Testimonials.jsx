"use client";

import { useState, useEffect } from "react";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";

const StarRating = ({ rating }) => {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating - fullStars >= 0.5;
  const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

  return (
    <div className="flex justify-center items-center gap-1 my-4">
      {[...Array(fullStars)].map((_, i) => (
        <Star
          key={`full-${i}`}
          size={18}
          className="fill-yellow-400 text-yellow-400"
        />
      ))}
      {hasHalfStar && (
        <div className="relative">
          <Star size={18} className="text-gray-300" />
          <Star
            size={18}
            className="absolute top-0 left-0 fill-yellow-400 text-yellow-400 overflow-hidden"
            style={{ clipPath: "inset(0 50% 0 0)" }}
          />
        </div>
      )}
      {[...Array(emptyStars)].map((_, i) => (
        <Star key={`empty-${i}`} size={18} className="text-gray-300" />
      ))}
      <span className="ml-2 text-sm font-medium text-gray-600">{rating}</span>
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
      "Indulging in a luxurious retreat at a resort is akin to basking in a heavenly oasis. I had the pleasure of relishing such an experience recently, and it was a remarkable sojourn that exceeded all expectations.",
    position: "Business Executive",
  },
  {
    name: "Shweta Gupta",
    rating: 4.5,
    image:
      "https://images.unsplash.com/photo-1687180497323-0750d6fe0124?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    review:
      "Just exited from the property and I have only good things to say about this place. Absolutely beautiful, peaceful ambience and healthy + divine food like a perfect combination for a memorable stay.",
    position: "Travel Blogger",
  },
  {
    name: "Bharti Choudhary",
    rating: 4.0,
    image:
      "https://images.unsplash.com/photo-1583845112203-29329902332e?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    review:
      "We had a trip to the Inn in month of September and it was really pleasant experience. We weren't expecting an easy trip with a 4-month-old baby and a picky eater toddler, but the staff made it wonderful.",
    position: "Family Traveler",
  },
  {
    name: "Ramesh Verma",
    rating: 4.2,
    image:
      "https://images.unsplash.com/photo-1741506131058-533fcf894483?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    review:
      "Amazing stay! The environment was very welcoming and peaceful. The service and staff were outstanding. Every detail was perfectly managed. Highly recommend!",
    position: "Corporate Manager",
  },
  {
    name: "Nikita Sharma",
    rating: 5.0,
    image:
      "https://images.unsplash.com/photo-1746173098372-2e560f188b36?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    review:
      "A fantastic place to unwind. Loved the natural surroundings and food. The spa services were exceptional. Will visit again with family soon!",
    position: "Wellness Enthusiast",
  },
  {
    name: "Sanjay Kumar",
    rating: 4.6,
    image:
      "https://images.unsplash.com/photo-1687305143584-3720d56cd2c6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    review:
      "Great hospitality and clean rooms. Our stay was comfortable and enjoyable. The attention to detail was remarkable. Worth every penny spent!",
    position: "Frequent Traveler",
  },
];

const TestimonialsCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };
  const goToSlide = (index) => {
    setCurrentIndex(index);
  };
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const handleMouseEnter = () => setIsAutoPlaying(false);
  const handleMouseLeave = () => setIsAutoPlaying(true);

  return (
    <section className="relative py-20 bg-gradient-to-br from-slate-50 via-white to-blue-50 overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-32 h-32 bg-blue-200 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-purple-200 rounded-full blur-3xl"></div>
        <div className="absolute top-40 right-40 w-24 h-24 bg-pink-200 rounded-full blur-2xl"></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 relative z-10 font-serif">
        <div className="text-center mb-16">
          <h2 className="md:text-3xl text-2xl font-bold text-[#0e1732] mb-4 font-serif">
            What Our Guests Say
          </h2>
          <p className="text-xl text-gray-800 max-w-2xl mx-auto">
            Discover the experiences that make our resort truly special
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-[#0e1732] to-[#28418b] mx-auto mt-6 rounded-full"></div>
        </div>

        <div
          className="relative"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <div className="relative h-96 mb-8 overflow-hidden rounded-3xl">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-all duration-700 ease-in-out ${
                  index === currentIndex
                    ? "opacity-100 translate-x-0"
                    : index < currentIndex
                    ? "opacity-0 -translate-x-full"
                    : "opacity-0 translate-x-full"
                }`}
              >
                <div className="bg-[#0e1732] backdrop-blur-sm rounded-3xl p-8 h-full shadow-2xl border border-white/20">
                  <div className="flex flex-col lg:flex-row items-center h-full gap-8">
                    <div className="flex-shrink-0">
                      <div className="relative">
                        <div className="md:w-32 md:h-32 w-16 h-16 rounded-full overflow-hidden shadow-xl ring-4 ring-white">
                          <img
                            src={testimonial.image}
                            alt={testimonial.name}
                            className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                          />
                        </div>
                        <div className="absolute -top-2 -right-2 w-8 h-8 bg-white rounded-full flex items-center justify-center">
                          <Quote size={16} className="text-[#0e1732]" />
                        </div>
                      </div>
                    </div>

                    <div className="flex-1 text-center lg:text-left">
                      <div className="mb-4 ">
                        <h3 className="text-[16px] font-bold text-white mb-1">
                          {testimonial.name}
                        </h3>
                        <p className="text-sm text-white uppercase tracking-wide">
                          {testimonial.position}
                        </p>
                      </div>

                      <StarRating rating={testimonial.rating} />

                      <p className="text-white text-lg  text-[14px] md:text-[16px] max-w-2xl">
                        "{testimonial.review}"
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-center gap-3">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? "bg-[#0e1732] w-8"
                  : "bg-gray-300 hover:bg-gray-400"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsCarousel;
