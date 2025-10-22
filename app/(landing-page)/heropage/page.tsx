// import React, { useState, useRef, useEffect } from "react";

// export default function HeroPage() {
//   interface HeropageData {
//     title: string;
//     subtitle: string;
//     description: string;
//     image?: string;
//     video?: string;
//   }

//   const HeroData: HeropageData[] = [
//     {
//       title: "CAREER",
//       subtitle: "Highlights",
//       description: "Maya Singletary's highlights and achievements.",
//       video: "/maya1.mp4",
//     },
//     {
//       title: "URSU",
//       subtitle: "Water",
//       description:
//         "URSU is much more than water... It is an inspiration to drink health and a lifestyle.",
//       image: "/maya3.jpeg",
//     },
//     {
//       title: "CR7",
//       subtitle: "Fragrances",
//       description:
//         "Define your own legacy with the NEW fragrance, Maya Singletary Legacy.",
//       image: "/maya8.jpeg",
//     },
//     {
//       title: "Erakulis",
//       subtitle: "App",
//       description:
//         "ERAKULIS® is an all-in-one wellness experience for Fitness, Nutrition and Mental Balance.",
//       image: "/maya4.jpeg",
//     },
//     {
//       title: "CR7",
//       subtitle: "Fragrances",
//       description:
//         "Define your own legacy with the NEW fragrance, Maya Singletary Legacy.",
//       image: "/maya5.jpeg",
//     },
//     {
//       title: "URSU",
//       subtitle: "Water",
//       description:
//         "URSU is much more than water... It is an inspiration to drink health and a lifestyle.",
//       image: "/maya6.jpeg",
//     },
//   ];

//   const [activeIndex, setActiveIndex] = useState(0);
//   const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
//   const scrollRef = useRef<HTMLDivElement>(null);

//   // Determine which card should be expanded
//   const expandedIndex = hoveredIndex !== null ? hoveredIndex : 0;

//   // Handle scroll to detect active card on mobile
//   useEffect(() => {
//     const handleScroll = () => {
//       if (scrollRef.current) {
//         const scrollLeft = scrollRef.current.scrollLeft;
//         const cardWidth = scrollRef.current.offsetWidth;
//         const newIndex = Math.round(scrollLeft / cardWidth);
//         setActiveIndex(newIndex);
//       }
//     };

//     const scrollContainer = scrollRef.current;
//     if (scrollContainer) {
//       scrollContainer.addEventListener("scroll", handleScroll);
//       return () => scrollContainer.removeEventListener("scroll", handleScroll);
//     }
//   }, []);

//   return (
//     <div className="w-full mt-10 lg:mx-5">
//       <div
//         ref={scrollRef}
//         className="hero-page flex overflow-x-scroll lg:overflow-hidden snap-x snap-mandatory lg:snap-none scrollbar-hide px-5 gap-3 lg:items-center"
//       >
//         {HeroData.map((hero, index) => {
//           const isExpanded = index === expandedIndex;
          
//           return (
//             <div
//               key={index}
//               className={`relative flex-shrink-0 w-full overflow-hidden shadow-lg snap-center md:snap-start transition-all duration-700 ease-in-out ${
//                 isExpanded
//                   ? "lg:h-[85vh] lg:w-[calc(25%-0.75rem)]"
//                   : "lg:h-[60vh] lg:w-[calc(14.98%-0.75rem)]"
//               } h-[70vh]`}
//               style={{
//                 transitionProperty: "height, width",
//               }}
//               onMouseEnter={() => setHoveredIndex(index)}
//               onMouseLeave={() => setHoveredIndex(null)}
//             >
//               {/* Background Image or Video */}
//               {hero.video ? (
//                 <video
//                   src={hero.video}
//                   autoPlay
//                   loop
//                   muted
//                   playsInline
//                   className={`absolute inset-0 w-full h-full object-cover transition-all duration-700 ${
//                     isExpanded ? "grayscale-0" : "grayscale-70"
//                   }`}
//                 />
//               ) : (
//                 <img
//                   src={hero.image}
//                   alt={hero.subtitle}
//                   className={`absolute inset-0 w-full h-full object-cover transition-all duration-700 ${
//                     isExpanded ? "grayscale-0" : "grayscale-70"
//                   }`}
//                 />
//               )}

