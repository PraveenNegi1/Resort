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
    offset: ["start start", "end end"],
  });

  // Laptop animations
  const laptopRotateY = useTransform(scrollYProgress, [0, 1], [15, 0]);
  const laptopRotateX = useTransform(scrollYProgress, [0, 1], [5, 0]);
  const laptopTranslateY = useTransform(scrollYProgress, [0, 1], [-20, 0]);
  const laptopScale = useTransform(scrollYProgress, [0, 1], [0.85, 1]);
  const screenRotateX = useTransform(scrollYProgress, [0, 1], [-95, 0]);

  const shadowOpacity = useTransform(scrollYProgress, [0, 1], [0, 0.6]);
  const shadowScale = useTransform(scrollYProgress, [0, 1], [1, 1.5]);
  const shadowBox = useTransform(
    scrollYProgress,
    [0, 1],
    ["0px 6px 8px rgba(0,0,0,0)", "0px 18px 36px rgba(0,0,0,0.45)"]
  );

  useEffect(() => {
    const unsubscribe = scrollYProgress.on("change", (v) => {
      if (v > 0.1 && videoRef.current && videoRef.current.paused) {
        videoRef.current
          .play()
          .then(() => setIsVideoPlaying(true))
          .catch(() => setVideoError(true));
      }
    });
    return () => unsubscribe && unsubscribe();
  }, [scrollYProgress]);

  useEffect(() => {
    if (videoRef.current && videoRef.current.paused) {
      videoRef.current
        .play()
        .then(() => setIsVideoPlaying(true))
        .catch(() => setVideoError(true));
    }
  }, []);

  return (
    <section ref={containerRef} className="relative h-[210vh] bg-white">
      <div className="sticky top-0 h-screen flex flex-col justify-center items-center">
        <div className="font-serif bg-white pt-28 w-full">
         
          <div className="hidden md:flex h-[100vh] items-center justify-center">
            <div className="w-full max-w-7xl px-4 mt-32">
              <div
                className="relative w-full max-w-7xl mx-auto mt-80"
                style={{ perspective: "2400px" }}
              >
                {/* Laptop base */}
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

                <motion.div
                  style={{
                    rotateX: screenRotateX,
                    transformOrigin: "bottom center",
                    backfaceVisibility: "hidden",
                    transformStyle: "preserve-3d",
                  }}
                  className="absolute bottom-0 left-0 right-0 mx-auto w-[630px] lg:w-[850px] xl:w-full max-w-5xl lg:h-[550px] md:h-[400px] bg-gray-800 rounded-t-2xl shadow-2xl"
                >
                  <div className="relative w-full h-full rounded-t-2xl p-4 border-2">
                    <div className="relative w-full h-full rounded-lg overflow-hidden">
                      {/* Laptop top bar */}
                      <div className="absolute top-0 left-0 right-0 flex items-center justify-center z-30">
                        <div className="relative w-6 h-4 mr-4">
                          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-gray-600 rounded-full">
                            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-1 h-1 bg-blue-400 rounded-full opacity-80"></div>
                          </div>
                        </div>
                        <div className="w-2 h-2 bg-gray-700 rounded-full mr-2 opacity-60"></div>
                      </div>

                      {/* Laptop video */}
                      <div className="absolute inset-0 top-8 rounded-b-lg overflow-hidden">
                        <video
                          ref={videoRef}
                          className="w-full h-full object-cover"
                          src="/vedio/hotelvideo1.mp4"
                          muted
                          loop
                          playsInline
                          autoPlay
                        />
                        <div className="absolute inset-0 bg-gradient-to-br from-white via-transparent to-transparent opacity-10 pointer-events-none"></div>
                        <div className="absolute inset-0 border border-gray-700 rounded-b-lg pointer-events-none"></div>
                      </div>
                    </div>
                  </div>
                  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 text-white text-xs tracking-wider z-30">
                    HillNest
                  </div>
                </motion.div>
              </div>
              <div className="bottom-0 left-0 right-0 h-6 bg-gray-800 rounded-b-xl"></div>
            </div>
          </div>

          {/* Mobile Phone Design */}
          <div className="block md:hidden px-4">
            <div className="relative mx-auto w-[280px] h-[560px] rounded-3xl border-6 border-gray-800 shadow-xl bg-black overflow-hidden">
              <div className="absolute top-1 left-1/2 -translate-x-1/2 w-24 h-8 bg-gray-800 rounded-2xl z-20 flex items-center justify-center gap-2">
                <div className="w-3 h-3 bg-gray-800 rounded-full relative">
                  <div className="absolute inset-0 m-auto w-3 h-3 bg-white rounded-full opacity-70"></div>
                </div>
                <div className="w-2 h-2 bg-gray-700 rounded-full"></div>
              </div>

              <div className="absolute top-20 -left-4 w-1.5 h-12 bg-gray-700 rounded-r-md"></div>
              <div className="absolute top-40 -left-1 w-1.5 h-20 bg-gray-700 rounded-r-md"></div>
              <div className="absolute top-24 -right-1 w-1.5 h-16 bg-gray-700 rounded-l-md"></div>

              <video
                ref={videoRef}
                className="w-full h-full object-cover"
                src="/vedio/hotelvideo1.mp4"
                muted
                loop
                playsInline
                autoPlay
              />

              <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-24 h-1 bg-gray-700 rounded-full"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
