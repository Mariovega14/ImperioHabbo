import React from "react";
import "../styles/departamentos.css";
import HabboCard from "./HabboCard"; // Asegúrate de que la ruta es correcta

const Departamentos = () => {
  const departamentos = [
    {
      nombre: "Departamento de Doctrina Militar (DDM)",
      descripcion:
        "El Departamento de Doctrina Militar tiene como objetivo mejorar la formación y capacitación de los militares...",
      administradores: [".:xGregx:.", "guiller63676"],
    },
    {
      nombre: "Departamento de Entrenamiento y Adiestramiento Militar (DEAM)",
      descripcion:
        "El Departamento de Entrenamiento y Adiestramiento Militar es el encargado de la instrucción constante del personal...",
      administradores: ["pidbulTron", "-Kout"],
    },
    {
      nombre: "Departamento de Recreación y Entretenimiento Militar (DREM)",
      descripcion:
        "El Departamento de Recreación y Entretenimiento Militar es el encargado de todas las actividades recreativas...",
      administradores: ["Fatimitalove26", "capricolnio"],
    },
    {
      nombre: "Departamento de Operaciones Militares (DOM)",
      descripcion:
        "El Departamento de Operaciones Militares es el encargado de planear y ejecutar todo tipo de estrategias...",
      administradores: ["ll-Javi-ll"],
    },
    {
      nombre: "Departamento de Personal y Valores (DPV)",
      descripcion:
        "El Departamento de Personal y Valores busca principalmente el bienestar laboral del personal...",
      administradores: ["-Ismaaeeel"],
    },
  ];

  return (
    <div className="departamentos-container">
      <h1>[EMS] DEPARTAMENTOS:</h1>
      {departamentos.map((departamento, index) => (
        <div key={index} className="departamento">
          <h2>{departamento.nombre}</h2>
          <p>{departamento.descripcion}</p>
          <div className="admin-cards">
            <strong>Administrador:</strong>
            <div className="cards-wrapper">
              {departamento.administradores.map((admin) => (
                <HabboCard key={admin} username={admin} />
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Departamentos;
