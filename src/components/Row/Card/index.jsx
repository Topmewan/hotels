import React from 'react';
import styles from './Card.module.scss';

export const Card = ({img,title,count}) => {
  return (
    <div className={styles.card}>
      <div className={styles.top}>
        <img
          src={img}
          alt={title}/>
      </div>
      <div className={styles.footer}>
        <h1>{title}</h1>
        <span>{count} Варианта размещения</span>
      </div>
    </div>
  );
};

