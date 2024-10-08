import React from 'react'
import Image from 'next/image';
import styled from "styled-components";

const ZoomWrapperBackgroundStyled = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9;
  backdrop-filter: blur(2px) brightness(.6);
  cursor: zoom-out;
`;

const ImageWrapperStyled = styled.div`
  position: relative;
  width: 90%;
  height: 90%;
`

export default function Zoom({ zoomedElement, setZoomedElement } : { zoomedElement: string, setZoomedElement: Function}) {
  return (
    <ZoomWrapperBackgroundStyled onClick={() => setZoomedElement(null)}>
      <ImageWrapperStyled>
        <Image unoptimized={false} priority src={zoomedElement} alt={`${zoomedElement} loading`} fill style={{objectFit:"contain"}} />
      </ImageWrapperStyled>
    </ZoomWrapperBackgroundStyled>
  )
}