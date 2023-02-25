import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./routes/Home";
import Pinterest from "./componentes/Pinterest";
import Upload from "./componentes/Upload";
import "./assets/styles/index.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/Pinterest" element={<Pinterest />} />
        <Route exact path="/Upload" element={<Upload />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
