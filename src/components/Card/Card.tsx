import React, { FC } from 'react';
import styles from './Card.module.css';

interface CardProps {
  title:string;
  price:number;
  imgUrl:string;
}

const Card: FC<CardProps> = ({title,price,imgUrl}) => (
  <div className={styles.Card}>
    <img src={imgUrl} alt="img" />
    <p className={styles.Price}><span>{price}</span> грн</p>
    <p className={styles.Reiting}>☆☆☆☆☆</p>
    <p>{title}</p>
    
    <button className={styles.Btn_buy}>Купити</button>
  </div>
);

export default Card;
