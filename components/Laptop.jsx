"use client";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Ok from "./Dishes";

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
    <div className="font-serif bg-gradient-to-br">
      <div className="text-center md:mb-12 pt-12">
        <h2 className="text-4xl font-bold text-gray-800 mb-4">
          HillNest Stays Hotels
        </h2>
        <p className="text-lg text-black max-w-2xl mx-auto">
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



// "use client";
// import { useEffect, useRef, useState } from "react";

// export default function LaptopVideo() {
//   const containerRef = useRef(null);
//   const laptopRef = useRef(null);
//   const screenRef = useRef(null);
//   const videoRef = useRef(null);
//   const [videoError, setVideoError] = useState(false);
//   const [scrollProgress, setScrollProgress] = useState(0);
//   const [isVideoPlaying, setIsVideoPlaying] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       if (!containerRef.current) return;

//       const rect = containerRef.current.getBoundingClientRect();
//       const windowHeight = window.innerHeight;
      
//       // Calculate scroll progress based on element position
//       const elementTop = rect.top;
//       const elementHeight = rect.height;
      
//       // Trigger animation when element is 80% visible
//       const triggerPoint = windowHeight * 0.8;
      
//       let progress = 0;
//       if (elementTop < triggerPoint) {
//         progress = Math.min(1, (triggerPoint - elementTop) / (windowHeight * 0.6));
//       }
      
//       setScrollProgress(progress);
      
//       // Apply smooth laptop opening animation
//       if (laptopRef.current && screenRef.current) {
//         // Laptop base rotation (slight tilt for 3D effect)
//         const laptopRotateY = 15 - (progress * 15); // From 15deg to 0deg
//         const laptopTranslateY = -20 + (progress * 20); // Slight upward movement
        
//         // Screen opening animation (from closed to open)
//         const screenRotateX = -95 + (progress * 95); // From -95deg (closed) to 0deg (open)
        
//         // Apply transforms with smooth easing
//         laptopRef.current.style.transform = `
//           perspective(1200px) 
//           rotateY(${laptopRotateY}deg) 
//           rotateX(${5 - progress * 5}deg)
//           translateY(${laptopTranslateY}px)
//           scale(${0.85 + progress * 0.15})
//         `;
        
//         screenRef.current.style.transform = `
//           rotateX(${screenRotateX}deg)
//         `;
        
//         // Shadow effect
//         const shadow = containerRef.current.querySelector('.laptop-shadow');
//         if (shadow) {
//           shadow.style.opacity = progress * 0.6;
//           shadow.style.transform = `translateX(-50%) scale(${1 + progress * 0.5})`;
//           shadow.style.filter = `blur(${8 + progress * 4}px)`;
//         }
        
//         // Start video when laptop is 60% open
//         if (progress > 0.6 && !isVideoPlaying && videoRef.current) {
//           videoRef.current.play().catch((error) => {
//             console.log("Video autoplay prevented:", error);
//             setVideoError(true);
//           });
//           setIsVideoPlaying(true);
//         }
//       }
//     };

//     // Throttle scroll events for better performance
//     let ticking = false;
//     const throttledScroll = () => {
//       if (!ticking) {
//         requestAnimationFrame(() => {
//           handleScroll();
//           ticking = false;
//         });
//         ticking = true;
//       }
//     };

//     window.addEventListener('scroll', throttledScroll, { passive: true });
//     handleScroll(); // Initial call

//     return () => {
//       window.removeEventListener('scroll', throttledScroll);
//     };
//   }, [isVideoPlaying]);

//   const handleManualPlay = () => {
//     if (videoRef.current) {
//       videoRef.current
//         .play()
//         .then(() => {
//           setVideoError(false);
//           setIsVideoPlaying(true);
//         })
//         .catch((err) => {
//           console.error("Manual play failed:", err);
//         });
//     }
//   };

//   return (
//     <div className="font-serif bg-gradient-to-br from-slate-50 via-gray-50 to-slate-100 min-h-screen">
//       {/* Header Section */}
//       <div className="text-center pt-12 pb-8">
//         <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
//           HillNest Stays Hotels
//         </h2>
//         <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto px-4 leading-relaxed">
//           Experience luxury at its finest with stunning ocean views, world-class
//           amenities, and unparalleled comfort at HillNest Stays Hotels.
//         </p>
//       </div>

