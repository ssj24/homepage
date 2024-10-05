import React, {useEffect} from 'react';
import Nav from './Nav';
import VerticalMenu from './VerticalMenu';
import HorizontalMenu from './HorizontalMenu';
import List from './List';
import Contact from './Contact';
import Footer from './Footer';

function Main(props) {
  useEffect(() => {
    const navWrapper = document.getElementById('navWrapper');
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const minHeight = 80;
      const maxHeight = 100;
      const scrollThreshold = 100; // 이 스크롤 범위 내에서 크기 변화

      // 스크롤 양에 따라 높이를 계산
      const newHeight = Math.max(minHeight, maxHeight - (scrollY / scrollThreshold) * (maxHeight - minHeight));
      navWrapper.style.height = `${newHeight}px`;
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <div className='main'>
      <div className='navWrapper' id='navWrapper'>
        <div className='navContent'>
          <Nav />
        </div>
      </div>
      <div id='menu1'>
        <VerticalMenu />
      </div>
      <div id='menu2'>
        <HorizontalMenu />
      </div>
      <div id='menu3'>
        <List />
      </div>
      <div id='menu4'>
        <Contact />
      </div>
      <Footer />
    </div>
  );
}

export default Main;