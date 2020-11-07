import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from './Form.jsx';
import Login from './Login.jsx'
import Nav from './Nav.jsx';
import Profile from './Profile.jsx';
import { BrowserRouter as Router, Switch, Route, } from "react-router-dom";
import { useState } from 'react';
  
export const Context=React.createContext();

const Home=()=>{
    const [login,setLogin]=useState(false);

    /*cada vez que iniciamos verificamos si el usuario esta logeado*/ 
    useEffect(()=>{
        if(localStorage.getItem("token")===null){
        }else{
            setLogin(true);
        }
    },[])


    return(
    <>
        <Context.Provider value={{login,setLogin}}>
            <Router>
                <div className="container-fluid">
                    <Nav/>
                    <Switch>
                        <Route path="/form">
                            <Form/> 
                        </Route>
                        <Route path="/login">
                            <Login/>
                        </Route>
                        <Route path="/profile">
                            {!login&&<p>porfavor incia sesion</p>}
                            {login && <Profile/>}
                        </Route>
                        <Route path="/">
                            {!login&&<p>JAVIER AQUI VA EL COMPONENTE DE EL HOME</p>}
                            {login && <span>sesion iniciada</span>}
                        </Route>
                        
                    </Switch>
                </div>
            </Router>
        </Context.Provider>
    </>)
}

export default Home;
