import React,{useState}from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import {Context} from "./Home.jsx";
import { useContext } from 'react';
import {Redirect} from "react-router-dom";

function Login(){
    const context=useContext(Context);
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const [error,setError]=useState(false);
    const [succes,setSucces]=useState(false);

    const envio=(ev)=>{
        ev.preventDefault();
        axios.post("https://historias-01.herokuapp.com/auth/signin", {
            email:email,
            password:password,
        }).then(response => {
            setPassword("");
            setEmail("");
            setError(false);
            setSucces(true);
            context.setLogin(true);
            localStorage.setItem('userData',JSON.stringify(response.data.userDb));
            localStorage.setItem('token',response.data.jwt);
        }).catch(e => {
            setError(true);
            setSucces(false);
            setPassword("");
            setEmail("");
        });
    }


    return(
        <div className="container mt-5">
            <form onSubmit={(ev)=>envio(ev)}>
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Email address</label>
                    <input 
                        type="email"
                        className="form-control" 
                        id="exampleInputEmail1" 
                        aria-describedby="emailHelp" 
                        placeholder="Enter email"
                        value={email}
                        onChange={(ev)=>setEmail(ev.target.value)}
                        />
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputPassword1">Password</label>
                    <input 
                    type="password" 
                    className="form-control" 
                    id="exampleInputPassword1" 
                    placeholder="Password"
                    value={password}
                    onChange={(ev)=>setPassword(ev.target.value)}
                    />
                </div>
                <button type="submit" className="btn btn-primary" >iniciar sesion</button>
            </form>
            <> 
                {error && <div className="alert alert-danger mt-4" role="alert"> intentelo otra vez</div>}
            </>
            <> 
                {succes && <div className="alert alert-success mt-4" role="alert"><Redirect to="/"/>Inicio de sesion correcto</div>}
                
            </>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            
        </div>
    )
}

export default Login;