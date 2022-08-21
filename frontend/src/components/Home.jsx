import React, { Component } from 'react';
import wall from '../source/wall.jpg';
import './Home.css';
import types from '../source/c8.jpg';
import c4 from '../source/c4.png';
import c7 from '../source/c7.png';
import c10 from '../source/c10.jpg';

class Home extends Component {

  render(){
  return(
    
    <div class='home1'>
      <img src={wall} alt='loading' width='101.5%' />
      <img src={types} alt='loading' width='101.5%' />
      <h1 id='divider'>Why Choose Us ?</h1>
      <img src={c4} alt='loading' width='101.5%' />
      <img src={c10} alt='loading' width='101.5%' />
      <img src={c7} alt='loading' width='101.5%' />

      
    </div>
    
  );
  

}
}
    
export default Home;