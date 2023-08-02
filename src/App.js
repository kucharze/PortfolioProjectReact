import logo from "./logo.svg";
import "./App.css";
import Baner from "./components/Baner";
import Title from "./components/Title";
import WorkDesc from "./components/WorkDesc";
import TopProjects from "./components/TopProjects";
import InProgress from "./components/InProgress";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import { projects, progress } from "./models/projects";
import fgClosed from "./FCGclosed.jpg";

function App() {
  return (
    <div className="App">
      <Navbar />

      {/* <h1>Title header with name and description</h1> */}
      <Title />

      {/* <h1>Description of types of work that I have done</h1> */}
      <WorkDesc />

      {/* <h1>Top projects</h1> */}
      <div className="topProjectList">
        <button className="btn">
          Top projects
          <br />
          <img src={fgClosed} alt="" className="fileCab" />
        </button>
        <TopProjects projects={projects} />
      </div>

      {/* <h1>In progress projects</h1> */}

      <div className="inProgressList">
        <button className="btn">
          In progress projects
          <br />
          <img src={fgClosed} alt="" className="fileCab" />
        </button>
        <InProgress project={progress} />
      </div>

      {/* <h1>The footer/ Maybe with other socials</h1> */}
      <Footer />
    </div>
  );
}

export default App;
