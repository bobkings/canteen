import React from 'react'
import useAuth from '../../../hooks/useAuth';
import { Link, NavLink } from 'react-router-dom';

export const Nav = () => {
  const { auth } = useAuth();
  console.log(auth);
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <a className="navbar-brand text-light" href="#">Logo</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink to="/user/employees/" className="nav-link text-light">
                Empleados
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/user/orders/" className="nav-link text-light">
                Pedidos
              </NavLink>
            </li>
            <li className="nav-item">
              <a className="nav-link text-light" href="#">Descargar pedidos</a>
            </li>
            <li className="nav-item">
              <NavLink to="/user/users/" className="nav-link text-light">
                Usuarios
              </NavLink>              
            </li>
          </ul>
          <ul className="navbar-nav mb-2 mb-lg-0">
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle text-light" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                {auth.fullName}
              </a>
              <ul className="dropdown-menu dropdown-menu-end">
                <li>
                  <NavLink to="/user/logout" className="dropdown-item">
                    Cerrar sesión
                  </NavLink>
                </li>
              </ul>
            </li>

          </ul>
        </div>
      </div>
    </nav>
  )
}
