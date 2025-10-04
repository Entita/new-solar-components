import { useDisclosure } from '@mantine/hooks';
import { Popover, Button } from '@mantine/core';
import DarkModeToggle from '../DarkMode/DarkModeToggle';
import { useAppSelector } from '@/lib/hooks/hooks';
import { InquiryCartState, InquiryProductVariantState } from '@/types/InquiryCart';
import Link from 'next/link';
import { EmptyBasketStyled, HeaderInquiryNumberStyled, InquiryWrapperStyled, PopoverContentWrapperStyled, PopoverProductsWrapperStyled, PopoverSubtotalWrapperStyled, PopoverTotalWrapperStyled } from './InquiryPopover.style';
import PopoverProduct from './PopoverProduct';
import { formatPriceFromProduct } from '../PruductsPage/Product';
import { getPriceFromProducts, getPriceWithVAT } from '../BasketPage/SummaryStep';

export default function InquiryPopover() {
  const [opened, { close, open }] = useDisclosure(false);
  const inquiryCartProducts = useAppSelector(state => state.inquiryCart.products) as InquiryCartState['products'];

  const numberOfProducts =
    inquiryCartProducts.reduce((sum, product) =>
      product.variants.reduce((variantSum: number, variant: InquiryProductVariantState) =>
        (variant.amount > 0 ? 1 : 0) + variantSum, 0) + sum, 0)

  return (
    <InquiryWrapperStyled id="inquiry">
      <Popover position="bottom" shadow="md" offset={0} radius={16} opened={opened}>
        <Popover.Target>
          <Button onMouseEnter={open} onMouseLeave={close} color='rgb(var(--foreground))' variant='outline' style={{ overflow: 'visible', backgroundColor: 'rgb(var(--background))' }}>
            <HeaderInquiryNumberStyled data-testid='header-desktop-inquiry-number' $show={numberOfProducts > 0}>{numberOfProducts}</HeaderInquiryNumberStyled>
            Košík
          </Button>
        </Popover.Target>
        <Popover.Dropdown onMouseEnter={open} onMouseLeave={close} color='rgb(var(--foreground))'>
          <PopoverContentWrapperStyled>
            <h3>Váš košík</h3>
            {inquiryCartProducts.length === 0 ? (
              <EmptyBasketStyled>V košíku zatím nemáte žádné produkty.</EmptyBasketStyled>
            ) : (
              <>
                <PopoverProductsWrapperStyled>
                  {inquiryCartProducts.map((product) => (
                    <PopoverProduct key={product.id} product={product} />
                  ))}
                </PopoverProductsWrapperStyled>
                <PopoverSubtotalWrapperStyled>
                  <h4>DPH (21%)</h4>
                  <div>
                    <h4>{formatPriceFromProduct(Number((getPriceFromProducts(inquiryCartProducts) * 0.21).toFixed(2)))} Kč</h4>
                  </div>
                </PopoverSubtotalWrapperStyled>
                <PopoverTotalWrapperStyled>
                  <h4>Celkem</h4>
                  <div>
                    <h4>{formatPriceFromProduct(getPriceWithVAT(inquiryCartProducts))} Kč</h4>
                    <span>včetně DPH</span>
                  </div>
                </PopoverTotalWrapperStyled>
                <Link href='/kosik'>
                  <Button fullWidth>Pokračovat k platbě</Button>
                </Link>
              </>
            )}
          </PopoverContentWrapperStyled>
        </Popover.Dropdown>
      </Popover>
      <DarkModeToggle />
    </InquiryWrapperStyled>
  );
}