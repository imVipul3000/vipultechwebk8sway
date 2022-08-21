import React, { Component } from 'react';
import './App.css';
import Home from './components/Home';
import contact from './components/contact';
import mainlogo from './source/mainlogo.jpg';
import click from './source/click.jpg';


import { BrowserRouter as Router, Route, Link} from "react-router-dom";
import About from './components/About';


function App() {
  return (
    <body>
        <Router>
        
        <div class='header' id='myHeader' width="100%"> 
        <a href='/'><img class='head' src={mainlogo} alt='loading' /></a>
            <Link class='link' to="/contact">ContactUs</Link> 
            <Link class='link' to="/about">AboutUs</Link>
            <Link class='link' to="/">Home</Link>
        </div>
        <div>
            <Route path="/" exact component={Home} />
            <Route path="/contact" exact component={contact} />
            <Route path="/about" exact component={About} />
            </div>
	<footer id='footer'>
          <h1 id='footer1'>VipulTechWeb - Whatever You're Into, Get Into VipulTechWeb.</h1>
          <h3 id='click'>ReachUs at - 
          <Link to="/contact"><img class='c' src={click} alt='loading' width='8%'   /></Link></h3>


        </footer>
        </Router>
      </body>
  );
}

export default App;
