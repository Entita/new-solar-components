import styled from "styled-components"

export const HowSectionStyled = styled.section`
  position: relative;
  display: flex;
  flex-direction: column;
  row-gap: 5vh;
  background-color: rgb(var(--foreground));
  color: rgb(var(--background));
  padding: 5vh 10vw;
  width: 100vw;
  left: -10vw;
  overflow: hidden;

  h3 {
    font-size: clamp(24px, 2.6vw, 38px);
    text-transform: uppercase;
  }

  span {
    position: relative;
    margin-inline: auto;
    font-size: clamp(50px, 7vw, 112px);
    font-weight: 700;
    margin-bottom: min(10vh, 10vw);
    letter-spacing: 4px;
    z-index: 0;
  }
`

export const HowLineStyled = styled.div`
  position: absolute;
  content: '';
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgb(var(--main-yellow));
  height: 40px;
  z-index: 1;
`
