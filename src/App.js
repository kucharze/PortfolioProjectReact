import "./App.css";
import Baner from "./components/Baner";
import Title from "./components/Title";
import TopProjects from "./components/TopProjects";
import InProgress from "./components/InProgress";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import { projects, progress } from "./models/projects";
import fgClosed from "./FileClosed_blue.jpg";
import fgOpen from "./FileOpen-blue.jpg";
import com from "./Com.gif";
import wave from "./ZKwave.gif";
import { useState } from "react";
import Resume from "./components/Resume";

function App() {
  const [openTop, setOpenTop] = useState(false);
  const [openProg, setOpenProg] = useState(false);

  return (
    <div className="App">
      <Navbar />

      {/* <h1>Title header with name and description</h1> */}
      <Title wave={wave} />

      <Resume com={com} />

      <div className="projects">
        <button
          // className="btn"
          className={"btn"}
          onClick={() => {
            setOpenTop(!openTop);
          }}
        >
          Completed projects
          <br />
          <img src={openTop ? fgOpen : fgClosed} alt="" className="fileCab" />
        </button>
        <button
          className={"btn"}
          onClick={() => {
            setOpenProg(!openProg);
          }}
        >
          In progress projects
          <br />
          <img src={openProg ? fgOpen : fgClosed} alt="" className="fileCab" />
        </button>
      </div>
      {/* <h1>Top projects</h1> */}
      <div className="topProjectList">
        {openTop && <TopProjects projects={projects} />}
      </div>

      {/* <h1>In progress projects</h1> */}

      <div className="inProgressList">
        {openProg && <InProgress project={progress} />}
      </div>

      <div className="games">
        <h1></h1>
        <Baner />
      </div>

      {/* <h1>The footer/ Maybe with other socials</h1> */}
      <Footer />
    </div>
  );
}

export default App;
