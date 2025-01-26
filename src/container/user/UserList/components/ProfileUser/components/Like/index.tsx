import React, { useRef } from 'react';
import Lottie from 'lottie-react';
import animationLike from './animationLike.json';
import { LikeStyled } from './index.style';

const Like = (): React.ReactElement => {
  const lottieRef = useRef(null);

  const handleMouseEnter = () => {
    lottieRef.current?.play();
  };
  const handleMouseLeave = () => {
    lottieRef.current?.stop();
  };

  return (
    <LikeStyled
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <Lottie
        lottieRef={lottieRef}
        animationData={animationLike}
        loop={false}
        autoplay={false}
      />
    </LikeStyled>
  );
};

export default Like;