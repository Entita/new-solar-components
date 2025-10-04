import { Accordion, Drawer, Portal } from '@mantine/core';
import StepLabel from './StepLabel';
import { useAppSelector } from '@/lib/hooks/hooks';
import { InquiryCartState } from '@/types/InquiryCart';
import styled from 'styled-components';
import { useEffect, useMemo, useState } from 'react';
import SummaryProduct from './SummaryProduct';
import { formatPriceFromProduct } from '../PruductsPage/Product';
import { useDisclosure } from '@mantine/hooks';
import { EmptyBasketStyled } from '../Header/InquiryPopover.style';
import Loading from '../ProductPage/Loading';
import { BasketDeliveryStep, DeliveryList, DeliveryOption } from '@/types/Basket';
import { useFormikContext } from 'formik';

export const paymentInitialValues = { payment: '' };

export const getPriceFromProducts = (products: InquiryCartState['products']) => {
  return products.reduce((total, product) => {
    if (!product.variants) return total;
    const variantsTotal = product.variants.reduce(
      (sum: number, variant: any) => sum + (variant.price || 0) * (variant.amount || 0),
      0
    );
    return Number((total + variantsTotal).toFixed(2));
  }, 0);
}

export const getPriceWithVAT = (products: InquiryCartState['products']) => {
  const price = getPriceFromProducts(products);
  return Number((price + price * 0.21).toFixed(2));
}

export const getPriceFromDelivery = (delivery: DeliveryOption, deliveryList: DeliveryList[], products: InquiryCartState['products']) => {
  if (deliveryList.length === 0) return undefined;

  if (delivery === DeliveryOption.PICKUP) {
    const deliveryItem = deliveryList.find(item => item.fixed_amount.amount === 0)
    return deliveryItem
  } else {
    const hasProfile = products.some(product => product.id === "profil");

    if (hasProfile) {
      const cargo = deliveryList.reduce((prev, curr) =>
        curr.fixed_amount.amount > prev.fixed_amount.amount ? curr : prev
      );
      return cargo;
    } else {
      const standard = deliveryList
        .filter(item => item.fixed_amount.amount > 0)
        .reduce((prev, curr) =>
          curr.fixed_amount.amount < prev.fixed_amount.amount ? curr : prev
      );
      return standard;
    }
  }
}

type MultiStepProps = {
  deliveryList: DeliveryList[];
};

export default function SummaryStep({ deliveryList }: MultiStepProps) {
  const { values } = useFormikContext<BasketDeliveryStep>();
  const [hydrated, setHydrated] = useState(false);
  const [opened, { open, close }] = useDisclosure(false);
  const inquiryCartProducts = useAppSelector(state => state.inquiryCart.products) as InquiryCartState['products']
  const loadingDelivery = useMemo(() => deliveryList.length === 0, [deliveryList])
  const delivery = useMemo(() => {
    if (values.delivery === '') return null
    return getPriceFromDelivery(values.delivery, deliveryList, inquiryCartProducts)
  }, [inquiryCartProducts, values.delivery, deliveryList])
  const deliveryPrice = delivery ? delivery.fixed_amount.amount / 100 : 0

  useEffect(() => {
    setHydrated(true);
  }, []);

  if (!hydrated) return null;

  return (
    <Accordion.Item value="summary" key="summary" my="md" bdrs="md" bd="1px solid var(--item-border-color)">
      <Accordion.Control aria-label="Summary" chevron={<></>} style={{ cursor: 'default' }}>
        <StepLabel label="Shrnutí objednávky" />
      </Accordion.Control>
      <Accordion.Panel className='summary-panel'>
        <Portal>
          <Drawer opened={opened} onClose={close} title="Přepravní náklady" position='right' padding="lg" size="md">
            <DrawerContentStyled>
              Doprava je zdarma při osobním vyzvednutí. Pokud zvolíte doručení na adresu, cena dopravy se liší podle obsahu košíku.
Pokud máte v košíku profily (dlouhé tyče), je nutné využít speciální těžkou dopravu, která je dražší kvůli rozměrům zásilky.
V ostatních případech můžete využít standardní doručení za výhodnější cenu:
             {loadingDelivery ? (
              <Loading />
             ): (
               <ul>
                {deliveryList.map((delivery: DeliveryList) => (
                  <li key={delivery.id}>{delivery.display_name}: <b>{formatPriceFromProduct(delivery.fixed_amount.amount / 100)} Kč</b></li>
                ))}
              </ul>
             )}
            </DrawerContentStyled>
          </Drawer>
        </Portal>
        {inquiryCartProducts.length === 0 ? (
          <EmptyBasketStyled>V košíku zatím nemáte žádné produkty.</EmptyBasketStyled>
        ) : (
          <ProductsWrapperStyled>
            {inquiryCartProducts.map((product) => (
              <SummaryProduct key={product.id} product={product} />
            ))}
          </ProductsWrapperStyled>
        )}
        <SubTotalStyled>
          <div>
            <span>Mezisoučet</span>
            <h5>{formatPriceFromProduct(getPriceFromProducts(inquiryCartProducts))} Kč</h5>
          </div>
          <div>
            <span>DPH (21%)</span>
            <h5>{formatPriceFromProduct(Number((getPriceFromProducts(inquiryCartProducts) * 0.21).toFixed(2)))} Kč</h5>
          </div>
          {delivery && (
            <div>
              <span>{delivery.display_name} ({delivery.delivery_estimate.minimum.value} - {delivery.delivery_estimate.maximum.value} dnů)</span>
              <h5>{formatPriceFromProduct(deliveryPrice)} Kč</h5>
            </div>
          )}
          <DeliveryPriceStyled onClick={open}>Cena podle druhu dopravy</DeliveryPriceStyled>
        </SubTotalStyled>
        <SummaryTotalStyled>
          <h4>Celkem</h4>
          <div>
            <h4>{formatPriceFromProduct(getPriceWithVAT(inquiryCartProducts) + deliveryPrice)} Kč</h4>
            <span>včetně DPH</span>
          </div>
        </SummaryTotalStyled>
      </Accordion.Panel>
    </Accordion.Item>
  );
}

export const ProductsWrapperStyled = styled.div`
  display: flex;
  flex-direction: column;
  color: rgb(var(--foreground), .85);
`

const SubTotalStyled = styled.div`
  display: flex;
  flex-direction: column;
  padding-block: 8px;
  border-bottom: 1px solid var(--item-border-color);
  color: rgb(var(--foreground), .85);

  & > div {
    display: flex;
    justify-content: space-between;
  }

  span {
    font-size: 16px;
  }

  h5 {
    font-size: 18px;
    line-height: 18px;
  }

  & > span {
    cursor: pointer;
    width: max-content;
  }
`

export const SummaryTotalStyled = styled.div`
  display: flex;
  justify-content: space-between;
  padding-top: 8px;

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

const DeliveryPriceStyled = styled.span`
  text-decoration: underline;
  color: #0050aa;
  cursor: pointer;
`

const DrawerContentStyled = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  font-size: 16px;

  ul {
    padding-inline: 24px;
  }
`
