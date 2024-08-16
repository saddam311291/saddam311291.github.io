"use client";
import { useState } from 'react';
import Image from 'next/image';
import { Popup } from  "@/app/ui/common/popup"; // Import the Popup component
import tdlImg from "@/public/portfolio/tdl.png";
import ShantaAssetImg from "@/public/portfolio/asset/shanta-ams.png";
import UcbAssetImg from "@/public/portfolio/asset/ucb-ams.png";
import SandhaniAssetImg from "@/public/portfolio/asset/sandhani-ams.png";
import AimsAssetImg from "@/public/portfolio/asset/aims-ams.png";
import IdlcAssetImg from "@/public/portfolio/asset/idlc-ams.png";
import IlcAssetImg from "@/public/portfolio/asset/icl-ams.png";

type ErpProps = {
  initialPopupState: boolean;
};

export function Erp({ initialPopupState }: ErpProps) {
  const [isPopupOpen, setIsPopupOpen] = useState(initialPopupState);
  const [currentCard, setCurrentCard] = useState<number | null>(null); // Track which card is clicked

  const togglePopup = (cardIndex: number | null) => {
    setIsPopupOpen(!isPopupOpen);
    setCurrentCard(cardIndex);
  };

  const cardData = [
    {
      image: tdlImg,
      productName: "Pharmaceutical ERP",
      companyName: "Techno Drugs Limited",
      technologies: "Oracle Database, Oracle Forms and Reports ",
      link:"http://www.technodrugsltd.com",
      module: "Back-Office Application, Portal, Mobile Apps",
      description: "Techno Drugs Limited is implementing a comprehensive Pharmaceutical ERP system using Oracle Database, Oracle Forms, and Oracle Reports. The ERP system integrates key modules such as Human Resource Management (HRMS), Distribution Management (DMS), Sales Management (SMS), and Financial Management (FMS). It also includes functionalities for Production Planning and Inventory Control (PPIC), Manufacturing, Procurement, and Quality Management. This centralized system will streamline business processes, enhance decision-making, and improve operational efficiency across all departments, helping Techno Drugs Limited maintain regulatory compliance and achieve a competitive edge in the market.",
    },
    // Add more card data here
  ];

  return ( 
    <main>
      <div className="flex flex-wrap justify-between">
        {cardData.map((card, index) => (
          <div key={index} className="w-full p-2">
            <div className="my-4 py-4 border rounded-lg shadow-lg bg-white">
              <div className="flex flex-col items-center p-4">
                <div className="w-full mb-4">
                  <div className="flex justify-center">
                    <Image 
                      src={card.image} 
                      className="cursor-pointer rounded-lg" 
                      width={300} 
                      height={150} 
                      alt="profile picture" 
                      onClick={() => togglePopup(index)} 
                    />
                  </div> 
                </div>
                <div className="w-full text-center">
                  <h4 className="text-gray-700 font-bold text-base mb-2">{card.companyName}</h4>
                  <p className="text-sm text-gray-500 mb-2">
                    <strong>Technologies:</strong> {card.technologies}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Use the Popup component */}
      {currentCard !== null && (
        <Popup 
          isPopupOpen={isPopupOpen} 
          togglePopup={() => togglePopup(null)} 
          imageSrc={cardData[currentCard].image} 
          productName={cardData[currentCard].productName}
          companyName={cardData[currentCard].companyName}
          technologies={cardData[currentCard].technologies}
          module={cardData[currentCard].module}
          description={cardData[currentCard].description}
          link={cardData[currentCard].link}
        />
      )}
    </main>
  );
}


export function AimsAsset({ initialPopupState }: ErpProps) {
  const [isPopupOpen, setIsPopupOpen] = useState(initialPopupState);
  const [currentCard, setCurrentCard] = useState<number | null>(null); // Track which card is clicked

  const togglePopup = (cardIndex: number | null) => {
    setIsPopupOpen(!isPopupOpen);
    setCurrentCard(cardIndex);
  };

  const cardData = [
    {
      image: AimsAssetImg,
      productName: "Capital Asset Management System (CAMS)",
      companyName: "Aims Of Bangladesh Limited",
      technologies: "MS SQL Server, PHP,Zend, Laravel, JavaScript, jQuery",
      link:"https://gb-unit-fund.aims-bangladesh.com",
      module: "Back-Office Application, Customer Portal, Mobile Apps",
      description: "The Capital Asset Management System (CAMS) includes several features similar to those in mutual fund software. It tracks and manages assets, calculates Net Asset Value (NAV), and handles portfolio allocations. CAMS also supports investor account management with functionalities like account setup, transaction processing, and statement generation. It ensures regulatory compliance through automated reporting and anti-money laundering (AML) checks. Additionally, CAMS provides robust reporting and analytics for fund performance, investor activities, and financial data. Integration with financial systems and strong security measures are also essential components, ensuring data integrity and protection.",
    },
    // Add more card data here
  ];

  return ( 
    <main>
      <div className="flex flex-wrap justify-between">
        {cardData.map((card, index) => (
          <div key={index} className="w-full p-2">
            <div className="my-4 py-4 border rounded-lg shadow-lg bg-white">
              <div className="flex flex-col items-center p-4">
                <div className="w-full mb-4">
                  <div className="flex justify-center">
                    <Image 
                      src={card.image} 
                      className="cursor-pointer rounded-lg" 
                      width={300} 
                      height={150} 
                      alt="profile picture" 
                      onClick={() => togglePopup(index)} 
                    />
                  </div> 
                </div>
                <div className="w-full text-center">
                  <h4 className="text-gray-700 font-bold text-base mb-2">{card.companyName}</h4>
                  <p className="text-sm text-gray-500 mb-2">
                    <strong>Technologies:</strong> {card.technologies}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Use the Popup component */}
      {currentCard !== null && (
        <Popup 
          isPopupOpen={isPopupOpen} 
          togglePopup={() => togglePopup(null)} 
          imageSrc={cardData[currentCard].image} 
          productName={cardData[currentCard].productName}
          companyName={cardData[currentCard].companyName}
          technologies={cardData[currentCard].technologies}
          module={cardData[currentCard].module}
          description={cardData[currentCard].description}
          link={cardData[currentCard].link}
        />
      )}
    </main>
  );
}


export function IdlcAsset({ initialPopupState }: ErpProps) {
  const [isPopupOpen, setIsPopupOpen] = useState(initialPopupState);
  const [currentCard, setCurrentCard] = useState<number | null>(null); // Track which card is clicked

  const togglePopup = (cardIndex: number | null) => {
    setIsPopupOpen(!isPopupOpen);
    setCurrentCard(cardIndex);
  };

  const cardData = [
    {
      image: IdlcAssetImg,
      productName: "Capital Asset Management System (CAMS)",
      companyName: "IDLC Asset Management Limited",
      technologies: "MS SQL Server, PHP,Zend, Laravel, JavaScript, jQuery",
      link:"https://aml.idlc.com",
      module: "Back-Office Application, Customer Portal, Mobile Apps",
      description: "The Capital Asset Management System (CAMS) includes several features similar to those in mutual fund software. It tracks and manages assets, calculates Net Asset Value (NAV), and handles portfolio allocations. CAMS also supports investor account management with functionalities like account setup, transaction processing, and statement generation. It ensures regulatory compliance through automated reporting and anti-money laundering (AML) checks. Additionally, CAMS provides robust reporting and analytics for fund performance, investor activities, and financial data. Integration with financial systems and strong security measures are also essential components, ensuring data integrity and protection.",
    },
    // Add more card data here
  ];

  return ( 
    <main>
      <div className="flex flex-wrap justify-between">
        {cardData.map((card, index) => (
          <div key={index} className="w-full p-2">
            <div className="my-4 py-4 border rounded-lg shadow-lg bg-white">
              <div className="flex flex-col items-center p-4">
                <div className="w-full mb-4">
                  <div className="flex justify-center">
                    <Image 
                      src={card.image} 
                      className="cursor-pointer rounded-lg" 
                      width={300} 
                      height={150} 
                      alt="profile picture" 
                      onClick={() => togglePopup(index)} 
                    />
                  </div> 
                </div>
                <div className="w-full text-center">
                  <h4 className="text-gray-700 font-bold text-base mb-2">{card.companyName}</h4>
                  <p className="text-sm text-gray-500 mb-2">
                    <strong>Technologies:</strong> {card.technologies}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Use the Popup component */}
      {currentCard !== null && (
        <Popup 
          isPopupOpen={isPopupOpen} 
          togglePopup={() => togglePopup(null)} 
          imageSrc={cardData[currentCard].image} 
          productName={cardData[currentCard].productName}
          companyName={cardData[currentCard].companyName}
          technologies={cardData[currentCard].technologies}
          module={cardData[currentCard].module}
          description={cardData[currentCard].description}
          link={cardData[currentCard].link}
        />
      )}
    </main>
  );
}

export function IclAsset({ initialPopupState }: ErpProps) {
  const [isPopupOpen, setIsPopupOpen] = useState(initialPopupState);
  const [currentCard, setCurrentCard] = useState<number | null>(null); // Track which card is clicked

  const togglePopup = (cardIndex: number | null) => {
    setIsPopupOpen(!isPopupOpen);
    setCurrentCard(cardIndex);
  };

  const cardData = [
    {
      image: IlcAssetImg,
      productName: "Capital Asset Management System (CAMS)",
      companyName: "Impress Capital Limited",
      technologies: "MS SQL Server, PHP,Zend, Laravel, JavaScript, jQuery",
      link:"https://portal.impresscapital.com",
      module: "Back-Office Application, Customer Portal, Mobile Apps",
      description: "The Capital Asset Management System (CAMS) includes several features similar to those in mutual fund software. It tracks and manages assets, calculates Net Asset Value (NAV), and handles portfolio allocations. CAMS also supports investor account management with functionalities like account setup, transaction processing, and statement generation. It ensures regulatory compliance through automated reporting and anti-money laundering (AML) checks. Additionally, CAMS provides robust reporting and analytics for fund performance, investor activities, and financial data. Integration with financial systems and strong security measures are also essential components, ensuring data integrity and protection.",
    },
    // Add more card data here
  ];

  return ( 
    <main>
      <div className="flex flex-wrap justify-between">
        {cardData.map((card, index) => (
          <div key={index} className="w-full p-2">
            <div className="my-4 py-4 border rounded-lg shadow-lg bg-white">
              <div className="flex flex-col items-center p-4">
                <div className="w-full mb-4">
                  <div className="flex justify-center">
                    <Image 
                      src={card.image} 
                      className="cursor-pointer rounded-lg" 
                      width={300} 
                      height={150} 
                      alt="profile picture" 
                      onClick={() => togglePopup(index)} 
                    />
                  </div> 
                </div>
                <div className="w-full text-center">
                  <h4 className="text-gray-700 font-bold text-base mb-2">{card.companyName}</h4>
                  <p className="text-sm text-gray-500 mb-2">
                    <strong>Technologies:</strong> {card.technologies}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Use the Popup component */}
      {currentCard !== null && (
        <Popup 
          isPopupOpen={isPopupOpen} 
          togglePopup={() => togglePopup(null)} 
          imageSrc={cardData[currentCard].image} 
          productName={cardData[currentCard].productName}
          companyName={cardData[currentCard].companyName}
          technologies={cardData[currentCard].technologies}
          module={cardData[currentCard].module}
          description={cardData[currentCard].description}
          link={cardData[currentCard].link}
        />
      )}
    </main>
  );
}

export function SandhaniAsset({ initialPopupState }: ErpProps) {
  const [isPopupOpen, setIsPopupOpen] = useState(initialPopupState);
  const [currentCard, setCurrentCard] = useState<number | null>(null); // Track which card is clicked

  const togglePopup = (cardIndex: number | null) => {
    setIsPopupOpen(!isPopupOpen);
    setCurrentCard(cardIndex);
  };

  const cardData = [
    {
      image: SandhaniAssetImg,
      productName: "Capital Asset Management System (CAMS)",
      companyName: "Sandhani Asset Management Limited",
      technologies: "MS SQL Server, PHP,Zend, Laravel, JavaScript, jQuery",
      link:"https://sandhaniaml.com",
      module: "Back-Office Application, Customer Portal, Mobile Apps",
      description: "The Capital Asset Management System (CAMS) includes several features similar to those in mutual fund software. It tracks and manages assets, calculates Net Asset Value (NAV), and handles portfolio allocations. CAMS also supports investor account management with functionalities like account setup, transaction processing, and statement generation. It ensures regulatory compliance through automated reporting and anti-money laundering (AML) checks. Additionally, CAMS provides robust reporting and analytics for fund performance, investor activities, and financial data. Integration with financial systems and strong security measures are also essential components, ensuring data integrity and protection.",
    },
    // Add more card data here
  ];

  return ( 
    <main>
      <div className="flex flex-wrap justify-between">
        {cardData.map((card, index) => (
          <div key={index} className="w-full p-2">
            <div className="my-4 py-4 border rounded-lg shadow-lg bg-white">
              <div className="flex flex-col items-center p-4">
                <div className="w-full mb-4">
                  <div className="flex justify-center">
                    <Image 
                      src={card.image} 
                      className="cursor-pointer rounded-lg" 
                      width={300} 
                      height={150} 
                      alt="profile picture" 
                      onClick={() => togglePopup(index)} 
                    />
                  </div> 
                </div>
                <div className="w-full text-center">
                  <h4 className="text-gray-700 font-bold text-base mb-2">{card.companyName}</h4>
                  <p className="text-sm text-gray-500 mb-2">
                    <strong>Technologies:</strong> {card.technologies}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Use the Popup component */}
      {currentCard !== null && (
        <Popup 
          isPopupOpen={isPopupOpen} 
          togglePopup={() => togglePopup(null)} 
          imageSrc={cardData[currentCard].image} 
          productName={cardData[currentCard].productName}
          companyName={cardData[currentCard].companyName}
          technologies={cardData[currentCard].technologies}
          module={cardData[currentCard].module}
          description={cardData[currentCard].description}
          link={cardData[currentCard].link}
        />
      )}
    </main>
  );
}

export function UcbAsset({ initialPopupState }: ErpProps) {
  const [isPopupOpen, setIsPopupOpen] = useState(initialPopupState);
  const [currentCard, setCurrentCard] = useState<number | null>(null); // Track which card is clicked

  const togglePopup = (cardIndex: number | null) => {
    setIsPopupOpen(!isPopupOpen);
    setCurrentCard(cardIndex);
  };

  const cardData = [
    {
      image: UcbAssetImg,
      productName: "Capital Asset Management System (CAMS)",
      companyName: "UCB Asset Management Limited",
      technologies: "MS SQL Server, PHP,Zend, Laravel, JavaScript, jQuery",
      link:"http://webportal.ucbasset.com",
      module: "Back-Office Application, Customer Portal, Mobile Apps",
      description: "The Capital Asset Management System (CAMS) includes several features similar to those in mutual fund software. It tracks and manages assets, calculates Net Asset Value (NAV), and handles portfolio allocations. CAMS also supports investor account management with functionalities like account setup, transaction processing, and statement generation. It ensures regulatory compliance through automated reporting and anti-money laundering (AML) checks. Additionally, CAMS provides robust reporting and analytics for fund performance, investor activities, and financial data. Integration with financial systems and strong security measures are also essential components, ensuring data integrity and protection.",
    },
    // Add more card data here
  ];

  return ( 
    <main>
      <div className="flex flex-wrap justify-between">
        {cardData.map((card, index) => (
          <div key={index} className="w-full p-2">
            <div className="my-4 py-4 border rounded-lg shadow-lg bg-white">
              <div className="flex flex-col items-center p-4">
                <div className="w-full mb-4">
                  <div className="flex justify-center">
                    <Image 
                      src={card.image} 
                      className="cursor-pointer rounded-lg" 
                      width={300} 
                      height={150} 
                      alt="profile picture" 
                      onClick={() => togglePopup(index)} 
                    />
                  </div> 
                </div>
                <div className="w-full text-center">
                  <h4 className="text-gray-700 font-bold text-base mb-2">{card.companyName}</h4>
                  <p className="text-sm text-gray-500 mb-2">
                    <strong>Technologies:</strong> {card.technologies}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Use the Popup component */}
      {currentCard !== null && (
        <Popup 
          isPopupOpen={isPopupOpen} 
          togglePopup={() => togglePopup(null)} 
          imageSrc={cardData[currentCard].image} 
          productName={cardData[currentCard].productName}
          companyName={cardData[currentCard].companyName}
          technologies={cardData[currentCard].technologies}
          module={cardData[currentCard].module}
          description={cardData[currentCard].description}
          link={cardData[currentCard].link}
        />
      )}
    </main>
  );
}


export function ShantaAsset({ initialPopupState }: ErpProps) {
  const [isPopupOpen, setIsPopupOpen] = useState(initialPopupState);
  const [currentCard, setCurrentCard] = useState<number | null>(null); // Track which card is clicked

  const togglePopup = (cardIndex: number | null) => {
    setIsPopupOpen(!isPopupOpen);
    setCurrentCard(cardIndex);
  };

  const cardData = [
    {
      image: ShantaAssetImg,
      productName: "Capital Asset Management System (CAMS)",
      companyName: "Shanta Asset Management Limited",
      technologies: "MS SQL Server, PHP,Zend, Laravel, JavaScript, jQuery",
      link:"https://webportal.shanta-aml.com",
      module: "Back-Office Application, Customer Portal, Mobile Apps",
      description: "The Capital Asset Management System (CAMS) includes several features similar to those in mutual fund software. It tracks and manages assets, calculates Net Asset Value (NAV), and handles portfolio allocations. CAMS also supports investor account management with functionalities like account setup, transaction processing, and statement generation. It ensures regulatory compliance through automated reporting and anti-money laundering (AML) checks. Additionally, CAMS provides robust reporting and analytics for fund performance, investor activities, and financial data. Integration with financial systems and strong security measures are also essential components, ensuring data integrity and protection.",
    },
    // Add more card data here
  ];

  return ( 
    <main>
      <div className="flex flex-wrap justify-between">
        {cardData.map((card, index) => (
          <div key={index} className="w-full p-2">
            <div className="my-4 py-4 border rounded-lg shadow-lg bg-white">
              <div className="flex flex-col items-center p-4">
                <div className="w-full mb-4">
                  <div className="flex justify-center">
                    <Image 
                      src={card.image} 
                      className="cursor-pointer rounded-lg" 
                      width={300} 
                      height={150} 
                      alt="profile picture" 
                      onClick={() => togglePopup(index)} 
                    />
                  </div> 
                </div>
                <div className="w-full text-center">
                  <h4 className="text-gray-700 font-bold text-base mb-2">{card.companyName}</h4>
                  <p className="text-sm text-gray-500 mb-2">
                    <strong>Technologies:</strong> {card.technologies}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Use the Popup component */}
      {currentCard !== null && (
        <Popup 
          isPopupOpen={isPopupOpen} 
          togglePopup={() => togglePopup(null)} 
          imageSrc={cardData[currentCard].image} 
          productName={cardData[currentCard].productName}
          companyName={cardData[currentCard].companyName}
          technologies={cardData[currentCard].technologies}
          module={cardData[currentCard].module}
          description={cardData[currentCard].description}
          link={cardData[currentCard].link}
        />
      )}
    </main>
  );
}

