import { css } from '@emotion/react';
import Image from 'next/image';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Main from '../components/Main';
import styles from '../styles/Home.module.css';

const rotate = css`
  @keyframes rotation {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(359deg);
    }
  }
`;

export default function Home() {
  return (
    <div>
      <Header />
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
              animation: rotation 5s infinite linear;
              animation-timing-function: ease-in;
            `}
            className={rotate}
          />
        </div>
      </Main>
      <Footer />
    </div>
  );
}
