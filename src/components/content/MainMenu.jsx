import React from 'react'
import imgEmpleado from '../../assets/img/empleado.png'
import imgPedido from '../../assets/img/lista-de-la-compra.png'
import imgDescargarPed from '../../assets/img/descargar.png'
import imgUsuarios from '../../assets/img/agregar-usuario.png'

export const MainMenu = () => {
  return (
    <div className="container container-align main-content">

    <div className="row mb-3">
      <div className="col-md">
        <div className="card p-3 align-items-center">
          <img src={imgEmpleado} className="img-fluid" alt="" /> 
          <div className="mt-3">
            <h5>Empleados</h5>
          </div>
        </div>
      </div>
      <div className="col-md">
        <div className="card p-3 align-items-center">
          <img src={imgPedido} className="img-fluid" alt=""/> 
          <div className="mt-3">
            <h5>Pedidos</h5>
          </div>
        </div>
      </div>
      <div className="col-md">
        <div className="card p-3 align-items-center">
          <img src={imgDescargarPed} className="img-fluid" alt=""/> 
          <div className="mt-3">
            <h5>Descargar pedidos</h5>
          </div>
        </div>
      </div>   
      <div className="col-md">
        <div className="card p-3 align-items-center">
          <img src={imgUsuarios} className="img-fluid" alt=""/> 
          <div className="mt-3">
            <h5>Usuarios</h5>
          </div>
        </div>
      </div>                             
    </div>
      
  </div>
  )
}
