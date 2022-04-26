import styles from './Featured.module.scss';


export const Featured = () => {
  return (
    <div className={styles.featured}>
      <div className={styles.top}>
        <img src="https://cf.bstatic.com/xdata/images/city/max500/957801.webp?k=a969e39bcd40cdcc21786ba92826063e3cb09bf307bcfeac2aa392b838e9b7a5&o=" alt=""/>
      </div>
      <div className={styles.body}>
        <h1>Dublin</h1>
        <h2>123 Properties</h2>
      </div>
    </div>
  );
};

