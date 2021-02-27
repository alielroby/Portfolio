import "./App.css";
import Header from "./Components/Local/Header/Header";
import WebModeC from "./Public/DarkMode/DarkMode";
import "./Public/DarkMode/DarkMode.scss";
import { BrowserRouter } from "react-router-dom";
import About from "./Components/Local/AboutUs/About";
import Services from "./Components/Local/Services/Services";
import Resume from "./Components/Local/Resume/Resume";
import "./Components/Global/Animations/Animations.scss";
import Pricing from "./Components/Local/Pricing/Pricing";
function App() {
  return (
    <div className="App">
      <WebModeC />
      <BrowserRouter>
        <Header />
        <About />
        <Services />
        <Resume />
        <Pricing />
      </BrowserRouter>
    </div>
  );
}

export default App;

