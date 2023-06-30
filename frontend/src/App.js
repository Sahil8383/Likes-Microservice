import React from "react";
import Content from "./components/Content";
import AllPost from "./components/AllPost";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <>
      
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Content />} />
          <Route path="/allPost" element={<AllPost />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
