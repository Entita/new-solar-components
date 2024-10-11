import React from 'react'
import { MapFormFieldWrapperStyled, MapFormNameFieldWrapperStyled, MapFormSendWrapperStyled, MapFormWrapperStyled } from './MapForm.style'

export default function MapForm({ inquiry = false }: { inquiry?: Boolean }) {
  const nameRef = React.useRef<HTMLInputElement>(null!)
  const surnameRef = React.useRef<HTMLInputElement>(null!)
  const emailRef = React.useRef<HTMLInputElement>(null!)
  const phoneRef = React.useRef<HTMLInputElement>(null!)
  const textRef = React.useRef<HTMLTextAreaElement>(null!)

  return (
    <MapFormWrapperStyled>
      {inquiry && <h2>Formulář k poptávce</h2>}
      <MapFormNameFieldWrapperStyled>
        <MapFormFieldWrapperStyled>
          <span>Jméno<i>*</i></span>
          <input ref={nameRef} placeholder='Jméno' />
        </MapFormFieldWrapperStyled>
        <MapFormFieldWrapperStyled>
          <span>Příjmení<i>*</i></span>
          <input ref={surnameRef} placeholder='Příjmení' />
        </MapFormFieldWrapperStyled>
      </MapFormNameFieldWrapperStyled>
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
        <button>{inquiry ? 'Odeslat nezávaznou poptávku' : 'Odeslat'}</button>
      </MapFormSendWrapperStyled>
    </MapFormWrapperStyled>
  )
}
