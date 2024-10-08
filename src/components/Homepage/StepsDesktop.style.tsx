import styled, { css } from "styled-components"

export const StepsSectionWrapperStyled = styled.section`
  position: relative;
  display: flex;
  column-gap: min(10rem, 5vw);

  & > svg {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
  }
`

export const StepsTitleWrapperStyled = styled.ul`
  display: flex;
  flex-direction: column;
  row-gap: 2rem;
  list-style: none;
  max-width: 40vw;
`

export const StepsTitleStyled = styled.li<{ $selected: Boolean }>`
  position: relative;
  font-size: clamp(36px, 2vw, 48px);
  color: #D2D2D2;
  padding-left: 0;
  padding-right: 32px;
  padding-bottom: 8px;
  transition: padding-left .2s ease, padding-right .2s ease, color .2s ease;
  text-transform: uppercase;
  cursor: pointer;

  &::before {
    position: absolute;
    content: '';
    bottom: 0;
    opacity: 0;
    left: -32px;
    right: 0;
    height: 4px;
    background-color: rgb(var(--main-yellow));
    transition: left .2s ease, opacity .2s ease;
  }

  &::after {
    position: absolute;
    content: '';
    top: calc(50% + -4px);
    left: -32px;
    opacity: 0;
    transform: translateY(-50%);
    height: 14px;
    width: 14px;
    background-color: rgb(var(--foreground));
    border-radius: 50%;
    transition: left .2s ease, opacity .2s ease;
  }

  ${({ $selected }) => $selected && css`
    position: relative;
    color: rgb(var(--foreground));
    padding-left: 32px;
    padding-right: 0;

    &::before {
      left: 0;
      opacity: 1;
    }

    &::after {
      left: 0;
      opacity: 1;
    }
  `}
`

export const StepsDescriptionWrapperStyled = styled.div`
  display: flex;
  flex-direction: column;
  margin-block: auto;
  margin-left: auto;
  background-color: rgb(var(--background));
  transition: background-color .2s ease;
  padding: 12px;
  z-index: 0;

  p {
    position: relative;
    background-color: rgb(var(--foreground));
    color: rgb(var(--background));
    padding: 16px;
    border-radius: 8px;
    max-width: 400px;
    text-align: justify;
    transition: color .2s ease, background-color .2s ease;
  }

  a {
    position: absolute;
    right: 0;
    top: calc(100% + 2rem);
    background-color: rgb(var(--main-yellow));
    color: var(--dark-color);
    border: unset;
    padding: 8px 48px;
    font-size: clamp(16px, .85vw, 21px);
    border-radius: 4px;
    font-weight: 800;
    text-transform: uppercase;
    width: fit-content;
  }
`
