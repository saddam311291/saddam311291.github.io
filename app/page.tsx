import SideNav from "@/app/ui/sidebar/sidenav";



export default function Page() {
  return (
    <div className="flex flex-col md:flex-row md:overflow-hidden">
    <div className="w-full flex-col md:w-56">
      <SideNav />
    </div>
    
    </div>   
  );
}