//       {/* Laptop Animation Section */}
//       <div
//         className="min-h-screen flex items-center justify-center py-20"
//         ref={containerRef}
//       >
//         <div className="w-full max-w-7xl px-4">
//           {/* Progress Indicator */}
//           <div className="text-center mb-12">
//             <div className="text-gray-500 mb-4 text-lg font-medium">
//               {scrollProgress < 0.1 ? "Scroll down to open laptop" : 
//                scrollProgress < 0.9 ? `Opening laptop... ${Math.round(scrollProgress * 100)}%` :
//                "Laptop opened! Enjoy the preview"}
//             </div>
//             <div className="w-full max-w-md mx-auto bg-gray-200 rounded-full h-3 shadow-inner">
//               <div 
//                 className="bg-gradient-to-r from-teal-500 to-teal-600 h-3 rounded-full transition-all duration-300 ease-out shadow-sm"
//                 style={{ width: `${scrollProgress * 100}%` }}
//               ></div>
//             </div>
//           </div>

//           {/* Laptop Container */}
//           <div className="relative w-full max-w-6xl mx-auto" style={{ perspective: '1800px' }}>
            
//             {/* Laptop Base */}
//             <div
//               ref={laptopRef}
//               className="relative w-full mx-auto transition-all duration-75 ease-out"
//               style={{
//                 transformStyle: 'preserve-3d',
//                 transform: 'perspective(1200px) rotateY(15deg) rotateX(5deg) translateY(-20px) scale(0.85)'
//               }}
//             >
//               {/* Laptop Bottom/Keyboard Section */}
//               <div className="w-full aspect-[16/9] bg-gradient-to-b from-gray-200 via-gray-300 to-gray-400 rounded-2xl relative shadow-2xl border border-gray-300">
//                 {/* Laptop Hinge Area */}
//                 <div className="absolute top-0 left-0 right-0 h-4 bg-gradient-to-b from-gray-400 to-gray-500 rounded-t-2xl shadow-inner"></div>
                
//                 {/* Keyboard Section */}
//                 <div className="absolute inset-6 top-8 bg-gradient-to-b from-gray-800 to-gray-900 rounded-xl shadow-inner">
//                   {/* Keyboard Keys Grid */}
//                   <div className="grid grid-cols-12 gap-1 p-4">
//                     {Array.from({ length: 48 }).map((_, i) => (
//                       <div key={i} className="aspect-square bg-gray-700 rounded-sm shadow-sm border border-gray-600 hover:bg-gray-600 transition-colors"></div>
//                     ))}
//                   </div>
                  
//                   {/* Spacebar */}
//                   <div className="absolute bottom-16 left-1/2 transform -translate-x-1/2 w-32 h-4 bg-gray-700 rounded shadow-sm border border-gray-600"></div>
                  
//                   {/* Trackpad */}
//                   <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 w-28 h-20 bg-gray-600 rounded-lg border border-gray-500 shadow-inner">
//                     <div className="absolute bottom-2 left-2 right-2 h-px bg-gray-500"></div>
//                   </div>
//                 </div>
                
//                 {/* Brand Logo */}
//                 <div className="absolute top-2 left-1/2 transform -translate-x-1/2 text-gray-600 text-base font-bold tracking-wider">
//                   HillNest
//                 </div>
                
//                 {/* Laptop Ports (Left Side) */}
//                 <div className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-1">
//                   <div className="w-1 h-3 bg-gray-800 rounded-r mb-2"></div>
//                   <div className="w-1 h-3 bg-gray-800 rounded-r mb-2"></div>
//                   <div className="w-1 h-2 bg-gray-800 rounded-r"></div>
//                 </div>
                
//                 {/* Laptop Ports (Right Side) */}
//                 <div className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-1">
//                   <div className="w-1 h-3 bg-gray-800 rounded-l mb-2"></div>
//                   <div className="w-1 h-4 bg-gray-800 rounded-l"></div>
//                 </div>
//               </div>

//               {/* Laptop Shadow */}
//               <div className="laptop-shadow absolute -bottom-8 left-1/2 transform -translate-x-1/2 w-4/5 h-12 bg-black opacity-0 rounded-full blur-lg transition-all duration-300"></div>
//             </div>

