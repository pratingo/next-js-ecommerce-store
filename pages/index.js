import { css } from '@emotion/react';
import Image from 'next/image';
import Main from '../components/Main';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div>
      <Main>
        <h1 className={styles.title}>Umbrella Shop</h1>

        <div
          height="800px"
          css={css`
            padding: 50px;
            border-radius: 50px;
          `}
        >
          <Image
            src="/silhouette.png"
            alt="silhouette"
            width="500px"
            height="500px"
            css={css`
              padding: 50px;
              @keyframes rotation {
                from {
                  transform: rotateZ(0deg);
                }
                to {
                  transform: rotateZ(359deg);
                }
              }
              animation: rotation 6s infinite linear;
              animation-timing-function: ease-ease-in-out;
            `}
          />
        </div>
      </Main>
    </div>
  );
}
