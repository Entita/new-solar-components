import styled from "styled-components"
import { DarkModeToggleWrapperStyled } from "../DarkMode/DarkModeToggle.style"
import { InquiryStyled, InquiryWrapperStyled } from "./Inquiry.style"
import { HeaderBackToProductsWrapperStyled } from "./BackToProducts.style"

export const HeaderTextStyled = styled.span<{ $current: Boolean }>`
  font-weight: ${({ $current }) => $current ? '400' : '300'};
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
  z-index: 2;

  &::before {
    position: absolute;
    content: '';
    left: 0;
    right: 0;
    top: ${({ $isOnTop }) => $isOnTop ? '-100%' : '0'};
    height: calc(7.5vh + 60px);
    background-color: rgba(var(--main-yellow), .75);
    backdrop-filter: blur(5px) brightness(0.5);
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

  &:has(${InquiryWrapperStyled}):has(${HeaderBackToProductsWrapperStyled}) {
    ${InquiryWrapperStyled} {
      margin-left: unset;
    }

    ${HeaderBackToProductsWrapperStyled} ${DarkModeToggleWrapperStyled} {
      display: none;
    }

    @media (max-width: 1000px) {
      ${InquiryStyled}, ${HeaderBackToProductsWrapperStyled} a {
        font-size: 12px;
        padding: 4px 8px;
      }
    }
  }
`
