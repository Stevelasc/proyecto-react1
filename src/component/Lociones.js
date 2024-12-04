import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Lociones({ category }) {
  const [productos, setProductos] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
 
    fetch("/Lociones.json")
      .then((res) => res.json())
      .then((data) => {
        console.log("Datos cargados:", data);


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
      {productos.length > 0 ? (
        <div className="row g-4">
          {productos.map((producto) => (
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
                  <Link
                    to={`/detalle/${producto.id}`}
                    className="btn btn-primary btn-sm"
                  >
                    Detalles
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center py-5">
          <h1 className="display-4 text-primary">¡Bienvenido a Perfumes Exclusivos!</h1>
          <p className="lead text-muted">
            Explora nuestra colección de fragancias únicas. Elige una categoría para comenzar.
          </p>
          <img
            src="https://media.tenor.com/0KRT8eUbVPUAAAAM/leobylaw.gif"
            alt="Perfumes"
            className="img-fluid mt-4"
            style={{ maxHeight: "300px", objectFit: "cover" }}
          />
        </div>
      )}
    </div>
  );
}

export default Lociones;

