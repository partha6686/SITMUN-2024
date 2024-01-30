import "./App.css";
import Header from "./components/shared/Header";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Team from "./pages/Team";
import Home from "./pages/Home";
import Committee from "./pages/Committee";
import { ChakraProvider } from '@chakra-ui/react'

function App() {
  return (
    <div>
    <ChakraProvider>
      <BrowserRouter>
        <Routes>
          
          <Route path="/" element={<Home />} />
          <Route path="/teams" element={<Team />} />
          <Route path="/committee" element={<Committee />} />
        </Routes>
      </BrowserRouter>
      </ChakraProvider>
      </div>
  );
}

export default App;
