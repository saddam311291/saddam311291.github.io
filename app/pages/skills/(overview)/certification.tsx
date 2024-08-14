"use client"
import { useState } from 'react';
import Image from 'next/image';

import ostadcert from "@/public/certification/ostad-cert.png";
import ostadass from "@/public/certification/ostad-ass.png";
import rhece from "@/public/certification/rhce.jpeg";
import rheca from "@/public/certification/rhca.jpeg";
import forms from "@/public/certification/forms.png";
import plsql from "@/public/certification/plsql.png";
import sql from "@/public/certification/sql.png";

export function OstadCertification() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

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
                src={ostadcert} 
                className="mr-2 cursor-pointer" 
                width={300} 
                height={150} 
                alt="profile picture" 
                onClick={togglePopup} 
              />
            </div> 
          </div>
          
          <div className="w-full md:w-2/3 md:ml-4 text-center md:text-left">
            <h4 className="text-gray-700 font-bold text-base">Data Science</h4>
            <h4 className="text-sm mt-1 text-gray-500">Certification Provider: Ostad Limited</h4>
            <h4 className="text-sm mt-1 text-gray-500 ">Certification Year: 2023</h4>
            <h4 className="text-sm mt-1 text-gray-500 italic">Certification Description: The Data Science course provides a comprehensive introduction to data analysis, machine learning, and statistical modeling. It covers key topics like data collection, cleaning, and preprocessing, as well as exploratory data analysis, statistical techniques, and machine learning algorithms. Advanced topics include deep learning, natural language processing, and big data analytics. The course also emphasizes ethical considerations and best practices. Participants will work on real-world projects and case studies to apply their knowledge, with the goal of preparing for careers as Data Scientists, Data Analysts, and related roles.</h4>
          </div>
        </div>
      </div>
      {/* Popup */}
      {isPopupOpen && (
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
              src={ostadcert} 
              className="max-w-full max-h-screen" 
              alt="Full screen profile picture"
              width={800} // Adjust these values as needed
              height={800} // Adjust these values as needed
            />
          </div>
        </div>
      )}
    </main>
  );
}



export function OstadAssessment() {
    const [isPopupOpen, setIsPopupOpen] = useState(false);
  
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
            src={ostadass} 
            className="cursor-pointer" 
            width={150} 
            height={150} 
            alt="profile picture" 
            onClick={togglePopup} 
          />
        </div> 
      </div>
      
      <div className="w-full md:w-2/3 md:ml-4 text-center md:text-left">
        <h4 className="text-gray-700 font-bold text-base">Data Science (Assessment)</h4>
        <h4 className="text-sm mt-1 text-gray-500">Certification Provider: Ostad Limited</h4>
        <h4 className="text-sm mt-1 text-gray-500">Certification Year: 2023</h4>
        <h4 className="text-sm mt-1 text-gray-500 italic">
          Certification Description: The Data Science course provides a comprehensive introduction to data analysis, machine learning, and statistical modeling. It covers key topics like data collection, cleaning, and preprocessing, as well as exploratory data analysis, statistical techniques, and machine learning algorithms. Advanced topics include deep learning, natural language processing, and big data analytics. The course also emphasizes ethical considerations and best practices. Participants will work on real-world projects and case studies to apply their knowledge, with the goal of preparing for careers as Data Scientists, Data Analysts, and related roles.
        </h4>
      </div>
    </div>
  </div>

  {/* Popup */}
  {isPopupOpen && (
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
          src={ostadass} 
          className="max-w-full max-h-screen" 
          alt="Full screen profile picture"
          width={800} 
          height={800} 
        />
      </div>
    </div>
  )}
</main>

    );
  }
  
