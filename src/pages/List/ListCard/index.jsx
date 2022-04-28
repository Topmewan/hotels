import React from 'react';
import styles from './ListCard.module.scss';
import UiButton from '../../../components/Ui/UiButton';
import { TypographyCard } from '../TypographyCard';

export const ListCard = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.first}></div>

      <div className={styles.second}>
        <h1>Tower Street Apartments</h1>
        <span>500m from center</span>
        <div className={styles.button}>
          <UiButton variant="secondary">Free airport taxi</UiButton>
        </div>
        <TypographyCard
          title="Studio Apartment with Air Conditioning"
          subtitle="Entire studio - 1 bathroom - 21m 1 full bed"
        />
        <TypographyCard
          title="Free cancellation"
          subtitle="You can cancel later,so lock in this great police today!"
          variant="green"
        />
      </div>

      <div className={styles.third}>
        <div className={styles.top}>
          <p>Excellent</p>
          <div className={styles.rating}>8.9</div>
        </div>
        <span>$112</span>
        <span>Includes taxes and fees</span>
        <UiButton variant="primary">See available</UiButton>
      </div>
    </div>
  );
};
