import { useAppDispatch } from "@/lib/hooks/hooks";
import { decreaseProduct, increaseProduct } from "@/lib/slices/inquiryCartSlice";
import { InquiryProductState, InquiryProductVariantState } from "@/types/InquiryCart";
import Trash from '../SVG\'s/Trash'
import styled from "styled-components";

type SummaryProductProps = {
  product: InquiryProductState;
  variant: InquiryProductVariantState;
};

export default function SummaryProductAmount({ product, variant }: SummaryProductProps) {
    const dispatch = useAppDispatch()

    const increaseAmount = () => {
        dispatch(increaseProduct({ productId: product.id, variantIndex: product.variants?.indexOf(variant) }))
    }

    const decreaseAmount = () => {
        dispatch(decreaseProduct({ productId: product.id, variantIndex: product.variants?.indexOf(variant) }))
    }

    return (
        <AmountWrapperStyled>
            <MinusControlWrapperStyled onClick={decreaseAmount}>
                {variant.amount === 1 ? <Trash height={15} color="rgb(var(--foreground))" /> : '-'}
            </MinusControlWrapperStyled>
            <span>{variant.amount}</span>
            <PlusControlWrapperStyled onClick={increaseAmount}>
                +
            </PlusControlWrapperStyled>
        </AmountWrapperStyled>
    );
}

export const AmountWrapperStyled = styled.div`
    display: flex;
    align-items: center;
    border: 1px solid var(--item-border-color);
    border-radius: 24px;

    & > span {
        padding-inline: 8px;
    }
`

export const PlusControlWrapperStyled = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 6px 12px;
    border-radius: 0 24px 24px 0;
    transition: background-color .2s;
    font-size: 20px;
    width: 40px;
    height: 100%;
    cursor: pointer;

    &:hover {
        background-color: rgb(var(--foreground), .1);
    }
`

export const MinusControlWrapperStyled = styled(PlusControlWrapperStyled)`
    border-radius: 24px 0 0 24px;
`