import React from 'react'
import Copy from '../SVG\'s/Copy'
import { CopiedTextStyled, CopyWrapperStyled } from './CopyComponent.style'

export default function CopyComponent({ passRef }: { passRef: any }) {
  const [copied, setCopied] = React.useState<Boolean>(false)

  const copyToClipboard = React.useCallback(() => {
    const value = passRef.current.value || passRef.current.innerText
    navigator.clipboard.writeText(value)
    setCopied(true)
  }, [passRef])

  React.useEffect(() => {
    if (copied) {
      let timeout = setTimeout(() => {
        setCopied(false)
      }, 800)

      return () => clearTimeout(timeout)
    }
  }, [copied])

  return (
    <CopyWrapperStyled onClick={() => copyToClipboard()}>
      <Copy />
      <CopiedTextStyled $show={copied}>Copied!</CopiedTextStyled>
    </CopyWrapperStyled>
  )
}
