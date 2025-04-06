import { ReactNode } from "react";

type ActionButtonProps = {
  icon: ReactNode;
  label: string;
  onClick?: () => void;
};

export const ActionButton = ({ icon, label, onClick }: ActionButtonProps) => (
  <button 
    onClick={onClick}
    className="flex flex-col items-center justify-center p-4 rounded-lg border border-gray-200 hover:bg-gray-50 transition-colors"
  >
    <div className="p-3 mb-2 rounded-full bg-blue-100 text-blue-600">
      {icon}
    </div>
    <span className="text-sm font-medium">{label}</span>
  </button>
);