"use client";

import { useState } from "react";
import { Star, Clock, Users, ChefHat, Wine, Coffee } from "lucide-react";

export default function HotelDiningArea() {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const categories = [
    { id: "all", name: "All Dishes", icon: ChefHat },
    { id: "appetizers", name: "Appetizers", icon: Wine },
    { id: "mains", name: "Main Course", icon: ChefHat },
    { id: "desserts", name: "Desserts", icon: Coffee },
  ];

  const dishes = [
    {
      id: 1,
      name: "Grilled Atlantic Salmon",
      category: "mains",
      price: "$32",
      description:
        "Fresh salmon grilled to perfection with herb butter, served with roasted vegetables and lemon risotto",
      image:
        "https://images.unsplash.com/photo-1467003909585-2f8a72700288?w=400&h=300&fit=crop",
      rating: 4.8,
      prepTime: "25 min",
      dietary: ["Gluten-Free", "High Protein"],
    },
    {
      id: 2,
      name: "Truffle Mushroom Risotto",
      category: "mains",
      price: "$28",
      description:
        "Creamy Arborio rice with wild mushrooms, truffle oil, and aged Parmesan cheese",
      image:
        "https://images.unsplash.com/photo-1476124369491-e7addf5db371?w=400&h=300&fit=crop",
      rating: 4.7,
      prepTime: "30 min",
      dietary: ["Vegetarian", "Gluten-Free"],
    },
    {
      id: 3,
      name: "Pan-Seared Duck Breast",
      category: "mains",
      price: "$38",
      description:
        "Succulent duck breast with cherry gastrique, fondant potato, and seasonal greens",
      image:
        "https://images.unsplash.com/photo-1544025162-d76694265947?w=400&h=300&fit=crop",
      rating: 4.9,
      prepTime: "35 min",
      dietary: ["High Protein"],
    },
    {
      id: 4,
      name: "Burrata Caprese",
      category: "appetizers",
      price: "$18",
      description:
        "Fresh burrata cheese with heirloom tomatoes, basil oil, and aged balsamic reduction",
      image:
        "https://images.unsplash.com/photo-1608897013039-887f21d8c804?w=400&h=300&fit=crop",
      rating: 4.6,
      prepTime: "10 min",
      dietary: ["Vegetarian", "Gluten-Free"],
    },
    {
      id: 5,
      name: "Seared Scallops",
      category: "appetizers",
      price: "$24",
      description:
        "Pan-seared sea scallops with cauliflower purée, pancetta crisps, and microgreens",
      image:
        "https://images.unsplash.com/photo-1599084993091-1cb5c0721cc6?w=400&h=300&fit=crop",
      rating: 4.8,
      prepTime: "15 min",
      dietary: ["Gluten-Free", "High Protein"],
    },
    {
      id: 6,
      name: "Chocolate Lava Cake",
      category: "desserts",
      price: "$14",
      description:
        "Warm chocolate cake with molten center, vanilla ice cream, and berry compote",
      image:
        "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=400&h=300&fit=crop",
      rating: 4.9,
      prepTime: "20 min",
      dietary: ["Vegetarian"],
    },
    {
      id: 7,
      name: "Crème Brûlée",
      category: "desserts",
      price: "$12",
      description:
        "Classic vanilla custard with caramelized sugar crust and fresh berries",
      image:
        "https://images.unsplash.com/photo-1551024506-0bccd828d307?w=400&h=300&fit=crop",
      rating: 4.7,
      prepTime: "15 min",
      dietary: ["Vegetarian", "Gluten-Free"],
    },
    {
      id: 8,
      name: "Wagyu Beef Tenderloin",
      category: "mains",
      price: "$65",
      description:
        "Premium Wagyu beef with roasted bone marrow, truffle mashed potatoes, and red wine jus",
      image:
        "https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=400&h=300&fit=crop",
      rating: 5.0,
      prepTime: "40 min",
      dietary: ["High Protein"],
    },
  ];

  const filteredDishes =
    selectedCategory === "all"
      ? dishes
      : dishes.filter((dish) => dish.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Hero Section */}
      <div className="relative h-96 bg-gradient-to-r from-amber-600 via-orange-600 to-red-600 overflow-hidden">
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
        <div className="relative z-10 flex items-center justify-center h-full text-center text-white px-4">
          <div>
            <h1 className="text-6xl font-bold mb-4 tracking-tight">
              The Grand <span className="text-amber-300">Dining</span>
            </h1>
            <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
              Experience culinary excellence in our award-winning restaurant
              featuring world-class cuisine
            </p>
            <div className="flex items-center justify-center space-x-8 text-sm">
              <div className="flex items-center space-x-2">
                <Star className="w-5 h-5 text-amber-300" />
                <span>Michelin Recommended</span>
              </div>
              <div className="flex items-center space-x-2">
                <Users className="w-5 h-5 text-amber-300" />
                <span>Fine Dining Experience</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Category Filter */}
      <div className="bg-slate-800 border-b border-slate-700">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => {
              const Icon = category.icon;
              return (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`flex items-center space-x-2 px-6 py-3 rounded-full transition-all duration-300 ${
                    selectedCategory === category.id
                      ? "bg-gradient-to-r from-amber-500 to-orange-500 text-white shadow-lg transform scale-105"
                      : "bg-slate-700 text-slate-300 hover:bg-slate-600 hover:text-white"
                  }`}
                >
                  <Icon className="w-5 h-5" />
                  <span className="font-medium">{category.name}</span>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Dishes Grid */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {filteredDishes.map((dish) => (
            <div
              key={dish.id}
              className="bg-slate-800 rounded-2xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-500 hover:transform hover:scale-105 group"
            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={dish.image}
                  alt={dish.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60"></div>
                <div className="absolute top-4 right-4 bg-black bg-opacity-70 rounded-full px-3 py-1">
                  <span className="text-amber-300 font-bold text-lg">
                    {dish.price}
                  </span>
                </div>
                <div className="absolute bottom-4 left-4 flex items-center space-x-2">
                  <div className="flex items-center space-x-1 bg-black bg-opacity-70 rounded-full px-2 py-1">
                    <Star className="w-4 h-4 text-amber-400 fill-current" />
                    <span className="text-white text-sm font-medium">
                      {dish.rating}
                    </span>
                  </div>
                  <div className="flex items-center space-x-1 bg-black bg-opacity-70 rounded-full px-2 py-1">
                    <Clock className="w-4 h-4 text-slate-300" />
                    <span className="text-white text-sm">{dish.prepTime}</span>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-amber-300 transition-colors duration-300">
                  {dish.name}
                </h3>
                <p className="text-slate-400 text-sm mb-4 leading-relaxed">
                  {dish.description}
                </p>

                {/* Dietary Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {dish.dietary.map((tag, index) => (
                    <span
                      key={index}
                      className="bg-gradient-to-r from-green-600 to-green-500 text-white text-xs px-2 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Order Button */}
                <button className="w-full bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-500 hover:to-orange-500 text-white font-semibold py-3 px-4 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
                  Order Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom CTA Section */}
      <div className="bg-gradient-to-r from-slate-800 to-slate-700 py-16">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-4xl font-bold text-white mb-6">
            Reserve Your{" "}
            <span className="text-amber-300">Culinary Journey</span>
          </h2>
          <p className="text-slate-300 text-lg mb-8 max-w-2xl mx-auto">
            Book your table today and indulge in an unforgettable dining
            experience crafted by our world-renowned chefs
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-500 hover:to-orange-500 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg">
              Make Reservation
            </button>
            <button className="border-2 border-amber-500 text-amber-300 hover:bg-amber-500 hover:text-white font-bold py-4 px-8 rounded-xl transition-all duration-300">
              View Full Menu
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
