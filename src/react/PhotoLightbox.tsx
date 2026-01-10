import { useState, useEffect } from 'react';

interface Photo {
  id: string;
  url: string;
  thumbnailUrl?: string;
  alt: string;
}

interface PhotoLightboxProps {
  photos: Photo[];
  initialIndex?: number;
  onClose: () => void;
}

export default function PhotoLightbox({ photos, initialIndex = 0, onClose }: PhotoLightboxProps) {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);

  // Aktualizovat index, když se změní initialIndex
  useEffect(() => {
    setCurrentIndex(initialIndex);
  }, [initialIndex]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      } else if (e.key === 'ArrowLeft') {
        setCurrentIndex((prev) => (prev > 0 ? prev - 1 : photos.length - 1));
      } else if (e.key === 'ArrowRight') {
        setCurrentIndex((prev) => (prev < photos.length - 1 ? prev + 1 : 0));
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [photos.length, onClose]);

  if (photos.length === 0) return null;

  const currentPhoto = photos[currentIndex];

  return (
    <div className="lightbox-overlay" onClick={onClose}>
      <button className="lightbox-close" onClick={onClose} aria-label="Zavřít">
        ×
      </button>
      
      {photos.length > 1 && (
        <>
          <button 
            className="lightbox-nav lightbox-prev"
            onClick={(e) => {
              e.stopPropagation();
              setCurrentIndex((prev) => (prev > 0 ? prev - 1 : photos.length - 1));
            }}
            aria-label="Předchozí"
          >
            ‹
          </button>
          <button 
            className="lightbox-nav lightbox-next"
            onClick={(e) => {
              e.stopPropagation();
              setCurrentIndex((prev) => (prev < photos.length - 1 ? prev + 1 : 0));
            }}
            aria-label="Další"
          >
            ›
          </button>
        </>
      )}

      <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
        <img 
          src={currentPhoto.url} 
          alt={currentPhoto.alt}
          className="lightbox-image"
        />
        {photos.length > 1 && (
          <div className="lightbox-counter">
            {currentIndex + 1} / {photos.length}
          </div>
        )}
      </div>
    </div>
  );
}
