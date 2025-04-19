import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "animate.css";
import "./styles/App.css";
import HabboCard from "./components/HabboCard";
import Particles from "react-tsparticles";
import { loadLinksPreset } from "tsparticles-preset-links";

const App = () => {
  const [isHidden, setIsHidden] = useState(false);
  let lastScrollTop = 0;

  useEffect(() => {
    const handleScroll = () => {
      let scrollTop = window.scrollY;
      if (scrollTop > lastScrollTop) {
        setIsHidden(true);
      } else {
        setIsHidden(false);
      }
      lastScrollTop = scrollTop;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const particlesInit = async (engine) => {
    await loadLinksPreset(engine);
  };

  return (
    <div className="container-fluid app-container d-flex flex-column align-items-center">
      {/* Navbar */}
      <nav
        className={`navbar navbar-expand-lg navbar-dark bg-dark w-100 p-3 shadow ${
          isHidden ? "hidden-navbar" : ""
        }`}
      >
        <a className="navbar-brand fw-bold" href="#">
          ⚔️ Habbo Defense
        </a>
      </nav>

      {/* Hero Section */}
      <header className="hero-section text-center text-white d-flex flex-column justify-content-center align-items-center">
        <h1 className="display-4 animate__animated animate__fadeInDown">
          ¡Alístate en la Fuerza de Defensa!
        </h1>
        <p className="lead animate__animated animate__fadeIn animate__delay-1s">
          Demuestra tu valentía y honor en la mejor simulación militar de Habbo.
        </p>
        <p className="mt-3 animate__animated animate__pulse animate__infinite">
          ¡Únete ahora!
        </p>
      </header>

      {/* Membresías */}
      <section className="membresias-container text-center">
        <h2 className="mb-4">🔱 MEMBRESÍAS [EMS] 🔱</h2>
        <p className="text-white">
          Contamos con dos membresías dentro del ejército, disponibles para
          cualquier miembro a partir de Caballería.
        </p>

        <div className="d-flex flex-wrap justify-content-center">
          {/* Club */}
          <div className="card custom-card animate__animated animate__fadeIn">
            <img
              src="/emsclub.png"
              alt="EMS Club Icono"
              className="card-img-top"
            />
            <div className="card-body">
              <h3 className="card-title">[EMS] CLUB</h3>
              <p className="card-price">💰 Precio: $30</p>
              <ul className="list-unstyled">
                <li>✅ Accesorios ilimitados</li>
                <li>✅ Preferencia en día de paga</li>
                <li>✅ Acceso a zonas exclusivas</li>
                <li>✅ Guardapaga de 24 horas</li>
                <li>✅ Canal exclusivo en Discord</li>
              </ul>
            </div>
          </div>

          {/* Reducción */}
          <div className="card custom-card animate__animated animate__fadeIn animate__delay-1s">
            <img
              src="/emsreduccion.png"
              alt="Reducción Premium Icono"
              className="card-img-top"
            />
            <div className="card-body">
              <h3 className="card-title">[EMS] Reducción Premium</h3>
              <p className="card-price">💰 Precio: $40</p>
              <ul className="list-unstyled">
                <li>✅ Reducción del 50% de requisitos</li>
                <li>✅ Guardapaga por 5 días</li>
                <li>✅ 10c de descuento en compra de Club</li>
                <li>✅ 20% de descuento en compra de rango</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Empleado del Mes */}
      <section className="empleado-del-mes">
        <div className="glow-background">
          <Particles
            id="tsparticles"
            init={particlesInit}
            options={{
              preset: "links",
              background: {
                color: "transparent",
              },
              particles: {
                color: {
                  value: "#ffd700",
                },
                links: {
                  enable: true,
                  color: "#ffd700",
                  distance: 100,
                },
                move: {
                  enable: true,
                  speed: 1,
                },
                number: {
                  value: 50,
                },
                size: {
                  value: 2,
                },
              },
            }}
            style={{
              position: "absolute",
              zIndex: 1,
              width: "100%",
              height: "100%",
            }}
          />
        </div>

        <div className="empleado-contenido">
          <h2 className="section-title">🌟 Empleado del Mes 🌟</h2>
          <p className="section-subtitle">
            ¡Felicidades por tu esfuerzo y dedicación!
          </p>
          <div className="spotlight">
            <HabboCard username="Proximamente" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default App;
