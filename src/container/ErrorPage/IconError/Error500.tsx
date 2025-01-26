import React, { useRef } from 'react';
import Lottie from 'lottie-react';
import animation500 from './Animation500.json';

export const Error500 = () => {
  const lottieRef = useRef(null);

  const handleClick = () => {
    if (lottieRef.current?.animationItem?.isPaused) {
      lottieRef.current?.play();
    } else {
      lottieRef.current?.pause();
    }
  };

  return <Lottie onClick={handleClick} lottieRef={lottieRef} animationData={animation500} loop={true} />;
};
