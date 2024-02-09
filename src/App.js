import Navbar from "./components/Navbar/Navbar.js";
import "./App.css"
import Intro from "./components/Intro/Intro.jsx";
import Services from "./components/Services/Services.jsx";
import Experience from "./components/Experience/Experience.jsx";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Intro />
      <Services />
      <Experience />
    </div>
  );
}

export default App;
