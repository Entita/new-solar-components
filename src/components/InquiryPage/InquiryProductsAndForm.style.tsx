import styled from "styled-components"

export const InquiryProductsAndFormWrapperStyled = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3rem;

  @media (max-width: 878px) {
    position: relative;
    left: calc(-10vw + 10px);
    width: calc(100vw - 35px);
  }
`
