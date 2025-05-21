"use client";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function LaptopVideo() {
  const containerRef = useRef(null);
  const laptopRef = useRef(null);
  const screenRef = useRef(null);
  const videoRef = useRef(null);
  const [videoError, setVideoError] = useState(false);
  const [scrollDirection, setScrollDirection] = useState(null);
  const lastScrollTop = useRef(0);

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 70%",
        end: "top 30%",
        scrub: true,
        markers: false,
        onUpdate: (self) => {
          const scrollTop =
            window.pageYOffset || document.documentElement.scrollTop;
          const direction = scrollTop > lastScrollTop.current ? "down" : "up";
          setScrollDirection(direction);
          lastScrollTop.current = scrollTop;

          if (direction === "down" && self.progress > 0.3 && videoRef.current) {
            videoRef.current.play().catch((error) => {
              console.log("Video autoplay prevented:", error);
              setVideoError(true);
            });
          }
        },
      },
    });

    tl.to(
      screenRef.current,
      {
        rotateX: 0,
        duration: 1,
        ease: "power2.out",
      },
      0
    );

    tl.to(
      laptopRef.current,
      {
        y: -5,
        duration: 0.5,
        ease: "power1.out",
      },
      0
    );

    tl.to(
      ".laptop-shadow",
      {
        opacity: 0.5,
        scale: 1.1,
        duration: 0.5,
      },
      0.2
    );

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  const handleManualPlay = () => {
    if (videoRef.current) {
      videoRef.current
        .play()
        .then(() => {
          setVideoError(false);
        })
        .catch((err) => {
          console.error("Manual play failed:", err);
        });
    }
  };

  return (
    <div
      className="min-h-screen bg-white flex items-center justify-center py-20 mt-80"
      ref={containerRef}
    >
      <div className="perspective-1000 w-full max-w-3xl px-4">
        <div className="text-center mb-8 text-gray-500">
          {scrollDirection === "down"
            ? "Scroll down to open laptop"
            : scrollDirection === "up"
            ? "Scroll up to close laptop"
            : "Scroll to animate laptop"}
        </div>

        <div className="relative w-[100%] max-w-2xl mx-auto">
          <div
            ref={laptopRef}
            className="relative w-full max-w-2xl mx-auto z-10"
          >
            <div className="" style={{ width: "90%" }}>
              <div className="absolute bottom-0 left-0 right-0 h-5 bg-gray-900 rounded-b-xl"></div>
            </div>

            <div className="laptop-shadow absolute -bottom-6 left-1/2 transform -translate-x-1/2 w-4/5 h-4 bg-black opacity-30 rounded-full blur-md"></div>
          </div>

          <div
            ref={screenRef}
            className="absolute bottom-[12px] left-0 right-0 mx-auto w-[90%] max-w-2xl aspect-video bg-gray-800 rounded-t-xl border-8 border-gray-800 transform origin-bottom"
            style={{
              transform: "rotateX(90deg)",
              backfaceVisibility: "hidden",
            }}
          >
            <div className="relative w-full h-full bg-black overflow-hidden rounded">
              {/* Camera */}
              <div className="absolute top-1.5 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-gray-900 rounded-full z-20">
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-1 h-1 bg-gray-800 rounded-full"></div>
              </div>

              <video
                ref={videoRef}
                className="w-full h-full object-cover"
                src="/vedio/hotelsvideo.mp4"
                muted
                loop
                playsInline
              ></video>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
