// App.js

import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home"; // assuming you have a Home component
import ProductPage from "./components/ProductPage"; // assuming you have a ProductPage component

const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/product" element={<ProductPage />} />
      </Routes>
    </Router>
  );
};

export default App;
