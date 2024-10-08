import styled from "styled-components"
import { BackgroundLogoStyled } from "./BackgroundLogo.style"

export const LandingSectionWrapperStyled = styled.section`
  position: relative;
  display: flex;
  flex-direction: column;
  row-gap: 1rem;
  max-width: min(700px, 50vw);

  h1 {
    font-size: clamp(52px, 4vw, 78px);
    text-transform: uppercase;
  }

  p {
    font-size: clamp(18px, 1vw, 24px);
  }

  a {
    background-color: rgb(var(--main-yellow));
    color: var(--dark-color);
    border: unset;
    padding: max(.6vw, 8px) max(4vw, 48px);
    font-size: clamp(18px, 1vw, 24px);
    border-radius: 4px;
    font-weight: 700;
    text-transform: uppercase;
    margin-block: 2rem;
    width: fit-content;
  }

  @media (max-width: 920px) {
    max-width: unset;

    ${BackgroundLogoStyled} {
      right: -500px;
    }
  }
`
