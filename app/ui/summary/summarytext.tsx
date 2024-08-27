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
              <p className="text-xs text-justify text-slate-800  md:text-base ">
              Experienced IT professional with 12+ years of expertise in leading technology projects and product development. Proficient in front-end and back-end technologies, including HTML, CSS, JavaScript,Node.js,Next.js,PHP,Laravel,Wordpress, Python, Django, and SQL. Certified Oracle Certified Professional (OCP) and Red Hat Certified Engineer (RHCE). Strong background in project planning, Agile methodologies, and strategic product management across Banking and Non-Banking sectors. Holds a PGDIT from the Islamic Development Bank and an MBA from Dhaka University. Fluent in English and Bengali, with a proven ability to drive cross-functional collaboration and deliver innovative solutions.
                
              </p>
              
            </div>
          </div>
     </div>
 </div>

  );
}
