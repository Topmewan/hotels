import styles from './Home.module.scss';
import {Featured} from "../../components/Featured";
import {Row} from "../../components/Row";
import {russia} from "../../utils/data/mock.data";


export const Home = () => {
  return (
    <div className={styles.home}>
      <div className={styles.list}>
        <Featured/>
        <Featured/>
        <Featured/>
      </div>
      <Row data={russia} title='Russia today'/>
      <Row data={russia} title='Russia today'/>

    </div>
  );
};

