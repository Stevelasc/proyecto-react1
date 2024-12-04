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
        <Route path="/lociones" element={<Lociones category="lociones" />} />
        <Route path="/diseñador" element={<Lociones category="diseñador" />} />
      </Routes>
    </Router>
  );
};

export default App;


