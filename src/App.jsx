import "./App.css";
import SidebarComponent from "./components/SidebarComponent";
import DashboardComponent from "./components/DashboardComponent";
import TopNavbarComponent from "./components/TopNavbarComponent";
import LearningMaterialsComponent from "./components/LearningMaterialsComponent";
import AddNewProjectComponent from "./components/AddNewProjectComponent";
import CardComponent from "./components/CardComponent";
import AssignmentsComponent from "./components/AssignmentsComponent";

function App() {

  return (
    <>
      <div className="w-full h-screen flex">

        {/* SIDE BAR */}
        <div className="h-screen w-[20%] ">
          <SidebarComponent />
        </div>
        <div className="h-screen w-[80%] bg-gray-100 pl-5">
          {/* TOP NAVBAR */}
          <div className="w-full p-3">
            <TopNavbarComponent />
          </div>

          <div className="flex">
            <div className="w-[80%] h-[100%]">
              {/* DASHBOARD CARD */}
              <div className="w-full h-fit p-3">
                <DashboardComponent />
              </div>


              <div className="w-full h-[100%] p-3">
                <div className="flex w-[100%] justify-between">
                  <AssignmentsComponent/>
                  <AddNewProjectComponent/>
                </div>


                <div>
                  <CardComponent />
                </div>

              </div>
            </div>

            {/* LEARNING MATERIALS */}
            <div className="h-[100%] w-[25%]">
              <LearningMaterialsComponent/>
            </div>
          </div>

        </div>
      </div>

    </>
  );
}

export default App;
