'use client'
import DarkModeToggle from '@/components/DarkMode/DarkModeToggle'
import { ErrorWrapperStyled } from './not-found'

export default function GlobalError({ reset }: { reset: Function }) {
  return (
    <html>
      <body>
        <DarkModeToggle />
        <ErrorWrapperStyled>
          <h2>Něco se pokazilo!</h2>
          <button onClick={() => reset()}>Zkus to znovu</button>
        </ErrorWrapperStyled>
      </body>
    </html>
  )
}