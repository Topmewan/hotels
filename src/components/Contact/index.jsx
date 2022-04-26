import React from 'react';
import styles from './Contact.module.scss';
import UiButton from "../Ui/UiButton";

export const Contact = () => {
  return (
    <section className={styles.contact}>
      <div className={styles.container}>
        <h1>Сэкономьте время и деньги!</h1>
        <span>Подпишитесь? и мы вышлем вам лучшее предложение</span>
        <form>
          <div className={styles.subscribe}>
            <input type="text" placeholder='Ваш электронный адрес'/>
            <UiButton variant='primary' type='submit'>Subscribe</UiButton>
          </div>
        </form>
      </div>
    </section>
  );
};

