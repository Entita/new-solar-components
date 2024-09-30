import styled from "styled-components"

export const ContactSectionWrapperStyled = styled.div`
  display: flex;
  justify-content: space-between;
  column-gap: 10vw;
  row-gap: 5vh;
  flex-wrap: wrap;

  & > * {
    width: calc(50% - 5vw);
    min-width: min(80vw, 300px);

    @media (max-width: 878px) {
      width: 100%;
    }
  }
`
