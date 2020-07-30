import styled from "styled-components";

const Flex = styled.div`
  display: flex;
`;

const Row = styled(Flex)`
  align-items: ${(props) => props.alignItems};
  justify-content: ${(props) => props.justifyContent};
`;

const Column = styled(Row)`
  flex-direction: column;
`;

export { Column, Row };