//             {/* Screen */}
//             <div
//               ref={screenRef}
//               className="absolute bottom-0 left-0 right-0 mx-auto w-full max-w-6xl aspect-[16/9] bg-gray-900 rounded-t-2xl transition-all duration-75 ease-out shadow-2xl"
//               style={{
//                 transformOrigin: 'bottom center',
//                 transform: 'rotateX(-95deg)',
//                 backfaceVisibility: 'hidden',
//                 transformStyle: 'preserve-3d'
//               }}
//             >
//               {/* Screen Outer Bezel */}
//               <div className="relative w-full h-full bg-gradient-to-b from-gray-800 to-gray-900 rounded-t-2xl p-6 shadow-inner border-2 border-gray-700">
//                 {/* Screen Inner Bezel */}
//                 <div className="relative w-full h-full bg-black rounded-lg overflow-hidden shadow-2xl">
//                   {/* Webcam */}
//                   <div className="absolute top-3 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-gray-900 rounded-full z-30 border-2 border-gray-700 shadow-lg">
//                     <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-gray-600 rounded-full"></div>
//                     <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-1 h-1 bg-blue-400 rounded-full opacity-80"></div>
//                   </div>

//                   {/* Brand Logo on Screen Bezel */}
//                   <div className="absolute top-2 right-4 text-gray-400 text-xs font-semibold tracking-wider">
//                     HillNest
//                   </div>

//                   {/* Screen Content */}
//                   <div className="w-full h-full bg-black rounded-lg relative overflow-hidden">
//                     {videoError ? (
//                       <div 
//                         className="w-full h-full bg-gradient-to-br from-teal-500 via-teal-600 to-blue-600 flex items-center justify-center cursor-pointer relative overflow-hidden"
//                         onClick={handleManualPlay}
//                       >
//                         {/* Background Pattern */}
//                         <div className="absolute inset-0 opacity-20">
//                           <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-white rounded-full blur-3xl"></div>
//                           <div className="absolute bottom-1/4 right-1/4 w-24 h-24 bg-white rounded-full blur-2xl"></div>
//                         </div>
                        
//                         <div className="text-center text-white z-10">
//                           <div className="w-20 h-20 mx-auto mb-6 bg-white bg-opacity-20 rounded-full flex items-center justify-center backdrop-blur-sm border border-white border-opacity-30 shadow-xl">
//                             <div className="w-0 h-0 border-l-8 border-l-white border-y-6 border-y-transparent ml-1"></div>
//                           </div>
//                           <p className="text-lg font-semibold mb-2">HillNest Hotel Preview</p>
//                           <p className="text-sm opacity-90">Click to play video</p>
//                         </div>
//                       </div>
//                     ) : (
//                       <video
//                         ref={videoRef}
//                         className="w-full h-full object-cover cursor-pointer"
//                         src="/vedio/hotelvideo1.mp4"
//                         muted
//                         loop
//                         playsInline
//                         onClick={handleManualPlay}
//                         poster="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 300'%3E%3Crect width='400' height='300' fill='%23059669'/%3E%3Ctext x='200' y='150' text-anchor='middle' fill='white' font-size='18' font-family='Arial'%3EHillNest Hotel Preview%3C/text%3E%3C/svg%3E"
//                       />
//                     )}
                    
//                     {/* Screen Reflection Effect */}
//                     <div className="absolute inset-0 bg-gradient-to-br from-white via-transparent to-transparent opacity-5 pointer-events-none"></div>
//                   </div>
//                 </div>
                
//                 {/* Screen Status LED */}
//                 <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-green-400 rounded-full shadow-lg opacity-80"></div>
//               </div>
//             </div>
//           </div>

//           {/* Call to Action */}
//           <div className="text-center mt-20">
//             <a
//               href="contact"
//               className="inline-block bg-gradient-to-r from-teal-600 to-teal-700 text-white font-semibold py-4 px-10 rounded-xl hover:from-teal-700 hover:to-teal-800 transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl border border-teal-500"
//             >
//               Book Your Stay Now
//             </a>
//           </div>
//         </div>
//       </div>

//       {/* Additional content to enable scrolling */}
//       <div className="h-screen bg-gradient-to-br from-gray-100 to-slate-100 flex items-center justify-center">
//         <div className="text-center text-gray-700 max-w-2xl mx-auto px-4">
//           <h3 className="text-3xl font-bold mb-6 text-gray-800">Perfect Animation Experience</h3>
//           <p className="text-lg mb-4">Scroll back up to see the laptop closing animation</p>
//           <p className="text-gray-600">The laptop responds smoothly to your scroll direction with realistic 3D movement</p>
//         </div>
//       </div>
//     </div>
//   );
// }