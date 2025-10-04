import { Accordion } from '@mantine/core';
import StepLabel from './StepLabel';
import { Field, FormikErrors, useFormikContext } from 'formik';
import { BasketDeliveryStep, DeliveryOption, Step } from '@/types/Basket';
import styled from 'styled-components';
import * as Yup from 'yup';
import { FieldErrorStyled } from './AddressStep';
import { useCallback, useEffect } from 'react';

type DeliveryStepProps = {
  changeStep: (step: Step) => void;
  stepRef: React.RefObject<HTMLDivElement>;
};

export const deliveryInitialValues = { delivery: '' };

export const deliveryValidationSchema = Yup.object().shape({
  delivery: Yup.string()
    .oneOf(
      [DeliveryOption.DELIVERY, DeliveryOption.PICKUP],
      'Neplatná možnost doručení'
    )
    .required('Toto pole je povinné'),
});

export const isDeliveryStepValid = (values: BasketDeliveryStep, errors: FormikErrors<BasketDeliveryStep>) => !!values.delivery && !errors.delivery;

export default function DeliveryStep({ changeStep, stepRef }: DeliveryStepProps) {
  const { values, errors, touched, setFieldValue, submitCount } = useFormikContext<BasketDeliveryStep>();

  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const value = e.target.value;
      if (value === DeliveryOption.DELIVERY) {
        setFieldValue('zip', '');
        setFieldValue('city', '');
        setFieldValue('street', '');
        setFieldValue('houseNumber', '');
      }
      if (value === DeliveryOption.PICKUP) {
        setFieldValue('sameBillingAddress', true);
        setFieldValue('billingFirstName', '');
        setFieldValue('billingLastName', '');
        setFieldValue('billingPhone', '');
        setFieldValue('billingZip', '');
        setFieldValue('billingCity', '');
        setFieldValue('billingStreet', '');
        setFieldValue('billingHouseNumber', '');
      }
      if (
        value === DeliveryOption.DELIVERY ||
        value === DeliveryOption.PICKUP
      ) {
        changeStep('address');
      }
    },
    [changeStep]
  );

  useEffect(() => {
    if (!isDeliveryStepValid(values, errors)) {
      changeStep('delivery');
    }
  }, [submitCount])

  return (
    <Accordion.Item value="delivery" key="delivery" my="md" bdrs="md" ref={stepRef} bd={submitCount === 0 || isDeliveryStepValid(values, errors) ? '1px solid var(--item-border-color)' : '1px solid var(--main-red)'}>
      <Accordion.Control aria-label="Delivery">
        <StepLabel label="1. Možnost doručení" description={values.delivery ? [values.delivery] : ["Vyberte si způsob doručení"]} />
      </Accordion.Control>
      <Accordion.Panel key={errors.delivery}>
          <RadioGroupStyled role="group" aria-labelledby="my-radio-group" onChange={handleChange}>
            <label>
              <Field type="radio" name="delivery" value={DeliveryOption.DELIVERY} />
              Doručení na adresu
            </label>
            <label>
              <Field type="radio" name="delivery" value={DeliveryOption.PICKUP} />
              Vyzvednutí na skladě
            </label>
          </RadioGroupStyled>
          {errors.delivery && touched.delivery ? (
            <FieldErrorStyled>{errors.delivery}</FieldErrorStyled>
          ) : null}
      </Accordion.Panel>
    </Accordion.Item>
  );
}

const RadioGroupStyled = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 10px;

  label {
    display: flex;
    align-items: center;
  }

  label input {
    margin-right: 10px;
    accent-color: rgb(var(--foreground));
    width: 20px;
    height: 20px;
  }
`
