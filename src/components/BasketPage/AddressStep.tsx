import { Accordion } from '@mantine/core';
import StepLabel from './StepLabel';
import { Field, FormikErrors, useFormikContext } from 'formik';
import { BasketAddressStep, BasketDeliveryStep, DeliveryOption, Step } from '@/types/Basket';
import styled from 'styled-components';
import { FancyField, formatZip } from './Field';
import * as Yup from 'yup';
import { useEffect } from 'react';
import { isDeliveryStepValid } from './DeliveryStep';

const warehouseAddress = {
  zip: 53401,
  city: 'Holice v Čechách',
  street: 'Staroholická',
  houseNumber: 484,
}

export const addressInitialValues = {
  firstName: '',
  lastName: '',
  phone: '',
  zip: '',
  city: '',
  street: '',
  houseNumber: '',
  sameBillingAddress: true,
  billingFirstName: '',
  billingLastName: '',
  billingPhone: '',
  billingZip: '',
  billingCity: '',
  billingStreet: '',
  billingHouseNumber: '',
}

export const addressValidationSchema = Yup.object().shape({
  firstName: Yup.string()
    .min(2, 'Příliš krátké!')
    .max(50, 'Příliš dlouhé!')
    .required('Toto pole je povinné'),
  lastName: Yup.string()
    .min(2, 'Příliš krátké!')
    .max(50, 'Příliš dlouhé!')
    .required('Toto pole je povinné'),
  phone: Yup.number()
    .typeError('Musí být číslo')
    .required('Toto pole je povinné')
    .min(100000000, 'Musí mít 9 číslic')
    .max(999999999, 'Musí mít 9 číslic'),
  zip: Yup.number()
    .typeError('Musí být číslo')
    .required('Toto pole je povinné')
    .min(10000, 'Musí mít 5 číslic')
    .max(99999, 'Musí mít 5 číslic'),
  city: Yup.string()
    .min(2, 'Příliš krátké!')
    .max(50, 'Příliš dlouhé!')
    .required('Toto pole je povinné'),
  street: Yup.string()
    .min(2, 'Příliš krátké!')
    .max(100, 'Příliš dlouhé!')
    .required('Toto pole je povinné'),
  houseNumber: Yup.number()
    .typeError('Musí být číslo')
    .required('Toto pole je povinné'),
  sameBillingAddress: Yup.boolean(),
  billingFirstName: Yup.string().when('sameBillingAddress', {
    is: false,
    then: (schema) =>
      schema
        .min(2, 'Příliš krátké!')
        .max(50, 'Příliš dlouhé!')
        .required('Toto pole je povinné'),
  }),
  billingLastName: Yup.string().when('sameBillingAddress', {
    is: false,
    then: (schema) =>
      schema
        .min(2, 'Příliš krátké!')
        .max(50, 'Příliš dlouhé!')
        .required('Toto pole je povinné'),
  }),
  billingPhone: Yup.number().when('sameBillingAddress', {
    is: false,
    then: (schema) =>
      schema
        .typeError('Musí být číslo')
        .required('Toto pole je povinné')
        .min(100000000, 'Musí mít 9 číslic')
        .max(999999999, 'Musí mít 9 číslic'),
  }),
  billingZip: Yup.number().when('sameBillingAddress', {
    is: false,
    then: (schema) =>
      schema
        .typeError('Musí být číslo')
        .required('Toto pole je povinné')
        .min(10000, 'Musí mít 5 číslic')
        .max(99999, 'Musí mít 5 číslic'),
  }),
  billingCity: Yup.string().when('sameBillingAddress', {
    is: false,
    then: (schema) =>
      schema
        .min(2, 'Příliš krátké!')
        .max(50, 'Příliš dlouhé!')
        .required('Toto pole je povinné'),
  }),
  billingStreet: Yup.string().when('sameBillingAddress', {
    is: false,
    then: (schema) =>
      schema
        .min(2, 'Příliš krátké!')
        .max(100, 'Příliš dlouhé!')
        .required('Toto pole je povinné'),
  }),
  billingHouseNumber: Yup.number().when('sameBillingAddress', {
    is: false,
    then: (schema) =>
      schema
        .typeError('Musí být číslo')
        .required('Toto pole je povinné'),
  }),
});

const isNoBillingStepValid = (values: BasketAddressStep, errors: FormikErrors<BasketAddressStep>) =>
  values.firstName &&
  values.lastName &&
  values.phone &&
  values.zip &&
  values.city &&
  values.street &&
  values.houseNumber &&
  !errors.firstName &&
  !errors.lastName &&
  !errors.phone &&
  !errors.zip &&
  !errors.city &&
  !errors.street &&
  !errors.houseNumber;

