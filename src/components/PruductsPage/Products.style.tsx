import styled from "styled-components"

export const ProductsWrapperStyled = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  column-gap: 3rem;
  row-gap: 2rem;

  @media (max-width: 1420px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: 950px) {
    grid-template-columns: 1fr;
  }
`
