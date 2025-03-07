import React from "react";
// import { learningMaterials } from "../data/learningMaterials";

export default function FilterComponent({setSortMaterials}) {
  // prevent the page from reload
  const handleSubmit = (e) => {
    e.preventDefault();

  };

  const handleSort = (e) => {
    setSortMaterials(e.target.value);
  }

  // console.log("Sort : ",handleSort);

  return (
    <form className="mt-4 mx-4 flex justify-between" onSubmit={handleSubmit}>
      <div className="relative w-full ">
        <select
          onChange={handleSort}
          id="filterLearningMaterials"
          name="filterLearningMaterials"
          className="text-xs focus:ring-custom-sky-blue focus:border-custom-sky-blue block w-full p-4 focus:outline-none text-gray-400 border-none rounded-xl bg-light-gray"
        >
          <option hidden value="">
            Sort By
          </option>
          <optgroup label="Sort By" className="text-black text-xs">
            <option value="A-Z">A-Z</option>
            <option value="Z-A">Z-A</option>
          </optgroup>
        </select>
      </div>
    </form>
  );
}
