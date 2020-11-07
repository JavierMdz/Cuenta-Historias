import React,{useState}from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';



function Form() {
    const [name,setName]=useState("");
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const [date,setDate]=useState("");
    const [gender,setGender]=useState(false);
    const [error,setError]=useState(false);
    const [succes,setSucces]=useState(false);
  
    const envio=(ev)=>{
        ev.preventDefault();
        axios.post("https://historias-01.herokuapp.com/auth/signup", {
        username:name,
        email:email,
        password:password,
        sexo:gender,
        birthdate:date,
        id_type_user:1
        }).then(response => {
            setName("");
            setError(false);
            setSucces(true);
            setPassword("");
            setEmail("");
            setDate("");  
        }).catch(e => {
            setError(true);
            setSucces(false);
            setName("");
            setPassword("");
            setEmail("");
            setDate("");
        });
    }

    
    return (    
        <div className="container mt-5">
        <form onSubmit={(ev)=>envio(ev)}>
            <div className="form-group">
                <label htmlFor="username">Username</label>
                <input 
                    onChange={(ev)=>setName(ev.target.value)}
                    type="text" 
                    className="form-control" 
                    id="username" 
                    placeholder="nombre de usuario"
                    value={name}
                    required/>
            </div>
            <div className="form-group ">
                    <label htmlFor="Email">Email</label>
                    <input 
                        onChange={(ev)=>setEmail(ev.target.value)}
                        type="email" 
                        className="form-control" 
                        id="Email" 
                        placeholder="Email"
                        value={email}
                        required/>
            </div>
            <div className="form-group">
                    <label htmlFor="Password">Contraseña</label>
                    <input
                        onChange={(ev)=>setPassword(ev.target.value)}  
                        type="password" 
                        className="form-control" 
                        id="Password" 
                        placeholder="Password"
                        value={password}
                        pattern=".{5,10}"
                        title="contraseña con longitud de 5-10 caracteres"/>
            </div>
            <div className="form-group">
            <label className="mr-2" htmlFor="Hombre">Hombre: </label>
            <input
                onChange={(ev)=>setGender(false)}  
                type="radio" 
                name="Genero" 
                id="Male" 
                className="mr-2"
                value="Hombre" />
            <label className="mr-2" htmlFor="Mujer">Mujer: </label>
            <input
                onChange={(ev)=>setGender(true)} 
                type="radio" 
                name="Genero"
                className="mr-2" 
                id="Fermale" 
                value="Mujer"/>

            </div>
            <div className="form-group">
                <label htmlFor="date">Fecha de nacimiento</label>
                <input
                    onChange={(ev)=>setDate(ev.target.value)}  
                    id="date"  
                    type="date" 
                    name="bday" 
                    max="3000-12-31" 
                    min="1000-01-01" 
                    className="form-control"
                    value={date}/>
            </div>
            <div className="mt-4">
                <button type="submit" className="btn btn-primary">Registrarse</button>
            </div>
        </form>
        <> 
            {error && <div className="alert alert-danger mt-4" role="alert">Error en su registro intentelo otra vez</div>}
        </>
        <> 
            {succes && <div className="alert alert-success mt-4" role="alert">Registro con exito, verifique su correo</div>}
        </>
        </div>
    );
  }
  
  export default Form;