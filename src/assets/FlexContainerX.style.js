import styled from "styled-components";

export const FlexContainerX = styled.div`
  height: 100%;
  display: flex;
  gap: 1rem;
  align-items: center;

  @media (min-width: 768px) {
    gap: 2rem;
  }
`;