const isBillingStepValid = (values: BasketAddressStep, errors: FormikErrors<BasketAddressStep>) =>
  (values.sameBillingAddress !== false) ||
  (
    values.billingFirstName &&
    values.billingLastName &&
    values.billingPhone &&
    values.billingZip &&
    values.billingCity &&
    values.billingStreet &&
    values.billingHouseNumber &&
    !errors.billingFirstName &&
    !errors.billingLastName &&
    !errors.billingPhone &&
    !errors.billingZip &&
    !errors.billingCity &&
    !errors.billingStreet &&
    !errors.billingHouseNumber
  );

export const isAddressStepValid = (values: BasketAddressStep, errors: FormikErrors<BasketAddressStep>) =>
  !!(isNoBillingStepValid(values, errors) && isBillingStepValid(values, errors));

type AddressStepProps = {
  changeStep: (step: Step) => void;
  stepRef: React.RefObject<HTMLDivElement>;
};

export default function AddressStep({ changeStep, stepRef }: AddressStepProps) {
  const { values, errors, touched, setFieldValue, validateField, submitCount } = useFormikContext<BasketAddressStep & BasketDeliveryStep>();
  const isDisabled = !values.delivery;

  useEffect(() => {
    if (values.delivery === DeliveryOption.PICKUP) {
      setFieldValue('zip', warehouseAddress.zip, true);
      setFieldValue('city', warehouseAddress.city, true);
      setFieldValue('street', warehouseAddress.street, true);
      setFieldValue('houseNumber', warehouseAddress.houseNumber, true);
    }
  }, [values.delivery]);

  useEffect(() => {
    if (values.delivery === DeliveryOption.PICKUP) {
      validateField('zip');
      validateField('city');
      validateField('street');
      validateField('houseNumber');
    }
  }, [values.zip, values.city, values.street, values.houseNumber]);

  useEffect(() => {
    if (isDeliveryStepValid(values, errors) && !isAddressStepValid(values, errors)) {
      changeStep('address');
    }
  }, [submitCount])

  return (
    <Accordion.Item value="address" key="address" my="md" bdrs="md" ref={stepRef} bd={submitCount === 0 || !isDeliveryStepValid(values, errors) || isAddressStepValid(values, errors) ? '1px solid var(--item-border-color)' : '1px solid var(--main-red)'}>
      <Accordion.Control aria-label="Address" disabled={isDisabled}>
        <StepLabel label="2. Doručovací a fakturační adresa" description={[
          `${values.firstName} ${values.lastName}`,
          `${values.street} ${values.houseNumber}`,
          `${formatZip(values.zip)} ${values.city}`,
          ...(!values.sameBillingAddress
            ? [
                (
                  !values.billingFirstName &&
                  !values.billingLastName &&
                  !values.billingStreet &&
                  !values.billingHouseNumber &&
                  !values.billingZip &&
                  !values.billingCity
                ) ? '' : '‎',
                `${values.billingFirstName} ${values.billingLastName}`,
                `${values.billingStreet} ${values.billingHouseNumber}`,
                `${formatZip(values.billingZip)} ${values.billingCity}`,
              ]
            : []),
        ]} />
      </Accordion.Control>
      <Accordion.Panel>
            <FormWrapperStyled>
              <h3>Doručovací adresa</h3>
              <FieldStyled>
                <FancyField value={values.firstName} name="firstName" label="Jméno" autoComplete="given-name" required>
                  {errors.firstName && touched.firstName ? (
                    <FieldErrorStyled>{errors.firstName}</FieldErrorStyled>
                  ) : null}
                </FancyField>
                <FancyField value={values.lastName} name="lastName" label="Příjmení" autoComplete="family-name" required>
                  {errors.lastName && touched.lastName ? (
                    <FieldErrorStyled>{errors.lastName}</FieldErrorStyled>
                  ) : null}
                </FancyField>
              </FieldStyled>
              <FieldStyled>
                <FancyField value={values.zip} name="zip" label="PSČ" autoComplete="postal-code" readOnly={values.delivery !== DeliveryOption.DELIVERY} maxLength={6} required formatAs='zip'>
                  {errors.zip && touched.zip ? (
                    <FieldErrorStyled>{errors.zip}</FieldErrorStyled>
                  ) : null}
                </FancyField>
                <FancyField value={values.city} name="city" label="Město" autoComplete="address-level2" readOnly={values.delivery !== DeliveryOption.DELIVERY} required>
                  {errors.city && touched.city ? (
                    <FieldErrorStyled>{errors.city}</FieldErrorStyled>
                  ) : null}
                </FancyField>
              </FieldStyled>
              <FieldStyled>
                <FancyField value={values.street} name="street" label="Ulice" autoComplete="address-line1" readOnly={values.delivery !== DeliveryOption.DELIVERY} required>
                  {errors.street && touched.street ? (
                    <FieldErrorStyled>{errors.street}</FieldErrorStyled>
                  ) : null}
                </FancyField>
                <FancyField value={values.houseNumber} name="houseNumber" label="Č. p." autoComplete="address-line2" readOnly={values.delivery !== DeliveryOption.DELIVERY} required>
                  {errors.houseNumber && touched.houseNumber ? (
                    <FieldErrorStyled>{errors.houseNumber}</FieldErrorStyled>
                  ) : null}
                </FancyField>
              </FieldStyled>
              <FancyField value={values.phone} name="phone" label="Telefonní číslo" autoComplete="tel" required maxLength={11} formatAs='phone'>
                {errors.phone && touched.phone ? (
                  <FieldErrorStyled>{errors.phone}</FieldErrorStyled>
                ) : null}
              </FancyField>
              <CheckboxFieldStyled $readOnly={values.delivery !== DeliveryOption.DELIVERY}>
                <Field type="checkbox" name="sameBillingAddress" checked={values.sameBillingAddress} onChange={() => values.delivery === DeliveryOption.DELIVERY && setFieldValue('sameBillingAddress', !values.sameBillingAddress)} />
                Fakturační a doručovací adresa jsou shodné
              </CheckboxFieldStyled>
              {!values.sameBillingAddress && (
                <>
                  <h3>Fakturační adresa</h3>
                  <FieldStyled>
                    <FancyField value={values.billingFirstName} name="billingFirstName" label="Jméno" autoComplete="given-name" required>
                      {errors.billingFirstName && touched.billingFirstName ? (
                        <FieldErrorStyled>{errors.billingFirstName}</FieldErrorStyled>
                      ) : null}
                    </FancyField>
                    <FancyField value={values.billingLastName} name="billingLastName" label="Příjmení" autoComplete="family-name" required>
                      {errors.billingLastName && touched.billingLastName ? (
                        <FieldErrorStyled>{errors.billingLastName}</FieldErrorStyled>
                      ) : null}
                    </FancyField>
                  </FieldStyled>
                  <FieldStyled>
                    <FancyField value={values.billingZip} name="billingZip" label="PSČ" autoComplete="postal-code" readOnly={values.delivery !== DeliveryOption.DELIVERY} maxLength={6} required formatAs='zip'>
                      {errors.billingZip && touched.billingZip ? (
                        <FieldErrorStyled>{errors.billingZip}</FieldErrorStyled>
                      ) : null}
                    </FancyField>
                    <FancyField value={values.billingCity} name="billingCity" label="Město" autoComplete="address-level2" readOnly={values.delivery !== DeliveryOption.DELIVERY} required>
                      {errors.billingCity && touched.billingCity ? (
                        <FieldErrorStyled>{errors.billingCity}</FieldErrorStyled>
                      ) : null}
                    </FancyField>
                  </FieldStyled>
                  <FieldStyled>
                    <FancyField value={values.billingStreet} name="billingStreet" label="Ulice" autoComplete="address-line1" readOnly={values.delivery !== DeliveryOption.DELIVERY} required>
                      {errors.billingStreet && touched.billingStreet ? (
                        <FieldErrorStyled>{errors.billingStreet}</FieldErrorStyled>
                      ) : null}
                    </FancyField>
                    <FancyField value={values.billingHouseNumber} name="billingHouseNumber" label="Č. p." autoComplete="address-line2" readOnly={values.delivery !== DeliveryOption.DELIVERY} required>
                      {errors.billingHouseNumber && touched.billingHouseNumber ? (
                        <FieldErrorStyled>{errors.billingHouseNumber}</FieldErrorStyled>
                      ) : null}
                    </FancyField>
                  </FieldStyled>
                  <FancyField value={values.billingPhone} name="billingPhone" label="Telefonní číslo" autoComplete="tel" required maxLength={11} formatAs='phone'>
                    {errors.billingPhone && touched.billingPhone ? (
                      <FieldErrorStyled>{errors.billingPhone}</FieldErrorStyled>
                    ) : null}
                  </FancyField>
                </>
              )}
            </FormWrapperStyled>
      </Accordion.Panel>
    </Accordion.Item>
  );
}

const FieldStyled = styled.div`
  display: flex;
  justify-content: space-between;
  column-gap: 16px;

  & > label {
    width: calc(50% - 8px);
  }

  @media (max-width: 800px) {
    flex-direction: column;
    row-gap: 16px;

    & > label {
      width: 100%!important;
    }
  }
`

export const CheckboxFieldStyled = styled.label<{ $readOnly?: boolean }>`
  display: flex;
  align-items: center;
  column-gap: 8px;
  cursor: pointer;
  width: max-content;
  max-width: 100%;
  filter: contrast(${({ $readOnly }) => $readOnly ? 0.5 : 1});

  input[type="checkbox"] {
    width: 16px;
    height: 16px;
    accent-color: rgb(var(--foreground));
    cursor: pointer;
  }
`

const FormWrapperStyled = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 16px;

  ${FieldStyled}:nth-child(2) {
    label:first-child {
      width: 25%;
    }
    label:last-child {
      width: calc(75% - 16px);
    }
  }

  ${FieldStyled}:nth-child(3) {
    label:first-child {
      width: calc(70% - 16px);
    }
    label:last-child {
      width: 30%;
    }
  }
`

export const FieldErrorStyled = styled.span`
  color: var(--main-red);
  font-size: 14px;
`
