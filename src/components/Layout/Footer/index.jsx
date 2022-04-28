import React from 'react';
import styles from './Footer.module.scss';
import { Contact } from './Contact';

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <Contact />
      <div className={styles.bottom}>
        <span>Copyright © 2022 Den'ka Booking™. Все права защищены.</span>
        <span>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. A adipisci
          assumenda atque, autem dicta error est fuga harum maiores nemo, neque
          quibusdam sapiente sunt, tenetur totam? Cum eum quam quidem!
        </span>
      </div>
    </footer>
  );
};
