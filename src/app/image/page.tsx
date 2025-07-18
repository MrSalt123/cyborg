"use client";
import React, { useState, useEffect } from 'react';
import CyborgTicker from '@/components/CyborgTicker';

// Array of image URLs.
const imageUrls = [
  '/img5.jpeg',
  '/img13.jpeg',
  '/img11.png',
  '/img1.jpeg',
  '/img3.jpeg',
  '/img4.jpeg',
  '/img6.png',
  '/img7.png',
  '/img8.png',
  '/img9.png',
  '/img10.png',
  '/img12.png',
  '/img/monkey.png',
  '/img/monkey2.png',
  '/img/monkey3.png',
];

/**
 * A React component that displays a responsive image gallery with a modal (lightbox) viewer.
 * Users can click an image to open it in a full-view modal and navigate through all images.
 */
const ImageGalleryPage = () => {
  // State to manage whether the modal is open or not.
  const [isModalOpen, setIsModalOpen] = useState(false);
  // State to store the index of the image currently shown in the modal.
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Function to open the modal and set the selected image.
  const openModal = (index: number) => {
    setCurrentImageIndex(index);
    setIsModalOpen(true);
  };

  // Function to close the modal.
  const closeModal = () => {
    setIsModalOpen(false);
  };

  // Function to show the next image in the modal.
  // It loops back to the beginning if it's the last image.
  const showNextImage = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % imageUrls.length);
  };
  
  const showPrevImage = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + imageUrls.length) % imageUrls.length);
  };
  

  // Effect to handle keyboard navigation (left/right arrows, Escape key).
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isModalOpen) return;
    
      if (e.key === 'ArrowRight') {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % imageUrls.length);
      } else if (e.key === 'ArrowLeft') {
        setCurrentImageIndex((prevIndex) => (prevIndex - 1 + imageUrls.length) % imageUrls.length);
      } else if (e.key === 'Escape') {
        closeModal();
      }
    };
    

    window.addEventListener('keydown', handleKeyDown);

    // Cleanup function to remove the event listener when the component unmounts.
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isModalOpen]); // Rerun the effect if the modal's open state changes.


  return (
    <div className="min-h-screen py-4">
      <CyborgTicker />
      <div className="container mx-auto px-4 py-8">
        {/* The grid of image thumbnails */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {imageUrls.map((url, index) => (
            <div
              key={index}
              className="group aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg shadow-lg cursor-pointer"
              onClick={() => openModal(index)} // Open modal on click
            >
              <img
                src={url}
                alt={`Gallery image ${index + 1}`}
                className="w-full h-full object-cover object-center transform transition-transform duration-300 group-hover:scale-110"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.onerror = null;
                  target.src = 'https://placehold.co/600x400/FFCDD2/B71C1C?text=Image+Not+Found';
                }}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Modal / Lightbox */}
      {isModalOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center z-50"
          onClick={closeModal} // Close modal when clicking the background
        >
          {/* Close Button (Top Right) */}
          <button
            onClick={closeModal}
            className="absolute top-4 right-4 text-white text-4xl font-bold hover:text-gray-300 transition-colors"
          >
            &times;
          </button>

          {/* Previous Button */}
          <button
            onClick={showPrevImage}
            className="absolute left-4 sm:left-10 text-white p-3 bg-black bg-opacity-50 rounded-full hover:bg-opacity-75 transition-all"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Image Display */}
          <div className="relative max-w-4xl max-h-[90vh] p-4" onClick={(e) => e.stopPropagation()}>
             <img
                src={imageUrls[currentImageIndex]}
                alt={`Full view of image ${currentImageIndex + 1}`}
                className="max-w-full max-h-full object-contain rounded-lg"
                 onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.onerror = null;
                  target.src = 'https://placehold.co/1200x800/FFCDD2/B71C1C?text=Image+Not+Found';
                }}
              />
          </div>


          {/* Next Button */}
          <button
            onClick={showNextImage}
            className="absolute right-4 sm:right-10 text-white p-3 bg-black bg-opacity-50 rounded-full hover:bg-opacity-75 transition-all"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      )}
    </div>
  );
};

export default ImageGalleryPage;
