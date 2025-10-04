import styled from "styled-components"

export const ProductWrapperStyled = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 2rem;
`

export const ProductTopWrapperStyled = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  column-gap: 3rem;
  row-gap: 2rem;

  & > div {
    width: calc(50% - 1.5rem);

    @media (max-width: 1078px) {
      width: 100%;
    }
  }
`

export const ProductBottomWrapperStyled = styled(ProductTopWrapperStyled)`

`

export const ProductImageWrapperStyled = styled.div<{ $url: String }>`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  aspect-ratio: 1 / 1;
  background-image: ${({ $url }) => `url(/${$url})`};
  background-color: rgb(var(--background));
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
  box-shadow: -2px 2px 20px 0px rgba(var(--foreground), .15);
  border-radius: 16px;
  padding: min(2rem, 2vw);
  min-width: min(400px, 100%);

  & > * {
    margin-left: auto;
  }
`

export const ProductDescriptionWrapperStyled = styled.div`
  h1 {
    font-size: clamp(42px, 4vw, 64px);
  }

  p {
    font-size: clamp(18px, 1.2vw, 24px);
    font-weight: 300;
    padding-block: 2rem;
  }
`

export const ProductAtributeWrapperStyled = styled.div`
  h3 {
    font-size: clamp(24px, 1.4vw, 32px);
  }

 ul {
   font-size: clamp(18px, 1.2vw, 24px);
    padding-inline-start: 30px;
 }
`

export const ProductVariantsWrapperStyled = styled.div`
  box-shadow: -2px 2px 20px 0px rgba(var(--foreground), 0.25);
  border-radius: 16px;
  padding: min(2rem, 2vw);
  min-width: min(400px, 100%);

  & > div {
    display: flex;
    flex-direction: column;
    row-gap: 6px;
    padding-top: 8px;
  }
`

export const ProductVariantWrapperStyled = styled.div<{ $selected: Boolean }>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${({ $selected }) => $selected ? 'rgb(var(--foreground))' : 'rgb(var(--background))'};
  color: ${({ $selected }) => $selected ? 'rgb(var(--background))' : 'rgb(var(--foreground))'};
  transition: background-color .2s ease, color .2s ease;
  padding: 4px 12px;
  border-radius: 6px;
  cursor: pointer;

  &:hover {
    background-color: ${({ $selected }) => !$selected && 'rgba(var(--foreground), .25)'};
  }

  & > div {
    display: flex;
    text-align: right;
    flex-direction: column;
    justify-content: space-between;
  }
`

export const ProductControlsWrapperStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  row-gap: 2rem;

  & > div {
    height: calc(50% - 1rem);

    @media (max-width: 1078px) {
      height: auto;
    }
  }
`

export const ProductButtonsWrapperStyled = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  column-gap: 1rem;
  row-gap: 2rem;

  button {
    height: max-content;
    width: 100%;
    background-color: rgb(var(--foreground));
    color: rgb(var(--background));
    font-size: 22px;
    border: unset;
    border-radius: 16px;
    cursor: pointer;
    min-height: 64px;

    @media (max-width: 700px) {
      min-width: min(250px, 100%);
    }
  }
`

export const ProductAmountWrapperStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  column-gap: 2rem;
  background-color: rgb(var(--main-orange));
  border-radius: 16px;
  font-size: 22px;
  color: rgb(var(--background));
  min-height: 64px;
  user-select: none;

  &:not(:has(button)) {
    cursor: pointer;
  }

  input {
    background-color: transparent;
    border: unset;
    font-size: 28px;
    width: 84px;
    text-align: center;
    color: rgb(var(--background));
    border-bottom: 2px solid rgb(var(--background));
  }

  button:first-child {
    padding-bottom: 10px;
  }

  button {
    display: flex;
    cursor: pointer;
    background-color: transparent;
    border: unset;
    color: rgb(var(--background));
    font-size: 44px;
    padding: 4px;
  }
`

export const ProductDimensionalButtonWrapperStyled = styled.div<{ $2d: Boolean }>`
  position: relative;
  display: flex;
  justify-content: space-between;
  column-gap: 8px;
  background-color: rgb(var(--foreground));
  color: rgb(var(--background));
  padding: 6px;
  border-radius: 32px;
  font-size: 16px;
  user-select: none;
  cursor: pointer;

  &::before {
    position: absolute;
    content: '';
    left: ${({ $2d }) => $2d ? '32px' : '4px'};
    top: 4px;
    width: 22px;
    height: 22px;
    border-radius: 50%;
    background-color: rgb(var(--background));
    transition: right .2s ease, left .2s ease;
    box-shadow: 0px 4px 4px 0px rgba(var(--foreground), 0.25) inset;
  }
`
