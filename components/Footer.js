import Image from 'next/image';
import styles from '../styles/Home.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      www.umbrella-shop.com{' '}
      <span className={styles.logo}>
        <Image src="/favicon.png" alt="favicon logo" width={16} height={16} />
      </span>
    </footer>
  );
}
