import styles from './Amount.module.scss';
import UiButton from '../../../components/Ui/UiButton';

export const Amount = () => {
  return (
    <div className={styles.amount}>
      <h2>Perfect for a 9-night stay!</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, a.
        Deleniti non odit nobis, dolores at adipisci eius modi doloremque.
      </p>
      <h3 className={styles.price}>
        <b>$945</b> (9 nights)
      </h3>
      <UiButton variant="primary">Reserve or Book Now!</UiButton>
    </div>
  );
};
