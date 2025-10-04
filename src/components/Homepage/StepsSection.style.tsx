import styled from "styled-components";
import { motion } from "framer-motion";

export const TimelineWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  row-gap: 160px;
  width: 100%;
  margin-inline: auto;
`;

export const TimelineLine = styled(motion.div)`
  position: absolute;
  left: 50%;
  top: 7.5%;
  width: 3px;
  background: linear-gradient(to bottom, rgb(var(--main-yellow)), rgb(var(--main-orange)));
  transform: translateX(-50%);
  z-index: 1;
  border-radius: 3px;
`;

export const TimelineIconWrapper = styled.div`
  background: rgb(var(--background));
  color: rgb(var(--main-orange));
  border: 3px solid rgb(var(--main-orange));
  width: 64px;
  min-width: 64px;
  min-height: 64px;
  height: 64px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const TimelineTitleWrapper = styled.div`
  display: flex;
  align-items: center;
  column-gap: 16px;

  @media (max-width: 800px) {
    flex-direction: column;
  }
`;

export const TimelineItem = styled.div`
  display: flex;
  position: relative;
  width: 100%;

  &:nth-child(odd) {
    justify-content: flex-end;
    text-align: right;

    ${TimelineTitleWrapper} {
      flex-direction: row-reverse;
    }

    @media (max-width: 800px) {
      justify-content: unset;
      text-align: unset;

      ${TimelineTitleWrapper} {
        flex-direction: column;
      }
    }
  }
`;

export const TimelineContent = styled.div`
  color: rgb(var(--foreground));
  background-color: rgb(var(--background));
  padding: 20px 30px;
  border-radius: 16px;
  width: 40%;
  position: relative;
  z-index: 2;
  box-shadow: 0 2px 10px rgba(var(--foreground), .15);
  display: flex;
  flex-direction: column;
  row-gap: 24px;
  min-width: max-content;

  @media (max-width: 800px) {
    width: 100%;
    max-width: 80vw;
    min-width: unset;
    text-align: center;
  }

  & > * {
    max-width: 520px;
  }

  h3 {
    font-size: 32px;
    font-weight: 600;
  }

  p {
    font-size: 16px;
    color: rgb(var(--foreground), .7);
    line-height: 1.4;
  }
`;
