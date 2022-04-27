import React from 'react';
import styles from './TypographyCard.module.scss';


export const TypographyCard  = ({title,subtitle,variant}) => {
  return (
    <div className={`${styles.wrapper} ${variant === 'green' && styles.green}`}>
      <p>{title}</p>
      <span>{subtitle}</span>
    </div>
  );
};

