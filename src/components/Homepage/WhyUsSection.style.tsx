import styled from "styled-components"

export const WhyUsSectionWrapperStyled = styled.section`
  background-color: rgba(var(--foreground), .3);
  backdrop-filter: blur(5px);
  padding: min(10vh, 1rem) max(2vw, 12px);
  border-radius: 18px;

  h2 {
    text-transform: uppercase;
    margin-block: 1rem;
    font-size: clamp(48px, 3vw, 64px);
  }
`

export const WhyUsCardsWrapperStyled = styled.div`
  display: flex;
  flex-wrap: wrap;
  column-gap: 2vw;
  row-gap: 18px;
  justify-content: space-around;
`

export const WhyUsCardWrapperStyled = styled.div<{ $selected: Boolean }>`
  display: flex;
  flex-direction: column;  padding-top: 55px;
  background-color: var(--dark-color);
  color: var(--white-color);
  border-radius: 8px;
  padding: 64px;
  padding-top: 55px;
  width: calc(calc(100% - 4vw) / 3);
  min-width: min(300px, 100%);
  min-height: 240px;
  box-shadow: ${({ $selected }) => $selected ? '-6px 6px 10px 0px rgb(var(--main-orange))' : '-3px 3px 10px 0px rgba(0, 0, 0, 0.1)'};
  transition: box-shadow .2s ease;

  i {
    font-style: normal;
    transition: color .2s ease;
    color: ${({ $selected }) => $selected && 'rgb(var(--main-orange))'};
  }

  h3 {
    font-size: clamp(32px, 2.6vw, 48px);
    margin-bottom: 1rem;
  }

  p {
    font-size: clamp(16px, 1vw, 21px);
  }
`
