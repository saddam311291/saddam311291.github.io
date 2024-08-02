import SideNav from "@/app/ui/sidebar/sidenav";


export default function Layout({ children }: { children: React.ReactNode }) {
    return (
      <div className="flex flex-col md:flex-row md:overflow-hidden">
        <div className="w-full flex-none md:w-56">
          <SideNav/>
        </div>
        <div className="flex-grow p-6 overflow-y-auto h-screen bg-gray-50 md:p-12 flex flex-col md:flex-row md:overflow-hidden">
          {children}
        </div>
      </div>
    );
  }