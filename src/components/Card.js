import React, {useEffect} from 'react';
import AOS from "aos";
import "aos/dist/aos.css";

function Card(props) {
  useEffect(() => {
    AOS.init();
  },[])
  return (
    <div
      className='card'
      data-aos={props.isOdd ? 'fade-right' : 'fade-left'}
      data-aos-anchor-placement="center-bottom"
      data-aos-offset="100"
      data-aos-duration="1500"
      style={{ backgroundColor: props.color }}>
    </div>
  );
}

export default Card;