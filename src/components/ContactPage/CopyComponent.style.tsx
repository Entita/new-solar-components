import styled from "styled-components"

export const CopyWrapperStyled = styled.div`
  position: relative;
`

export const CopiedTextStyled = styled.span<{ $show: Boolean }>`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  font-size: 14px !important;
  top: ${({ $show }) => $show ? '-18px' : '-14px'};
  opacity: ${({ $show }) => $show ? 1 : 0};
  transition: top .2s ease, opacity .2s ease;
  z-index: 1;
`
