import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const TestimonialCard = styled.div`
  width: 300px; /* Adjust width as needed */
  background-color: #fff;
  border-radius: 8px;
  padding: 20px;
  margin: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const TestimonialQuote = styled.p`
  font-size: 18px;
  line-height: 1.5;
  margin-bottom: 10px;
`;

const TestimonialAuthor = styled.h3`
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 5px;
`;

const TestimonialCompany = styled.p`
  font-size: 14px;
  color: #888;
`;

const Logo = styled.img`
  width: 50px;
  height: 50px;
  margin-right: 10px;
`;

const TestimonialsGrid = () => {
  const testimonialsData = [
    {
      name: 'Kristin Watson',
      quote: 'Landify saved our time in designing my company page.',
      company: 'Company A',
      image: '/testimonials/BookMyShow Logo.svg',
    },
    {
      name: 'Kristin Watson',
      quote: 'Landify saved our time in designing my company page.',
      company: 'Company A',
      image: '/testimonials/BookMyShow Logo.svg',
    },
    {
      name: 'Kristin Watson',
      quote: 'Landify saved our time in designing my company page.',
      company: 'Company A',
      image: '/testimonials/BookMyShow Logo.svg',
    },

    // ... more testimonials
  ];

  return (
    <Container>
      {testimonialsData.map((testimonial, index) => (
        <TestimonialCard key={index}>
          <Logo src={testimonial.image} alt={testimonial.company} />
          <TestimonialQuote>{testimonial.quote}</TestimonialQuote>
          <TestimonialAuthor>{testimonial.name}</TestimonialAuthor>
          <TestimonialCompany>{testimonial.company}</TestimonialCompany>
        </TestimonialCard>
      ))}
    </Container>
  );
};

export default TestimonialsGrid;
