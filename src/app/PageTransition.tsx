'use client';

import { useRef } from 'react';
import { TransitionRouter } from 'next-transition-router';
import { animate } from 'framer-motion/dom';
import styled, { keyframes } from 'styled-components';

const pageTransition = keyframes`
  from { transform: scale(0) }
  to { transform: scale(1) }
`

const PageTransitionWrapperStyled = styled.div`
  /* animation: ${pageTransition} 0.5s ease; */
`

export default function PageTransition({ children }: { children: React.ReactNode }) {
  const wrapperRef = useRef<HTMLDivElement>(null!)

  return (
    <TransitionRouter
      auto
      leave={(next) => {
        animate(
          wrapperRef.current,
          { opacity: [1, 0], scale: [1, 0.975] },
          { duration: 0.5, onComplete: next },
        );
      }}
      enter={(next) => {
        animate(
          wrapperRef.current,
          { opacity: [0, 1], scale: [0.975, 1] },
          { duration: 0.5, onComplete: next }
        );
      }}
    >
      <PageTransitionWrapperStyled ref={wrapperRef}>{children}</PageTransitionWrapperStyled>
    </TransitionRouter>
  );
}
