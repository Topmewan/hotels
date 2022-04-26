import React, {useState} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faBed,faCalendarDay, faCar, faPerson, faPlane, faTaxi} from "@fortawesome/free-solid-svg-icons";
import UiButton from "../Ui/UiButton";
import { DateRange } from 'react-date-range';
import {format} from "date-fns";

import styles from './Header.module.scss';



const Header = () => {
  const [status, setStatus] = useState('');
  const [openDate,setOpenDate] = useState(false);
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: 'selection'
    }
  ]);

  const  openOrCloseDate = () => {
    setOpenDate(prev => !prev)
  }

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.list}>
          <div className={`${styles.item} ${status === 'stays' && styles.active}`} onClick={() => setStatus('stays')}>
            <FontAwesomeIcon icon={faBed}/>
            <span>Stays</span>
          </div>
          <div className={`${styles.item} ${status === 'flights' && styles.active}`}
               onClick={() => setStatus('flights')}>
            <FontAwesomeIcon icon={faPlane}/>
            <span>Flights</span>
          </div>
          <div className={`${styles.item} ${status === 'car' && styles.active}`} onClick={() => setStatus('car')}>
            <FontAwesomeIcon icon={faCar}/>
            <span>Car rentals</span>
          </div>
          <div className={`${styles.item} ${status === 'attractions' && styles.active}`}
               onClick={() => setStatus('attractions')}>
            <FontAwesomeIcon icon={faBed}/>
            <span>Attractions</span>
          </div>
          <div className={`${styles.item} ${status === 'taxi' && styles.active}`} onClick={() => setStatus('taxi')}>
            <FontAwesomeIcon icon={faTaxi}/>
            <span>Airport taxi</span>
          </div>
        </div>
        <h1 className={styles.title}>A lifetime of discounts? It's Genius.</h1>
        <p className={styles.desc}>
          Get rewarded for your travels - unlock instant savings of 10% or more with a free Booking account
        </p>
        <UiButton variant='primary'>
          Sign in / Register
        </UiButton>

        <div className={styles.search}>
          <div className={styles.item}>
            <FontAwesomeIcon icon={faBed} className={styles.icon}/>
            <input
              type="text"
              placeholder='Where are you going?'
            />
          </div>
          <div className={styles.item}>
            <FontAwesomeIcon icon={faCalendarDay} className={styles.icon}/>
            <span onClick={openOrCloseDate} className={styles.text}>{`${format(
              date[0].startDate, 'MM/dd/yyyy'
            )} to ${format(date[0].endDate, 'MM/dd/yyyy')} `}</span>
            {openDate && <DateRange
              editableDateInputs={true}
              onChange={item => setDate([item.selection])}
              moveRangeOnFirstSelection={false}
              ranges={date}
              className={styles.date}
            />}
          </div>
          <div className={styles.item}>
            <FontAwesomeIcon icon={faPerson} className={styles.icon}/>
            <span className={styles.text}>2 adults 2 children</span>

          </div>

          <UiButton variant='primary'>Search</UiButton>


        </div>
      </div>

    </header>
  );
};

export default Header;