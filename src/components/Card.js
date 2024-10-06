import React, {useEffect} from 'react';
import AOS from "aos";
import utils from '../components/Utils';

function Card(props) {
  useEffect(() => {
    AOS.init();
  },[])
  return (
    <div
      className={`card row ${props.idx % 2 ? 'reverse' : ''}`}
      >
        <div
          data-aos={props.idx % 2 ? 'fade-right' : 'fade-left'}
          data-aos-anchor-placement="top-bottom"
          data-aos-offset="100"
          data-aos-duration="1500"
        >
          <img src={utils[`bg${props.idx + 1}`]} alt="background"/>
        </div>
        <div
          data-aos={props.idx % 2 ? 'fade-up' : 'fade-down'}
          data-aos-anchor-placement="top-bottom"
          data-aos-offset="200"
          data-aos-duration="1000"
          style={{ backgroundColor: props.color }}
        >
          <h3>bg{props.idx + 1}</h3>
        </div>
    </div>
  );
}

export default Card;