import React from 'react'
import { ProductsStepNumberWrapperStyled, ProductsStepsWrapperStyled, ProductsTitleWrapperStyled } from './ProductsTitle.style'
import { allSteps } from '../Homepage/StepsSection'

export default function ProductsTitle() {
  return (
    <ProductsTitleWrapperStyled>
      <div>
        <h1>Vyberte, poptejte a nechte si doručit.</h1>
        <p>Vyberte si z našich certifikovaných produktů z nerezové oceli a hliníku, které splňují všechny normy, vydrží léta a my vám je doručíme na míru.</p>
      </div>
      <ProductsStepsWrapperStyled>
        {allSteps.map((step, stepIndex: number) => (
          <div key={stepIndex}>
            <ProductsStepNumberWrapperStyled>{stepIndex + 1}</ProductsStepNumberWrapperStyled>
            <span>{step.title}</span>
          </div>
        ))}
      </ProductsStepsWrapperStyled>
    </ProductsTitleWrapperStyled>
  )
}
