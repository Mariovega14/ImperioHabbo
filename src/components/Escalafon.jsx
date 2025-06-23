import React, { useState } from "react";
import "../styles/escalafon.css";
import { Shield, Medal, ChevronUp, Star, Crown } from "lucide-react";

const escalafon = [
  {
    nombre: "RECLUTA",
    descripcion:
      "Civiles alistados en proceso de adhesión al Escuadrón Militar Supremo.",
    icono: (
      <img
        src="/placas/recluta real.gif"
        alt="EMCO"
        className="ems-icono"
        width={24}
        height={24}
      />
    ),
    rangos: [
      {
        grados: "-",
        clase: "[EMS] Recluta",
        precio: "No en Venta",
        sumaTotal: "Por Def.",
        sueldo: "10c",
      },
    ],
  },
  {
    nombre: "CABALLERÍA",
    descripcion: "Unidad principal de las Fuerzas de Seguridad del Escuadrón.",
    icono: (
      <img
        src="/placas/caballeria.gif"
        alt="EMCO"
        className="ems-icono"
        width={24}
        height={24}
      />
    ),
    rangos: [
      {
        grados: "Sdo. Raso",
        clase: "[EMS] Soldado Raso",
        precio: "8",
        sumaTotal: "8",
        sueldo: "20c",
      },
      {
        grados: "Sdo.",
        clase: "[EMS] Soldado",
        precio: "10",
        sumaTotal: "18",
        sueldo: "20c",
      },
      {
        grados: "Sdo. 1ero",
        clase: "[EMS] Soldado Primero",
        precio: "12",
        sumaTotal: "38",
        sueldo: "20c",
      },
      {
        grados: "Cbo",
        clase: "[EMS] Cabo",
        precio: "14",
        sumaTotal: "52",
        sueldo: "20c",
      },
      {
        grados: "Cboi. 1ero",
        clase: "[EMS] Cabo Primero",
        precio: "16",
        sumaTotal: "68",
        sueldo: "20c",
      },
      {
        grados: "CMY",
        clase: "[EMS] Cabo Mayor",
        precio: "18",
        sumaTotal: "86",
        sueldo: "20c",
      },
    ],
  },
  {
    nombre: "SUBOFICIALES",
    descripcion:
      "Miembros en formación profesional, parte de la Academia de Seguridad.",
    icono: (
      <img
        src="/placas/suboficial.gif"
        alt="EMCO"
        className="ems-icono"
        width={24}
        height={24}
      />
    ),
    rangos: [
      {
        grados: "Sgto.",
        clase: "[EMS] Sargento",
        precio: "20",
        sumaTotal: "106",
        sueldo: "25c",
      },
      {
        grados: "STMY",
        clase: "[EMS] Sargento Mayor",
        precio: "24",
        sumaTotal: "130",
        sueldo: "25c",
      },
      {
        grados: "Sgto. al Mando",
        clase: "[EMS] Sargento Al Mando",
        precio: "28",
        sumaTotal: "158",
        sueldo: "25c",
      },
      {
        grados: "Sgto. en Jefe",
        clase: "[EMS] Sargento en Jefe",
        precio: "30",
        sumaTotal: "188",
        sueldo: "25c",
      },
      {
        grados: "SOF",
        clase: "[EMS] Sub Oficial",
        precio: "32",
        sumaTotal: "220",
        sueldo: "25c",
      },
      {
        grados: "SOFMY",
        clase: "[EMS] Sub Oficial Mayor",
        precio: "34",
        sumaTotal: "254",
        sueldo: "25c",
      },
      // Más sub-rangos de SUBOFICIALES...
    ],
  },
  {
    nombre: "Oficiales Elite",
    descripcion:
      "Los Oficiales Élite son militares de carrera profesional en el nivel medio superior del Escuadrón, les corresponden el mando de los reclutas y caballería en el organigrama militar, también pueden actuar como mentores de los Suboficiales.",
    icono: (
      <img
        src="/placas/oficialelite.gif"
        alt="EMCO"
        className="ems-icono"
        width={24}
        height={24}
      />
    ),
    rangos: [
      {
        grados: "Alfz",
        clase: "[EMS] Alférez",
        precio: "36",
        sumaTotal: "290",
        sueldo: "40c",
      },
      {
        grados: "AlfzTte.",
        clase: "[EMS] Alférez Teniente",
        precio: "40",
        sumaTotal: "330",
        sueldo: "40c",
      },
      {
        grados: "Cap.",
        clase: "[EMS] Capitán",
        precio: "44",
        sumaTotal: "374",
        sueldo: "40c",
      },
      {
        grados: "SubTte",
        clase: "[EMS] Sub Teniente",
        precio: "48",
        sumaTotal: "422",
        sueldo: "40c",
      },
      {
        grados: "Tte.",
        clase: "[EMS] Teniente",
        precio: "52",
        sumaTotal: "474",
        sueldo: "40c",
      },
      {
        grados: "TteCol.",
        clase: "[EMS] Teniente Coronel",
        precio: "56",
        sumaTotal: "530",
        sueldo: "40c",
      },
      // Más sub-rangos de SUBOFICIALES...
    ],
  },
  {
    nombre: "Oficiales Superiores",
    descripcion:
      "Los Oficiales Superiores además de cumplir las labores básicas y de medios superiores están realizando sus estudios militares, administrativos y de liderazgo para formarse como miembros profesionales de la escuadra de Oficiales Generales del Escuadrón Militar Supremo.",
    icono: (
      <img
        src="/placas/oficialsuperior.gif"
        alt="EMCO"
        className="ems-icono"
        width={24}
        height={24}
      />
    ),
    rangos: [
      {
        grados: "Col.",
        clase: "[EMS] Coronel",
        precio: "60",
        sumaTotal: "590",
        sueldo: "55c",
      },
      {
        grados: "ColTact.",
        clase: "[EMS] Coronel Táctico",
        precio: "70",
        sumaTotal: "660",
        sueldo: "55c",
      },
      {
        grados: "Col. de Elite",
        clase: "[EMS] Coronel  de Élite",
        precio: "80",
        sumaTotal: "740",
        sueldo: "55c",
      },
      {
        grados: "Col. en Jefe",
        clase: "[EMS] Coronel en Jefe",
        precio: "90",
        sumaTotal: "830",
        sueldo: "55c",
      },
      {
        grados: "Brig.",
        clase: "[EMS] Brigadier",
        precio: "100",
        sumaTotal: "930",
        sueldo: "55c",
      },
      {
        grados: "BrigMY.",
        clase: "[EMS] Brigadier Mayor",
        precio: "110",
        sumaTotal: "1040",
        sueldo: "55c",
      },
      // Más sub-rangos de SUBOFICIALES...
    ],
  },
  {
    nombre: "Oficiales Generales",
    descripcion:
      "Los Oficiales Generales son la escuadra altamente profesional en el nivel superior ejecutivo de Escuadrón Militar Supremo, les corresponde el mando como superiores y según el rango de brigada, divisiones y cuerpos militares en el organigrama militar.",
    icono: (
      <img
        src="/placas/oficialgeneral.gif"
        alt="EMCO"
        className="ems-icono"
        width={24}
        height={24}
      />
    ),
    rangos: [
      {
        grados: "Gral.",
        clase: "[EMS] General",
        precio: "150",
        sumaTotal: "1190",
        sueldo: "70c",
      },
      {
        grados: "TteGral.",
        clase: "[EMS] Teniente General",
        precio: "260",
        sumaTotal: "1450",
        sueldo: "70c",
      },
      {
        grados: "GralBrig.",
        clase: "[EMS] General de Brigada",
        precio: "550",
        sumaTotal: "2000",
        sueldo: "70c",
      },
      {
        grados: "GralDiv.",
        clase: "[EMS] General de División",
        precio: "750",
        sumaTotal: "2750",
        sueldo: "70c",
      },
      {
        grados: "GralJef.",
        clase: "[EMS] General en Jefe",
        precio: "1000",
        sumaTotal: "3750",
        sueldo: "70c",
      },
      {
        grados: "GralEjer.",
        clase: "[EMS] General del Ejército",
        precio: "1500",
        sumaTotal: "5250",
        sueldo: "70c",
      },
    ],
  },

  {
    nombre: "EJOM",
    descripcion:
      "Escala de Jefes Operaciones Militares son de carrera altamente profesional en el nivel superior, les corresponde el mando como superiores",
    icono: (
      <img
        src="/placas/ejom.gif"
        alt="EMCO"
        className="ems-icono"
        width={24}
        height={24}
      />
    ),
    rangos: [
      {
        grados: "EJOM",
        clase: "[EMS] Escala de Jefes Operacionales Militares",
        precio: "$$",
        sumaTotal: "$$",
        sueldo: "80c",
      },
    ],
  },
  {
    nombre: "DIGEDEF",
    descripcion:
      "La Dirección General de la Defensa es el órgano superior de la Oficina Administrativa al que le corresponden la gestión e impulso de la política de seguridad y todos los proyectos de la administración que le competan en el ámbito de la seguridad y del Escuadrón Militar Supremo.",
    icono: (
      <img
        src="/placas/digedef.gif"
        alt="EMCO"
        className="ems-icono"
        width={24}
        height={24}
      />
    ),
    rangos: [
      {
        grados: "DIGENPER",
        clase: "[EMS] Director General del Personal",
        precio: "$$",
        sumaTotal: "$$",
        sueldo: "$$",
      },
      {
        grados: "DGAM",
        clase: "[EMS] Director General de Armamento Militar",
        precio: "$$",
        sumaTotal: "$$",
        sueldo: "$$",
      },
      {
        grados: "DIRGETEM",
        clase: "[EMS] Director General de Tecnología y Recreación Militar",
        precio: "$$",
        sumaTotal: "$$",
        sueldo: "$$",
      },
      {
        grados: "DIGOT",
        clase: "[EMS] Director General de Operaciones Tácticas",
        precio: "$$",
        sumaTotal: "$$",
        sueldo: "$$",
      },
      {
        grados: "DIGAIN",
        clase: " [EMS] Director General de Asuntos Internos",
        precio: "$$",
        sumaTotal: "$$",
        sueldo: "$$",
      },
      {
        grados: "DIGESEG",
        clase: "[EMS] Director General de Seguridad",
        precio: "$$",
        sumaTotal: "$$",
        sueldo: "$$",
      },
    ],
  },
  {
    nombre: "JEDEFCO",
    descripcion:
      "La Jefatura de la Defensa en Conjunto es un órgano de la Oficina Administrativa que opera como auxiliar del Estado Mayor Conjunto dentro de la estructura orgánica del Escuadrón Militar Supremo, le corresponde la gestión y supervisión de los Cuerpos del Escuadrón Militar Supremo.",
    icono: (
      <img
        src="/placas/jedefco.gif"
        alt="EMCO"
        className="ems-icono"
        width={24}
        height={24}
      />
    ),
    rangos: [
      {
        grados: "JEDEFCO",
        clase: "[EMS] Jefatura de la Defensa en Conjunto",
        precio: "$$",
        sumaTotal: "$$",
        sueldo: "$$",
      },
    ],
  },
  {
    nombre: "EMCO",
    descripcion:
      "El Estado Mayor Conjunto es el organismo encargado de planificar y desarrollar la política de seguridad terminada por el Líder y las máximas",
    icono: (
      <img
        src="/placas/emco.gif"
        alt="EMCO"
        className="ems-icono"
        width={24}
        height={24}
      />
    ),
    rangos: [
      {
        grados: "SecDef.",
        clase: "[EMS] Secretaria de Defensa",
        precio: "$$",
        sumaTotal: "$$",
        sueldo: "$$",
      },
      {
        grados: "MinDef.",
        clase: "[EMS] Ministro de Defensa",
        precio: "$$",
        sumaTotal: "$$",
        sueldo: "$$",
      },
      {
        grados: "SEGEDEF",
        clase: "[EMS] Secretaria General de Defensa",
        precio: "$$",
        sumaTotal: "$$",
        sueldo: "$$",
      },
      {
        grados: "JESEDEF",
        clase: "[EMS] Jefa de Seguridad de la Defensa",
        precio: "$$",
        sumaTotal: "$$",
        sueldo: "$$",
      },
      {
        grados: "SEDENA",
        clase: " [EMS] Secretaria de Defensa Nacional",
        precio: "$$",
        sumaTotal: "$$",
        sueldo: "$$",
      },
      {
        grados: "JDEM",
        clase: " [EMS] Jefe de Estado Mayor",
        precio: "$$",
        sumaTotal: "$$",
        sueldo: "$$",
      },
    ],
  },
];

