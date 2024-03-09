import { useEffect } from "react";

export const Footer = () => {  
  useEffect(()=>{
    document.getElementById("year").innerHTML = new Date().getFullYear();
    
  },[])

  return (
    <footer className="bg-dark footer-align">
      <div className="text-center text-light p-3">
        © <span id="year"></span> Copyright: <a href="#" className="text-light">Nombre pendiente</a>
      </div>

    </footer>
  )
}
