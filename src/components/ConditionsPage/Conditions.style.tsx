import styled from "styled-components"

export const ConditionsWrapperStyled = styled.div`
  a {
    text-decoration: underline;
  }

  & > *:not(h1) {
    padding-left: 30px;
  }

  ul {
    padding-inline-start: 60px;
  }

  h2 {
    margin-top: 2rem;
  }

  h3 {
    margin-block: 2rem 8px;
  }

  div {
    display: flex;
    flex-direction: column;
    padding-left: 60px;
  }
`
