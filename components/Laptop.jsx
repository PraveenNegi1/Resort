"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function LaptopVideo() {
  const containerRef = useRef(null);
  const videoRef = useRef(null);
  const [videoError, setVideoError] = useState(false);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"], // span full section
  });

  // numeric MotionValues for transforms
  const laptopRotateY = useTransform(scrollYProgress, [0, 1], [15, 0]);
  const laptopRotateX = useTransform(scrollYProgress, [0, 1], [5, 0]);
  const laptopTranslateY = useTransform(scrollYProgress, [0, 1], [-20, 0]);
  const laptopScale = useTransform(scrollYProgress, [0, 1], [0.85, 1]);
  const screenRotateX = useTransform(scrollYProgress, [0, 1], [-95, 0]);

  // shadow properties
  const shadowOpacity = useTransform(scrollYProgress, [0, 1], [0, 0.6]);
  const shadowScale = useTransform(scrollYProgress, [0, 1], [1, 1.5]);
  const shadowBox = useTransform(
    scrollYProgress,
    [0, 1],
    ["0px 6px 8px rgba(0,0,0,0)", "0px 18px 36px rgba(0,0,0,0.45)"]
  );

  // play video once open enough — subscribe in useEffect and cleanup
  useEffect(() => {
    const unsubscribe = scrollYProgress.on("change", (v) => {
      if (v > 0.95 && !isVideoPlaying && videoRef.current) {
        videoRef.current
          .play()
          .then(() => setIsVideoPlaying(true))
          .catch(() => setVideoError(true));
      }
    });
    return () => unsubscribe && unsubscribe();
  }, [scrollYProgress, isVideoPlaying]);

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
    // 🔥 ADD this section wrapper for scroll space
    <section ref={containerRef} className="relative h-[200vh] bg-white">
      {/* 🔥 sticky wrapper keeps laptop pinned until open */}
      <div className="sticky top-0 h-screen flex flex-col justify-center items-center">
        <div className="hidden md:block font-serif bg-white pb-20 w-full">
          <div className="text-center pt-20 pb-14">
            <h1 className="text-4xl md:text-5xl font-bold text-[#0e1732] mb-6">
              HillNest Stays Hotels
            </h1>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto px-4 leading-relaxed">
              Experience luxury at its finest with stunning ocean views,
              world-class amenities, and unparalleled comfort at HillNest Stays
              Hotels.
            </p>
          </div>

          <div className="h-[100vh] flex items-center justify-center ">
            <div className="w-full max-w-7xl px-4 mt-32">
              <div
                className="relative w-full max-w-5xl mx-auto mt-80"
                style={{ perspective: "2000px" }}
              >
                {/* Laptop base (animated with MotionValues) */}
                <motion.div
                  style={{
                    rotateY: laptopRotateY,
                    rotateX: laptopRotateX,
                    translateY: laptopTranslateY,
                    scale: laptopScale,
                    transformStyle: "preserve-3d",
                  }}
                  className="relative w-full mx-auto"
                >
                  <motion.div
                    className="laptop-shadow absolute -bottom-4 left-1/2 h-8 bg-black rounded-full"
                    style={{
                      opacity: shadowOpacity,
                      scale: shadowScale,
                      x: "-50%",
                      boxShadow: shadowBox,
                    }}
                  />
                </motion.div>

                {/* Screen */}
                <motion.div
                  style={{
                    rotateX: screenRotateX,
                    transformOrigin: "bottom center",
                    backfaceVisibility: "hidden",
                    transformStyle: "preserve-3d",
                  }}
                  className="absolute bottom-0 left-0 right-0 mx-auto w-full max-w-5xl h-[82vh] bg-gray-900 rounded-t-2xl shadow-2xl"
                >
                  <div className="relative w-full h-full rounded-t-2xl p-4 border-2">
                    <div className="relative w-full h-full rounded-lg overflow-hidden">
                      <div className="absolute top-0 left-0 right-0 flex items-center justify-center z-30">
                        <div className="relative w-6 h-4 mr-4">
                          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-gray-600 rounded-full">
                            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-1 h-1 bg-blue-400 rounded-full opacity-80"></div>
                          </div>
                        </div>
                        <div className="w-2 h-2 bg-gray-700 rounded-full mr-2 opacity-60"></div>
                      </div>

                      <div className="absolute inset-0 top-8 rounded-b-lg overflow-hidden">
                        {videoError ? (
                          <div
                            className="w-full h-full flex items-center justify-center cursor-pointer bg-black"
                            onClick={handleManualPlay}
                          >
                            <p className="text-white text-sm">Click to Play</p>
                          </div>
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
                  <div className="absolute bottom-0 left-1/2 text-white text-xs tracking-wider z-30">
                    HillNest
                  </div>
                </motion.div>
              </div>

              <div className="bottom-0 left-0 right-0 h-6 bg-gray-900 rounded-b-xl"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
