import React from 'react';
import './Card.css';

        const Card = ({ heading, imageUrl }) => {
          return (
            <div className='card-container'>
            <div className="card">
              
              <img src={imageUrl} alt={heading} style={{width:'80%'}} />
            </div>
            </div>
          );
        };
        
        export default Card; 