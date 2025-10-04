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

export const LandingAppWrapperStyled = styled(AppWrapperStyled)`
  padding: calc(15vh + 60px) 10vw 2.5vh 10vw;
  overflow-x: clip;
`
