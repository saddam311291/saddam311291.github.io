import Heading from "./heading";
import {
  OstadCertification,
  OstadAssessment,
  RhceCert,
  RhcaCert,
  FormsCert,
  PlsqlCert,
  SqlCert
} from "./certification";
import {Skills} from "./skills";
 


export default async function Page() {
  return (
    <main className="h-full w-full   overflow-hidden">
    <div className="flex h-screen flex-col w-full shadow-2xl bg-gray-150 overflow-hidden md:flex-grow p-4 md:flex-row">
      <div className="flex flex-col w-full md:overflow-hidden h-full">
        <div className="flex-shrink-0 w-full">
          <Heading />
        </div>
        <div className="flex-grow  mb-20 overflow-y-auto w-full">
       
        <Skills></Skills>
        <OstadCertification></OstadCertification>
        <OstadAssessment></OstadAssessment>
        <RhceCert></RhceCert>
        <RhcaCert></RhcaCert>
        <FormsCert></FormsCert>
        <PlsqlCert></PlsqlCert>
        <SqlCert></SqlCert>

        
        </div>
      </div>
    </div>
  </main>
  
     
  );
}
 
