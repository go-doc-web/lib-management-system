import { Link } from 'react-router-dom';
import clsx from 'clsx';
import styles from './NotFound.module.css';

const NotFoundPage = () => {
  return (
    <div className={clsx('container', styles.root)}>
      <div>
        <h1 className={styles.title}>Error 4😕4 :)</h1>
        <p className={styles.descr}>
          Page not found,you can go back to <Link to="/">Home Page</Link>
        </p>
      </div>
    </div>
  );
};

export default NotFoundPage;
