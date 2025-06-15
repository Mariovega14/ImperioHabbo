import React from "react";
import "../styles/Uniformidad.css";
import { FileText } from "lucide-react";

const documentos = [
  {
    nombre: "[EMS] Plataformas de Comunicación",
    link: "https://docs.google.com/document/d/1UMS2tCKv7IBSH6eXhoe3LvS6NHuOZs85WajjBfXyfwM/edit?tab=t.0",
  },
  {
    nombre: "[EMS] Régimen Disciplinario",
    link: "https://docs.google.com/document/d/1YLmy7xbPUZpPKFJ_3_gMU2Ck7dK_Mo9SaL4pE86jeDU/edit?usp=drivesdk",
  },
  {
    nombre: "[EMS] Uniformidad e Imagen",
    link: "https://docs.google.com/document/d/1TBFJ1s3SIK2SKk0ATUGEfo4rY0Dr6bXpBEvEnrkmJ8o/edit?tab=t.0",
  },
  {
    nombre: "[EMS] Constitución del ejército",
    link: "https://docs.google.com/document/d/18Bi7iWbUfg8Z_QVvLvYXgW-HRl47JaJeBCNkHklhkkE/edit?usp=drivesdk",
  },
  {
    nombre: "[EMS] Membresía",
    link: "https://docs.google.com/document/d/1NPcstV4jaDkeA5_tNt9drEWCnYL4b1GvOGLZJhaKW94/edit?tab=t.0",
  },
  {
    nombre: "[EMS] Rango por Experiencia",
    link: "https://docs.google.com/forms/d/1p8OcBvMU8IWt-TZrAFmfYjBO1lNbKOQ7lEUJseyR1e0/edit?usp=drivesdk",
  },
];

const Documentos = () => {
  return (
    <div className="documentos-container">
      <h1 className="documentos-title">Documentos EMS</h1>
      <div className="documentos-card">
        <ul className="documentos-list">
          {documentos.map((doc, index) => (
            <li key={index}>
              <a
                href={doc.link}
                target="_blank"
                rel="noopener noreferrer"
                className="documentos-link"
              >
                <FileText size={18} className="icono-documento" />
                {doc.nombre}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Documentos;
