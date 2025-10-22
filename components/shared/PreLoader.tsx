import Image from "next/image";
import React, { useState, useEffect } from "react";

export default function PreLoader({ onComplete }: any) {
  const [progress, setProgress] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setIsComplete(true);
            setTimeout(() => {
              if (onComplete) onComplete();
            }, 600);
          }, 400);
          return 100;
        }
        return prev + 2;
      });
    }, 30);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <div
      className={`fixed inset-0 z-50 transition-opacity duration-1000 ${
        isComplete ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
    >
      {/* Full Screen Image */}
      <Image
        src="/maya8.jpeg"
        alt="Athlete"
        width={100}
        height={100}
        className="absolute inset-0 w-full h-full object-cover transition-all duration-1000"
        style={{
          filter: `blur(${Math.max(0, 10 - (progress / 100) * 10)}px) brightness(0.5)`
        }}
      />

      {/* Dark Gradient Overlay at Bottom */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent" />

      {/* Text Content at Bottom */}
      <div className="absolute bottom-0 left-0 right-0 pb-16 px-8 flex flex-col items-center gap-6">
        {/* Main Welcome Text with Slide Up Animation */}
        <h1 
          className="text-4xl md:text-6xl font-black tracking-tight text-center"
          style={{
            animation: 'slideUp 1s ease-out',
            opacity: Math.min(progress / 30, 1)
          }}
        >
          <span className="text-purple-400">WEL</span>
          <span className="text-pink-400">CO</span>
          <span className="text-blue-400">ME</span>
        </h1>

        {/* Subtitle with Bubble Effect */}
        <p 
          className="text-xl md:text-2xl font-light text-center"
          style={{
            animation: 'bubble 1.2s ease-out',
            animationDelay: '0.3s',
            opacity: Math.min(progress / 40, 1)
          }}
        >
          <span className="text-cyan-400">Preparing </span>
          <span className="text-green-400">Your </span>
          <span className="text-yellow-400">Experience</span>
        </p>

        {/* Progress Percentage */}
        <div 
          className="text-5xl font-bold"
          style={{
            animation: 'bubble 1s ease-out',
            animationDelay: '0.6s',
            opacity: Math.min(progress / 50, 1)
          }}
        >
          <span className="text-orange-400">{progress}</span>
          <span className="text-red-400">%</span>
        </div>
      </div>

      <style jsx>{`
        @keyframes slideUp {
          from {
            transform: translateY(60px);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }

        @keyframes bubble {
          0% {
            transform: scale(0.5) translateY(40px);
            opacity: 0;
          }
          50% {
            transform: scale(1.05) translateY(-5px);
          }
          100% {
            transform: scale(1) translateY(0);
            opacity: 1;
          }
        }
      `}</style>
    </div>
  );
}

// Example usage
export function AppWithPreloader() {
  const [loading, setLoading] = useState(true);

  return (
    <>
      {loading && <PreLoader onComplete={() => setLoading(false)} />}
      {!loading && (
        <div className="min-h-screen bg-black text-white flex items-center justify-center">
          <h1 className="text-4xl font-bold">Your Main Content Here</h1>
        </div>
      )}
    </>
  );
}