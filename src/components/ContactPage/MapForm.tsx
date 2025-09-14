import React, { useState } from 'react'
import { MapFormFieldWrapperStyled, MapFormNameFieldWrapperStyled, MapFormSendWrapperStyled, MapFormWrapperStyled } from './MapForm.style'
import { ErrorMessage, Field, Form, Formik } from 'formik'
import { FormErrorsState, FormState } from '@/types/Form'
import axios from 'axios'
import Link from 'next/link'
import { useAppSelector } from '@/lib/hooks/hooks'
import { InquiryCartState, InquiryProductState } from '@/types/InquiryCart'

const getTotalPriceFromProducts = (products: InquiryProductState[]) => {
  return products.reduce((total, product) => {
    if (!product.variants) return total;
    const variantsTotal = product.variants.reduce(
      (sum: number, variant: any) => sum + (variant.price || 0) * (variant.amount || 0),
      0
    );
    return total + variantsTotal;
  }, 0);
}

export default function MapForm({ inquiry = false }: { inquiry?: Boolean }) {
  const inquiryCart = useAppSelector(state => state.inquiryCart) as InquiryCartState
  const [success, setSuccess] = useState(false)

  const sendForm = React.useCallback(async (data: FormState, { setSubmitting, resetForm }: { setSubmitting: Function, resetForm: Function }) => {
    try {
      const productData = [...inquiryCart.products];
      const totalPrice = getTotalPriceFromProducts(productData);
      await axios.post('/api', { data, subject: inquiry ? 'poptavka' : 'dotaz', products: productData })
      setSuccess(true)
      if (typeof window !== 'undefined') {
        // Facebook Pixel
        const ReactPixel = (await import('react-facebook-pixel')).default;
        ReactPixel.track('Purchase', { ...data, products: productData, total: totalPrice });

        // Google Analytics
        const ReactGA = (await import('react-ga4')).default;
        ReactGA.event({ action: 'submit_form', category: 'Inquiry', value: totalPrice });
      }
      resetForm()
    } finally {
      setSubmitting(false)
    }
  }, [inquiry, inquiryCart.products])

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
        {({ isSubmitting }) => (
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
         {success && (
            <div style={{ color: 'green', marginBottom: 16 }}>Formulář byl úspěšně odeslán.</div>
          )}
       </Form>
       )}
      </Formik>
    </MapFormWrapperStyled>
  )
}
