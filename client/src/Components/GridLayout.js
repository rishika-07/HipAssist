import React from 'react';
import grid3img1 from './Images/grid3img1.png';
import grid3img2 from './Images/grid3img2.png';
import grid3img3 from './Images/grid3img3.png';
import grid3img4 from './Images/grid3img4.png';
import grid3img6 from './Images/grid3img6.png';
import grid3img7 from './Images/grid3img7.png';
import './GridLayout.css';
const GridLayout = () => {
  return (
    <div className="grid-container">
      <div className="static-text">
        <h1>Be wherever your customers are</h1>
        <h3>We provide out-of-box channel connectors as well as custom API solutions. You tell us the channel and we'll integrate it.</h3>
        <a href="/GetDemo">Request a demo</a>
      </div>
      <div className="scrollable-images">
        <div className="image" >
          <img src={grid3img1} alt="Image 1" style={{width:'80%'}}/>
        </div>

        <div className="image">
          <img src={grid3img2} alt="Image 1" style={{width:'80%'}} />
        </div>

        <div className="image">
          <img src={grid3img3} alt="Image 1" style={{width:'80%'}}/>
        </div>

        <div className="image">
          <img src={grid3img4} alt="Image 1" style={{width:'80%'}}/>
        </div>

        <div className="image">
          <img src={grid3img6} alt="Image 1" style={{width:'80%'}}/>
        </div>

        <div className="image">
          <img src={grid3img7} alt="Image 1" style={{width:'80%'}} />
        </div>
        
       
      </div>
    </div>
  );
};

export default GridLayout;
