import styled from "styled-components"

export const MapFormWrapperStyled = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: min(2rem, 2vw);
  background-color: #717171;
  color: var(--white-color);
  height: 100%;
  width: calc(100% - 5vw);
  margin-left: auto;
  border-radius: 24px;
  padding: min(3rem, 3vw) 3rem;
  pointer-events: all;
  overflow: hidden;

  & > div:nth-child(1) {
    display: flex;
    justify-content: space-between;
    column-gap: 3rem;

    & > div {
      width: calc(50% - 1.5rem);
    }
  }

  @media (max-width: 500px) {
    margin-left: unset;
  }
`

export const MapFormFieldWrapperStyled = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 6px;

  span {
    font-size: 16px;
    opacity: .75;
  }

  span > i {
    padding-left: 4px;
    font-style: normal;
    color: rgb(var(--main-yellow));
  }

  input, textarea {
    padding: 14px 8px;
    border-radius: 8px;
    background-color: rgba(var(--background), .5);
    font-size: 16px;
    border: unset;
  }

  textarea {
    resize: none;
    min-height: 200px;
  }
`

export const MapFormSendWrapperStyled = styled.div`
  display: flex;
  align-items: center;
  column-gap: 2rem;

  button {
    padding: 12px 24px;
    border-radius: 4px;
    font-size: 18px;
    font-weight: bold;
    letter-spacing: 1px;
    background-color: rgb(var(--main-orange));
    color: var(--white-color);
    border: unset;
    cursor: pointer;
  }

  input {
    position: relative;
    min-width: 20px;
    height: 20px;
    border-radius: 2px;
    appearance:none;
    outline: 2px solid rgb(var(--main-orange));
    box-shadow: none;
    font-size: 2em;
    transition: box-shadow .2s ease, background-color .2s ease;
  }

  & > div {
    display: flex;
    column-gap: 16px;
  }

  label, input {
    cursor: pointer;
  }

  label {
    color: var(--dark-color);
    user-select: none;

    u {
      color: rgb(var(--main-orange));
    }
  }

  input:checked {
    background-color: rgb(var(--main-orange));
    box-shadow: inset 0px 0px 0px 3px #717171;
  }
`
