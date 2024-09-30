import styled from "styled-components"

export const ContactUsWrapperStyled = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 2rem;

  h1 {
    font-size: clamp(32px, 3.2vw, 48px);
  }

  p {
    font-size: clamp(14px, 1.1vw, 18px);
    margin-bottom: 1rem;
  }

  span {
    font-weight: 700;
  }

  u {
    padding-left: 8px;
    white-space: normal;
    font-weight: 400;
  }

  & > div {
    display: flex;
    flex-direction: column;
    row-gap: 12px;
  }
`

export const ContactUsRowWrapperStyled = styled.div`
  display: flex;
  column-gap: 6px;

  span {
    white-space: nowrap;
    font-size: 18px;
  }
`


