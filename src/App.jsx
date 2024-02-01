import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Team from "./pages/Team";
import Home from "./pages/Home";
import Committee from "./pages/Committee";

function App() {
  return (
    <>
    
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/teams" element={<Team />} />
          <Route path="/committee" element={<Committee />} />
        </Routes>
      </BrowserRouter>
     
    </>
  );
  }

export default App;
