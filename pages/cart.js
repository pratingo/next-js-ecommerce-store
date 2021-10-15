// import { css } from '@emotion/react';
import Link from 'next/link';
import Main from '../components/Main';

// const style = css`
//   a {
//     text-decoration: underline;
//   }
// `;

export default function Cart() {
  return (
    <div>
      <Main>
        <h2>Shopping Cart</h2>
        <button>
          <Link href="/checkout">
            <a>Buy now</a>
          </Link>
        </button>
      </Main>
    </div>
  );
}

export async function getServerSideProps() {
  const { getParsedCookie } = await import('../util/cookies.js');
  const shoppingCartCookie = await getParsedCookie('cart');
  console.log('shoppingCartCookie', shoppingCartCookie);

  return {
    props: {},
  };
}
