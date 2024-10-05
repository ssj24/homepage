import React, {useRef, useState} from 'react';
import { useTranslation } from "react-i18next";
import i18n from "../locales/i18n";

function Nav(props) {
  const { t } = useTranslation();
  const languageRef = useRef(null);
  const [isLanguageMenuOpen, setLanguageMenuOpen] = useState(false);
  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
    setLanguageMenuOpen(false);
  };
  return (
    <nav className='nav row between'>
      <img src='tebah.png' width='120px'/>
      <div className='menu row'>
        <a href={'#'}>{t(`nav.home`)}</a>
        <a href={'#menu1'}>{t(`nav.features`)}</a>
        <a href={'#menu2'}>{t(`nav.review`)}</a>
        <a href={'#menu3'}>{t(`nav.video`)}</a>
        <a href={'#menu4'}>{t(`nav.contact`)}</a>
        <div ref={languageRef} className="header-gnb-nav-link lang-en" onClick={() => setLanguageMenuOpen(prev => !prev)}>
          {t(`nav.language`)}
          {isLanguageMenuOpen && (
            <ul className="header-gnb-nav-link-dropDown">
              <li className="header-gnb-nav-link-dropDown-item" onClick={() => changeLanguage("ko")}>한국어</li>
              <li className="header-gnb-nav-link-dropDown-item" onClick={() => changeLanguage("en")}>English</li>
            </ul>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Nav;