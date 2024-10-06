import styled from "styled-components"
import { InquiryContentWrapperStyled } from "../Header/Inquiry.style"

export const InquiryProductsWrapperStyled = styled.div`
  ${InquiryContentWrapperStyled} {
    position: relative;
    width: 100%;

    h3 {
      font-size: 21px;
    }

    & > div {
      padding-left: 12px;
    }

    button {
      width: 64px;
      max-width: 7.5vw;
      height: 32px;
    }

    input {
      width: 144px;
      max-width: 15vw;
      height: 32px;
    }
  }
`
