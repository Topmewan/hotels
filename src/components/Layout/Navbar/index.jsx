import React from 'react';
import { Link } from 'react-router-dom';
import UiButton from '../../Ui/UiButton';
import styles from './Navbar.module.scss';

const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <div className={styles.container}>
        <Link to="/">
          <span>Booking</span>
        </Link>
        <Link to="/hotels">
          <span>Hotels</span>
        </Link>
        {/* <div className={styles.buttons}>
          <UiButton>Register</UiButton>
          <UiButton>Login</UiButton>
        </div> */}
      </div>
    </div>
  );
};

export default Navbar;
