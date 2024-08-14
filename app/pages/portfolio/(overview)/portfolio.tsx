"use client";
import { useState } from 'react';
import Image from 'next/image';
import tdlImg from "@/public/portfolio/tdl.png";
import { Popup } from  "@/app/ui/common/popup"; // Import the Popup component

export function Erp({ initialPopupState }) {
  const [isPopupOpen, setIsPopupOpen] = useState(initialPopupState);

  const togglePopup = () => {
    setIsPopupOpen(!isPopupOpen);
  };

  return ( 
    <main>
      <div className="my-4 py-4 border rounded-lg shadow-lg bg-white">
        <div className="flex flex-col md:flex-row items-center p-4">
          <div className="w-full md:w-1/3 mb-4 md:mb-0">
            <div className="flex justify-center">
              <Image 
                src={tdlImg} 
                className="mr-2 cursor-pointer" 
                width={300} 
                height={150} 
                alt="profile picture" 
                onClick={togglePopup} 
              />
            </div> 
          </div>
          
          <div className="w-full md:w-2/3 md:ml-4 text-center md:text-left">
            <h4 className="text-gray-700 font-bold text-base">Pharmaceutical ERP</h4>
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
                  <h4 className="text-sm mt-1 text-gray-500">Company Name: Techno Drugs Limited</h4>
                  <span className="text-blue-500 cursor-pointer mt-2 md:mt-0 md:pr-20">
                    <a href="http://www.technodrugsltd.com/" target='_blank'>www.technodrugsltd.com</a>
                  </span>
                </div>
            <h4 className="text-sm mt-1 text-gray-500 ">Technologies : Oracle Database, Oracle Forms and Reports </h4>
            <h4 className="text-sm mt-1 text-gray-500 italic">
              Project Description: Techno Drugs Limited is implementing a comprehensive Pharmaceutical ERP system using Oracle Database, Oracle Forms, and Oracle Reports. The ERP system integrates key modules such as Human Resource Management (HRMS), Distribution Management (DMS), Sales Management (SMS), and Financial Management (FMS). It also includes functionalities for Production Planning and Inventory Control (PPIC), Manufacturing, Procurement, and Quality Management. This centralized system will streamline business processes, enhance decision-making, and improve operational efficiency across all departments, helping Techno Drugs Limited maintain regulatory compliance and achieve a competitive edge in the market.
            </h4>
          </div>
        </div>
      </div>

      {/* Use the Popup component */}
      <Popup 
        isPopupOpen={isPopupOpen} 
        togglePopup={togglePopup} 
        imageSrc={tdlImg} 
      />
    </main>
  );
}
