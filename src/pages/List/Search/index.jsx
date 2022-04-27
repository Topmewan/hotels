import React from 'react';
import styles from './Search.module.scss';
import UiButton from "../../../components/Ui/UiButton";


export const Search = () => {
  return (
    <div className={styles.wrapper}>
      <h1>Search</h1>
      <form className={styles.form}>
        <div className={styles.input}>
          <label>Destination</label>
          <input type="text" placeholder='italy'/>
        </div>
        <div className={styles.input}>
          <label>Check-in date</label>
          <input type="text"/>
        </div>

        <span>Options</span>
        <div className={styles.opt}>
          <div className={styles.item}>
            <label>Min price</label>
            <input type="text"/>
          </div>
          <div className={styles.item}>
            <label>Max price</label>
            <input type="text"/>
          </div>
          <div className={styles.item}>
            <label>Adult</label>
            <input type="text"/>
          </div>
          <div className={styles.item}>
            <label>Children</label>
            <input type="text"/>
          </div>
          <div className={styles.item}>
            <label>Room</label>
            <input type="text"/>
          </div>
        </div>
        <UiButton variant='primary'>
          Search
        </UiButton>
      </form>

    </div>
  );
};

