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
                  <span className="text-blue-500 cursor-pointer pl-5 mt-2 md:mt-0 md:pr-20">
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

export function ShantaAsset({ initialPopupState }: ErpProps) {
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
                src={ShantaAssetImg} 
                className="mr-2 cursor-pointer" 
                width={300} 
                height={150} 
                alt="profile picture" 
                onClick={togglePopup} 
              />
            </div> 
          </div>
          
          <div className="w-full md:w-2/3 md:ml-4 text-center md:text-left">
            <h4 className="text-gray-700 font-bold text-base">Capital Asset Management System (CAMS)</h4>
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
                  <h4 className="text-sm mt-1 text-gray-500">Company Name: Shanta Asset Management Limited</h4>
                  <span className="text-blue-500 cursor-pointer pl-5 mt-2 md:mt-0 md:pr-20">
                    <a href="https://webportal.shanta-aml.com/" target='_blank'>webportal.shanta-aml.com</a>
                  </span>
                </div>
            <h4 className="text-sm mt-1 text-gray-500 "><em>Module : Back-Office Application, Customer Portal, Mobile Apps </em></h4>
            <h4 className="text-sm mt-1 text-gray-500 ">Technologies : MS SQL Server, PHP,Zend, Laravel, JavaScript, jQuery </h4>
            <h4 className="text-sm mt-1 text-gray-500 italic">
              Project Description: 
              The Capital Asset Management System (CAMS) includes several features similar to those in mutual fund software. It tracks and manages assets, calculates Net Asset Value (NAV), and handles portfolio allocations. CAMS also supports investor account management with functionalities like account setup, transaction processing, and statement generation. It ensures regulatory compliance through automated reporting and anti-money laundering (AML) checks. Additionally, CAMS provides robust reporting and analytics for fund performance, investor activities, and financial data. Integration with financial systems and strong security measures are also essential components, ensuring data integrity and protection.
            </h4>
          </div>
        </div>
      </div>

      {/* Use the Popup component */}
      <Popup 
        isPopupOpen={isPopupOpen} 
        togglePopup={togglePopup} 
        imageSrc={ShantaAssetImg} 
      />
    </main>
  );
}

export function UcbAsset({ initialPopupState }: ErpProps) {
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
                src={UcbAssetImg} 
                className="mr-2 cursor-pointer" 
                width={300} 
                height={150} 
                alt="profile picture" 
                onClick={togglePopup} 
              />
            </div> 
          </div>
          
          <div className="w-full md:w-2/3 md:ml-4 text-center md:text-left">
            <h4 className="text-gray-700 font-bold text-base">Capital Asset Management System (CAMS)</h4>
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
                  <h4 className="text-sm mt-1 text-gray-500">Company Name: UCB Asset Management Limited</h4>
                  <span className="text-blue-500 cursor-pointer pl-5 mt-2 md:mt-0 md:pr-20">
                    <a href="http://webportal.ucbasset.com/" target='_blank'>webportal.ucbasset.com</a>
                  </span>
                </div>
            <h4 className="text-sm mt-1 text-gray-500 "><em>Module : Back-Office Application, Customer Portal, Mobile Apps </em></h4>
            <h4 className="text-sm mt-1 text-gray-500 ">Technologies : MS SQL Server, PHP,Zend, Laravel, JavaScript, jQuery </h4>
            <h4 className="text-sm mt-1 text-gray-500 italic">
              Project Description: 
              The Capital Asset Management System (CAMS) includes several features similar to those in mutual fund software. It tracks and manages assets, calculates Net Asset Value (NAV), and handles portfolio allocations. CAMS also supports investor account management with functionalities like account setup, transaction processing, and statement generation. It ensures regulatory compliance through automated reporting and anti-money laundering (AML) checks. Additionally, CAMS provides robust reporting and analytics for fund performance, investor activities, and financial data. Integration with financial systems and strong security measures are also essential components, ensuring data integrity and protection.
            </h4>
          </div>
        </div>
      </div>

      {/* Use the Popup component */}
      <Popup 
        isPopupOpen={isPopupOpen} 
        togglePopup={togglePopup} 
        imageSrc={UcbAssetImg} 
      />
    </main>
  );
}

