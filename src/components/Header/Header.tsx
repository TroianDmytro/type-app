import React, { FC } from 'react';
import styles from './Header.module.css';
import imgLogo from '../../img/square.png';
import burger from '../../img/menu (1).png';


interface HeaderProps { }

const Header: FC<HeaderProps> = () => (
  <div className={styles.Header}>
    <div className={styles.LeftMenu}>
      <img src={imgLogo} alt="" className={styles.Square} />
      <img src={burger} alt="" />
      <p className={styles.HeaderP}><a href="#">Сравнение товаров(0)</a></p>
    </div>
    <div className={styles.RightMenu}>
      <input type="number" min={1} placeholder={'По умолчанию'}/>
      <input type="number" min={16} max={32} placeholder={"16"} />
    </div>
  </div>
);

export default Header;
