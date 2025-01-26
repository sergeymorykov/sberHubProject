import React, { useRef } from 'react';
import Lottie from 'lottie-react';
import animationDislike from './animationDislike.json';
import { DislikeStyled } from './index.style';

const Dislike = (): React.ReactElement => {
  const lottieRef = useRef(null);

  const handleMouseEnter = () => {
    lottieRef.current?.play();
  };
  const handleMouseLeave = () => {
    lottieRef.current?.stop();
  };

  return (
    <DislikeStyled
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <Lottie
        lottieRef={lottieRef}
        animationData={animationDislike}
        loop={false}
        autoplay={false}
      />
    </DislikeStyled>
  );
};

export default Dislike;