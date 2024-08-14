"use client";
import Image from 'next/image';

type PopupProps = {
  isPopupOpen: boolean;
  togglePopup: () => void;
  imageSrc: string;
};

export function Popup({ isPopupOpen, togglePopup, imageSrc }: PopupProps) {
  if (!isPopupOpen) return null;
  
  return (
    <div
      className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75 z-50"
      onClick={togglePopup}
    >
      <div className="relative bg-white p-4 rounded-lg shadow-lg">
        <button 
          className="absolute top-2 right-2 text-white text-xl font-bold"
          onClick={togglePopup}
        >
          &times;
        </button>
        <Image 
          src={imageSrc} 
          className="max-w-full max-h-screen" 
          alt="Full screen image"
          width={800} // Adjust these values as needed
          height={800} // Adjust these values as needed
        />
      </div>
    </div>
  );
}
