import React from 'react';
import { ArrowRight } from 'lucide-react';

type ButtonSize = 'small' | 'medium' | 'large'|'full';

interface GradientButtonProps {
  text: string;
  onClick: () => void;
  className?: string;
  size?: ButtonSize;
  withArrow?: boolean;
}

const GradientButton: React.FC<GradientButtonProps> = ({ 
  text, 
  onClick, 
  className = '',
  size = 'medium',
  withArrow = true,
}) => {
  const sizeClasses: Record<ButtonSize, string> = {
    small: 'px-4 py-2 text-sm',
    medium: 'px-6 py-3 text-base',
    large: 'px-10 sm:w-[30rem]  py-6 text-lg sm:text-2xl',
    full:'px-32 w-full py-4 text-lg sm:text-xl'
  };

  return (
    <button
      onClick={onClick}
      className={`
        group relative overflow-hidden rounded-xl 
        text-white font-semibold shadow-lg transition-all duration-300 
        hover:shadow-xl hover:scale-105 ${sizeClasses[size]} ${className}
      `}
    >
      <span className="relative z-10 flex items-center justify-center">
        {text}
        {withArrow && (
          <ArrowRight 
            className="ml-2 opacity-0 transform translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" 
            size={size === 'small' ? 16 : size === 'large' ? 24 : 20}
          />
        )}
      </span>
      <span 
        className="absolute inset-0 transition-opacity duration-300"
        style={{
          backgroundImage: `
            linear-gradient(83deg, rgba(59,130,246,0.8) -5%, rgba(147,51,234,0.9) 51%, rgba(236,72,153,1) 125%),
            linear-gradient(29deg, rgba(147,51,234,0.8) 26%, rgba(236,72,153,0.9) 161%),
            linear-gradient(133deg, rgba(147,51,234,0.8) 16%, rgba(236,72,153,0.9) 136%)
          `,
          opacity: 1,
        }}
      />
      <span 
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{
          backgroundImage: `
            linear-gradient(263deg, rgba(236,72,153,0.8) -5%, rgba(147,51,234,0.9) 51%, rgba(59,130,246,1) 125%),
            linear-gradient(209deg, rgba(236,72,153,0.8) 26%, rgba(147,51,234,0.9) 161%),
            linear-gradient(313deg, rgba(236,72,153,0.8) 16%, rgba(147,51,234,0.9) 136%)
          `,
        }}
      />
    </button>
  );
};

export default GradientButton;