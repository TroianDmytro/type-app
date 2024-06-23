import styled from 'styled-components';

export const ConteinerInfoWrapper = styled.div`
    display: flex;
    flex-direction: column;
    padding: 1px;
    margin: 1px;
`;

export const ContainerNameProd= styled.p`
    margin: 0;
    text-align: left;
    font-weight: 700;
    font-size: 1.3em;
`;

export const ConteinerResponse = styled.div`
    margin-top:2em;
    display: flex;
    justify-content:top;
`;
export const ImgMess = styled.img`
    padding: 3px;
    width: 1.5em;
`;

export const ResponseStyle = styled.a`
    text-decoration: none;
    color: blue;
    font-size: 1.1em;
    &:hover{
        cursor: pointer;
    }
`;
export const ContainerPrice = styled.div`
    display: flex;
    flex-direction: column;
`;


export const Price = styled(ContainerNameProd)`
    margin-top:5px;
`;

export const OldPrice = styled.span`
    font-size: 0.7em;
    font-weight: 500;
    color: grey;
`;

export const BuyBtn= styled.button`
    width: 90%;
    margin: 10px auto;
    height: 2.5em;
    min-height:max-content ;
    background-color: rgb(52, 101, 247);
    border:2px solid rgb(52, 101, 247);
    font-size: 1.1em;
    font-weight: 800;
    color: white;
    border-radius: 10px;
    &:hover{
        cursor: pointer;
        box-shadow: 0px 3px 6px 0 rgb(52, 101, 247);
    }
`;

