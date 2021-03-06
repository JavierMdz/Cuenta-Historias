import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from './Form.jsx';
import Login from './Login.jsx'
import Nav from './Nav.jsx';
import Creador from './Creador.jsx';
import Profile from './Profile.jsx';
import { BrowserRouter as Router, Switch, Route, } from "react-router-dom";
import { useState } from 'react';
import FalseHome from './FalseHome.jsx';
import TrueHome from './TrueHome.jsx';
import Footer from './Footer.jsx';
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
                        <Route path="/edit">
                            <div className="container mt-2">
                                <Creador/>
                            </div>
                        </Route>
                        <Route path="/">
                            {!login&&<FalseHome/>}
                            {login &&<TrueHome/>}
                        </Route>
                    </Switch>
                    <Footer/>
                </div>
            </Router>
        </Context.Provider>
    </>)
}

export default Home;
