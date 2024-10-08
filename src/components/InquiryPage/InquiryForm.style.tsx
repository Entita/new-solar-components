import styled from "styled-components"

export const InquiryFormWrapperStyled = styled.div`
  & > div {
    background-color: rgb(var(--background));
    box-shadow: -4px 4px 25px 0px rgba(var(--foreground), 0.25);
    margin-left: unset;
    width: 100%;

    input:not(input[type='checkbox']), textarea {
      background-color: rgba(var(--foreground), .125);
      outline-color: rgb(var(--main-orange));
    }

    input[type='checkbox']:checked {
      box-shadow: inset 0px 0px 0px 3px rgb(var(--background));
    }

    span, label, h2 {
      color: rgb(var(--foreground));
    }

    button {
      color: rgb(var(--background));
      max-width: 350px;
      width: 100%;
      margin-left: auto;
    }

    @media (max-width: 878px) {
      padding: min(3rem, 3vw) min(3rem, 2vw);
    }
  }
`
