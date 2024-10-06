import styled from "styled-components"
import { DarkModeToggleWrapperStyled } from "../DarkMode/DarkModeToggle.style"

export const HeaderBackToProductsWrapperStyled = styled.div`
  display: flex;
  align-items: center;
  margin-left: auto;
  column-gap: 12px;

  ${DarkModeToggleWrapperStyled} {
    margin-left: unset;
  }

  a {
    display: flex;
    align-items: center;
    column-gap: 6px;
    text-transform: uppercase;
    border-radius: 8px;
    padding: 4px 32px;
    user-select: none;
    font-size: 18px;
    background-color: rgb(var(--foreground))!important;
    height: auto!important;
    border: unset;
    color: rgb(var(--background));
    cursor: pointer;
  }
`
