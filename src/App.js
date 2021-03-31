import './App.css';
import React from "react";
import ReactPlayer from "react-player";
import Home from './Home';
import Cyber from './Cyber';
import Engineering from './Engineering';
import Design from './Design';
import {Route, Link} from 'react-router-dom';
import NavBar from './NavBar';


function App() {

    return (
    <div className="App">
        <NavBar/>
        <Route exact path="/peer-interviewing/" component={Home}/>
        <Route exact path="/peer-interviewing/Engineering" component={Engineering}/>
        <Route exact path="/peer-interviewing/Design" component={Design}/>
       

        </div>
    );
}

export default App;
