import Navbar from "./components/Navbar/Navbar.js";
import "./App.css"
import Intro from "./components/Intro/Intro.jsx";
import Services from "./components/Services/Services.jsx";
import Experience from "./components/Experience/Experience.jsx";
import Works from "./components/Works/Works.jsx";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Intro />
      <Services />
      <Experience />
      <Works />
    </div>
  );
}

export default App;
