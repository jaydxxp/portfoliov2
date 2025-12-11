import React from "react";
interface IconTypes {
  icon: React.ReactNode;
  name: string;
}
const FrameworkIcon = ({ icon, name }: IconTypes) => {
  return (
    <div className="relative group inline-block">

      <div className="absolute -top-8 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition bg-blue-200 text-black font-bold font-satoshi text-xs px-2 py-1 rounded shadow-md pointer-events-none whitespace-nowrap">
        {name}
      </div>


      <div className="w-7 h-7 md:w-5 md:h-5 flex items-center justify-center cursor-pointer">
        {icon}
      </div>
    </div>
  );
};

export default FrameworkIcon;
