"use client"
import React from 'react';
import { DotLottiePlayer, Controls } from '@dotlottie/react-player';
import '@dotlottie/react-player/dist/index.css';

const LottieAnimation = () => {
  return (
    <div>
      <DotLottiePlayer
        src="/animation_lnpl4rc6.lottie"
        autoplay
        loop
      >
      </DotLottiePlayer>
    </div>
  );
};

export default LottieAnimation;