import React from 'react';
import styles from './Card.module.scss';

export const Card = () => {
  return (
    <div className={styles.card}>
      <div className={styles.top}>
        <img
          src="https://t-cf.bstatic.com/xdata/images/city/square250/620007.webp?k=81c19278d6f90dba7bed49c2d850dcb015809c8d08699188cb6acdab8143799e&o="
          alt=""/>
      </div>
      <div className={styles.footer}>
        <h1>Saint Petersburg</h1>
        <span>11567 Варианта размещения</span>
      </div>
    </div>
  );
};

