import styled from "styled-components"
import { DarkModeToggleWrapperStyled } from "../DarkMode/DarkModeToggle.style"

export const HeaderTextStyled = styled.span<{ $current: Boolean }>`
  font-weight: ${({ $current }) => $current ? '400' : '300'};
`

export const HeaderInquiryNumberStyled = styled.span<{ $show: Boolean }>`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  left: ${({ $show }) => $show ? '-10px' : '0'};
  top: ${({ $show }) => $show ? '-10px' : '0'};
  opacity: ${({ $show }) => $show ? 1 : 0};
  width: 20px;
  height: 20px;
  font-size: 14px;
  border-radius: 50%;
  background-color: rgb(var(--main-orange));
  transition: left .2s ease, top .2s ease, opacity .2s ease;
  color: var(--white-color);
  z-index: 1;
`

export const InquiryWrapperStyled = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  margin-left: auto;
  column-gap: 24px;

  div:nth-child(2) {
    position: relative;
    padding: 4px 20px;
    border-radius: 4px;
    transition: background-color .2s ease, color .2s ease, border-color .2s ease;
    background-color: rgb(var(--background));
    cursor: pointer;
  }
`

export const HeaderWrapperStyled = styled.header<{ $isOnTop: Boolean }>`
  position: fixed;
  display: flex;
  align-items: center;
  left: 0;
  right: 0;
  top: 0;
  column-gap: 24px;
  font-size: 20px;
  font-weight: 300;
  text-transform: uppercase;
  transition: background-color .2s ease, color .2s ease;
  color: ${({ $isOnTop }) => $isOnTop ? 'rgb(var(--foreground))' : 'var(--dark-color)'};
  padding: 3.75vh 10vw;
  z-index: 1;

  &::before {
    position: absolute;
    content: '';
    left: 0;
    right: 0;
    top: ${({ $isOnTop }) => $isOnTop ? '-100%' : '0'};
    height: calc(7.5vh + 60px);
    background-color: rgba(var(--main-yellow), .75);
    backdrop-filter: blur(5px);
    transition: top .2s ease;
    z-index: -1;
  }

  a {
    min-width: 60px;
    height: 60px;
    border-radius: 10px;
    text-align: center;
    align-content: center;
  }

  a:not(:first-child) {
    ${HeaderTextStyled} {
      position: relative;
    }

    ${HeaderTextStyled}::before {
      position: absolute;
      content: '';
      background-color: ${({ $isOnTop }) => $isOnTop ? 'rgb(var(--foreground))' : 'var(--dark-color)'};
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

  a:first-child {
    background-color: ${({ $isOnTop }) => $isOnTop ? 'rgba(var(--foreground), .3)' : 'rgba(var(--background), .9)'};
    transition: background-color .2s ease;
  }

  ${DarkModeToggleWrapperStyled} {
    position: relative;
    margin-left: auto;
    top: unset;
    bottom: unset;
    left: unset;
    right: unset;
    border-color: ${({ $isOnTop }) => $isOnTop ? 'rgb(var(--background))' : 'unset'};
    color: rgb(var(--foreground));
  }

  ${InquiryWrapperStyled} > div:nth-child(2) {
    border: ${({ $isOnTop }) => $isOnTop ? '1px solid rgb(var(--foreground))' : '1px solid var(--dark-color)'};
    color: rgb(var(--foreground))
  }
`
