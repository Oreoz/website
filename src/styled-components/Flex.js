import styled from "styled-components";

const Row = styled.div`
  display: flex;
  justify-content: ${(props) => props.justifyContent};
  margin-top: ${(props) => props.mt}rem;
`;

const Column = styled(Row)`
  flex-direction: column;
`;

export { Column, Row };
