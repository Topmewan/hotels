import React from 'react';
import { Search } from './Search';

import styles from './List.module.scss';
import { ListCard } from './ListCard';

export const List = () => {
  return (
    <div className={styles.wrapper}>
      <Search />
      <div className={styles.list}>
        <ListCard />
        <ListCard />
        <ListCard />
      </div>
    </div>
  );
};
