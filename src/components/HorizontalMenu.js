import React, { useRef, useState, useEffect } from 'react';

function HorizontalMenu({title, images}) {
  const containerRef = useRef(null);
  const transitionRef = useRef(null);
  const [slides, setSlides] = useState(images);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [clones, setClones] = useState([]);
  const slidesLength = images.length;
  const slideWidth = 300;
  const slideMargin = 10;
  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) =>
      (prevSlide - 1) % slides.length
    );
  };
  useEffect(() => {
    const containerWidth = containerRef.current.offsetWidth;
    const slideTotal = slideWidth + slideMargin;
    const visibleSlides = Math.ceil(containerWidth / slideTotal); // Calculate how many slides are visible
    const requiredClones = [...images, ...images.slice(0, visibleSlides)]; // Clone the first few slides to fill width
    setSlides(requiredClones); // Set the clones state
  }, [images]);
  // useEffect(() => {
  //   if (currentSlide === slidesLength + 1) {
  //     // If we reached the first cloned slide (after last real slide)
  //     transitionRef.current.style.transition = 'none'; // Disable transition
  //     setCurrentSlide(1); // Jump back to the first real slide
  //   } else if (currentSlide === 0) {
  //     // If we reached the last cloned slide (before first real slide)
  //     transitionRef.current.style.transition = 'none'; // Disable transition
  //     setCurrentSlide(slidesLength); // Jump to the last real slide
  //   } else {
  //     transitionRef.current.style.transition = 'transform 0.5s ease-in-out'; // Enable transition
  //   }
  // }, [currentSlide, slidesLength]);
  useEffect(() => {
    let slideInterval;
    const firstSlide = slides.slice(0, 1);
    const newSlides = [...slides.slice(1,), firstSlide[0]];
    setSlides(newSlides);
    if (isPlaying) {
      slideInterval = setInterval(nextSlide, 1000);
    }
    return () => clearInterval(slideInterval);
  }, [isPlaying, currentSlide]);
  const handleMouseEnter = () => {
    setIsPlaying(false);
  };

  const handleMouseLeave = () => {
    setIsPlaying(true);
  };
  return (
    <div>
      <p style={{textAlign: 'start'}}>{title}</p>
      <div
        className="carousel-container"
        ref={containerRef}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: '100%',
          height: '300px',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <div
          className="slides"
          ref={transitionRef}
          style={{
            display: 'flex',
            transition: 'transform 0.5s ease-in-out',
            transform: `translateX(-${currentSlide * (slideWidth + slideMargin)}px)`,
          }}
        >
          <div
            className="slide"
            style={{
              width: `${slideWidth}px`,
              height: '300px',
              marginRight: `${slideMargin}px`,
            }}
          >
            <p>0</p>
            {/* <img src={images[slidesLength - 1]} style={{width: '100%', height: '100%', objectFit: 'cover'}}/> */}
          </div>
          {slides.map((image, index) => (
            <div
              key={index}
              className="slide"
              style={{
                width: `${slideWidth}px`,
                height: '300px',
                marginRight: `${slideMargin}px`,
              }}
            >
              <p>{index}</p>
              {/* <img src={image} style={{width: '100%', height: '100%', objectFit: 'cover'}}/> */}
            </div>
          ))}
        </div>
        <button
          className="prev"
          onClick={prevSlide}
          style={{
            position: 'absolute',
            left: '10px',
            background: 'rgba(0, 0, 0, 0.5)',
            color: '#fff',
            border: 'none',
            cursor: 'pointer',
          }}
        >
          &#10094;
        </button>

        <button
          className="next"
          onClick={nextSlide}
          style={{
            position: 'absolute',
            right: '10px',
            background: 'rgba(0, 0, 0, 0.5)',
            color: '#fff',
            border: 'none',
            cursor: 'pointer',
          }}
        >
          &#10095;
        </button>

        <div
          className="indicators"
          style={{
            position: 'absolute',
            bottom: '10px',
            display: 'flex',
            justifyContent: 'center',
            width: '100%',
          }}
        >
          {slides.map((_, index) => (
            <div
              key={index}
              onClick={() => setCurrentSlide(index)}
              style={{
                width: '10px',
                height: '10px',
                borderRadius: '50%',
                backgroundColor: currentSlide === index ? 'white' : 'gray',
                margin: '0 5px',
                cursor: 'pointer',
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default HorizontalMenu;