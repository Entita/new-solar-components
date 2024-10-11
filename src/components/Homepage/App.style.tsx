import { ErrorWrapperStyled } from "@/app/produkty/not-found"
import styled from "styled-components"

export const AppWrapperStyled = styled.main`
  display: flex;
  flex-direction: column;
  row-gap: 25vh;

  &:has(${ErrorWrapperStyled}) {
    row-gap: unset;
  }
`
