import styled from "styled-components";

const Column = styled.div`
  display: flex;
  flex-direction: column;
`;

const Row = styled.div`
  display: flex;
  justify-content: ${props => props.justifyContent};
  margin-top: ${props => props.mt}rem;
`;

export { Column, Row };
