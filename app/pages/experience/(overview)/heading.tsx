
import DateDifference from "./dateDifference";
export default function Heading() {
  return (
    <div className="flex  items-center justify-between border-b">                  
          <div className="mb-2 flex items-center">
            <div className="mb-2 flex items-center ">
              <h4 className=" text-gray-700 font-bold text-xl ">Employment History </h4>
            </div>
          </div>
          <div className="mb-2 flex items-center">
             <div className="mb-2 flex items-right  text-right ">
              <DateDifference />  
             </div>
          </div>
    </div>
     
  );
}
