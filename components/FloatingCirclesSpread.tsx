// components/FloatingCircles.js
import styled, { keyframes } from 'styled-components';
import { media } from 'utils/media';

const floatAnimation = keyframes`
  0% { transform: translateY(0); }
  50% { transform: translateY(-20px); }
  100% { transform: translateY(0); }
`;

const Background = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden; /* Prevent overflow */
  background-color: transparent;

  .circle {
    z-index: -1;
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
    bottom: 0%;
    left: 70%;
    animation-duration: 5s;
    ${media('<tablet')} {
      bottom: 0%;
      left: 10%;
    }
  }
  .circle2 {
    top: 19%;
    left: -2%;
    animation-duration: 6s;
  }
  .circle3 {
    top: 5%;
    right: -3%;
    animation-duration: 7s;
  }
  .circle4 {
    top: 50%;
    left: 23%;
    animation-duration: 8s;
    ${media('<tablet')} {
      top: 50%;
      left: 80%;
    }
  }
  .circle5 {
    top: 5%;
    left: 40%;
    animation-duration: 9s;
  }
  .circle6 {
    display: block;
    top: 0%;
    left: 10%;
    animation-duration: 10s;
    ${media('<tablet')} {
      display: hidden;
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
    animation-duration: 12s;
  }

  img {
    height: 100%;
    width: 100%;
    object-fit: cover;
  }
`;

const FloatingCirclesSpread = () => {
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

export default FloatingCirclesSpread;
