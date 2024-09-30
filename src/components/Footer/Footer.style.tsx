import styled from "styled-components"

export const FooterWrapperStyled = styled.footer`
  display: flex;
  flex-direction: column;
  margin-top: auto;

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
