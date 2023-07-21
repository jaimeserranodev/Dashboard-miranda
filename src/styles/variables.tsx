import React, {  ReactNode, ButtonHTMLAttributes } from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
  height: 40px;
  width: 150px;
  font-size: 20px;
  background-color: #4EB99F;
  border: none;
  border-radius: 5px;
  color: white;
  font-family: "Poppins";
  margin-top: 30px;

  &:hover {
    cursor: pointer;
  }
`;

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
    children: ReactNode;
};

const Button  = ({ children, ...rest }:ButtonProps) => {
  return <StyledButton {...rest}>{children}</StyledButton>;
};

export default Button;