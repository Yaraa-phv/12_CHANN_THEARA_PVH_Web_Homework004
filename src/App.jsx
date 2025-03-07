import { useState } from "react";
import "./App.css";
import SidebarComponent from "./components/SidebarComponent";
import DashboardComponent from "./components/DashboardComponent";
import TopNavbarComponent from "./components/TopNavbarComponent";
import LearningMaterialsComponent from "./components/LearningMaterialsComponent";
import AddNewProjectComponent from "./components/AddNewProjectComponent";
import CardComponent from "./components/CardComponent";
// import AssignmentsComponent from "./components/AssignmentsComponent";

function App({}) {

  const [searched, setSearch] = useState("");
  const [projects, setProjects] = useState([]);

  //DOESN'T WORK HERE :(
  const handlerSearchProject = (searchProject) => {
    setSearch(searchProject.toLowerCase());
    console.log("Project has been searched:", searchProject);
  };

  const searchedProject = projects.filter((project) =>
    project.projectName.toLowerCase().includes(searched)
  );

  return (
    <div className="grid grid-cols-10 grid-rows-[60px_1fr] min-h-screen w-full bg-[#F5F7F8]">
      <aside className="col-span-2 row-span-2">
        <SidebarComponent />
      </aside>
  
      <header className="col-span-8 p-4">
        <TopNavbarComponent handlerSearchProject={handlerSearchProject} />
      </header>
  
      <div className="col-span-8 flex gap-4 p-4">
        <main className="w-3/4 flex flex-col gap-4 p-4 h-[50vh]">
          <DashboardComponent />
          <div className="flex justify-between gap-4">
            {/* <AssignmentsComponent className="flex-1" /> */}
            <AddNewProjectComponent />
          </div>
  
          <div className="grid grid-cols-3 gap-5">
            {searchedProject.map((project, index) => (
              <CardComponent key={index} project={project} />
            ))}
          </div>
        </main>
  
        <aside className="w-1/4 py-4">
          <LearningMaterialsComponent />
        </aside>
      </div>
    </div>
  );
}

export default App;
