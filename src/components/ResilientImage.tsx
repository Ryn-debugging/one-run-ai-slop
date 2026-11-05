import React, { useState } from 'react';
import { Sparkles, Gamepad2 } from 'lucide-react';

interface ResilientImageProps {
  src: string;
  alt: string;
  className?: string;
  fallbackCategory?: 'vn' | 'rpg';
}

export const ResilientImage: React.FC<ResilientImageProps> = ({
  src,
  alt,
  className = '',
  fallbackCategory = 'vn',
}) => {
  const [hasError, setHasError] = useState(false);

  if (hasError || !src) {
    return (
      <div
        className={`flex flex-col items-center justify-center bg-gradient-to-br from-[#13172E] via-[#1A1F3C] to-[#0B0D19] p-6 text-center ${className}`}
        role="img"
        aria-label={alt}
      >
        {fallbackCategory === 'vn' ? (
          <Sparkles className="w-8 h-8 text-[#F472B6] mb-2 opacity-80" />
        ) : (
          <Gamepad2 className="w-8 h-8 text-[#6EE7B7] mb-2 opacity-80" />
        )}
        <span className="text-xs font-medium text-slate-300 max-w-[22ch] line-clamp-2">
          {alt}
        </span>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      referrerPolicy="no-referrer"
      onError={() => setHasError(true)}
      className={className}
      loading="lazy"
    />
  );
};