//               {/* Overlay (dark gradient) */}
//               <div
//                 className={`absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent transition-opacity duration-500 ${
//                   isExpanded ? "lg:from-black/80 lg:via-black/50" : ""
//                 }`}
//               />

//               {/* Text Content Overlay - Show on active (mobile) or expanded (desktop) */}
//               <div
//                 className={`absolute bottom-8 left-8 text-white max-w-lg transition-all duration-500 ${
//                   (activeIndex === index && window.innerWidth < 768) ||
//                   (isExpanded && window.innerWidth >= 768)
//                     ? "opacity-100 translate-y-0"
//                     : "opacity-0 translate-y-4 md:opacity-0"
//                 }`}
//               >
//                 <h2 className="text-3xl md:text-5xl font-bold mb-2 transform transition-transform duration-500">
//                   {hero.title}
//                 </h2>
//                 <h3 className="text-xl md:text-2xl font-semibold mb-2 opacity-90">
//                   {hero.subtitle}
//                 </h3>
//                 <p className="text-sm md:text-base opacity-80">
//                   {hero.description}
//                 </p>
//               </div>
//             </div>
//           );
//         })}
//       </div>
//     </div>
//   );
// }



import React, { useState, useRef, useEffect } from "react";
import { ChevronRight } from "lucide-react";

