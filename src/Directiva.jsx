// src/Directiva.jsx
import React from "react";
import HabboCard from "./components/HabboCard";
import "./styles/directiva.css";

const directivaPorCargo = {
  EMCO: ["iDarkGera", "anapao", "Fatimitalove26", "Desty"],
  JEDEFCO: ["Proximamente"],
  DIGEDEF: [
    ".-Fabiaan-.",
    "capricolnio",
    "-ismaaeeel",
    "pidbulTron",
    ".:xGregx:."
  ],
  Tecnico: ["MarioRS-10", "dxreck"],
};

const nombresBonitos = {
  EMCO: "EMCO (Estado Mayor Conjunto)",
  JEDEFCO: "JEDEFCO (Jefatura de la Defensa en Conjunto)",
  DIGEDEF: "DIGEDEF (Dirección General de la Defensa)",
  Tecnico: "Tecnico (General Especializado en Operaciones Tecnologicas)",
};

const Directiva = () => {
  const jerarquia = ["EMCO", "JEDEFCO", "DIGEDEF","Tecnico"];

  return (
    <div className="directiva-container">
      <h2 className="main-title">Equipo Directivo</h2>
      {jerarquia.map((cargo) => (
        <section key={cargo} className={`cargo-section cargo-${cargo}`}>
          <div className="cargo-header">
            <span className="cargo-icon">★</span>
            <h4 className="cargo-title">{nombresBonitos[cargo]}</h4>
            <span className="cargo-icon">★</span>
          </div>
          <div className="cards-wrapper">
            {directivaPorCargo[cargo].map((name) => (
              <HabboCard key={name} username={name} />
            ))}
          </div>
        </section>
      ))}
    </div>
  );
};

export default Directiva;
