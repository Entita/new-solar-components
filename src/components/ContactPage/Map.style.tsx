import styled from "styled-components"

export const MapWrapperStyled = styled.div`
  .gmnoprint, .gm-style-cc, .gm-style-moc {
    display: none;
  }

  .RIFJN-maps-pin-view-border, .RIFvHW-maps-pin-view-background {
    fill: rgb(var(--main-yellow));
  }

  .KWCFZI-maps-pin-view-default-glyph {
    fill: #3f3f3f;
  }
`

export const MapContentWrapperStyled = styled.div`
  position: relative;
  display: flex;
  flex-wrap: wrap;
  column-gap: max(2rem, 7.5vw);
  padding: min(2rem, 2vw);
  height: 100%;
  pointer-events: none;

  & > div {
    width: calc(50% - max(1rem,3.75vw));
  }

  & > div:nth-child(1) {
    min-width: 400px;
  }

  & > div:nth-child(2) {
    display: flex;
    flex-direction: column;
    padding-right: 5vw;
  }

  @media (max-width: 934px) {
    flex-direction: column-reverse;
    justify-content: space-between;
    flex-wrap: nowrap;

    & > div {
      width: 100%;
    }

    & > div:nth-child(1) {
      padding-right: 5vw;
      max-height: 80%;
    }

    & > div:nth-child(2) {
      padding-left: 5vw;
      flex-direction: row-reverse;
      justify-content: space-between;

      & > div {
        margin: unset;
      }

      & > div:nth-child(1) {
        height: max-content;
      }
    }
  }

  @media (max-width: 500px) {
    & > div:nth-child(1) {
      padding-right: 0;
    }
  }
`

export const MapChangeTypeWrapperStyled = styled.div<{ $type: 'storage' | 'company' }>`
  position: relative;
  display: flex;
  column-gap: 3rem;
  color: rgb(var(--foreground), .8);
  background-color: rgb(var(--background), .5);
  border: 1px solid rgb(var(--foreground), .6);
  border-radius: 18px;
  margin-left: auto;
  width: fit-content;
  pointer-events: all;
  padding: 4px 12px;
  z-index: 0;
  user-select: none;
  cursor: pointer;

  & > span:nth-child(1) {
    color: ${({ $type }) => $type === 'company' && 'rgb(var(--main-yellow))'};
  }

  & > span:nth-child(2) {
    color: ${({ $type }) => $type === 'storage' && 'rgb(var(--main-yellow))'};
  }

  &::before {
    position: absolute;
    content: '';
    bottom: 0;
    top: 0;
    left: ${({ $type }) => $type === 'storage' ? 'calc(50% - 13px)' : '0'};
    width: calc(50% + 14px);
    background-color: #717171;
    border-radius: 16px;
    transition: left .2s ease;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
    z-index: -1;
  }

  &::after {
    position: absolute;
    content: '';
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 16px;
    height: 16px;
    background-color: var(--white-color);
    border-radius: 16px;
    transition: left .2s ease;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25) inset;
    z-index: -1;
  }
`

export const MapContactInfoWrapperStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  row-gap: min(1rem, 2vw);
  background-color: rgb(var(--background));
  color: rgb(var(--foreground));
  width: 100%;
  max-width: 500px;
  margin-left: auto;
  margin-top: auto;
  border-radius: 24px;
  padding: min(1rem, 2vw) min(2rem, 4vw);
  pointer-events: all;
`

export const MapContactRowWrapperStyled = styled.div`
  display: flex;
  column-gap: 1rem;

  & > div:nth-child(1) {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 48px;
    height: 48px;
    min-width: 48px;
    min-height: 48px;
    background-color: rgba(var(--foreground), .25);
    border-radius: 50%;
  }

  & > div:nth-child(2) {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    font-size: clamp(13px, 1.4vw, 16px);
  }

  & > div:nth-child(3) {
    margin-left: auto;
    cursor: pointer;
  }
`
