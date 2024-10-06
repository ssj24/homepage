import React, {useEffect} from 'react';
import '../assets/styles/VerticalMenu.css';
import Card from './Card';
import AOS from "aos";


function VerticalMenu(props) {
  useEffect(() => {
    AOS.init();
  },[])
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
      <h2
        data-aos="fade-down"
        data-aos-anchor-placement="bottom-bottom"
        data-aos-offset="200"
        data-aos-duration="1500"
      >심스페이스 주요 기능</h2>
      <div className='vertical-row' style={{ margin: '100px 0', gap: '100px' }}>
        {[...Array(8)].map((e, i) => <span className="busterCards" key={i}>
          <Card
            idx={i}
            color={colors[i]}
          />
        </span>)}
      </div>
    </div>
  );
}

export default VerticalMenu;