import { ErrorWrapperStyled } from "@/app/produkty/not-found"
import styled from "styled-components"

export const AppWrapperStyled = styled.main`
  display: flex;
  flex-direction: column;
  padding: calc(15vh + 60px) 10vw 2.5vh 10vw;
  row-gap: 25vh;
  min-height: 100vh;

  &:has(${ErrorWrapperStyled}) {
    row-gap: unset;
  }
`
