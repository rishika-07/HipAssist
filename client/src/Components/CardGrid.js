import React from 'react';
import Card from './Card'; // Make sure to provide the correct import path for your Card component
import grid3img1 from './Images/grid3img1.png';
import grid3img2 from './Images/grid3img2.png';
import grid3img3 from './Images/grid3img3.png';
import grid3img4 from './Images/grid3img4.png';
import grid3img6 from './Images/grid3img6.png';
import grid3img7 from './Images/grid3img7.png';

function CardGrid() {
  const cards = [
    { heading: 'Help Me Pitch', imageUrl:grid3img1 },
    { heading: 'Linker User Accounts', imageUrl:grid3img2 },
    { heading: 'Analyze Reports', imageUrl: grid3img3 },
    { heading: 'Correct Me', imageUrl: grid3img4 },
    { heading: 'Compare', imageUrl: grid3img6},
    { heading: 'Escalate', imageUrl: grid3img7 },
  ];

  return React.createElement('div', { className: 'card-container' },
    cards.map((card, index) =>
      React.createElement(Card, { key: index, heading: card.heading, imageUrl: card.imageUrl })
    )
  );
}

export default CardGrid;


