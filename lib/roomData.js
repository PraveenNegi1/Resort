// lib/roomData.js
export const rooms = [
  {
    id: "deluxe-room",
    name: "Deluxe Room",
    description: "Spacious room with mountain view and modern amenities.",
    detailedDescription:
      "The Deluxe Room offers a blend of comfort and elegance. Enjoy the serene mountain views from your private balcony while relaxing in a plush king-sized bed. Equipped with all modern amenities including high-speed WiFi, a flat-screen TV, and air conditioning. Ideal for couples or solo travelers seeking a relaxing escape.",
    price: 2500,
    amenities: ["WiFi", "TV", "AC", "Balcony"],
    features: [
      "Mountain-facing balcony",
      "En-suite modern bathroom",
      "24-hour room service",
      "Complimentary breakfast",
    ],
    image:
      "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    images: [
      "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://source.unsplash.com/800x600/?hotel-balcony",
      "https://source.unsplash.com/800x600/?hotel-bathroom",
      "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ],
  },
  {
    id: "luxury-suite",
    name: "Luxury Suite",
    description: "Elegant suite with private terrace and premium facilities.",
    detailedDescription:
      "The Luxury Suite offers an expansive layout with luxurious furnishings, a private terrace, and top-of-the-line amenities. Ideal for guests seeking privacy and indulgence.",
    price: 4500,
    amenities: ["WiFi", "TV", "Mini Bar", "Private Terrace"],
    features: [
      "Private terrace with seating",
      "Spacious living area",
      "Premium toiletries",
      "Complimentary fruit basket",
    ],
    image:
      "https://images.unsplash.com/photo-1612965607446-25e1332775ae?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    images: [
      "https://source.unsplash.com/800x600/?luxury-suite",
      "https://source.unsplash.com/800x600/?terrace-view",
      "https://source.unsplash.com/800x600/?hotel-livingroom",
      "https://source.unsplash.com/800x600/?premium-bathroom",
    ],
  },
  {
    id: "standard-room",
    name: "Standard Room",
    description: "Comfortable and budget-friendly with essential features.",
    detailedDescription:
      "Ideal for solo travelers or short stays, the Standard Room offers comfort with basic amenities at an affordable rate.",
    price: 1800,
    amenities: ["WiFi", "TV", "Fan"],
    features: [
      "Comfortable double bed",
      "Compact bathroom",
      "Work desk",
      "Daily housekeeping",
    ],
    image:
      "https://images.unsplash.com/photo-1677568554453-ae5baf28da6c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    images: [
      "https://source.unsplash.com/800x600/?standard-room",
      "https://images.unsplash.com/photo-1677568554453-ae5baf28da6c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://source.unsplash.com/800x600/?hotel-bathroom",
      "https://source.unsplash.com/800x600/?hotel-interior",
    ],
  },
  {
    id: "executive-room",
    name: "Executive Room",
    description:
      "Perfect for business travelers with work desk and free coffee.",
    detailedDescription:
      "Tailored for business guests, the Executive Room features a dedicated work space, ergonomic chair, and complimentary coffee station for productivity on the go.",
    price: 3200,
    amenities: ["WiFi", "TV", "Work Desk", "Coffee Maker"],
    features: [
      "Dedicated work station",
      "Fast WiFi connection",
      "Complimentary beverages",
      "City view window",
    ],
    image:
      "https://images.unsplash.com/photo-1659277318898-9562d00c3b49?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    images: [
      "https://source.unsplash.com/800x600/?business-room",
      "https://source.unsplash.com/800x600/?office-desk",
      "https://source.unsplash.com/800x600/?hotel-coffee",
      "https://source.unsplash.com/800x600/?executive-lounge",
    ],
  },
  {
    id: "family-suite",
    name: "Family Suite",
    description: "Spacious suite ideal for families with separate living area.",
    detailedDescription:
      "Designed for families, this suite includes a separate living room, child-friendly amenities, and ample sleeping space.",
    price: 5000,
    amenities: ["WiFi", "TV", "Mini Kitchen", "Living Area"],
    features: [
      "Separate kid's area",
      "Two queen beds",
      "Mini kitchen with dining set",
      "Play zone access",
    ],
    image:
      "https://images.unsplash.com/photo-1698870157085-11632d2ddef8?q=80&w=1976&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    images: [
      "/family2.jpg",
      "https://source.unsplash.com/800x600/?hotel-living-area",
      "https://source.unsplash.com/800x600/?mini-kitchen",
      "https://source.unsplash.com/800x600/?kids-bed",
    ],
  },
  {
    id: "heritage-room",
    name: "Heritage Room",
    description:
      "Traditional decor with antique furnishings and vintage charm.",
    detailedDescription:
      "The Heritage Room offers a timeless experience with its antique furniture, hand-carved wooden interiors, and vintage lighting. Enjoy peaceful surroundings in a room that reflects the history and culture of the region.",
    price: 3800,
    amenities: ["WiFi", "Fireplace", "Antique Decor", "Room Heater"],
    features: [
      "Vintage wooden flooring",
      "Handcrafted furniture",
      "Cultural artwork",
      "Heated bedding in winters",
    ],
    image:
      "https://images.unsplash.com/photo-1745816456001-009279ca7666?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    images: [
      "https://source.unsplash.com/800x600/?vintage-bedroom",
      "https://source.unsplash.com/800x600/?antique-room",
      "https://source.unsplash.com/800x600/?heritage-furniture",
      "https://source.unsplash.com/800x600/?cultural-decor",
    ],
  },
  {
    id: "riverfront-cabin",
    name: "Riverfront Cabin",
    description: "Wooden cabin with direct view and access to the river.",
    detailedDescription:
      "This cozy riverfront cabin offers tranquility and beautiful views. Built with eco-conscious wood, the cabin includes a porch where you can sip coffee with the soothing sound of flowing water.",
    price: 4200,
    amenities: ["WiFi", "River View", "Porch", "Natural Wood Interior"],
    features: [
      "Direct river access",
      "Eco-wood construction",
      "Private porch with seating",
      "Outdoor firepit area",
    ],
    image:
      "https://images.unsplash.com/photo-1666849077702-2caab3881c9e?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    images: [
      "https://source.unsplash.com/800x600/?cabin",
      "https://source.unsplash.com/800x600/?river-view",
      "https://source.unsplash.com/800x600/?wooden-interior",
      "https://source.unsplash.com/800x600/?cabin-porch",
    ],
  },
  {
    id: "loft-apartment",
    name: "Loft Apartment",
    description: "Urban-style loft apartment perfect for remote workers.",
    detailedDescription:
      "Designed for extended stays and remote working, the Loft Apartment features a mezzanine bed, high ceilings, modern kitchen, and ergonomic workspace. Ideal for digital nomads or small families.",
    price: 4800,
    amenities: ["WiFi", "Kitchen", "Workspace", "High Ceiling"],
    features: [
      "Double-height living room",
      "Dedicated work desk",
      "Fully equipped kitchen",
      "Smart home features",
    ],
    image:
      "https://images.unsplash.com/photo-1617817643768-8855fc457e3a?q=80&w=2126&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    images: [
      "https://source.unsplash.com/800x600/?loft",
      "https://source.unsplash.com/800x600/?home-office",
      "https://source.unsplash.com/800x600/?urban-living",
      "https://source.unsplash.com/800x600/?modern-kitchen",
    ],
  },
  {
    id: "forest-retreat",
    name: "Forest Retreat",
    description: "Hidden retreat in the woods with immersive nature views.",
    detailedDescription:
      "Stay close to nature in our Forest Retreat, where floor-to-ceiling windows bring the outside in. A perfect space for meditation, reading, and unwinding in seclusion.",
    price: 3700,
    amenities: ["WiFi", "Nature View", "Meditation Zone", "Wooden Deck"],
    features: [
      "360-degree forest view",
      "Private wooden deck",
      "Eco-friendly toiletries",
      "Silent zone",
    ],
    image:
      "https://images.unsplash.com/photo-1745894118353-88e64617e064?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    images: [
      "https://source.unsplash.com/800x600/?forest-view",
      "https://source.unsplash.com/800x600/?wood-deck",
      "https://source.unsplash.com/800x600/?retreat-room",
      "https://source.unsplash.com/800x600/?forest-interior",
    ],
  },
  {
    id: "rooftop-pod",
    name: "Rooftop Pod",
    description: "Compact futuristic pod with sky views and smart features.",
    detailedDescription:
      "The Rooftop Pod is a tech lover&apos;s dream. With a domed glass ceiling, automated controls, and minimalist design, it offers a modern escape with comfort and style.",
    price: 3000,
    amenities: ["WiFi", "Smart Lights", "Glass Ceiling", "Compact Kitchenette"],
    features: [
      "360-degree rooftop view",
      "Fully automated blinds and lights",
      "Compact modern design",
      "Soundproof walls",
    ],
    image:
      "https://images.unsplash.com/photo-1469964062538-06fad433a132?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    images: [
      "https://images.unsplash.com/photo-1662204476703-5a7cbc60dfdf?q=80&w=1978&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1469964062538-06fad433a132?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://source.unsplash.com/800x600/?glass-ceiling",
      "https://source.unsplash.com/800x600/?futuristic-room",
    ],
  },
];
