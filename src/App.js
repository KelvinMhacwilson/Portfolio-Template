import Navbar from "./components/Navbar/Navbar.js";
import "./App.css"
import Intro from "./components/Intro/Intro.jsx";
import Services from "./components/Services/Services.jsx";
import Experience from "./components/Experience/Experience.jsx";
import Works from "./components/Works/Works.jsx";
import Portfolio from "./components/Portfolio/Portfolio.jsx";
import Testimonials from "./components/Testimonials/Testimonials.jsx";
import Contact from "./components/Contact/Contact.jsx";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Intro />
      <Services />
      <Experience />
      <Works />
      <Portfolio />
      <Testimonials />
      <Contact />
    </div>
  );
}

export default App;
