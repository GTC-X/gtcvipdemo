'use client';
import { useEffect, useState } from 'react';

const CustomButton = ({
  text,
  bgColor,
  textColor,
  strokeColor,
  hoverStrokeColor = '#FFFFFF', // Default to white on hover if not provided
  showIcon = true,
  disabled = false,
  onClick,
}) => {
  const [isRtl, setIsRtl] = useState(false);

  useEffect(() => {
    if (typeof document !== 'undefined') {
      setIsRtl(document.documentElement.dir === 'rtl');
    }
  }, []);

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`px-8 py-4 rounded-xl cursor-pointer w-full md:w-auto shadow-md transition-all duration-500 ease-in-out flex items-center gap-4 text-base xl:text-lg font-semibold justify-center ${bgColor} ${textColor} hover:opacity-90 group relative`}
    >
      {text}
      {showIcon && (
        <svg
          width="9"
          height="14"
          viewBox="0 0 9 14"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="transition-colors duration-500"
        >
          <path
            d={isRtl ? 'M8 1L2 7L8 13' : 'M1 1L7 7L1 13'}
            stroke={strokeColor}
            strokeWidth="3"
            style={{
              transition: 'stroke 500ms ease-in-out',
              stroke: 'currentColor',
            }}
            className="group-hover:stroke-white" // Fallback to white on hover
          />
        </svg>
      )}
      <style jsx>{`
        .group:hover .group-hover\\:stroke-white {
          stroke: ${hoverStrokeColor};
        }
      `}</style>
    </button>
  );
};

export default CustomButton;