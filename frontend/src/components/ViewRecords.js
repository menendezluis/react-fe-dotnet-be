import React, { useState, useEffect } from "react";
import axios from "axios";
import { BASE_URL } from "../CONSTANTS";

function ViewRecords() {
  const [records, setRecords] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(BASE_URL, {
          headers: {
            "Access-Control-Allow-Origin": "*",
            "Content-Type": "application/json",
          },
        });
        setRecords(response.data);
      } catch (error) {
        console.error("Error al obtener registros:", error);
      }
    };
    fetchData();
  }, []);

  const handleEdit = (id) => {
    // Lógica para editar el registro con el ID proporcionado
    console.log("Editar registro con ID:", id);
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`${BASE_URL}/${id}`);
      setRecords(records.filter((record) => record.id !== id));
      alert("Registro eliminado exitosamente!");
    } catch (error) {
      console.error("Error al eliminar el registro:", error);
      alert("Error al eliminar el registro. Por favor, inténtelo de nuevo.");
    }
  };

  return (
    <div>
      <h2>Registros</h2>
      <table>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Apellido</th>
            <th>Edad</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {records.map((record) => (
            <tr key={record.id}>
              <td>{record.firstName}</td>
              <td>{record.lastName}</td>
              <td>{record.age}</td>
              <td>
                <button onClick={() => handleEdit(record.id)}>Editar</button>
                <button onClick={() => handleDelete(record.id)}>
                  Eliminar
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ViewRecords;
