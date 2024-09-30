import React from 'react'
import { MapFormFieldWrapperStyled, MapFormSendWrapperStyled, MapFormWrapperStyled } from './MapForm.style'

export default function MapForm() {
  const nameRef = React.useRef<HTMLInputElement | null>(null)
  const surnameRef = React.useRef<HTMLInputElement | null>(null)
  const emailRef = React.useRef<HTMLInputElement | null>(null)
  const phoneRef = React.useRef<HTMLInputElement | null>(null)
  const textRef = React.useRef<HTMLTextAreaElement | null>(null)

  return (
    <MapFormWrapperStyled>
      <div>
        <MapFormFieldWrapperStyled>
          <span>Jméno<i>*</i></span>
          <input ref={nameRef} placeholder='Jméno' />
        </MapFormFieldWrapperStyled>
        <MapFormFieldWrapperStyled>
          <span>Příjmení<i>*</i></span>
          <input ref={surnameRef} placeholder='Příjmení' />
        </MapFormFieldWrapperStyled>
      </div>
      <MapFormFieldWrapperStyled>
        <span>Email<i>*</i></span>
        <input ref={emailRef} placeholder='vase@spolecnost.cz' />
      </MapFormFieldWrapperStyled>
      <MapFormFieldWrapperStyled>
        <span>Telefonní číslo<i>*</i></span>
        <input ref={phoneRef} placeholder='+420 732 433 877' />
      </MapFormFieldWrapperStyled>
      <MapFormFieldWrapperStyled>
        <span>Zpráva<i>*</i></span>
        <textarea ref={textRef} placeholder='Prostor pro váš dotaz ...'  />
      </MapFormFieldWrapperStyled>
      <MapFormSendWrapperStyled>
        <div>
          <input id='agreement' type='checkbox' />
          <label htmlFor='agreement'>Odesláním tohoto  formuláře <u>souhlasím s podmínkami</u> a tím, aby mi firma Solar Components odpověděla na dotaz.</label>
        </div>
        <button>Odeslat</button>
      </MapFormSendWrapperStyled>
    </MapFormWrapperStyled>
  )
}
