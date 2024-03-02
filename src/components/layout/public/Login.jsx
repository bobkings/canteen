import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faKey, faUser} from "@fortawesome/free-solid-svg-icons"

export const Login = () => {
  

  return (
<div className="container-login">
    
    <div className="d-flex justify-content-center h-100">
      <div className="card ">
        <div className="card-header">
          <div className="text-card-header">
            Iniciar sesión
          </div>
        </div>
        <div className="card-body">
          <form>
            
            <div className="input-group input-group-prepend form-group mb-4">
              <span className="input-group-text"><FontAwesomeIcon icon={faUser} /></span>
              <input type="text" className="form-control" placeholder="usuario" />
            </div>
            
            <div className="input-group input-group-prepend form-group mb-4">
              <span className="input-group-text"><FontAwesomeIcon icon={faKey} /></span>              
              <input type="password" className="form-control" placeholder="contraseña" />
            </div>
            
            <div className="form-group mb-4 d-flex justify-content-center">
              <input type="submit" value="Acceder" className="btn btn-dark" />
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
  )
}
