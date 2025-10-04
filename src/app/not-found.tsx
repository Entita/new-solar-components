'use client'

import Link from 'next/link'
import styled from 'styled-components'

export const ErrorWrapperStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: calc(100vh - (15vh + 60px) - 175px - 2.5vh - 25vh);
  row-gap: 6px;

  .page-initial-animation {
    row-gap: unset;
  }

  a, button {
    padding: 4px 6px;
    border: 1px solid rgb(var(--foreground));
    border-radius: 4px;
    transition: opacity .2s ease;

    &:hover {
      opacity: .8;
    }
  }
`

export default function NotFound() {
  return (
    <ErrorWrapperStyled>
      <h2>Stránka nebyla nalezena</h2>
      <p>Nepodařilo se najít požadovaný prostředek</p>
      <Link href="/">Vrátit se do menu</Link>
    </ErrorWrapperStyled>
  )
}