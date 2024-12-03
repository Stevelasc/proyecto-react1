import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./component/Header";
import Lociones from "./component/Lociones";

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Lociones />} />
        <Route path="/lociones" element={<Lociones />} />
        <Route path="/diseñador" element={<Lociones />} />
      </Routes>
    </Router>
  );
};

export default App;


