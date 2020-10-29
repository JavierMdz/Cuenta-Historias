import React,{useState}from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';



function Login(){
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");

    const envio=(ev)=>{
        ev.preventDefault();
        console.log(email,password)
        setEmail("");
        setPassword("");
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
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}

export default Login;