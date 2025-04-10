import { ShoppingCart } from "lucide-react";
import React from "react";

// Define the type for the data prop
interface SmallCardProps {
  data: {
    title: string;
    number: number;
    iconBg: string;
    icon: React.ComponentType<{ className?: string }>; // Type for a React component that accepts className
  };
}

export default function SmallCard({ data }: SmallCardProps) {
  const {
    title,
    number,
    iconBg,
    icon: Icon, // Using 'icon' as the passed icon component from data
  } = data;

  const formattedSale = new Intl.NumberFormat("vi-VN").format(data.number);

  return (
    <div className="rounded-lg shadow-lg dark:bg-slate-700 dark:text-slate-50 text-slate-800 bg-slate-50 p-4">
      <div className="flex space-x-4">
        <div
          className={`w-12 h-12 ${iconBg} rounded-full items-center flex justify-center`}
        >
          <Icon className="text-slate-50 dark:text-slate-50" />
        </div>
        <div className="">
          <p className="text-sm"> {title}</p>
          <p className="text-xl font-bold "> {formattedSale} </p>
        </div>
      </div>
    </div>
  );
}