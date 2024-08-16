import React from 'react';
import Image, { StaticImageData } from 'next/image';

interface PopupProps {
  isPopupOpen: boolean;
  togglePopup: () => void;
  imageSrc: StaticImageData;
  productName: string;
  companyName: string;
  technologies: string;
  module: string;
  description: string;
  link: string;
}

export const Popup: React.FC<PopupProps> = ({ isPopupOpen, togglePopup, imageSrc, productName, companyName, technologies, module, description, link }) => {
  if (!isPopupOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 p-4">
      <div className="bg-white w-full max-w-lg md:max-w-2xl lg:max-w-3xl h-auto max-h-screen p-6 md:p-8 rounded-lg relative flex flex-col">
        <button className="absolute top-4 right-4 text-gray-600 text-2xl" onClick={togglePopup}>×</button>
        <div className="flex flex-col items-center overflow-auto">
          <Image src={imageSrc} width={600} height={300} alt="popup image" className="rounded-lg mb-4" />
          <div className="flex-grow">
            <h2 className="text-xl md:text-2xl font-bold mb-2">{productName}</h2>
            <h3 className="text-lg md:text-xl mb-2"><strong>Company:</strong> {companyName}</h3>
            <p className="text-base md:text-lg mb-2"><strong>Technologies:</strong> {technologies}</p>
            <p className="text-base md:text-lg mb-2"><strong>Module:</strong> {module}</p>
            <p className="text-base md:text-lg mb-4">{description}</p>
            <a href={link} className="text-blue-500 underline" target="_blank" rel="noopener noreferrer">{link}</a>
          </div>
        </div>
      </div>
    </div>
  );
};
