import NextLink from 'next/link';
import styled from 'styled-components';
import Button from 'components/Button';
import ButtonGroup from 'components/ButtonGroup';
import Container from 'components/Container';
import HeroIllustration from '../../public/creative-block/Phone Mockup.svg';
import OverTitle from 'components/OverTitle';
import { useNewsletterModalContext } from 'contexts/newsletter-modal.context';
import { media } from 'utils/media';
import Image from 'next/image';
import FloatingCircles from 'components/FloatingCircles';
import { useScreenType } from 'components/TestimonialsLayout';

export default function Hero() {
  const { setIsModalOpened } = useNewsletterModalContext();
  const screenType = useScreenType();
  return (
    <HeroWrapper>
      <FloatingCircles />
      <Contents>
        <Heading>It’s time to get schwifty</Heading>
        <Description>
          {`Oh, yeah! You gotta get schwifty. You gotta get schwifty in here. It's time to get schwifty. Oh-oh. You gotta get schwifty. Oh, yeah! `}{' '}
        </Description>
        <CustomButtonGroup>
          <Button onClick={() => setIsModalOpened(true)}>Get Swifty</Button>
        </CustomButtonGroup>
      </Contents>
      <ImageContainer>
        <Image src={HeroIllustration} width={619} height={655} />
      </ImageContainer>
    </HeroWrapper>
  );
}

const HeroWrapper = styled(Container)`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 48px;
  /* background-color: aliceblue; */
  padding-left: 8.438rem;
  min-height: 100vh;
  padding-right: 8.438rem;
  ${media('<desktop')} {
    padding-top: 1rem;
    flex-direction: column;
    align-items: center;
  }
  ${media('<tablet')} {
    padding-left: 2rem;
    padding-right: 2rem;
  }
`;

const Contents = styled.div`
  margin: 0 auto;

  flex: 1;

  ${media('<=desktop')} {
    max-width: 100%;
  }
`;

const CustomButtonGroup = styled(ButtonGroup)`
  margin-top: 4rem;
`;

const ImageContainer = styled.div`
  display: flex;
  flex: 1;
  overflow: hidden;
  justify-content: center;
  align-items: center;
  img {
    z-index: 1;
  }

  ${media('<=desktop')} {
    /* width: 50vw; */
    margin-top: 103px;
    justify-content: center;
    svg {
    }
  }
  ${media('<=phone')} {
    width: 100vw;
  }
`;

const Description = styled.p`
  font-size: 1.8rem;
  opacity: 0.8;
  line-height: 32px;
  ${media('=desktop')} {
    font-size: 0.8rem;
  }

  ${media('<=desktop')} {
    font-size: 1.7rem;
  }
  ${media('<=tablet')} {
    text-align: center;
  }
`;

const Heading = styled.h1`
  font-size: 7.2rem;
  font-weight: bold;
  line-height: 1.1;
  margin-bottom: 4rem;
  letter-spacing: -0.03em;

  ${media('<=tablet')} {
    font-size: 5.6rem;
    margin-bottom: 2rem;
    text-align: center;
  }
  ${media('<=phone')} {
    font-size: 4.6rem;
    margin-bottom: 2rem;
    text-align: center;
  }
`;
