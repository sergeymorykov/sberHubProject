import React, { useRef } from 'react';
import Lottie from 'lottie-react';
import animation404 from './Animation404.json';

export const Error404 = () => {
  const lottieRef = useRef(null);

  const handleClick = () => {
    if (lottieRef.current?.animationItem?.isPaused) {
      lottieRef.current?.play();
    } else {
      lottieRef.current?.pause();
    }
  };

  return <Lottie onClick={handleClick} lottieRef={lottieRef} animationData={animation404} loop={true} />;
};
