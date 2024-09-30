import styled from "styled-components"

export const StepsMobileWrapperStyled = styled.section`
  display: flex;
  flex-direction: column;
  row-gap: 1rem;

  button {
    margin-top: 10vh;
    background-color: rgb(var(--main-orange));
    color: var(--dark-color);
    border: unset;
    padding: 16px 48px;
    font-size: clamp(16px, .85vw, 21px);
    border-radius: 4px;
    font-weight: 800;
    text-transform: uppercase;
  }
`
