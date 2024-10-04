import React from 'react'
import { ProductsStepNumberWrapperStyled, ProductsStepsWrapperStyled, ProductsTitleWrapperStyled } from './ProductsTitle.style'

export default function ProductsTitle() {
  return (
    <ProductsTitleWrapperStyled>
      <div>
        <h1>Vyberte, poptejte a nechte si doručit.</h1>
        <p>Vyberte si z našich certifikovaných produktů z nerezové oceli a hliníku, které splňují všechny normy, vydrží léta a my vám je doručíme na míru.</p>
      </div>
      <ProductsStepsWrapperStyled>
        <div>
          <ProductsStepNumberWrapperStyled>1</ProductsStepNumberWrapperStyled>
          <span>Prohlédněte si naše produkty.</span>
        </div>
        <div>
          <ProductsStepNumberWrapperStyled>2</ProductsStepNumberWrapperStyled>
          <span>Vyberte variantu a množství dle dostupnosti.</span>
        </div>
        <div>
          <ProductsStepNumberWrapperStyled>3</ProductsStepNumberWrapperStyled>
          <span>Odešlete nám poptávku přímo ze stránek.</span>
        </div>
        <div>
          <ProductsStepNumberWrapperStyled>4</ProductsStepNumberWrapperStyled>
          <span>Zjistíme aktuální ceny a připravíme vám nejlepší nabídku.</span>
        </div>
        <div>
          <ProductsStepNumberWrapperStyled>5</ProductsStepNumberWrapperStyled>
          <span>Pokud se vám nabídka líbí, doručíme ji až k vám.</span>
        </div>
      </ProductsStepsWrapperStyled>
    </ProductsTitleWrapperStyled>
  )
}
