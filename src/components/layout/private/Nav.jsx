import React from 'react'

export const Nav = () => {
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
              <a className="nav-link text-light" href="#">Empleados</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-light" href="#">Pedidos</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-light" href="#">Descargar pedidos</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-light" href="#">Usuarios</a>
            </li>
          </ul>
          <ul className="navbar-nav mb-2 mb-lg-0">
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle text-light" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Roberto Reyes
              </a>
              <ul className="dropdown-menu dropdown-menu-end">
                <li><a className="dropdown-item" href="#">Cerrar sesión</a></li>
              </ul>
            </li>

          </ul>
        </div>
      </div>
    </nav>
  )
}
