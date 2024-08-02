import Link from 'next/link';
import Image from 'next/image';
import profilePicture from "@/public/profile.jpg";

export default function AppImage(){
  return (
    <div className="flex h-auto flex-col px-3 py-4  md:px-2">
       <div className="flex items-center justify-center border-b pb-4">                  
            <div className="mb-2 flex items-center">
              <Image src={profilePicture} className="mr-2 rounded-full" 
                width={400}  height={400} alt= 'profile picture' /> 
              </div>
        </div>
       
    </div>
  );
}
