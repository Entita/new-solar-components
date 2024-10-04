import { DarkModeState } from '@/types/DarkMode'
import styled from 'styled-components'

export const DarkModeToggleWrapperStyled = styled.div<{ $mode: DarkModeState['value'] }>`
  position: fixed;
  top: 12px;
  right: 24px;
  height: 30px;
  width: 52px;
  background-color: rgb(var(--foreground));
  border: 1px solid rgb(var(--background));
  border-radius: 16px;
  transition: border-color .2s ease;
  cursor: pointer;

  img {
    position: relative;
    top: 2px;
    left: 2px;
  }

  img:nth-child(2) {
    left: 4px;
  }

  &::before {
    position: absolute;
    content: '';
    top: 3px;
    left: ${({ $mode }) => $mode === 'dark' ? `23px` : `3px`};
    width: 23px;
    height: 23px;
    border-radius: 50%;
    background-color: rgb(var(--background));
    transition: left .2s ease;
    z-index: 1;
  }

  &:hover {
    filter: brightness(.8);
  }
`
