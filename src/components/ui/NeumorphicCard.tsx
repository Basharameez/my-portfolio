import React from 'react';
import { playHoverSound, playClickSound } from '../../utils/sound';

interface NeumorphicCardProps {
  children: React.ReactNode;
  className?: string;
  inset?: boolean;
  hoverable?: boolean;
  onClick?: () => void;
  id?: string;
}

export const NeumorphicCard: React.FC<NeumorphicCardProps> = ({
  children,
  className = '',
  inset = false,
  hoverable = false,
  onClick,
  id
}) => {
  const baseStyle = inset 
    ? 'neumorphic-inset' 
    : 'neumorphic-outset';
  
  const hoverStyle = hoverable && !inset
    ? 'transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-[8px_8px_16px_#d0d0ce,-8px_-8px_16px_#ffffff]'
    : '';

  const clickableStyle = onClick ? 'cursor-pointer' : '';

  const handleMouseEnter = () => {
    if (hoverable || onClick) {
      playHoverSound();
    }
  };

  const handleClick = () => {
    if (onClick) {
      playClickSound();
      onClick();
    }
  };

  return (
    <div
      id={id}
      onClick={handleClick}
      onMouseEnter={handleMouseEnter}
      className={`rounded-2xl p-6 border border-neutral-100/50 ${baseStyle} ${hoverStyle} ${clickableStyle} ${className}`}
    >
      {children}
    </div>
  );
};
export default NeumorphicCard;
