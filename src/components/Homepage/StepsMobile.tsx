import React from 'react'
import { allSteps } from './StepsSection'
import { StepsMobileWrapperStyled } from './StepsMobile.style'
import Dropdown from './Dropdown'
import Link from 'next/link'

export default function StepsMobile() {
  const [step, setStep] = React.useState<number>(0)

  const changeStepToNext = () => {
    setStep((prev: number) => prev >= allSteps.length - 1 ? 0 : prev + 1)
  }

  const changeStepTo = (newStep: number) => {
    setStep((prev: number) => prev === newStep ? -1 : newStep)
  }

  React.useEffect(() => {
    const interval = setInterval(() => changeStepToNext(), 3500)

    return () => clearInterval(interval)
  }, [step])

  return (
    <StepsMobileWrapperStyled>
      {allSteps.map((currStep, index) => (
        <Dropdown key={index} step={currStep} open={step === index} changeStepTo={changeStepTo} index={index} />
      ))}
      <Link href='/produkty'>Chci poptat produkty</Link>
    </StepsMobileWrapperStyled>
  )
}