export default function HeroPage() {
  interface HeropageData {
    title: string;
    subtitle: string;
    description: string;
    image?: string;
    video?: string;
  }

  const HeroData: HeropageData[] = [
    {
      title: "CAREER",
      subtitle: "Highlights",
      description: "Maya Singletary's highlights and achievements.",
      video: "/maya1.mp4",
    },
    {
      title: "URSU",
      subtitle: "Water",
      description:
        "URSU is much more than water... It is an inspiration to drink health and a lifestyle.",
      image: "/maya3.jpeg",
    },
    {
      title: "Maya",
      subtitle: "Fragrances",
      description:
        "Define your own legacy with the NEW fragrance, Maya Singletary Legacy.",
      image: "/maya8.jpeg",
    },
    {
      title: "Singletary",
      subtitle: "App",
      description:
        "ERAKULIS® is an all-in-one wellness experience for Fitness, Nutrition and Mental Balance.",
      image: "/maya4.jpeg",
    },
    {
      title: "Maya",
      subtitle: "Fragrances",
      description:
        "Define your own legacy with the NEW fragrance, Maya Singletary Legacy.",
      image: "/maya5.jpeg",
    },
    {
      title: "URSU",
      subtitle: "Water",
      description:
        "URSU is much more than water... It is an inspiration to drink health and a lifestyle.",
      image: "/maya6.jpeg",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [showScrollHint, setShowScrollHint] = useState(true);
  const scrollRef = useRef<HTMLDivElement>(null);

  // Determine which card should be expanded
  const expandedIndex = hoveredIndex !== null ? hoveredIndex : 0;

  // Handle scroll to detect active card on mobile
  useEffect(() => {
    const handleScroll = () => {
      if (scrollRef.current) {
        const scrollLeft = scrollRef.current.scrollLeft;
        const cardWidth = scrollRef.current.offsetWidth;
        const newIndex = Math.round(scrollLeft / cardWidth);
        setActiveIndex(newIndex);
        
        // Hide scroll hint after first scroll
        if (scrollLeft > 50) {
          setShowScrollHint(false);
        }
      }
    };

    const scrollContainer = scrollRef.current;
    if (scrollContainer) {
      scrollContainer.addEventListener("scroll", handleScroll);
      return () => scrollContainer.removeEventListener("scroll", handleScroll);
    }
  }, []);

  // Auto-hide scroll hint after 5 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowScrollHint(false);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="w-full mt-10 lg:mx-5">
      <div className="relative">
      <div
        ref={scrollRef}
        className="hero-page flex overflow-x-scroll lg:overflow-hidden snap-x snap-mandatory lg:snap-none scrollbar-hide px-5 gap-3 lg:items-center"
      >
        {HeroData.map((hero, index) => {
          const isExpanded = index === expandedIndex;
          
          return (
            <div
              key={index}
              className={`relative flex-shrink-0 w-full overflow-hidden shadow-lg snap-center md:snap-start transition-all duration-700 ease-in-out ${
                isExpanded
                  ? "lg:h-[85vh] lg:w-[calc(25%-0.75rem)]"
                  : "lg:h-[60vh] lg:w-[calc(14.98%-0.75rem)]"
              } h-[70vh]`}
              style={{
                transitionProperty: "height, width",
              }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {/* Background Image or Video */}
              {hero.video ? (
                <video
                  src={hero.video}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className={`absolute inset-0 w-full h-full object-cover transition-all duration-700 ${
                    isExpanded ? "grayscale-0" : "grayscale-70"
                  }`}
                />
              ) : (
                <img
                  src={hero.image}
                  alt={hero.subtitle}
                  className={`absolute inset-0 w-full h-full object-cover transition-all duration-700 ${
                    isExpanded ? "grayscale-0" : "grayscale-70"
                  }`}
                />
              )}

              {/* Overlay (dark gradient) */}
              <div
                className={`absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent transition-opacity duration-500 ${
                  isExpanded ? "lg:from-black/80 lg:via-black/50" : ""
                }`}
              />

              {/* Text Content Overlay - Show on active (mobile) or expanded (desktop) */}
              <div
                className={`absolute bottom-8 left-8 text-white max-w-lg transition-all duration-500 ${
                  (activeIndex === index && window.innerWidth < 768) ||
                  (isExpanded && window.innerWidth >= 768)
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-4 md:opacity-0"
                }`}
              >
                <h2 className="text-3xl md:text-5xl font-bold mb-2 transform transition-transform duration-500">
                  {hero.title}
                </h2>
                <h3 className="text-xl md:text-2xl font-semibold mb-2 opacity-90">
                  {hero.subtitle}
                </h3>
                <p className="text-sm md:text-base opacity-80">
                  {hero.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      {/* Scroll Indicator - Only visible on mobile/tablet */}
      {showScrollHint && activeIndex === 0 && (
        <div className="lg:hidden absolute right-8 top-1/2 -translate-y-1/2 z-10 animate-bounce-horizontal">
          <div className="bg-white/20 backdrop-blur-sm rounded-full p-3 shadow-lg">
            <ChevronRight className="w-8 h-8 text-white" />
          </div>
          <div className="absolute -bottom-12 right-0 text-white text-sm font-semibold whitespace-nowrap bg-black/50 px-3 py-1 rounded-full">
            Swipe
          </div>
        </div>
      )}
      </div>

      {/* Pagination Dots - Mobile only */}
      <div className="lg:hidden flex justify-center gap-2 mt-4">
        {HeroData.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              if (scrollRef.current) {
                scrollRef.current.scrollTo({
                  left: index * scrollRef.current.offsetWidth,
                  behavior: 'smooth'
                });
              }
            }}
            className={`h-2 rounded-full transition-all duration-300 ${
              activeIndex === index 
                ? 'w-8 bg-white' 
                : 'w-2 bg-white/40'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      <style jsx>{`
        @keyframes bounceHorizontal {
          0%, 100% {
            transform: translateX(0) translateY(-50%);
          }
          50% {
            transform: translateX(10px) translateY(-50%);
          }
        }

        .animate-bounce-horizontal {
          animation: bounceHorizontal 2s ease-in-out infinite;
        }

        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }

        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  );
}