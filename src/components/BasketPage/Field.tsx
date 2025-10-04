import { Field, useFormikContext } from "formik";
import styled from "styled-components";

interface FancyFieldProps {
  name: string;
  label: string;
  value: string | number | undefined;
  required?: boolean;
  readOnly?: boolean;
  autoComplete?: string;
  maxLength?: number;
  formatAs?: 'phone' | 'zip' | undefined;
  children?: React.ReactNode;
}

export function formatPhone(value: string | number | undefined) {
  const str = String(value ?? '');
  return str.replace(/(\d{3})(?=\d)/g, '$1 ').trim();
}

export function formatZip(value: string | number | undefined) {
  const str = String(value ?? '').replace(/\s/g, '');
  return str.replace(/^(\d{3})(\d{0,2})$/, '$1 $2').trim();
}

export function FancyField({ name, label, value, autoComplete, formatAs, readOnly = false, required = false, children, maxLength }: FancyFieldProps) {
  const { setFieldValue } = useFormikContext();

  return (
    <FieldLabelStyled $filled={typeof value === "string" ? value.length > 0 : value !== undefined && value !== null} $readOnly={readOnly}>
      <Field
        name={name}
        autoComplete={autoComplete}
        maxLength={maxLength}
        readOnly={readOnly}
        value={formatAs === 'phone' ? formatPhone(value) : formatAs === 'zip' ? formatZip(value) : value}
        onChange={(e: { target: { value: string; }; }) => {
          if (formatAs === 'phone') {
            const raw = e.target.value.replace(/\s/g, '');
            setFieldValue(name, raw);
          } else if (formatAs === 'zip') {
            const raw = e.target.value.replace(/\s/g, '');
            setFieldValue(name, raw);
          } else {
            setFieldValue(name, e.target.value);
          }
        }}
      />
      <span>{label}{required && " *"}</span>
      {children}
    </FieldLabelStyled>
  )
}

const FieldLabelStyled = styled.label<{ $filled: boolean; $readOnly: boolean }>`
  display: flex;
  flex-direction: column;
  position: relative;
  filter: contrast(${({ $readOnly }) => $readOnly ? 0.5 : 1});
  min-width: 90px;

  span:nth-child(2) {
    position: absolute;
    top: ${({ $filled }) => $filled ? '4px' : '14px'};
    font-size: ${({ $filled }) => $filled ? '12px' : '16px'};
    left: 14px;
    color: rgb(var(--foreground), .8);
    user-select: none;
    pointer-events: none;
    transition: all .2s ease;
    white-space: nowrap;
  }

  input {
    padding: 16px 12px 8px 12px;
    border-radius: 8px;
    border-width: 1px;
    border-style: solid;
    cursor: ${({ $readOnly }) => $readOnly ? 'not-allowed' : 'text'};
  }

  &:focus-within span:nth-child(2),
  input:is(:-webkit-autofill, :autofill) + span {
    top: 4px;
    font-size: 12px;
  }
`