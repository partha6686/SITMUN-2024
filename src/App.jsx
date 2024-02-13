import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Team from "./pages/Team";
import Home from "./pages/Home";
import Committee from "./pages/Committee";
import "./App.css"
import About from "./components/Home/About";

function App() {
  return (
    <>
    
      <BrowserRouter>
        <Routes>
        <Route path="/about" element={<About />} />
          <Route path="/" element={<Home />} />
          <Route path="/teams" element={<Team />} />
          <Route path="/committee" element={<Committee />} />
        </Routes>
      </BrowserRouter>
     
    </>
  );
  }

export default App;
