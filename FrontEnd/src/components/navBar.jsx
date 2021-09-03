import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledDiv = styled.div`
  width: 95%;
  height: 16px;
  margin-top: 7px;
  display: initial;
`;

const NavBar = () => {
  return (
    <StyledDiv>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="#">
          Siga
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <Link className="nav-link" to={`/home`}>
                Inicio
              </Link>
            </li>

            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdownMenuLink"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Producto
              </a>
              <div
                className="dropdown-menu"
                aria-labelledby="navbarDropdownMenuLink"
              >
                <Link className="dropdown-item" to={location => ({ ...location, pathname: "/producto/registrar" })}>
                  Registrar
                </Link>
                <Link className="dropdown-item" to={location => ({ ...location, pathname:`/producto/ver`})}>
                  Ver
                </Link>
                <Link className="dropdown-item" to={location => ({ ...location, pathname:`/producto/eliminar`})}>
                  Eliminar
                </Link>
              </div>
            </li>

            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdownMenuLink"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                categoria
              </a>
              <div
                className="dropdown-menu"
                aria-labelledby="navbarDropdownMenuLink"
              >
                <Link className="dropdown-item" to={location => ({ ...location, pathname:`/categoria/registrar`})}>
                  Registrar
                </Link>
                <Link className="dropdown-item" to={location => ({ ...location, pathname:`/categoria/ver`})}>
                  Ver
                </Link>
                <Link className="dropdown-item" to={`/categoria/delete`}>
                  Eliminar
                </Link>
              </div>
            </li>
          </ul>
        </div>
      </nav>
    </StyledDiv>
  );
};

export default NavBar;
