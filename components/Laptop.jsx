"use client";

import { useEffect, useRef, useState } from "react";

export default function LaptopVideo() {
  const containerRef = useRef(null);
  const laptopRef = useRef(null);
  const screenRef = useRef(null);
  const videoRef = useRef(null);
  const [videoError, setVideoError] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;

      const rect = containerRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // Calculate scroll progress based on element position
      const elementTop = rect.top;
      const elementHeight = rect.height;

      // Trigger animation when element is 80% visible
      const triggerPoint = windowHeight * 0.8;

      let progress = 0;
      if (elementTop < triggerPoint) {
        progress = Math.min(
          1,
          (triggerPoint - elementTop) / (windowHeight * 0.6)
        );
      }

      setScrollProgress(progress);

      // Apply smooth laptop opening animation
      if (laptopRef.current && screenRef.current) {
        // Laptop base rotation (slight tilt for 3D effect)
        const laptopRotateY = 15 - progress * 15; // From 15deg to 0deg
        const laptopTranslateY = -20 + progress * 20; // Slight upward movement

        // Screen opening animation (from closed to open)
        const screenRotateX = -95 + progress * 95; // From -95deg (closed) to 0deg (open)

        // Apply transforms with smooth easing
        laptopRef.current.style.transform = `
          perspective(1200px) 
          rotateY(${laptopRotateY}deg) 
          rotateX(${5 - progress * 5}deg)
          translateY(${laptopTranslateY}px)
          scale(${0.85 + progress * 0.15})
        `;

        screenRef.current.style.transform = `
          rotateX(${screenRotateX}deg)
        `;

        // Shadow effect
        const shadow = containerRef.current.querySelector(".laptop-shadow");
        if (shadow) {
          shadow.style.opacity = progress * 0.6;
          shadow.style.transform = `translateX(-50%) scale(${
            1 + progress * 0.5
          })`;
          shadow.style.filter = `blur(${8 + progress * 4}px)`;
        }

        // Start video when laptop is 60% open
        if (progress > 0.6 && !isVideoPlaying && videoRef.current) {
          videoRef.current.play().catch((error) => {
            console.log("Video autoplay prevented:", error);
            setVideoError(true);
          });
          setIsVideoPlaying(true);
        }
      }
    };

    // Throttle scroll events for better performance
    let ticking = false;
    const throttledScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", throttledScroll, { passive: true });
    handleScroll(); // Initial call

    return () => {
      window.removeEventListener("scroll", throttledScroll);
    };
  }, [isVideoPlaying]);

  const handleManualPlay = () => {
    if (videoRef.current) {
      videoRef.current
        .play()
        .then(() => {
          setVideoError(false);
          setIsVideoPlaying(true);
        })
        .catch((err) => {
          console.error("Manual play failed:", err);
        });
    }
  };

  return (
    <div className=" hidden md:block font-serif bg-white pb-20">
      <div className="text-center pt-20 pb-14">
        <h2 className="text-4xl md:text-5xl font-bold text-[#0e1732] mb-6">
          HillNest Stays Hotels
        </h2>
        <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto px-4 leading-relaxed">
          Experience luxury at its finest with stunning ocean views, world-class
          amenities, and unparalleled comfort at HillNest Stays Hotels.
        </p>
      </div>

      <div
        className="h-[100vh] flex items-center justify-center pt-28 "
        ref={containerRef}
      >
        <div className="w-full max-w-7xl px-4 mt-32">
          <div
            className="relative w-full max-w-5xl mx-auto mt-96"
            style={{ perspective: "2000px" }}
          >
            <div
              ref={laptopRef}
              className="relative w-full mx-auto transition-all duration-75 ease-out "
              style={{
                transformStyle: "preserve-3d",
                transform:
                  "perspective(1200px) rotateY(15deg) rotateX(5deg) translateY(-20px) scale(0.85)",
              }}
            >
              <div className="laptop-shadow absolute -bottom-4 transform translate-x-1/2 h-8 bg-black opacity-0 rounded-full blur-xl transition-all duration-300"></div>
            </div>

            <div
              ref={screenRef}
              className="absolute bottom-0 left-0 right-0 mx-auto w-full max-w-5xl h-[82vh] bg-gray-900 rounded-t-2xl transition-all duration-75 ease-out shadow-2xl"
              style={{
                transformOrigin: "bottom center",
                transform: "rotateX(-95deg)",
                backfaceVisibility: "hidden",
                transformStyle: "preserve-3d",
              }}
            >
              <div className="relative w-full h-full  rounded-t-2xl p-4  border-2 ">
                <div className="relative w-full h-full  rounded-lg overflow-hidden  ">
                  <div className="absolute top-0 left-0 right-0   flex items-center justify-center z-30">
                    <div className="relative w-6 h-4  mr-4">
                      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-gray-600 rounded-full">
                        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-1 h-1 bg-blue-400 rounded-full opacity-80"></div>
                      </div>
                    </div>

                    {/* Ambient Light Sensor */}
                    <div className="w-2 h-2 bg-gray-700 rounded-full mr-2 opacity-60"></div>
                  </div>

                  {/* Screen Content Area */}
                  <div className="absolute inset-0 top-8  rounded-b-lg overflow-hidden">
                    {videoError ? (
                      <div
                        className="w-full h-full  flex items-center justify-center cursor-pointer relative overflow-hidden"
                        onClick={handleManualPlay}
                      ></div>
                    ) : (
                      <video
                        ref={videoRef}
                        className="w-full h-full object-cover cursor-pointer"
                        src="/vedio/hotelvideo1.mp4"
                        muted
                        loop
                        playsInline
                        onClick={handleManualPlay}
                      />
                    )}

                    <div className="absolute inset-0 bg-gradient-to-br from-white via-transparent to-transparent opacity-10 pointer-events-none"></div>

                    <div className="absolute inset-0 border border-gray-700 rounded-b-lg pointer-events-none"></div>
                  </div>
                </div>
              </div>
              <div className="absolute bottom-0 left-1/2  text-white text-xs  tracking-wider z-30">
                HillNest
              </div>
            </div>
          </div>
          <div className=" bottom-0 left-0 right-0 h-6  bg-gray-900 rounded-b-xl"></div>
        </div>
      </div>
    </div>
  );
}
