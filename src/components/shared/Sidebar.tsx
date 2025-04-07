import React from "react";
import { LayoutDashboard, Users, Settings, LogOut, X } from "lucide-react";
import clsx from "clsx";

interface SidebarProps {
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
}

export const Sidebar: React.FC<SidebarProps> = ({ isOpen, setIsOpen }) => {
  return (
    <>
      {/* Overlay for mobile */}
      <div
        className={clsx(
          "fixed inset-0 z-30 bg-black bg-opacity-40 md:hidden transition-opacity",
          isOpen ? "block" : "hidden"
        )}
        onClick={() => setIsOpen(false)}
      />

      <aside
        className={clsx(
          "fixed z-40 top-0 left-0 h-full w-64 bg-white shadow-lg transition-transform transform md:translate-x-0",
          {
            "-translate-x-full": !isOpen,
          }
        )}
      >
        <div className="flex items-center justify-between p-4 border-b">
          <span className="text-xl font-bold">HRM</span>
          <button className="md:hidden" onClick={() => setIsOpen(false)}>
            <X />
          </button>
        </div>

        <nav className="p-4 space-y-4">
          <SidebarItem icon={<LayoutDashboard />} label="Dashboard" />
          <SidebarItem icon={<Users />} label="Employees" />
          <SidebarItem icon={<Settings />} label="Settings" />
        </nav>

        <div className="mt-auto p-4 border-t">
          <SidebarItem icon={<LogOut />} label="Logout" />
        </div>
      </aside>
    </>
  );
};

const SidebarItem = ({
  icon,
  label,
}: {
  icon: React.ReactNode;
  label: string;
}) => (
  <button className="flex items-center space-x-3 text-gray-700 hover:text-black transition-colors w-full">
    <span>{icon}</span>
    <span>{label}</span>
  </button>
);
