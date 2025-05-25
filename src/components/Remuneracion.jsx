import React from "react";
import "../styles/remuneracion.css";

// Importa las imágenes que usas como íconos
import reclutaIcon from "../../public/placas/recluta real.gif";
import caballeriaIcon from "../../public/placas/caballeria.gif";
import suboficialIcon from "../../public/placas/suboficial.gif";
import oficialEliteIcon from "../../public/placas/oficialelite.gif";
import oficialSuperiorIcon from "../../public/placas/oficialsuperior.gif";
import oficialGeneralIcon from "../../public/placas/oficialgeneral.gif";
import geomIcon from "../../public/placas/geom.gif"; // opcional si tienes una imagen para GEOM

const RemuneracionTable = () => {
  const rows = [
    {
      icon: reclutaIcon,
      categoria: "Reclutas",
      codigo: "REC",
      sueldo: "$10",
      publicidades: "-",
      horas: "1",
      puntos: "-",
    },
    {
      icon: caballeriaIcon,
      categoria: "Caballería",
      codigo: "CAB",
      sueldo: "$20 o 5Grados",
      publicidades: "-",
      horas: "7",
      puntos: "1",
    },
    {
      icon: suboficialIcon,
      categoria: "Suboficial",
      codigo: "SOF",
      sueldo: "$25 o 5Grados",
      publicidades: "-",
      horas: "9",
      puntos: "1.5",
    },
    {
      icon: oficialEliteIcon,
      categoria: "Oficial Élite",
      codigo: "OFE",
      sueldo: "$40 o 3Grados",
      publicidades: "1",
      horas: "12",
      puntos: "2",
    },
    {
      icon: oficialSuperiorIcon,
      categoria: "Oficial Superior",
      codigo: "OFS",
      sueldo: "$55 o 3Grados",
      publicidades: "3",
      horas: "14",
      puntos: "2.5",
    },
    {
      icon: oficialGeneralIcon,
      categoria: "Oficial General",
      codigo: "OFG",
      sueldo: "$70 o 2Grados",
      publicidades: "4",
      horas: "20",
      puntos: "3",
    },
    {
      icon: geomIcon,
      categoria: "GEOM",
      codigo: "GEOM",
      sueldo: "-",
      publicidades: "-",
      horas: "-",
      puntos: "-",
    },
  ];

  return (
    <div className="remuneracion-container">
      <h2 className="remuneracion-title">Datos del rango</h2>
      <div className="tabla-responsive">
        <table className="remuneracion-table">
          <thead>
            <tr>
              <th colSpan="4">Información militar</th>
              <th colSpan="3">Porcentajes de trabajo</th>
            </tr>
            <tr>
              <th>Placa</th>
              <th>Categoría militar</th>
              <th>Codigo</th>
              <th>Sueldo</th>
              <th>
                Publicidades
                <br />
                25%
              </th>
              <th>
                Horas laborales
                <br />
                50%
              </th>
              <th className="highlighted-header">
                Puntos de actividades
                <br />
                <span className="highlighted">25%</span>
              </th>
            </tr>
          </thead>
          <tbody>
            {rows.map((item, index) => (
              <tr key={index}>
                <td>
                  {item.icon && (
                    <img
                      src={item.icon}
                      alt={item.categoria}
                      className="rango-icon"
                    />
                  )}
                </td>
                <td>{item.categoria}</td>
                <td>{item.codigo}</td>
                <td>{item.sueldo}</td>
                <td>{item.publicidades}</td>
                <td>{item.horas}</td>
                <td>{item.puntos}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Condiciones especiales */}
      <div className="condiciones-especiales">
        <h3>Condiciones especiales según el rango</h3>
        <ul>
          <li>
            <strong>Reclutas:</strong> La paga de los Reclutas es diaria e
            inmediata.
          </li>
          <li>
            <strong>Caballería:</strong> Los miembros de Caballería solo pueden
            acumular PA asistiendo.
          </li>
          <li>
            <strong>Suboficial:</strong> Deben asistir 4 veces a ZDI (No cuenta
            como PA).
          </li>
        </ul>
      </div>

      <div className="significados-container">
        <h2 className="significados-title">Significados</h2>
        <div className="significados-box">
          <p>
            <strong>PA: </strong>Los "Puntos de Actividad" (PA) son una
            puntuación obtenida al participar en las actividades realizadas
            constantemente en la institución militar. El personal de EMS puede
            obtener estos puntos según el rol con el cual participe en dichas
            actividades, ya sea solo asistiendo (
            <strong>Actividad Asistida - AA</strong>) o dirigiendo una actividad
            (<strong>Actividad Dirigida - AD</strong>).
          </p>
          <p>
            <strong>ZdI: </strong>Es la zona por donde ingresan los Reclutas,
            invitados o rangos que juegan desde la app. A partir del rango SOF,
            quedan encargados de esta área.
          </p>
        </div>
      </div>
      <div className="idea-container">
        <h3 className="idea-title">💡</h3>
        <p className="idea-text">
          En el día de paga, cada miembro del EMS deberá elegir entre recibir su
          retribución en <strong>créditos</strong> o en <strong>grados</strong>.
          ¡Tomen la mejor decisión para su desarrollo dentro de la institución!
        </p>
      </div>
    </div>
  );
};

export default RemuneracionTable;
