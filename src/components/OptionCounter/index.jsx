import React from 'react';
import styles from './OptionCounter.module.scss';
import {toUpperFirst} from "../../utils";

const OptionCounter = ({title, count, onClick}) => {

  return (
    <div className={styles.option}>
      <span>{toUpperFirst(title)}</span>
      <div className={styles.operation}>
        <button onClick={() => onClick(title, 'i')}>+</button>
        <span>{count}</span>
        <button disabled={count <= 1} onClick={() => onClick(title, 'd')}>-</button>
      </div>
    </div>
  );
};

export default OptionCounter;