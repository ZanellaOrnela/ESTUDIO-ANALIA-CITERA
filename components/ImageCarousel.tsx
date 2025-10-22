'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Play } from 'lucide-react';
import { useState, useEffect } from 'react';

interface ImageCarouselProps {
  media: {
    src: string;
    alt: string;
    caption?: string;
    type: 'image' | 'video';
  }[];
  autoPlay?: boolean;
  autoPlayInterval?: number;
}

const ImageCarousel = ({ 
  media, 
  autoPlay = false, 
  autoPlayInterval = 5000 
}: ImageCarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    setCurrentIndex(currentIndex === 0 ? media.length - 1 : currentIndex - 1);
  };

  const goToNext = () => {
    setCurrentIndex(currentIndex === media.length - 1 ? 0 : currentIndex + 1);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <div className="relative w-full max-w-xs sm:max-w-sm mx-auto">
      {/* Main carousel container - responsive aspect ratio */}
      <div className="relative aspect-[4/5] sm:aspect-[9/16] overflow-hidden rounded-2xl bg-gray-100 shadow-lg min-h-[400px] sm:min-h-[500px]">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 300 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -300 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="absolute inset-0"
          >
            {media[currentIndex].type === 'video' ? (
              <iframe
                src={media[currentIndex].src.replace('/view?usp=sharing', '/preview')}
                className="w-full h-full border-0 object-cover"
                allow="autoplay; encrypted-media"
                allowFullScreen
                title={media[currentIndex].alt}
                loading="lazy"
                style={{ objectFit: 'cover' }}
              />
            ) : (
              <img
                src={media[currentIndex].src}
                alt={media[currentIndex].alt}
                className="w-full h-full object-cover"
                loading="lazy"
                style={{ objectFit: 'cover' }}
              />
            )}
            {media[currentIndex].caption && (
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                <p className="text-white text-sm font-medium font-montserrat">
                  {media[currentIndex].caption}
                </p>
              </div>
            )}
          </motion.div>
        </AnimatePresence>

        {/* Navigation arrows */}
        <button
          onClick={goToPrevious}
          className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 rounded-full p-2 shadow-lg transition-all duration-200 hover:scale-110"
          aria-label="Imagen anterior"
        >
          <ChevronLeft className="h-4 w-4" />
        </button>

        <button
          onClick={goToNext}
          className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 rounded-full p-2 shadow-lg transition-all duration-200 hover:scale-110"
          aria-label="Siguiente imagen"
        >
          <ChevronRight className="h-4 w-4" />
        </button>
      </div>

      {/* Dots indicator */}
      {media.length > 1 && (
        <div className="flex justify-center space-x-2 mt-4">
          {media.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-2 h-2 rounded-full transition-all duration-200 ${
                index === currentIndex
                  ? 'bg-primary-600 scale-125'
                  : 'bg-gray-300 hover:bg-gray-400'
              }`}
              aria-label={`Ir a ${media[index].type === 'video' ? 'video' : 'imagen'} ${index + 1}`}
            />
          ))}
        </div>
      )}

      {/* Media counter */}
      {media.length > 1 && (
        <div className="text-center mt-2">
          <span className="text-xs text-gray-500 font-montserrat font-semibold">
            {currentIndex + 1} de {media.length}
          </span>
        </div>
      )}
    </div>
  );
};

export default ImageCarousel;
