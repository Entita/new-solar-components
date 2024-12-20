import React from 'react'
import { HowLineStyled, HowSectionStyled } from './HowSection.style'
import { motion } from 'framer-motion'

const animations = {
  offscreen: {

  },
  onscreen: {
    rotate: [0, 20, 0],
    transition: {
      ease: 'linear',
      times: [0, 0.5, 1],
      duration: 0.8,
      delay: .15,
    }
  }
}

export default function HowSection() {
  const lineRef = React.useRef<HTMLDivElement>(null!)

  const changeZIndex = React.useCallback(() => {
    setTimeout(() => {
      lineRef.current.style.zIndex = '-1'
    }, 550)
  }, [lineRef])

  return (
    <HowSectionStyled>
      <h3>Jak to proběhně ?</h3>
      <span>
        JEDNODUŠE.
        <motion.div
          ref={lineRef}
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          style={{ transformOrigin: 'left top', left: '-40px', width: 'calc(100% + 80px)', position: 'relative', zIndex: '1' }}
          variants={animations}
          onAnimationStart={() => changeZIndex()}
        >
        <HowLineStyled />
      </motion.div>
      </span>
    </HowSectionStyled>
  )
}
