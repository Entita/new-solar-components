import { InquiryProductState } from "@/types/InquiryCart";
import { Avatar } from "@mantine/core";
import styled from "styled-components";
import { formatPriceFromProduct } from "../PruductsPage/Product";
import SummaryProductAmount from "./SummaryProductAmount";

type SummaryProductProps = {
  product: InquiryProductState;
};

export const isProductEmpty = (product: InquiryProductState) => {
    return !product.variants || product.variants.every(variant => !variant.amount || variant.amount === 0);
}

export default function SummaryProduct({ product }: SummaryProductProps) {
    if (isProductEmpty(product)) return null;

    return (
        <ProductWrapperStyled>
            <Avatar src={`models/${product.model}/${product.model}.png`} radius={0} size="xl" />
            <ProductVariantsWrapperStyled>
                {product.variants.map(variant => {
                    if (!variant.amount || variant.amount === 0) return null;

                    return (
                        <ProductVariantWrapperStyled key={variant.name}>
                            <h4>{variant.name}</h4>
                            <ProductControlsWrapperStyled>
                                <SummaryProductAmount product={product} variant={variant} />
                                <ProductPriceWrapperStyled>
                                    {formatPriceFromProduct(variant.price * variant.amount)} Kč
                                </ProductPriceWrapperStyled>
                            </ProductControlsWrapperStyled>
                        </ProductVariantWrapperStyled>
                    )
                })}
            </ProductVariantsWrapperStyled>
        </ProductWrapperStyled>
    );
}

export const ProductWrapperStyled = styled.div`
    display: flex;
    align-items: center;
    column-gap: 12px;
    padding-block: 8px;
    border-bottom: 1px solid var(--item-border-color);

    .mantine-Avatar-root {
        margin-bottom: auto;
    }
`

export const ProductVariantsWrapperStyled = styled.div`
    display: flex;
    flex-direction: column;
    row-gap: 8px;
    width: 100%;
`

export const ProductVariantWrapperStyled = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    row-gap: 8px;

    & > h4 {
        max-width: 187px;
        font-size: 16px;
        font-weight: normal;
    }

    &:not(:last-child) {
        border-bottom: 1px solid rgb(var(--foreground), .03);
        padding-bottom: 8px;
    }

    @media (max-width: 800px) {
        flex-direction: column;
        align-items: flex-start;
    }
`

export const ProductControlsWrapperStyled = styled.div`
    display: flex;
    justify-content: space-between;
    width: 40%;

    @media (max-width: 800px) {
        width: 100%;
    }
`

export const ProductPriceWrapperStyled = styled.div`
    display: flex;
    align-items: center;
    text-align: right;
    font-size: 18px;
    font-weight: bolder;
`
