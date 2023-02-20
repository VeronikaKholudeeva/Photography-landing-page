import { BrowserRouter } from "react-router-dom";
import "./App.css";
import About from "./components/About/About";
import Header from "./components/Header/Header";
import Navbar from "./components/Header/Navbar";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <About />
      </div>
    </BrowserRouter>
  );
}

export default App;
