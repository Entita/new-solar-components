import styled from "styled-components"

export const StepsMobileDropdownWrapperStyled = styled.div`
  border: 2px solid rgb(var(--main-orange));
  border-radius: 6px;
  padding: 8px;
  overflow: hidden;
`

export const StepsMobileDropdownTitleWrapperStyled = styled.div`
  display: flex;
  font-size: 18px;
  font-weight: 700;
  letter-spacing: 1px;
  cursor: pointer;
`

export const StepsMobileDropdownArrowStyled = styled.div<{ $angle: Number }>`
  width: 0px;
  height: 0px;
  border-top: 10px solid rgb(var(--foreground));
  border-left: 8px solid transparent;
  border-right: 8px solid transparent;
  border-bottom: none;
  margin-block: auto;
  margin-left: auto;
  transform: ${({ $angle }) => `rotate(${$angle}deg)`};
  transition: transform .6s ease;
`

export const StepsMobileDropdownContentWrapperStyled = styled.div<{ $open: Boolean }>`
  max-height: ${({ $open }) => $open ? 'max-content' : '0'};
  clip-path: ${({ $open }) => $open ? 'inset(0 0 0 0);' : 'inset(0 0 100% 0);'};
  padding-block: ${({ $open }) => $open ? '12px' : '0px'};
  margin-top: ${({ $open }) => $open ? '8px' : '0px'};
  transition: height .6s ease, clip-path .6s ease, padding .6s ease, margin-top .6s ease;
  border-top: 1px inset rgb(var(--main-orange));
  padding-inline: 12px;
`
