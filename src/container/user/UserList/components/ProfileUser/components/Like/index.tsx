import React, { useRef } from 'react';
import Lottie from 'lottie-react';
import animationLike from './data/animationLike.json';
import { ButtonStyled } from './index.style';

const Like = (): React.ReactElement => {
  const lottieRef = useRef(null);

  const handleMouseEnter = () => {
    lottieRef.current?.play();
  };
  const handleMouseLeave = () => {
    lottieRef.current?.stop();
  };

  return (
    <ButtonStyled onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <Lottie lottieRef={lottieRef} animationData={animationLike} loop={false} autoplay={false} />
    </ButtonStyled>
  );
};

export default Like;
