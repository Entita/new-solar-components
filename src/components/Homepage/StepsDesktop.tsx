import React from 'react'
import { StepsDescriptionWrapperStyled, StepsSectionWrapperStyled, StepsTitleStyled, StepsTitleWrapperStyled } from './StepsDesktop.style'
import { allSteps } from './StepsSection'
import Link from 'next/link'

export default function StepsDesktop() {
  const [step, setStep] = React.useState<number>(0)
  const [lineCoords, setLineCoords] = React.useState<any>({})
  const containerRef = React.useRef<HTMLDivElement>(null!)
  const descriptionRef = React.useRef<HTMLParagraphElement>(null!)
  const stepsRef = React.useRef<any[]>([])

  function createLine() {
    const descriptionEl = descriptionRef.current
    const container = containerRef.current
    if (!stepsRef.current) return

    const stepEl = stepsRef.current[step]
    const stepElBounds = stepEl.getBoundingClientRect()
    const descriptionBounds = descriptionEl.getBoundingClientRect()
    const containerBounds = container.getBoundingClientRect()

    const stepPoint = {
      x: stepElBounds.x + stepElBounds.width - containerBounds.x,
      y: stepElBounds.y + stepElBounds.height - containerBounds.y,
    }
    const descriptionPoint = {
      x: descriptionBounds.x + descriptionBounds.width / 2 - containerBounds.x,
      y: descriptionBounds.y + descriptionBounds.height / 2 - containerBounds.y,
    }

    setLineCoords({
      leftX: stepPoint.x - 1,
      leftY: stepPoint.y - 2,
      rightX: descriptionPoint.x,
      rightY: descriptionPoint.y,
    })
  }

  const changeStepToNext = React.useCallback(() => {
    setStep((prev: number) => prev >= allSteps.length - 1 ? 0 : prev + 1)
  }, [allSteps, step])

  React.useEffect(() => {
    const interval = setInterval(() => changeStepToNext(), 5000)

    return () => clearInterval(interval)
  }, [])

  React.useEffect(() => {
    createLine()
    window.addEventListener('resize', createLine)

    return () => window.removeEventListener('resize', createLine)
  }, [step, containerRef, stepsRef, descriptionRef])

  return (
    <StepsSectionWrapperStyled ref={containerRef}>
      <svg>
        <line x1={lineCoords.leftX} y1={lineCoords.leftY} x2={lineCoords.rightX} y2={lineCoords.rightY} style={{ stroke: 'rgb(var(--main-yellow))', strokeWidth: 2 }} />
      </svg>
      <StepsTitleWrapperStyled>
        {allSteps.map((thisStep: { title: string, description: string }, index: number) => (
          <StepsTitleStyled
            key={index}
            ref={(el: any) => stepsRef.current[index] = el}
            onClick={() => setStep(index)} $selected={step === index}>
            {thisStep.title}
          </StepsTitleStyled>
        ))}
      </StepsTitleWrapperStyled>
      <StepsDescriptionWrapperStyled>
        <p ref={descriptionRef}>
          {allSteps[step].description}
          <Link href='/produkty'>Chci poptat produkty</Link>
        </p>
      </StepsDescriptionWrapperStyled>
    </StepsSectionWrapperStyled>
  )
}
