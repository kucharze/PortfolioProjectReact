import React,{ useState } from 'react'
import "../App.css";
import Baner from "../components/Baner";
import Title from "../components/Title";
import WorkDesc from "../components/WorkDesc";
import TopProjects from "../components/TopProjects";
import InProgress from "../components/InProgress";
import Footer from "../components/Footer";
import { projects, progress } from "../models/projects";
import fgClosed from "../FileClosed_blue.jpg";
import fgOpen from "../FileOpen-blue.jpg";
import com from "../Com.gif";
import wave from "../ZKwave.gif";
import Resume from "../components/Resume";

function Main() {
  const [openTop, setOpenTop] = useState(false);
  const [openProg, setOpenProg] = useState(false);
  const [exp, setExp] = useState(false);


  return (
    <div>
      <h1>about me</h1>
            {/* <h1>Title header with name and description</h1> */}
      <Title wave={wave} />

      <Resume com={com} />
      {/* <h1>Description of types of work that I have done</h1> */}
      <WorkDesc />
      <Main />
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
  )
}

export default Main
