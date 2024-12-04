import React, { useState, useEffect } from "react";

function Lociones({ category }) {
  const [productos, setProductos] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Cargar los datos desde el archivo JSON
    fetch("/Lociones.json")
      .then((res) => res.json())
      .then((data) => {
        console.log("Datos cargados:", data);

        // Actualizar el estado según la categoría
        if (category === "lociones") {
          setProductos(data.productos || []);
        } else if (category === "diseñador") {
          setProductos(data.Diseñador || []);
        } else {
          setProductos([]);
        }
        console.log("Productos actuales:", productos);
      })
      .catch((err) => {
        setError("Error al cargar los datos: " + err.message);
      });
  }, [category]);

  return (
    <div className="container mt-4">
      {error && <p className="alert alert-danger">{error}</p>}
      <div className="row g-4">
        {productos.length > 0 ? (
          productos.map((producto) => (
            <div className="col-12 col-sm-6 col-md-4 col-lg-3" key={producto.id}>
              <div className="card h-100 shadow-sm">
                <img
                  src={producto.image}
                  className="card-img-top"
                  alt={producto.name}
                  style={{
                    height: "200px",
                    objectFit: "cover",
                  }}
                />
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title">{producto.name}</h5>
                  <p className="card-text text-muted">{producto.description}</p>
                  <p className="mt-auto">
                    <strong>Precio:</strong> ${producto.price}
                  </p>
                  <p>
                    <strong>Tamaño:</strong> {producto.size}
                  </p>
                  <p>
                    <strong>Categoría:</strong> {producto.category}
                  </p>
                </div>
                <div className="card-footer text-center bg-light">
                  <button className="btn btn-primary btn-sm">Detalles</button>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center">No hay productos disponibles.</p>
        )}
      </div>
    </div>
  );
}

export default Lociones;
