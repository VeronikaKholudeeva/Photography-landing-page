import { BrowserRouter } from "react-router-dom";
import "./App.css";
import About from "./components/About/About";
import Contacts from "./components/Contacts/Contacts";
import Header from "./components/Header/Header";
import Portfolio from "./components/Portfolio/Portfolio";

import Skills from "./components/Skills/Skills";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <About />
        <Skills />
        <Portfolio />
        <Contacts />
      </div>
    </BrowserRouter>
  );
}

export default App;
