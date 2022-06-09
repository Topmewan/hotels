import styles from './Slider.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faXmark,
  faChevronLeft,
  faChevronRight,
} from '@fortawesome/free-solid-svg-icons';

export const Slider = (props) => {
  const { isOpen, onClose, handleMove, index, photos } = props;
  return (
    <div
      className={`${styles.slider} ${isOpen && styles.active}`}
      onClick={onClose}
    >
      <div className={styles.image} onClick={(e) => e.stopPropagation()}>
        <button className={`${styles.action} ${styles.left}`}>
          <FontAwesomeIcon
            onClick={() => handleMove('l')}
            icon={faChevronLeft}
          />
        </button>
        <button className={`${styles.action} ${styles.right}`}>
          <FontAwesomeIcon
            onClick={() => handleMove('r')}
            icon={faChevronRight}
          />
        </button>

        <img src={photos[index]?.src} alt="" />
      </div>
    </div>
  );
};
