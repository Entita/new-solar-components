import styled from "styled-components"
import { AmountWrapperStyled, MinusControlWrapperStyled, PlusControlWrapperStyled } from "../BasketPage/SummaryProductAmount"

export const PopoverProductWrapperStyled = styled.div`
    display: flex;
    column-gap: 8px;

    &:not(:last-of-type) {
        border-bottom: 1px solid rgb(var(--foreground), .4);
    }
`

export const PopoverProductVariantsWrapperStyled = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    justify-content: center;
`

export const PopoverVariantWrapperStyled = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    column-gap: 8px;
    padding-block: 4px;

    &:not(:last-of-type) {
        border-bottom: 1px solid rgb(var(--foreground), .15);
    }

    a {
        font-size: 14px;
        width: 57.5%;
    }
`

export const PopoverVariantControlsWrapperStyled = styled.div`
    display: flex;
    align-items: center;
    width: 42.5%;
    justify-content: space-between;
    user-select: none;

    ${AmountWrapperStyled} {
        width: 80px;
        height: 33px;
        border: 1px solid rgb(var(--foreground), .15);
    }

    ${PlusControlWrapperStyled}, ${MinusControlWrapperStyled} {
        padding: 4px 6px;
        font-size: 16px;
    }

    ${MinusControlWrapperStyled} svg {
        scale: .85;
    }
`

export const PopoverVariantPriceStyled = styled.h5`
    font-size: 14px;
`
