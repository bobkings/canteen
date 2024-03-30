import React, {useState} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faKey, faUser} from "@fortawesome/free-solid-svg-icons"
import { useForm } from '../../../hooks/useForm'
import { Global } from '../../../helpers/Global';
import useAuth from '../../../hooks/useAuth';


export const Login = () => {

  const { form, changed } = useForm({});
  const [saved, setSaved] = useState("not_sent");

  const {setAuth} = useAuth();
  
  const loginUser = async (e) => {
    e.preventDefault();

    //datos del formulario
    let userToLogin = form;

    //peticion al backend
    const request = await fetch(Global.url+"user/login",{
      method: "POST",
      body: JSON.stringify(userToLogin),
      headers: {
        "Content-Type": "application/json"
      }
    })

    const data = await request.json();

    //persistir los datos en el navegador
    if(data.ok){
      //persistir los datos en el navegador
      localStorage.setItem("token", data.token);
      localStorage.setItem("user", JSON.stringify(data.user));

      setSaved("logged");
      
      //set datos de usuario en el auth
      setAuth(data.user);

      //redireccion 
      setTimeout(()=>{
        window.location.reload();
      }, 1000)

    }else{
      setSaved("error")
    }
  }

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
          <form onSubmit={loginUser}>
            
            <div className="input-group input-group-prepend form-group mb-4">
              <span className="input-group-text"><FontAwesomeIcon icon={faUser} /></span>
              <input type="text" className="form-control" placeholder="usuario" name="user" onChange={changed} />
            </div>
            
            <div className="input-group input-group-prepend form-group mb-4">
              <span className="input-group-text"><FontAwesomeIcon icon={faKey} /></span>              
              <input type="password" className="form-control" placeholder="contraseña" name="password" onChange={changed} />
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