export function IclAsset({ initialPopupState }: ErpProps) {
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
                src={IlcAssetImg} 
                className="mr-2 cursor-pointer" 
                width={300} 
                height={150} 
                alt="profile picture" 
                onClick={togglePopup} 
              />
            </div> 
          </div>
          
          <div className="w-full md:w-2/3 md:ml-4 text-center md:text-left">
            <h4 className="text-gray-700 font-bold text-base">Capital Asset Management System (CAMS)</h4>
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
                  <h4 className="text-sm mt-1 text-gray-500">Company Name: Impress Capital Limited.</h4>
                  <span className="text-blue-500 cursor-pointer pl-5 mt-2 md:mt-0 md:pr-20">
                    <a href="https://portal.impresscapital.com/" target='_blank'>portal.impresscapital.com</a>
                  </span>
                </div>
            <h4 className="text-sm mt-1 text-gray-500 "><em>Module : Back-Office Application, Customer Portal, Mobile Apps </em></h4>
            <h4 className="text-sm mt-1 text-gray-500 ">Technologies : MS SQL Server, PHP,Zend, Laravel, JavaScript, jQuery </h4>
            <h4 className="text-sm mt-1 text-gray-500 italic">
              Project Description: 
              The Capital Asset Management System (CAMS) includes several features similar to those in mutual fund software. It tracks and manages assets, calculates Net Asset Value (NAV), and handles portfolio allocations. CAMS also supports investor account management with functionalities like account setup, transaction processing, and statement generation. It ensures regulatory compliance through automated reporting and anti-money laundering (AML) checks. Additionally, CAMS provides robust reporting and analytics for fund performance, investor activities, and financial data. Integration with financial systems and strong security measures are also essential components, ensuring data integrity and protection.
            </h4>
          </div>
        </div>
      </div>

      {/* Use the Popup component */}
      <Popup 
        isPopupOpen={isPopupOpen} 
        togglePopup={togglePopup} 
        imageSrc={IlcAssetImg} 
      />
    </main>
  );
}

export function IdlcAsset({ initialPopupState }: ErpProps) {
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
                src={IdlcAssetImg} 
                className="mr-2 cursor-pointer" 
                width={300} 
                height={150} 
                alt="profile picture" 
                onClick={togglePopup} 
              />
            </div> 
          </div>
          
          <div className="w-full md:w-2/3 md:ml-4 text-center md:text-left">
            <h4 className="text-gray-700 font-bold text-base">Capital Asset Management System (CAMS)</h4>
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
                  <h4 className="text-sm mt-1 text-gray-500">Company Name: IDLC Asset Management Limited.</h4>
                  <span className="text-blue-500 cursor-pointer pl-5 mt-2 md:mt-0 md:pr-20">
                    <a href="https://aml.idlc.com/" target='_blank'>aml.idlc.com</a>
                  </span>
                </div>
            <h4 className="text-sm mt-1 text-gray-500 "><em>Module : Back-Office Application, Customer Portal, Mobile Apps </em></h4>
            <h4 className="text-sm mt-1 text-gray-500 ">Technologies : MS SQL Server, PHP,Zend, Laravel, JavaScript, jQuery </h4>
            <h4 className="text-sm mt-1 text-gray-500 italic">
              Project Description: 
              The Capital Asset Management System (CAMS) includes several features similar to those in mutual fund software. It tracks and manages assets, calculates Net Asset Value (NAV), and handles portfolio allocations. CAMS also supports investor account management with functionalities like account setup, transaction processing, and statement generation. It ensures regulatory compliance through automated reporting and anti-money laundering (AML) checks. Additionally, CAMS provides robust reporting and analytics for fund performance, investor activities, and financial data. Integration with financial systems and strong security measures are also essential components, ensuring data integrity and protection.
            </h4>
          </div>
        </div>
      </div>

      {/* Use the Popup component */}
      <Popup 
        isPopupOpen={isPopupOpen} 
        togglePopup={togglePopup} 
        imageSrc={IdlcAssetImg} 
      />
    </main>
  );
}

