import React from 'react';
import styles from './UiButton.module.scss';

const UiButton = ({children,variant}) => {

  return (
    <button className={`${styles.default} ${variant ==='primary' ? styles.primary : ''}`}>
      {children}
    </button>
  );
};

export default UiButton;