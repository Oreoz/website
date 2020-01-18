import styled from "styled-components";

const FlexSwitch = styled.div`
  display: flex;
  flex-direction: ${props => props.initial.direction};
  align-items: ${props => props.initial.alignItems};
  justify-content: ${props => props.initial.justifyContent};

  @media (min-width: ${props => props.breakpoint}px) {
    flex-direction: ${props => props.destination.direction};
    align-items: ${props => props.destination.alignItems};
    justify-content: ${props => props.destination.justifyContent};
  }
`;

export default FlexSwitch;
