import { useState, useEffect } from "react";
import React, { Components } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./Home";



function App() {
  return (
    <Router>
      
        <Routes>
        <Route path="/" exact element={<Home />} />
      
          </Routes>
      
    </Router>
  );
}

export default App;
