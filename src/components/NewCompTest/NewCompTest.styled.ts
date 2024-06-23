import styled from 'styled-components';

interface props {
    bgColor: string;
}

export const MainDiv = styled.div`
    display: flex;
    margin: 0 auto;
    flex-direction: column;
    align-items: center;
    width: 20vw;
    height: 30vw;
    min-height: 450px;
    background: linear-gradient(0deg,#f7e78b,#f7eeba,#f3ebb2,#f4eec4,#faf6da, #fffdf1);
    border: 3px solid gold ;
`;

export const ContainerImg = styled.div`
    position: relative;
    width: 100%;
    height: 65%;
    text-align: center;
    font-size: 17px;
`;

export const HeartImg = styled.svg`
    position: absolute;
    top: 2vh;
    right: 1vw;
    width: 1.4vw;
    stroke: #535151;
    stroke-width: 2;
    fill: none;

    &:hover {
        cursor: pointer;
        width: 1.6vw;
        stroke: black;
    }
`;

export const MainImg = styled.img`
    margin-top: 2vh ;
    width: 60%;
    height: 65%;
    
`;

export const BalanceImg = styled(HeartImg)` 
    stroke: #535151;
    stroke-width: 2;
    fill: none;
    width: 1.3vw; 
    top: 4.5em;
    right: 1.8vw;
    &:hover{
        width: 1.4vw;
        stroke: black;
    }
`;

export const StatusBar = styled.div`
    position: absolute;
    top: 1em;
    left:0.3em;
    display: flex;
    flex-direction: column;
`;

export const StatusTop = styled.p`
    margin: 0;
    background-color: gold;
    padding-bottom: 0.3em;
    padding-left: 0.4em;
    padding-right: 0.4em;
    border-radius:8px;
    font-weight: 600;
    font-size: 0.8vw;
    color:white;
`;

export const StatusImg = styled.img`
    margin-top:1em;
    padding-left: 0.5em;
    width: 2.5vw;
`;

export const StatusNew = styled(StatusTop)`
    margin-top: 1em;
    max-width: max-content;
    background-color:black;
    color: white;
`;

export const BtnColor = styled.button<props>`
    background-color: ${(props) => props.bgColor};
    margin-top: 3em;
    margin-left: 1vw;
    border-radius: 50px;
    border: 2px solid ${(props) => props.bgColor};
    width: 1.2vw;
    height: 1.2vw;
    text-align: center;

    &:hover{
        cursor: pointer;
        border: 2px solid blue;
    }
`;

export const DivMemory = styled.div`
  margin: 5px;
  padding-left:6px;
  padding-right:6px;
  padding-top:2px;
  border: 2px solid grey;
  border-radius: 15px;
  outline: none;
  color: grey;
  font-size: 17px;
  font-family: Arial;
  width: max-content;
  min-width: min-content;

  &:hover{
    cursor: pointer;
  }

  &:focus {
    border: 2px solid blue;
  }
`;
export const ContainerDivMemory = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin-top:1vh;
`;





