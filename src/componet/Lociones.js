import React, { useState, useEffect } from "react";

const Lociones = () => {
  const [lociones, setLociones] = useState([]);
  const [diseñador, setDiseñador] = useState([]);

  useEffect(() => {
    fetch("/Lociones.json")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Error al cargar el JSON");
        }
        return response.json();
      })
      .then((data) => {
        setLociones(data.lociones || []);
        setDiseñador(data.diseñador || []);
      })
      .catch((error) => console.error("Error al cargar los datos:", error));
  }, []);

  return (
    <div className="container mt-5">
      <section id="lociones">
        <h2>Lociones</h2>
        <div className="row">
          {lociones.length > 0 ? (
            lociones.map((item) => (
              <div className="col-md-4 mb-4" key={item.id}>
                <div className="card">
                  <img src={item.image} className="card-img-top" alt={item.name} />
                  <div className="card-body">
                    <h5 className="card-title">{item.name}</h5>
                    <p className="card-text">{item.description}</p>
                    <p className="card-text text-muted">Precio: ${item.price}</p>
                    <p className="card-text text-muted">Tamaño: {item.size}</p>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p>No hay lociones disponibles.</p>
          )}
        </div>
      </section>

      <section id="diseñador" className="mt-5">
        <h2>De Diseñador</h2>
        <div className="row">
          {diseñador.length > 0 ? (
            diseñador.map((item) => (
              <div className="col-md-4 mb-4" key={item.id}>
                <div className="card">
                  <img src={item.image} className="card-img-top" alt={item.name} />
                  <div className="card-body">
                    <h5 className="card-title">{item.name}</h5>
                    <p className="card-text">{item.description}</p>
                    <p className="card-text text-muted">Precio: ${item.price}</p>
                    <p className="card-text text-muted">Tamaño: {item.size}</p>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p>No hay productos de diseñador disponibles.</p>
          )}
        </div>
      </section>
    </div>
  );
};

export default Lociones;


