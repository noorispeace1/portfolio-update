import React from 'react';

const SLogoPro = () => {
  return (
    <div className="relative group flex items-center justify-center">
      <svg
        width="40"
        height="40"
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="drop-shadow-[0_0_8px_rgba(168,85,247,0.4)] group-hover:drop-shadow-[0_0_12px_rgba(168,85,247,0.6)] transition-all duration-300"
      >
        {/* Hexagon Background */}
        <path
          d="M50 5L89 27.5V72.5L50 95L11 72.5V27.5L50 5Z"
          fill="url(#hexGradient)"
          className="transition-all duration-500"
        />
        
        {/* Inner Border */}
        <path
          d="M50 12L83 31V69L50 88L17 69V31L50 12Z"
          stroke="white"
          strokeOpacity="0.2"
          strokeWidth="2"
        />

        {/* Stylized 'S' */}
        <path
          d="M65 35C65 35 60 30 50 30C40 30 35 35 35 40C35 45 40 47.5 50 50C60 52.5 65 55 65 60C65 65 60 70 50 70C40 70 35 65 35 65M35 35V30M65 65V70"
          stroke="white"
          strokeWidth="8"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="drop-shadow-[0_0_5px_rgba(255,255,255,0.5)]"
        />

        <defs>
          <linearGradient id="hexGradient" x1="50" y1="5" x2="50" y2="95" gradientUnits="userSpaceOnUse">
            <stop stopColor="#A855F7" /> {/* Purple-500 */}
            <stop offset="1" stopColor="#3B82F6" /> {/* Blue-500 */}
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
};

export default SLogoPro;
