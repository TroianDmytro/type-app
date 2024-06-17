import React from 'react';
import './App.css';
import Card from './components/Card/Card';
import Header from './components/Header/Header';

const products = [
  { title: 'Чехол-сумка для шахмат и нард под заказ (1001rich)', price: 1716, imgUrl:'https://1001rich.com.ua/image/cache/catalog/image/cache/catalog/produkts/Shahy/Chehly/chehol_50-65/chehol_for_shess-700x700.webp' },
  { title: 'Фишки для нард N5, 26мм', price: 1716, imgUrl: 'https://1001rich.com.ua/image/cache/catalog/image/cache/catalog/produkts/Nardy/Fishki/f26005/fishki26005-196x196.webp' },
  { title: 'Фишки для нард N6, 26мм', price: 450, imgUrl: 'https://1001rich.com.ua/image/cache/catalog/image/cache/catalog/produkts/Nardy/Fishki/f26060/fishki-26mm-N6-1-196x196.webp' },
  { title: 'Фишки для нард Корона', price: 2100, imgUrl: 'https://1001rich.com.ua/image/cache/catalog/image/cache/catalog/produkts/Nardy/Nardy-Ta-Decor/td31202/31202-196x196.webp' },
  { title: 'Фишки для нард N1, 30мм', price: 1500, imgUrl: 'https://1001rich.com.ua/image/cache/catalog/image/cache/catalog/produkts/Nardy/Fishki/f30001/fishki-30mm-N1-196x196.webp' },
  { title: 'Фишки для нард в шкатулке (Корона)', price: 2500, imgUrl: 'https://1001rich.com.ua/image/cache/catalog/image/cache/catalog/produkts/Nardy/Fishki/td31053-01/fishki-korona-1-196x196.webp' },
  { title: 'Нарды деревянные резные Элегия (50х46см)', price: 3500, imgUrl: 'https://1001rich.com.ua/image/cache/catalog/image/cache/catalog/produkts/Nardy/NBB/nbb-50021/nardi-50-elegiya-196x196.webp' },
  { title: 'Нарды большие Madon (48х57см)', price: 5000, imgUrl: 'https://1001rich.com.ua/image/cache/catalog/image/cache/catalog/produkts/Nardy/Nardy-Madon/c-181/Nardi-bolshie-BACKGAMMON-large-196x196.webp' },
  { title: 'Нарды деревянные резные Орнамент (50х44см)', price: 4000, imgUrl: 'https://1001rich.com.ua/image/cache/catalog/image/cache/catalog/produkts/Nardy/NKU/nku-0001/nardi-rizbleni-ornament-196x196.webp' },
  { title: 'Нарды деревянные резные Гладиатор (50х46см)', price: 2200, imgUrl: 'https://1001rich.com.ua/image/cache/catalog/image/cache/catalog/produkts/Nardy/NBB/nbb-50017-gladiator/nardi-rizbleni-gladiator-196x196.webp' },
  { title: 'Нарды малые Madon (28x33см)', price: 6000, imgUrl: 'https://1001rich.com.ua/image/cache/catalog/image/cache/catalog/produkts/Nardy/Nardy-Madon/c-182/Nardi-malie-BACKGAMMON%20small-196x196.webp' },
  { title: 'Нарды деревянные резные Элегия N2 (50х46см)', price: 3600, imgUrl: 'https://1001rich.com.ua/image/cache/catalog/image/cache/catalog/produkts/Nardy/NBB/nbb-50022/nardi-50-elegiya-N2-196x196.webp' },
  { title: 'Нарды деревянные резные Тигр (50х46см)', price: 3000, imgUrl: 'https://1001rich.com.ua/image/cache/catalog/image/cache/catalog/produkts/Nardy/NBB/nbb-50019-tizub/nardi-rizni-trizub-196x196.webp' },
  { title: 'Нарди - Скло (Арт Лим)', price: 2500, imgUrl: 'https://1001rich.com.ua/image/cache/catalog/image/cache/catalog/produkts/Nardy/NBB/nbb-50014-tigr/nardi-rizni-tigr-bb-196x196.webp' },
  { title: 'Нарди середні - Класика', price: 2200, imgUrl: 'https://1001rich.com.ua/image/cache/catalog/image/cache/catalog/produkts/Nardy/NBB/nbb-50020-slava-ukr/nardi-rizbleni-slava-geroyam-196x196.webp' },
  { title: 'Дерев\'яні нарди - Ручна робота', price: 4500, imgUrl: 'https://1001rich.com.ua/image/cache/catalog/image/cache/catalog/produkts/Nardy/NBB/nbb-50011-zapor-sich/nardi-ruchnoi-roboti-zaporizhska-sich-196x196.webp' }
];



const App = () => {
  return (<div className="App">
    <Header/>
    <div className='card-conteiner'> 
      {products.map((item, index) => (
      <Card 
        key={index}
        title={item.title}
        price={item.price}
        imgUrl={item.imgUrl}
      />

    ))}</div>
   
  </div>)
}


export default App;
