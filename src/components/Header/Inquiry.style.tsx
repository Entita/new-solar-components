import styled from 'styled-components'


export const InquiryWrapperStyled = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  margin-left: auto;
  column-gap: 24px;
`

export const HeaderInquiryNumberStyled = styled.span<{ $show: Boolean }>`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  left: ${({ $show }) => $show ? '-10px' : '0'};
  top: ${({ $show }) => $show ? '-10px' : '0'};
  opacity: ${({ $show }) => $show ? 1 : 0};
  width: 20px;
  height: 20px;
  font-size: 14px;
  border-radius: 50%;
  padding-left: 2px;
  border: 1px solid rgb(var(--main-orange));
  background-color: rgb(var(--main-yellow));
  transition: left .2s ease, top .2s ease, opacity .2s ease;
  color: var(--dark-color);
  z-index: 1;
`

export const InquiryStyled = styled.div<{ $show: Boolean }>`
  position: relative;
  padding: 4px 20px;
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 2px;
  background-color: rgb(var(--background));
  white-space: nowrap;
  text-align: center;
  border-radius: 4px;
  transition: background-color .2s ease, border-color .2s ease, color .2s ease 0s;
  border: 1px solid rgb(var(--foreground));
  color: ${({ $show }) => $show ? 'rgb(var(--background))' : 'rgb(var(--foreground))'};
  border-color: ${({ $show }) => $show ? 'rgb(var(--background))' : 'rgb(var(--foreground))'};
  font-size: 18px;
  cursor: pointer;
  margin-left: auto;
  user-select: none;
  z-index: 0;

  &::before {
    content: "";
    position: absolute;
    top: 0px;
    left: 0px;
    width: 100%;
    height: 100%;
    background-color: rgb(var(--foreground));
    border-radius: 4px;
    transition: transform .5s ease 0s;
    transform: ${({ $show }) => $show ? 'rotateX(0deg)' : 'rotateX(90deg)'};
    z-index: -1;
  }

  &::after {
    content: "";
    position: absolute;
    top: 0px;
    left: 0px;
    width: 100%;
    height: 100%;
    background-color: rgb(var(--foreground));
    border-radius: 4px;
    transition: transform .5s ease 0s;
    transform: ${({ $show }) => $show ? 'rotateY(0deg)' : 'rotateY(90deg)'};
    z-index: -1;
  }

  &:hover {
    color: rgb(var(--background));
    border-color: rgb(var(--background));
  }

  &:hover::before {
    transform: rotateX(0deg);
  }

  &:hover::after {
    transform: rotateY(0deg);
  }
`


export const InquiryContentWrapperStyled = styled.div<{ $show: Boolean }>`
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  row-gap: 1rem;
  top: calc(100% + 1rem);
  right: 0;
  background-color: rgb(var(--background));
  color: rgb(var(--foreground));
  box-shadow: -4px 4px 17.1px 0px rgba(var(--foreground), 0.25);
  transition: clip-path .2s ease;
  clip-path: ${({ $show }) => $show ? 'inset(-20px -20px -20px -20px)' : 'inset(-20px -20px calc(100% + 20px) -20px)'};
  text-transform: none;
  padding: 2rem 1rem;
  border-radius: 16px;
  width: max-content;

  & > a {
    background-color: rgb(var(--main-orange));
    color: rgb(var(--background));
    font-weight: 500;
    text-transform: uppercase;
    font-size: 18px;
    letter-spacing: 2px;
    border-radius: 6px;
    padding: 8px 64px;
    min-width: 240px;
    height: max-content;
  }

  & > div {
    display: flex;
    flex-direction: column;
    max-height: 320px;
    overflow-y: auto;
    row-gap: 12px;

    & > span {
      color: rgba(var(--foreground), .6);
      font-size: 20px;
      margin-inline: auto;
    }

    & > div:last-child {
      border-bottom: none;
    }
  }
`
