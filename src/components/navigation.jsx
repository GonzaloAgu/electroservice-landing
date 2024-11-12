import React from "react";

export const Navigation = (props) => {
  return (
    <nav id="menu" className="navbar navbar-expand-lg navbar-light bg-light" style={{ zIndex: 4 }}>
  <div className="container">
    <a className="navbar-brand" href="#page-top">
      ELECTROSERVICE
    </a>
    {/* Botón de colapso para móviles */}
    <button
      className="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarNav"
      aria-controls="navbarNav"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon"></span>
    </button>

    {/* Menú de navegación */}
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav ms-auto">
        <li className="nav-item">
          <a className="nav-link" href="#about">
            SOBRE NOSOTROS
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#location">
            UBICACIÓN
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#contact">
            CONTACTO
          </a>
        </li>
      </ul>
    </div>
  </div>
</nav>

  );
};
