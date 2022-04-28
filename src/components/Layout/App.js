import styles from './App.module.scss';
import Navbar from './Navbar';
import { Header } from './Header';
import AppRoutes from '../routes/AppRoutes';
import { Footer } from './Footer';
import { PageWrapper } from './PageWrapper';

export const App = () => {
  return (
    <div className={styles.wrapper}>
      <Navbar />
      <Header />
      <PageWrapper>
        <AppRoutes />
      </PageWrapper>
      <Footer />
    </div>
  );
};
