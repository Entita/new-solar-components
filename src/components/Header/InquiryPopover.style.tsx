import styled from 'styled-components'

export const InquiryWrapperStyled = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  margin-left: auto;
  column-gap: 24px;
`

export const HeaderInquiryNumberStyled = styled.span<{ $show: Boolean }>`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  left: ${({ $show }) => $show ? '-10px' : '0'};
  top: ${({ $show }) => $show ? '-10px' : '0'};
  opacity: ${({ $show }) => $show ? 1 : 0};
  width: 20px;
  height: 20px;
  font-size: 14px;
  border-radius: 50%;
  border: 1px solid rgb(var(--main-orange));
  background-color: rgb(var(--main-yellow));
  transition: left .2s ease, top .2s ease, opacity .2s ease;
  color: var(--dark-color);
  z-index: 1;
`

export const PopoverContentWrapperStyled = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 16px;
  min-width: 460px;

  a > button {
    color: var(--dark-color);
    background-color: rgb(var(--main-orange));
    transition: filter .2s ease, color;
  }

  a > button:hover {
    color: var(--dark-color);
    background-color: rgb(var(--main-orange));
    filter: brightness(0.85);
  }

  h3 {
    font-size: 21px;
    letter-spacing: 1px;
    word-spacing: 4px;
    border-bottom: 1px dotted rgb(var(--foreground), .2);
  }
`

export const PopoverProductsWrapperStyled = styled.div`
  display: flex;
  flex-direction: column;
  color: rgb(var(--foreground), .85);
  max-height: 400px;
  overflow-y: auto;
`

export const PopoverTotalWrapperStyled = styled.div`
  display: flex;
  justify-content: space-between;
  border-top: 1px dotted rgb(var(--foreground), .2);
  padding-block: 16px 8px;

  & > h4 {
    font-size: 24px;
  }

  & > div {
    display: flex;
    flex-direction: column;
    text-align: right;
    row-gap: 2px;

    h4 {
      font-size: 28px;
      line-height: 26px;
    }

    span {
      font-size: 12px;
      color: rgb(var(--foreground), .7);
    }
  }
`

export const PopoverSubtotalWrapperStyled = styled(PopoverTotalWrapperStyled)`
    padding-block: 8px 4px;
    border-top: unset;
    color: rgb(var(--foreground), .6);

    & > h4 {
      font-size: 14px;
      font-weight: normal;
    }

    & > div {
      display: flex;
      flex-direction: column;
      text-align: right;
      row-gap: 2px;

      h4 {
        font-size: 14px;
        line-height: 16px;
        font-weight: normal;
      }
    }
`

export const EmptyBasketStyled = styled.span`
  display: block;
  padding: 16px 0;
  color: rgb(var(--foreground), .7);
  font-size: 16px;
  text-align: center;
  margin-inline: auto;
`