export function SandhaniAsset({ initialPopupState }: ErpProps) {
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
                src={SandhaniAssetImg} 
                className="mr-2 cursor-pointer" 
                width={300} 
                height={150} 
                alt="profile picture" 
                onClick={togglePopup} 
              />
            </div> 
          </div>
          
          <div className="w-full md:w-2/3 md:ml-4 text-center md:text-left">
            <h4 className="text-gray-700 font-bold text-base">Capital Asset Management System (CAMS)</h4>
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
                  <h4 className="text-sm mt-1 text-gray-500">Company Name: Sandhani Asset Management Limited</h4>
                  <span className="text-blue-500 cursor-pointer pl-5 mt-2 md:mt-0 md:pr-20">
                    <a href="https://sandhaniaml.com/" target='_blank'>sandhaniaml.com</a>
                  </span>
                </div>
            <h4 className="text-sm mt-1 text-gray-500 "><em>Module : Back-Office Application, Customer Portal, Mobile Apps </em></h4>
            <h4 className="text-sm mt-1 text-gray-500 ">Technologies : MS SQL Server, PHP,Zend, Laravel, JavaScript, jQuery </h4>
            <h4 className="text-sm mt-1 text-gray-500 italic">
              Project Description: 
              The Capital Asset Management System (CAMS) includes several features similar to those in mutual fund software. It tracks and manages assets, calculates Net Asset Value (NAV), and handles portfolio allocations. CAMS also supports investor account management with functionalities like account setup, transaction processing, and statement generation. It ensures regulatory compliance through automated reporting and anti-money laundering (AML) checks. Additionally, CAMS provides robust reporting and analytics for fund performance, investor activities, and financial data. Integration with financial systems and strong security measures are also essential components, ensuring data integrity and protection.
            </h4>
          </div>
        </div>
      </div>

      {/* Use the Popup component */}
      <Popup 
        isPopupOpen={isPopupOpen} 
        togglePopup={togglePopup} 
        imageSrc={SandhaniAssetImg} 
      />
    </main>
  );
}

export function AimsAsset({ initialPopupState }: ErpProps) {
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
                src={AimsAssetImg} 
                className="mr-2 cursor-pointer" 
                width={300} 
                height={150} 
                alt="profile picture" 
                onClick={togglePopup} 
              />
            </div> 
          </div>
          
          <div className="w-full md:w-2/3 md:ml-4 text-center md:text-left">
            <h4 className="text-gray-700 font-bold text-base">Capital Asset Management System (CAMS)</h4>
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
                  <h4 className="text-sm mt-1 text-gray-500">Company Name: Aims Of Bangladesh Limited</h4>
                  <span className="text-blue-500 cursor-pointer pl-5 mt-2 md:mt-0 md:pr-20">
                    <a href="https://gb-unit-fund.aims-bangladesh.com/" target='_blank'>gb-unit-fund.aims-bangladesh.com</a>
                  </span>
                </div>
            <h4 className="text-sm mt-1 text-gray-500 "><em>Module : Back-Office Application, Customer Portal, Mobile Apps </em></h4>
            <h4 className="text-sm mt-1 text-gray-500 ">Technologies : MS SQL Server, PHP,Zend, Laravel, JavaScript, jQuery </h4>
            <h4 className="text-sm mt-1 text-gray-500 italic">
              Project Description: 
              The Capital Asset Management System (CAMS) includes several features similar to those in mutual fund software. It tracks and manages assets, calculates Net Asset Value (NAV), and handles portfolio allocations. CAMS also supports investor account management with functionalities like account setup, transaction processing, and statement generation. It ensures regulatory compliance through automated reporting and anti-money laundering (AML) checks. Additionally, CAMS provides robust reporting and analytics for fund performance, investor activities, and financial data. Integration with financial systems and strong security measures are also essential components, ensuring data integrity and protection.
            </h4>
          </div>
        </div>
      </div>

            {/* Use the Popup component */}
      <Popup 
        isPopupOpen={isPopupOpen} 
        togglePopup={togglePopup} 
        imageSrc={AimsAssetImg} 
      />
    </main>
  );
}

