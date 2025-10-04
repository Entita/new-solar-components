"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Package, Hammer, Truck, CheckCircle } from "lucide-react";
import {
  TimelineWrapper,
  TimelineLine,
  TimelineItem,
  TimelineContent,
  TimelineIconWrapper,
  TimelineTitleWrapper,
} from "./StepsSection.style";

export const steps = [
  {
    icon: Package,
    title: "Vyberte si produkty",
    text: "Projděte naši nabídku a vyberte komponenty, které potřebujete – od profilů až po spojovací materiál.",
  },
  {
    icon: Hammer,
    title: "Přidejte do košíku",
    text: "Jakmile máte vybráno, přidejte produkty do košíku a přejděte k vyplnění objednávky.",
  },
  {
    icon: Truck,
    title: "Zvolte dopravu a dokončete objednávku",
    text: "Vyplňte dodací údaje, vyberte způsob dopravy a platby. Po potvrzení objednávky vám přijde e-mail s rekapitulací.",
  },
  {
    icon: CheckCircle,
    title: "Odesíláme a doručujeme",
    text: "Zboží pečlivě zabalíme, odešleme a doručíme co nejdříve. Stačí rozbalit a pustit se do montáže.",
  },
];

export default function StepsSection() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "120%"]);

  return (
    <TimelineWrapper ref={ref}>
      <TimelineLine style={{ height: lineHeight }} />

      {steps.map((step, index) => {
        const Icon = step.icon;

        return (
          <TimelineItem key={index}>
            <TimelineContent
              as={motion.div}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <TimelineTitleWrapper>
                <TimelineIconWrapper>
                  <Icon size={38} />
                </TimelineIconWrapper>
                <h3>{step.title}</h3>
              </TimelineTitleWrapper>
              <p>{step.text}</p>
            </TimelineContent>
          </TimelineItem>
        );
      })}
    </TimelineWrapper>
  );
}
