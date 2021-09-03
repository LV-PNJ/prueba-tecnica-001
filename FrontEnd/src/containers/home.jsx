import React from "react";
import NavBar from "../components/navBar";
import { Link } from 'react-router-dom';
const home = () => {
  return (
    <>
      <NavBar />
      <div className="flexbox padre">
        <div className="hijo">
          <h1 className="titulo">¿Que deseas hacer?</h1>
          <h4>Haz clic en alguna de las siguientes opciones</h4>
          <table className="table table-hover">
            <tbody>
            <tr>
                <th scope="row"></th>
                <td><Link className="" to={`producto/ver`}>Ver productos</Link></td>
                <td><Link className="" to={`categoria/ver`}>Ver categorias</Link></td>
              </tr>
              <tr>
                <th scope="row"></th>
                <td><Link className="" to={`producto/registrar`}>Registrar producto</Link></td>
                <td><Link className="" to={`categoria/registrar`}>Registrar producto</Link></td>
              </tr>
              <tr>
                <th scope="row"></th>
                <td><Link className="" to={`producto/actualizar`}>Actualizar producto</Link></td>
                <td><Link className="" to={`categoria/actualizar`}>Actualizar producto</Link></td>
              </tr>
              <tr>
                <th scope="row"></th>
                <td><Link className="" to={`monitor/eliminar`}>Eliminar monitor</Link></td>
                <td><Link className="" to={`monitoria/eliminar`}>Eliminar monitoria</Link></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default home;
