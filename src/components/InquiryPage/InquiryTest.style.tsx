import styled from "styled-components"

export const InquiryTextStyled = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 2rem;
  max-width: 40vw;

  h1 {
    font-size: clamp(48px, 4vw, 84px);
  }

  p {
    font-size: clamp(16px, 1.4vw, 21px);
    font-weight: 300;
  }

  @media (max-width: 900px) {
    max-width: 100%;
  }
`
