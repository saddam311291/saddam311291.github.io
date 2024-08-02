import SideNav from "@/app/ui/sidebar/sidenav";
import AppImage from "@/app/ui/summary/appimage";
import SummaryText from "@/app/ui/summary/summarytext";
import NavLinks from "@/app/ui/summary/nav-links";


export default function Page() {
  return (
    <div className="flex flex-col md:flex-row md:overflow-hidden">
    <div className="w-full flex-col md:w-56">
      <SideNav />
    </div>
    <div className="flex-grow p-6 overflow-y-auto bg-gray-50 md:p-12 flex flex-col md:flex-row md:overflow-hidden">
      <div className="flex flex-col w-full shadow-2xl bg-gray-150 md:flex-grow p-4 md:overflow-hidden md:flex-row">
        <div className="flex flex-col md:flex-shrink-0 md:w-1/4 md:overflow-hidden">
          <AppImage />
          <NavLinks />
        </div>
        <div className="flex flex-col bg-gray-150 md:flex-grow p-4 mt-10 overflow-y-auto md:mt-0 md:overflow-hidden md:w-3/4">
          <SummaryText />
        </div>
      </div>
      </div>
    </div>   
  );
}
