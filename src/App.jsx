import Header from "./components/Header/Header";
import Skills from "./components/Skills/Skills";
import Projects from "./components/Projects/Projects";
import TimeLine from "./components/TimeLine/TimeLine";
import Contact from "./components/Contact/Contact";
import Copyright from "./components/Copyright/Copyright";

function App() {
  return (
    <div className={"bg-[#0D0D0D]"}>
      <Header />
      <Skills />
      <TimeLine />
      <Projects />
      <Contact />
      <Copyright />
    </div>
  );
}

export default App;
