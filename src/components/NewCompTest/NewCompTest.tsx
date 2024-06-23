import React, { FC, useState, useRef, useEffect } from 'react';
import {
   MainDiv, ContainerImg, DivMemory, ContainerDivMemory,
   MainImg, HeartImg, BalanceImg, StatusBar, StatusTop,
   StatusImg, StatusNew, BtnColor
} from './NewCompTest.styled';
import ConteinerInfo from '../ConteinerInfo/ConteinerInfo';


interface NewCompTestProps {
   imgList: Image[];
   items: Prod[];
}
const HeartIcon = () => (
   <HeartImg
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
   >
      <path
         d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41 0.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
      />
   </HeartImg>
);
const BalanceIcon = () => (
   <BalanceImg
      viewBox="0 0 21 21"
      xmlns="http://www.w3.org/2000/svg"
   >
      <path d="M17.8636 5.63423L18.6907 8.66665L16.761 8.66665L17.8636 5.63423Z" ></path>
      <path d="M2.53039 12.9676L3.35742 16H1.4277L2.53039 12.9676Z" ></path>
      <path d="M1.33325 9.66669L17.9999 1.66669" ></path>
      <path d="M10 4.33337V19.6667" ></path>
      <path d="M4 19.6667H15.3333" ></path>
   </BalanceImg>
);

interface Image {
   color: string;
   colorName: string;
   src: string;
}

// Тип для пропсів
interface ButtonListProps {
   items: Image[];
   onImageClick: (image: string) => void;
   onColorName: (colorName: string) => void;
}

// Функціональний компонент
const ButtonList: React.FC<ButtonListProps> = ({ items, onImageClick, onColorName }) => {
   return (
      <div>
         {items.map((item, index) => (
            <BtnColor key={index} onClick={() => { onImageClick(item.src); onColorName(item.colorName); }} bgColor={item.color}></BtnColor>
         ))}
      </div>
   );
};

interface Prod {
   memory: string;
   price: number;
   oldPrice: number;
   discont: number;
}

interface MemoryChoiceProps {
   items: Prod[];
   onSetPrice: (price: number) => void;
}

const MemoryChoice: React.FC<MemoryChoiceProps> = ({ items, onSetPrice }) => {
   const [focusedIndex, setFocusedIndex] = useState<number>(0);
   const divRefs = useRef<(HTMLDivElement | null)[]>([]);

   useEffect(() => {
      if (divRefs.current[focusedIndex]) {
         divRefs.current[focusedIndex]!.focus();
         onSetPrice(focusedIndex);
      }
   }, [focusedIndex, onSetPrice]);

   const handleBlur = () => {
      setTimeout(() => {
         if (divRefs.current[focusedIndex] !== document.activeElement) {
            divRefs.current[focusedIndex]?.focus();
         }
      }, 0);
   };

   return (
      <ContainerDivMemory>
         {items.map((item, index) => (
            <DivMemory
               key={index}
               ref={(el) => (divRefs.current[index] = el)}
               tabIndex={0}
               onClick={() => setFocusedIndex(index)}
               onBlur={handleBlur}
            >
               {item.memory}
            </DivMemory>
         ))}
      </ContainerDivMemory>
   );
};

const NewCompTest: FC<NewCompTestProps> = ({ items, imgList }) => {
   const [selectImg, setSelectImg] = useState<string>(imgList[0].src);
   const [selectedPrice, setSelectedPrice] = useState<number>(items[0].price);
   const [selectedOldPrice, setSelectedOldPrice] = useState<number>(items[0].oldPrice);
   const [selectedMemory, setSelectedMemory] = useState<string>(items[0].memory);
   const [colorProd, setColorProd] = useState<string>(imgList[0].colorName)

   const handleSetPrice = (price: number) => {
      setSelectedPrice(items[price].price);
      setSelectedOldPrice(items[price].oldPrice);
      setSelectedMemory(items[price].memory.toString());
   }

   const handleClick = (image: string) => {
      setSelectImg(image);
   }
   const handleColor = (colorName: string) => {
      setColorProd(colorName);
   }
   return (<MainDiv>
      <ContainerImg>
         <StatusBar>
            <StatusTop>Топ продажу</StatusTop>
            <StatusImg src="https://www.istore.ua/upload/iblock/374/xek8is9ql6g83jqo02r5s6ey2vwc9n27/50e50.png" alt="" />
            <StatusNew>Новинка</StatusNew>
         </StatusBar>
         <MainImg src={selectImg}></MainImg>
         <HeartIcon />
         <BalanceIcon />
         <ButtonList items={imgList} onImageClick={handleClick} onColorName={handleColor} />
         <MemoryChoice items={items} onSetPrice={handleSetPrice} />
      </ContainerImg>
      <ConteinerInfo 
         name={'Apple iPhone 15 Pro ' + selectedMemory + " " + colorProd + ' Titanium eSIM MTQP3'}
         price={selectedPrice} 
         oldPrice={selectedOldPrice} 
         discont={items[0].discont} />
   </MainDiv>);
}

export default NewCompTest;
