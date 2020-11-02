import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 12px;
  width: 100%;

  & div {
    background: #F7FFF2;
    margin-bottom: 12px;
    padding: 12px;
    border-radius: 8px;
    border: 0.5px solid #000;

    strong{
      display: block;
    }
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
  align-items: center;

  & p {
    background-color: #ac4f00;
    padding: 20px;
    font-weight: bold;
    box-shadow: 2px 2px 8px #4d4d4d;
    text-align: center;
    width: 70%;
  }
  & footer {
    margin-top: 20px;
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

export const Buttons = styled.div`
  padding: 12px;

  button{
    margin: 5px;
    width: 30px;
  }
`;

export const IntervalList = styled.div`
  width: 90%;
  margin-top: 20px;
  display: flex;
  justify-content: flex-end;
`;