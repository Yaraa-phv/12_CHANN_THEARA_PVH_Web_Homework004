import React, { useState } from "react";
import { Star } from "lucide-react";
import FilterComponent from "./FilterComponent";
import { learningMaterials } from "../data/learningMaterials";

export default function LearningMaterialsComponent() {
  const [mapMaterials, setLearningMaterials] = useState(learningMaterials);

  const clickToChangeStar = (id) => {
    const updateMaterial = mapMaterials.map((e) =>
      e.id === id ? { ...e, isFavorite: !e.isFavorite } : e
    );
    setLearningMaterials(updateMaterial);
  };

  const [sortMaterials, setSortMaterials] = useState("");

  const forSort = [...mapMaterials].sort((a,b) => {
    if(sortMaterials === "A-Z"){
      return a.title.localeCompare(b.title);
    } else if(sortMaterials === "Z-A"){
      return b.title.localeCompare(a.title);
    } else{
      return 0;
    }
  })

  return (
    <div className="bg-white drop-shadow-lg rounded-2xl overflow-auto h-[80vh]">
      {/* calling filter component */}
      <FilterComponent setSortMaterials={setSortMaterials}/>


      {/* title */}
      <div className="p-4 flex justify-between items-center">
        <h2 className="text-sm font-semibold">Learning Materials</h2>
        <img className="size-5" src="/more.svg" alt="three dot" width={30} height={30} />
      </div>

      {/* materials list */}
      <div className="space-y-2">
        {forSort.map((e) => {
          return (
            <div key={e.id} className="space-y-2 bg-light-gray px-4 py-2 flex gap-5 items-center">
              <img
                src={e.image}
                alt={e.title}
                width={40}
                height={40}
                className="rounded-xl text-xs"
              />
              <div className="w-full">
                <div className="flex justify-between">
                  <p className="text-xs font-medium">{e.title}</p>
                  <button onClick={() => clickToChangeStar(e.id)} className="cursor-pointer">
                    <Star fill={e.isFavorite ? "gold" : "none"} stroke="black" size={13} />
                  </button>
                </div>
                <p className="text-gray-400 text-xs">Posted at: {e.postedAt}</p>
              </div>
            </div>
            
          );
        })}
        </div>
    </div>
  );
}