const EscalafonEMS = () => {
  // Estado para controlar la visibilidad del modal y el rango seleccionado
  const [modalVisible, setModalVisible] = useState(false);
  const [rangoSeleccionado, setRangoSeleccionado] = useState(null);

  // Función para abrir el modal y mostrar la información del rango
  const abrirModal = (rango) => {
    setRangoSeleccionado(rango);
    setModalVisible(true);
  };

  // Función para cerrar el modal
  const cerrarModal = () => {
    setModalVisible(false);
    setRangoSeleccionado(null);
  };

  return (
    <div className="ems-container">
      <h1 className="ems-titulo">Escalafón del EMS</h1>
      <div className="ems-piramide">
        {escalafon
          .slice()
          .reverse()
          .map((nivel, index) => (
            <div
              key={index}
              className="ems-nivel"
              style={{ zIndex: escalafon.length - index }}
              onClick={() => abrirModal(nivel)} // Abrir el modal al hacer clic en un rango
            >
              <div className="ems-card">
                <div className="ems-header">
                  {nivel.icono}
                  <h2 className="ems-card-title">{nivel.nombre}</h2>
                </div>
                <p className="ems-card-description">{nivel.descripcion}</p>
              </div>
            </div>
          ))}
      </div>

      {/* Modal */}
      {modalVisible && (
        <div className="esc-modal-overlay">
          <div className="esc-modal-content">
            <div className="modal-header">
              <h2>{rangoSeleccionado.nombre}</h2>
              <button onClick={cerrarModal} className="modal-close">
                X
              </button>
            </div>
            <p className="modal-description">{rangoSeleccionado.descripcion}</p>

            {/* Tabla de rangos */}
            <div className="tabla-rangos">
              <table className="tabla">
                <thead>
                  <tr>
                    <th>Grados</th>
                    <th>Clase</th>
                    <th>Precio</th>
                    <th>Suma Total</th>
                    <th>Sueldo</th>
                  </tr>
                </thead>
                <tbody>
                  {rangoSeleccionado.rangos.map((rango, index) => (
                    <tr key={index}>
                      <td>{rango.grados}</td>
                      <td>{rango.clase}</td>
                      <td>{rango.precio}</td>
                      <td>{rango.sumaTotal}</td>
                      <td>{rango.sueldo}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="modal-footer">
              <button onClick={cerrarModal} className="modal-btn-close">
                Cerrar
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default EscalafonEMS;
