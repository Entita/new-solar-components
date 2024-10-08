import styled from "styled-components"

export const InquiryProductWrapperStyled = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  border-bottom: 1px solid rgba(var(--foreground), .5);
  padding-bottom: 16px;
  row-gap: 4px;

  & > div {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
  }

  & > div:first-child {
    a {
      background-color: transparent;
      height: max-content;
      user-select: none;
    }

    span {
      font-weight: 700;
      font-size: 18px;
    }

    div {
      cursor: pointer;
    }
  }
`

export const InquiryProductPriceWrapperStyled = styled.div`
  display: flex;
  column-gap: 8px;

  button:first-child {
    padding-bottom: 2px;
  }

  button {
    background-color: transparent;
    border: 2px solid rgb(var(--foreground));
    font-weight: 500;
    font-size: 18px;
    border-radius: 4px;
    width: 28px;
    height: 28px;
    cursor: pointer;
  }

  input {
    background-color: rgb(var(--foreground));
    color: rgb(var(--background));
    border-radius: 4px;
    border: unset;
    height: 27px;
    width: 48px;
    text-align: center;
    font-size: 18px;
    outline-color: rgb(var(--main-orange));
  }
`
