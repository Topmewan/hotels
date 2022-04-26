import styles from './Home.module.scss';
import {Featured} from "../../components/Featured";
import {Row} from "../../components/Row";


export const Home = () => {
  return (
    <div className={styles.home}>
      <div className={styles.list}>
        <Featured/>
        <Featured/>
        <Featured/>
      </div>
      <Row/>
    </div>
  );
};

