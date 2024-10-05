import React, {useRef} from 'react';
import ReactPlayer from 'react-player';
import utils from './Utils';
import '../App.css';
import i18n from "../locales/i18n";
import { useTranslation } from "react-i18next";

function Header(props) {
  const videoRef= useRef();
  const { t } = useTranslation();
  const setPlayBackRate = () => {
    videoRef.current.playbackRate = 0.5;
  };
  return (
    <div className='App-header'>
      <video
        className='header-video'
        muted
        autoPlay
        loop
        ref={videoRef}
        onCanPlay={() => setPlayBackRate()}
      >
        <source src={utils.snow} type="video/mp4" />
      </video>
      <div className='overlay'>
        <h1>{t(`header.title`)}</h1>
        <h2>{t(`header.subtitle`)}</h2>
        <button style={{marginTop: '10px'}}>{t(`header.btn`)}</button>
      </div>
    </div>
  );
}

export default Header;