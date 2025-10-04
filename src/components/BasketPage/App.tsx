'use client'
import React, { useCallback, useEffect, useState } from 'react'
import { trackPageView } from '@/utils/ReactGA'
import MultiStep from './MultiStep'
import styled from 'styled-components'
import { Button } from '@mantine/core'
import Link from 'next/link'
import { Form, Formik } from 'formik';
import * as Yup from 'yup';
import { deliveryInitialValues, deliveryValidationSchema } from './DeliveryStep';
import { addressInitialValues, addressValidationSchema } from './AddressStep';
import EmbeddedStripeCheckout from './EmbeddedStripeCheckout'
import { useDisclosure } from '@mantine/hooks'
import { getPriceFromDelivery } from './SummaryStep'
import { useAppSelector } from '@/lib/hooks/hooks'
import { InquiryCartState } from '@/types/InquiryCart'
import { Customer, DeliveryList } from '@/types/Basket'

const basketValidationSchema = Yup.object().shape({
  ...deliveryValidationSchema.fields,
  ...addressValidationSchema.fields,
});

export default function App() {
  const [opened, { open, close }] = useDisclosure(false);
  const [delivery, setDelivery] = React.useState<DeliveryList | undefined>(undefined);
  const [customer, setCustomer] = React.useState<Customer | undefined>(undefined);
  const [deliveryList, setDeliveryList] = useState([])
  const inquiryCartProducts = useAppSelector(state => state.inquiryCart.products) as InquiryCartState['products']

  const fetchDeliveryList = useCallback(async () => {
    const response = await fetch('/api/delivery-prices');
    const data = await response.json();
    setDeliveryList(data.deliveryList);
  }, []);

  useEffect(() => {
    trackPageView('kosik')
    fetchDeliveryList();
  }, [])

  const submitForm = useCallback((values: any) => {
    const newDelivery = getPriceFromDelivery(values.delivery, deliveryList, inquiryCartProducts);
    const newCustomer = values.sameBillingAddress ? {
      email: values.email,
      name: `${values.firstName} ${values.lastName}`,
      phone: String(values.phone),
      address: {
        line1: `${values.street} ${values.houseNumber}`,
        city: values.city,
        postal_code: String(values.zip),
        country: 'CZ',
      }
    } : {
      email: values.email,
      name: `${values.billingFirstName} ${values.billingLastName}`,
      phone: String(values.billingPhone),
      address: {
        line1: `${values.billingStreet} ${values.billingHouseNumber}`,
        city: values.billingCity,
        postal_code: String(values.billingZip),
        country: 'CZ',
      }
    }
    setDelivery(newDelivery);
    setCustomer(newCustomer)
    open()
  }, [deliveryList, inquiryCartProducts]);

  return (
    <>
      <Formik
        onSubmit={submitForm}
        initialValues={{ ...deliveryInitialValues, ...addressInitialValues }}
        validationSchema={basketValidationSchema}
        >
        <FormStyled>
          <MultiStepWrapper>
            <MultiStep deliveryList={deliveryList} />
          </MultiStepWrapper>
          <PaymentTotalWrapper>
            <p>Platí Všeobecné <Link href='podminky' target='_blank'><u>obchodní podmínky</u></Link> společnosti <b>Solar Components s.r.o.</b>, včetně Práva na odstoupení od smlouvy.</p>
          </PaymentTotalWrapper>
          <StickyFooterStyled>
            <div>
              <p>Platí Všeobecné <Link href='podminky' target='_blank'><u>obchodní podmínky</u></Link> společnosti <b>Solar Components s.r.o.</b>, včetně Práva na odstoupení od smlouvy.</p>
              <Button type="submit" variant="filled" radius="xl" size='md' color='rgb(var(--main-orange))'>OBJEDNAT a zavázat se k platbě</Button>
            </div>
          </StickyFooterStyled>
        </FormStyled>
      </Formik>
      <EmbeddedStripeCheckout customer={customer} delivery={delivery} opened={opened} close={close} />
    </>
  )
}

const FormStyled = styled(Form)`
  display: flex;
  flex-direction: column;
  row-gap: 10vh;
  margin-bottom: -20vh;

  .summary-panel {
    height: auto !important;
  }
`

const PaymentTotalWrapper = styled.div`
  max-width: max(35vw, 700px);
  margin-inline: auto;
  display: none;

  @media (max-width: 800px) {
    display: block;
  }

  & > p {
    font-size: 14px;
  }
`

const MultiStepWrapper = styled.div`
  flex: 1 0 auto;
`

const StickyFooterStyled = styled.div`
  position: sticky;
  bottom: 0;
  width: calc(100vw - 15px);
  margin-left: -10vw;
  border-top: 1px solid rgb(var(--foreground), .35);
  background-color: rgb(var(--background));
  padding: 24px 10vw;
  z-index: 2;

  & > div {
    display: flex;
    justify-content: space-between;
    max-width: max(35vw, 700px);
    margin-inline: auto;

    button {
      min-width: max-content;
      padding: 12px 24px;
      text-shadow: 1px 1px 2px rgba(0, 0, 0, .4);
      transition: filter 0.2s ease;
    }

    button:hover {
      background-color: rgb(var(--main-orange));
      filter: brightness(.75);
    }

    p {
      font-size: 12px;
    }

    @media (max-width: 800px) {
      button {
        width: 100%;
      }

      p {
        display: none;
      }
    }
  }
`