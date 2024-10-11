import React from 'react'
import { ImportantDataContentWrapperStyled, ImportantDataRowWrapperStyled, ImportantDataWrapperStyled } from './ImportantData.style'
import CopyComponent from './CopyComponent'

export default function ImportantData() {
  const icoRef = React.useRef<HTMLSpanElement>(null!)
  const dicRef = React.useRef<HTMLSpanElement>(null!)
  const accountRef = React.useRef<HTMLSpanElement>(null!)
  const ibanRef = React.useRef<HTMLSpanElement>(null!)
  const swiftRef = React.useRef<HTMLSpanElement>(null!)

  return (
    <ImportantDataWrapperStyled>
      <div>
        <h3>Identifikační údaje</h3>
        <ImportantDataContentWrapperStyled>
          <ImportantDataRowWrapperStyled>
            <h4>IČO: </h4>
            <span ref={icoRef}>194 13 190</span>
            <CopyComponent passRef={icoRef} />
          </ImportantDataRowWrapperStyled>
          <ImportantDataRowWrapperStyled>
            <h4>DIČ: </h4>
            <span ref={dicRef}>CZ 194 13 190</span>
            <CopyComponent passRef={dicRef} />
          </ImportantDataRowWrapperStyled>
        </ImportantDataContentWrapperStyled>
      </div>

      <div>
        <h3>Bankovní údaje</h3>
        <ImportantDataContentWrapperStyled>
          <ImportantDataRowWrapperStyled>
            <h4>Účet: </h4>
            <span ref={accountRef}>2302583095/2010</span>
            <CopyComponent passRef={accountRef} />
          </ImportantDataRowWrapperStyled>
          <ImportantDataRowWrapperStyled>
            <h4>IBAN:</h4>
            <span ref={ibanRef}>CZ37 2010 0000 0023 0258 3095</span>
            <CopyComponent passRef={ibanRef} />
          </ImportantDataRowWrapperStyled>
          <ImportantDataRowWrapperStyled>
            <h4>SWIFT:</h4>
            <span ref={swiftRef}>FIOBCZPP</span>
            <CopyComponent passRef={swiftRef} />
          </ImportantDataRowWrapperStyled>
        </ImportantDataContentWrapperStyled>
      </div>
    </ImportantDataWrapperStyled>
  )
}
