import React, {useEffect} from 'react';
import '../assets/styles/VerticalMenu.css';
import Card from './Card';


function VerticalMenu(props) {
  
  const colors = [
    "#FFB3BA", // Light pink
    "#FFDFBA", // Peach
    "#FFFFBA", // Pastel yellow
    "#BAFFC9", // Mint green
    "#BAE1FF", // Light sky blue
    "#D4A5A5", // Soft rose
    "#B5EAD7", // Pastel green
    "#C7CEEA"  // Light lavender
  ];
  return (
    <div>
      <h2>심스페이스 주요 기능</h2>
      <div className='vertical-row' style={{ gap: '30px' }}>
        {[...Array(8)].map((e, i) => <span className="busterCards" key={i}>
          <Card
            isOdd={i%2}
            color={colors[i]}
          />
        </span>)}
      </div>
    </div>
  );
}

export default VerticalMenu;