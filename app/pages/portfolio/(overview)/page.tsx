import Heading from "./heading";
import {
  Erp,
  ShantaAsset,
  UcbAsset,
  SandhaniAsset,
  IclAsset,
  IdlcAsset,
  AimsAsset
} from "./portfolioasset";

import {
  RiverInvest,
  IbcmlInvest,
  UcbInvest,
  BeplInvest
} from "./portfolioinvestment";

import {
  Idesk, 
  Uinvest,
  Isltrade
} from "./portfoliostock";

export default async function Page() {
  return (


    <main className="h-full w-full overflow-hidden">
      <div className="flex h-screen flex-col w-full shadow-2xl bg-gray-150 overflow-hidden md:flex-grow p-4 md:flex-row">
        <div className="flex flex-col w-full md:overflow-hidden h-full">
          <div className="flex-shrink-0 w-full">
            <Heading />
          </div>
          <div className="flex-grow mb-20 overflow-y-auto w-full">
            {/* Grid container for components */}
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                <Idesk initialPopupState={false} /> 
                <Uinvest initialPopupState={false} /> 
                <Isltrade initialPopupState={false} /> 
                <BeplInvest initialPopupState={false} /> 
                <UcbInvest initialPopupState={false} /> 
                <IbcmlInvest initialPopupState={false} /> 
                <RiverInvest initialPopupState={false} /> 
                <ShantaAsset initialPopupState={false} /> 
                <UcbAsset initialPopupState={false} /> 
                <SandhaniAsset initialPopupState={false} /> 
                <IclAsset initialPopupState={false} /> 
                <IdlcAsset initialPopupState={false} /> 
                <AimsAsset initialPopupState={false} /> 
                <Erp initialPopupState={false} /> 
              </div>
          </div>
        </div>
      </div>
    </main>
  );
}
