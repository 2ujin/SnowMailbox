import styled from "styled-components";

const ButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #d9b559;
  color: #0d4939;
  padding: 15px;
  border-radius: 14px;
`;
const Button = ({ name }: any) => {
  return <ButtonWrapper>{name}</ButtonWrapper>;
};

export default Button;
