"use client";
import { useState } from 'react';
import Image from 'next/image';
import { Popup } from "@/app/ui/common/popup"; // Import the Popup component
import IdeskImg from "@/public/portfolio/stock/idesk.png";
import IifdcImg from "@/public/portfolio/stock/iidfc.png";
import UinvestImg from "@/public/portfolio/stock/ucb.png";




type ErpProps = {
  initialPopupState: boolean;
};

export function Idesk({ initialPopupState }: ErpProps) {
  const [isPopupOpen, setIsPopupOpen] = useState(initialPopupState);
  const [currentCard, setCurrentCard] = useState<number | null>(null); // Track which card is clicked

  const togglePopup = (cardIndex: number | null) => {
    setIsPopupOpen(!isPopupOpen);
    setCurrentCard(cardIndex);
  };

  const cardData = [
    {
      image: IdeskImg,
      productName: "iDesk",
      companyName: "BRAC EPL Stock Brokerage Limited",
      technologies: "MySQL Database, PHP,Laravel, JavaScript, jQuery",
      link:"https://idesk.bracepl.com",
      module: "Customer Portal & Mobile App",
      description: "A stock brokerage customer portal software offers functionalities designed to enhance trading, account management, and financial tracking for users. Core features include account management with secure login and profile options, trading capabilities with real-time stock quotes, and various order types. Users can manage their portfolios, view holdings, and analyze performance, while accessing research reports, market news, and analysis tools. The portal supports fund transfers, displays transaction history, and allows users to set up custom alerts. Reporting features provide access to account statements and tax documents, while integrated customer support and mobile access ensure convenience. Security features, like encryption and compliance with financial regulations, are also included to protect user data.",
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

export function Uinvest({ initialPopupState }: ErpProps) {
  const [isPopupOpen, setIsPopupOpen] = useState(initialPopupState);
  const [currentCard, setCurrentCard] = useState<number | null>(null); // Track which card is clicked

  const togglePopup = (cardIndex: number | null) => {
    setIsPopupOpen(!isPopupOpen);
    setCurrentCard(cardIndex);
  };

  const cardData = [
    {
      image: UinvestImg,
      productName: "iDesk",
      companyName: "UCB Stock Brokerage Limited",
      technologies: "MySQL Database, PHP,Laravel, JavaScript, jQuery",
      link:"https://uinvest.ucbstock.com.bd:8542",
      module: "Customer Portal & Mobile App",
      description: "A stock brokerage customer portal software offers functionalities designed to enhance trading, account management, and financial tracking for users. Core features include account management with secure login and profile options, trading capabilities with real-time stock quotes, and various order types. Users can manage their portfolios, view holdings, and analyze performance, while accessing research reports, market news, and analysis tools. The portal supports fund transfers, displays transaction history, and allows users to set up custom alerts. Reporting features provide access to account statements and tax documents, while integrated customer support and mobile access ensure convenience. Security features, like encryption and compliance with financial regulations, are also included to protect user data.",
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

export function Isltrade({ initialPopupState }: ErpProps) {
  const [isPopupOpen, setIsPopupOpen] = useState(initialPopupState);
  const [currentCard, setCurrentCard] = useState<number | null>(null); // Track which card is clicked

  const togglePopup = (cardIndex: number | null) => {
    setIsPopupOpen(!isPopupOpen);
    setCurrentCard(cardIndex);
  };

  const cardData = [
    {
      image: IifdcImg,
      productName: "Isltrade",
      companyName: "IIDFC Securities Limited",
      technologies: "MySQL Database, PHP,Laravel, JavaScript, jQuery",
      link:"http://isltrade.iidfcsecurities.com",
      module: "Customer Portal & Mobile App",
      description: "A stock brokerage customer portal software offers functionalities designed to enhance trading, account management, and financial tracking for users. Core features include account management with secure login and profile options, trading capabilities with real-time stock quotes, and various order types. Users can manage their portfolios, view holdings, and analyze performance, while accessing research reports, market news, and analysis tools. The portal supports fund transfers, displays transaction history, and allows users to set up custom alerts. Reporting features provide access to account statements and tax documents, while integrated customer support and mobile access ensure convenience. Security features, like encryption and compliance with financial regulations, are also included to protect user data.",
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

