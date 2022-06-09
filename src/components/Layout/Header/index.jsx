import React, { useContext } from 'react';
import { HeaderContext } from '../../../contexts/HeaderContext';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBed,
  faCalendarDay,
  faCar,
  faPerson,
  faPlane,
  faTaxi,
} from '@fortawesome/free-solid-svg-icons';
import UiButton from '../../Ui/UiButton';
import OptionCounter from '../../../pages/Home/OptionCounter';
import { DateRange } from 'react-date-range';
import { format } from 'date-fns';
import { useLocation } from 'react-router-dom';

import styles from './Header.module.scss';

export const Header = () => {
  const { pathname } = useLocation();

  const {
    status,
    setStatus,
    date,
    setDate,
    options,
    open,
    handleOption,
    handleOpen,
  } = useContext(HeaderContext);

  return (
    <header className={styles.header}>
      <div
        className={`${styles.container} ${pathname !== '/' && styles.clear}`}
      >
        <div className={styles.list}>
          <div
            className={`${styles.item} ${status === 'stays' && styles.active}`}
            onClick={() => setStatus('stays')}
          >
            <FontAwesomeIcon icon={faBed} />
            <span>Stays</span>
          </div>
          <div
            className={`${styles.item} ${
              status === 'flights' && styles.active
            }`}
            onClick={() => setStatus('flights')}
          >
            <FontAwesomeIcon icon={faPlane} />
            <span>Flights</span>
          </div>
          <div
            className={`${styles.item} ${status === 'car' && styles.active}`}
            onClick={() => setStatus('car')}
          >
            <FontAwesomeIcon icon={faCar} />
            <span>Car rentals</span>
          </div>
          <div
            className={`${styles.item} ${
              status === 'attractions' && styles.active
            }`}
            onClick={() => setStatus('attractions')}
          >
            <FontAwesomeIcon icon={faBed} />
            <span>Attractions</span>
          </div>
          <div
            className={`${styles.item} ${status === 'taxi' && styles.active}`}
            onClick={() => setStatus('taxi')}
          >
            <FontAwesomeIcon icon={faTaxi} />
            <span>Airport taxi</span>
          </div>
        </div>

        {pathname === '/' && (
          <>
            <h1 className={styles.title}>
              A lifetime of discounts? It's Genius.
            </h1>
            <p className={styles.desc}>
              Get rewarded for your travels - unlock instant savings of 10% or
              more with a free Booking account
            </p>
            <UiButton variant="primary">Sign in / Register</UiButton>

            <div className={styles.search}>
              <div className={styles.item}>
                <FontAwesomeIcon icon={faBed} className={styles.icon} />
                <input type="text" placeholder="Where are you going?" />
              </div>
              <div className={styles.item}>
                <FontAwesomeIcon icon={faCalendarDay} className={styles.icon} />
                <span onClick={() => handleOpen('date')}>
                  {`${format(date[0].startDate, 'MM/dd/yyyy')}
               to ${format(date[0].endDate, 'MM/dd/yyyy')}`}
                </span>
                {open.date && (
                  <DateRange
                    editableDateInputs={true}
                    onChange={(item) => setDate([item.selection])}
                    moveRangeOnFirstSelection={false}
                    ranges={date}
                    className={styles.date}
                  />
                )}
              </div>
              <div className={styles.item}>
                <FontAwesomeIcon icon={faPerson} className={styles.icon} />
                <span onClick={() => handleOpen('options')}>
                  {`${options.adult} adult 
               ${options.children} children
                 ${options.room} room`}
                </span>
                {open.options && (
                  <div className={styles.options}>
                    <OptionCounter
                      title="adult"
                      count={options.adult}
                      onClick={handleOption}
                    />
                    <OptionCounter
                      title="children"
                      count={options.children}
                      onClick={handleOption}
                    />
                    <OptionCounter
                      title="room"
                      count={options.room}
                      onClick={handleOption}
                    />
                  </div>
                )}
              </div>
              <UiButton variant="primary">Search</UiButton>
            </div>
          </>
        )}
      </div>
    </header>
  );
};
