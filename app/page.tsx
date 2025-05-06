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
    
    </div>   
  );
}
