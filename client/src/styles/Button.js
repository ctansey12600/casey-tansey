import styled from "styled-components";

const Button = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 8px 32px;
  gap: 8px;
  color: ${(props) => props.theme.secondary};
  background: ${(props) => props.theme.primary};
  border-style: none;
  border-radius: 8px;
  font-family: "Martel";
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 32px;
  flex: none;
  flex-grow: 0;
  &:hover {
    background-color: ${(props) => props.theme.secondary};
    border-bottom: 1px solid ${(props) => props.theme.info};
    color: ${(props) => props.theme.primary};
  }
  &.active {
    background: ${(props) => props.theme.secondary};
    color: ${(props) => props.theme.primary};
  }
`;

export default Button;
