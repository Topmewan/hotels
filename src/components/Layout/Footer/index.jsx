import React from 'react';
import styles from './Footer.module.scss';
import {Contact} from "../../Contact";

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <Contact/>

    </footer>
  );
};

