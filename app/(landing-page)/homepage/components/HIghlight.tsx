import React, { useState, useEffect, useRef } from "react";
import { Play, Trophy } from "lucide-react";

interface Highlight {
  type: "video" | "image";
  src: string;
  thumbnail?: string;
  title: string;
  year: string;
  stat?: string;
  statLabel?: string;
  description: string;
  gradient: string;
}

export default function CareerHighlights() {
  const [selectedMedia, setSelectedMedia] = useState<Highlight | null>(null);
  const [visibleItems, setVisibleItems] = useState<number[]>([]);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    itemRefs.current.forEach((ref, index) => {
      if (ref) {
        const observer = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                setVisibleItems((prev) => [...new Set([...prev, index])]);
              } else {
                // Remove from visible when scrolling away
                setVisibleItems((prev) => prev.filter(i => i !== index));
              }
            });
          },
          { threshold: 0.2, rootMargin: '0px' }
        );

        observer.observe(ref);
        observers.push(observer);
      }
    });

    return () => {
      observers.forEach((observer) => observer.disconnect());
    };
  }, []);

const highlights: Highlight[] = [
  {
    type: "video",
    src: "/d1.mp4",
    thumbnail: "/thumbnail1.jpeg",
    title: "Viral Take 🎤",
    year: "2024",
    stat: "1M+",
    statLabel: "VIEWS",
    description: "One of Daniel Regha’s most talked-about commentaries that broke the internet.",
    gradient: "from-yellow-400 via-orange-500 to-red-600",
  },
  {
    type: "image",
    src: "/d9.jpeg",
    title: "Style Icon 👔",
    year: "2023",
    stat: "Top 10",
    statLabel: "FEATURE",
    description: "Featured on multiple fashion blogs for his unapologetic and authentic looks.",
    gradient: "from-purple-400 via-pink-500 to-rose-600",
  },
  {
    type: "video",
    src: "/d1.mp4",
    thumbnail: "/thumbnail2.jpeg",
    title: "Culture Talk 🎙️",
    year: "2023",
    stat: "500K+",
    statLabel: "ENGAGEMENTS",
    description: "Speaking on culture, influence, and authenticity in today’s social media space.",
    gradient: "from-blue-400 via-cyan-500 to-teal-600",
  },
  {
    type: "image",
    src: "/d8.jpeg",
    title: "Award Recognition 🏆",
    year: "2023",
    stat: "1st",
    statLabel: "HONOREE",
    description: "Honored for impact in online culture and public commentary.",
    gradient: "from-green-400 via-emerald-500 to-teal-600",
  },
  {
    type: "video",
    src: "/d1.mp4",
    thumbnail: "/thumbnail3.jpeg",
    title: "No Filter Ep. 🎬",
    year: "2022",
    stat: "Top 5",
    statLabel: "TRENDING TOPIC",
    description: "A clip from Daniel’s unfiltered thoughts that trended across platforms.",
    gradient: "from-red-400 via-rose-500 to-pink-600",
  },
  {
    type: "image",
    src: "/d3.jpeg",
    title: "Public Reactions 💬",
    year: "2022",
    stat: "100K+",
    statLabel: "COMMENTS",
    description: "His opinion that sparked nationwide debate and massive media reactions.",
    gradient: "from-indigo-400 via-purple-500 to-fuchsia-600",
  },
  {
    type: "video",
    src: "/d1.mp4",
    thumbnail: "/thumbnail4.jpeg",
    title: "Media Appearance 🎥",
    year: "2021",
    stat: "3+",
    statLabel: "INTERVIEWS",
    description: "Featured in several media houses and YouTube interviews sharing his vision.",
    gradient: "from-orange-400 via-red-500 to-pink-600",
  },
  {
    type: "image",
    src: "/d10.jpeg",
    title: "Brand Collab 🤝",
    year: "2021",
    stat: "5+",
    statLabel: "PARTNERSHIPS",
    description: "Collaborated with brands like Vipvendor.ng and other lifestyle projects.",
    gradient: "from-cyan-400 via-blue-500 to-indigo-600",
  },
];


  const getAnimationClass = (index: number): string => {
    const isVisible = visibleItems.includes(index);
    
    // Different animation directions for variety
    let animationClass = "";
    
    if (index % 4 === 0) {
      animationClass = "slide-in-left";
    } else if (index % 4 === 1) {
      animationClass = "slide-in-right";
    } else if (index % 4 === 2) {
      animationClass = "slide-in-bottom";
    } else {
      animationClass = "slide-in-top";
    }

    return isVisible ? animationClass : "opacity-0 translate-out";
  };

  return (
    <div className="min-h-screen bg-black text-white py-20 lg:py-48 px-6">
      {/* Header */}
      <div className="max-w-7xl mx-auto mb-16 text-center animate-fade-in">
        <h1 className="text-3xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-yellow-400 via-orange-500 to-red-600 bg-clip-text text-transparent">
          CAREER HIGHLIGHTS
        </h1>
        <p className="text-xl text-gray-400">
          Defining moments that shaped a legendary career
        </p>
      </div>

      {/* Bento Grid Layout */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 auto-rows-[300px]">
        {highlights.map((item, index) => {
          const isLarge = index === 0 || index === 4;
          const isMedium = index === 2 || index === 5;
          const spanClass = isLarge 
            ? "lg:col-span-2 lg:row-span-2" 
            : isMedium 
            ? "lg:col-span-2" 
            : "";

          return (
            <div
              key={index}
              ref={(el) => { itemRefs.current[index] = el; }}
              className={`group relative overflow-hidden rounded-2xl cursor-pointer ${spanClass} ${getAnimationClass(index)}`}
              style={{
                animationDelay: `${(index % 4) * 0.1}s`
              }}
              onClick={() => setSelectedMedia(item)}
            >
              {/* Background Media */}
              {item.type === "video" ? (
                <>
                  <video
                    src={item.src}
                    className="absolute inset-0 w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-110"
                    loop
                    muted
                    playsInline
                  />
                  {/* Play Button Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center bg-black/40 group-hover:bg-black/20 transition-all duration-300">
                    <div className="w-20 h-20 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Play className="w-10 h-10 text-white fill-white ml-1" />
                    </div>
                  </div>
                </>
              ) : (
                <img
                  src={item.src}
                  alt={item.title}
                  className="absolute inset-0 w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-110"
                />
              )}

              {/* Dark Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300" />

              {/* Colored Gradient Overlay on Hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-0 group-hover:opacity-30 transition-all duration-500 mix-blend-overlay`} />

              {/* Content Overlay */}
              <div className="absolute inset-0 p-6 flex flex-col justify-between">
                {/* Top Section - Year Badge */}
                <div className="flex justify-between items-start">
                  <div className={`inline-block px-4 py-2 rounded-full bg-gradient-to-r ${item.gradient} transform transition-all duration-300 group-hover:scale-110`}>
                    <span className="text-black font-bold text-xs tracking-wider">{item.year}</span>
                  </div>
                  
                  {/* Stat Number - Top Right */}
                  <div className="text-right">
                    <div className={`text-4xl md:text-5xl font-black bg-gradient-to-r ${item.gradient} bg-clip-text text-transparent mb-1 transform transition-all duration-300 group-hover:scale-110`}>
                      {item.stat}
                    </div>
                    <div className="text-xs tracking-wider text-gray-400 font-semibold">
                      {item.statLabel}
                    </div>
                  </div>
                </div>

                {/* Bottom Section */}
                <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="text-2xl md:text-3xl font-bold mb-2 line-clamp-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-300 opacity-0 group-hover:opacity-100 transition-opacity duration-300 line-clamp-2">
                    {item.description}
                  </p>
                </div>
              </div>

              {/* Border Effect */}
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-yellow-400 rounded-2xl transition-colors duration-300" />
              
              {/* Corner Glow Effect */}
              <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl ${item.gradient} opacity-0 group-hover:opacity-40 blur-2xl transition-opacity duration-500`} />
            </div>
          );
        })}
      </div>

      {/* Modal for Full View */}
      {selectedMedia && (
        <div
          className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-6 animate-fade-in"
          onClick={() => setSelectedMedia(null)}
        >
          <div
            className="relative max-w-6xl w-full animate-scale-in"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedMedia(null)}
              className="absolute -top-12 right-0 text-white text-4xl hover:text-yellow-400 transition-colors"
            >
              ×
            </button>

            {/* Media Content */}
            <div className="relative rounded-2xl overflow-hidden">
              {selectedMedia.type === "video" ? (
                <video
                  src={selectedMedia.src}
                  className="w-full h-auto max-h-[80vh] object-contain"
                  controls
                  autoPlay
                />
              ) : (
                <img
                  src={selectedMedia.src}
                  alt={selectedMedia.title}
                  className="w-full h-auto max-h-[80vh] object-contain"
                />
              )}
            </div>

            {/* Info Below Media */}
            <div className="mt-6 text-center">
              <div className="flex items-center justify-center gap-2 mb-2">
                <Trophy className="w-5 h-5 text-yellow-400" />
                <span className="text-yellow-400 font-semibold">{selectedMedia.year}</span>
              </div>
              <h2 className="text-3xl font-bold mb-2">{selectedMedia.title}</h2>
              <p className="text-gray-400">{selectedMedia.description}</p>
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-100px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(100px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes slideInBottom {
          from {
            opacity: 0;
            transform: translateY(100px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slideInTop {
          from {
            opacity: 0;
            transform: translateY(-100px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes scaleIn {
          from {
            opacity: 0;
            transform: scale(0.9);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        .animate-fade-in {
          animation: fadeIn 1s ease-out;
        }

        .slide-in-left {
          animation: slideInLeft 0.8s ease-out forwards;
        }

        .slide-in-right {
          animation: slideInRight 0.8s ease-out forwards;
        }

        .slide-in-bottom {
          animation: slideInBottom 0.8s ease-out forwards;
        }

        .slide-in-top {
          animation: slideInTop 0.8s ease-out forwards;
        }

        .animate-scale-in {
          animation: scaleIn 0.3s ease-out;
        }

        .translate-out {
          transition: all 0.3s ease-out;
        }
      `}</style>
    </div>
  );
}











// import React, { useState, useEffect, useRef } from "react";
// import { Play } from "lucide-react";

// export default function CareerHighlights() {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [isTransitioning, setIsTransitioning] = useState(false);
//   const [direction, setDirection] = useState('next');
//   const containerRef = useRef(null);
//   const touchStartX = useRef(0);
//   const touchEndX = useRef(0);

//   useEffect(() => {
//     const handleKeyPress = (e) => {
//       if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
//         handleNext();
//       } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
//         handlePrev();
//       }
//     };

//     window.addEventListener('keydown', handleKeyPress);
//     return () => window.removeEventListener('keydown', handleKeyPress);
//   }, [currentIndex]);

//   const highlights = [
//     {
//       type: "video",
//       src: "/maya1.mp4",
//       thumbnail: "/thumbnail1.jpeg",
//       title: "Championship Winning Goal",
//       year: "2024",
//       stat: "90+3'",
//       statLabel: "MINUTE",
//       description: "The moment that sealed the championship victory in extra time",
//       color: "from-yellow-400 to-orange-600"
//     },
//     {
//       type: "image",
//       src: "/maya8.jpeg",
//       title: "Golden Boot Celebration",
//       year: "2023",
//       stat: "52",
//       statLabel: "GOALS",
//       description: "Awarded top scorer of the season",
//       color: "from-purple-400 to-pink-600"
//     },
//     {
//       type: "video",
//       src: "/maya1.mp4",
//       thumbnail: "/thumbnail2.jpeg",
//       title: "Record Breaking Hat-trick",
//       year: "2023",
//       stat: "15'",
//       statLabel: "MINUTES",
//       description: "Three goals against top rivals",
//       color: "from-blue-400 to-cyan-600"
//     },
//     {
//       type: "image",
//       src: "/maya7.jpeg",
//       title: "Player of the Year",
//       year: "2023",
//       stat: "1st",
//       statLabel: "AWARD",
//       description: "Prestigious player of the year recognition",
//       color: "from-green-400 to-emerald-600"
//     },
//     {
//       type: "video",
//       src: "/maya1.mp4",
//       thumbnail: "/thumbnail3.jpeg",
//       title: "International Debut Goal",
//       year: "2022",
//       stat: "1st",
//       statLabel: "CAP",
//       description: "First goal for the national team",
//       color: "from-red-400 to-rose-600"
//     },
//     {
//       type: "image",
//       src: "/maya6.jpeg",
//       title: "Derby Victory",
//       year: "2022",
//       stat: "89'",
//       statLabel: "MINUTE",
//       description: "The decisive goal in historic derby",
//       color: "from-indigo-400 to-purple-600"
//     },
//     {
//       type: "video",
//       src: "/maya1.mp4",
//       thumbnail: "/thumbnail4.jpeg",
//       title: "Bicycle Kick Masterpiece",
//       year: "2021",
//       stat: "9.8",
//       statLabel: "RATING",
//       description: "One of the greatest goals in history",
//       color: "from-orange-400 to-red-600"
//     },
//     {
//       type: "image",
//       src: "/maya3.jpeg",
//       title: "Trophy Celebration",
//       year: "2021",
//       stat: "3rd",
//       statLabel: "TROPHY",
//       description: "Lifting the cup after incredible season",
//       color: "from-teal-400 to-blue-600"
//     }
//   ];

//   const handleNext = () => {
//     if (isTransitioning) return;
//     setDirection('next');
//     setIsTransitioning(true);
//     setTimeout(() => {
//       setCurrentIndex((prev) => (prev + 1) % highlights.length);
//       setIsTransitioning(false);
//     }, 600);
//   };

//   const handlePrev = () => {
//     if (isTransitioning) return;
//     setDirection('prev');
//     setIsTransitioning(true);
//     setTimeout(() => {
//       setCurrentIndex((prev) => (prev - 1 + highlights.length) % highlights.length);
//       setIsTransitioning(false);
//     }, 600);
//   };

//   const handleTouchStart = (e) => {
//     touchStartX.current = e.touches[0].clientX;
//   };

//   const handleTouchMove = (e) => {
//     touchEndX.current = e.touches[0].clientX;
//   };

//   const handleTouchEnd = () => {
//     if (touchStartX.current - touchEndX.current > 50) {
//       handleNext();
//     }
//     if (touchEndX.current - touchStartX.current > 50) {
//       handlePrev();
//     }
//   };

//   const currentHighlight = highlights[currentIndex];

//   return (
//     <div 
//       ref={containerRef}
//       className="fixed inset-0 bg-black overflow-hidden"
//       onTouchStart={handleTouchStart}
//       onTouchMove={handleTouchMove}
//       onTouchEnd={handleTouchEnd}
//     >
//       {/* Animated Background Gradient */}
//       <div className={`absolute inset-0 bg-gradient-to-br ${currentHighlight.color} opacity-20 transition-all duration-1000`} />
      
//       {/* Noise Texture Overlay */}
//       <div className="absolute inset-0 opacity-5" style={{
//         backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 400 400\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'4\' /%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\' /%3E%3C/svg%3E")',
//       }} />

//       {/* Main Content Container */}
//       <div className="relative h-full flex flex-col">
//         {/* Top Bar */}
//         <div className="absolute top-0 left-0 right-0 z-30 p-8 flex justify-between items-start">
//           <div className="space-y-1">
//             <div className="text-sm tracking-[0.3em] text-gray-400 font-light">CAREER HIGHLIGHTS</div>
//             <div className="text-6xl md:text-8xl font-black tracking-tighter text-white">
//               {String(currentIndex + 1).padStart(2, '0')}
//             </div>
//           </div>
//           <div className="text-right">
//             <div className={`text-5xl md:text-7xl font-black bg-gradient-to-r ${currentHighlight.color} bg-clip-text text-transparent mb-2`}>
//               {currentHighlight.stat}
//             </div>
//             <div className="text-xs tracking-[0.3em] text-gray-400 font-light">
//               {currentHighlight.statLabel}
//             </div>
//           </div>
//         </div>

//         {/* Media Section - Full Screen */}
//         <div className="flex-1 relative overflow-hidden">
//           <div className={`absolute inset-0 transition-all duration-700 ${
//             isTransitioning 
//               ? direction === 'next' 
//                 ? '-translate-x-full opacity-0' 
//                 : 'translate-x-full opacity-0'
//               : 'translate-x-0 opacity-100'
//           }`}>
//             {currentHighlight.type === "video" ? (
//               <video
//                 key={currentHighlight.src}
//                 src={currentHighlight.src}
//                 className="w-full h-full object-cover scale-110"
//                 loop
//                 muted
//                 autoPlay
//                 playsInline
//               />
//             ) : (
//               <img
//                 src={currentHighlight.src}
//                 alt={currentHighlight.title}
//                 className="w-full h-full object-cover scale-110"
//               />
//             )}
            
//             {/* Vignette Effect */}
//             <div className="absolute inset-0 bg-gradient-radial from-transparent via-transparent to-black opacity-60" />
//           </div>
//         </div>

//         {/* Bottom Info Panel */}
//         <div className="absolute bottom-0 left-0 right-0 z-30 p-8 md:p-12">
//           <div className="max-w-4xl">
//             {/* Year Badge */}
//             <div className={`inline-block px-4 py-2 rounded-full bg-gradient-to-r ${currentHighlight.color} mb-6 transform transition-all duration-500 ${
//               isTransitioning ? 'translate-y-8 opacity-0' : 'translate-y-0 opacity-100'
//             }`}>
//               <span className="text-black font-bold text-sm tracking-wider">{currentHighlight.year}</span>
//             </div>

//             {/* Title */}
//             <h1 className={`text-4xl md:text-7xl font-black text-white mb-4 leading-tight tracking-tight transition-all duration-500 delay-100 ${
//               isTransitioning ? 'translate-y-8 opacity-0' : 'translate-y-0 opacity-100'
//             }`}>
//               {currentHighlight.title}
//             </h1>

//             {/* Description */}
//             <p className={`text-lg md:text-2xl text-gray-300 font-light max-w-2xl transition-all duration-500 delay-200 ${
//               isTransitioning ? 'translate-y-8 opacity-0' : 'translate-y-0 opacity-100'
//             }`}>
//               {currentHighlight.description}
//             </p>
//           </div>
//         </div>

//         {/* Progress Dots */}
//         <div className="absolute bottom-8 right-8 z-30 flex gap-2">
//           {highlights.map((_, index) => (
//             <button
//               key={index}
//               onClick={() => {
//                 if (!isTransitioning && index !== currentIndex) {
//                   setDirection(index > currentIndex ? 'next' : 'prev');
//                   setIsTransitioning(true);
//                   setTimeout(() => {
//                     setCurrentIndex(index);
//                     setIsTransitioning(false);
//                   }, 600);
//                 }
//               }}
//               className={`transition-all duration-300 ${
//                 index === currentIndex 
//                   ? `w-12 h-2 bg-gradient-to-r ${currentHighlight.color}` 
//                   : 'w-2 h-2 bg-gray-600 hover:bg-gray-400'
//               } rounded-full`}
//             />
//           ))}
//         </div>

//         {/* Navigation Arrows */}
//         <button
//           onClick={handlePrev}
//           className="absolute left-8 top-1/2 -translate-y-1/2 z-30 w-14 h-14 rounded-full bg-white/10 backdrop-blur-md hover:bg-white/20 transition-all duration-300 flex items-center justify-center group"
//         >
//           <svg className="w-6 h-6 text-white group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
//           </svg>
//         </button>

//         <button
//           onClick={handleNext}
//           className="absolute right-8 top-1/2 -translate-y-1/2 z-30 w-14 h-14 rounded-full bg-white/10 backdrop-blur-md hover:bg-white/20 transition-all duration-300 flex items-center justify-center group"
//         >
//           <svg className="w-6 h-6 text-white group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
//           </svg>
//         </button>

//         {/* Play Icon for Videos */}
//         {currentHighlight.type === "video" && (
//           <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 transition-all duration-500 ${
//             isTransitioning ? 'scale-0 opacity-0' : 'scale-100 opacity-100'
//           }`}>
//             <div className="w-24 h-24 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center">
//               <Play className="w-12 h-12 text-white fill-white ml-2" />
//             </div>
//           </div>
//         )}
//       </div>

//       <style jsx>{`
//         .bg-gradient-radial {
//           background: radial-gradient(circle, var(--tw-gradient-stops));
//         }
//       `}</style>
//     </div>
//   );
// }










// import React, { useState, useEffect, useRef } from "react";
// import { Play, Award, Target, TrendingUp } from "lucide-react";

// export default function CareerHighlights() {
//   const [hoveredIndex, setHoveredIndex] = useState(null);
//   const [activeFilter, setActiveFilter] = useState('all');
//   const containerRef = useRef(null);

//   const highlights = [
//     {
//       type: "video",
//       src: "/maya1.mp4",
//       thumbnail: "/thumbnail1.jpeg",
//       title: "Championship Winning Goal",
//       year: "2024",
//       stat: "90+3'",
//       category: "goals",
//       description: "The moment that sealed the championship victory in extra time",
//       gradient: "from-amber-500 via-orange-500 to-red-500"
//     },
//     {
//       type: "image",
//       src: "/maya8.jpeg",
//       title: "Golden Boot Celebration",
//       year: "2023",
//       stat: "52 Goals",
//       category: "awards",
//       description: "Awarded top scorer of the season",
//       gradient: "from-purple-500 via-pink-500 to-rose-500"
//     },
//     {
//       type: "video",
//       src: "/maya1.mp4",
//       thumbnail: "/thumbnail2.jpeg",
//       title: "Record Breaking Hat-trick",
//       year: "2023",
//       stat: "15 Min",
//       category: "goals",
//       description: "Three goals against top rivals",
//       gradient: "from-blue-500 via-cyan-500 to-teal-500"
//     },
//     {
//       type: "image",
//       src: "/maya7.jpeg",
//       title: "Player of the Year",
//       year: "2023",
//       stat: "2023",
//       category: "awards",
//       description: "Prestigious player of the year recognition",
//       gradient: "from-emerald-500 via-green-500 to-lime-500"
//     },
//     {
//       type: "video",
//       src: "/maya1.mp4",
//       thumbnail: "/thumbnail3.jpeg",
//       title: "International Debut Goal",
//       year: "2022",
//       stat: "1st Cap",
//       category: "goals",
//       description: "First goal for the national team",
//       gradient: "from-red-500 via-rose-500 to-pink-500"
//     },
//     {
//       type: "image",
//       src: "/maya6.jpeg",
//       title: "Derby Victory",
//       year: "2022",
//       stat: "89'",
//       category: "goals",
//       description: "The decisive goal in historic derby",
//       gradient: "from-indigo-500 via-purple-500 to-fuchsia-500"
//     },
//     {
//       type: "video",
//       src: "/maya1.mp4",
//       thumbnail: "/thumbnail4.jpeg",
//       title: "Bicycle Kick Masterpiece",
//       year: "2021",
//       stat: "9.8",
//       category: "goals",
//       description: "One of the greatest goals in history",
//       gradient: "from-orange-500 via-red-500 to-pink-500"
//     },
//     {
//       type: "image",
//       src: "/maya3.jpeg",
//       title: "Trophy Celebration",
//       year: "2021",
//       stat: "3rd Trophy",
//       category: "awards",
//       description: "Lifting the cup after incredible season",
//       gradient: "from-cyan-500 via-blue-500 to-indigo-500"
//     }
//   ];

//   const filteredHighlights = activeFilter === 'all' 
//     ? highlights 
//     : highlights.filter(h => h.category === activeFilter);

//   return (
//     <div className="min-h-screen bg-gradient-to-b from-gray-950 via-gray-900 to-black text-white py-24 px-4 md:px-8">
//       {/* Floating Orbs Background */}
//       <div className="fixed inset-0 overflow-hidden pointer-events-none">
//         <div className="absolute top-20 left-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse" />
//         <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-700" />
//         <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
//       </div>

//       <div className="max-w-7xl mx-auto relative z-10">
//         {/* Section Header */}
//         <div className="text-center mb-16 space-y-6">
//           <div className="inline-block">
//             <div className="flex items-center gap-3 bg-white/5 backdrop-blur-xl border border-white/10 rounded-full px-6 py-3 mb-6">
//               <Award className="w-5 h-5 text-yellow-400" />
//               <span className="text-sm font-semibold tracking-wider uppercase">Career Defining Moments</span>
//             </div>
//           </div>
          
//           <h2 className="text-5xl md:text-7xl font-black tracking-tight">
//             <span className="bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent">
//               Legendary
//             </span>
//             <br />
//             <span className="bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 bg-clip-text text-transparent">
//               Highlights
//             </span>
//           </h2>
          
//           <p className="text-xl text-gray-400 max-w-2xl mx-auto font-light">
//             Relive the iconic moments that defined an extraordinary career
//           </p>

//           {/* Filter Buttons */}
//           <div className="flex flex-wrap justify-center gap-3 pt-8">
//             {[
//               { id: 'all', label: 'All Moments', icon: Target },
//               { id: 'goals', label: 'Goals', icon: TrendingUp },
//               { id: 'awards', label: 'Awards', icon: Award }
//             ].map((filter) => (
//               <button
//                 key={filter.id}
//                 onClick={() => setActiveFilter(filter.id)}
//                 className={`flex items-center gap-2 px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
//                   activeFilter === filter.id
//                     ? 'bg-gradient-to-r from-yellow-400 to-orange-500 text-black shadow-lg shadow-orange-500/50'
//                     : 'bg-white/5 backdrop-blur-xl border border-white/10 text-gray-300 hover:bg-white/10 hover:border-white/20'
//                 }`}
//               >
//                 <filter.icon className="w-4 h-4" />
//                 {filter.label}
//               </button>
//             ))}
//           </div>
//         </div>

//         {/* Modern Grid Layout */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//           {filteredHighlights.map((item, index) => (
//             <div
//               key={index}
//               ref={containerRef}
//               onMouseEnter={() => setHoveredIndex(index)}
//               onMouseLeave={() => setHoveredIndex(null)}
//               className="group relative aspect-[4/5] rounded-3xl overflow-hidden cursor-pointer transform transition-all duration-500 hover:scale-105 hover:z-20"
//               style={{
//                 animation: `fadeInUp 0.6s ease-out ${index * 0.1}s backwards`
//               }}
//             >
//               {/* Background Image/Video */}
//               <div className="absolute inset-0">
//                 {item.type === "video" ? (
//                   <video
//                     src={item.src}
//                     className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
//                     loop
//                     muted
//                     playsInline
//                   />
//                 ) : (
//                   <img
//                     src={item.src}
//                     alt={item.title}
//                     className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
//                   />
//                 )}
//               </div>

//               {/* Gradient Overlay */}
//               <div className={`absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent opacity-90 group-hover:opacity-70 transition-opacity duration-300`} />

//               {/* Colored Accent Overlay */}
//               <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-0 group-hover:opacity-30 transition-opacity duration-500 mix-blend-overlay`} />

//               {/* Content */}
//               <div className="absolute inset-0 p-6 flex flex-col justify-between">
//                 {/* Top Badge */}
//                 <div className="flex items-start justify-between">
//                   <div className={`px-4 py-2 rounded-full bg-gradient-to-r ${item.gradient} transform transition-all duration-300 ${
//                     hoveredIndex === index ? 'scale-110' : 'scale-100'
//                   }`}>
//                     <span className="text-black font-bold text-sm">{item.year}</span>
//                   </div>
                  
//                   {item.type === "video" && (
//                     <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center transform transition-all duration-300 group-hover:scale-110 group-hover:bg-white/30">
//                       <Play className="w-6 h-6 text-white fill-white ml-0.5" />
//                     </div>
//                   )}
//                 </div>

//                 {/* Bottom Content */}
//                 <div className="space-y-4 transform transition-all duration-300 group-hover:translate-y-0 translate-y-2">
//                   {/* Stat Display */}
//                   <div className={`text-6xl font-black bg-gradient-to-r ${item.gradient} bg-clip-text text-transparent`}>
//                     {item.stat}
//                   </div>

//                   {/* Title */}
//                   <h3 className="text-2xl font-bold leading-tight">
//                     {item.title}
//                   </h3>

//                   {/* Description - Shows on Hover */}
//                   <p className={`text-gray-300 text-sm leading-relaxed transition-all duration-300 ${
//                     hoveredIndex === index ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
//                   }`}>
//                     {item.description}
//                   </p>
//                 </div>
//               </div>

//               {/* Border Glow Effect */}
//               <div className={`absolute inset-0 rounded-3xl border-2 transition-all duration-300 ${
//                 hoveredIndex === index 
//                   ? `border-white/40 shadow-2xl shadow-white/20` 
//                   : 'border-transparent'
//               }`} />
//             </div>
//           ))}
//         </div>

//         {/* Bottom CTA */}
//         <div className="text-center mt-20">
//           <button className="group px-8 py-4 bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 rounded-full font-bold text-black text-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-orange-500/50">
//             View Full Career Stats
//             <span className="inline-block ml-2 transition-transform duration-300 group-hover:translate-x-2">→</span>
//           </button>
//         </div>
//       </div>

//       <style jsx>{`
//         @keyframes fadeInUp {
//           from {
//             opacity: 0;
//             transform: translateY(40px);
//           }
//           to {
//             opacity: 1;
//             transform: translateY(0);
//           }
//         }

//         @keyframes pulse {
//           0%, 100% {
//             opacity: 0.4;
//             transform: scale(1);
//           }
//           50% {
//             opacity: 0.6;
//             transform: scale(1.1);
//           }
//         }

//         .animate-pulse {
//           animation: pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite;
//         }

//         .delay-700 {
//           animation-delay: 700ms;
//         }

//         .delay-1000 {
//           animation-delay: 1000ms;
//         }
//       `}</style>
//     </div>
//   );
// }