export function RhceCert() {
    const [isPopupOpen, setIsPopupOpen] = useState(false);
  
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
                  src={rhece} 
                  className="mr-2 cursor-pointer" 
                  width={300} 
                  height={300} 
                  alt="profile picture" 
                  onClick={togglePopup} 
                />
              </div> 
            </div>
            
            <div className="w-full md:w-2/3 md:ml-4 text-center md:text-left">
              <h4 className="text-gray-700 font-bold text-base"> Red Hat Certified Engineer (RHCE)</h4>
              <h4 className="text-sm mt-1 text-gray-500">Certification Provider: Red Hat® Enterprise Linux®. </h4>
              <h4 className="text-sm mt-1 text-gray-500 ">Certification Year: 2019</h4>
              <h4 className="text-sm mt-1 text-gray-500 italic">Certification Description: As teams and organizations pursue digital transformation, the Red Hat® Certified Engineer (RHCE®) credential helps you to demonstrate skills critical to managing systems in a DevOps environment. One of the key tenets of DevOps is automation, and the RHCE is an extension of the knowledge required to automate the deployment, management, and support of multisystem environments—making your credential even more valuable and relevant.

Existing or future RHCEs and Red Hat Certified System Administrators (RHCSAs®) can follow different tracks to complete or renew their RHCE certification. In this piece, we review the Red Hat Certified Engineer skill path, detailing the courses and exams needed for each track.</h4>
            </div>
          </div>
        </div>
  
        {/* Popup */}
        {isPopupOpen && (
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
                src={rhece} 
                className="max-w-full max-h-screen" 
                alt="Full screen profile picture"
                width={800} // Adjust these values as needed
                height={800} // Adjust these values as needed
              />
            </div>
          </div>
        )}
      </main>
    );
  }

  export function RhcaCert() {
    const [isPopupOpen, setIsPopupOpen] = useState(false);
  
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
                  src={rheca} 
                  className="mr-2 cursor-pointer" 
                  width={300} 
                  height={300} 
                  alt="profile picture" 
                  onClick={togglePopup} 
                />
              </div> 
            </div>
            
            <div className="w-full md:w-2/3 md:ml-4 text-center md:text-left">
              <h4 className="text-gray-700 font-bold text-base"> Red Hat Certified System Administrator (RHCA) </h4>
              <h4 className="text-sm mt-1 text-gray-500">Certification Provider: Red Hat® Enterprise Linux®. </h4>
              <h4 className="text-sm mt-1 text-gray-500 ">Certification Year: 2018</h4>
              <h4 className="text-sm mt-1 text-gray-500 italic">Certification Description: The performance-based Red Hat Certified System Administrator (RHCSA) exam (EX200) tests your knowledge in areas of system administration common across a wide range of environments and deployment scenarios. The skills tested in this exam are the foundation for system administration across all Red Hat® products.

By passing this exam, you become a Red Hat Certified System Administrator. If you choose to continue your learning journey beyond RHCSA®, the credential can also serve as a foundational step toward other certifications.  You must be an RHCSA® to become a Red Hat Certified Engineer (RHCE®).</h4>
            </div>
          </div>
        </div>
  
        {/* Popup */}
        {isPopupOpen && (
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
                src={rheca} 
                className="max-w-full max-h-screen" 
                alt="Full screen profile picture"
                width={800} // Adjust these values as needed
                height={800} // Adjust these values as needed
              />
            </div>
          </div>
        )}
      </main>
    );
  }
  
  export function FormsCert() {
    const [isPopupOpen, setIsPopupOpen] = useState(false);
  
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
                  src={forms} 
                  className="mr-2 cursor-pointer" 
                  width={300} 
                  height={300} 
                  alt="profile picture" 
                  onClick={togglePopup} 
                />
              </div> 
            </div>
            
            <div className="w-full md:w-2/3 md:ml-4 text-center md:text-left">
              <h4 className="text-gray-700 font-bold text-base"> Oracle Certified Professional (OCP) </h4>
              <h4 className="text-sm mt-1 text-gray-500">Exam Name : Build Applications with Oracle Forms </h4>
              <h4 className="text-sm mt-1 text-gray-500">Certification Provider: Oracle University </h4>
              <h4 className="text-sm mt-1 text-gray-500 ">Certification Year: 2017</h4>
              <h4 className="text-sm mt-1 text-gray-500 italic">Certification Description: The Z0-151 Oracle Fusion Middleware 11g: Build Applications with Oracle Forms course focuses on developing applications using Oracle Forms within the Oracle Fusion Middleware environment. It covers the fundamentals of Oracle Forms, including building, testing, and deploying forms applications. Participants will learn how to create data blocks, forms, and complex user interfaces, as well as how to implement triggers, validation, and customization techniques. The course also explores integrating Oracle Forms with other Oracle technologies and configuring the runtime environment for optimal performance. This course is designed for developers who want to build and maintain applications in Oracle Forms.</h4>
            </div>
          </div>
        </div>
  
        {/* Popup */}
        {isPopupOpen && (
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
                src={forms} 
                className="max-w-full max-h-screen" 
                alt="Full screen profile picture"
                width={800} // Adjust these values as needed
                height={800} // Adjust these values as needed
              />
            </div>
          </div>
        )}
      </main>
    );
  }

  export function PlsqlCert() {
    const [isPopupOpen, setIsPopupOpen] = useState(false);
  
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
                  src={plsql} 
                  className="mr-2 cursor-pointer" 
                  width={300} 
                  height={300} 
                  alt="profile picture" 
                  onClick={togglePopup} 
                />
              </div> 
            </div>
            
            <div className="w-full md:w-2/3 md:ml-4 text-center md:text-left">
              <h4 className="text-gray-700 font-bold text-base"> Oracle Certified Professional (OCP) </h4>
              <h4 className="text-sm mt-1 text-gray-500">Exam Name : Program with PL/SQL </h4>
              <h4 className="text-sm mt-1 text-gray-500">Certification Provider: Oracle University </h4>
              <h4 className="text-sm mt-1 text-gray-500 ">Certification Year: 2017</h4>
              <h4 className="text-sm mt-1 text-gray-500 italic">Certification Description: The 1Z0-144 Oracle Database 11g: Program with PL/SQL course focuses on mastering the PL/SQL programming language used in Oracle Database 11g. It covers the fundamentals of PL/SQL, including syntax, program structure, and best practices for writing efficient and maintainable code. The course also teaches how to create stored procedures, functions, packages, and triggers, and how to handle exceptions. Additionally, it includes working with advanced features like collections, bulk operations, and optimization techniques. Completing this course prepares participants for roles requiring database programming skills and leads to certification that validates their PL/SQL expertise.</h4>
            </div>
          </div>
        </div>
  
        {/* Popup */}
        {isPopupOpen && (
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
                src={plsql} 
                className="max-w-full max-h-screen" 
                alt="Full screen profile picture"
                width={800} // Adjust these values as needed
                height={800} // Adjust these values as needed
              />
            </div>
          </div>
        )}
      </main>
    );
  }

  export function SqlCert() {
    const [isPopupOpen, setIsPopupOpen] = useState(false);
  
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
                  src={sql} 
                  className="mr-2 cursor-pointer" 
                  width={300} 
                  height={300} 
                  alt="profile picture" 
                  onClick={togglePopup} 
                />
              </div> 
            </div>
            
            <div className="w-full md:w-2/3 md:ml-4 text-center md:text-left">
              <h4 className="text-gray-700 font-bold text-base"> Oracle Certified Professional (OCP) </h4>
              <h4 className="text-sm mt-1 text-gray-500">Exam Name : SQL Fundamentals  </h4>
              <h4 className="text-sm mt-1 text-gray-500">Certification Provider: Oracle University </h4>
              <h4 className="text-sm mt-1 text-gray-500 ">Certification Year: 2017</h4>
              <h4 className="text-sm mt-1 text-gray-500 italic">Certification Description: The 1Z0-051 Oracle Database 11g: SQL Fundamentals I course focuses on advanced SQL skills for Oracle databases. It covers complex query techniques, including joins and subqueries, and advanced data manipulation using SQL functions. Participants learn about transaction management, creating and managing database objects like indexes and views, and basics of PL/SQL programming. The course also emphasizes data integrity through constraints. It's designed to deepen SQL and PL/SQL knowledge and prepare for advanced database management tasks.</h4>
            </div>
          </div>
        </div>
  
        {/* Popup */}
        {isPopupOpen && (
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
                src={sql} 
                className="max-w-full max-h-screen" 
                alt="Full screen profile picture"
                width={800} // Adjust these values as needed
                height={800} // Adjust these values as needed
              />
            </div>
          </div>
        )}
      </main>
    );
  }
  
  