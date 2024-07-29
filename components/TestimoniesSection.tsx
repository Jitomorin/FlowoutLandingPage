import NextImage from 'next/image';
import React, { PropsWithChildren } from 'react';
import styled from 'styled-components';
import { media } from 'utils/media';
import Container from './Container';
import OverTitle from './OverTitle';
import QuoteIcon from '../public/testimonials/Quote Mark.svg';
import RichText from './RichText';
import Image from 'next/image';
import { useScreenType } from './TestimonialsLayout';

export interface TestimoniesSectionProps {
  title: string;
  overTitle: string;
  reversed?: boolean;
}

export default function TestimoniesSection({ title, overTitle, reversed, children }: PropsWithChildren<TestimoniesSectionProps>) {
  const screenType = useScreenType();

  return (
    <BasicSectionWrapper>
      {/* <ImageContainer>
        <NextImage src={imageUrl} alt={title} layout="fill" objectFit="cover" />
      </ImageContainer> */}

      <ContentContainer>
        <TitleContainer>
          {screenType === 'phone' || screenType === 'smallPhone' ? (
            <QuoteImage src={QuoteIcon} width={92} height={92} />
          ) : (
            <QuoteImage src={QuoteIcon} width={142} height={120} />
          )}
          <TitleText>{title}</TitleText>
        </TitleContainer>
        <Description>{children}</Description>
      </ContentContainer>
    </BasicSectionWrapper>
  );
}

const Description = styled(RichText)`
  padding: 0 8.313rem;
  ${media('=tablet')} {
    /* padding: 0  4.375rem; */
  }
  ${media('<tablet')} {
    text-align: center;
    padding: 0 2rem;
  }
  ${media('<=phone')} {
    padding: 0 2rem;
  }
`;

const CustomOverTitle = styled(OverTitle)`
  margin-bottom: 2rem;
`;

const ImageContainer = styled.div`
  flex: 1;

  position: relative;
  &:before {
    display: block;
    content: '';
    width: 100%;
    padding-top: calc((9 / 16) * 100%);
  }

  & > div {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
  }

  ${media('<=desktop')} {
    width: 100%;
  }
`;

const TitleContainer = styled.div`
  /* margin: 0 auto; */
  position: relative;
  display: flex;
  align-items: center;
  padding-top: 58px;
  padding-left: 2.375rem; // Adjust padding based on image size
  margin-bottom: 4rem;
  ${media('<tablet')} {
    padding-left: 0;
  }
`;

const QuoteImage = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  ${media('<tablet')} {
    top: 0;
    left: 40%;
  }
`;

const TitleText = styled.h1`
  font-size: 5.2rem;
  font-weight: bold;
  line-height: 1.1;
  width: 570px;
  margin-bottom: auto;
  z-index: 1;
  padding: 0 5.938rem;
  letter-spacing: -0.03em;
  ${media('<tablet')} {
    font-size: 3.2rem;
    text-align: center;
  }
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  .quote {
    position: absolute;
    top: 90%;
    left: 90%;
    z-index: 0;
  }
`;

type Props = Pick<TestimoniesSectionProps, 'reversed'>;
const BasicSectionWrapper = styled(Container)`
  display: flex;
  min-height: 100vh;
  flex-direction: ${(p: Props) => (p.reversed ? 'row-reverse' : 'row')};
  padding: 1.5rem 8.438rem;

  ${ImageContainer} {
    margin: ${(p: Props) => (p.reversed ? '0 0 0 5rem' : '0 5rem 0 0')};
  }

  ${media('<=desktop')} {
    flex-direction: column;

    ${ImageContainer} {
      margin: 0 0 2.5rem 0;
    }
  }
  ${media('=tablet')} {
    padding: 1.5rem 2rem;
  }
  ${media('<=phone')} {
    padding: 1.5rem 0rem;
  }
`;
