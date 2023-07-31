import logo from "./logo.svg";
import "./App.css";
import Baner from "./components/Baner";
import Title from "./components/Title";

function App() {
  return (
    <div className="App">
      {/* <h1>Weather banner/ Maybe use pokemnon??</h1> */}
      <Baner />
      <h1>Title header with name and description</h1>
      <Title />
      <h1>Description of types of work that I have done</h1>
      <h1>Work experience descriptions</h1>
      <h1>Top projects</h1>
      <h3>Add links to github repos</h3>
      <h1>In progress projects</h1>
      <h3>Add link to pokemon project repo</h3>
      <h1>The footer/ Maybe with other socials</h1>
    </div>
  );
}

export default App;
