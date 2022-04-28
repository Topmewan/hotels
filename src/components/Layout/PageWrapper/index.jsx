import React from 'react';
import styles from './PageWrapper.module.scss';
import { useLocation } from 'react-router-dom';

export const PageWrapper = ({ children }) => {
  const { pathname } = useLocation();

  return (
    <section className={`${styles.home} ${pathname !== '/' && styles.page}`}>
      {children}
    </section>
  );
};
