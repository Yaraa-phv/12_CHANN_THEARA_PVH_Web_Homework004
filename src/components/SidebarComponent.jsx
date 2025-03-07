import React from "react";
import { sidebarList } from "../data/sidebarList";
import { LogOutIcon } from "lucide-react";

export default function SidebarComponent() {
  return (
    <div className="p-3 h-screen bg-white shadow-xl">
      {/* logo */}
      <div className="flex gap-3 items-center p-3 border-b-2 border-b-gray-200">
        <img
          src="/images/HRD Logo New.png"
          alt="hrd logo"
          width={40}
          height={40}
        />
        <h2 className="text-s font-semibold cursor-pointer">
          Korea Software <br /> HRD Center
        </h2>
      </div>

      {/* sidebar list */}
      <div className="p-4 w-full  flex flex-col justify-between min-h-10/12">
        <div className="space-y-4">
          {sidebarList?.map((option) => (
            <div
              key={option?.id}
              className={`${
                option?.id === 1 && "bg-light-gray"
              } flex items-start gap-3 py-2 px-5 rounded-xl cursor-pointer  hover:bg-gray-200 `}
            >
              <option.icon className="w-6 h-5 text-primary-text" />{" "}
              <p className="text-sm">{option.label}</p>
            </div>
          ))}
        </div>

        {/* render log out */}
        <div className="flex items-start gap-3 py-3 px-5 rounded-xl cursor-pointer hover:bg-gray-200">
          <LogOutIcon />
          <p className="text-sm">Logout</p>
        </div>
      </div>
    </div>
  );
}
