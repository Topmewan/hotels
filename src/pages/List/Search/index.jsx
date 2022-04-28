import React, { useState } from 'react';
import styles from './Search.module.scss';
import UiButton from '../../../components/Ui/UiButton';
import { DateRange } from 'react-date-range';
import { format } from 'date-fns';

export const Search = () => {
  const [hotelsDate, setHotelsDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: 'selection',
    },
  ]);

  const [open, setOpen] = useState(false);

  return (
    <div className={styles.wrapper}>
      <h1>Search</h1>
      <form className={styles.form}>
        <div className={styles.input}>
          <label>Destination</label>
          <input type="text" placeholder="italy" />
        </div>
        <div className={styles.input}>
          <label>Check-in date</label>
          <p onClick={() => setOpen((prev) => !prev)}>
            {`${format(hotelsDate[0].startDate, 'MM/dd/yyyy')}
               to ${format(hotelsDate[0].endDate, 'MM/dd/yyyy')}`}
          </p>
          {open && (
            <DateRange
              editableDateInputs={true}
              onChange={(item) => setHotelsDate([item.selection])}
              moveRangeOnFirstSelection={false}
              ranges={hotelsDate}
              className={styles.date}
            />
          )}
        </div>

        <span>Options</span>
        <div className={styles.opt}>
          <div className={styles.item}>
            <label>Min price</label>
            <input type="text" />
          </div>
          <div className={styles.item}>
            <label>Max price</label>
            <input type="text" />
          </div>
          <div className={styles.item}>
            <label>Adult</label>
            <input type="text" />
          </div>
          <div className={styles.item}>
            <label>Children</label>
            <input type="text" />
          </div>
          <div className={styles.item}>
            <label>Room</label>
            <input type="text" />
          </div>
        </div>
        <UiButton variant="primary">Search</UiButton>
      </form>
    </div>
  );
};
