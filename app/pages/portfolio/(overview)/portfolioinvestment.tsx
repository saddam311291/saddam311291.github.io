"use client";
import { useState } from 'react';
import Image from 'next/image';
import { Popup } from "@/app/ui/common/popup"; // Import the Popup component
import RiverImg from "@/public/portfolio/investment/riverstone.png";
import IbcmlImg from "@/public/portfolio/investment/ibcml.png";
import UcbImg from "@/public/portfolio/investment/ucb.png";
import BeplImg from "@/public/portfolio/investment/bepl.png";

type ErpProps = {
  initialPopupState: boolean;
};

export function RiverInvest({ initialPopupState }: ErpProps) {
  const [isPopupOpen, setIsPopupOpen] = useState(initialPopupState);
  const [currentCard, setCurrentCard] = useState<number | null>(null); // Track which card is clicked

  const togglePopup = (cardIndex: number | null) => {
    setIsPopupOpen(!isPopupOpen);
    setCurrentCard(cardIndex);
  };

  const cardData = [
    {
      image: RiverImg,
      productName: "Wealth Management System",
      companyName: "Riverstone Capital Limited",
      technologies: "Oracle Database, PHP, Zend, Laravel, JavaScript, jQuery",
      link:"https://www.riverstone.com.bd",
      module: "Back-Office Application, Customer Portal, Mobile Apps",
      description: "A wealth management system is a specialized software platform designed to manage high-net-worth individuals' financial assets and investment portfolios. It includes tools for portfolio management, financial planning, and client relationship management (CRM). The system provides investment research and analysis, risk management features, and comprehensive reporting. It ensures regulatory compliance and includes robust data security measures. Integration with other financial systems and scalability are also key aspects, enhancing efficiency and client service in wealth management.",
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


export function IbcmlInvest({ initialPopupState }: ErpProps) {
  const [isPopupOpen, setIsPopupOpen] = useState(initialPopupState);
  const [currentCard, setCurrentCard] = useState<number | null>(null); // Track which card is clicked

  const togglePopup = (cardIndex: number | null) => {
    setIsPopupOpen(!isPopupOpen);
    setCurrentCard(cardIndex);
  };

  const cardData = [
    {
      image: IbcmlImg,
      productName: "Wealth Management System",
      companyName: "Islami Bank Capital Management Limited",
      technologies: "Oracle Database, PHP, Zend, Laravel, JavaScript, jQuery",
      link:"https://ibcmlbd.com",
      module: "Back-Office Application, Customer Portal, Mobile Apps",
      description: "A wealth management system is a specialized software platform designed to manage high-net-worth individuals' financial assets and investment portfolios. It includes tools for portfolio management, financial planning, and client relationship management (CRM). The system provides investment research and analysis, risk management features, and comprehensive reporting. It ensures regulatory compliance and includes robust data security measures. Integration with other financial systems and scalability are also key aspects, enhancing efficiency and client service in wealth management.",
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

export function UcbInvest({ initialPopupState }: ErpProps) {
  const [isPopupOpen, setIsPopupOpen] = useState(initialPopupState);
  const [currentCard, setCurrentCard] = useState<number | null>(null); // Track which card is clicked

  const togglePopup = (cardIndex: number | null) => {
    setIsPopupOpen(!isPopupOpen);
    setCurrentCard(cardIndex);
  };

  const cardData = [
    {
      image: UcbImg,
      productName: "Wealth Management System",
      companyName: "UCB Investment Limited",
      technologies:  "Oracle Database, PHP, Zend, Laravel, JavaScript, jQuery, Next.js",
      link:"https://ucb-investment.com",
      module: "Back-Office Application, Customer Portal, Mobile Apps",
      description: "A wealth management system is a specialized software platform designed to manage high-net-worth individuals' financial assets and investment portfolios. It includes tools for portfolio management, financial planning, and client relationship management (CRM). The system provides investment research and analysis, risk management features, and comprehensive reporting. It ensures regulatory compliance and includes robust data security measures. Integration with other financial systems and scalability are also key aspects, enhancing efficiency and client service in wealth management.",
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

export function BeplInvest({ initialPopupState }: ErpProps) {
  const [isPopupOpen, setIsPopupOpen] = useState(initialPopupState);
  const [currentCard, setCurrentCard] = useState<number | null>(null); // Track which card is clicked

  const togglePopup = (cardIndex: number | null) => {
    setIsPopupOpen(!isPopupOpen);
    setCurrentCard(cardIndex);
  };

  const cardData = [
    {
      image: BeplImg,
      productName: "Wealth Management System",
      companyName: "BRAC EPL INVESTMENTS LTD.",
      technologies: "Oracle Database, PHP, Zend, Laravel, JavaScript, jQuery, Next.js",
      link:"https://www.bracepl.com/investments",
      module: "Back-Office Application, Customer Portal, Mobile Apps",
      description: "A wealth management system is a specialized software platform designed to manage high-net-worth individuals' financial assets and investment portfolios. It includes tools for portfolio management, financial planning, and client relationship management (CRM). The system provides investment research and analysis, risk management features, and comprehensive reporting. It ensures regulatory compliance and includes robust data security measures. Integration with other financial systems and scalability are also key aspects, enhancing efficiency and client service in wealth management.",
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
