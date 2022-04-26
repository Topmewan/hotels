import React from 'react';
import styles from './UiButton.module.scss';

const UiButton = ({children,variant,...props}) => {

  return (
    <button
      {...props}
      className={`${styles.default} ${variant ==='primary' ? styles.primary : ''}`}>
      {children}
    </button>
  );
};

export default UiButton;