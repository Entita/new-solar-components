import styled from "styled-components"

export const ProductsTitleWrapperStyled = styled.div`
  display: flex;
  column-gap: max(2rem, 5vw);
  row-gap: 5vh;
  justify-content: center;
  flex-wrap: wrap;

  & > div {
    width: calc(40% - max(1rem, 2.5vw));

    @media (max-width: 820px) {
      width: 100% !important;
    }
  }

  & > div:first-child {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    row-gap: 1rem;
    width: calc(60% - max(1rem, 2.5vw));

    h1 {
      font-size: clamp(54px, 4.4vw, 72px);
    }

    p {
      font-size: clamp(16px, 1.2vw, 18px);
      font-weight: 300;
      max-width: 530px;
    }
  }
`

export const ProductsStepsWrapperStyled = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: min(2vw, 32px);
  min-width: 300px;

  & > div {
    display: flex;
    column-gap: min(1vw, 16px);
    align-items: center;
  }
`

export const ProductsStepNumberWrapperStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  background-color: rgb(var(--foreground));
  color: rgb(var(--background));
  width: 32px;
  height: 32px;
  min-width: 32px;
  min-height: 32px;
  font-size: 18px;
`
