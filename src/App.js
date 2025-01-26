import logo from "./logo.svg";
import "./App.css";
import { Intro } from "./components/intro/Intro";
import { Projects } from "./components/projects/Projects";
import { Contact } from "./components/contact/Contact";
import { Experience } from "./components/experience/Experience";
import { About } from "./components/about/About";

function App() {
  return (
    <div>
      <Intro />
      <Experience />
      <Projects />
      <About />
      {/* <Contact /> */}
    </div>
  );
}

export default App;
