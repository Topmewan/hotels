import React from 'react';
import styles from './Contact.module.scss';
import UiButton from '../../../Ui/UiButton';

export const Contact = () => {
  return (
    <section className={styles.contact}>
      <div className={styles.container}>
        <h1>Save time, save money!</h1>
        <span>Sign up and we'll send the best deals to you</span>
        <form>
          <div className={styles.subscribe}>
            <input type="text" placeholder="You email" />
            <UiButton variant="primary" type="submit">
              Subscribe
            </UiButton>
          </div>
        </form>
      </div>
    </section>
  );
};
