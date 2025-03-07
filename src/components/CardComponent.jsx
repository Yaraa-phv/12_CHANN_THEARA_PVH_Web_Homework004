import { EllipsisVertical } from "lucide-react";
import React from "react";

export default function CardComponent({ project }) {

  const dateLeft = (date) => {
  const dateNow = new Date();
  const currentDate = new Date(date);
  const calDate = currentDate - dateNow;
  const resultInDay = Math.ceil(calDate/(1000*60*60*24));
  const resultInWeek = Math.floor(resultInDay/7);

  if(resultInDay == 1){
    return `${resultInDay} day`
  } else if(resultInDay > 1){
    return `${resultInDay} days`
  }

  if(resultInWeek==1){
    return `${resultInWeek } week`
  } else if(resultInWeek > 1){
      return `${resultInWeek } weeks`
  } else {return ``}
  }

  return (
    <div className="mt-3 mr-4 text-m">
      <div className="p-6 w-[37vh] h-[37vh] bg-white rounded-2xl shadow-sm dark:bg-gray-800 dark:border-gray-700">
        <div className="flex justify-between mb-2">
          {/* date */}
          <p className={`text-custom-sky-blue text-sm font-medium`}>{project?.dueDate}</p>
          <EllipsisVertical size={20} color="#374957" />
        </div>

        <h5 className="capitalize mb-1 text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
          {project?.projectName}
        </h5>
        <p className="line-clamp-1 mb-2 text-xs font-normal text-justify text-gray-400 dark:text-gray-400">
          {project?.description || "Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit necessitatibus voluptates reprehenderit delectus aliquid, expedita autem at quas?"} 
        </p>

        {/* progress bar */}
        <div className="w-full flex justify-between font-medium mb-1">
          <p className="text-sm">Progress</p>
          <p>{project?.progress}%</p>
        </div>
        <div className="relative mb-5 w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
          <div className={` h-2.5 rounded-full text-sm ${project.progress == 25 ? "w-1/4 bg-[#F4538A]" : project.progress == 50 ? "w-1/2 bg-[#F5DD61]" : project.progress == 75 ? "w-3/4 bg-[#FAA300]" : project.progress == 100 ?  "w-full bg-[#59D5E0]" : ""}`}></div>
        </div>

        {/* deadline */}
        <div className="flex justify-end">
          <p className="font-medium bg-light-gray py-1.5 px-4 rounded-lg text-xs text-center">
            {dateLeft(project.dueDate)} Left
          </p>
        </div>
      </div>
    </div>
  );
}
