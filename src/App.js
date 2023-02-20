import { BrowserRouter } from "react-router-dom";
import "./App.css";
import About from "./components/About/About";
import Header from "./components/Header/Header";
import Navbar from "./components/Header/Navbar";
import Skills from "./components/Skills/Skills";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <About />
        <Skills />
      </div>
    </BrowserRouter>
  );
}

export default App;
