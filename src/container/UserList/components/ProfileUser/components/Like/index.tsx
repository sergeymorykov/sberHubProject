import React, { useRef } from 'react';
import Lottie from 'lottie-react';
import animationLike from './data/animationLike.json';
import { ButtonStyled } from './index.style';

interface LikeProps {
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

const Like = ({ onClick }: LikeProps): React.ReactElement => {
  const lottieRef = useRef(null);

  const handleMouseEnter = () => {
    lottieRef.current?.play();
  };
  const handleMouseLeave = () => {
    lottieRef.current?.stop();
  };

  return (
    <ButtonStyled onClick={onClick} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <Lottie lottieRef={lottieRef} animationData={animationLike} loop={false} autoplay={false} />
    </ButtonStyled>
  );
};

export default Like;
