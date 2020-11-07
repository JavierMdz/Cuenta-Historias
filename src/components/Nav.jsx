import React,{useState,useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Link} from "react-router-dom";
import { useContext } from 'react';
import { Context } from './Home';

const Nav=()=>{
    const context=useContext(Context);
    const [datos,setDatos]=useState(null);

    useEffect(()=>{
        obtenerDatos();
    },[])

    const obtenerDatos =async ()=>{

        const data=await fetch("https://historias-01.herokuapp.com/gender/list");
        const  user=await data.json();
        setDatos(user);
    }

    const cerrarsesion=()=>{
        console.log("cerrar sesion");
        context.setLogin(false);
        localStorage.removeItem("token");
        localStorage.removeItem("userData");
        window.location.replace("/");
    }

    const Generos=()=>{
        if (datos===null) {
            return <span className="nav-link" >Cargando...</span>
          }else{
            return(
                <>
                <span className="nav-link dropdown-toggle" id="navbardrop" data-toggle="dropdown">
                    Generos
                </span>
                <div className="dropdown-menu">
                    {datos.map(dato=>(<Link className="dropdown-item" to={"/generos/"+dato.name} key={dato.id}>{dato.name}</Link>))}
                </div>
                </>
            )
          }
    }

    return(
            <>
            <nav className="navbar navbar-expand-md bg-primary navbar-dark">
                <Link className="navbar-brand" to="/">Cuenta historias</Link>
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item dropdown">
                        <Generos/>
                    </li>
                    {!context.login&&<>
                        <li className="nav-item ">
                            <Link className="nav-link" to="/login">Iniciar sesion</Link>
                        </li> 
                        <li className="nav-item ">
                            <Link className="nav-link" to="/form">Crear cuenta</Link>
                        </li>
                    </>}

                    {context.login&&<>
                        <li className="nav-item ">
                            <Link className="nav-link" to="/profile">Mis historias</Link>
                        </li> 
                        <form className="form-inline">
                            <button className="btn btn-sm btn-outline-secondary" type="button" onClick={cerrarsesion}>Cerrar sesion</button>
                        </form>
                    </>}
                </ul>
            </nav>        
        </>)
}

export default Nav;