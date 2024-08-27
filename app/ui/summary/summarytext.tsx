'use client';
import clsx from 'clsx';
import { usePathname } from 'next/navigation';
export default function SummaryText() {
  const pathname = usePathname();
  return (
    <div className="flex h-full flex-col px-3 py-4  md:px-4">
    <div className="flex   justify-between border-b  pb-4">  
   

          <div className="mb-2 flex items-center">
            <div>
         
              <h4 className="mt-10 text-sm md:text-2xl ">Hi There...</h4>
              <h4 className="my-4 text-gray-700 font-bold text-xl md:text-4xl">Saddam Hossain <span className='font-normal text-sm md:text-lg'>speaking</span></h4>
              {/* <h4 className="text-sm  text-gray-500  md:text-lg "> Software Architect </h4> */}
              <h4 className="text-sm  text-gray-500  md:text-lg "> IT Professional </h4>
              <h4 className="mt-4 text-xs  text-gray-400  md:text-base ">164/2 South Jatrabari, Dhaka-1024, Dhaka, Bangladesh.</h4>
            </div>
          </div>
          <div className="mb-2 flex "> 
            
         
              <h4 className=" text-sm font-bold  text-gray-700 "><u> 
               
                

                <a
              href={"/Saddam_Hossain_Resume.pdf"}
              className={clsx(
                'flex h-[40px] grow items-center justify-left gap-2 rounded-md p-0 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-4 md:px-0',
                {
                'bg-sky-100 text-blue-600': pathname === "/Saddam_Hossain_Resume.pdf",
                },
              )}
              target= "_blank"  >

          Download Resume
            </a>
                </u></h4>
              
           
          </div>
     </div>
     <div className="flex items-center justify-between border-b border-r  my-10 p-5">                  
          <div className=" mb-2 flex items-center  ">
            <div>
              <p className="text-xs text-justify text-slate-800  md:text-base ">Experienced IT professional with a proven track record of over 12+ years in leading and delivering successful technology projects and driving product development strategies. As a Head of Project and Product, I've honed my skills in project planning, product strategy, resource allocation, and team leadership. My expertise spans across various industries, including Banking and Non-Banking Organizations.

My technical proficiency covers a wide range of front-end and back-end technologies, including HTML, CSS, JavaScript, Python, Django, SQL, and more. I hold certifications as an Oracle Certified Professional (OCP) and Red Hat Certified Engineer (RHCE), demonstrating my commitment to technical excellence.

With a strong foundation in project management methodologies, continuous process improvement, and Agile practices, I bring a strategic approach to project execution. I am passionate about translating business objectives into actionable plans, driving cross-functional collaboration, and delivering results that align with market trends and customer needs.

I hold a postgraduate diploma in Information Technology (PGDIT) from the Islamic Development Bank and an MBA from Dhaka University. My education, coupled with hands-on experience, equips me to navigate complex challenges and deliver innovative solutions.

Fluent in English and Bengali, I'm adept at effective communication and collaboration across multicultural teams. My commitment to excellence, combined with my technical acumen, has allowed me to make a meaningful impact on the organizations I've served.

I am always open to networking, discussing potential collaborations, or sharing insights on project management, product development, and technology. Feel free to connect with me, and let's explore opportunities to work together or exchange knowledge.</p>
              
            </div>
          </div>
     </div>
 </div>

  );
}
