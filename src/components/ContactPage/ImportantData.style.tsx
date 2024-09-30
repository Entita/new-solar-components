import styled from "styled-components"

export const ImportantDataWrapperStyled = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 1rem;
  border: 1px solid rgba(var(--foreground), .3);
  border-radius: 24px;
  padding: 16px 12px;

  h3 {
    position: relative;
    font-weight: 400;
    padding-bottom: 2px;
  }

  h3::before {
    position: absolute;
    content: '';
    bottom: 0;
    left: 0;
    right: 0;
    height: 1px;
    background-color: rgb(var(--foreground));
  }
`

export const ImportantDataContentWrapperStyled = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 1rem;
  margin-block: 1rem;
`

export const ImportantDataRowWrapperStyled = styled.div`
  display: flex;
  align-items: flex-end;
  column-gap: 8px;

  h4 {
    font-size: clamp(18px, 1.4vw, 24px);
    font-weight: 700;
  }

  span {
    font-size: clamp(14px, 1.2vw, 21px);
  }

  div {
    margin-left: auto;
    cursor: pointer;
  }
`
