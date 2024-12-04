import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./component/Header";
import Lociones from "./component/Lociones";
import DetalleLocion from "./component/DetalleLocion";

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Lociones category="general" />} />
        <Route path="/detalle/:id" element={<DetalleLocion />} />
        <Route path="/lociones" element={<Lociones category="lociones" />} />
        <Route path="/diseñador" element={<Lociones category="diseñador" />} />
      </Routes>
    </Router>
  );
};

export default App;


