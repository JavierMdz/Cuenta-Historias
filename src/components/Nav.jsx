import React,{useState,useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Link} from "react-router-dom";

const Nav=()=>{
    const [datos,setDatos]=useState(null);

    useEffect(()=>{
        obtenerDatos();
    },[])

    const obtenerDatos =async ()=>{
        const data=await fetch("https://historias-01.herokuapp.com/gender/list");
        const  user=await data.json();
        setDatos(user);
        console.log(user);
    }

    const Generos=()=>{
        if (datos===null) {
            return <a className="nav-link" href="#">Cargando...</a>
          }else{
            return(
                <>
                <a className="nav-link dropdown-toggle" href="#" id="navbardrop" data-toggle="dropdown">
                    Generos
                </a>
                <div className="dropdown-menu">
                    {datos.map(dato=>(<a className="dropdown-item" href="#" key={dato.id}>{dato.name}</a>))}
                </div>
                </>
            )
          }
    }


    return(
            <>
            <nav className="navbar navbar-expand-sm bg-primary navbar-dark">
                <Link className="navbar-brand" to="/">Cuenta historias</Link>
            <ul className="navbar-nav ml-auto">
                <li className="nav-item dropdown">
                    <Generos/>
                </li>
                <li className="nav-item ">
                    <Link className="nav-link" to="/login">Iniciar sesion</Link>
                </li> 
                <li className="nav-item ">
                    <Link className="nav-link" to="/form">Crear cuenta</Link>
                </li> 
            </ul>
            </nav>        
        </>)
}

export default Nav;