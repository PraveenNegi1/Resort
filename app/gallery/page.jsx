"use client";
import Image from "next/image";
import { useState } from "react";
import { X, ChevronLeft, ChevronRight, ZoomIn } from "lucide-react";

const images = [
  "/room-galery/room1.jpg",
  "/room-galery/room2.jpg",
  "/room-galery/room3.jpg",
  "/room-galery/room4.jpg",
  "/room-galery/room5.jpg",
  "https://images.unsplash.com/photo-1653069045463-8cb48f193c8a?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1706811043117-ee9997840ac0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1611905964800-bb1cefa5a11a?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
];

const GalleryPage = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  const openLightbox = (index) => {
    setSelectedImage(index);
    setIsLightboxOpen(true);
  };

  const closeLightbox = () => {
    setIsLightboxOpen(false);
    setSelectedImage(null);
  };

  const nextImage = () => {
    setSelectedImage((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setSelectedImage((prev) => (prev - 1 + images.length) % images.length);
  };

  const getGridClasses = (index) => {
    const patterns = [
      "md:col-span-2 md:row-span-2",
      "md:col-span-1 md:row-span-1", 
      "md:col-span-1 md:row-span-2", 
      "md:col-span-2 md:row-span-1", 
      "md:col-span-1 md:row-span-1",
      "md:col-span-1 md:row-span-1", 
      "md:col-span-3 md:row-span-1", 
      "md:col-span-1 md:row-span-1", 
    ];
    return patterns[index % patterns.length];
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50 font-serif">
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse"></div>
      </div>

      <div className="relative z-10 px-4 py-16 sm:px-6 lg:px-12">
        <div className="pt-16">
          <div className="text-center mb-20">
            <div className="inline-block">
              <h1 className="text-5xl md:text-5xl font-bold bg-[#0e1732] bg-clip-text text-transparent mb-6 leading-tight">
                Visual Stories
              </h1>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-6 rounded-full"></div>
            </div>
            <p className="text-xl text-slate-800 max-w-2xl mx-auto leading-relaxed">
              Discover breathtaking moments captured through our lens. Each
              image tells a unique story waiting to be explored.
            </p>
          </div>

          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-4 md:gap-6 auto-rows-fr">
              {images.map((src, index) => (
                <div
                  key={index}
                  className={`group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer transform hover:scale-105 ${getGridClasses(
                    index
                  )}`}
                  onClick={() => openLightbox(index)}
                  style={{
                    backgroundImage: `url(${src})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    minHeight: "250px",
                  }}
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0">
                    <div className="text-center text-white">
                      <ZoomIn className="w-8 h-8 mx-auto mb-2 drop-shadow-lg" />
                      <p className="text-sm font-medium drop-shadow-lg">
                        View Full Size
                      </p>
                    </div>
                  </div>

                  <div className="absolute top-4 left-4 bg-white/20 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {index + 1}
                  </div>

                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {isLightboxOpen && (
        <div className="fixed inset-0 bg-black/95 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="relative max-w-5xl max-h-full">
            <button
              onClick={closeLightbox}
              className="absolute -top-12 right-0 text-white/80 hover:text-white transition-colors z-10"
            >
              <X className="w-8 h-8" />
            </button>

            <button
              onClick={prevImage}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white/80 hover:text-white transition-colors z-10 bg-black/20 backdrop-blur-sm rounded-full p-2"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={nextImage}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white/80 hover:text-white transition-colors z-10 bg-black/20 backdrop-blur-sm rounded-full p-2"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            <div className="relative">
              <Image
                src={images[selectedImage]}
                alt={`Gallery image ${selectedImage + 1}`}
                width={1200}
                height={800}
                className="max-w-full max-h-[80vh] object-contain rounded-lg shadow-2xl"
              />

              <div className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 text-white/80 text-sm">
                {selectedImage + 1} / {images.length}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default GalleryPage;
