import React, { useRef } from 'react';
import Lottie from 'lottie-react';
import animationDislike from './data/animationDislike.json';
import { ButtonStyled } from './index.style';

interface DislikeProps {
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

const Dislike = ({ onClick }: DislikeProps): React.ReactElement => {
  const lottieRef = useRef(null);

  const handleMouseEnter = () => {
    lottieRef.current?.play();
  };
  const handleMouseLeave = () => {
    lottieRef.current?.stop();
  };

  return (
    <ButtonStyled onClick={onClick} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <Lottie lottieRef={lottieRef} animationData={animationDislike} loop={false} autoplay={false} />
    </ButtonStyled>
  );
};

export default Dislike;
