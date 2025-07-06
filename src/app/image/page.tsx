"use client";
import React from 'react';

// Array of image URLs. You can add more image URLs here.
const imageUrls = [
  '/img/monkey.png',
  '/img/monkey2.png',
  '/img/monkey3.png',

];

/**
 * A React component that displays a gallery of images in a flexbox layout.
 * The images are sourced from an array of URLs.
 */
const ImageGalleryPage = () => {
  return (
    <div className="min-h-screen">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-center text-gray-800 dark:text-white mb-8">
          Image Gallery
        </h1>

        {/* Flexbox container for the image gallery */}
        <div className="flex flex-wrap justify-center gap-4">
          {imageUrls.map((url, index) => (
            <div
              key={index}
              className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-2"
            >
              <img
                src={url}
                alt={`Gallery image ${index + 1}`}
                className="w-full h-auto rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105"
                // Fallback for broken images
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.onerror = null; // Prevent infinite loop
                  target.src = 'https://placehold.co/600x400/FFCDD2/B71C1C?text=Image+Not+Found';
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ImageGalleryPage;
