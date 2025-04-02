import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/navbar.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className={`custom-navbar ${menuOpen ? "open" : ""}`}>
      <div className="nav-container">
        <div className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>

        <ul className={`nav-links nav-left ${menuOpen ? "active" : ""}`}>
          <li>
            <a href="/directiva" className="nav-link">
              Directiva
            </a>
          </li>
          <li>
            <a href="/uniformidad" className="nav-link">
              Documentos
            </a>
          </li>
        </ul>

        {/* Logo centrado */}
        <div className="logo-container">
          <a href="/">
            <img src="/logo2.png" alt="Logo EMS" className="navbar-logo-img" />
          </a>
        </div>

        <ul className={`nav-links nav-right ${menuOpen ? "active" : ""}`}>
          <li>
            <a href="/escalafon" className="nav-link">
              Escalafon
            </a>
          </li>
          <li>
            <a href="/remuneracion" className="nav-link">
              Remuneración
            </a>
          </li>
          <li>
            <a href="/departamentos" className="nav-link">
              Departamentos
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
