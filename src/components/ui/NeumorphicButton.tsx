import React from 'react';
import { playHoverSound, playClickSound } from '../../utils/sound';

interface NeumorphicButtonProps {
  children: React.ReactNode;
  className?: string;
  variant?: 'standard' | 'red' | 'active';
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  type?: 'button' | 'submit';
  disabled?: boolean;
}

export const NeumorphicButton: React.FC<NeumorphicButtonProps> = ({
  children,
  className = '',
  variant = 'standard',
  onClick,
  type = 'button',
  disabled = false
}) => {
  let buttonStyle = 'neumorphic-btn';
  
  if (variant === 'red') {
    buttonStyle = 'neumorphic-btn-red';
  } else if (variant === 'active') {
    buttonStyle = 'neumorphic-btn-active';
  }

  const handleMouseEnter = () => {
    if (!disabled) {
      playHoverSound();
    }
  };

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!disabled) {
      playClickSound();
      if (onClick) {
        onClick(e);
      }
    }
  };

  return (
    <button
      type={type}
      onMouseEnter={handleMouseEnter}
      onClick={handleClick}
      disabled={disabled}
      className={`px-5 py-3 rounded-xl font-semibold text-sm flex items-center justify-center gap-2 outline-none select-none transition-all duration-200 ${buttonStyle} ${disabled ? 'opacity-50 cursor-not-allowed' : ''} ${className}`}
    >
      {children}
    </button>
  );
};
export default NeumorphicButton;
