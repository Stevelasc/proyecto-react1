import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const DetalleLocion = () => {
  const { id } = useParams(); 
  const [producto, setProducto] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {

    fetch("/Lociones.json")
      .then((res) => res.json())
      .then((data) => {
        const allProductos = [...data.productos, ...data.Diseñador];
        const foundProducto = allProductos.find(
          (producto) => producto.id === parseInt(id, 10)
        );
        if (foundProducto) {
          setProducto(foundProducto);
        } else {
          setError("Producto no encontrado.");
        }
      })
      .catch((err) => setError("Error al cargar los datos: " + err.message));
  }, [id]);

  if (error) {
    return <p className="alert alert-danger">{error}</p>;
  }

  if (!producto) {
    return <p className="text-center mt-4">Cargando...</p>;
  }

  return (
    <div className="container mt-4">
      <h1>{producto.name}</h1>
      <img
        src={producto.image}
        alt={producto.name}
        className="img-fluid rounded shadow"
        style={{ maxHeight: "400px", objectFit: "cover" }}
      />
      <p className="mt-3">{producto.description}</p>
      <p>
        <strong>Precio:</strong> ${producto.price}
      </p>
      <p>
        <strong>Tamaño:</strong> {producto.size}
      </p>
      <p>
        <strong>Categoría:</strong> {producto.category}
      </p>
    </div>
  );
};

export default DetalleLocion;

