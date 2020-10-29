import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from './Form.jsx';
import Login from './Login.jsx'
import Nav from './Nav.jsx';

import {
    BrowserRouter as Router,
    Switch,
    Route,
  } from "react-router-dom";
  

const Home=()=>{
    return(
    <>
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
                <Route path="/">
                    <p>JAVIER AQUI VA EL COMPONENTE DE EL HOME</p>
                </Route>
            </Switch>
            </div>
        </Router>
    </>)
}

export default Home;