import { Plus } from "lucide-react";
import React, { useState } from "react";
import CardComponent from "./CardComponent";
import AssignmentsComponent from "./AssignmentsComponent";
// import TopNavbarComponent from "./TopNavbarComponent";

export default function AddNewProjectComponent() {

  const [newTask, setNewTask] = useState({
    id: Date.now(),
    projectName: "",
    dueDate: "",
    progress: "",
    description: "",
  });

  const [formData, setFormData] = useState([]);


  const [errors, setErrors] = useState({});

  const validateInput = () => {
    const err = {};

    if (!newTask.projectName.trim()) {
      err.projectName = "Please input Project Name!";
    }

    if (!newTask.dueDate.trim()) {
      err.dueDate = "Please input Due Date!";
    } else {
      const selectDate = new Date(newTask.dueDate);
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      if (selectDate < today) {
        err.dueDate = "Please don't input the past date!";
      }
    }

    if (!newTask.progress) {
      err.progress = "Please select a valid progress value!";
    }

    // if (!newTask.formData.description.trim()) {
    //   err.description = "Please input any description!";
    // }

    setErrors(err);
    return Object.keys(err).length === 0;
  };

  const handleUserInput = (e) => {
    const { name, value } = e.target;
    setNewTask((prevNewTask) => ({
      ...prevNewTask,
      [name]: value,
    })
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if(!validateInput()) return;
    setFormData((prevFormData) => [...prevFormData, newTask]);

      setNewTask({
        id: Date.now(),
        projectName: "",
        dueDate: "",
        progress: "",
        description: "",
      });



  };
  // console.log("FormData : ", formData);

  // console.log("Input : ", newTask);

  // console.log("NewTask : ", newTask);

  // const handleBtnClcik = (e) =>{
  //   e.preventDefault();
  //   if(validateInput()){
  //     alert(`jfsf`);
  //   }
  // }

  // const handleBtnClcik = (e) => {
  //   e.preventDefault();
  //   if (validateInput()) {

  //     setNewTask((prevNewTask) => ({
  //       ...prevNewTask,
  //       formData: {
  //         projectName: "",
  //         dueDate: "",
  //         progress: "",
  //         description: "",
  //       },
  //     }));
  //     console.log("Input:", newTask);
  //   }
  // }

  return (
    <div className="w-full">
      {/* <TopNavbarComponent formData={formData} setNewTask={setNewTask} /> */}

      <div className="flex w-[100%] justify-between pr-4">
        <AssignmentsComponent />

        <div>
          <button
            data-modal-target="crud-modal"
            data-modal-toggle="crud-modal"
            className="text-white bg-custom-sky-blue cursor-pointer hover:bg-custom-sky-blue-500 focus:ring-3 focus:outline-none focus:ring-custom-sky-blue-500 font-medium rounded-lg text-sm px-3 py-2.5 text-center dark:bg-custom-sky-blue-500 dark:hover:bg-custom-sky-blue-500 dark:focus:ring-custom-sky-blue-500 flex items-center gap-2"
            type="button"
          >
            <Plus size={18} /> <span className="text-xs">New Project</span>
          </button>

          <div
            id="crud-modal"
            tabIndex="-1"
            aria-hidden="true"
            className="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full"
          >
            <div className="relative p-4 w-full max-w-md max-h-full">
              <div className="relative bg-white rounded-2xl shadow-sm dark:bg-gray-700">
                <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600 border-gray-200">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                    Create New Project
                  </h3>
                  <button
                    type="button"
                    className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                    data-modal-toggle="crud-modal"
                  >
                    <svg
                      className="w-3 h-3"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 14 14"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                      />
                    </svg>
                    <span className="sr-only">Close modal</span>
                  </button>
                </div>
                <form className="p-4 md:p-5" onSubmit={handleSubmit}>
                  <div className="grid gap-4 mb-4 grid-cols-2">
                    <div className="col-span-2">
                      <label
                        htmlFor="projectName"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        Project Name
                      </label>
                      <input
                        type="text"
                        name="projectName"
                        id="projectName"
                        value={formData.projectName}
                        onChange={handleUserInput}
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                        placeholder="Type Project Name"
                      />
                      {errors.projectName && <p className="text-red-500">{errors.projectName}</p>}
                    </div>

                    <div className="col-span-2">
                      <label
                        htmlFor="dueDate"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        Due Date
                      </label>
                      <input
                        type="date"
                        name="dueDate"
                        id="dueDate"
                        value={formData.dueDate}
                        onChange={handleUserInput}
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                      />
                      {errors.dueDate && <p className="text-red-500">{errors.dueDate}</p>}
                    </div>

                    <div className="col-span-2">
                      <label
                        htmlFor="progress"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        Progress
                      </label>
                      <select
                        id="progress"
                        name="progress"
                        value={formData.progress}
                        onChange={handleUserInput}
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                      >
                        <option value="">Select Progress</option>
                        <option value="100">100</option>
                        <option value="75">75</option>
                        <option value="50">50</option>
                        <option value="25">25</option>
                      </select>
                      {errors.progress && <p className="text-red-500">{errors.progress}</p>}
                    </div>

                    <div className="col-span-2">
                      <label
                        htmlFor="description"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        Project Description
                      </label>
                      <textarea
                        id="description"
                        name="description"
                        value={formData.description}
                        onChange={handleUserInput}
                        rows="4"
                        className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Write product description here"
                      ></textarea>
                      {errors.description && <p className="text-red-500">{errors.description}</p>}
                    </div>
                  </div>

                  <div className="flex justify-end gap-4 mt-4">
                    <button
                      type="submit"
                      // onClick={handleBtnClcik}
                      className="text-white bg-custom-sky-blue hover:bg-custom-sky-blue-500 focus:ring-3 focus:outline-none focus:ring-custom-sky-blue-500 font-medium rounded-lg text-sm px-3 py-2.5 text-center dark:bg-custom-sky-blue-500 dark:hover:bg-custom-sky-blue-500 dark:focus:ring-custom-sky-blue-500"
                    >
                      Create
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>

      </div>
      <div className="grid grid-cols-3 gap-4 h-[55vh] overflow-auto">


        {formData.map((data) => {
          return (
            <CardComponent key={data.id} project={data} />
          )
        })}

      </div>
    </div>

  );
}
