import React from 'react'
import { MapFormFieldWrapperStyled, MapFormNameFieldWrapperStyled, MapFormSendWrapperStyled, MapFormWrapperStyled } from './MapForm.style'
import { ErrorMessage, Field, Form, Formik } from 'formik'
import { FormErrorsState, FormState } from '@/types/Form'
import axios from 'axios'
import Link from 'next/link'
import { useAppSelector } from '@/lib/hooks/hooks'
import { InquiryCartState } from '@/types/InquiryCart'

export default function MapForm({ inquiry = false }: { inquiry?: Boolean }) {
  const inquiryCart = useAppSelector(state => state.inquiryCart) as InquiryCartState

  const sendForm = React.useCallback(async (data: FormState, { setSubmitting }: { setSubmitting: Function }) => {
    await axios.post('/api', { data, subject: inquiry ? 'poptavka' : 'dotaz', products: inquiryCart.products })
      .finally(() => setSubmitting(false))
  }, [])

  const formValidation = React.useCallback((values: FormState) => {
    const errors: FormErrorsState = {}
    if (!values.name) errors.name = '*Povinné'
    else if (!values.surname) errors.surname = '*Povinné'
    else if (!values.email) errors.email = '*Povinné'
    else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) errors.email = 'Nesprávná emailová adresa'
    else if (!values.phone) errors.phone = '*Povinné'
    else if (!values.message) errors.message = '*Povinné'
    else if (!values.agreement) errors.agreement = '*Povinné'
    return errors
  }, [])

  return (
    <MapFormWrapperStyled>
      <Formik
        onSubmit={sendForm}
        validate={formValidation}
        initialValues={{ name: '', surname: '', email: '', phone: '', message: '', agreement: false } as FormState}
      >
        {({ isSubmitting }: { isSubmitting: boolean }) => (
         <Form>
         {inquiry && <h2>Formulář k poptávce</h2>}
         <MapFormNameFieldWrapperStyled>
           <MapFormFieldWrapperStyled>
             <span>Jméno<i>*</i></span>
             <Field name="name" type="text" placeholder='Jméno' />
             <ErrorMessage name="name" component="div" />
           </MapFormFieldWrapperStyled>
           <MapFormFieldWrapperStyled>
             <span>Příjmení<i>*</i></span>
             <Field name="surname" type="text" placeholder='Příjmení' />
             <ErrorMessage name="surname" component="div" />
           </MapFormFieldWrapperStyled>
         </MapFormNameFieldWrapperStyled>
         <MapFormFieldWrapperStyled>
           <span>Email<i>*</i></span>
           <Field name="email" type="email" placeholder='vase@spolecnost.cz' />
           <ErrorMessage name="email" component="div" />
         </MapFormFieldWrapperStyled>
         <MapFormFieldWrapperStyled>
           <span>Telefonní číslo<i>*</i></span>
           <Field name="phone" type="text" placeholder='+420 732 433 877' />
           <ErrorMessage name="phone" component="div" />
         </MapFormFieldWrapperStyled>
         <MapFormFieldWrapperStyled>
           <span>Zpráva<i>*</i></span>
           <Field name="message" component="textarea" placeholder='Prostor pro váš dotaz ...'  />
           <ErrorMessage name="message" component="div" />
         </MapFormFieldWrapperStyled>
         <MapFormSendWrapperStyled>
           <div>
              <div>
              <Field name="agreement" type="checkbox" id='agreement' />
              <ErrorMessage name="agreement" component="div" />
              </div>
             <label htmlFor='agreement'>Odesláním tohoto  formuláře <Link href='podminky' target='_blank'><u>souhlasím s podmínkami</u></Link> a tím, aby mi firma Solar Components odpověděla na dotaz.</label>
           </div>
           <button type='submit' disabled={isSubmitting}>{inquiry ? 'Odeslat nezávaznou poptávku' : 'Odeslat'}</button>
         </MapFormSendWrapperStyled>
       </Form>
       )}
      </Formik>
    </MapFormWrapperStyled>
  )
}
