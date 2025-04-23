"use client";

import React, { useState, useEffect } from "react";
import { Search, Star, MapPin, Calendar, Users, Filter, X } from "lucide-react";

export default function RoomRental() {
  const [searchQuery, setSearchQuery] = useState("");
  const [priceRange, setPriceRange] = useState([0, 1000]);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [dateRange, setDateRange] = useState({ checkIn: "", checkOut: "" });
  const [guestCount, setGuestCount] = useState(1);
  const [showFilters, setShowFilters] = useState(false);
  const [selectedAmenities, setSelectedAmenities] = useState([]);
  const [allRooms, setAllRooms] = useState([
    {
      id: 1,
      title: "Royal Palace Hotel Room",
      description:
        "Experience regal luxury in this elegant room located in a heritage palace. Enjoy traditional decor with modern amenities.",
      price: 3000,
      location: "Udaipur, Rajasthan",
      rating: 4.8,
      reviews: 98,
      imageUrl:
        "https://images.unsplash.com/photo-1604147706286-7685a1b8bb52?auto=format&fit=crop&w=1170&q=80",
      amenities: ["WiFi", "A/C", "Restaurant", "Spa", "Lake view"],
      category: "Heritage",
      guests: 2,
      bedrooms: 1,
      beds: 1,
      baths: 1,
    },
    {
      id: 2,
      title: "Luxury Beach Resort Room",
      description:
        "Modern, ocean-facing room with private balcony. Perfect for a tropical getaway with access to the beach and resort facilities.",
      price: 3500,
      location: "Goa, India",
      rating: 4.7,
      reviews: 76,
      imageUrl:
        "https://images.unsplash.com/photo-1570985699190-3c0ec1ec0ed3?auto=format&fit=crop&w=1170&q=80",
      amenities: ["Pool", "WiFi", "Bar", "Beach access", "Room service"],
      category: "Beach",
      guests: 3,
      bedrooms: 1,
      beds: 2,
      baths: 1,
    },
    {
      id: 3,
      title: "Mountain View Cottage",
      description:
        "Serene cottage nestled in the Himalayas with breathtaking views and cozy interiors. Ideal for nature lovers.",
      price: 1800,
      location: "Manali, Himachal Pradesh",
      rating: 4.6,
      reviews: 85,
      imageUrl:
        "https://images.unsplash.com/photo-1578146826827-d4f969f7a2d0?auto=format&fit=crop&w=1170&q=80",
      amenities: ["Mountain view", "Fireplace", "WiFi", "Balcony", "Parking"],
      category: "Mountain",
      guests: 4,
      bedrooms: 2,
      beds: 3,
      baths: 2,
    },
    {
      id: 4,
      title: "Backwater Villa Stay",
      description:
        "Tranquil villa on the edge of Kerala's backwaters with traditional architecture and boat rides available.",
      price: 2200,
      location: "Alleppey, Kerala",
      rating: 4.9,
      reviews: 64,
      imageUrl:
        "https://images.unsplash.com/photo-1602853171652-2f1f0f1e267e?auto=format&fit=crop&w=1170&q=80",
      amenities: ["Boat access", "WiFi", "Breakfast included", "Garden", "A/C"],
      category: "Nature",
      guests: 2,
      bedrooms: 1,
      beds: 1,
      baths: 1,
    },
    {
      id: 5,
      title: "City Center Business Suite",
      description:
        "Comfortable and stylish suite in the heart of Bangalore, ideal for business travelers and techies.",
      price: 2600,
      location: "Bangalore, Karnataka",
      rating: 4.4,
      reviews: 70,
      imageUrl:
        "https://images.unsplash.com/photo-1581089781785-03dfc6d07d58?auto=format&fit=crop&w=1170&q=80",
      amenities: ["WiFi", "Desk", "Gym", "City view", "Room service"],
      category: "City",
      guests: 2,
      bedrooms: 1,
      beds: 1,
      baths: 1,
    },
    {
      id: 6,
      title: "Eco Jungle Retreat",
      description:
        "Sustainable eco-resort in the heart of a tropical jungle. Enjoy the peace and sounds of nature.",
      price: 2000,
      location: "Wayanad, Kerala",
      rating: 4.5,
      reviews: 55,
      imageUrl:
        "https://images.unsplash.com/photo-1552053831-71594a27632d?auto=format&fit=crop&w=1170&q=80",
      amenities: ["Nature trails", "Organic food", "WiFi", "Yoga deck"],
      category: "Eco",
      guests: 2,
      bedrooms: 1,
      beds: 1,
      baths: 1,
    },
    {
      id: 7,
      title: "Desert Camp Tent",
      description:
        "Luxury desert tent with cultural performances and star-lit dining experiences in the Thar Desert.",
      price: 1900,
      location: "Jaisalmer, Rajasthan",
      rating: 4.3,
      reviews: 60,
      imageUrl:
        "https://images.unsplash.com/photo-1608889176496-b1e407b8c5f9?auto=format&fit=crop&w=1170&q=80",
      amenities: ["Cultural show", "Desert safari", "Bonfire", "WiFi"],
      category: "Desert",
      guests: 2,
      bedrooms: 1,
      beds: 1,
      baths: 1,
    },
    {
      id: 8,
      title: "Tea Estate Bungalow",
      description:
        "Vintage bungalow set amid lush tea gardens. Relax in the colonial charm of the Nilgiris.",
      price: 2400,
      location: "Coonoor, Tamil Nadu",
      rating: 4.7,
      reviews: 48,
      imageUrl:
        "https://images.unsplash.com/photo-1626711074481-22dbec47dd7e?auto=format&fit=crop&w=1170&q=80",
      amenities: ["Tea estate tours", "Garden", "Fireplace", "WiFi"],
      category: "Countryside",
      guests: 4,
      bedrooms: 2,
      beds: 3,
      baths: 2,
    },
    {
      id: 9,
      title: "Riverside Yoga Retreat",
      description:
        "Peaceful stay along the Ganges with daily yoga sessions, organic meals, and spiritual vibes.",
      price: 2100,
      location: "Rishikesh, Uttarakhand",
      rating: 4.9,
      reviews: 92,
      imageUrl:
        "https://images.unsplash.com/photo-1560343090-f0409e92791a?auto=format&fit=crop&w=1170&q=80",
      amenities: ["Yoga classes", "Meditation hall", "River view", "WiFi"],
      category: "Spiritual",
      guests: 2,
      bedrooms: 1,
      beds: 1,
      baths: 1,
    },
    {
      id: 10,
      title: "Luxury Ski Resort Room",
      description:
        "Comfortable room with snow views and direct access to skiing in India's premier winter sports destination.",
      price: 3200,
      location: "Gulmarg, Jammu & Kashmir",
      rating: 4.6,
      reviews: 58,
      imageUrl:
        "https://images.unsplash.com/photo-1591887860273-1c661d9f93b2?auto=format&fit=crop&w=1170&q=80",
      amenities: ["Ski access", "Heater", "Mountain view", "WiFi"],
      category: "Mountain",
      guests: 2,
      bedrooms: 1,
      beds: 1,
      baths: 1,
    },
  ]);
  
  const [rooms, setRooms] = useState(allRooms);

  const categories = [
    "All",
    "Beach",
    "City",
    "Mountain",
    "Lake",
    "Desert",
    "Countryside",
    "Luxury",
    "Unique",
  ];

  const amenitiesList = [
    "WiFi",
    "Pool",
    "Kitchen",
    "A/C",
    "Washer",
    "Dryer",
    "Fireplace",
    "Hot tub",
    "Beach access",
    "Mountain view",
    "Lake access",
    "Gym",
    "Parking",
    "BBQ",
    "Ski access",
  ];

  useEffect(() => {
    let filtered = allRooms;

    if (searchQuery) {
      filtered = filtered.filter(
        (room) =>
          room.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
          room.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          room.description.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    if (selectedCategory !== "All") {
      filtered = filtered.filter((room) => room.category === selectedCategory);
    }

    filtered = filtered.filter(
      (room) => room.price >= priceRange[0] && room.price <= priceRange[1]
    );

    filtered = filtered.filter((room) => room.guests >= guestCount);

    if (selectedAmenities.length > 0) {
      filtered = filtered.filter((room) =>
        selectedAmenities.every((amenity) => room.amenities.includes(amenity))
      );
    }

    setRooms(filtered);
  }, [
    searchQuery,
    selectedCategory,
    priceRange,
    guestCount,
    selectedAmenities,
    allRooms,
  ]);

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  const handlePriceChange = (e) => {
    setPriceRange([0, parseInt(e.target.value)]);
  };

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
  };

  const handleCheckInChange = (e) => {
    setDateRange({ ...dateRange, checkIn: e.target.value });
  };

  const handleCheckOutChange = (e) => {
    setDateRange({ ...dateRange, checkOut: e.target.value });
  };

  const handleGuestChange = (e) => {
    setGuestCount(parseInt(e.target.value));
  };

  const toggleAmenity = (amenity) => {
    if (selectedAmenities.includes(amenity)) {
      setSelectedAmenities(selectedAmenities.filter((a) => a !== amenity));
    } else {
      setSelectedAmenities([...selectedAmenities, amenity]);
    }
  };

  const clearFilters = () => {
    setSearchQuery("");
    setPriceRange([0, 10000]);
    setSelectedCategory("All");
    setDateRange({ checkIn: "", checkOut: "" });
    setGuestCount(1);
    setSelectedAmenities([]);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8 bg-white rounded-lg shadow-md p-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search by location or title..."
              className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={searchQuery}
              onChange={handleSearch}
            />
          </div>

          <div className="flex space-x-2">
            <div className="relative flex-1">
              <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="date"
                placeholder="Check in"
                className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={dateRange.checkIn}
                onChange={handleCheckInChange}
              />
            </div>
            <div className="relative flex-1">
              <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="date"
                placeholder="Check out"
                className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={dateRange.checkOut}
                onChange={handleCheckOutChange}
              />
            </div>
          </div>

          <div className="relative">
            <Users className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <select
              className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 appearance-none"
              value={guestCount}
              onChange={handleGuestChange}
            >
              {[1, 2, 3, 4, 5, 6, 8, 10, 12].map((num) => (
                <option key={num} value={num}>
                  {num} {num === 1 ? "guest" : "guests"}
                </option>
              ))}
            </select>
            <div className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none">
              <svg
                className="h-5 w-5 text-gray-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </div>
          </div>

          <div className="flex space-x-2">
            <button
              className="flex items-center justify-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 flex-1"
              onClick={() => setShowFilters(!showFilters)}
            >
              <Filter className="w-4 h-4" />
              Filters
            </button>
            {(searchQuery ||
              selectedCategory !== "All" ||
              priceRange[1] < 1000 ||
              guestCount > 1 ||
              selectedAmenities.length > 0) && (
              <button
                className="flex items-center justify-center gap-2 px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-100"
                onClick={clearFilters}
              >
                <X className="w-4 h-4" />
                Clear
              </button>
            )}
          </div>
        </div>

        {showFilters && (
          <div className="mt-4 pt-4 border-t border-gray-200">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Price range (up to ₹{priceRange[1]})
                </label>
                <input
                  type="range"
                  min="0"
                  max="5000"
                  step="10"
                  value={priceRange[1]}
                  onChange={handlePriceChange}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Amenities
                </label>
                <div className="flex flex-wrap gap-2">
                  {amenitiesList.map((amenity) => (
                    <button
                      key={amenity}
                      className={`px-2 py-1 text-xs rounded-full border ${
                        selectedAmenities.includes(amenity)
                          ? "bg-blue-100 border-blue-500 text-blue-700"
                          : "border-gray-300 hover:bg-gray-100"
                      }`}
                      onClick={() => toggleAmenity(amenity)}
                    >
                      {amenity}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      <div className="flex overflow-x-auto pb-4 mb-6 space-x-2 scrollbar-hide">
        {categories.map((category) => (
          <button
            key={category}
            className={`px-4 py-2 rounded-full whitespace-nowrap ${
              selectedCategory === category
                ? "bg-blue-600 text-white"
                : "bg-gray-100 hover:bg-gray-200"
            }`}
            onClick={() => handleCategorySelect(category)}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="mb-4">
        <h2 className="text-xl font-semibold">
          {rooms.length} {rooms.length === 1 ? "place" : "places"} to stay
        </h2>
      </div>

      {rooms.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {rooms.map((room) => (
            <div
              key={room.id}
              className="flex flex-col rounded-lg overflow-hidden shadow-md transition-transform duration-300 hover:shadow-xl bg-white"
            >
              <div className="relative h-48 w-full">
                <img
                  src={room.imageUrl}
                  alt={room.title}
                  className="object-cover w-full h-full"
                />
                <div className="absolute top-3 left-3 bg-white px-2 py-1 rounded-full text-xs font-medium">
                  {room.category}
                </div>
              </div>
              <div className="p-4 flex-grow">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-semibold text-lg">{room.title}</h3>
                  <div className="flex items-center">
                    <Star
                      className="w-4 h-4 text-yellow-500 mr-1"
                      fill="currentColor"
                    />
                    <span className="text-sm">{room.rating}</span>
                  </div>
                </div>
                <p className="text-gray-600 text-sm mb-2 flex items-center">
                  <MapPin className="w-4 h-4 mr-1" /> {room.location}
                </p>
                <p className="text-gray-600 text-sm mb-2">
                  {room.guests} guests · {room.bedrooms} bedroom
                  {room.bedrooms !== 1 ? "s" : ""} · {room.beds} bed
                  {room.beds !== 1 ? "s" : ""} · {room.baths} bath
                  {room.baths !== 1 ? "s" : ""}
                </p>
                <p className="text-gray-700 text-sm mb-3 line-clamp-2">
                  {room.description}
                </p>
                <div className="flex flex-wrap gap-1 mb-3">
                  {room.amenities.slice(0, 3).map((amenity, index) => (
                    <span
                      key={index}
                      className="text-xs bg-gray-100 px-2 py-1 rounded"
                    >
                      {amenity}
                    </span>
                  ))}
                  {room.amenities.length > 3 && (
                    <span className="text-xs bg-gray-100 px-2 py-1 rounded">
                      +{room.amenities.length - 3} more
                    </span>
                  )}
                </div>
              </div>
              <div className="px-4 pb-4 mt-auto">
                <div className="flex justify-between items-center">
                  <div>
                    <span className="font-semibold"> ₹{room.price}</span>
                    <span className="text-gray-600 text-sm"> / night</span>
                  </div>
                  <button className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-1 rounded text-sm">
                    Book now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="p-8 text-center text-gray-500 bg-gray-50 rounded-lg">
          <div className="mb-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-12 h-12 mx-auto text-gray-400"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.182 16.318A4.486 4.486 0 0012.016 15a4.486 4.486 0 00-3.198 1.318M21 12a9 9 0 11-18 0 9 9 0 0118 0zM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75zm-.375 0h.008v.015h-.008V9.75zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75zm-.375 0h.008v.015h-.008V9.75z"
              />
            </svg>
          </div>
          <h3 className="text-lg font-medium mb-2">No matching rooms found</h3>
          <p>Try adjusting your search filters to see more results.</p>
          <button
            className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
            onClick={clearFilters}
          >
            Clear all filters
          </button>
        </div>
      )}
    </div>
  );
}
