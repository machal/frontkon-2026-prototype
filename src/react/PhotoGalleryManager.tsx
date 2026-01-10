import { useState, useEffect } from 'react';
import PhotoLightbox from './PhotoLightbox';

interface Photo {
  id: string;
  url: string;
  thumbnailUrl?: string;
  alt: string;
}

interface PhotoGalleryManagerProps {
  allPhotos: Photo[]; // všechny fotky na stránce
}

export default function PhotoGalleryManager({ allPhotos }: PhotoGalleryManagerProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    // Naslouchat klikům na všechny fotky
    const handlePhotoClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const photoItem = target.closest('[data-photo-id]');
      
      if (photoItem) {
        e.preventDefault();
        e.stopPropagation();
        
        const photoId = photoItem.getAttribute('data-photo-id');
        
        if (photoId) {
          const index = allPhotos.findIndex(p => p.id === photoId);
          if (index !== -1) {
            setCurrentIndex(index);
            setIsOpen(true);
          }
        }
      }
    };

    document.addEventListener('click', handlePhotoClick, true);
    return () => document.removeEventListener('click', handlePhotoClick, true);
  }, [allPhotos]);

  if (!isOpen || allPhotos.length === 0) return null;

  return (
    <PhotoLightbox
      photos={allPhotos}
      initialIndex={currentIndex}
      onClose={() => setIsOpen(false)}
    />
  );
}
