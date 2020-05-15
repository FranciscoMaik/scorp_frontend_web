import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

export const Input = styled.input`
  width: 80%;
  margin-top: 20px;
`;

export const Label = styled.label`
  font-size: 18px;
  font-weight: bold;
  text-transform: uppercase;
`;

export const ContainerForm = styled.div`
  background-color: #ac4f00;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 60%;
  height: 60%;
  padding: 20px;
`;

export const Button = styled.button`
  background-color: #ffffff;
  margin-top: 40px;
  padding: 5px;
  width: 100px;
  border: 0;
  cursor: pointer;
  transition: background-color 0.2s, color 0.2s;

  &:hover {
    background-color: #842316;
    color: #ffffff;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 60%;
  align-items: center;
  padding: 50px;
`;

export const Header = styled.div`
  background-color: #842316;
  height: 60px;
`;
