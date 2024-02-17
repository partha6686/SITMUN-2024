import React, { Suspense } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Team from "./pages/Team";
import Home from "./pages/Home";
import Committee from "./pages/Committee";
import "./App.css";
import LoadingComponent from "./components/shared/Loader";

function App() {
  return (
    <>
      <BrowserRouter>
        <Suspense fallback={<LoadingComponent />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/teams" element={<Team />} />
            <Route path="/committee" element={<Committee />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </>
  );
}

export default App;
