import React from "react";
import { dashboard } from "../data/dashboard";

// console.log("Dashboard Data:", dashboard.icon);

export default function DashboardComponent() {
  return (
    <div>
      <h2 className="text-m font-semibold mb-2">Dashboard</h2>

      {/* display summary on each card */}

      <div className="flex gap-5 p-4 w-full  justify-between min-h-10/12">
        {dashboard?.map((option) => (
          <div
            key={option.id}
            className={`flex bg-white gap-5 py-2.5 px-4 rounded-xl w-auto`}>
              {option.icon && <img src={option.icon} alt={option.color} className={`w-10 h-10 p-1 rounded-lg text-primary-text self-center ${option.color}`} />}
            <div>
              <p className="text-sm font-semibold">{option.totalTasks}</p>
              <p className="text-gray-400 text-xs">{option.label}</p>
            </div>
          </div>
        ))}

      </div>
    </div>
  );
}

{/* <div className="flex bg-white gap-5 py-2.5 px-4 rounded-xl w-auto">
          <div className="p-3 rounded-xl bg-custom-pink">
            <img src="/fi-sr-file.svg" alt="file icon" />
          </div>
          <div>
            <p className="text-lg font-semibold">24</p>
            <p className="text-gray-400 text-sm">Total Assignments</p>
          </div>
        </div> */}