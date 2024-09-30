import React from 'react'
import { StepsMobileDropdownArrowStyled, StepsMobileDropdownContentWrapperStyled, StepsMobileDropdownTitleWrapperStyled, StepsMobileDropdownWrapperStyled } from './Dropdown.style'

export default function Dropdown({ step, open, changeStepTo, index }: { step: { title: string, description: string }, open: Boolean, changeStepTo: Function, index: number }) {

  return (
    <StepsMobileDropdownWrapperStyled>
      <StepsMobileDropdownTitleWrapperStyled onClick={() => changeStepTo(index)}>
        {step.title}
        <StepsMobileDropdownArrowStyled $angle={open ? 180 : 0} />
      </StepsMobileDropdownTitleWrapperStyled>
      <StepsMobileDropdownContentWrapperStyled $open={open}>
        {step.description}
      </StepsMobileDropdownContentWrapperStyled>
    </StepsMobileDropdownWrapperStyled>
  )
}
