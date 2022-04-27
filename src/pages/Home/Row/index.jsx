import React from 'react';
import {Card} from "./Card";
import styles from './Row.module.scss';

export const Row = ({data, title}) => {
  return (
    <div className={styles.wrapper}>
      <h1>{title}</h1>
      <span>Beautiful places for awesome weekend</span>
      <div className={styles.row}>
        {data.map((item, index) => {
          return <Card
            key={index + 1}
            img={item.img}
            title={item.title}
            count={item.count}
          />
        })}
      </div>
    </div>
  );
};

