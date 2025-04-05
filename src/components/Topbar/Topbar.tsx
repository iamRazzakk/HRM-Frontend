import { Menu, Bell, Search } from "lucide-react";

export const Topbar = ({ toggleSidebar }: { toggleSidebar: () => void }) => {
  return (
    <header className="w-full flex items-center justify-between bg-white p-4 shadow-md sticky top-0 z-20">
      <div className="flex items-center space-x-4">
        <button className="md:hidden" onClick={toggleSidebar}>
          <Menu />
        </button>
        <h1 className="text-lg font-semibold hidden md:block">Dashboard</h1>
      </div>

      <div className="flex items-center space-x-4">
        <Search className="text-gray-600 hover:text-black cursor-pointer" />
        <Bell className="text-gray-600 hover:text-black cursor-pointer" />
        <div className="w-8 h-8 bg-gray-300 rounded-full" />
      </div>
    </header>
  );
};
