"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import { X, ChevronLeft, ChevronRight, ZoomIn } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const images = [
  "/room-galery/room1.jpg",
  "/room-galery/room2.jpg",
  "/room-galery/room3.jpg",
  "/room-galery/room4.jpg",
  "/room-galery/room5.jpg",
  "https://images.unsplash.com/photo-1653069045463-8cb48f193c8a?q=80&w=1932&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1706811043117-ee9997840ac0?q=80&w=2070&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1611905964800-bb1cefa5a11a?q=80&w=1935&auto=format&fit=crop",
];

export default function GalleryPage() {
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!selectedImage && selectedImage !== 0) return;
      if (e.key === "ArrowRight") nextImage();
      if (e.key === "ArrowLeft") prevImage();
      if (e.key === "Escape") setSelectedImage(null);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedImage]);

  const openLightbox = (index) => setSelectedImage(index);
  const closeLightbox = () => setSelectedImage(null);

  const nextImage = () =>
    setSelectedImage((prev) => (prev + 1) % images.length);
  const prevImage = () =>
    setSelectedImage((prev) => (prev - 1 + images.length) % images.length);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50 font-serif">
      <div className="relative z-10 px-4 py-16 sm:px-6 lg:px-12 mt-10">
        <div className="text-center mb-20">
          <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-700 to-purple-600 bg-clip-text text-transparent mb-6">
            Visual Stories
          </h1>
          <p className="md:text-lg text-[16px]  text-slate-700 max-w-2xl mx-auto leading-relaxed">
            A visual journey through our finest rooms—designed for your ultimate
            comfort and luxury.
          </p>
        </div>

        <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 [column-fill:_balance]">
          {images.map((src, index) => (
            <motion.div
              key={index}
              className="mb-4 break-inside-avoid cursor-pointer overflow-hidden rounded-2xl shadow-md hover:shadow-xl transition"
              whileHover={{ scale: 1.02 }}
              onClick={() => openLightbox(index)}
            >
              <Image
                src={src}
                alt={`Gallery image ${index + 1}`}
                width={800}
                height={600}
                className="w-full h-auto object-cover"
              />
              <div className="p-3 bg-white">
                <p className="text-sm font-medium text-slate-700">
                  Image {index + 1}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedImage !== null && (
          <motion.div
            className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 text-white hover:text-red-400"
            >
              <X className="w-8 h-8" />
            </button>

            <button
              onClick={prevImage}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-white/80 hover:text-white bg-black/30 p-2 rounded-full"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={nextImage}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-white/80 hover:text-white bg-black/30 p-2 rounded-full"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            <motion.div
              key={selectedImage}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="max-w-5xl max-h-[80vh]"
            >
              <Image
                src={images[selectedImage]}
                alt={`Gallery image ${selectedImage + 1}`}
                width={1200}
                height={800}
                className="max-w-full max-h-[80vh] object-contain rounded-lg"
              />
              <p className="text-center mt-4 text-white/80 text-sm">
                {selectedImage + 1} / {images.length}
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
