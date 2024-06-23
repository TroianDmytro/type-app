import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';
import NewCompTest from './components/NewCompTest/NewCompTest';

const imgs = [
  {
    color: "#e5dfb6",
    colorName: "Natural",
    src: "https://www.istore.ua/upload/iblock/9b9/m1kmgez4ctnxf3616hfyxh2yy0p3llqt/15_pro_natur_titan_4_is-kopiya.png",
  },
  {
    color: "#69644b",
    colorName: "Black",
    src: "https://www.istore.ua/upload/iblock/a05/br6j4rs1bvkloa4mddjlhz1hfe1fq5yx/15_pro_black_titan_4_is-kopiya.png",
  },
  {
    color: "white",
    colorName: "White",
    src: "https://www.istore.ua/upload/iblock/bff/hhh8rnw566jpy3wyt621j2a2379fqcd9/15_pro_white_titan_4_is-kopiya.png",
  },
  {
    color: "#2c4644",
    colorName: "Blue",
    src: "https://www.istore.ua/upload/iblock/081/mazfbiodrb5q0h26dkd55afvu3n38nmu/15_pro_blu_titan_4_is-kopiya.png",
  }
];
const memoryList = [
  { memory: "128 Гб", price: 39699.00, oldPrice: 68999.00, discont: 0 },
  { memory: "256 Гб", price: 43799.00, oldPrice: 68999.00, discont: 0 },
  { memory: "512 Гб", price: 54299.00, oldPrice: 68999.00, discont: 0 },
  { memory: "1 Тб", price: 60499.00, oldPrice: 68999.00, discont: 0 }
]

const newMemoryList = memoryList.map(prod =>{
  return ({ ...prod ,discont:0.2})
});

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <NewCompTest items={memoryList} imgList={imgs} />
    <NewCompTest items={newMemoryList} imgList={imgs} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
