import About from "../About/About";
import AppBar from "../AppBar/AppBar";
import Contact from "../Contact/Contact";
import Home from "../Home/Home";
import Skills from "../Skills/Skills";
import Work from "../Work/Work";

function App() {
  return (
    <div>
      <AppBar />
      <Home />
      <About />
      <Skills />
      <Work />
      <Contact />
    </div>
  );
}

export default App;
