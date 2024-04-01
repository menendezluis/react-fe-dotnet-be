import React, { useState } from "react";
import axios from "axios";
import { BASE_URL } from "../CONSTANTS";

function CreateRecord() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [age, setAge] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(BASE_URL, {
        firstName,
        lastName,
        age,
      });
      alert("Registro creado exitosamente!");
      setFirstName("");
      setLastName("");
      setAge("");
    } catch (error) {
      console.error("Error al crear el registro:", error);
      alert("Error al crear el registro. Por favor, inténtelo de nuevo.");
    }
  };

  return (
    <div>
      <h2>Crear Nuevo Registro</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Nombre:</label>
          <input
            type="text"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </div>
        <div>
          <label>Apellido:</label>
          <input
            type="text"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </div>
        <div>
          <label>Edad:</label>
          <input
            type="number"
            value={age}
            onChange={(e) => setAge(e.target.value)}
          />
        </div>
        <button type="submit">Crear Registro</button>
      </form>
    </div>
  );
}

export default CreateRecord;
