import { InquiryProductState, InquiryProductVariantState } from "@/types/InquiryCart";
import { Avatar } from "@mantine/core";
import { PopoverProductVariantsWrapperStyled, PopoverProductWrapperStyled, PopoverVariantControlsWrapperStyled, PopoverVariantPriceStyled, PopoverVariantWrapperStyled } from "./PopoverProducts.style";
import SummaryProductAmount from "../BasketPage/SummaryProductAmount";
import { formatPriceFromProduct } from "../PruductsPage/Product";
import { Link } from "next-transition-router";
import { isProductEmpty } from "../BasketPage/SummaryProduct";

type PopoverProductProps = {
  product: InquiryProductState;
};

export default function PopoverProduct({ product }: PopoverProductProps) {
    if (isProductEmpty(product)) return null;

    return (
        <PopoverProductWrapperStyled key={product.id}>
            <Avatar src={`models/${product.model}/${product.model}.png`} radius={0} size="lg" />
            <PopoverProductVariantsWrapperStyled>
                {product.variants.map(variant => (
                    <PopoverProductVariant key={variant.name} product={product} variant={variant} />
                ))}
            </PopoverProductVariantsWrapperStyled>
        </PopoverProductWrapperStyled>
    )
}

type PopoverProductVariantProps = {
  product: InquiryProductState;
  variant: InquiryProductVariantState;
};

function PopoverProductVariant({ product, variant }: PopoverProductVariantProps) {
    if (!variant.amount || variant.amount === 0) return null;

    return (
        <PopoverVariantWrapperStyled key={variant.name}>
            <Link href={`/produkty/${product.id}`}><h4>{variant.name}</h4></Link>
            <PopoverVariantControlsWrapperStyled>
                <SummaryProductAmount product={product} variant={variant} />
                <PopoverVariantPriceStyled>
                    {formatPriceFromProduct(variant.price * variant.amount)} Kč
                </PopoverVariantPriceStyled>
            </PopoverVariantControlsWrapperStyled>
        </PopoverVariantWrapperStyled>
    )
}
