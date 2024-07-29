import React, { useState, useRef } from 'react';
import styled from 'styled-components';
import { Testimonial } from './TestimonialsLayout';
import { media } from 'utils/media';

const testimonialsData = [
  {
    top: '0%',
    left: '12.5%',
    width: '350px',
    height: '436px',
    logo: '/testimonials/Hubspot Logo.svg',
    quote:
      'To quickly start my startup landing page design, I was looking for a landing page UI Kit. Landify is one of the best landing page UI kit I have come across. It’s so flexible, well organised and easily editable.',
    author: 'Floyd Miles',
    company: 'Vice President, GoPro',
  },
  {
    top: '-27%',
    left: '50%',
    width: '445px',
    height: '340px',
    logo: '/testimonials/Airbnb Logo.svg',
    quote:
      'I used landify and created a landing page for my startup within a week. The Landify UI Kit is simple and highly intuitive, so anyone can use it.',
    author: 'Jane Cooper',
    company: 'CEO, Airbnb',
  },
  {
    top: '34%',
    left: '50%',
    width: '350px',
    height: '276px',
    logo: '/testimonials/BookMyShow Logo.svg',
    quote: 'Landify saved our time in designing my company page.',
    author: 'Kristin Watson',
    company: 'Co-Founder, BookMyShow',
  },
];

const TestimonialSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [dragStartX, setDragStartX] = useState(0);
  const [dragging, setDragging] = useState(false);
  const sliderRef = useRef(null);

  const handleMouseDown = (e) => {
    setDragStartX(e.clientX);
    setDragging(true);
  };

  const handleMouseMove = (e) => {
    if (!dragging) return;
    const dragEndX = e.clientX;
    const dragDistance = dragEndX - dragStartX;
    if (dragDistance > 100) {
      prevSlide();
      setDragging(false);
    } else if (dragDistance < -100) {
      nextSlide();
      setDragging(false);
    }
  };

  const handleMouseUp = () => {
    setDragging(false);
  };

  const handleTouchStart = (e) => {
    setDragStartX(e.touches[0].clientX);
    setDragging(true);
  };

  const handleTouchMove = (e) => {
    if (!dragging) return;
    const dragEndX = e.touches[0].clientX;
    const dragDistance = dragEndX - dragStartX;
    if (dragDistance > 100) {
      prevSlide();
      setDragging(false);
    } else if (dragDistance < -100) {
      nextSlide();
      setDragging(false);
    }
  };

  const handleTouchEnd = () => {
    setDragging(false);
  };

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % testimonialsData.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + testimonialsData.length) % testimonialsData.length);
  };

  return (
    <SliderContainer
      ref={sliderRef}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <SliderWrapper currentSlide={currentSlide}>
        {testimonialsData.map((testimonial, index) => (
          <SlideCont key={index}>
            <Slide key={index}>
              <Testimonial isSlider={true} {...testimonial} />
            </Slide>
          </SlideCont>
        ))}
      </SliderWrapper>
      <Pagination>
        {testimonialsData.map((_, index) => (
          <Dot key={index} active={currentSlide === index} onClick={() => setCurrentSlide(index)} />
        ))}
      </Pagination>
    </SliderContainer>
  );
};

const SliderContainer = styled.div`
  position: relative;
  min-width: 100%;
  height: 100vh;
  overflow-x: hidden;
  overflow-y: visible;
`;

const SliderWrapper = styled.div`
  display: flex;
  min-width: 100%;
  justify-content: space-between;
  padding: 0;
  transition: transform 0.5s ease;
  transform: ${({ currentSlide }) => `translateX(-${currentSlide * 100}%)`};
`;

const SlideCont = styled.div`
  min-width: 100%;
  display: flex;
  margin: 0 auto;
  justify-content: center;
  box-sizing: border-box;
  padding: 20px; /* Add padding to create space around the testimonial */
  ${media('<tablet')} {
    padding: 20px 10px; /* Adjust padding for smaller screens */
  }
`;

const Slide = styled.div`
  min-width: 100%;
  display: flex;
  justify-content: center;
  box-sizing: border-box;
  padding: 20px; /* Add padding to create space around the testimonial */
  ${media('<tablet')} {
    padding: 20px 10px; /* Adjust padding for smaller screens */
  }
`;

const Pagination = styled.div`
  position: absolute;
  bottom: 0px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;

  ${media('=tablet')} {
    bottom: 140px;
  }
  ${media('<tablet')} {
    bottom: 70px;
  }
  ${media('<=phone')} {
    bottom: 50px;
  }
  ${media('<phone')} {
    bottom: 0px;
  }
`;

const Dot = styled.div`
  width: 10px;
  height: 10px;
  margin: 0 5px;
  border-radius: 50%;
  border: 2px solid rgb(var(--primary), 0.75);
  background-color: ${({ active }) => (active ? 'rgb(var(--primary))' : 'transparent')};
  cursor: pointer;
`;

export default TestimonialSlider;
