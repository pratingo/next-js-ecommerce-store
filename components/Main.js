import { css } from '@emotion/react';
import Image from 'next/image';
import styles from '../styles/Home.module.css';

export default function Main(props) {
  return (
    <main className={styles.main}>
      <div
        css={css`
          z-index: -1;
        `}
      >
        <Image
          src="/cloud.jpg"
          alt="cloud"
          layout="fill"
          css={css`
            opacity: 0.5;
          `}
        />
      </div>
      {props.children}
    </main>
  );
}
