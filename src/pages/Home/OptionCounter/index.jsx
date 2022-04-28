import React from 'react';
import styles from './OptionCounter.module.scss';
import { toUpperFirst } from '../../../utils/heplers/string.heplers';

const OptionCounter = ({ title, count, onClick }) => {
  return (
    <div className={styles.option}>
      <span>{toUpperFirst(title)}</span>
      <div className={styles.operation}>
        <button disabled={count >= 9} onClick={() => onClick(title, 'i')}>
          +
        </button>
        <div className={styles.count}>{count}</div>
        <button disabled={count <= 1} onClick={() => onClick(title, 'd')}>
          -
        </button>
      </div>
    </div>
  );
};

export default OptionCounter;
