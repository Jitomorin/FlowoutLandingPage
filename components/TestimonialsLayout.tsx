'use client';

import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import Quote from '../public/testimonials/Quote Mark.svg';
import TestimonialsSlider from './TestimonialsSlider';
import Testimonials from '../views/HomePage/Testimonials';
import { media } from 'utils/media';

const Container = styled.div`
  margin-top: 24px;
  position: relative;
  display: flex;
  width: 100%;
  height: 100vh; /* Adjust height as needed */
  padding: 2rem;
  ${media('<=tablet')} {
    height: auto;
    padding: 2rem 0;
  }
`;

const TitleContainer = styled.div`
  position: absolute;
  top: 5%;
  left: 5%;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  font-weight: bold;
`;

const Subtitle = styled.p`
  font-size: 1.25rem;
  margin-top: 0.5rem;
`;

const TestimonialCard = styled.div`
  position: absolute;
  width: 445px;
  background-color: white;
  border-radius: 8px;
  padding: 32px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);

  ${media('<tablet')} {
    width: 100%;
  }
`;

const TestimonialQuote = styled.p`
  font-size: 18px;
  line-height: 1.5;
  margin-bottom: 10px;
  color: black;
`;

const TestimonialAuthor = styled.h3`
  font-size: 16px;
  padding-left: 2rem;
  font-weight: bold;
  margin-bottom: 5px;
  color: black;
`;

const TestimonialCompany = styled.p`
  font-size: 14px;
  padding-left: 2rem;
  color: rgba(150, 155, 171, 1);
`;

const Logo = styled.img`
  width: 140px;
  height: 40px;
  margin-right: 10px;
`;

const QuoteIcon = styled.img`
  width: 15px;
  height: 14px;
  margin-right: 1rem;
`;
const QuoteContainer = styled.div`
  margin-top: 2rem;
  display: flex;
`;
export function useScreenType() {
  const [screenType, setScreenType] = useState(getScreenType());

  useEffect(() => {
    const handleResize = () => {
      setScreenType(getScreenType());
    };
    if (typeof window === 'undefined') {
      return;
    }

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return screenType;
}

function getScreenType() {
  let width = 1200;
  if (typeof window !== 'undefined') {
    width = window.innerWidth;
  }
  if (width < 576) {
    return 'smallPhone';
  } else if (width >= 576 && width < 768) {
    return 'phone';
  } else if (width >= 768 && width < 992) {
    return 'tablet';
  } else if (width >= 992 && width < 1200) {
    return 'desktop';
  } else {
    return 'largeDesktop';
  }
}

export const Testimonial = ({ top, left, logo, width, height, quote, author, company, isSlider }: any) => {
  if (isSlider) {
    return (
      <TestimonialCard style={{}}>
        <Logo src={logo} alt={company} />
        <QuoteContainer>
          <QuoteIcon src={Quote} alt="Quote Icon" />

          <TestimonialQuote>{quote}</TestimonialQuote>
        </QuoteContainer>

        <TestimonialAuthor>{author}</TestimonialAuthor>
        <TestimonialCompany>{company}</TestimonialCompany>
      </TestimonialCard>
    );
  } else {
    return (
      <TestimonialCard style={{ top, left, width, height }}>
        <Logo src={logo} alt={company} />
        <QuoteContainer>
          <QuoteIcon src={Quote} alt="Quote Icon" />

          <TestimonialQuote>{quote}</TestimonialQuote>
        </QuoteContainer>

        <TestimonialAuthor>{author}</TestimonialAuthor>
        <TestimonialCompany>{company}</TestimonialCompany>
      </TestimonialCard>
    );
  }
};

const TestimonialsLayout = () => {
  const screenType = useScreenType();
  console.log(screenType);

  // const getAdjustedDimensions1 = (screenType:any) => {
  //   switch (screenType) {
  //     case 'smallPhone':
  //       return { width: '150px', height: '246px' };
  //     case 'phone':
  //       return { width: '150px', height: '246px' };
  //     case 'tablet':
  //       return { width: '250px', height: '346px' };
  //     case 'desktop':
  //       return { width: '350px', height: '436px' };
  //     case 'largeDesktop':
  //       return { width: '350px', height: '436px' };
  //     default:
  //       return { width: '350px', height: '436px' };
  //   }
  // };

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
      top: '35%',
      left: '50%',
      width: '350px',
      height: '276px',
      logo: '/testimonials/BookMyShow Logo.svg',
      quote: 'Landify saved our time in designing my company page.',
      author: 'Kristin Watson',
      company: 'Co-Founder, BookMyShow',
    },
  ];

  return (
    <Container>
      {screenType == 'largeDesktop' ? (
        <>
          {testimonialsData.map((testimonial, index) => (
            <Testimonial key={index} {...testimonial} />
          ))}
        </>
      ) : (
        <>
          <TestimonialsSlider testimonials={testimonialsData} />
        </>
      )}
    </Container>
  );
};

export default TestimonialsLayout;
