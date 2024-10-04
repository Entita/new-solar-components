import styled from "styled-components"

export const HeaderMobileWrapperStyled = styled.header`
  position: fixed;
  top: 12px;
  left: 16px;
  z-index: 2;
  pointer-events: none;
`

export const HeaderMobileButtonWrapperStyled = styled.div`
  position: relative;
  width: fit-content;
`

export const HeaderMobileButtonRelativeWrapperStyled = styled.div<{ $open: Boolean }>`
  height: 36px;
  width: 48px;
  border-radius: 4px;
  padding-inline: 2px;
  pointer-events: all;
  cursor: pointer;
`

export const HeaderMobileButtonStyled = styled.div<{ $open: Boolean }>`
  position: relative;
  top: 50%;
  transform: translateY(-50%);
  left: 0;
  right: 0;
  height: 4px;
  border-radius: 4px;
  background-color: ${({ $open }) => $open ? 'transparent' : 'rgb(var(--main-yellow))'};
  transform: ${({ $open }) => $open ? 'rotate(360deg)' : 'rotate(0deg)'};
  transition: background-color .6s ease, transform .6s ease;

  &::before {
    position: absolute;
    content: '';
    top: 16px;
    left: 0;
    height: 4px;
    border-radius: 4px;
    background-color: ${({ $open }) => $open ? 'var(--dark-color)' : 'rgb(var(--main-yellow))'};
    transform-origin: left;
    transition: background-color .6s ease, transform .6s ease, right .6s ease;
    right: ${({ $open }) => $open ? '-10px' : '0'};
    transform: ${({ $open }) => $open ? 'rotate(-36deg)' : 'rotate(0deg)'};
  }

  &::after {
    position: absolute;
    content: '';
    bottom: 16px;
    left: 0;
    height: 4px;
    border-radius: 4px;
    background-color: ${({ $open }) => $open ? 'var(--dark-color)' : 'rgb(var(--main-yellow))'};
    transform-origin: left;
    transition: background-color .6s ease, transform .6s ease, right .6s ease;
    right: ${({ $open }) => $open ? '-10px' : '0'};
    transform: ${({ $open }) => $open ? 'rotate(36deg)' : 'rotate(0deg)'};
  }
`

export const HeaderMobileBackgroundStyled = styled.div<{ $open: Boolean }>`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  background-color: rgb(var(--main-yellow));
  width: ${({ $open }) => $open ? '300vw' : '0'};
  height: ${({ $open }) => $open ? '250vh' : '0'};
  transition: width .6s ease, height .6s ease;
  border-radius: 50%;
  z-index: -1;
`

export const HeaderTextStyled = styled.span<{ $current: Boolean }>`
  font-weight: ${({ $current }) => $current ? '400' : '300'};
`

export const HeaderMobileContentWrapperStyled = styled.div<{ $open: Boolean }>`
  display: flex;
  flex-direction: column;
  row-gap: 5vh;
  padding: 5vh 10vw;
  clip-path: ${({ $open }) => $open ? 'ellipse(100vw 100vh at 0% 0%)' : 'ellipse(0 0 at 0% 0%)'};
  transition: clip-path .6s ease;
  width: calc(100vw - 48px);
  height: calc(100vh - 64px);
  font-size: clamp(48px, 14vw, 64px);
  pointer-events: all;
  color: var(--dark-color);

  a:first-child {
    display: flex;
    background-color: rgba(var(--background), .95);
    width: fit-content;
    padding: 12px;
    border-radius: 16px;
  }

  a:not(:first-child) {
    ${HeaderTextStyled} {
      position: relative;
    }

    ${HeaderTextStyled}::before {
      position: absolute;
      content: '';
      background-color: var(--dark-color);
      left: 0;
      right: 0;
      bottom: -5px;
      height: 1px;
      opacity: 0;
      transition: opacity .2s ease, bottom .2s ease, background-color .2s ease;
    }

    &:hover ${HeaderTextStyled}::before {
      bottom: 0;
      opacity: 1;
    }
  }

  span:not(${HeaderTextStyled}) {
    font-weight: 300;
  }
`