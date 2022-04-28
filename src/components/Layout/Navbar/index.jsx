import React from 'react';
import styles from './Navbar.module.scss';
import UiButton from '../../Ui/UiButton';

const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <div className={styles.container}>
        <span>Booking</span>
        <div className={styles.buttons}>
          <UiButton>Register</UiButton>
          <UiButton>Login</UiButton>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
