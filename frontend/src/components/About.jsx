import React, { Component } from 'react';
import './About.css';
import logo1 from '../source/what.jpg';
import logo2 from '../source/who.jpg';
import logo3 from '../source/logo3.jpg';


class About extends Component {
    render() {
        return (  
          <div class="col-1" >
            
         <div class="col-2">
      <React.Fragment>
       <img src={logo1} alt='load' height='199' width='250'/>
      </React.Fragment>
    
  </div>
  <div class="col-3">
  <h2> About Myself</h2>
    <p>My name is Vipul Joshi. <br></br>I was a Mechanical Engineer for five years. 
After four years of my studies I felt stagnant in my career.<br></br> so i decided to change myself with time and that's how my path to IT industry started.
</p> 
  </div> 
    
  <div class="col-4">
    
    <React.Fragment>
      <img src={logo3} alt='loading' height='194' width='250'/>
    </React.Fragment>
    
  </div>
  <div class="col-5">
    <br></br>
    <h2>Who We are ?</h2>
    <p>"Vipul Tech Web" expertise in website design and development focus 
on creating digital solutions that are tailored to the unique needs and business objectives of every client. 
We Belive in innovative, productive, 
and collaborative approach that puts clients at the forefront. In the ever-changing technology industry,
 a company with the global vision and leadership to think beyond borders in order to provide online experiences 
that drive growth is a requirement.</p>
  </div>
  
  
  
  
  <div class="col-7">
    <h2>What we do ?</h2>
  <p>We can help you with your buisness grow by Creating best sutaible Website for your Buisness.<br></br>

Whether You Are a Start-Up, Mid-Size or a Big Company, "Vipul Tech Web" is Always the Best Tech Hand!</p>
  </div>
<div class="col-6">
    <React.Fragment>
      <img src={logo2} alt='loading' height='194' width='250'/>
    </React.Fragment>
  </div>
  

</div>
        );
      }
    } 
    export default About;
