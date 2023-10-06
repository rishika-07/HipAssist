import React from 'react';
import './Home.css'; // Create a CSS file for styling
import hero from '../Components/Images/hero.png'; 
import c_logo1 from '../Components/Images/c_logo1.png';
import c_logo2 from '../Components/Images/c_logo2.png';
import c_logo3 from '../Components/Images/c_logo3.png';
import c_logo4 from '../Components/Images/c_logo4.png';
import c_logo5 from '../Components/Images/c_logo5.png';
import c_logo6 from '../Components/Images/c_logo6.png';


const Home = () => {
  return (
     <div className="main-container">
    <div className="hero-container">
      <div className="hero-content">
        <h1>Close deals faster, halve support costs, effortlessly with AI</h1>
        <p>Build secure and accurate GenAI assistants for your customers, support and sales team. Coach on your data across any format, pair with skills beyond QnA and go-live in minutes.</p>
        <button>Get Started</button>
      </div>
      <div className="hero-image">
      <img src={hero} alt="hero" className='hero_img width:10px'/>
      </div>
      </div>
       
       <div className="middle-container">
        <h1>Enterprise ready. Enterprise tested.</h1>

        <div className="middle-content">
         <img src={c_logo1} alt='company-logo1'className='GmrLogo1'style={{width:"100px",height:"50px"}}/>
         <img src={c_logo2} alt='company-logo2'className='GmrLogo2'style={{width:"100px",height:"70px"}}/>
         <img src={c_logo3} alt='company-logo3'className='GmrLogo3 'style={{width:"120px",height:"50px"}}/>
         <img src={c_logo4} alt='company-logo4'className='GmrLogo4 'style={{width:"140px",height:"50px"}}/>
         <img src={c_logo5} alt='company-logo5'className='GmrLogo5 'style={{width:"130px",height:"40px"}}/>
         <img src={c_logo6} alt='company-logo6'className='GmrLogo6 'style={{width:"120px",height:"50px"}}/>
        </div>
        </div>
        
        <div className="bottom-container">
        <h1>Get Your ROI In Weeks</h1>
        <div className="bottom-content">
         <div className="bottom-content1">
          <h1>100X</h1>
          <h3>faster closures</h3>
          <p>with a highly empowered staff across sales and support</p>
         </div>

         <div className="bottom-content2">
          <h1>140%</h1>
          <h3>user engagement</h3>
          <p>your users spend more time on the using product than learning</p>
         </div>

         <div className="bottom-content3">
          <h1>2X</h1>
          <h3>ticket deflections</h3>
          <p>rom your baseline today and achieve up to 80% self serve</p>
         </div>

        </div>
        <button className='blue_estimatebtn'>Estimate your Savings</button>
          </div>
    </div>
   
  );
};

export default Home;