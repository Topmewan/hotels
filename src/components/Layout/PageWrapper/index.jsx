import React from 'react';
import styles from './PageWrapper.module.scss';

export const PageWrapper = ({children}) => {
  return (
    <section className={styles.page}>
      {children}
    </section>
  );
};

