import styled from "styled-components"

export const FooterWrapperStyled = styled.footer`
  display: flex;
  flex-direction: column;
  margin-top: auto;
  padding: 0 10vw 2.5vh;

  & > div {
    display: flex;
    justify-content: space-between;
    padding-bottom: 8px;
    border-bottom: 1px solid rgba(var(--foreground), .2);
  }

  a {
    font-weight: bold;
  }
`
