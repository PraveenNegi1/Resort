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
    gsap.set(laptopRef.current, { rotateY: 90 });
    gsap.set(screenRef.current, { rotateX: 90 });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 80%",
        end: "top 20%",
        scrub: 1,
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
      laptopRef.current,
      {
        rotateY: 0,
        y: -5,
        duration: 1,
        ease: "power2.out",
      },
      0
    );

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
      ".laptop-shadow",
      {
        opacity: 0.5,
        scale: 1.2,
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
    <div className="font-serif bg-gradient-to-br from-teal-900/50 to-purple-900/80 ">
      
      <div className="text-center md:mb-12 pt-12">
        <h2 className="text-4xl font-bold text-gray-800 mb-4">
          HillNest Stays Hotels
        </h2>
        <p className="text-lg text-white max-w-2xl mx-auto">
          Experience luxury at its finest with stunning ocean views, world-class
          amenities, and unparalleled comfort at HillNest Stays Hotels.
        </p>
      </div>
      <div
        className="min-h-screen bg-white flex items-center justify-center md:py-20 md:mt-60 "
        ref={containerRef}
      >
        <div className="perspective-1440 w-full max-w-5xl px-4 ">
          <div className="text-center mb-8 text-gray-500">
            {scrollDirection === "down"
              ? "Scroll down to open laptop"
              : scrollDirection === "up"
              ? "Scroll up to close laptop"
              : "Scroll to animate laptop"}
          </div>

          <div className="relative w-[100%] max-w-5xl mx-auto">
            <div
              ref={laptopRef}
              className="relative w-full max-w-5xl mx-auto z-10"
            >
              <div className="" style={{ width: "90%" }}>
                <div className="absolute bottom-0 left-0 right-0 h-6 bg-gray-900 rounded-b-xl"></div>
              </div>

              <div className="laptop-shadow absolute -bottom-8 left-1/2 transform -translate-x-1/2 w-4/5 h-6 bg-black opacity-30 rounded-full blur-md"></div>
            </div>

            <div
              ref={screenRef}
              className="absolute bottom-[14px] left-0 right-0 mx-auto w-[90%] max-w-4xl aspect-video bg-gray-800 rounded-t-xl border-8 border-gray-800 transform origin-bottom"
              style={{
                transform: "rotateX(-90deg)",
                backfaceVisibility: "hidden",
              }}
            >
              <div className="relative w-full h-full bg-black overflow-hidden rounded">
                <div className="absolute top-1.5 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-gray-900 rounded-full z-20">
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-1 h-1 bg-gray-800 rounded-full"></div>
                </div>

                <video
                  ref={videoRef}
                  className="w-full h-full object-cover"
                  src="/vedio/hotelvideo1.mp4"
                  muted
                  loop
                  playsInline
                  onClick={handleManualPlay}
                ></video>
              </div>
            </div>
          </div>

          <div className="text-center mt-20 ">
            <a
              href="contact"
              className="inline-block bg-teal-600 text-white font-semibold py-3 px-6 rounded-lg hover:bg-teal-700 transition-colors"
            >
              Book Your Stay Now
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
