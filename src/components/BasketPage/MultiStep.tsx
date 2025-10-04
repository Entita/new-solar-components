import { Accordion } from '@mantine/core';
import { useCallback, useRef, useState } from 'react';
import { DeliveryList, Step } from '@/types/Basket';
import DeliveryStep from './DeliveryStep';
import AddressStep from './AddressStep';
import SummaryStep from './SummaryStep';

type MultiStepProps = {
  deliveryList: DeliveryList[];
};

export default function MultiStep({ deliveryList }: MultiStepProps) {
  const [step, setStep] = useState<Step | undefined>("delivery");
  const stepRefs = {
    delivery: useRef<HTMLDivElement>(null),
    address: useRef<HTMLDivElement>(null),
  };

  const changeStep = useCallback((newStep: Step) => {
    if (newStep !== "summary") {
      setStep(newStep);
      stepRefs[newStep]?.current?.scrollIntoView({ behavior: 'smooth', block: 'end' });
    } else {
      setStep(undefined)
    }
  }, []);

  return (
    <Accordion
      chevronPosition="right"
      variant="contained"
      radius="md"
      maw="max(35vw, 700px)"
      mx="auto"
      w="100%"
      transitionDuration={300}
      value={["summary", step].filter(Boolean) as string[]}
      multiple
      onChange={(value) => changeStep(value[value.length - 1] as Step)}
      chevronIconSize={24}
    >
      <DeliveryStep stepRef={stepRefs.delivery} changeStep={changeStep} />
      <AddressStep stepRef={stepRefs.address} changeStep={changeStep} />
      <SummaryStep deliveryList={deliveryList} />
    </Accordion>
  );
}