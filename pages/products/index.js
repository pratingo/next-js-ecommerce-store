import { css } from '@emotion/react';
import Image from 'next/image';
import Link from 'next/link';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import Main from '../../components/Main';

export default function Products({ products }) {
  return (
    <div>
      <Header />
      <Main>
        <ul
          css={css`
            list-style: none;
          `}
        >
          {products &&
            products.map((product) => (
              <li
                css={css`
                  padding: 30px;
                `}
                key={`prod-li-${product.id}`}
              >
                <Link href={`/products/${product.id}`}>
                  <a
                    css={css`
                      text-decoration: underline;
                      color: blue;
                      cursor: pointer;
                      padding: 30px;
                    `}
                  >
                    <Image src={product.url} width="150px" height="150px" />
                    <span
                      css={css`
                        padding: 30px;
                      `}
                    >
                      view here
                    </span>
                  </a>
                </Link>
              </li>
            ))}
        </ul>
      </Main>
      <Footer />
    </div>
  );
}

export async function getServerSideProps(context) {
  const { products } = await import('../../util/database');
  // console.log(context.req.cookies.someCookie);
  // console.log(context.req.headers.cookie);
  return {
    props: { products },
  };
}

// const glorifiedUsers = users.map((user) => {
//   return {
//     ...users,
//     following: following.some((id) => {
//       return user.id === id;
//     })
//   }
// })

// return {
//   props: {
//     users: glorifiedUsers
//   }
// }
