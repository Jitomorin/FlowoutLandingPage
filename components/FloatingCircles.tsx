// components/FloatingCircles.js
import styled, { keyframes } from 'styled-components';
import { media } from 'utils/media';

const floatAnimation = keyframes`
  0% { transform: translateY(0); }
  50% { transform: translateY(-20px); }
  100% { transform: translateY(0); }
`;

const Background = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  overflow: hidden; /* Prevent overflow */
  background-color: transparent;

  .circle {
    z-index: 2;
    position: absolute;
    animation: ${floatAnimation} 4s ease-in-out infinite;
    ${media('<desktop')} {
      /* height: 50px; */
      width: 100px;
    }
    ${media('<=phone')} {
      /* height: 30px; */
      width: 60px;
    }
  }

  .circle1 {
    top: 4%;
    left: 75%;
    animation-duration: 5s;
    ${media('<=phone')} {
      top: 90%;
      left: 10%;
    }
  }
  .circle2 {
    top: 60%;
    left: 70%;
    animation-duration: 6s;
  }
  .circle3 {
    top: 30%;
    left: 80%;
    animation-duration: 7s;
    ${media('<=phone')} {
      top: 90%;
      left: 80%;
    }
  }
  .circle4 {
    top: 40%;
    left: 48%;
    animation-duration: 8s;
    ${media('<=phone')} {
      top: 55%;
      left: 10%;
    }
  }
  .circle5 {
    top: 80%;
    z-index: 0;
    left: 40%;
    animation-duration: 9s;
    ${media('<=phone')} {
      top: 80%;
      left: 0%;
    }
  }
  .circle6 {
    top: 90%;
    left: 70%;
    z-index: 0;
    animation-duration: 10s;
    ${media('<=phone')} {
      top: 50%;
      left: 40%;
    }
  }
  .circle7 {
    top: 70%;
    left: 80%;
    animation-duration: 11s;
  }
  .circle8 {
    top: 80%;
    left: 90%;
    z-index: 0;
    animation-duration: 12s;
  }

  img {
    height: 100%;
    width: 100%;
    object-fit: cover;
  }
`;

const FloatingCircles = () => {
  return (
    <Background>
      <div className="circle circle1">
        <img src="creative-block/User 4.svg" alt="Circle 1" />
      </div>
      <div className="circle circle2">
        <img src="creative-block/User 1.svg" alt="Circle 2" />
      </div>
      <div className="circle circle3">
        <img src="creative-block/User 2.svg" alt="Circle 3" />
      </div>
      <div className="circle circle4">
        <img src="creative-block/User 3.svg" alt="Circle 4" />
      </div>
      <div className="circle circle5">
        <img src="creative-block/Half Circle 1.svg" alt="Circle 5" />
      </div>
      <div className="circle circle6">
        <img src="creative-block/Half Circle 2.svg" alt="Circle 6" />
      </div>
      <div className="circle circle8">
        <img src="creative-block/Half Circle 3.svg" alt="Circle 8" />
      </div>
    </Background>
  );
};

export default FloatingCircles;
