import styled, { css } from "styled-components"

export const ProductWrapperStyled = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem;

  h3 {
    font-size: clamp(24px, 2vw, 28px);
  }

  p {
    font-size: clamp(16px, 1.4vw, 21px);
    font-weight: 300;
  }
`

export const ProductBgStyled = styled.div<{ $url: string }>`
  display: flex;
  width: calc(100% + 2rem);
  aspect-ratio: 1/1;
  margin: -1rem;
  background-image: ${({ $url }) => `url(/${$url})`};
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
  box-shadow: -2px 2px 20px 0px rgba(var(--foreground), .15);
  margin-bottom: 1rem;
  border-radius: 16px;
  padding: 1rem;
`

export const ProductAddStyled = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  border: 2px solid rgb(var(--foreground));
  background-color: rgb(var(--foreground));
  border-radius: 12px;
  color: rgb(var(--background));
  text-transform: uppercase;
  font-size: clamp(14px, 3vw, 18px);
  padding: 12px;
  width: calc(100% - min(1rem,1vw) - 54px);
  transition: background-color .2s ease, color .2s ease, border-color .2s ease, border-radius .2s ease, opacity .2s ease;

  &:hover {
    background-color: rgb(var(--background));
    color: rgb(var(--foreground));
  }
`

export const ProductInfoStyled = styled.div`
  border: 2px solid rgb(var(--foreground));
  background-color: rgb(var(--background));
  color: rgb(var(--foreground));
  border-radius: 12px;
  max-width: 100%;

  a {
    display: flex;
    width: 100%;
    height: 100%;
    padding: 12px 20px;
  }

  &:hover {
    background-color: rgb(var(--main-orange));
    border-color: rgb(var(--main-orange));

    svg {
      fill: rgb(var(--background))!important;
    }
  }
`

export const ProductPriceStyled = styled.button`
  background-color: rgb(var(--main-orange));
  color: rgb(var(--background));
  border: unset;
  border-radius: 12px;
  font-size: 18px;
  font-weight: 700;
  padding: min(20px, 2vw) min(20px, 4vw);
  width: fit-content;
`

export const ProductVariantsStyled = styled(ProductPriceStyled)`
  background-color: rgb(var(--main-yellow));
`

export const ProductVariantsWrapperStyled = styled.div<{ $open: Boolean }>`
  display: flex;
  clip-path: ${({ $open }) => $open ? 'inset(-12px -12px -12px -12px)' : 'inset(calc(100% + 12px) -12px -12px -12px)'};
  overflow: visible;
  flex-direction: column;
  position: absolute;
  row-gap: 6px;
  bottom: -1px;
  left: -1px;
  right: -1px;
  box-shadow: -2px 2px 10px 0px rgba(var(--foreground), .15);
  transition: clip-path .2s ease;
  background-color: rgb(var(--background));
  padding: min(20px,2vw) min(20px,4vw);
  border-radius: 12px;

  & > h4 {
    font-size: clamp(18px, 1.6vw, 21px);
    font-weight: 600;
  }
`

export const ProductVariantWrapperStyled = styled.div<{ $selected: Boolean }>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${({ $selected }) => $selected && 'rgb(var(--foreground))'};
  transition: background-color .2s ease, color .2s ease;
  padding: 4px 8px;
  border-radius: 6px;
  user-select: none;
  cursor: pointer;

  &:hover {
    background-color: ${({ $selected }) => !$selected && 'rgba(var(--foreground), .15)'};
  }

  & > div {
    display: flex;
    flex-direction: column;
    text-align: right;

    span:first-child {
      font-weight: 500;
    }

    span {
      font-weight: 200;
      font-size: clamp(14px, 1.3vw, 16px);
      color: ${({ $selected }) => $selected ? 'rgba(var(--background), .9)' : 'rgba(var(--foreground), .9)'};
    }
  }

  & > span {
    font-size: clamp(14px, 1.3vw, 16px);
    color: ${({ $selected }) => $selected ? 'rgb(var(--background))' : 'rgba(var(--foreground), .75)'};
    font-weight: 500;
  }
`

export const ProductButtonsWrapperStyled = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: min(1rem, 1vw);
  margin-top: auto;
  width: 100%;

  & > div:first-child {
    position: relative;
    display: flex;
    flex-wrap: wrap;
    column-gap: 1rem;
    row-gap: min(1rem, 1vw);
  }
`

export const ProductBottomButtonsWrapperStyled = styled.div<{ $show: Boolean }>`
  display: flex;
  justify-content: space-between;
  column-gap: min(1rem,1vw);
  row-gap: 12px;
  flex-wrap: wrap;
  user-select: none;

  button {
    transition: background-color .2s ease, color .2s ease, border-color .2s ease;
    cursor: pointer;
  }

  div:first-child {
    cursor: ${({ $show }) => $show ? 'default' : 'pointer'};
  }

  ${({ $show }) => $show && css`
    ${ProductAddStyled} {
      background-color: rgb(var(--main-orange));
      border-color: rgb(var(--main-orange));

      button:first-child {
        padding-bottom: 4px;
      }

      button {
        color: rgb(var(--background));
        background-color: transparent;
        border: unset;
        font-size: 48px;
        line-height: 16px;
        height: 100%;
        overflow: hidden;
      }

      input {
        position: relative;
        background-color: transparent;
        border: unset;
        color: rgb(var(--background));
        font-size: 32px;
        height: 27px;
        width: 78px;
        text-align: center;
        outline: none;
        border-bottom: 2px solid rgb(var(--background));
      }
    }
  `}
`
