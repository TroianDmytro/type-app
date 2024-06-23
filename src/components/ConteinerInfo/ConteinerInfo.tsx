import React, { FC, useState } from 'react';
import {
   ConteinerInfoWrapper, ConteinerResponse, ResponseStyle, ImgMess,
   ContainerNameProd, ContainerPrice, Price, BuyBtn, OldPrice
} from './ConteinerInfo.styled';

interface ConteinerInfoProps {
   name: string;
   price: number;
   oldPrice: number;
   discont:number;
}

const Response = () => {
   return (
      <ConteinerResponse >
         <ImgMess src={"https://cdn.icon-icons.com/icons2/2091/PNG/512/message_icon_128511.png"} alt="" />
         <ResponseStyle href="">Залишити відгук</ResponseStyle>
      </ConteinerResponse>

   );
}


const ConteinerInfo: FC<ConteinerInfoProps> = ({ name, price, oldPrice, discont}) => {
   let oldPriceProd = "";
   let discontProd = "";
   if(discont>0){
      discontProd = "Знижка " + (discont*100).toString() + "%";
      oldPrice = price;
   }

   if(oldPrice){
      oldPriceProd = oldPrice + " грн";
   }

   
   return (
      <ConteinerInfoWrapper>
         <ContainerNameProd>{name}</ContainerNameProd>
         <ContainerPrice>
            <Response />
            <Price>{(price-(price*discont)).toFixed(0)} грн <OldPrice>&nbsp; <s>{oldPriceProd}</s>&nbsp; {discontProd} </OldPrice></Price>

         </ContainerPrice>
         <BuyBtn>Купити</BuyBtn>
      </ConteinerInfoWrapper>
   );
}






export default ConteinerInfo;
