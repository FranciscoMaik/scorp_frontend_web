import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;

  & li {
    list-style: decimal-leading-zero;
    margin-top: 20px;
  }

  & p {
    background-color: #ac4f00;
    padding: 20px;
    font-weight: bold;
    box-shadow: 2px 2px 8px #4d4d4d;
  }
  & footer {
    margin-top: 40px;
    background-color: #000000;
    color: #ffffff;
    width: 100%;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 12px;
  }
`;

export const Header = styled.div`
  background-color: #842316;
  width: 100%;
  height: 60px;
  color: #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
`;

export const Footer = styled.footer`
  background-color: #000000;
  color: #ffffff;
  width: 100%;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  position: absolute;
  bottom: 0;
`;
export const Html = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0;
  padding: 0;
`;
